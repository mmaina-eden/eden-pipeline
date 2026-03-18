// ── M0 Pre-Scan — Catalog Match Gate ──────────────────────────────────────────
// Scans hospital items against Eden Care master catalogs BEFORE the pipeline.
// Items ≥90% match → auto-assigned, skip M1–M5 (token-free).
// Items 60–89% match → flagged for review, still flow to pipeline.
// Items <60% → full M1–M4 pipeline.
// Master catalogs are persisted to localStorage — upload once, always available.
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { getStoredMaster, storeMaster, removeMaster, getAllStoredMasters, storedMasterCount } from "../lib/masterCatalogs";
const CLR = {
  grad:   "linear-gradient(135deg,#0369a1,#0ea5e9)",
  accent: "#0ea5e9",
  dark:   "#0369a1",
  bg:     "#f0f9ff",
  border: "#7dd3fc",
};

const EDEN_CATS = [
  "Labs", "Imaging", "Procedures", "Medical Devices",
  "Molecules", "Supplies & Consumables", "Billing",
];

// ── Shared utilities ────────────────────────────────────────────────────────────

function termSimilarity(a: string, b: string): number {
  // Keep medical terms like blood/urine/total/free — only strip pure filler words
  const STOP = new Set(["the","and","for","with","per","via","from","other","any",
    "measurement","determination","analysis","assay"]);
  const tokenize = (s: string) =>
    s.toLowerCase().split(/\W+/).filter(w => w.length >= 2 && !STOP.has(w));
  const aWords = tokenize(a);
  const bWords = tokenize(b);
  if (!aWords.length || !bWords.length) return 0;
  const bSet = new Set(bWords);
  const intersection = aWords.filter(w => bSet.has(w)).length;
  const union = new Set([...aWords, ...bWords]).size;
  return union > 0 ? Math.round((intersection / union) * 100) : 0;
}

function fileToRows(file: File): Promise<any[]> {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop()!.toLowerCase();
    if (ext === "csv") {
      const r = new FileReader();
      r.onload = e => {
        try {
          const lines = (e.target!.result as string).split(/\r?\n/).filter(Boolean);
          const hdrs = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
          res(lines.slice(1).map(l => {
            const v = l.split(",").map(x => x.trim().replace(/^"|"$/g, ""));
            return Object.fromEntries(hdrs.map((h, i) => [h, v[i] || ""]));
          }));
        } catch(err) { rej(err); }
      };
      r.onerror = () => rej(new Error("Read failed"));
      r.readAsText(file);
    } else {
      const r = new FileReader();
      r.onload = e => {
        try {
          const wb = XLSX.read(e.target!.result, { type: "binary" });
          res(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: "" }) as any[]);
        } catch(err) { rej(err); }
      };
      r.onerror = () => rej(new Error("Read failed"));
      r.readAsBinaryString(file);
    }
  });
}

function detectNameCol(rows: any[]): string {
  if (!rows.length) return "";
  const k = Object.keys(rows[0]);
  return k.find(x => /name|desc|procedure|item|test|molecule|device/i.test(x)) ||
         k.find(x => /item/i.test(x)) || k[1] || k[0] || "";
}
function detectCodeCol(rows: any[]): string {
  if (!rows.length) return "";
  const k = Object.keys(rows[0]);
  return k.find(x => /code|id|ref/i.test(x)) || k[0] || "";
}
function detectCatCol(rows: any[]): string {
  if (!rows.length) return "";
  const k = Object.keys(rows[0]);
  return k.find(x => /category|cat|type|dept/i.test(x)) || "";
}

// ── Component ────────────────────────────────────────────────────────────────────

