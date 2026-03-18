/**
 * AutoModePipeline — Stark black/white/red clinical status display.
 * File upload visible immediately. Bold numbered rows, red active state.
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

const MODULES = [
  { key:"m0", num:"01", label:"Pre-Scan",          desc:"Catalog upload & pre-match" },
  { key:"m1", num:"02", label:"PHI Scrubber",       desc:"Anonymize patient identifiers" },
  { key:"m2", num:"03", label:"Triage Router",      desc:"Route by clinical domain" },
  { key:"m3", num:"04", label:"Alias Engine",       desc:"Resolve aliases via APIs" },
  { key:"m5", num:"05", label:"Definition Engine",  desc:"Enrich clinical definitions" },
  { key:"m4", num:"06", label:"DNA + Confidence",   desc:"Assign M4 codes + confidence" },
  { key:"m6", num:"07", label:"Delta Report",       desc:"Generate comparison report" },
];

const CSS = `
  @keyframes amp-spin  { to { transform: rotate(360deg); } }
  @keyframes amp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes amp-rowIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes amp-barFill { from{width:0%} }
  @keyframes amp-redPulse { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0)} 50%{box-shadow:0 0 0 6px rgba(220,38,38,0.15)} }
  .amp-row { animation: amp-rowIn 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .amp-running-text { animation: amp-pulse 1.4s ease-in-out infinite; }
  .amp-spinner { width:16px;height:16px;border-radius:50%;border:2px solid rgba(220,38,38,0.2);border-top-color:#dc2626;display:inline-block;animation:amp-spin 0.8s linear infinite; }
  .amp-active-row { animation: amp-redPulse 2s ease-in-out infinite; }
`;

interface Props { onComplete?: () => void; }

export default function AutoModePipeline({ onComplete }: Props) {
  const { state, setM0, setM1, setM2, setM3, setM4, setM5 } = usePipelineState();
  const [statuses, setStatuses] = useState<Record<string, Status>>({
    m0:"running", m1:"waiting", m2:"waiting", m3:"waiting", m5:"waiting", m4:"waiting", m6:"waiting",
  });
  const [statusText, setStatusText] = useState<Record<string, string>>({
    m0: "Upload catalog files to begin",
  });
  const [activeModule, setActive] = useState<string | null>("m0");
  const [phase, setPhase]         = useState<"uploading"|"running"|"done"|"error">("uploading");
  const [currentStep, setCurrentStep] = useState<number>(1);

  function setStatus(key: string, s: Status, text?: string) {
    setStatuses(p => ({ ...p, [key]: s }));
    if (text) setStatusText(p => ({ ...p, [key]: text }));
  }

  function handleM0(data: any) {
    setM0(data);
    const matched = data?.preMatched?.length || 0; const toProc = data?.toProcess?.length || 0;
    setStatus("m0","done",`${matched} pre-matched · ${toProc} to process`);
    setPhase("running"); setActive("m1"); setStatus("m1","running","Scanning for PHI…"); setCurrentStep(2);
  }
  function handleM1(data: any) {
    setM1(data); setStatus("m1","done",`Risk: ${data?.riskLevel || "clean"}`);
    setActive("m2"); setStatus("m2","running","Routing by domain…"); setCurrentStep(3);
  }
  function handleM2(data: any) {
    setM2(data); setStatus("m2","done",`${data?.triaged?.length || 0} items triaged`);
    setActive("m3"); setStatus("m3","running","Resolving aliases…"); setCurrentStep(4);
  }
  function handleM3(data: any) {
    setM3(data); setStatus("m3","done",`${data?.resolved?.length || 0} resolved`);
    setActive("m5"); setStatus("m5","running","Enriching definitions…"); setCurrentStep(5);
  }
  function handleM5(data: any) {
    setM5(data); setStatus("m5","done",`${data?.enriched?.length || 0} enriched`);
    setActive("m4"); setStatus("m4","running","Assigning DNA codes…"); setCurrentStep(6);
  }
  function handleM4(data: any) {
    setM4(data); setStatus("m4","done",`${data?.results?.length || 0} codes assigned`);
    setActive("m6"); setStatus("m6","running","Generating delta report…"); setCurrentStep(7);
  }
  function handleM6() {
    setStatus("m6","done","Report generated · downloaded ✓");
    setActive(null); setPhase("done"); onComplete?.();
  }

  const doneCount = Object.values(statuses).filter(s => s === "done").length;
  const pct       = Math.round((doneCount / MODULES.length) * 100);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ maxWidth:860, margin:"0 auto", padding:"32px 20px" }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:6 }}>
            <div>
              <div style={{ fontSize:10, fontWeight:700, color:"#dc2626", letterSpacing:"3px", textTransform:"uppercase", marginBottom:4 }}>
                Auto Pipeline
              </div>
              <h2 style={{ fontSize:24, fontWeight:900, color:"#ffffff", letterSpacing:"-0.04em", lineHeight:1 }}>
                {phase === "uploading" ? "Upload Files to Begin"
                 : phase === "done"    ? "Pipeline Complete"
                 : `Processing — ${doneCount}/7`}
              </h2>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              {phase === "running" && (
                <div style={{ display:"flex", alignItems:"center", gap:7, padding:"5px 12px", borderRadius:6, border:"1px solid rgba(220,38,38,0.35)", background:"rgba(220,38,38,0.07)" }}>
                  <div className="live-dot" />
                  <span style={{ fontSize:10, fontWeight:700, color:"#dc2626", letterSpacing:"2px", textTransform:"uppercase" }}>Live</span>
                </div>
              )}
              <span style={{ fontSize:22, fontWeight:900, color: pct === 100 ? "#ffffff" : "rgba(255,255,255,0.3)" }}>
                {pct}%
              </span>
            </div>
          </div>

          {/* Progress bar */}
          {(phase === "running" || phase === "done") && (
            <div style={{ height:2, background:"rgba(255,255,255,0.08)", borderRadius:1, overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${pct}%`, background: pct === 100 ? "#ffffff" : "#dc2626", transition:"width 0.6s cubic-bezier(0.16,1,0.3,1)", animation:"amp-barFill 0.6s ease" }} />
            </div>
          )}
        </div>

        {/* ── Module table ────────────────────────────────── */}
        <div style={{ border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, overflow:"hidden" }}>
          {/* Table header */}
          <div style={{ display:"grid", gridTemplateColumns:"48px 1fr 100px 120px", padding:"10px 20px", background:"rgba(255,255,255,0.03)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
            {["#","Module","Status","Result"].map(h => (
              <span key={h} style={{ fontSize:9, fontWeight:700, color:"rgba(255,255,255,0.25)", letterSpacing:"2px", textTransform:"uppercase" }}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          {MODULES.map((m, i) => {
            const s       = statuses[m.key];
            const text    = statusText[m.key];
            const isActive = activeModule === m.key;
            const isDone  = s === "done";

            return (
              <div key={m.key} className={`amp-row${isActive ? " amp-active-row" : ""}`}
                style={{
                  display:"grid", gridTemplateColumns:"48px 1fr 100px 120px",
                  padding:"14px 20px", alignItems:"center",
                  background: isDone    ? "rgba(255,255,255,0.02)"
                             : isActive ? "rgba(220,38,38,0.05)"
                             : "transparent",
                  borderBottom: i < MODULES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  transition: "background 0.3s",
                  animationDelay: `${i * 0.04}s`,
                }}
              >
                {/* Number */}
                <span style={{ fontWeight:900, fontSize:13, fontFamily:"monospace",
                  color: isDone ? "rgba(255,255,255,0.2)" : isActive ? "#dc2626" : "rgba(255,255,255,0.12)" }}>
                  {m.num}
                </span>

                {/* Label + desc */}
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color: isDone ? "rgba(255,255,255,0.5)" : isActive ? "#ffffff" : "rgba(255,255,255,0.3)", marginBottom:2 }}>
                    {isActive && <span className="amp-spinner" style={{ marginRight:8 }} />}
                    {m.label}
                  </div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.2)" }}>{m.desc}</div>
                </div>

                {/* Status badge */}
                <div>
                  {s === "waiting" && <span style={{ fontSize:9, padding:"3px 8px", borderRadius:4, background:"rgba(255,255,255,0.04)", color:"rgba(255,255,255,0.2)", fontWeight:700, letterSpacing:"1px" }}>WAITING</span>}
                  {s === "running" && <span style={{ fontSize:9, padding:"3px 8px", borderRadius:4, background:"rgba(220,38,38,0.15)", color:"#ef4444", fontWeight:700, letterSpacing:"1px", border:"1px solid rgba(220,38,38,0.3)" }}>RUNNING</span>}
                  {s === "done"    && <span style={{ fontSize:9, padding:"3px 8px", borderRadius:4, background:"rgba(255,255,255,0.08)", color:"#ffffff",  fontWeight:700, letterSpacing:"1px" }}>DONE</span>}
                  {s === "error"   && <span style={{ fontSize:9, padding:"3px 8px", borderRadius:4, background:"rgba(220,38,38,0.2)",  color:"#ef4444",  fontWeight:700, letterSpacing:"1px" }}>ERROR</span>}
                </div>

                {/* Result text */}
                <div className={isActive ? "amp-running-text" : ""} style={{ fontSize:11, color: isDone ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {text || "—"}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Upload area ─────────────────────────────────── */}
        {phase === "uploading" && (
          <div style={{ marginTop:24 }}>
            <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.3)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12 }}>
              Step 01 — Pre-Scan Upload
            </div>
            <Suspense fallback={
              <div style={{ padding:32, textAlign:"center", border:"1px dashed rgba(255,255,255,0.08)", borderRadius:12, color:"rgba(255,255,255,0.3)", fontSize:13 }}>
                Loading upload module…
              </div>
            }>
              <M0 onComplete={handleM0} />
            </Suspense>
          </div>
        )}

        {/* ── Complete banner ──────────────────────────────── */}
        {phase === "done" && (
          <div style={{ marginTop:24, padding:"28px 32px", background:"#ffffff", borderRadius:16, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:10, fontWeight:700, color:"#dc2626", letterSpacing:"3px", textTransform:"uppercase", marginBottom:4 }}>
                Pipeline Complete
              </div>
              <div style={{ fontSize:20, fontWeight:900, color:"#000000", letterSpacing:"-0.04em" }}>
                All 7 modules finished
              </div>
              <div style={{ fontSize:13, color:"rgba(0,0,0,0.5)", marginTop:4 }}>
                Delta report has been generated and downloaded.
              </div>
            </div>
            <div style={{ fontSize:40 }}>✓</div>
          </div>
        )}

        {/* ── Silent background modules ────────────────────── */}
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
