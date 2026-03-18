import { useState, useEffect, lazy, Suspense } from "react";
import LoginScreen from "./components/LoginScreen";
import PipelineStepper from "./components/PipelineStepper";
import ApiKeyPanel from "./components/ApiKeyPanel";
import { usePipelineState } from "./hooks/usePipelineState";
import { useAuditLog } from "./hooks/useAuditLog";
import { SESSION_KEY } from "./auth.config";

// ── Lazy-load all modules ──────────────────────────────────────────────────────
const M0 = lazy(() => import("./modules/M0PreScan"));
const M1 = lazy(() => import("./modules/M1PHIScrubber"));
const M2 = lazy(() => import("./modules/M2TriageRouter"));
const M3 = lazy(() => import("./modules/M3AliasEngine"));
const M4 = lazy(() => import("./modules/M4ConfidenceThreshold"));
const M5 = lazy(() => import("./modules/M5DefinitionEngine"));
const M6 = lazy(() => import("./modules/M6DeltaReport"));
const M7 = lazy(() => import("./modules/M7AuditLog"));

// Step map: stepper step ID → module letter
// 1=M0, 2=M1, 3=M2, 4=M3, 5=M5, 6=M4, 7=M6, 8=M7

function ModuleLoader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, color: "#94a3b8", fontSize: 14 }}>
      Loading module…
    </div>
  );
}

export default function App() {
  const [user, setUser]           = useState<string | null>(null);
  const [activeStep, setStep]     = useState(1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const { state, setM0, setM1, setM2, setM3, setM4, setM5 } = usePipelineState();

  // Restore session on mount
  useEffect(() => {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      try { const s = JSON.parse(raw); if (s.username) setUser(s.username); }
      catch { /* ignore */ }
    }
  }, []);

  const { writeEntry } = useAuditLog(user || "system");

  function handleLogin(username: string) { setUser(username); }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
    setStep(1);
    setCompleted(new Set());
  }

  function completeStep(step: number, data: any, setter: (d: any) => void) {
    setter(data);
    setCompleted(prev => new Set([...prev, step]));
    // Advance to next step; cap at 8
    setStep(step + 1 <= 8 ? step + 1 : step);
    writeEntry({
      module: "Step" + step,
      action: "Step completed — passed to Step " + (step + 1),
      fileName: "pipeline",
      outcome: "success",
      itemCount: Array.isArray(data)
        ? data.length
        : (data?.rows?.length || data?.triaged?.length || data?.resolved?.length ||
           data?.results?.length || data?.enriched?.length || data?.toProcess?.length || 0),
    });
  }

  if (!user) return <LoginScreen onLogin={handleLogin} />;

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      <PipelineStepper
        activeStep={activeStep}
        completedSteps={completed}
        onStepClick={setStep}
        username={user}
        onLogout={handleLogout}
      />

      <ApiKeyPanel />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>
        <Suspense fallback={<ModuleLoader />}>

          {/* Step 1 — M0 Pre-Scan (catalog match gate) */}
          {activeStep === 1 && (
            <M0 onComplete={(data: any) => completeStep(1, data, setM0)} />
          )}

          {/* Step 2 — M1 PHI Scrubber */}
          {activeStep === 2 && (
            <M1
              prefillData={state.m0Result ? { toProcess: state.m0Result.toProcess } : null}
              onComplete={(data: any) => completeStep(2, data, setM1)}
            />
          )}

          {/* Step 3 — M2 Triage Router */}
          {activeStep === 3 && (
            <M2
              prefillData={state.m1Result}
              onComplete={(data: any) => completeStep(3, data, setM2)}
            />
          )}

          {/* Step 4 — M3 Alias Engine */}
          {activeStep === 4 && (
            <M3
              prefillData={state.m2Result}
              onComplete={(data: any) => completeStep(4, data, setM3)}
            />
          )}

          {/* Step 5 — M5 Definition Engine */}
          {activeStep === 5 && (
            <M5
              prefillData={state.m3Result}
              onComplete={(data: any) => completeStep(5, data, setM5)}
            />
          )}

          {/* Step 6 — M4 Confidence Threshold + DNA Engine */}
          {activeStep === 6 && (
            <M4
              prefillData={{
                ...(state.m5Result || state.m3Result),
                // Pass master catalogs from M0 so M4 doesn't need re-upload
                masterCatalogs: state.m0Result?.masterCatalogs,
              }}
              onComplete={(data: any) => completeStep(6, data, setM4)}
            />
          )}

          {/* Step 7 — M6 Delta Report + Export */}
          {activeStep === 7 && (
            <M6
              prefillData={{
                results:        state.m4Result?.results,
                hospitalName:   state.m4Result?.hospitalName,
                masterCatalogs: state.m4Result?.masterCatalogs,
                masterDNAs:     state.m4Result?.masterDNAs,
                preMatched:     state.m0Result?.preMatched,
              }}
              onComplete={() => completeStep(7, {}, () => {})}
            />
          )}

          {/* Step 8 — M7 Audit Log */}
          {activeStep === 8 && (
            <M7 />
          )}

        </Suspense>
      </div>
    </div>
  );
}
