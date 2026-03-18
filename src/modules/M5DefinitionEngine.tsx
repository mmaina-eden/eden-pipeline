// M4 — Definition Engine (pre-M5 enrichment)
// Receives M3 alias data, enriches each item with canonical name + clinical definition.
// Waterfall: RxNorm → Wikidata → Wikipedia → PubChem → Groq AI (fallback for unknowns only)
// Groq is free (14,400 req/day) and best-suited for short definition generation.
import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { callGroq } from "../lib/groq";
import { getStoredKey, storeKey } from "../lib/apiKeys";

const CLR = { grad: "linear-gradient(135deg,#78350f,#d97706)", accent: "#d97706", accentDark: "#92400e", bg: "#fffbeb", border: "#fcd34d" };

// ── Free API helpers ───────────────────────────────────────────────────────────

async function lookupRxNorm(name: string): Promise<{ canonical: string } | null> {
  try {
    const res = await fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${encodeURIComponent(name)}&search=1`);
    if (!res.ok) return null;
    const d = await res.json();
    const rxcui = d?.idGroup?.rxnormId?.[0];
    if (!rxcui) return null;
    const r2 = await fetch(`https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/property.json?propName=RxNorm%20Name`);
    if (!r2.ok) return null;
    const d2 = await r2.json();
    const canonical = d2?.propConceptGroup?.propConcept?.[0]?.propValue || "";
    return canonical ? { canonical } : null;
  } catch { return null; }
}

async function lookupWikidata(name: string): Promise<{ canonical: string; description: string } | null> {
  try {
    const res = await fetch(
      `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(name)}&language=en&type=item&format=json&origin=*`
    );
    if (!res.ok) return null;
    const d = await res.json();
    const hit = (d.search || []).find((r: any) => r.description && r.description.length > 5);
    if (!hit) return null;
    return { canonical: hit.label || name, description: hit.description };
  } catch { return null; }
}

async function lookupWikipedia(name: string): Promise<{ extract: string } | null> {
  const variants = [
    name,
    name.replace(/\b\d+(\.\d+)?(mg|ml|mcg|g|fr|iu|hr|h|min|kg)\b/gi, "").trim(),
    name.split(" ").slice(0, 3).join(" "),
  ].filter((v, i, a) => v.length >= 3 && a.indexOf(v) === i);

  for (const term of variants) {
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
      if (res.ok) {
        const d = await res.json();
        if (d.extract && d.extract.length > 40 && !d.extract.startsWith("may refer to")) {
          return { extract: d.extract.split(". ").slice(0, 2).join(". ") + "." };
        }
      }
    } catch { /* try next */ }
  }
  return null;
}

async function lookupPubChem(name: string): Promise<{ canonical: string } | null> {
  try {
    const res = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/synonyms/JSON`
    );
    if (!res.ok) return null;
    const d = await res.json();
    const syns = d?.InformationList?.Information?.[0]?.Synonym || [];
    const canonical = syns.find((s: string) => /^[A-Z][a-z]/.test(s)) || syns[0] || "";
    return canonical ? { canonical } : null;
  } catch { return null; }
}

function isPharmacy(category: string, name: string) {
  const cat = (category || "").toLowerCase();
  const n = (name || "").toLowerCase();
  return cat.includes("pharm") || cat.includes("drug") || cat.includes("mol") || cat.includes("med")
    || n.match(/\b(mg|ml|mcg|tablet|capsule|injection|infusion|syrup|vial|ampoule|vaccine|antibiotic)\b/i);
}

/**
 * Detects items that are REPEATED/ORDINAL PROCEDURES (2nd arterial line, initial visit, etc.)
 * These must NEVER be classified as consumables/devices via Wikidata lookup —
 * the ordinal prefix signals a billing event for a clinical procedure, not a physical supply.
 */
function isOrdinalProcedure(name: string): { isOrdinal: boolean; baseName: string } {
  const ordinalRx = /^(1st|2nd|3rd|\d+th|first|second|third|fourth|initial|subsequent|additional|follow[- ]?up|repeat|re-?)\b\s*/i;
  const match = name.match(ordinalRx);
  if (match) {
    const baseName = name.replace(ordinalRx, "").replace(/\s*-\s*[IVX]+\s*$/, "").trim(); // strip ordinal + Roman numeral suffix
    return { isOrdinal: true, baseName };
  }
  return { isOrdinal: false, baseName: name };
}