export default function PreScan({
  onComplete,
}: {
  onComplete?: (data: { preMatched: any[]; toProcess: any[]; masterCatalogs: Record<string, any[]> }) => void;
} = {}) {
  const [hospitalRows, setHospitalRows] = useState<any[]>([]);
  const [hospitalFile, setHospitalFile] = useState("");
  const [masterCatalogs, setMasters]    = useState<Record<string, any[]>>({});
  const [masterStates, setMStates]      = useState<Record<string, { status: string; msg: string }>>({});
  const [savedFlags, setSavedFlags]     = useState<Record<string, boolean>>({}); // true = loaded from storage
  const [scanResult, setScanResult]     = useState<{ preMatched: any[]; review: any[]; toProcess: any[] } | null>(null);
  const [scanning, setScanning]         = useState(false);
  const [threshold]                     = useState(90);

  // ── Load persisted catalogs on mount ────────────────────────────────────────
  useEffect(() => {
    const saved = getAllStoredMasters();
    if (!Object.keys(saved).length) return;
    const flags: Record<string, boolean> = {};
    const states: Record<string, { status: string; msg: string }> = {};
    Object.entries(saved).forEach(([cat, rows]) => {
      flags[cat]  = true;
      states[cat] = { status: "done", msg: rows.length + " rows · saved" };
    });
    setMasters(saved);
    setSavedFlags(flags);
    setMStates(states);
  }, []);

  async function loadHospital(file: File) {
    try {
      const rows = await fileToRows(file);
      setHospitalRows(rows);
      setHospitalFile(file.name);
    } catch(err: any) { alert("Could not read file: " + err.message); }
  }

  async function loadMaster(cat: string, file: File) {
    setMStates(p => ({ ...p, [cat]: { status: "loading", msg: "Reading…" } }));
    try {
      const rows = await fileToRows(file);
      storeMaster(cat, rows);                             // persist to localStorage
      setSavedFlags(p => ({ ...p, [cat]: false }));       // false = freshly uploaded (not from storage)
      setMasters(p => ({ ...p, [cat]: rows }));
      setMStates(p => ({ ...p, [cat]: { status: "done", msg: rows.length + " rows · saved" } }));
      setScanResult(null);                                // invalidate previous scan
    } catch(err: any) {
      setMStates(p => ({ ...p, [cat]: { status: "error", msg: err.message } }));
    }
  }

  function removeMasterCat(cat: string) {
    removeMaster(cat);                                    // clear from localStorage
    setMasters(p => { const n = { ...p }; delete n[cat]; return n; });
    setMStates(p => { const n = { ...p }; delete n[cat]; return n; });
    setSavedFlags(p => { const n = { ...p }; delete n[cat]; return n; });
    setScanResult(null);
  }

  function runScan() {
    if (!hospitalRows.length || !Object.keys(masterCatalogs).length) return;
    setScanning(true);

    // Case-insensitive column value extractor
    function pickVal(row: any, pattern: RegExp): string {
      const key = Object.keys(row).find(k => pattern.test(k));
      return key ? String(row[key] ?? "").trim() : "";
    }

    const preMatched: any[] = [];
    const review: any[]     = [];
    const toProcess: any[]  = [];

    // Detect hospital columns from first row (case-insensitive)
    const firstRow = hospitalRows[0] || {};
    const hKeys    = Object.keys(firstRow);
    const nameColKey = hKeys.find(k => /name|desc|procedure|item|test|molecule|device/i.test(k))
                    || hKeys.find(k => /service|product|charge/i.test(k))
                    || hKeys[1] || hKeys[0] || "";
    const codeColKey = hKeys.find(k => /^code$|^id$|hospital.?code|aka.?code|source.?code/i.test(k))
                    || hKeys.find(k => /code|id|ref/i.test(k))
                    || hKeys[0] || "";
    const catColKey  = hKeys.find(k => /category|cat|type|dept|specializ/i.test(k)) || "";

    // Pre-build code+name key indices for each master catalog (avoid re-scanning keys per row)
    const masterIndex: Record<string, { codeKey: string; nameKey: string }> = {};
    Object.entries(masterCatalogs).forEach(([cat, rows]) => {
      if (!rows.length) return;
      const keys = Object.keys(rows[0]);
      masterIndex[cat] = {
        codeKey: keys.find(k => /^code$|eden.?code|proc.?code|device.?id|molecule.?code/i.test(k))
               || keys.find(k => /code|id|ref/i.test(k)) || keys[0] || "",
        nameKey: keys.find(k => /^name$|eden.?name|proc.*name|device.*name|description|molecule.*name/i.test(k))
               || keys.find(k => /name|desc|item|procedure|device|molecule|product/i.test(k)) || keys[1] || keys[0] || "",
      };
    });

    hospitalRows.forEach(row => {
      const name     = String(row[nameColKey] || "").trim() || pickVal(row, /name|desc/i);
      const code     = String(row[codeColKey] || "").trim();
      const category = catColKey ? String(row[catColKey] || "").trim() : "";

      if (!name) return;

      let bestCode = "", bestName = "", bestCat = "", bestScore = 0;

      Object.entries(masterCatalogs).forEach(([cat, catRows]) => {
        const idx = masterIndex[cat];
        if (!idx) return;
        catRows.forEach((catRow: any) => {
          const eCode = idx.codeKey ? String(catRow[idx.codeKey] ?? "").trim() : "";
          const eName = idx.nameKey ? String(catRow[idx.nameKey] ?? "").trim() : "";
          const finalCode = eCode || pickVal(catRow, /code|id|ref/i);
          const finalName = eName || pickVal(catRow, /name|desc|procedure|device|molecule|product/i);
          if (!finalCode || !finalName) return;
          const score = termSimilarity(name, finalName);
          if (score > bestScore) { bestScore = score; bestCode = finalCode; bestName = finalName; bestCat = cat; }
        });
      });

      const item = {
        akaCode:     code,
        akaName:     name,
        akaCategory: category,
        _scanScore:  bestScore,
        edenCode:    bestCode,
        edenName:    bestName,
        edenCategory: bestCat,
        confidence:  bestScore,
      };

      if (bestScore >= threshold) {
        preMatched.push({ ...item, tier: "auto", _status: "approved", isProposed: false,
          reason: `M0 catalog scan: "${name}" ↔ "${bestName}" [${bestScore}%]` });
      } else if (bestScore >= 60) {
        review.push({ ...item, tier: "staging", _status: "pending",
          reason: `M0 near-match: "${name}" ↔ "${bestName}" [${bestScore}%] — pipeline will refine` });
      } else {
        toProcess.push({ ...item, edenCode: "", edenName: "", edenCategory: "", confidence: 0,
          reason: "No catalog match — full pipeline required" });
      }
    });

    setScanResult({ preMatched, review, toProcess });
    setScanning(false);
  }

  const totalMasters = Object.keys(masterCatalogs).length;
  const canScan = hospitalRows.length > 0 && totalMasters > 0;
  const r = scanResult;

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24, background: "#f1f5f9", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: CLR.grad, borderRadius: 14, padding: "18px 24px", marginBottom: 20, color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>🔍 M0 — Pre-Scan Gate</div>
        <div style={{ fontSize: 12, opacity: .8, marginTop: 3 }}>
          Scan hospital items against Eden Care catalogs BEFORE the pipeline. Known items (≥{threshold}%) skip M1–M5 entirely — zero API tokens used.
        </div>
      </div>

      {/* Two-column upload layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>

        {/* Left: Hospital data */}
        <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px #0001" }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: CLR.dark }}>📋 Hospital Data</div>
          {hospitalRows.length > 0 ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 12, color: "#16a34a", fontWeight: 600 }}>✅ {hospitalFile}</span>
              <span style={{ fontSize: 11, color: "#64748b" }}>({hospitalRows.length} rows)</span>
              <button onClick={() => { setHospitalRows([]); setHospitalFile(""); setScanResult(null); }}
                style={{ marginLeft: "auto", padding: "3px 10px", borderRadius: 6, border: "none", background: "#fee2e2", color: "#dc2626", fontSize: 11, cursor: "pointer" }}>
                Remove
              </button>
            </div>
          ) : (
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: 80, border: "2px dashed " + CLR.border, borderRadius: 10, cursor: "pointer", background: CLR.bg, color: CLR.dark, fontSize: 12 }}>
              <span style={{ fontSize: 22, marginBottom: 4 }}>📂</span>
              <span>Click to upload CSV / XLSX</span>
              <input type="file" accept=".csv,.xlsx,.xls" style={{ display: "none" }}
                onChange={e => { const f = e.target.files?.[0]; if (f) loadHospital(f); }} />
            </label>
          )}
        </div>

        {/* Right: Stats after scan */}
        {r ? (
          <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px #0001" }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10, color: CLR.dark }}>📊 Scan Results</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: `✅ Auto (≥${threshold}%)`, value: r.preMatched.length, bg: "#f0fdf4", c: "#16a34a" },
                { label: "⚠️ Review (60–89%)", value: r.review.length, bg: "#fef9c3", c: "#b45309" },
                { label: "🔄 Pipeline (<60%)", value: r.toProcess.length, bg: "#eff6ff", c: "#2563eb" },
              ].map(({ label, value, bg, c }) => (
                <div key={label} style={{ flex: 1, background: bg, borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: c }}>{value}</div>
                  <div style={{ fontSize: 10, color: c, fontWeight: 600, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px #0001", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", color: "#94a3b8", fontSize: 12 }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>📊</div>
              Results will appear here after scan
            </div>
          </div>
        )}
      </div>

      {/* Master catalog uploads */}
      <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 1px 4px #0001", marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4, color: CLR.dark }}>
          📚 Eden Care Master Catalogs
        </div>
        <div style={{ fontSize: 11, color: "#64748b", marginBottom: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <span>💾 Catalogs are saved automatically — they persist across sessions until you replace or remove them.</span>
          <span style={{ color: CLR.dark }}>Passed directly to M4, no re-upload needed.</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
          {EDEN_CATS.map(cat => {
            const s      = masterStates[cat];
            const loaded = masterCatalogs[cat];
            const isSaved = savedFlags[cat];           // loaded from localStorage vs freshly uploaded
            return (
              <div key={cat} style={{
                border: "1px solid " + (loaded ? (isSaved ? "#7dd3fc" : "#86efac") : "#e2e8f0"),
                borderRadius: 10, padding: "10px 12px",
                background: loaded ? (isSaved ? "#f0f9ff" : "#f0fdf4") : "#fafafa",
              }}>
                <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 4, color: loaded ? (isSaved ? CLR.dark : "#16a34a") : "#334155" }}>
                  {loaded ? (isSaved ? "💾 " : "✅ ") : "📋 "}{cat}
                </div>
                {s?.status === "loading" && <div style={{ fontSize: 11, color: "#64748b" }}>Loading…</div>}
                {s?.status === "done" && (
                  <div style={{ fontSize: 10, color: isSaved ? CLR.dark : "#16a34a", marginBottom: 4 }}>
                    {s.msg}{isSaved ? " (from saved)" : " (just uploaded)"}
                  </div>
                )}
                {s?.status === "error" && <div style={{ fontSize: 11, color: "#dc2626" }}>⚠️ {s.msg}</div>}
                <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                  {/* Replace / Upload button */}
                  <label style={{
                    display: "inline-block", padding: "4px 10px", borderRadius: 6,
                    background: loaded ? "#dcfce7" : CLR.bg,
                    border: "1px solid " + (loaded ? "#86efac" : CLR.border),
                    color: loaded ? "#16a34a" : CLR.dark, fontSize: 11, fontWeight: 600, cursor: "pointer",
                  }}>
                    {loaded ? "✏️ Replace" : "⬆️ Upload"}
                    <input type="file" accept=".csv,.xlsx,.xls" style={{ display: "none" }}
                      onChange={e => { const f = e.target.files?.[0]; if (f) loadMaster(cat, f); }} />
                  </label>
                  {/* Remove button — clears storage too */}
                  {loaded && (
                    <button
                      onClick={() => removeMasterCat(cat)}
                      title="Remove catalog and clear from saved storage"
                      style={{ padding: "4px 8px", borderRadius: 6, border: "none", background: "#fee2e2", color: "#dc2626", fontSize: 11, cursor: "pointer" }}>
                      🗑️
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
        <button
          onClick={runScan}
          disabled={!canScan || scanning}
          style={{
            padding: "11px 28px", borderRadius: 10, border: "none",
            background: canScan ? CLR.grad : "#e2e8f0",
            color: canScan ? "#fff" : "#94a3b8",
            fontWeight: 700, fontSize: 13, cursor: canScan ? "pointer" : "not-allowed",
          }}>
          {scanning ? "⏳ Scanning…" : `🔍 Run Catalog Scan (${hospitalRows.length} items)`}
        </button>

        {!canScan && (
          <div style={{ padding: "11px 16px", fontSize: 12, color: "#64748b", background: "#fff", borderRadius: 10, border: "1px solid #e2e8f0" }}>
            {!hospitalRows.length && "Upload hospital data  "}
            {!totalMasters && "Upload at least one master catalog"}
          </div>
        )}
      </div>

      {/* Results table */}
      {r && (
        <>
          {/* Preview tables per bucket */}
          {[
            { key: "preMatched" as const, label: `✅ Auto-Matched (≥${threshold}%) — skip pipeline`, color: "#16a34a", bg: "#f0fdf4", items: r.preMatched },
            { key: "review"     as const, label: "⚠️ Near-Match (60–89%) — will go through pipeline for refinement", color: "#b45309", bg: "#fef9c3", items: r.review },
            { key: "toProcess"  as const, label: "🔄 Unmatched (<60%) — full M1→M4 pipeline", color: "#2563eb", bg: "#eff6ff", items: r.toProcess },
          ].map(({ label, color, bg, items }) => (
            items.length > 0 && (
              <div key={label} style={{ background: "#fff", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
                <div style={{ background: bg, padding: "8px 16px", fontWeight: 700, fontSize: 12, color, borderBottom: "1px solid #f1f5f9" }}>
                  {label} — {items.length} items
                </div>
                <div style={{ overflowX: "auto", maxHeight: 220, overflowY: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                    <thead>
                      <tr style={{ background: "#f8fafc" }}>
                        {["Hospital Code","Hospital Name","Hospital Category","Eden Code","Eden Name","Confidence"].map(h => (
                          <th key={h} style={{ padding: "6px 10px", textAlign: "left", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #f1f5f9" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {items.slice(0, 50).map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid #f8fafc" }}>
                          <td style={{ padding: "5px 10px", fontFamily: "monospace", color: "#7c3aed" }}>{row.akaCode || "—"}</td>
                          <td style={{ padding: "5px 10px" }}>{row.akaName}</td>
                          <td style={{ padding: "5px 10px", color: "#64748b" }}>{row.akaCategory || "—"}</td>
                          <td style={{ padding: "5px 10px", fontFamily: "monospace", color: "#059669" }}>{row.edenCode || "—"}</td>
                          <td style={{ padding: "5px 10px" }}>{row.edenName || "—"}</td>
                          <td style={{ padding: "5px 10px", fontWeight: 700, color }}>
                            {row.confidence > 0 ? row.confidence + "%" : "—"}
                          </td>
                        </tr>
                      ))}
                      {items.length > 50 && (
                        <tr><td colSpan={6} style={{ padding: "6px 10px", color: "#94a3b8", fontSize: 11, textAlign: "center" }}>
                          … and {items.length - 50} more
                        </td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ))}

          {/* Pass to pipeline button */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={() => onComplete?.({
                preMatched: r.preMatched,
                toProcess: [...r.review, ...r.toProcess],   // review items also go to pipeline
                masterCatalogs,
              })}
              style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: "#16a34a", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ✅ Pass {[...r.review, ...r.toProcess].length} items to M1 — PHI Scrubber →
            </button>
            <div style={{ fontSize: 12, color: "#64748b" }}>
              {r.preMatched.length} items auto-assigned · {totalMasters} master catalog(s) will be forwarded to M4
            </div>
          </div>
        </>
      )}
    </div>
  );
}
