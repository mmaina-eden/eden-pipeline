import { useState, useRef, useCallback, useEffect } from "react";
import * as XLSX from "xlsx";
import { callGroq } from "../lib/groq";
import { getStoredKey, storeKey } from "../lib/apiKeys";

const DOMAINS = [
  { id:"Laboratory",      icon:"🧪", color:"#7c3aed", bg:"#f5f3ff", border:"#c4b5fd" },
  { id:"Radiology",       icon:"🩻", color:"#0284c7", bg:"#f0f9ff", border:"#7dd3fc" },
  { id:"Procedures",      icon:"🔬", color:"#059669", bg:"#f0fdf4", border:"#6ee7b7" },
  { id:"Pharmacy",        icon:"💊", color:"#dc2626", bg:"#fef2f2", border:"#fca5a5" },
  { id:"Medical Devices", icon:"🩺", color:"#b45309", bg:"#fffbeb", border:"#fcd34d" },
  { id:"Consumables",     icon:"🧴", color:"#0891b2", bg:"#ecfeff", border:"#67e8f9" },
  { id:"Services",        icon:"🏥", color:"#475569", bg:"#f8fafc", border:"#cbd5e1" },
  { id:"Billing",         icon:"💳", color:"#6d28d9", bg:"#faf5ff", border:"#c4b5fd" },
];

const TEST_SCENARIOS = [
  {
    id: "mixed",
    label: "🏥 Mixed Hospital Data (8 domains)",
    desc: "24 rows spanning all 8 domains — tests AI routing accuracy across all categories",
    expected: { Laboratory:4, Radiology:4, Procedures:3, Pharmacy:4, "Medical Devices":3, Consumables:2, Services:2, Billing:2 },
    rows: [
      { code:"LAB001", name:"Full Blood Count",                         category:"HAEM"  },
      { code:"LAB002", name:"Urine Culture and Sensitivity",            category:"MICRO" },
      { code:"LAB003", name:"Thyroid Function Test",                    category:"ENDO"  },
      { code:"LAB004", name:"Liver Function Panel",                     category:"CHEM"  },
      { code:"RAD001", name:"Chest X-Ray PA View",                      category:"XRAY"  },
      { code:"RAD002", name:"CT Scan Abdomen with Contrast",            category:"CT"    },
      { code:"RAD003", name:"MRI Brain Without Contrast",               category:"MRI"   },
      { code:"RAD004", name:"Ultrasound Abdomen",                       category:"US"    },
      { code:"PRO001", name:"Arterial Line Insertion",                  category:"ICU"   },
      { code:"PRO002", name:"Colonoscopy Diagnostic",                   category:"ENDO"  },
      { code:"PRO003", name:"Lumbar Puncture",                          category:"NEURO" },
      { code:"PHA001", name:"Amoxicillin 500mg Capsule",                category:"PHARM" },
      { code:"PHA002", name:"Insulin Actrapid 100IU Vial",              category:"PHARM" },
      { code:"PHA003", name:"Morphine Sulfate 10mg Injection",          category:"PHARM" },
      { code:"PHA004", name:"Heparin 5000IU Ampoule",                   category:"PHARM" },
      { code:"DEV001", name:"Cardiac Stent Drug Eluting",               category:"CATH"  },
      { code:"DEV002", name:"Foley Catheter 16Fr",                      category:"UROL"  },
      { code:"DEV003", name:"Pulse Oximeter Probe Reusable",            category:"EQUIP" },
      { code:"CON001", name:"Sterile Surgical Gloves Size 7",           category:"THTR"  },
      { code:"CON002", name:"IV Administration Set",                    category:"CONS"  },
      { code:"SVC001", name:"Specialist Consultation Cardiology",       category:"CONS"  },
      { code:"SVC002", name:"Physiotherapy Session 45 Minutes",         category:"REHAB" },
      { code:"BIL001", name:"Echocardiogram Professional Fee",          category:"BILL"  },
      { code:"BIL002", name:"Anaesthesia Fee General",                  category:"BILL"  },
    ]
  },
  {
    id: "ambiguous",
    label: "🤔 Ambiguous & Edge Cases",
    desc: "Holter monitors, ABG, contrast media — items keyword engines misclassify",
    expected: { Procedures:4, Radiology:2, Pharmacy:1, Services:2, Billing:1 },
    rows: [
      { code:"AMB001", name:"Holter Monitor 24HR Cardiac",              category:"CARD"  },
      { code:"AMB002", name:"Holter Monitor 72HR with Bitumin",         category:"CARD"  },
      { code:"AMB003", name:"Arterial Blood Gas Draw and Analysis",     category:"CARD"  },
      { code:"AMB004", name:"Echocardiogram 2D with Bubble Study",      category:"CARD"  },
      { code:"AMB005", name:"Contrast Medium Omnipaque 350mg",          category:"RAD"   },
      { code:"AMB006", name:"PET CT Scan Whole Body FDG",               category:"NUC"   },
      { code:"AMB007", name:"Radiologist Report Professional Fee",      category:"BILL"  },
      { code:"AMB008", name:"Glucose Tolerance Test 75g",               category:"ENDO"  },
      { code:"AMB009", name:"Cardiac Monitoring ICU Daily",             category:"ICU"   },
      { code:"AMB010", name:"Steroid Injection Intra-Articular",        category:"ORTH"  },
    ]
  },
  {
    id: "billing",
    label: "💳 Billing & Fee Components",
    desc: "Tests PROF / FEE / ANAES / FACILITY items always route to Billing",
    expected: { Billing:10 },
    rows: [
      { code:"B001", name:"Cardiothoracic Surgery Professional Fee",    category:"BILL"  },
      { code:"B002", name:"General Anaesthesia Fee",                    category:"BILL"  },
      { code:"B003", name:"Radiologist Reporting Fee",                  category:"BILL"  },
      { code:"B004", name:"ICU Daily Facility Charge",                  category:"BILL"  },
      { code:"B005", name:"Pathology Prof Fee Histology",               category:"BILL"  },
      { code:"B006", name:"Operating Theatre Charge",                   category:"BILL"  },
      { code:"B007", name:"Surgeon Fee Laparoscopic Cholecystectomy",   category:"BILL"  },
      { code:"B008", name:"Anaes Fee Spinal Anaesthesia",               category:"BILL"  },
      { code:"B009", name:"Consultant Review Fee Ward",                 category:"BILL"  },
      { code:"B010", name:"Equipment Usage Ventilator Daily",           category:"BILL"  },
    ]
  }
];

