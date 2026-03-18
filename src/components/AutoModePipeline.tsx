/**
 * AutoModePipeline — clean processing display for full auto-run.
 * Shows animated module rows with status as each module completes.
 * Note: Auto mode requires file upload in M0 to kick off. This component
 * acts as the "shell" — it renders an upload prompt, then shows progress.
 */
import { useState, useRef, lazy, Suspense } from "react";
import { usePipelineState } from "../hooks/usePipelineState";

const M0 = lazy(() => import("../modules/M0PreScan"));
const M1 = lazy(() => import("../modules/M1PHIScrubber"));
const M2 = lazy(() => import("../modules/M2TriageRouter"));
const M3 = lazy(() => import("../modules/M3AliasEngine"));
const M4 = lazy(() => import("../modules/M4ConfidenceThreshold"));
const M5 = lazy(() => import("../modules/M5DefinitionEngine"));
const M6 = lazy(() => import("../modules/M6DeltaReport"));

type Status = "waiting" | "running" | "done" | "error";

interface ModuleRow {
  key:    string;
  label:  string;
  icon:   string;
  color:  string;
}

const MODULE_ROWS: ModuleRow[] = [
  { key:"m0", label:"Pre-Scan",           icon:"🔍", color:"#38bdf8" },
  { key:"m1", label:"PHI Scrubber",        icon:"🛡️", color:"#f43f5e" },
  { key:"m2", label:"Triage Router",        icon:"🗂️", color:"#a78bfa" },
  { key:"m3", label:"Alias Engine",         icon:"🔗", color:"#06b6d4" },
  { key:"m5", label:"Definition Engine",    icon:"📖", color:"#fb923c" },
  { key:"m4", label:"Confidence + DNA",     icon:"⚖️", color:"#34d399" },
  { key:"m6", label:"Delta Report",         icon:"📊", color:"#818cf8" },
];

const CSS = `
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes autoPulse{0%,100%{opacity:1}50%{opacity:0.5}}
  .auto-spinner{animation:spin 1s linear infinite;display:inline-block;}
  .auto-running{animation:autoPulse 1.5s ease-in-out infinite;}
  @keyframes autoRowIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
  .auto-row{animation:autoRowIn 0.3s ease forwards;}
`;

interface Props {
  onComplete?: () => void;
}

