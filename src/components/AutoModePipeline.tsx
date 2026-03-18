/**
 * AutoModePipeline — Neural-network animated auto-run pipeline.
 * File upload shows immediately. Modules run silently in sequence.
 */
import { useState, lazy, Suspense } from "react";
import { usePipelineState } from "../hooks/usePipelineState";

const M0 = lazy(() => import("../modules/M0PreScan"));
const M1 = lazy(() => import("../modules/M1PHIScrubber"));
const M2 = lazy(() => import("../modules/M2TriageRouter"));
const M3 = lazy(() => import("../modules/M3AliasEngine"));
const M4 = lazy(() => import("../modules/M4ConfidenceThreshold"));
const M5 = lazy(() => import("../modules/M5DefinitionEngine"));
const M6 = lazy(() => import("../modules/M6DeltaReport"));

type Status = "waiting" | "running" | "done" | "error";

const MODULE_ROWS = [
  { key:"m0", label:"Pre-Scan",         icon:"🔍", color:"#38bdf8", desc:"Catalog file upload & pre-match" },
  { key:"m1", label:"PHI Scrubber",     icon:"🛡️", color:"#f43f5e", desc:"Anonymize patient identifiers" },
  { key:"m2", label:"Triage Router",    icon:"🗂️", color:"#a78bfa", desc:"Route items by clinical domain" },
  { key:"m3", label:"Alias Engine",     icon:"🔗", color:"#00d4ff", desc:"Resolve code aliases via APIs" },
  { key:"m5", label:"Definition Engine",icon:"📖", color:"#fb923c", desc:"Enrich with clinical definitions" },
  { key:"m4", label:"DNA + Confidence", icon:"⚖️", color:"#34d399", desc:"Assign M4 DNA codes & confidence" },
  { key:"m6", label:"Delta Report",     icon:"📊", color:"#818cf8", desc:"Generate final comparison report" },
];

const CSS = `
  @keyframes amp-spin   { to{transform:rotate(360deg)} }
  @keyframes amp-pulse  { 0%,100%{opacity:1} 50%{opacity:0.35} }
  @keyframes amp-rowIn  { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
  @keyframes amp-glow   { 0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,0)} 50%{box-shadow:0 0 0 6px rgba(0,212,255,0.15)} }
  @keyframes amp-stream {
    0%   { stroke-dashoffset:200; opacity:0 }
    15%  { opacity:1 }
    85%  { opacity:1 }
    100% { stroke-dashoffset:0; opacity:0 }
  }
  @keyframes amp-shine  { 0%{background-position:-200% center} 100%{background-position:200% center} }

  .amp-row { animation: amp-rowIn 0.35s cubic-bezier(0.16,1,0.3,1) both; }
  .amp-running { animation: amp-pulse 1.5s ease-in-out infinite; }
  .amp-spinner { animation: amp-spin 0.9s linear infinite; display:inline-block; }
  .amp-active-glow { animation: amp-glow 2s ease-in-out infinite; }

  .gradient-text {
    background:linear-gradient(135deg,#00d4ff 0%,#a855f7 50%,#00d4ff 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:amp-shine 4s linear infinite;
  }
`;

interface Props { onComplete?: () => void; }