// ── AI Triage (batched) ───────────────────────────────────────────────────────
async function aiTriageBatch(rows, logFn, apiKey) {
  // Chunk size 15 keeps output well under Groq's 500 output tokens/min limit
  // (15 rows × ~25 tokens each ≈ 375 output tokens — safely below the threshold)
  const CHUNK = 15;
  const results = {};
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    logFn("AI classifying rows " + (i+1) + "–" + Math.min(i+CHUNK, rows.length) + " of " + rows.length + "...");
    const prompt = `You are a clinical domain classifier for a hospital billing system. Classify each item into exactly ONE domain.

DOMAIN DEFINITIONS:
- Laboratory: Blood tests, urine tests, cultures, biopsies, PCR, pathology, histology, cytology — any test performed on a biological sample in a lab.
- Radiology: X-ray, CT, MRI, ultrasound, echo (imaging only), nuclear medicine, PET, mammogram, fluoroscopy, angiogram — any diagnostic imaging.
- Procedures: Clinical procedures performed ON a patient — insertions, drains, scopes, endoscopy, intubation, lumbar puncture, physiotherapy, dialysis, transfusions, Holter monitor fitting/wearing (it is a monitoring SERVICE not a device). If item has BOTH procedural + lab component classify as Procedures.
- Pharmacy: Drugs, medications, tablets, capsules, injections (the drug itself), infusions, vaccines, contrast agents, IV fluids — anything administered as a chemical/biological substance.
- Medical Devices: Physical implantable or durable items — stents, valves, pacemakers, prosthetics, grafts, mesh, plates, screws. NOT consumables, NOT monitors worn by patients.
- Consumables: Disposable single-use items — gloves, masks, gauze, syringes, IV sets, catheters (the physical tube), drapes, swabs, dressings, lancets.
- Services: Consultations, admissions, nursing care, allied health visits, physiotherapy sessions, dietitian, social work, transport, telemedicine, daily monitoring charges (ICU monitoring).
- Billing: ANY item containing professional fee, facility fee, anaesthesia fee, surgeon fee, theatre charge, equipment usage charge, reporting fee, admin charge, or any billing component. Keywords: PROF, FEE, ANAES, FACILITY, CHARGE, THEATRE, USAGE, TARIFF.

CRITICAL RULES:
1. Holter monitor (24hr/48hr/72hr) = Procedures (it is a diagnostic monitoring service, not a device sale)
2. Contrast medium/dye = Pharmacy (it is a drug/substance)
3. Catheter tube = Consumables; Catheter insertion procedure = Procedures
4. Any item with FEE/PROF/ANAES/CHARGE = Billing regardless of clinical content
5. ABG Draw AND Analysis = Procedures (procedural component takes priority)
6. Echo/Echocardiogram (the imaging study) = Radiology; Echo professional fee = Billing

Items to classify:
${JSON.stringify(chunk.map(r => ({ id: r._idx, name: r.name, category: r.category })))}

Respond ONLY with a valid JSON array. No markdown, no backticks. Keep reason ≤5 words:
[{"id": 0, "domain": "DomainName", "confidence": 85, "reason": "short reason"}]`;

    const text = await callGroq(apiKey, prompt, 3000);
    const m = text.match(/\[[\s\S]*\]/);
    if (!m) throw new Error("No JSON array in response");
    const parsed = JSON.parse(m[0]);
    parsed.forEach(r => { results[r.id] = r; });
    logFn("Batch " + (Math.floor(i/CHUNK)+1) + " done — " + parsed.length + " rows classified.");
  }
  return results;
}

