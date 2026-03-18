// M7 — Audit Log (pipeline module version — same as Downloads\m7-audit-log.tsx)
// Re-exports the hook and the default component.
export { useAuditLog } from "../hooks/useAuditLog";

import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const LS_KEY = "audit_log_v1";
const MAX_ENTRIES = 500;

type AuditEntry = { id: string; timestamp: string; module: string; action: string; fileName: string; outcome: string; itemCount: number; user: string; };

function seedDemo() {
  if (JSON.parse(localStorage.getItem(LS_KEY) || "[]").length > 0) return;
  const demo: AuditEntry[] = [
    { id: "d1", timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), module: "M1", action: "PHI scan — BLOCKED: 3 patient names detected", fileName: "hospital_data_Q1.xlsx", outcome: "blocked", itemCount: 3, user: "Muthigani" },
    { id: "d2", timestamp: new Date(Date.now() - 86400000).toISOString(), module: "M2", action: "AI triage — 120 rows classified into 5 domains", fileName: "hospital_data_Q1_clean.xlsx", outcome: "success", itemCount: 120, user: "Muthigani" },
    { id: "d3", timestamp: new Date(Date.now() - 3600000 * 4).toISOString(), module: "M4", action: "Confidence threshold — 95 auto, 18 staging, 7 new codes", fileName: "hospital_data_Q1_clean.xlsx", outcome: "warning", itemCount: 120, user: "Muthigani" },
    { id: "d4", timestamp: new Date(Date.now() - 3600000 * 3).toISOString(), module: "M5", action: "Definitions — 78 Eden KG | 24 Wikipedia | 11 AI | 7 none", fileName: "hospital_data_Q1_clean.xlsx", outcome: "success", itemCount: 120, user: "Muthigani" },
    { id: "d5", timestamp: new Date(Date.now() - 3600000 * 2).toISOString(), module: "M6", action: "Delta report — 12 added, 3 removed, 5 changed", fileName: "M6_DeltaReport_2026-03-11.xlsx", outcome: "success", itemCount: 120, user: "Muthigani" },
    { id: "d6", timestamp: new Date(Date.now() - 1800000).toISOString(), module: "M4", action: "Master updated — 7 new codes inserted (approved)", fileName: "Master_Updated_2026-03-11.xlsx", outcome: "success", itemCount: 7, user: "Muthigani" },
  ];
  localStorage.setItem(LS_KEY, JSON.stringify(demo));
}

const MODULE_COLORS: Record<string, string> = { M1: "#dc2626", M2: "#7c3aed", M3: "#0284c7", M4: "#16a34a", M5: "#d97706", M6: "#4338ca", M7: "#334155" };

function ModuleBadge({ module }: { module: string }) {
  const c = MODULE_COLORS[module] || "#64748b";
  return <span style={{ padding: "2px 9px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: c + "20", color: c, border: "1px solid " + c + "40" }}>{module}</span>;
}

function OutcomeBadge({ outcome }: { outcome: string }) {
  const cfg: Record<string, { bg: string; c: string; l: string }> = { success: { bg: "#dcfce7", c: "#16a34a", l: "✅ OK" }, blocked: { bg: "#fee2e2", c: "#dc2626", l: "🚫 Blocked" }, warning: { bg: "#fef9c3", c: "#b45309", l: "⚠️ Warning" }, error: { bg: "#fee2e2", c: "#dc2626", l: "❌ Error" } };
  const s = cfg[outcome] || cfg.error;
  return <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: s.bg, color: s.c }}>{s.l}</span>;
}

