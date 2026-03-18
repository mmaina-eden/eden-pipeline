import { useState, useRef, useCallback, useEffect } from "react";
import * as XLSX from "xlsx";

const PHI_PATTERNS = [
  { name: "MRN / Patient ID",       regex: /\b(MRN|mrn|patient[\s_-]?id|pid)[\s:=\-]*[A-Z0-9]{4,12}\b/gi,       severity: "critical" },
  { name: "National ID / SSN",      regex: /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/g,                                    severity: "critical" },
  { name: "Phone Number",           regex: /(\+?\d{1,3}[\s\-]?)?(\(?\d{2,4}\)?[\s\-]?)(\d{3,4}[\s\-]?\d{3,4})/g, severity: "critical" },
  { name: "Email Address",          regex: /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g,                   severity: "critical" },
  { name: "Date of Birth",          regex: /\b(dob|date[\s_]?of[\s_]?birth|born)[\s:=\-]*\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}\b/gi, severity: "critical" },
  { name: "Full Date (DD/MM/YYYY)", regex: /\b\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4}\b/g,                            severity: "warning"  },
  { name: "Patient Name Column",    regex: /\b(patient[\s_]?name|full[\s_]?name|firstname|lastname|surname)\b/gi,  severity: "critical", headerOnly: true },
  { name: "Doctor / Provider Name", regex: /\b(doctor|physician|provider|consultant|dr\.?)[\s_]?name\b/gi,         severity: "warning",  headerOnly: true },
  { name: "Address / Location",     regex: /\b(address|street|city|zip[\s_]?code|postal)\b/gi,                    severity: "warning",  headerOnly: true },
  { name: "IP Address",             regex: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,                            severity: "warning"  },
  { name: "Passport / ID Number",   regex: /\b[A-Z]{1,2}\d{6,9}\b/g,                                              severity: "warning"  },
];

const SEVERITY_COLOR = {
  critical: { bg:"#fef2f2", border:"#fca5a5", badge:"#dc2626", badgeBg:"#fee2e2", icon:"🚨" },
  warning:  { bg:"#fffbeb", border:"#fcd34d", badge:"#b45309", badgeBg:"#fef9c3", icon:"⚠️" }
};

// ── Test Scenarios ────────────────────────────────────────────────────────────
const TEST_SCENARIOS = [
  {
    id: "critical",
    label: "🚨 Critical PHI File",
    desc: "Simulates a file containing patient names, MRNs and phone numbers — should be BLOCKED",
    headers: ["patient_name", "MRN", "phone_number", "procedure_code", "procedure_name", "category"],
    rows: [
      { patient_name: "John Doe",    MRN: "MRN-A12345", phone_number: "+254 712 345678", procedure_code: "LAB001", procedure_name: "Full Blood Count",       category: "Laboratory" },
      { patient_name: "Jane Smith",  MRN: "MRN-B98765", phone_number: "+254 733 987654", procedure_code: "RAD002", procedure_name: "Chest X-Ray",            category: "Radiology"  },
      { patient_name: "Ali Hassan",  MRN: "MRN-C55512", phone_number: "+254 700 112233", procedure_code: "PRO003", procedure_name: "Arterial Line Insertion", category: "Procedures" },
    ]
  },
  {
    id: "warning",
    label: "⚠️ Warning PHI File",
    desc: "Simulates a file with doctor name columns and dates — should trigger WARNING",
    headers: ["procedure_code", "procedure_name", "category", "doctor_name", "last_updated"],
    rows: [
      { procedure_code: "LAB001", procedure_name: "Full Blood Count",        category: "Laboratory", doctor_name: "Dr. Kamau",   last_updated: "12/05/2024" },
      { procedure_code: "RAD002", procedure_name: "Chest X-Ray PA View",     category: "Radiology",  doctor_name: "Dr. Ochieng", last_updated: "01/03/2024" },
      { procedure_code: "PRO003", procedure_name: "Central Venous Catheter", category: "Procedures", doctor_name: "Dr. Wanjiru", last_updated: "15/07/2024" },
    ]
  },
  {
    id: "clean",
    label: "✅ Clean File",
    desc: "Simulates a properly anonymized catalog file — should PASS with no findings",
    headers: ["procedure_code", "procedure_name", "category", "department", "unit_price"],
    rows: [
      { procedure_code: "LAB001", procedure_name: "Full Blood Count",              category: "Laboratory", department: "Haematology",   unit_price: "800"  },
      { procedure_code: "RAD002", procedure_name: "Chest X-Ray PA View",           category: "Radiology",  department: "Imaging",       unit_price: "2500" },
      { procedure_code: "PRO003", procedure_name: "Arterial Line Insertion",       category: "Procedures", department: "ICU",           unit_price: "5000" },
      { procedure_code: "PHA004", procedure_name: "Amoxicillin 500mg Capsule",     category: "Pharmacy",   department: "Pharmacy",      unit_price: "150"  },
      { procedure_code: "DEV005", procedure_name: "Foley Catheter 16Fr",           category: "Devices",    department: "Urology",       unit_price: "350"  },
      { procedure_code: "CON006", procedure_name: "Sterile Surgical Gloves Sz 7",  category: "Consumables",department: "Theatre",       unit_price: "120"  },
    ]
  }
];