// ── File parser ───────────────────────────────────────────────────────────────
function parseFile(file) {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop().toLowerCase();
    if (ext === "csv") {
      const r = new FileReader();
      r.onload = e => {
        try {
          const lines = e.target.result.split(/\r?\n/).filter(Boolean);
          const hdrs = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
          const rows = lines.slice(1).map(l => { const v = l.split(",").map(x => x.trim().replace(/^"|"$/g, "")); return Object.fromEntries(hdrs.map((h,i) => [h, v[i]||""])); });
          res({ headers: hdrs, rows });
        } catch(err) { rej(err); }
      };
      r.onerror = () => rej(new Error("Read failed"));
      r.readAsText(file);
    } else {
      const r = new FileReader();
      r.onload = e => {
        try { const wb = XLSX.read(e.target.result, {type:"binary"}); const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {defval:""}); res({ headers: rows.length ? Object.keys(rows[0]) : [], rows }); }
        catch(err) { rej(err); }
      };
      r.onerror = () => rej(new Error("Read failed"));
      r.readAsBinaryString(file);
    }
  });
}

function detectCols(rows) {
  if (!rows.length) return {};
  const keys = Object.keys(rows[0]);
  const find = ps => keys.find(k => ps.some(p => k.toLowerCase().includes(p)));
  return {
    code: find(["code","id","ref"]),
    name: find(["name","description","procedure","item","test"]),
    category: find(["category","cat","type","domain","dept"])
  };
}

function exportExcel(rows, fname) {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Triaged");
  XLSX.writeFile(wb, fname);
}

function UploadZone({ onFile }) {
  const ref = useRef();
  const handle = useCallback(async e => {
    e.preventDefault();
    const file = (e.dataTransfer && e.dataTransfer.files[0]) || (e.target.files && e.target.files[0]);
    if (file) onFile(file);
  }, [onFile]);
  return (
    <div onClick={() => ref.current.click()} onDrop={handle} onDragOver={e => e.preventDefault()}
      style={{ border:"2px dashed #0284c7", borderRadius:12, padding:28, textAlign:"center", cursor:"pointer", background:"#f0f9ff" }}>
      <input ref={ref} type="file" accept=".csv,.xlsx,.xls" style={{ display:"none" }} onChange={handle} />
      <div style={{ fontSize:32 }}>📂</div>
      <div style={{ fontWeight:600, color:"#0284c7", marginTop:8 }}>Drop PHI-cleared file here or click to upload</div>
      <div style={{ fontSize:12, color:"#94a3b8", marginTop:4 }}>CSV / XLSX — assumes passed M1 PHI Scrubber</div>
    </div>
  );
}

const confColor = c => c >= 85 ? "#16a34a" : c >= 60 ? "#d97706" : "#dc2626";
const confBg    = c => c >= 85 ? "#dcfce7" : c >= 60 ? "#fef9c3" : "#fee2e2";