export default function AuditLog() {
  const [entries, setEntries]   = useState<AuditEntry[]>([]);
  const [filter, setFilter]     = useState("all");
  const [outcome, setOutcome]   = useState("all");
  const [search, setSearch]     = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo]     = useState("");
  const [showClear, setShowClear] = useState(false);

  function load() { setEntries(JSON.parse(localStorage.getItem(LS_KEY) || "[]")); }
  useEffect(() => { seedDemo(); load(); }, []);

  const filtered = entries.filter(e => {
    if (filter !== "all" && e.module !== filter) return false;
    if (outcome !== "all" && e.outcome !== outcome) return false;
    if (search && ![e.action, e.fileName, e.user, e.module].some(f => f.toLowerCase().includes(search.toLowerCase()))) return false;
    if (dateFrom && new Date(e.timestamp) < new Date(dateFrom)) return false;
    if (dateTo && new Date(e.timestamp) > new Date(dateTo + "T23:59:59")) return false;
    return true;
  });

  function exportLog() {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(filtered.map(e => ({ "Timestamp": new Date(e.timestamp).toLocaleString(), "Module": e.module, "Action": e.action, "File": e.fileName, "Outcome": e.outcome, "Items": e.itemCount, "User": e.user }))), "Audit Log");
    XLSX.writeFile(wb, "M7_AuditLog_" + new Date().toISOString().slice(0, 10) + ".xlsx");
  }

  function clearLog() { localStorage.removeItem(LS_KEY); setEntries([]); setShowClear(false); }

  const counts = entries.reduce((a, e) => { a[e.outcome] = (a[e.outcome] || 0) + 1; return a; }, {} as Record<string, number>);

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24, background: "#f1f5f9", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg,#0f172a,#334155)", borderRadius: 14, padding: "18px 24px", marginBottom: 20, color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>📋 M7 — Audit Log</div>
          <div style={{ fontSize: 12, opacity: .8, marginTop: 3 }}>Persistent cross-session trail — survives page refresh — capped at {MAX_ENTRIES} entries.</div>
        </div>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{entries.length}</div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        {[["Total", entries.length, "#334155", "#f1f5f9"], ["✅ OK", counts.success || 0, "#16a34a", "#dcfce7"], ["⚠️ Warn", counts.warning || 0, "#b45309", "#fef9c3"], ["🚫 Blocked", counts.blocked || 0, "#dc2626", "#fee2e2"], ["❌ Errors", counts.error || 0, "#dc2626", "#fee2e2"]]
          .map(([l, v, c, bg]) => (
            <div key={l as string} style={{ flex: "1 1 80px", background: bg as string, borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: c as string }}>{v as number}</div>
              <div style={{ fontSize: 11, color: c as string }}>{l as string}</div>
            </div>
          ))}
      </div>

      <div style={{ background: "#fff", borderRadius: 12, padding: 12, marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search..." style={{ flex: "1 1 200px", padding: "7px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13 }} />
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, background: "#fff" }}>
          <option value="all">All Modules</option>
          {["M1","M2","M3","M4","M5","M6","M7"].map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select value={outcome} onChange={e => setOutcome(e.target.value)} style={{ padding: "7px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, background: "#fff" }}>
          <option value="all">All Outcomes</option>
          <option value="success">✅ Success</option>
          <option value="warning">⚠️ Warning</option>
          <option value="blocked">🚫 Blocked</option>
          <option value="error">❌ Error</option>
        </select>
        <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
        <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
      </div>

      <div style={{ background: "#fff", borderRadius: 12, marginBottom: 14 }}>
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#0f172a" }}>{filtered.length} entries {filtered.length < entries.length ? <span style={{ fontWeight: 400, color: "#94a3b8" }}>of {entries.length}</span> : ""}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={exportLog} style={{ padding: "5px 12px", borderRadius: 7, border: "none", background: "#16a34a", color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: 11 }}>⬇️ Export</button>
            <button onClick={() => setShowClear(true)} style={{ padding: "5px 12px", borderRadius: 7, border: "none", background: "#fee2e2", color: "#dc2626", fontWeight: 600, cursor: "pointer", fontSize: 11 }}>🗑️ Clear</button>
          </div>
        </div>
        {filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>No entries match filters.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead><tr style={{ background: "#0f172a", color: "#fff" }}>{["Timestamp","Module","Outcome","Action","File","Items","User"].map(h => <th key={h} style={{ padding: "9px 12px", textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>)}</tr></thead>
              <tbody>
                {filtered.map((e, i) => (
                  <tr key={e.id} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "7px 12px", whiteSpace: "nowrap", color: "#64748b", fontSize: 11 }}>{new Date(e.timestamp).toLocaleDateString()} {new Date(e.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
                    <td style={{ padding: "7px 12px" }}><ModuleBadge module={e.module} /></td>
                    <td style={{ padding: "7px 12px" }}><OutcomeBadge outcome={e.outcome} /></td>
                    <td style={{ padding: "7px 12px", maxWidth: 320, wordBreak: "break-word" }}>{e.action}</td>
                    <td style={{ padding: "7px 12px", fontSize: 11, color: "#64748b", maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.fileName}</td>
                    <td style={{ padding: "7px 12px", textAlign: "right", fontWeight: 600 }}>{e.itemCount > 0 ? e.itemCount : "—"}</td>
                    <td style={{ padding: "7px 12px", fontSize: 11, color: "#64748b" }}>{e.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showClear && (
        <div style={{ position: "fixed", inset: 0, background: "#0008", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: 28, maxWidth: 380, width: "90%" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#dc2626", marginBottom: 10 }}>⚠️ Clear entire audit log?</div>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 20 }}>This will delete all {entries.length} entries permanently. Cannot be undone.</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={clearLog} style={{ flex: 1, padding: "10px 0", borderRadius: 8, border: "none", background: "#dc2626", color: "#fff", fontWeight: 700, cursor: "pointer" }}>Delete All</button>
              <button onClick={() => setShowClear(false)} style={{ flex: 1, padding: "10px 0", borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: "#475569", fontWeight: 600, cursor: "pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