function scanForPHI(headers, rows) {
  const findings = [];
  PHI_PATTERNS.forEach(p => {
    headers.forEach(h => {
      p.regex.lastIndex = 0;
      if (p.regex.test(h)) findings.push({ type: p.name, severity: p.severity, location: "Header", value: h, column: h });
      p.regex.lastIndex = 0;
    });
  });
  const valPatterns = PHI_PATTERNS.filter(p => !p.headerOnly);
  rows.slice(0, 500).forEach((row, ri) => {
    Object.entries(row).forEach(([col, val]) => {
      const str = String(val || "");
      valPatterns.forEach(p => {
        p.regex.lastIndex = 0;
        if (p.regex.test(str)) findings.push({ type: p.name, severity: p.severity, location: "Row " + (ri + 2), value: str.slice(0, 60), column: col });
        p.regex.lastIndex = 0;
      });
    });
  });
  const seen = new Set();
  return findings.filter(f => { const k = f.type+"|"+f.column; if (seen.has(k)) return false; seen.add(k); return true; });
}

function assessRisk(findings) {
  const crits = findings.filter(f => f.severity === "critical").length;
  const warns  = findings.filter(f => f.severity === "warning").length;
  if (crits > 0) return { level:"BLOCKED", label:"Upload Blocked — Critical PHI Detected",       color:"#dc2626", bg:"#fef2f2", icon:"🚫" };
  if (warns > 0) return { level:"WARNING", label:"Proceed with Caution — Possible PHI Detected", color:"#b45309", bg:"#fffbeb", icon:"⚠️" };
  return              { level:"CLEAR",   label:"File is Clean — No PHI Detected",               color:"#16a34a", bg:"#f0fdf4", icon:"✅" };
}

function runScan(headers, rows, fileName, setLogs, setFindings, setRisk, setStatus, setAccepted) {
  const log = msg => setLogs(p => [...p, "[" + new Date().toLocaleTimeString() + "] " + msg]);
  setLogs([]);
  setFindings(null); setRisk(null); setAccepted(false);
  log("File received: " + fileName);
  log("Parsed: " + rows.length + " rows, " + headers.length + " columns");
  log("Scanning for PHI patterns...");
  const found = scanForPHI(headers, rows);
  const r = assessRisk(found);
  log("Scan complete. " + found.length + " finding(s). Risk: " + r.level);
  if (r.level === "BLOCKED") log("⛔ BLOCKED — critical PHI found in: " + found.filter(f=>f.severity==="critical").map(f=>f.column).join(", "));
  else if (r.level === "WARNING") log("⚠️ WARNING — possible PHI in: " + found.map(f=>f.column).join(", "));
  else log("✅ No PHI detected. File cleared for M2 Triage Router.");
  setFindings(found); setRisk(r); setStatus("done");
}

