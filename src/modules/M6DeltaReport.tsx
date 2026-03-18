// ── M6 Delta Report — pipeline module version ────────────────────────────────
// Receives results directly from M4 (no file upload needed).
// Exports a 5-sheet XLSX:
//   1. Hospital Mapping      — all items: hospital code → Eden code
//   2. New Proposed Codes    — isProposed items awaiting master-list addition
//   3. Updated Master [Cat]  — one sheet per category with new codes appended
//   4. Delta vs Last Run     — change diff against saved baseline
//   5. Domain Summary        — breakdown by category
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const CLR = { grad: "linear-gradient(135deg,#1e1b4b,#4338ca)", accent: "#4338ca", accentDark: "#1e1b4b", bg: "#eef2ff", border: "#a5b4fc" };
const LS_KEY = "m6_last_run";

function detectCols(rows: any[]) {
  if (!rows.length) return { code: "", name: "", tier: "", conf: "", cat: "" };
  const k = Object.keys(rows[0]);
  const f = (ps: string[]) => k.find(x => ps.some(p => x.toLowerCase().includes(p))) || "";
  return {
    code: f(["eden code","edencode","eden care code","code"]),
    name: f(["eden name","edenname","eden care name","name"]),
    tier: f(["tier"]),
    conf: f(["confidence"]),
    cat:  f(["category","cat"]),
  };
}

function computeDelta(current: any[], previous: any[], cols: ReturnType<typeof detectCols>) {
  const prevMap = new Map(previous.map(r => [r[cols.code] || r["Eden Code"] || r["Eden Care Code"] || "", r]));
  const currMap = new Map(current.map(r => [r[cols.code] || r["Eden Code"] || r["Eden Care Code"] || "", r]));
  const added: any[] = [], removed: any[] = [], changed: any[] = [], unchanged: any[] = [];
  current.forEach(row => {
    const key = row[cols.code] || row["Eden Code"] || row["Eden Care Code"] || "";
    const prev = prevMap.get(key);
    if (!prev) { added.push(row); return; }
    const pc = Number(prev[cols.conf] || prev["Confidence %"] || 0);
    const cc = Number(row[cols.conf]  || row["Confidence %"]  || 0);
    if (Math.abs(cc - pc) >= 5 || (prev[cols.tier] || prev["Tier"]) !== (row[cols.tier] || row["Tier"])) {
      changed.push({ ...row, _prevConf: pc, _currConf: cc, _prevTier: prev[cols.tier] || prev["Tier"] });
    } else { unchanged.push(row); }
  });
  previous.forEach(r => { if (!currMap.has(r[cols.code] || r["Eden Code"] || r["Eden Care Code"] || "")) removed.push(r); });
  return { added, removed, changed, unchanged };
}

function computeDomains(rows: any[], cols: ReturnType<typeof detectCols>) {
  const map: Record<string, { auto: number; staging: number; new: number; totalConf: number; count: number }> = {};
  rows.forEach(r => {
    const cat  = r[cols.cat]  || r["Category"] || r["Eden Care Category"] || "Unknown";
    const tier = (r[cols.tier] || r["Tier"] || "").toLowerCase();
    const conf = Number(r[cols.conf] || r["Confidence %"] || 0);
    if (!map[cat]) map[cat] = { auto: 0, staging: 0, new: 0, totalConf: 0, count: 0 };
    if (tier === "auto") map[cat].auto++;
    else if (tier === "staging") map[cat].staging++;
    else map[cat].new++;
    map[cat].totalConf += conf; map[cat].count++;
  });
  return Object.entries(map).map(([cat, v]) => ({ cat, ...v, total: v.count, avgConf: v.count ? Math.round(v.totalConf / v.count) : 0 }));
}

function TierBadge({ tier }: { tier: string }) {
  const t = (tier || "").toLowerCase();
  const c = t === "auto" ? { bg: "#dcfce7", c: "#16a34a", l: "✅ AUTO" } : t === "staging" ? { bg: "#fef9c3", c: "#b45309", l: "⚠️ STAGING" } : { bg: "#eff6ff", c: "#2563eb", l: "✨ NEW" };
  return <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: c.bg, color: c.c }}>{c.l}</span>;
}