function isProcedureCategory(category: string, name: string): boolean {
  const cat = (category || "").toLowerCase();
  const n = (name || "").toLowerCase();
  return cat.includes("proc") || cat.includes("surg") || cat.includes("oper") || cat.includes("visit")
    || n.includes("insertion") || n.includes("placement") || n.includes("line") && !n.includes("baseline");
}

// ── Test rows ──────────────────────────────────────────────────────────────────
const TEST_ROWS = [
  { akaCode: "LAB001", akaName: "Full Blood Count",              akaCategory: "Laboratory" },
  { akaCode: "RAD001", akaName: "Chest X-Ray PA View",           akaCategory: "Imaging" },
  { akaCode: "PHA001", akaName: "Amoxicillin 500mg Capsule",     akaCategory: "Pharmacy" },
  { akaCode: "PRO001", akaName: "Holter Monitor 24HR",           akaCategory: "Procedures" },
  { akaCode: "DEV001", akaName: "Cardiac Stent Drug Eluting",    akaCategory: "Medical Devices" },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function DefinitionEngine({
  onComplete,
  prefillData,
}: {
  onComplete?: (data: any) => void;
  prefillData?: { resolved?: any[]; aliases?: any[] } | null;
} = {}) {
  const [status, setStatus]     = useState<"idle" | "running" | "done">("idle");
  const [logs, setLogs]         = useState<string[]>([]);
  const [results, setResults]   = useState<any[]>([]);
  const [stats, setStats]       = useState<any>(null);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [prefillRows, setPrefillRows] = useState<any[]>([]);
  const [fileName, setFileName] = useState("");
  const [groqKey, setGroqKeyState] = useState(() => getStoredKey("groq"));
  function setGroqKey(v: string) { setGroqKeyState(v); storeKey("groq", v); }
  const [showKey, setShowKey]   = useState(false);

  const log = (msg: string) => setLogs(p => [...p, "[" + new Date().toLocaleTimeString() + "] " + msg]);

  useEffect(() => {
    if (prefillData?.resolved?.length) {
      const mapped = prefillData.resolved.map((r: any) => ({
        akaCode:     r.code     || r.akaCode     || "",
        akaName:     r.name     || r.akaName     || "",
        akaCategory: r.category || r.akaCategory || "",
      }));
      setPrefillRows(mapped);
      setFileName("Pre-filled from M3 Alias Engine (" + mapped.length + " rows)");
    }
  }, []);

  async function processRows(rows: any[]) {
    setStatus("running"); setResults([]); setLogs([]);
    setProgress({ done: 0, total: rows.length });
    log("🔍 Starting free-API enrichment for " + rows.length + " items...");

    const enriched: any[] = [];
    let rxHits = 0, wdHits = 0, wikiHits = 0, pubHits = 0, groqHits = 0, derivedHits = 0, none = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const name = row.akaName || row.name || "";
      const cat  = row.akaCategory || row.category || "";
      let canonicalName = name;
      let definition    = "";
      let definitionSource = "none";

      log("🔎 [" + (i + 1) + "/" + rows.length + "] " + name);

      const pharmacy = isPharmacy(cat, name);
      const { isOrdinal, baseName } = isOrdinalProcedure(name);
      const isProcedure = isOrdinal || isProcedureCategory(cat, name);

      // Ordinal procedure items (2nd X, Initial X, Subsequent X, etc.) must not be
      // looked up as devices/supplies in Wikidata — generate a procedure-context definition instead.
      if (isOrdinal) {
        if (groqKey.trim()) {
          try {
            const aiDef = await callGroq(
              groqKey,
              `Write ONE clinical billing definition sentence (max 30 words) for "${name}" as a CLINICAL PROCEDURE (not a device or supply). Context: it is the repeated/subsequent billing event for "${baseName}". No preamble — just the definition.`,
              100
            );
            if (aiDef.trim()) {
              definition = aiDef.trim().replace(/^["']|["']$/g, "");
              definitionSource = "Groq AI";
              groqHits++;
              log("🤖 Groq (ordinal procedure): " + name);
            }
          } catch { /* fall through to none */ }
        }
        // Even without Groq, stamp a safe baseline definition so matching isn't biased
        if (!definition) {
          definition = `Clinical procedure: ${baseName} (repeated/additional billing instance).`;
          definitionSource = "derived";
          derivedHits++;
          log("📌 Derived (ordinal): " + name);
        }
      } else {
        // Tier 1: RxNorm (pharmacy items)
        if (pharmacy) {
          const rx = await lookupRxNorm(name);
          if (rx) {
            canonicalName = rx.canonical;
            definitionSource = "RxNorm";
            rxHits++;
            log("💊 RxNorm: " + name + " → " + rx.canonical);
          }
        }

        // Tier 2: Wikidata — skip for procedure-category items to avoid device misclassification
        if (!definition && !isProcedure) {
          const wd = await lookupWikidata(canonicalName);
          if (wd) {
            if (!pharmacy || definitionSource === "none") canonicalName = wd.canonical;
            definition = wd.description;
            if (definitionSource === "none") { definitionSource = "Wikidata"; wdHits++; }
            else { definitionSource += "+Wikidata"; wdHits++; }
            log("🌐 Wikidata: " + name + " — " + wd.description.slice(0, 60) + "...");
          }
        }

        // Tier 3: Wikipedia
        if (!definition || definition.length < 20) {
          const wiki = await lookupWikipedia(name);
          if (wiki) {
            definition = wiki.extract;
            if (definitionSource === "none") { definitionSource = "Wikipedia"; wikiHits++; }
            log("📖 Wikipedia: " + name);
          }
        }

        // Tier 4: PubChem (pharmacy fallback for canonical name)
        if (pharmacy && canonicalName === name) {
          const pc = await lookupPubChem(name);
          if (pc) {
            canonicalName = pc.canonical;
            if (definitionSource === "none") { definitionSource = "PubChem"; pubHits++; }
            log("🔬 PubChem: " + name + " → " + pc.canonical);
          }
        }

        // Tier 5: Groq AI (only for items with no definition from free APIs)
        if (!definition && groqKey.trim()) {
          try {
            const aiDef = await callGroq(
              groqKey,
              `Write ONE clinical definition sentence (max 25 words) for the medical item "${name}" in the ${cat || "medical"} domain. No preamble — just the definition.`,
              80
            );
            if (aiDef.trim()) {
              definition = aiDef.trim().replace(/^["']|["']$/g, "");
              definitionSource = "Groq AI";
              groqHits++;
              log("🤖 Groq AI: " + name);
            } else { none++; log("❓ No enrichment found: " + name); }
          } catch (err: any) {
            none++;
            log("⚠️ Groq error for " + name + ": " + err.message);
          }
        } else if (!definition) { none++; log("❓ No enrichment found: " + name); }
      }

      enriched.push({ ...row, canonicalName, definition, definitionSource });
      setResults([...enriched]);
      setProgress({ done: i + 1, total: rows.length });
    }

    setStats({ total: rows.length, rxHits, wdHits, wikiHits, pubHits, groqHits, derivedHits, none });
    setStatus("done");
    log("✅ Complete — RxNorm:" + rxHits + " · Wikidata:" + wdHits + " · Wikipedia:" + wikiHits + " · PubChem:" + pubHits + " · Groq AI:" + groqHits + " · Derived:" + derivedHits + " · None:" + none);
  }

  function exportResults() {
    const ws = XLSX.utils.json_to_sheet(results.map(r => ({
      "Hospital Code":      r.akaCode || "",
      "Hospital Name":      r.akaName || "",
      "Hospital Category":  r.akaCategory || "",
      "Canonical Name":     r.canonicalName || "",
      "Definition":         r.definition || "",
      "Definition Source":  r.definitionSource || "",
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Enriched");
    XLSX.writeFile(wb, "M5_Enriched.xlsx");
  }

  const pct = progress.total ? Math.round(progress.done / progress.total * 100) : 0;

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 1000, margin: "0 auto", padding: 24, background: "#f1f5f9", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: CLR.grad, borderRadius: 14, padding: "18px 24px", marginBottom: 20, color: "#fff" }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>📖 M4 — Definition Engine</div>
        <div style={{ fontSize: 12, opacity: .8, marginTop: 3 }}>
          Free-API enrichment: RxNorm → Wikidata → Wikipedia → PubChem · No API key required · Canonical names + clinical definitions added before matching
        </div>
      </div>

      {/* IDLE / PREFILL */}
      {status === "idle" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {prefillRows.length > 0 ? (
            <div style={{ background: "#f0fdf4", border: "2px solid #86efac", borderRadius: 12, padding: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#16a34a", marginBottom: 6 }}>
                ✅ {prefillRows.length} items received from M3 Alias Engine
              </div>
              <div style={{ fontSize: 12, color: "#166534", marginBottom: 16, lineHeight: 1.6 }}>
                Each item will be enriched with its <strong>canonical name</strong> and a <strong>clinical definition</strong>
                using free public APIs — no API key needed. This helps M5 Confidence Threshold match items accurately against the Eden Care master catalog.
              </div>
                      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 14 }}>
                Free sources: 💊 RxNorm (drugs) · 🌐 Wikidata · 📖 Wikipedia · 🔬 PubChem
              </div>
              {/* Optional Groq key for AI fallback */}
              <div style={{ background: "#fff", borderRadius: 10, padding: 12, marginBottom: 14, border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#78350f", marginBottom: 6 }}>
                  🤖 Groq API Key <span style={{ fontWeight: 400, color: "#94a3b8" }}>(optional — AI fallback for items free APIs can't resolve)</span>
                </div>
                <div style={{ position: "relative" }}>
                  <input
                    type={showKey ? "text" : "password"}
                    value={groqKey}
                    onChange={e => setGroqKey(e.target.value)}
                    placeholder="gsk_..."
                    style={{ width: "100%", padding: "8px 36px 8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "monospace" }}
                  />
                  <button type="button" onClick={() => setShowKey(p => !p)} tabIndex={-1}
                    style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "#94a3b8" }}>
                    {showKey ? "🙈" : "👁️"}
                  </button>
                </div>
                <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 4 }}>Free at console.groq.com · 14,400 req/day · Only used when RxNorm/Wikidata/Wikipedia/PubChem all fail</div>
              </div>
              <button
                onClick={() => processRows(prefillRows)}
                style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#78350f,#d97706)", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 14, boxShadow: "0 2px 6px #d9770640" }}>
                🔍 Run Free-API Enrichment
              </button>
            </div>
          ) : (
            // Standalone / test mode
            <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 1px 4px #0001" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: CLR.accentDark, marginBottom: 12 }}>No data piped from M3 — choose how to proceed</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => processRows(TEST_ROWS)}
                  style={{ flex: 1, minWidth: 200, padding: 16, borderRadius: 12, border: "2px solid " + CLR.accent, background: CLR.bg, cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>🧪</div>
                  <div style={{ fontWeight: 700, color: CLR.accentDark }}>Test with sample data</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>5 items across all domains — demonstrates all 4 API tiers.</div>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* RUNNING */}
      {status === "running" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 28, textAlign: "center", boxShadow: "0 1px 4px #0001" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🔍</div>
            <div style={{ fontWeight: 700, color: CLR.accentDark, fontSize: 15 }}>Enriching items via free APIs...</div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 3 }}>{fileName}</div>
            <div style={{ marginTop: 12, background: "#e2e8f0", borderRadius: 99, height: 10, maxWidth: 440, margin: "12px auto 0" }}>
              <div style={{ height: 10, borderRadius: 99, background: "linear-gradient(90deg,#78350f,#d97706)", width: pct + "%", transition: "width .4s" }} />
            </div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>{progress.done} / {progress.total} items · {pct}%</div>
          </div>
          <div style={{ background: "#0f172a", borderRadius: 10, padding: 12, maxHeight: 200, overflowY: "auto" }}>
            {logs.map((l, i) => (
              <div key={i} style={{ fontFamily: "monospace", fontSize: 11, marginBottom: 3, color: l.includes("✅") ? "#86efac" : l.includes("💊") ? "#4ade80" : l.includes("🌐") ? "#93c5fd" : l.includes("📖") ? "#a5b4fc" : l.includes("🔬") ? "#fbbf24" : l.includes("❓") ? "#94a3b8" : "#94a3b8" }}>
                {l}
              </div>
            ))}
          </div>

          {/* Live preview table */}
          {results.length > 0 && (
            <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto", boxShadow: "0 1px 4px #0001" }}>
              <div style={{ padding: "10px 14px", fontWeight: 700, fontSize: 12, color: CLR.accentDark, borderBottom: "1px solid #f1f5f9" }}>
                Live enrichment preview
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: CLR.accentDark, color: "#fff" }}>
                    {["Code", "Original Name", "Canonical Name", "Source", "Definition"].map(h => (
                      <th key={h} style={{ padding: "7px 10px", textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.slice(-20).map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f1f5f9" }}>
                      <td style={{ padding: "6px 10px", fontFamily: "monospace", color: "#7c3aed" }}>{row.akaCode || "—"}</td>
                      <td style={{ padding: "6px 10px", color: "#64748b" }}>{row.akaName}</td>
                      <td style={{ padding: "6px 10px", fontWeight: row.canonicalName !== row.akaName ? 600 : 400, color: row.canonicalName !== row.akaName ? "#16a34a" : "#64748b" }}>{row.canonicalName}</td>
                      <td style={{ padding: "6px 10px" }}>
                        <span style={{ padding: "2px 7px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: row.definitionSource === "none" ? "#f1f5f9" : CLR.bg, color: row.definitionSource === "none" ? "#94a3b8" : CLR.accentDark }}>
                          {row.definitionSource === "none" ? "—" : row.definitionSource}
                        </span>
                      </td>
                      <td style={{ padding: "6px 10px", color: "#475569", maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {row.definition || <span style={{ color: "#94a3b8", fontStyle: "italic" }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* DONE */}
      {status === "done" && stats && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Stats */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { l: "Total",         v: stats.total,    c: CLR.accentDark },
              { l: "💊 RxNorm",     v: stats.rxHits,      c: "#16a34a" },
              { l: "🌐 Wikidata",   v: stats.wdHits,      c: "#0284c7" },
              { l: "📖 Wikipedia",  v: stats.wikiHits,    c: "#7c3aed" },
              { l: "🔬 PubChem",    v: stats.pubHits,     c: "#b45309" },
              { l: "🤖 Groq AI",    v: stats.groqHits,    c: "#7c3aed" },
              { l: "📌 Derived",    v: stats.derivedHits, c: "#0891b2" },
              { l: "❓ None",       v: stats.none,        c: "#64748b" },
            ].map(s => (
              <div key={s.l} style={{ flex: "1 1 80px", background: "#fff", borderRadius: 10, padding: "10px 14px", boxShadow: "0 1px 4px #0001" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Results table */}
          <div style={{ background: "#fff", borderRadius: 12, overflowX: "auto", boxShadow: "0 1px 4px #0001" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: CLR.accentDark }}>Enriched Items ({results.length})</div>
              <button onClick={exportResults} style={{ padding: "5px 14px", borderRadius: 8, border: "none", background: "#16a34a", color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: 11 }}>⬇️ Export XLSX</button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: CLR.accentDark, color: "#fff" }}>
                  {["Code", "Original Name", "Canonical Name", "Category", "Source", "Definition"].map(h => (
                    <th key={h} style={{ padding: "9px 10px", textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: "#7c3aed", fontSize: 11 }}>{row.akaCode || "—"}</td>
                    <td style={{ padding: "7px 10px", color: "#64748b" }}>{row.akaName}</td>
                    <td style={{ padding: "7px 10px", fontWeight: row.canonicalName !== row.akaName ? 600 : 400, color: row.canonicalName !== row.akaName ? "#16a34a" : "#334155" }}>{row.canonicalName}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#64748b" }}>{row.akaCategory || "—"}</td>
                    <td style={{ padding: "7px 10px" }}>
                      <span style={{ padding: "2px 8px", borderRadius: 99, fontSize: 10, fontWeight: 700, background: CLR.bg, color: CLR.accentDark }}>
                        {row.definitionSource === "none" ? "—" : row.definitionSource}
                      </span>
                    </td>
                    <td style={{ padding: "7px 10px", color: "#475569", fontSize: 11, maxWidth: 320, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {row.definition || <span style={{ color: "#94a3b8", fontStyle: "italic" }}>No definition found</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div style={{ background: "#f0fdf4", border: "2px solid #86efac", borderRadius: 12, padding: 16, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#16a34a" }}>✅ Enrichment complete — ready for M5 Confidence Threshold</div>
              <div style={{ fontSize: 12, color: "#166534", marginTop: 3 }}>
                {results.filter(r => r.definition).length} / {results.length} items enriched with clinical definitions.
                Canonical names and definitions will be used by the matching engine to improve accuracy.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => { setStatus("idle"); setResults([]); setStats(null); setLogs([]); setProgress({ done: 0, total: 0 }); }}
                style={{ padding: "10px 18px", borderRadius: 8, border: "none", background: "#e2e8f0", color: "#475569", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                🔄 Re-run
              </button>
              {onComplete && (
                <button onClick={() => onComplete({ enriched: results })}
                  style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#16a34a,#15803d)", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 14, boxShadow: "0 2px 6px #16a34a40", whiteSpace: "nowrap" }}>
                  Pass to M5 — Confidence Threshold →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