function parseFile(file) {
  return new Promise((res, rej) => {
    const ext = file.name.split(".").pop().toLowerCase();
    if (ext === "csv") {
      const r = new FileReader();
      r.onload = e => {
        try {
          const lines = e.target.result.split(/\r?\n/).filter(Boolean);
          const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g,""));
          const rows = lines.slice(1).map(l => { const v = l.split(",").map(x=>x.trim().replace(/^"|"$/g,"")); return Object.fromEntries(headers.map((h,i)=>[h,v[i]||""])); });
          res({ headers, rows });
        } catch(err){rej(err);}
      };
      r.onerror=()=>rej(new Error("Read failed"));
      r.readAsText(file);
    } else {
      const r = new FileReader();
      r.onload = e => {
        try { const wb=XLSX.read(e.target.result,{type:"binary"}); const rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{defval:""}); res({headers:rows.length?Object.keys(rows[0]):[],rows}); }
        catch(err){rej(err);}
      };
      r.onerror=()=>rej(new Error("Read failed"));
      r.readAsBinaryString(file);
    }
  });
}

function UploadZone({ onFile }) {
  const ref = useRef();
  const handle = useCallback(async e => {
    e.preventDefault();
    const file = (e.dataTransfer&&e.dataTransfer.files[0])||(e.target.files&&e.target.files[0]);
    if (file) onFile(file);
  }, [onFile]);
  return (
    <div onClick={()=>ref.current.click()} onDrop={handle} onDragOver={e=>e.preventDefault()}
      style={{border:"2px dashed #7c3aed",borderRadius:12,padding:28,textAlign:"center",cursor:"pointer",background:"#faf5ff"}}>
      <input ref={ref} type="file" accept=".csv,.xlsx,.xls" style={{display:"none"}} onChange={handle}/>
      <div style={{fontSize:32}}>📂</div>
      <div style={{fontWeight:600,color:"#7c3aed",marginTop:8}}>Drop your real file here or click to upload</div>
      <div style={{fontSize:12,color:"#94a3b8",marginTop:4}}>CSV / XLSX accepted</div>
    </div>
  );
}