export default function DeltaReport({
  onComplete,
  prefillData,
}: {
  onComplete?: () => void;
  prefillData?: {
    results?: any[];
    hospitalName?: string;
    masterCatalogs?: Record<string, any[]>;
    masterDNAs?: any;
    preMatched?: any[];    // from M0 Pre-Scan
  } | null;
} = {}) {
  const [activeTab, setTab]       = useState<"mapping" | "newcodes" | "runvrun" | "vsmaster">("mapping");
  const [currentRows, setCurrent] = useState<any[]>([]);
  const [previousRows, setPrev]   = useState<any[]>([]);
  const [currLabel, setCurrLabel] = useState("");
  const [delta, setDelta]         = useState<ReturnType<typeof computeDelta> | null>(null);
  const [domains, setDomains]     = useState<ReturnType<typeof computeDomains>>([]);
  const [cols, setCols]           = useState<ReturnType<typeof detectCols>>({ code: "", name: "", tier: "", conf: "", cat: "" });
  const [masterCatalogs, setMasterCatalogs] = useState<Record<string, any[]>>({});
  const [preMatched, setPreMatched]         = useState<any[]>([]);

  // Auto-load when M4 results flow in from the pipeline
  useEffect(() => {
    if (!prefillData?.results?.length) return;

    // Normalise M4 results to a flat display shape
    const m4Rows = (prefillData.results || []).map((r: any) => ({
      "Hospital Code":     r.akaCode     || "",
      "Hospital Name":     r.akaName     || "",
      "Hospital Category": r.akaCategory || "",
      "Eden Code":         (r.edenCode   || "").replace("Proposed: ", ""),
      "Eden Name":         r.edenName    || "",
      "Category":          r.edenCategory || r.akaCategory || "",
      "Confidence %":      r.confidence  ?? "",
      "Tier":              r.tier        || "",
      "Status":            r._status     || "",
      "Is New Code":       r.isProposed  ? "Yes" : "No",
      "Subsection":        r.subsectionName || "",
      "Reason":            r.reason      || "",
      // carry through raw fields for export logic
      _isProposed:         r.isProposed,
      _status:             r._status,
      _edenCategory:       r.edenCategory,
      _subsectionKey:      r.subsectionKey,
    }));

    // Combine M0 pre-matched + M4 pipeline results for the full mapping
    const pm = (prefillData.preMatched || []).map((r: any) => ({
      "Hospital Code":     r.akaCode     || "",
      "Hospital Name":     r.akaName     || "",
      "Hospital Category": r.akaCategory || "",
      "Eden Code":         r.edenCode    || "",
      "Eden Name":         r.edenName    || "",
      "Category":          r.edenCategory || "",
      "Confidence %":      r.confidence  ?? "",
      "Tier":              "auto",
      "Status":            "approved",
      "Is New Code":       "No",
      "Subsection":        "",
      "Reason":            r.reason || "M0 catalog scan",
      _isProposed:         false,
      _status:             "approved",
      _edenCategory:       r.edenCategory,
      _subsectionKey:      "",
    }));

    const allRows = [...pm, ...m4Rows];
    const label = prefillData.hospitalName ? `M4 output — ${prefillData.hospitalName}` : "M4 pipeline output";
    const saved = localStorage.getItem(LS_KEY);
    const prev: any[] = saved ? (() => { try { return JSON.parse(saved); } catch { return []; } })() : [];

    setCurrent(allRows);
    setPrev(prev);
    setCurrLabel(label);
    if (prefillData.masterCatalogs) setMasterCatalogs(prefillData.masterCatalogs);
    if (prefillData.preMatched?.length) setPreMatched(prefillData.preMatched);

    const c = detectCols(allRows.length ? allRows : prev);
    setCols(c);
    setDelta(computeDelta(allRows, prev, c));
    setDomains(computeDomains(allRows, c));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefillData]);

  const newCodeRows = currentRows.filter(r => r._isProposed || r["Is New Code"] === "Yes");

  function exportReport() {
    if (!currentRows.length) return;
    const wb = XLSX.utils.book_new();

    // ── Sheet 1: Full Hospital Mapping ────────────────────────────────────────
    const mappingSheet = currentRows.map(r => ({
      "Hospital Code":     r["Hospital Code"],
      "Hospital Name":     r["Hospital Name"],
      "Hospital Category": r["Hospital Category"],
      "Eden Code":         r["Eden Code"],
      "Eden Name":         r["Eden Name"],
      "Eden Category":     r["Category"],
      "Confidence %":      r["Confidence %"],
      "Tier":              r["Tier"],
      "Status":            r["Status"],
      "Is New Code":       r["Is New Code"],
      "Subsection":        r["Subsection"],
      "Reason":            r["Reason"],
    }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(mappingSheet), "Hospital Mapping");

    // ── Sheet 2: New Proposed Codes ──────────────────────────────────────────
    const newSheet = newCodeRows.map(r => ({
      "Proposed Eden Code": r["Eden Code"],
      "Eden Name":          r["Eden Name"],
      "Eden Category":      r["Category"] || r._edenCategory || "",
      "Subsection":         r["Subsection"] || r._subsectionKey || "",
      "Status":             r["Status"],
      "Source Hospital Code": r["Hospital Code"],
      "Source Hospital Name": r["Hospital Name"],
    }));
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(newSheet.length ? newSheet : [{ Note: "No new codes proposed in this run" }]),
      "New Proposed Codes"
    );

    // ── Sheets 3+: Updated master catalog per category ────────────────────────
    const approvedNew = currentRows.filter(r =>
      (r._isProposed || r["Is New Code"] === "Yes") && r._status === "approved"
    );
    Object.entries(masterCatalogs).forEach(([cat, baseRows]) => {
      const catNew = approvedNew.filter(r => (r._edenCategory || r["Category"]) === cat);
      const updatedRows = [
        ...(baseRows as any[]),
        ...catNew.map(r => ({
          Code:        r["Eden Code"],
          Name:        r["Eden Name"],
          Category:    cat,
          Description: r["Reason"] || "",
          Source_Code: r["Hospital Code"],
        })),
      ];
      // Sheet name max 31 chars, Excel-safe
      const sheetName = ("Master_" + cat.replace(/[^A-Za-z0-9]/g, "_")).slice(0, 31);
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(updatedRows), sheetName);
    });

    // ── Sheet: Delta vs Last Run ──────────────────────────────────────────────
    if (delta) {
      const mkRow = (r: any, status: string) => ({
        "Status":       status,
        "Eden Code":    r[cols.code] || r["Eden Code"] || "",
        "Eden Name":    r[cols.name] || r["Eden Name"] || "",
        "Category":     r[cols.cat]  || r["Category"]  || "",
        "Tier":         r[cols.tier] || r["Tier"] || "",
        "Confidence %": r[cols.conf] || r["Confidence %"] || "",
        "Prev Conf":    r._prevConf ?? "",
        "Prev Tier":    r._prevTier ?? "",
      });
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([
        ...delta.added.map(r    => mkRow(r, "➕ Added")),
        ...delta.removed.map(r  => mkRow(r, "➖ Removed")),
        ...delta.changed.map(r  => mkRow(r, "🔄 Changed")),
        ...delta.unchanged.map(r => mkRow(r, "✓ Unchanged")),
      ]), "Delta vs Last Run");
    }

    // ── Sheet: Domain Summary ─────────────────────────────────────────────────
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(
      domains.map(d => ({
        "Domain":      d.cat,
        "Auto":        d.auto,
        "Staging":     d.staging,
        "New":         d.new,
        "Total":       d.total,
        "Avg Conf %":  d.avgConf,
      }))
    ), "Domain Summary");

    XLSX.writeFile(wb, "M6_EdenCare_Export_" + new Date().toISOString().slice(0, 10) + ".xlsx");
    localStorage.setItem(LS_KEY, JSON.stringify(currentRows));
  }

  if (!currentRows.length) {
    return (
      <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24, background: "#f1f5f9", minHeight: "100vh" }}>
        <div style={{ background: CLR.grad, borderRadius: 14, padding: "18px 24px", marginBottom: 20, color: "#fff" }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>📊 M6 — Delta Report</div>
          <div style={{ fontSize: 12, opacity: .8, marginTop: 3 }}>Waiting for M4 Confidence Threshold to complete…</div>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", color: "#94a3b8" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>⏳</div>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>No results yet</div>
          <div style={{ fontSize: 12 }}>Complete M4 — Confidence Threshold and click "Pass to M6 — Delta Report →" to continue.</div>
        </div>
      </div>
    );
  }

  const auto    = currentRows.filter(r => (r["Tier"] || "").toLowerCase() === "auto").length;
  const staging = currentRows.filter(r => (r["Tier"] || "").toLowerCase() === "staging").length;
  const newC    = currentRows.filter(r => (r["Tier"] || "").toLowerCase() === "new").length;

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24, background: "#f1f5f9", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: CLR.grad, borderRadius: 14, padding: "18px 24px", marginBottom: 20, color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>📊 M6 — Delta Report & Export</div>
        <div style={{ fontSize: 12, opacity: .8, marginTop: 3 }}>
          {currLabel} · {currentRows.length} total items · Auto: {auto} · Staging: {staging} · New: {newC}
          {Object.keys(masterCatalogs).length > 0 && ` · ${Object.keys(masterCatalogs).length} master catalogs`}
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          ["✅ Auto-Mapped",     auto,              "#16a34a", "#dcfce7"],
          ["⚠️ Staging",         staging,           "#b45309", "#fef9c3"],
          ["✨ New Codes",        newCodeRows.length,"#2563eb", "#eff6ff"],
          ["📋 Total",           currentRows.length,"#475569", "#f1f5f9"],
        ].map(([l, v, c, bg]) => (
          <div key={l as string} style={{ flex: "1 1 120px", background: bg as string, borderRadius: 10, padding: "10px 16px" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: c as string }}>{v as number}</div>
            <div style={{ fontSize: 11, color: c as string, fontWeight: 600 }}>{l as string}</div>
          </div>
        ))}
        {delta && [
          ["➕ Added",    delta.added.length,     "#16a34a", "#f0fdf4"],
          ["➖ Removed",  delta.removed.length,   "#dc2626", "#fef2f2"],
          ["🔄 Changed",  delta.changed.length,   "#b45309", "#fefce8"],
        ].map(([l, v, c, bg]) => (
          <div key={l as string} style={{ flex: "1 1 100px", background: bg as string, borderRadius: 10, padding: "10px 16px" }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: c as string }}>{v as number}</div>
            <div style={{ fontSize: 11, color: c as string, fontWeight: 600 }}>{l as string}</div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 0, background: "#fff", borderRadius: 10, padding: 4, marginBottom: 16, alignSelf: "flex-start", width: "fit-content" }}>
        {(["mapping","newcodes","runvrun","vsmaster"] as const).map(tab => (
          <button key={tab} onClick={() => setTab(tab)} style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, background: activeTab === tab ? CLR.accent : "transparent", color: activeTab === tab ? "#fff" : "#64748b" }}>
            {{ mapping: "🗂️ Full Mapping", newcodes: "✨ New Codes", runvrun: "🔄 Delta", vsmaster: "📋 Summary" }[tab]}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "mapping" && (
        <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto" }}>
          <div style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", fontSize: 12, color: "#64748b" }}>
            All {currentRows.length} items — hospital code → Eden code mapping
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead><tr style={{ background: CLR.accentDark, color: "#fff" }}>
              {["Hospital Code","Hospital Name","Eden Code","Eden Name","Category","Tier","Conf","New?"].map(h =>
                <th key={h} style={{ padding: "8px 10px", textAlign: "left" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {currentRows.slice(0, 200).map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "6px 10px", fontFamily: "monospace", fontSize: 10, color: "#7c3aed" }}>{row["Hospital Code"] || "—"}</td>
                  <td style={{ padding: "6px 10px" }}>{row["Hospital Name"]}</td>
                  <td style={{ padding: "6px 10px", fontFamily: "monospace", fontSize: 10, color: row["Is New Code"] === "Yes" ? "#dc2626" : "#059669" }}>{row["Eden Code"] || "—"}</td>
                  <td style={{ padding: "6px 10px" }}>{row["Eden Name"]}</td>
                  <td style={{ padding: "6px 10px", color: "#64748b" }}>{row["Category"]}</td>
                  <td style={{ padding: "6px 10px" }}><TierBadge tier={row["Tier"]} /></td>
                  <td style={{ padding: "6px 10px", fontWeight: 600 }}>{row["Confidence %"] ? row["Confidence %"] + "%" : "—"}</td>
                  <td style={{ padding: "6px 10px" }}>{row["Is New Code"] === "Yes" ? <span style={{ color: "#2563eb", fontWeight: 700 }}>✨ Yes</span> : "—"}</td>
                </tr>
              ))}
              {currentRows.length > 200 && <tr><td colSpan={8} style={{ padding: "8px 10px", color: "#94a3b8", textAlign: "center" }}>… {currentRows.length - 200} more rows in export</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "newcodes" && (
        <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto" }}>
          <div style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", fontSize: 12, color: "#64748b" }}>
            {newCodeRows.length} new proposed codes — these need to be added to the respective master lists
          </div>
          {newCodeRows.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 12 }}>No new codes proposed in this run</div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
              <thead><tr style={{ background: CLR.accentDark, color: "#fff" }}>
                {["Proposed Code","Eden Name","Category","Subsection","Status","Source Code","Source Name"].map(h =>
                  <th key={h} style={{ padding: "8px 10px", textAlign: "left" }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {newCodeRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#eff6ff" : "#f5f8ff", borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "6px 10px", fontFamily: "monospace", fontWeight: 700, color: "#2563eb" }}>{row["Eden Code"]}</td>
                    <td style={{ padding: "6px 10px" }}>{row["Eden Name"]}</td>
                    <td style={{ padding: "6px 10px", color: "#64748b" }}>{row["Category"] || row._edenCategory}</td>
                    <td style={{ padding: "6px 10px", color: "#7c3aed" }}>{row["Subsection"] || row._subsectionKey || "—"}</td>
                    <td style={{ padding: "6px 10px" }}>
                      <span style={{ padding: "2px 7px", borderRadius: 99, fontSize: 10, fontWeight: 700,
                        background: row["Status"] === "approved" ? "#dcfce7" : "#fef9c3",
                        color: row["Status"] === "approved" ? "#16a34a" : "#b45309" }}>
                        {row["Status"] || "pending"}
                      </span>
                    </td>
                    <td style={{ padding: "6px 10px", fontFamily: "monospace", fontSize: 10, color: "#7c3aed" }}>{row["Hospital Code"]}</td>
                    <td style={{ padding: "6px 10px" }}>{row["Hospital Name"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {activeTab === "runvrun" && delta && (
        <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto" }}>
          <div style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", fontSize: 12, color: "#64748b" }}>
            <strong>{currLabel}</strong> vs <strong>{previousRows.length ? "Previous run (saved baseline)" : "(first run — no baseline)"}</strong>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead><tr style={{ background: CLR.accentDark, color: "#fff" }}>
              {["Status","Eden Code","Eden Name","Category","Tier","Conf","Δ"].map(h =>
                <th key={h} style={{ padding: "8px 10px", textAlign: "left" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {[...delta.added.map(r => ({ ...r, _s: "added" })), ...delta.removed.map(r => ({ ...r, _s: "removed" })), ...delta.changed.map(r => ({ ...r, _s: "changed" })), ...delta.unchanged.map(r => ({ ...r, _s: "same" }))]
                .slice(0, 300)
                .map((row, i) => {
                  const bg = row._s === "added" ? "#f0fdf4" : row._s === "removed" ? "#fef2f2" : row._s === "changed" ? "#fefce8" : "#fff";
                  const badge = row._s === "added" ? <span style={{ color: "#16a34a", fontWeight: 700 }}>➕</span> : row._s === "removed" ? <span style={{ color: "#dc2626", fontWeight: 700 }}>➖</span> : row._s === "changed" ? <span style={{ color: "#b45309", fontWeight: 700 }}>🔄</span> : <span style={{ color: "#94a3b8" }}>✓</span>;
                  return (
                    <tr key={i} style={{ background: bg, borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ padding: "6px 10px" }}>{badge}</td>
                      <td style={{ padding: "6px 10px", fontFamily: "monospace", fontSize: 10, color: "#7c3aed" }}>{row[cols.code] || row["Eden Code"] || "—"}</td>
                      <td style={{ padding: "6px 10px" }}>{row[cols.name] || row["Eden Name"] || "—"}</td>
                      <td style={{ padding: "6px 10px", color: "#64748b" }}>{row[cols.cat] || row["Category"] || "—"}</td>
                      <td style={{ padding: "6px 10px" }}><TierBadge tier={row[cols.tier] || row["Tier"] || ""} /></td>
                      <td style={{ padding: "6px 10px", fontWeight: 600 }}>{(row[cols.conf] || row["Confidence %"] || "—") + (row[cols.conf] || row["Confidence %"] ? "%" : "")}</td>
                      <td style={{ padding: "6px 10px", fontSize: 10, color: "#b45309" }}>{row._prevConf != null ? row._prevConf + "% → " + row._currConf + "%" : ""}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "vsmaster" && (
        <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead><tr style={{ background: CLR.accentDark, color: "#fff" }}>
              {["Domain","✅ Auto","⚠️ Staging","✨ New","Total","Avg Conf","Coverage"].map(h =>
                <th key={h} style={{ padding: "8px 12px", textAlign: "left" }}>{h}</th>)}
            </tr></thead>
            <tbody>
              {domains.map((d, i) => {
                const pct = Math.round((d.auto / d.total) * 100);
                return (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "8px 12px", fontWeight: 600 }}>{d.cat}</td>
                    <td style={{ padding: "8px 12px", color: "#16a34a", fontWeight: 700 }}>{d.auto}</td>
                    <td style={{ padding: "8px 12px", color: "#b45309", fontWeight: 700 }}>{d.staging}</td>
                    <td style={{ padding: "8px 12px", color: "#2563eb", fontWeight: 700 }}>{d.new}</td>
                    <td style={{ padding: "8px 12px" }}>{d.total}</td>
                    <td style={{ padding: "8px 12px", fontWeight: 700 }}>{d.avgConf}%</td>
                    <td style={{ padding: "8px 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ flex: 1, height: 8, background: "#e2e8f0", borderRadius: 99, overflow: "hidden" }}>
                          <div style={{ width: pct + "%", height: "100%", background: pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626", borderRadius: 99 }} />
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 600, minWidth: 32 }}>{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Export & actions */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
        <button onClick={exportReport} style={{ padding: "11px 24px", borderRadius: 10, border: "none", background: "#16a34a", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          ⬇️ Export Full Package ({2 + Object.keys(masterCatalogs).length + (delta ? 2 : 1)} sheets)
        </button>
        {onComplete && (
          <button onClick={onComplete} style={{ padding: "11px 20px", borderRadius: 10, border: "none", background: CLR.accent, color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            ✅ Pass to M7 — Audit Log →
          </button>
        )}
      </div>
      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 8 }}>
        💾 Export saves current run as new baseline · Sheets: Hospital Mapping · New Proposed Codes · Updated Master per category · Delta vs Last Run · Domain Summary
      </div>
    </div>
  );
}