export default function AutoModePipeline({ onComplete }: Props) {
  const { state, setM0, setM1, setM2, setM3, setM4, setM5 } = usePipelineState();
  const [statuses, setStatuses] = useState<Record<string, Status>>({
    m0:"waiting", m1:"waiting", m2:"waiting", m3:"waiting", m5:"waiting", m4:"waiting", m6:"waiting",
  });
  const [statusText, setStatusText] = useState<Record<string, string>>({});
  const [activeModule, setActive]   = useState<string | null>(null);
  const [phase, setPhase]           = useState<"idle"|"running"|"done"|"error">("idle");
  const [errorMsg, setErrorMsg]     = useState("");

  // We render modules in a hidden container and drive them via callbacks
  const [currentStep, setCurrentStep] = useState<number>(0);
  // 0=idle, 1=M0, 2=M1, 3=M2, 4=M3, 5=M5, 6=M4, 7=M6

  function setStatus(key: string, s: Status, text?: string) {
    setStatuses(prev => ({ ...prev, [key]: s }));
    if (text) setStatusText(prev => ({ ...prev, [key]: text }));
  }

  function startPipeline() {
    setPhase("running");
    setActive("m0");
    setStatus("m0", "running", "Uploading and scanning catalog…");
    setCurrentStep(1);
  }

  function handleM0(data: any) {
    setM0(data);
    const matched = data?.preMatched?.length || 0;
    const toProc  = data?.toProcess?.length || 0;
    setStatus("m0", "done", `${matched} matched · ${toProc} to process`);
    setActive("m1"); setStatus("m1","running","Scanning for PHI…"); setCurrentStep(2);
  }
  function handleM1(data: any) {
    setM1(data);
    setStatus("m1","done",`Risk: ${data?.riskLevel || "clean"}`);
    setActive("m2"); setStatus("m2","running","Routing items by domain…"); setCurrentStep(3);
  }
  function handleM2(data: any) {
    setM2(data);
    const n = data?.triaged?.length || 0;
    setStatus("m2","done",`${n} items triaged`);
    setActive("m3"); setStatus("m3","running","Resolving aliases via APIs…"); setCurrentStep(4);
  }
  function handleM3(data: any) {
    setM3(data);
    const n = data?.resolved?.length || 0;
    setStatus("m3","done",`${n} aliases resolved`);
    setActive("m5"); setStatus("m5","running","Enriching definitions…"); setCurrentStep(5);
  }
  function handleM5(data: any) {
    setM5(data);
    const n = data?.enriched?.length || 0;
    setStatus("m5","done",`${n} items enriched`);
    setActive("m4"); setStatus("m4","running","Assigning confidence + DNA codes…"); setCurrentStep(6);
  }
  function handleM4(data: any) {
    setM4(data);
    const n = data?.results?.length || 0;
    setStatus("m4","done",`${n} codes assigned`);
    setActive("m6"); setStatus("m6","running","Generating delta report…"); setCurrentStep(7);
  }
  function handleM6() {
    setStatus("m6","done","Report complete · downloading…");
    setActive(null); setPhase("done");
    onComplete?.();
  }

  const doneCount = Object.values(statuses).filter(s => s === "done").length;
  const total     = MODULE_ROWS.length;
  const pct       = Math.round((doneCount / total) * 100);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ maxWidth:780, margin:"0 auto", padding:"24px 20px" }}>

        {/* Header card */}
        <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"24px 28px", marginBottom:20 }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:6 }}>
            <span style={{ fontSize:28, filter:"drop-shadow(0 0 12px rgba(6,182,212,0.7))" }}>🤖</span>
            <div>
              <div style={{ color:"#fff", fontWeight:800, fontSize:18 }}>Auto Pipeline</div>
              <div style={{ color:"rgba(255,255,255,0.4)", fontSize:12, marginTop:3 }}>
                {phase === "idle"    ? "Click Start to run all modules automatically"
                 : phase === "done"  ? "Pipeline complete!"
                 : phase === "error" ? "Pipeline stopped — see error below"
                 : `Processing… ${doneCount}/${total} modules complete`}
              </div>
            </div>
            {phase === "idle" && (
              <button onClick={startPipeline}
                style={{ marginLeft:"auto", padding:"10px 24px", borderRadius:12, border:"none", background:"linear-gradient(135deg,#06b6d4,#7c3aed)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", boxShadow:"0 4px 20px rgba(6,182,212,0.35)" }}>
                ▶ Start
              </button>
            )}
          </div>

          {/* Progress bar */}
          {phase !== "idle" && (
            <div style={{ marginTop:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>{doneCount}/{total} modules</span>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>{pct}%</span>
              </div>
              <div style={{ height:6, background:"rgba(255,255,255,0.07)", borderRadius:4, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,#06b6d4,#7c3aed)", borderRadius:4, transition:"width 0.5s ease", boxShadow:"0 0 8px rgba(6,182,212,0.5)" }} />
              </div>
            </div>
          )}
        </div>

        {/* Module rows */}
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {MODULE_ROWS.map((m, i) => {
            const s = statuses[m.key];
            const text = statusText[m.key];
            const isActive = activeModule === m.key;
            return (
              <div key={m.key} className="auto-row" style={{ background: s === "done" ? "rgba(52,211,153,0.05)" : isActive ? `${m.color}10` : "rgba(255,255,255,0.02)", border: `1px solid ${s==="done"?"rgba(52,211,153,0.2)":isActive?m.color+"40":"rgba(255,255,255,0.06)"}`, borderRadius:14, padding:"14px 18px", display:"flex", alignItems:"center", gap:14, transition:"all 0.3s", animationDelay:`${i*0.05}s` }}>

                {/* Step number / status icon */}
                <div style={{ width:36, height:36, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, background: s==="done"?"rgba(52,211,153,0.2)":isActive?`${m.color}25`:"rgba(255,255,255,0.05)", border:`1px solid ${s==="done"?"rgba(52,211,153,0.4)":isActive?m.color+"60":"rgba(255,255,255,0.08)"}`, fontSize:18 }}>
                  {s === "done"    ? "✓"
                   : s === "error" ? "✕"
                   : isActive      ? <span className="auto-spinner" style={{ fontSize:16 }}>⚙️</span>
                   : <span style={{ fontSize:14, opacity:0.3 }}>{m.icon}</span>}
                </div>

                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ fontWeight:700, fontSize:14, color: s==="done"?"#34d399":isActive?m.color:"rgba(255,255,255,0.4)" }}>{m.icon} {m.label}</span>
                    <StatusBadge status={s} />
                  </div>
                  {text && (
                    <div className={isActive?"auto-running":""} style={{ fontSize:11, color: s==="done"?"rgba(52,211,153,0.7)":"rgba(255,255,255,0.3)", marginTop:3 }}>
                      {text}
                    </div>
                  )}
                </div>

                {s === "waiting" && (
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.2)" }}>—</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Done banner */}
        {phase === "done" && (
          <div style={{ marginTop:20, background:"linear-gradient(135deg,rgba(52,211,153,0.15),rgba(6,182,212,0.1))", border:"1px solid rgba(52,211,153,0.3)", borderRadius:16, padding:"20px 24px", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:8 }}>✅</div>
            <div style={{ color:"#34d399", fontWeight:800, fontSize:16, marginBottom:4 }}>Pipeline Complete!</div>
            <div style={{ color:"rgba(255,255,255,0.45)", fontSize:13 }}>All modules finished — your delta report has been generated.</div>
          </div>
        )}

        {errorMsg && (
          <div style={{ marginTop:20, background:"rgba(244,63,94,0.1)", border:"1px solid rgba(244,63,94,0.3)", borderRadius:12, padding:"16px 20px", color:"#f87171", fontSize:13 }}>
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Hidden module renderers — driven by step state */}
        {phase !== "idle" && (
          <div style={{ position:"absolute", left:"-9999px", pointerEvents:"none", width:1, height:1, overflow:"hidden" }}>
            <Suspense fallback={null}>
              {currentStep === 1 && <M0 onComplete={handleM0} />}
              {currentStep === 2 && <M1 prefillData={state.m0Result ? { toProcess: state.m0Result.toProcess } : null} onComplete={handleM1} />}
              {currentStep === 3 && <M2 prefillData={state.m1Result} onComplete={handleM2} />}
              {currentStep === 4 && <M3 prefillData={state.m2Result} onComplete={handleM3} />}
              {currentStep === 5 && <M5 prefillData={state.m3Result} onComplete={handleM5} />}
              {currentStep === 6 && <M4 prefillData={{ ...(state.m5Result || state.m3Result), masterCatalogs: state.m0Result?.masterCatalogs }} onComplete={handleM4} />}
              {currentStep === 7 && <M6 prefillData={{ results: state.m4Result?.results, hospitalName: state.m4Result?.hospitalName, masterCatalogs: state.m4Result?.masterCatalogs, masterDNAs: state.m4Result?.masterDNAs, preMatched: state.m0Result?.preMatched }} onComplete={handleM6} />}
            </Suspense>
          </div>
        )}

        {/* If idle — show upload prompt from M0 */}
        {phase === "idle" && currentStep === 0 && (
          <div style={{ marginTop:16, background:"rgba(255,255,255,0.02)", border:"1px dashed rgba(255,255,255,0.1)", borderRadius:16, padding:"24px", textAlign:"center", color:"rgba(255,255,255,0.3)", fontSize:13 }}>
            Click <strong style={{ color:"rgba(255,255,255,0.5)" }}>▶ Start</strong> above to begin the auto pipeline.
            <br /><span style={{ fontSize:11, marginTop:6, display:"block" }}>You'll be prompted to upload your file and master catalogs in the M0 module.</span>
          </div>
        )}
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === "waiting") return <span style={{ fontSize:9, padding:"2px 7px", borderRadius:8, background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.25)", fontWeight:700 }}>WAITING</span>;
  if (status === "running") return <span style={{ fontSize:9, padding:"2px 7px", borderRadius:8, background:"rgba(251,191,36,0.2)", color:"#fbbf24", fontWeight:700, border:"1px solid rgba(251,191,36,0.3)" }}>RUNNING</span>;
  if (status === "done")    return <span style={{ fontSize:9, padding:"2px 7px", borderRadius:8, background:"rgba(52,211,153,0.2)", color:"#34d399", fontWeight:700, border:"1px solid rgba(52,211,153,0.3)" }}>DONE</span>;
  return <span style={{ fontSize:9, padding:"2px 7px", borderRadius:8, background:"rgba(244,63,94,0.2)", color:"#f87171", fontWeight:700, border:"1px solid rgba(244,63,94,0.3)" }}>ERROR</span>;
}