export default function PHIScrubber({
  onComplete,
  prefillData,
}: {
  onComplete?: (data: { headers: string[]; rows: any[]; riskLevel: string }) => void;
  prefillData?: { toProcess?: any[] } | null;
} = {}) {
  const [status, setStatus]       = useState("idle");
  const [fileName, setFileName]   = useState("");
  const [findings, setFindings]   = useState(null);
  const [risk, setRisk]           = useState(null);
  const [accepted, setAccepted]   = useState(false);
  const [showDetail, setShowDetail] = useState(true);
  const [logs, setLogs]           = useState([]);
  const [mode, setMode]           = useState("home"); // home | test | upload
  const [activeScenario, setActiveScenario] = useState(null);
  const [scannedHeaders, setScannedHeaders] = useState<string[]>([]);
  const [scannedRows, setScannedRows]       = useState<any[]>([]);

  // Auto-scan rows passed from M0 Pre-Scan
  useEffect(() => {
    if (!prefillData?.toProcess?.length) return;
    const rows = prefillData.toProcess;
    const headers = rows.length ? Object.keys(rows[0]) : [];
    setScannedHeaders(headers);
    setScannedRows(rows);
    setFileName("M0 Pre-Scan output (" + rows.length + " items for pipeline)");
    setMode("upload");
    runScan(headers, rows, "M0 Pre-Scan", setLogs, setFindings, setRisk, setStatus, setAccepted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTestScenario(scenario) {
    setActiveScenario(scenario.id);
    setStatus("done");
    setFileName("TEST: " + scenario.label);
    setScannedHeaders(scenario.headers);
    setScannedRows(scenario.rows);
    runScan(scenario.headers, scenario.rows, scenario.label, setLogs, setFindings, setRisk, setStatus, setAccepted);
  }

  async function handleRealFile(file) {
    setStatus("scanning"); setFileName(file.name); setActiveScenario(null);
    try {
      const { headers, rows } = await parseFile(file);
      setScannedHeaders(headers);
      setScannedRows(rows);
      runScan(headers, rows, file.name, setLogs, setFindings, setRisk, setStatus, setAccepted);
    } catch(err) {
      setLogs(p=>[...p,"ERROR: "+err.message]); setStatus("idle");
    }
  }

  function reset() { setStatus("idle"); setFindings(null); setRisk(null); setFileName(""); setAccepted(false); setLogs([]); setActiveScenario(null); setMode("home"); setScannedHeaders([]); setScannedRows([]); }

  const criticals = findings ? findings.filter(f=>f.severity==="critical") : [];
  const warnings  = findings ? findings.filter(f=>f.severity==="warning")  : [];

  return (
    <div style={{fontFamily:"system-ui,sans-serif",maxWidth:860,margin:"0 auto",padding:24,background:"#f1f5f9",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#1e3a5f,#7c3aed)",borderRadius:14,padding:"18px 24px",marginBottom:24,color:"#fff"}}>
        <div style={{fontSize:20,fontWeight:700}}>🛡️ M1 — PHI Scrubber Module</div>
        <div style={{fontSize:12,opacity:.8,marginTop:3}}>Scans uploaded files for Protected Health Information. Blocks critical PHI automatically before any processing.</div>
      </div>

      {/* HOME */}
      {mode==="home" && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{background:"#fff",borderRadius:12,padding:20,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4,color:"#1e3a5f"}}>How would you like to proceed?</div>
            <div style={{fontSize:12,color:"#64748b",marginBottom:16}}>Use Test Mode to verify the module works correctly before scanning your real data.</div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={()=>setMode("test")} style={{flex:1,minWidth:200,padding:16,borderRadius:12,border:"2px solid #7c3aed",background:"#faf5ff",cursor:"pointer",textAlign:"left"}}>
                <div style={{fontSize:20,marginBottom:6}}>🧪</div>
                <div style={{fontWeight:700,color:"#7c3aed",fontSize:14}}>Test Mode</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:4}}>Run 3 built-in scenarios to verify the module works. No file needed.</div>
              </button>
              <button onClick={()=>setMode("upload")} style={{flex:1,minWidth:200,padding:16,borderRadius:12,border:"2px solid #2563eb",background:"#eff6ff",cursor:"pointer",textAlign:"left"}}>
                <div style={{fontSize:20,marginBottom:6}}>📂</div>
                <div style={{fontWeight:700,color:"#2563eb",fontSize:14}}>Scan Real File</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:4}}>Upload your actual CSV or Excel file for PHI scanning.</div>
              </button>
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:16,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:13,marginBottom:10,color:"#1e3a5f"}}>🔍 PHI Types Detected</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {PHI_PATTERNS.map(p=>(
                <span key={p.name} style={{padding:"3px 10px",borderRadius:99,fontSize:11,fontWeight:600,background:p.severity==="critical"?"#fee2e2":"#fef9c3",color:p.severity==="critical"?"#dc2626":"#b45309"}}>
                  {p.severity==="critical"?"🚨":"⚠️"} {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TEST MODE */}
      {mode==="test" && status==="idle" && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={{background:"#fff",borderRadius:12,padding:18,boxShadow:"0 1px 4px #0001"}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4,color:"#7c3aed"}}>🧪 Test Mode — 3 Scenarios</div>
            <div style={{fontSize:12,color:"#64748b",marginBottom:16}}>Each scenario uses synthetic data to test a specific outcome. Click any scenario to run it instantly.</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {TEST_SCENARIOS.map(s=>(
                <button key={s.id} onClick={()=>handleTestScenario(s)}
                  style={{padding:16,borderRadius:12,border:"2px solid "+(s.id==="critical"?"#fca5a5":s.id==="warning"?"#fcd34d":"#6ee7b7"),background:s.id==="critical"?"#fef2f2":s.id==="warning"?"#fffbeb":"#f0fdf4",cursor:"pointer",textAlign:"left"}}>
                  <div style={{fontWeight:700,fontSize:14,color:s.id==="critical"?"#dc2626":s.id==="warning"?"#b45309":"#16a34a"}}>{s.label}</div>
                  <div style={{fontSize:12,color:"#64748b",marginTop:4}}>{s.desc}</div>
                  <div style={{fontSize:11,color:"#94a3b8",marginTop:6}}>Columns: {s.headers.join(", ")}</div>
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>setMode("home")} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13,alignSelf:"flex-start"}}>← Back</button>
        </div>
      )}

      {/* UPLOAD MODE */}
      {mode==="upload" && status==="idle" && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <UploadZone onFile={handleRealFile}/>
          <button onClick={()=>setMode("home")} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13,alignSelf:"flex-start"}}>← Back</button>
        </div>
      )}

      {/* SCANNING */}
      {status==="scanning" && (
        <div style={{background:"#fff",borderRadius:12,padding:32,textAlign:"center",boxShadow:"0 1px 4px #0001"}}>
          <div style={{fontSize:36,marginBottom:8}}>🔬</div>
          <div style={{fontWeight:600,color:"#7c3aed"}}>Scanning for PHI...</div>
          <div style={{fontSize:12,color:"#94a3b8",marginTop:4}}>{fileName}</div>
        </div>
      )}

      {/* RESULTS */}
      {status==="done" && risk && findings && (
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {/* Test scenario data preview */}
          {activeScenario && (
            <div style={{background:"#faf5ff",border:"2px solid #c4b5fd",borderRadius:12,padding:16}}>
              <div style={{fontWeight:700,fontSize:13,color:"#7c3aed",marginBottom:10}}>🧪 Test Data Used</div>
              {(() => { const s = TEST_SCENARIOS.find(x=>x.id===activeScenario); return (
                <div style={{overflowX:"auto"}}>
                  <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                    <thead><tr style={{background:"#7c3aed"}}>{s.headers.map(h=><th key={h} style={{padding:"6px 10px",color:"#fff",textAlign:"left"}}>{h}</th>)}</tr></thead>
                    <tbody>{s.rows.map((r,i)=><tr key={i} style={{background:i%2===0?"#fff":"#f5f3ff"}}>{s.headers.map(h=><td key={h} style={{padding:"6px 10px",color:"#334155"}}>{r[h]||"—"}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ); })()}
            </div>
          )}

          {/* Risk Banner */}
          <div style={{background:risk.bg,border:"2px solid "+risk.color,borderRadius:12,padding:18}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{fontSize:36}}>{risk.icon}</div>
              <div>
                <div style={{fontWeight:700,fontSize:16,color:risk.color}}>{risk.label}</div>
                <div style={{fontSize:12,color:"#475569",marginTop:3}}>{fileName} · {criticals.length} critical · {warnings.length} warnings</div>
              </div>
            </div>
            {risk.level==="BLOCKED" && (
              <div style={{marginTop:14,background:"#fef2f2",borderRadius:8,padding:12,fontSize:12,color:"#dc2626",borderLeft:"4px solid #dc2626"}}>
                <strong>Action Required:</strong> Remove or anonymize the flagged columns/values before uploading. This file has NOT been passed to any processing pipeline.
              </div>
            )}
            {risk.level==="WARNING" && !accepted && (
              <div style={{marginTop:14,background:"#fffbeb",border:"2px solid #f59e0b",borderRadius:12,padding:16}}>
                <div style={{fontWeight:700,fontSize:14,color:"#b45309",marginBottom:6}}>⚠️ Action Required — Accept Risk to Continue</div>
                <div style={{fontSize:12,color:"#78350f",marginBottom:14,lineHeight:1.6}}>
                  Possible PHI columns were detected (e.g. doctor names, dates). Review the findings below.<br/>
                  If you confirm these are <strong>not</strong> PHI or are acceptable for processing, click <strong>"I Accept the Risk"</strong> to unlock the pass-through to M2.
                </div>
                <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                  <button onClick={()=>setAccepted(true)} style={{padding:"12px 28px",borderRadius:8,border:"none",background:"#b45309",color:"#fff",fontWeight:700,cursor:"pointer",fontSize:14,boxShadow:"0 2px 6px #b4530940"}}>
                    ✅ I Accept the Risk — Proceed to M2
                  </button>
                  <button onClick={reset} style={{padding:"12px 20px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13}}>Cancel</button>
                </div>
              </div>
            )}
            {risk.level==="WARNING" && accepted && <div style={{marginTop:12,background:"#f0fdf4",borderRadius:8,padding:10,fontSize:12,color:"#16a34a",fontWeight:600}}>✅ Override accepted. File cleared for processing.</div>}
            {risk.level==="CLEAR" && <div style={{marginTop:10,fontSize:12,color:"#16a34a",fontWeight:600}}>✅ Safe to pass to M2 — Triage Router.</div>}
          </div>

          {/* Findings */}
          {findings.length > 0 && (
            <div style={{background:"#fff",borderRadius:12,padding:16,boxShadow:"0 1px 4px #0001"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <div style={{fontWeight:700,fontSize:13,color:"#1e3a5f"}}>📋 Findings ({findings.length})</div>
                <button onClick={()=>setShowDetail(p=>!p)} style={{padding:"4px 12px",borderRadius:8,border:"none",background:"#e2e8f0",cursor:"pointer",fontSize:12,fontWeight:600,color:"#475569"}}>{showDetail?"Hide":"Show"}</button>
              </div>
              {showDetail && (
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
                  <thead><tr style={{background:"#f8fafc"}}>{["Severity","PHI Type","Location","Column","Sample Value"].map(h=><th key={h} style={{padding:"8px 10px",textAlign:"left",color:"#475569",fontWeight:600}}>{h}</th>)}</tr></thead>
                  <tbody>
                    {findings.map((f,i)=>{
                      const sc=SEVERITY_COLOR[f.severity];
                      return <tr key={i} style={{borderTop:"1px solid #f1f5f9",background:i%2===0?"#fff":"#fafafa"}}>
                        <td style={{padding:"7px 10px"}}><span style={{padding:"2px 8px",borderRadius:99,fontSize:10,fontWeight:700,background:sc.badgeBg,color:sc.badge}}>{sc.icon} {f.severity.toUpperCase()}</span></td>
                        <td style={{padding:"7px 10px",fontWeight:600,color:"#334155"}}>{f.type}</td>
                        <td style={{padding:"7px 10px",color:"#64748b"}}>{f.location}</td>
                        <td style={{padding:"7px 10px",fontFamily:"monospace",color:"#7c3aed"}}>{f.column}</td>
                        <td style={{padding:"7px 10px",color:"#94a3b8",fontStyle:"italic",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{f.value||"—"}</td>
                      </tr>;
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Scan Log */}
          <div style={{background:"#0f172a",borderRadius:12,padding:14}}>
            <div style={{fontSize:11,fontWeight:700,color:"#475569",marginBottom:8}}>SCAN LOG</div>
            {logs.map((l,i)=><div key={i} style={{fontFamily:"monospace",fontSize:11,color:l.includes("BLOCKED")||l.includes("ERROR")?"#f87171":l.includes("✅")?"#86efac":l.includes("⚠️")?"#fcd34d":"#94a3b8",marginBottom:3}}>{l}</div>)}
          </div>

          {(risk.level==="CLEAR"||(risk.level==="WARNING"&&accepted)) && onComplete && (
            <div style={{background:"#f0fdf4",border:"2px solid #86efac",borderRadius:12,padding:16,display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:200}}>
                <div style={{fontWeight:700,fontSize:14,color:"#16a34a"}}>✅ File cleared — ready for M2 Triage Router</div>
                <div style={{fontSize:12,color:"#166534",marginTop:3}}>
                  {risk.level==="WARNING"?"Risk accepted. " : ""}
                  {(scannedRows||[]).length} rows will be passed to the next stage.
                </div>
              </div>
              <button
                onClick={() => onComplete({ headers: scannedHeaders || [], rows: scannedRows || [], riskLevel: risk.level || "LOW" })}
                style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#16a34a,#15803d)", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 14, boxShadow:"0 2px 6px #16a34a40", whiteSpace:"nowrap" }}>
                Pass to M2 — Triage Router →
              </button>
            </div>
          )}

          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button onClick={reset} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#e2e8f0",color:"#475569",fontWeight:600,cursor:"pointer",fontSize:13}}>🔄 Run Another Test</button>
            {mode==="test" && <button onClick={()=>{reset();setMode("test");}} style={{padding:"10px 20px",borderRadius:8,border:"none",background:"#faf5ff",color:"#7c3aed",fontWeight:600,cursor:"pointer",fontSize:13,border:"1px solid #c4b5fd"}}>← Back to Scenarios</button>}
          </div>
        </div>
      )}
    </div>
  );
}