export default function AutoModePipeline({ onComplete }: Props) {
  const { state, setM0, setM1, setM2, setM3, setM4, setM5 } = usePipelineState();

  // Start in "uploading" phase immediately — no button click needed
  const [statuses, setStatuses] = useState<Record<string, Status>>({
    m0:"running", m1:"waiting", m2:"waiting", m3:"waiting", m5:"waiting", m4:"waiting", m6:"waiting",
  });
  const [statusText, setStatusText] = useState<Record<string, string>>({
    m0: "Upload your catalog files to begin…",
  });
  const [activeModule, setActive] = useState<string | null>("m0");
  const [phase, setPhase]         = useState<"uploading"|"running"|"done"|"error">("uploading");
  const [currentStep, setCurrentStep] = useState<number>(1);

  function setStatus(key: string, s: Status, text?: string) {
    setStatuses(prev => ({ ...prev, [key]: s }));
    if (text) setStatusText(prev => ({ ...prev, [key]: text }));
  }

  function handleM0(data: any) {
    setM0(data);
    const matched = data?.preMatched?.length || 0;
    const toProc  = data?.toProcess?.length  || 0;
    setStatus("m0", "done", `${matched} pre-matched · ${toProc} to process`);
    setPhase("running");
    setActive("m1"); setStatus("m1","running","Scanning for PHI…"); setCurrentStep(2);
  }
  function handleM1(data: any) {
    setM1(data);
    setStatus("m1","done",`Risk: ${data?.riskLevel || "clean"}`);
    setActive("m2"); setStatus("m2","running","Routing by clinical domain…"); setCurrentStep(3);
  }
  function handleM2(data: any) {
    setM2(data);
    setStatus("m2","done",`${data?.triaged?.length || 0} items triaged`);
    setActive("m3"); setStatus("m3","running","Resolving aliases via APIs…"); setCurrentStep(4);
  }
  function handleM3(data: any) {
    setM3(data);
    setStatus("m3","done",`${data?.resolved?.length || 0} aliases resolved`);
    setActive("m5"); setStatus("m5","running","Enriching definitions…"); setCurrentStep(5);
  }
  function handleM5(data: any) {
    setM5(data);
    setStatus("m5","done",`${data?.enriched?.length || 0} items enriched`);
    setActive("m4"); setStatus("m4","running","Assigning DNA codes…"); setCurrentStep(6);
  }
  function handleM4(data: any) {
    setM4(data);
    setStatus("m4","done",`${data?.results?.length || 0} codes assigned`);
    setActive("m6"); setStatus("m6","running","Generating delta report…"); setCurrentStep(7);
  }
  function handleM6() {
    setStatus("m6","done","Report complete · downloaded ✓");
    setActive(null); setPhase("done");
    onComplete?.();
  }

  const doneCount = Object.values(statuses).filter(s => s === "done").length;
  const total     = MODULE_ROWS.length;
  const pct       = Math.round((doneCount / total) * 100);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ maxWidth:820, margin:"0 auto", padding:"28px 20px" }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{
          background:"rgba(8,8,28,0.7)", backdropFilter:"blur(32px)", WebkitBackdropFilter:"blur(32px)",
          border:"1px solid rgba(255,255,255,0.07)", borderRadius:24, padding:"24px 28px", marginBottom:20,
          boxShadow:"0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          position:"relative", overflow:"hidden",
        }}>
          {/* Ambient glow */}
          <div style={{ position:"absolute", top:-40, right:-40, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.08) 0%,transparent 70%)", pointerEvents:"none" }} />

          <div style={{ display:"flex", alignItems:"flex-start", gap:16, marginBottom: (phase === "running" || phase === "done") ? 20 : 0 }}>
            <div style={{ width:52, height:52, borderRadius:16, background:"linear-gradient(135deg,rgba(0,212,255,0.25),rgba(124,58,237,0.2))", border:"1px solid rgba(0,212,255,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0, boxShadow:"0 0 24px rgba(0,212,255,0.15)" }}>
              🤖
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:18, fontWeight:800, letterSpacing:"-0.3px" }}>
                <span className="gradient-text">Auto Pipeline</span>
              </div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginTop:5, lineHeight:1.5 }}>
                {phase === "uploading" ? "Upload your catalog files below — the pipeline will run automatically"
                 : phase === "done"    ? "All modules complete. Pipeline finished successfully."
                 : phase === "error"   ? "Pipeline stopped — check the error below"
                 : `Running… ${doneCount} of ${total} modules complete`}
              </div>
            </div>
            {/* Live indicator */}
            {phase === "running" && (
              <div style={{ display:"flex", alignItems:"center", gap:6, padding:"4px 10px", borderRadius:20, background:"rgba(0,255,157,0.1)", border:"1px solid rgba(0,255,157,0.25)" }}>
                <span className="amp-spinner" style={{ width:8, height:8, borderRadius:"50%", border:"2px solid transparent", borderTopColor:"#00ff9d", display:"inline-block" }} />
                <span style={{ fontSize:10, fontWeight:700, color:"#00ff9d", letterSpacing:"1px" }}>LIVE</span>
              </div>
            )}
          </div>

          {/* Progress bar */}
          {(phase === "running" || phase === "done") && (
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)", letterSpacing:"0.5px" }}>{doneCount}/{total} modules complete</span>
                <span style={{ fontSize:13, fontWeight:800, color: pct === 100 ? "#00ff9d" : "#00d4ff" }}>{pct}%</span>
              </div>
              <div style={{ height:6, background:"rgba(255,255,255,0.06)", borderRadius:6, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,#00d4ff,#7c3aed,#00ff9d)", borderRadius:6, transition:"width 0.6s cubic-bezier(0.16,1,0.3,1)", boxShadow:"0 0 12px rgba(0,212,255,0.4)" }} />
              </div>
            </div>
          )}
        </div>

        {/* ── Module rows ────────────────────────────────────── */}
        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
          {MODULE_ROWS.map((m, i) => {
            const s       = statuses[m.key];
            const text    = statusText[m.key];
            const isActive = activeModule === m.key;

            return (
              <div key={m.key} className="amp-row" style={{
                background: s === "done"
                  ? "rgba(0,255,157,0.04)"
                  : isActive
                    ? `rgba(${hexToRgb(m.color)},0.06)`
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${
                  s === "done" ? "rgba(0,255,157,0.18)"
                  : isActive   ? m.color + "45"
                  : "rgba(255,255,255,0.05)"}`,
                borderRadius:16, padding:"14px 18px",
                display:"flex", alignItems:"center", gap:14,
                transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)",
                animationDelay:`${i * 0.06}s`,
                boxShadow: s === "done" ? "0 0 20px rgba(0,255,157,0.06)"
                          : isActive    ? `0 0 24px ${m.color}20`
                          : "none",
              }}>

                {/* Status node */}
                <div className={isActive ? "amp-active-glow" : ""} style={{
                  width:38, height:38, borderRadius:"50%", flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background: s === "done"
                    ? "linear-gradient(135deg,rgba(0,255,157,0.25),rgba(0,200,120,0.15))"
                    : isActive
                      ? `linear-gradient(135deg,${m.color}35,${m.color}15)`
                      : "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    s === "done"  ? "rgba(0,255,157,0.4)"
                    : isActive    ? m.color + "60"
                    : "rgba(255,255,255,0.07)"}`,
                  fontSize:16,
                  boxShadow: s === "done"
                    ? "0 0 16px rgba(0,255,157,0.3)"
                    : isActive
                      ? `0 0 20px ${m.color}50`
                      : "none",
                }}>
                  {s === "done"    ? <span style={{ color:"#00ff9d", fontWeight:800, fontSize:14 }}>✓</span>
                   : s === "error" ? <span style={{ color:"#ff3366", fontSize:14 }}>✕</span>
                   : isActive      ? <span className="amp-spinner" style={{ width:18, height:18, borderRadius:"50%", border:`2px solid ${m.color}40`, borderTopColor:m.color, display:"inline-block" }} />
                   : <span style={{ fontSize:14, opacity:0.25 }}>{m.icon}</span>}
                </div>

                {/* Info */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                    <span style={{
                      fontWeight:700, fontSize:14,
                      color: s === "done" ? "#4ade80" : isActive ? m.color : "rgba(255,255,255,0.3)",
                    }}>
                      {m.icon} {m.label}
                    </span>
                    <StatusBadge status={s} color={m.color} />
                  </div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.22)", marginTop:2 }}>
                    {m.desc}
                  </div>
                  {text && (
                    <div className={isActive ? "amp-running" : ""} style={{
                      fontSize:11, marginTop:4,
                      color: s === "done" ? "rgba(0,255,157,0.65)" : "rgba(255,255,255,0.45)",
                    }}>
                      {text}
                    </div>
                  )}
                </div>

                {/* Step number */}
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.12)", fontWeight:700, flexShrink:0 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Done banner ────────────────────────────────────── */}
        {phase === "done" && (
          <div style={{ marginTop:20, background:"linear-gradient(135deg,rgba(0,255,157,0.1),rgba(0,212,255,0.07))", border:"1px solid rgba(0,255,157,0.25)", borderRadius:20, padding:"28px 28px", textAlign:"center", boxShadow:"0 0 40px rgba(0,255,157,0.08)" }}>
            <div style={{ fontSize:40, marginBottom:12 }}>✅</div>
            <div style={{ fontWeight:900, fontSize:18, marginBottom:6 }}>
              <span className="gradient-text">Pipeline Complete</span>
            </div>
            <div style={{ color:"rgba(255,255,255,0.4)", fontSize:13 }}>
              All 7 modules finished — your delta report has been generated and downloaded.
            </div>
          </div>
        )}

        {/* ── M0 upload (visible, phase=uploading) ───────────── */}
        {phase === "uploading" && currentStep === 1 && (
          <div style={{ marginTop:20 }}>
            <Suspense fallback={
              <div style={{ color:"rgba(255,255,255,0.3)", padding:"32px", textAlign:"center", background:"rgba(255,255,255,0.02)", border:"1px dashed rgba(255,255,255,0.08)", borderRadius:16, fontSize:13 }}>
                Loading upload module…
              </div>
            }>
              <M0 onComplete={handleM0} />
            </Suspense>
          </div>
        )}

        {/* ── Silent background modules ───────────────────────── */}
        {phase === "running" && (
          <div style={{ position:"absolute", left:"-9999px", pointerEvents:"none", width:1, height:1, overflow:"hidden" }}>
            <Suspense fallback={null}>
              {currentStep === 2 && <M1 prefillData={state.m0Result ? { toProcess: state.m0Result.toProcess } : null} onComplete={handleM1} />}
              {currentStep === 3 && <M2 prefillData={state.m1Result} onComplete={handleM2} />}
              {currentStep === 4 && <M3 prefillData={state.m2Result} onComplete={handleM3} />}
              {currentStep === 5 && <M5 prefillData={state.m3Result} onComplete={handleM5} />}
              {currentStep === 6 && <M4 prefillData={{ ...(state.m5Result || state.m3Result), masterCatalogs: state.m0Result?.masterCatalogs }} onComplete={handleM4} />}
              {currentStep === 7 && <M6 prefillData={{ results: state.m4Result?.results, hospitalName: state.m4Result?.hospitalName, masterCatalogs: state.m4Result?.masterCatalogs, masterDNAs: state.m4Result?.masterDNAs, preMatched: state.m0Result?.preMatched }} onComplete={handleM6} />}
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
}

function StatusBadge({ status, color }: { status: Status; color: string }) {
  const cfg = {
    waiting: { bg:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.22)", border:"rgba(255,255,255,0.08)", label:"WAITING" },
    running: { bg:"rgba(255,170,0,0.15)",   color:"#ffaa00",                border:"rgba(255,170,0,0.3)",   label:"RUNNING" },
    done:    { bg:"rgba(0,255,157,0.15)",    color:"#00ff9d",                border:"rgba(0,255,157,0.3)",   label:"DONE"    },
    error:   { bg:"rgba(255,51,102,0.15)",   color:"#ff3366",                border:"rgba(255,51,102,0.3)",  label:"ERROR"   },
  }[status];
  return (
    <span style={{ fontSize:9, padding:"2px 7px", borderRadius:6, background:cfg.bg, color:cfg.color, fontWeight:800, border:`1px solid ${cfg.border}`, letterSpacing:"0.8px" }}>
      {cfg.label}
    </span>
  );
}

// Helper: convert hex color to rgb string for rgba()
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}