// ── Main ──────────────────────────────────────────────────────────────────────
export default function TriageRouter({
  onComplete,
  prefillData,
}: {
  onComplete?: (data: { triaged: any[] }) => void;
  prefillData?: { headers?: string[]; rows?: any[] } | null;
} = {}) {
  const [status, setStatus]         = useState("idle");
  const [mode, setMode]             = useState("home");
  const [fileName, setFileName]     = useState("");
  const [triaged, setTriaged]       = useState([]);
  const [stats, setStats]           = useState(null);
  const [tab, setTab]               = useState("summary");
  const [filter, setFilter]         = useState("All");
  const [logs, setLogs]             = useState([]);
  const [accuracy, setAccuracy]     = useState(null);
  const [activeScenario, setActive] = useState(null);
  const [progress, setProgress]     = useState({ done:0, total:0 });
  const [apiKey, setApiKey]         = useState(() => getStoredKey("groq"));
  const [showKey, setShowKey]       = useState(false);
  const [prefillRows, setPrefillRows] = useState([]);

  useEffect(() => {
    if (prefillData?.rows?.length) {
      setPrefillRows(prefillData.rows);
      setFileName("Pre-filled from M1 PHI Scrubber (" + prefillData.rows.length + " rows)");
      setMode("prefill");
    }
  }, []);

  const log = msg => setLogs(p => [...p, "[" + new Date().toLocaleTimeString() + "] " + msg]);

  function handleApiKey(value: string) {
    setApiKey(value);
    storeKey("groq", value);
  }

  async function process(rawRows, colMap, scenarioId) {
    const normalized = rawRows.map((row, idx) => ({
      _idx: idx,
      code: colMap ? (row[colMap.code] || "") : (row.code || ""),
      name: colMap ? (row[colMap.name] || "") : (row.name || ""),
      category: colMap ? (row[colMap.category] || "") : (row.category || ""),
    }));

    setProgress({ done:0, total: normalized.length });
    log("Sending " + normalized.length + " rows to AI for classification...");
    setStatus("ai");

    let aiResults = {};
    try {
      aiResults = await aiTriageBatch(normalized, msg => {
        log(msg);
        setProgress(p => ({ ...p, done: Math.min(p.done + 40, p.total) }));
      }, apiKey);
    } catch(err) {
      log("ERROR: " + err.message);
      setStatus("idle"); return;
    }

    const final = normalized.map(row => {
      const ai = aiResults[row._idx];
      if (!ai) {
        log(`⚠️ Row "${row.name}" was not returned by AI — defaulting to Services (check if AI truncated its response)`);
      }
      const domObj = ai ? (DOMAINS.find(d => d.id === ai.domain) || DOMAINS[6]) : DOMAINS[6];
      return {
        ...row,
        domain: ai ? ai.domain : "Services",
        domainObj: domObj,
        confidence: ai ? ai.confidence : 0,
        reason: ai ? ai.reason : "⚠️ Not classified by AI",
      };
    });

    const domainCounts = {};
    DOMAINS.forEach(d => { domainCounts[d.id] = 0; });
    final.forEach(r => { domainCounts[r.domain] = (domainCounts[r.domain] || 0) + 1; });
    const avgConf = Math.round(final.reduce((s,r) => s + r.confidence, 0) / final.length);

    if (scenarioId) {
      const scenario = TEST_SCENARIOS.find(s => s.id === scenarioId);
      if (scenario && scenario.expected) {
        const totalExpected = Object.values(scenario.expected).reduce((a,b) => a+b, 0);
        const matches = Object.keys(scenario.expected).reduce((s,d) => s + Math.min(domainCounts[d]||0, scenario.expected[d]), 0);
        const acc = Math.round((matches / totalExpected) * 100);
        setAccuracy(acc);
        log("Accuracy vs expected: " + acc + "% (" + matches + "/" + totalExpected + " correctly routed)");
      }
    }

    setStats({ total: final.length, domainCounts, avgConf });
    setTriaged(final);
    setStatus("done");
    setTab("summary");
    log("✅ Classification complete. " + final.length + " rows across " + Object.keys(domainCounts).filter(k => domainCounts[k]>0).length + " domains.");
  }

  async function handleTestScenario(scenario) {
    setActive(scenario.id); setAccuracy(null); setLogs([]); setTriaged([]); setStats(null); setFilter("All");
    setFileName("TEST: " + scenario.label); setStatus("ai");
    log("Test scenario: " + scenario.label + " (" + scenario.rows.length + " rows)");
    await process(scenario.rows, null, scenario.id);
  }

  async function handleRealFile(file) {
    setActive(null); setAccuracy(null); setLogs([]); setTriaged([]); setStats(null); setFilter("All");
    setFileName(file.name); setStatus("parsing");
    try {
      log("Parsing file: " + file.name);
      const { rows } = await parseFile(file);
      const c = detectCols(rows);
      log("Parsed: " + rows.length + " rows | Name col: " + c.name + " | Category col: " + c.category);
      await process(rows, c, null);
    } catch(err) { log("ERROR: " + err.message); setStatus("idle"); }
  }

  function reset() { setStatus("idle"); setTriaged([]); setStats(null); setLogs([]); setFileName(""); setActive(null); setAccuracy(null); setMode(prefillRows.length ? "prefill" : "home"); setTab("summary"); setFilter("All"); setProgress({done:0,total:0}); }

  const filtered = filter === "All" ? triaged : triaged.filter(r => r.domain === filter);
  const activeDomains = stats ? DOMAINS.filter(d => stats.domainCounts[d.id] > 0) : [];
  const isProcessing = ["parsing","ai"].includes(status);
  const pct = progress.total ? Math.round(progress.done / progress.total * 100) : 0;

  return (
    <div style={{ fontFamily:"system-ui,sans-serif", maxWidth:1100, margin:"0 auto", padding:24, background:"#f1f5f9", minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#0c4a6e,#0284c7)", borderRadius:14, padding:"18px 24px", marginBottom:24, color:"#fff" }}>
        <div style={{ fontSize:20, fontWeight:700 }}>🗂️ M2 — Triage Router Module</div>
        <div style={{ fontSize:12, opacity:.8, marginTop:3 }}>Pure AI classification — no keyword shortcuts. Every row is clinically reasoned before matching begins.</div>
      </div>

      {/* HOME */}
      {mode === "home" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {/* API Key */}
          <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:8, color:"#0c4a6e" }}>🔑 Groq API Key</div>
            <div style={{ position:"relative" }}>
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={e => handleApiKey(e.target.value)}
                placeholder="gsk_..."
                style={{ width:"100%", padding:"9px 40px 9px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"monospace" }}
              />
              <button type="button" onClick={() => setShowKey(p => !p)} tabIndex={-1}
                style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"#94a3b8" }}>
                {showKey ? "🙈" : "👁️"}
              </button>
            </div>
            {!apiKey.trim() && <div style={{ fontSize:11, color:"#f59e0b", marginTop:6 }}>⚠️ Enter your Groq API key — free at console.groq.com (14,400 req/day)</div>}
          </div>

          <div style={{ background:"#fff", borderRadius:12, padding:20, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:"#0c4a6e" }}>How would you like to proceed?</div>
            <div style={{ fontSize:12, color:"#64748b", marginBottom:16 }}>Run Test Mode first to validate AI accuracy before processing real data.</div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button onClick={() => setMode("test")} disabled={!apiKey.trim()} style={{ flex:1, minWidth:200, padding:16, borderRadius:12, border:"2px solid #0284c7", background: apiKey.trim() ? "#f0f9ff" : "#f8fafc", cursor: apiKey.trim() ? "pointer" : "not-allowed", textAlign:"left", opacity: apiKey.trim() ? 1 : 0.5 }}>
                <div style={{ fontSize:20, marginBottom:6 }}>🧪</div>
                <div style={{ fontWeight:700, color:"#0284c7", fontSize:14 }}>Test Mode</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:4 }}>3 built-in scenarios including tricky edge cases like Holter monitors. Shows accuracy vs expected.</div>
              </button>
              <button onClick={() => setMode("upload")} disabled={!apiKey.trim()} style={{ flex:1, minWidth:200, padding:16, borderRadius:12, border:"2px solid #059669", background: apiKey.trim() ? "#f0fdf4" : "#f8fafc", cursor: apiKey.trim() ? "pointer" : "not-allowed", textAlign:"left", opacity: apiKey.trim() ? 1 : 0.5 }}>
                <div style={{ fontSize:20, marginBottom:6 }}>📂</div>
                <div style={{ fontWeight:700, color:"#059669", fontSize:14 }}>Route Real File</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:4 }}>Upload a PHI-cleared file for AI domain classification.</div>
              </button>
            </div>
          </div>
          <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:10, color:"#0c4a6e" }}>📌 8 Routing Domains</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {DOMAINS.map(d => <span key={d.id} style={{ padding:"4px 12px", borderRadius:99, fontSize:11, fontWeight:600, background:d.bg, color:d.color, border:"1px solid "+d.border }}>{d.icon} {d.id}</span>)}
            </div>
          </div>
        </div>
      )}

      {/* PREFILL FROM M1 */}
      {mode === "prefill" && status === "idle" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {/* API Key */}
          <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:8, color:"#0c4a6e" }}>🔑 Groq API Key</div>
            <div style={{ position:"relative" }}>
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={e => handleApiKey(e.target.value)}
                placeholder="gsk_..."
                style={{ width:"100%", padding:"9px 40px 9px 12px", borderRadius:8, border:"1px solid #e2e8f0", fontSize:13, outline:"none", boxSizing:"border-box", fontFamily:"monospace" }}
              />
              <button type="button" onClick={() => setShowKey(p => !p)} tabIndex={-1}
                style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"#94a3b8" }}>
                {showKey ? "🙈" : "👁️"}
              </button>
            </div>
            {!apiKey.trim() && <div style={{ fontSize:11, color:"#f59e0b", marginTop:6 }}>⚠️ Enter your Groq API key — free at console.groq.com (14,400 req/day)</div>}
          </div>
          {/* Pre-filled data panel */}
          <div style={{ background:"#f0fdf4", border:"2px solid #86efac", borderRadius:12, padding:20 }}>
            <div style={{ fontWeight:700, fontSize:15, color:"#16a34a", marginBottom:6 }}>✅ {prefillRows.length} rows received from M1 PHI Scrubber</div>
            <div style={{ fontSize:12, color:"#166534", marginBottom:16 }}>
              File cleared by PHI scanner and passed directly into M2. No re-upload needed — click below to run AI domain classification.
            </div>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              <button
                onClick={() => {
                  setActive(null); setAccuracy(null); setLogs([]); setTriaged([]); setStats(null); setFilter("All");
                  process(prefillRows, detectCols(prefillRows), null);
                }}
                disabled={!apiKey.trim()}
                style={{ padding:"12px 28px", borderRadius:8, border:"none", background: apiKey.trim() ? "linear-gradient(135deg,#0284c7,#0369a1)" : "#94a3b8", color:"#fff", fontWeight:700, cursor: apiKey.trim() ? "pointer" : "not-allowed", fontSize:14, boxShadow: apiKey.trim() ? "0 2px 6px #0284c740" : "none" }}>
                🚀 Run AI Classification
              </button>
              <button onClick={() => setMode("upload")}
                style={{ padding:"12px 18px", borderRadius:8, border:"1px solid #cbd5e1", background:"#fff", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13 }}>
                📂 Upload Different File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TEST SELECTION */}
      {mode === "test" && status === "idle" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ background:"#fff", borderRadius:12, padding:18, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:4, color:"#0284c7" }}>🧪 Test Mode — 3 Scenarios</div>
            <div style={{ fontSize:12, color:"#64748b", marginBottom:16 }}>Each test shows a live AI reasoning column so you can see exactly WHY each item was classified the way it was.</div>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {TEST_SCENARIOS.map(s => (
                <button key={s.id} onClick={() => handleTestScenario(s)}
                  style={{ padding:16, borderRadius:12, border:"2px solid #7dd3fc", background:"#f0f9ff", cursor:"pointer", textAlign:"left" }}>
                  <div style={{ fontWeight:700, fontSize:14, color:"#0284c7" }}>{s.label}</div>
                  <div style={{ fontSize:12, color:"#64748b", marginTop:4 }}>{s.desc}</div>
                  <div style={{ fontSize:11, color:"#94a3b8", marginTop:6 }}>
                    {s.rows.length} rows · Expected: {Object.entries(s.expected).map(([d,n]) => d+" ("+n+")").join(", ")}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setMode("home")} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13, alignSelf:"flex-start" }}>← Back</button>
        </div>
      )}

      {/* UPLOAD */}
      {mode === "upload" && status === "idle" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <UploadZone onFile={handleRealFile} />
          <button onClick={() => setMode("home")} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13, alignSelf:"flex-start" }}>← Back</button>
        </div>
      )}

      {/* PROCESSING */}
      {isProcessing && (
        <div style={{ background:"#fff", borderRadius:12, padding:32, textAlign:"center", boxShadow:"0 1px 4px #0001" }}>
          <div style={{ fontSize:40, marginBottom:10 }}>🤖</div>
          <div style={{ fontWeight:700, color:"#0284c7", fontSize:15 }}>AI Classifying Rows...</div>
          <div style={{ fontSize:12, color:"#94a3b8", marginTop:4 }}>{fileName}</div>
          {progress.total > 0 && (
            <div style={{ marginTop:14 }}>
              <div style={{ background:"#e2e8f0", borderRadius:99, height:8, maxWidth:400, margin:"0 auto" }}>
                <div style={{ height:8, borderRadius:99, background:"linear-gradient(90deg,#0284c7,#06b6d4)", width:pct+"%", transition:"width .4s" }} />
              </div>
              <div style={{ fontSize:12, color:"#64748b", marginTop:6 }}>{progress.done} / {progress.total} rows</div>
            </div>
          )}
          <div style={{ marginTop:16, background:"#0f172a", borderRadius:10, padding:12, maxHeight:180, overflowY:"auto", textAlign:"left" }}>
            {logs.map((l,i) => <div key={i} style={{ fontFamily:"monospace", fontSize:11, color:l.includes("ERROR")?"#f87171":l.includes("✅")?"#86efac":"#94a3b8", marginBottom:3 }}>{l}</div>)}
          </div>
        </div>
      )}

      {/* RESULTS */}
      {status === "done" && stats && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {/* Accuracy */}
          {accuracy !== null && (
            <div style={{ background:accuracy>=80?"#f0fdf4":accuracy>=60?"#fffbeb":"#fef2f2", border:"2px solid "+(accuracy>=80?"#22c55e":accuracy>=60?"#fcd34d":"#fca5a5"), borderRadius:12, padding:16, display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ fontSize:44 }}>{accuracy>=80?"🎯":accuracy>=60?"⚠️":"❌"}</div>
              <div>
                <div style={{ fontWeight:700, fontSize:18, color:accuracy>=80?"#16a34a":accuracy>=60?"#b45309":"#dc2626" }}>AI Routing Accuracy: {accuracy}%</div>
                <div style={{ fontSize:12, color:"#475569", marginTop:4 }}>
                  {accuracy>=80?"Module working correctly — AI classification matches expected domain distribution.":accuracy>=60?"Partial match — review low confidence rows and adjust prompt if needed.":"Low accuracy — review the AI reasoning column to identify classification issues."}
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {[{l:"Total Rows",v:stats.total,c:"#0284c7"},{l:"Domains Used",v:activeDomains.length,c:"#7c3aed"},{l:"Avg Confidence",v:stats.avgConf+"%",c:confColor(stats.avgConf)},{l:"Low Confidence",v:triaged.filter(r=>r.confidence<60).length,c:"#dc2626"}].map(s=>(
              <div key={s.l} style={{ background:"#fff", borderRadius:10, padding:"10px 18px", flex:"1 1 100px", boxShadow:"0 1px 4px #0001" }}>
                <div style={{ fontSize:22, fontWeight:700, color:s.c }}>{s.v}</div>
                <div style={{ fontSize:11, color:"#64748b" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Domain distribution */}
          <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
            <div style={{ fontWeight:700, fontSize:13, marginBottom:12, color:"#0c4a6e" }}>📊 Domain Distribution</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
              {activeDomains.map(d => {
                const count = stats.domainCounts[d.id];
                const pct = Math.round(count / stats.total * 100);
                const scenario = activeScenario ? TEST_SCENARIOS.find(s => s.id === activeScenario) : null;
                const expected = scenario && scenario.expected ? scenario.expected[d.id] : null;
                return (
                  <div key={d.id} style={{ background:d.bg, border:"1px solid "+d.border, borderRadius:10, padding:"10px 16px", minWidth:120 }}>
                    <div style={{ fontSize:18 }}>{d.icon}</div>
                    <div style={{ fontWeight:700, color:d.color, fontSize:12 }}>{d.id}</div>
                    <div style={{ fontSize:22, fontWeight:800, color:d.color }}>{count}</div>
                    {expected != null && <div style={{ fontSize:11, fontWeight:600, color:count===expected?"#16a34a":"#b45309" }}>Expected: {expected} {count===expected?"✓":"≠"}</div>}
                    <div style={{ fontSize:11, color:"#64748b" }}>{pct}%</div>
                    <div style={{ marginTop:6, background:"#fff", borderRadius:99, height:4 }}><div style={{ height:4, borderRadius:99, background:d.color, width:pct+"%" }} /></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[["summary","📋 All Rows"],["lowconf","⚠️ Low Confidence ("+triaged.filter(r=>r.confidence<60).length+")"],["logs","🖥️ Logs"]].map(([t,l]) => (
              <button key={t} onClick={() => setTab(t)} style={{ padding:"8px 16px", borderRadius:8, border:"none", cursor:"pointer", fontWeight:600, fontSize:12, background:tab===t?"#0284c7":"#e2e8f0", color:tab===t?"#fff":"#475569" }}>{l}</button>
            ))}
          </div>

          {tab === "summary" && (
            <div style={{ background:"#fff", borderRadius:12, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ padding:"12px 16px", borderBottom:"1px solid #f1f5f9", display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
                <span style={{ fontSize:12, fontWeight:600, color:"#475569" }}>Filter:</span>
                {["All", ...activeDomains.map(d => d.id)].map(d => (
                  <button key={d} onClick={() => setFilter(d)} style={{ padding:"3px 12px", borderRadius:99, border:"none", cursor:"pointer", fontSize:11, fontWeight:600, background:filter===d?"#0284c7":"#f1f5f9", color:filter===d?"#fff":"#475569" }}>
                    {d} ({d==="All" ? stats.total : stats.domainCounts[d]})
                  </button>
                ))}
                <button onClick={() => exportExcel(filtered.map(r => ({ Code:r.code, Name:r.name, "Original Category":r.category, "Routed Domain":r.domain, "Confidence %":r.confidence, "AI Reason":r.reason })), "Triage_Results.xlsx")}
                  style={{ marginLeft:"auto", padding:"5px 14px", borderRadius:8, border:"none", background:"#16a34a", color:"#fff", cursor:"pointer", fontWeight:600, fontSize:11 }}>⬇️ Export</button>
              </div>
              <div style={{ overflowX:"auto" }}>
                <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
                  <thead>
                    <tr style={{ background:"#0c4a6e", color:"#fff" }}>
                      {["Code","Name","Original Cat","Routed Domain","Confidence","AI Reasoning"].map(h => <th key={h} style={{ padding:"9px 10px", textAlign:"left", whiteSpace:"nowrap" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row, i) => {
                      const d = row.domainObj || DOMAINS[0];
                      return (
                        <tr key={i} style={{ background:i%2===0?"#fff":"#f8fafc", borderBottom:"1px solid #f1f5f9" }}>
                          <td style={{ padding:"7px 10px", fontFamily:"monospace", color:"#7c3aed", fontSize:11 }}>{row.code || "—"}</td>
                          <td style={{ padding:"7px 10px", fontWeight:500, maxWidth:220, wordBreak:"break-word" }}>{row.name}</td>
                          <td style={{ padding:"7px 10px", color:"#64748b", fontSize:11 }}>{row.category || "—"}</td>
                          <td style={{ padding:"7px 10px" }}>
                            <span style={{ padding:"3px 10px", borderRadius:99, fontSize:11, fontWeight:700, background:d.bg, color:d.color, border:"1px solid "+d.border }}>{d.icon} {row.domain}</span>
                          </td>
                          <td style={{ padding:"7px 10px" }}>
                            <span style={{ padding:"2px 8px", borderRadius:99, fontSize:11, fontWeight:700, background:confBg(row.confidence), color:confColor(row.confidence) }}>{row.confidence}%</span>
                          </td>
                          <td style={{ padding:"7px 10px", color:"#64748b", fontSize:11, fontStyle:"italic", maxWidth:280, wordBreak:"break-word" }}>{row.reason || "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "lowconf" && (
            <div style={{ background:"#fff", borderRadius:12, padding:16, boxShadow:"0 1px 4px #0001" }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:12, color:"#dc2626" }}>⚠️ Low Confidence Rows (&lt;60%)</div>
              {triaged.filter(r => r.confidence < 60).length === 0
                ? <div style={{ color:"#16a34a", fontSize:13 }}>✅ All rows classified with ≥60% confidence.</div>
                : triaged.filter(r => r.confidence < 60).map((row, i) => {
                    const d = row.domainObj || DOMAINS[0];
                    return (
                      <div key={i} style={{ borderLeft:"4px solid #fca5a5", background:"#fef2f2", borderRadius:8, padding:12, marginBottom:8 }}>
                        <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
                          <span style={{ fontFamily:"monospace", fontSize:11, color:"#7c3aed" }}>{row.code}</span>
                          <span style={{ fontWeight:600 }}>{row.name}</span>
                          <span style={{ padding:"2px 8px", borderRadius:99, fontSize:10, background:confBg(row.confidence), color:confColor(row.confidence), fontWeight:700 }}>{row.confidence}%</span>
                          <span style={{ padding:"2px 8px", borderRadius:99, fontSize:10, background:d.bg, color:d.color, fontWeight:700 }}>{d.icon} {row.domain}</span>
                        </div>
                        <div style={{ fontSize:11, color:"#475569", marginTop:6, fontStyle:"italic" }}>{row.reason}</div>
                      </div>
                    );
                  })
              }
            </div>
          )}

          {tab === "logs" && (
            <div style={{ background:"#0f172a", borderRadius:12, padding:14, maxHeight:400, overflowY:"auto" }}>
              {logs.map((l,i) => <div key={i} style={{ fontFamily:"monospace", fontSize:11, color:l.includes("ERROR")?"#f87171":l.includes("✅")?"#86efac":"#94a3b8", marginBottom:3 }}>{l}</div>)}
            </div>
          )}

          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <button onClick={reset} style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#e2e8f0", color:"#475569", fontWeight:600, cursor:"pointer", fontSize:13 }}>🔄 Run Another Test</button>
            <button
              onClick={() => onComplete?.({ triaged })}
              style={{ padding:"10px 20px", borderRadius:8, border:"none", background:"#dcfce7", color:"#16a34a", fontWeight:600, fontSize:13, cursor:"pointer" }}
            >✅ Ready for M3 — Alias Engine</button>
          </div>
        </div>
      )}
    </div>
  );
}
