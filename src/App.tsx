import { useState, useEffect, useRef, lazy, Suspense } from "react";
import LoginScreen from "./components/LoginScreen";
import PipelineStepper from "./components/PipelineStepper";
import ApiKeyPanel from "./components/ApiKeyPanel";
import AdminPanel from "./components/AdminPanel";
import ModeSelector from "./components/ModeSelector";
import AutoModePipeline from "./components/AutoModePipeline";
import ThreeBackground from "./components/ThreeBackground";
import { usePipelineState } from "./hooks/usePipelineState";
import { useAuditLog } from "./hooks/useAuditLog";
import { SESSION_KEY } from "./auth.config";
import { getUsers } from "./lib/userManager";

// ── Lazy-load all modules ──────────────────────────────────────────────────────
const M0 = lazy(() => import("./modules/M0PreScan"));
const M1 = lazy(() => import("./modules/M1PHIScrubber"));
const M2 = lazy(() => import("./modules/M2TriageRouter"));
const M3 = lazy(() => import("./modules/M3AliasEngine"));
const M4 = lazy(() => import("./modules/M4ConfidenceThreshold"));
const M5 = lazy(() => import("./modules/M5DefinitionEngine"));
const M6 = lazy(() => import("./modules/M6DeltaReport"));
const M7 = lazy(() => import("./modules/M7AuditLog"));

const IDLE_MS = 30 * 60 * 1000; // 30 minutes
const MODE_KEY = "eden_mode_v1";

function ModuleLoader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, color: "#94a3b8", fontSize: 14 }}>
      Loading module…
    </div>
  );
}

export default function App() {
  const [user, setUser]           = useState<string | null>(null);
  const [role, setRole]           = useState<string>("USER");
  const [activeStep, setStep]     = useState(1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [mode, setMode]           = useState<"auto" | "manual" | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [toast, setToast]         = useState<string>("");
  const [userCount, setUserCount] = useState(0);
  const idleTimer                 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { state, setM0, setM1, setM2, setM3, setM4, setM5 } = usePipelineState();

  // ── Restore session on mount ───────────────────────────────────────────────
  useEffect(() => {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      try {
        const s = JSON.parse(raw);
        if (s.username) {
          // Verify fingerprint
          const fp = btoa((navigator.userAgent + screen.width + screen.height).slice(0, 200));
          if (s.fingerprint && s.fingerprint !== fp) {
            sessionStorage.removeItem(SESSION_KEY);
            return;
          }
          setUser(s.username);
          setRole(s.role || "USER");
          refreshUserCount();
          // Restore mode from sessionStorage
          const savedMode = sessionStorage.getItem(MODE_KEY) as "auto" | "manual" | null;
          if (savedMode === "auto" || savedMode === "manual") setMode(savedMode);
        }
      } catch { /* ignore */ }
    }
  }, []);

  // ── Inactivity auto-logout ─────────────────────────────────────────────────
  useEffect(() => {
    if (!user) return;
    function resetTimer() {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        doLogout("session-expired");
      }, IDLE_MS);
    }
    resetTimer();
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [user]);

  function refreshUserCount() {
    try { setUserCount(getUsers().length); } catch { setUserCount(1); }
  }

  const { writeEntry } = useAuditLog(user || "system");

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3500);
  }

  function handleLogin(username: string, userRole: string) {
    setUser(username);
    setRole(userRole);
    refreshUserCount();
    setMode(null);
    sessionStorage.removeItem(MODE_KEY);
  }

  function doLogout(reason?: string) {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(MODE_KEY);
    setUser(null);
    setRole("USER");
    setStep(1);
    setCompleted(new Set());
    setMode(null);
    setShowAdmin(false);
    if (reason === "session-expired") showToast("Session expired — please sign in again.");
  }

  function handleLogout() { doLogout(); }

  function handleModeSelect(m: "auto" | "manual") {
    setMode(m);
    sessionStorage.setItem(MODE_KEY, m);
  }

  function handleModeToggle() {
    const next = mode === "auto" ? "manual" : "auto";
    setMode(next);
    sessionStorage.setItem(MODE_KEY, next);
  }

  function completeStep(step: number, data: any, setter: (d: any) => void) {
    setter(data);
    setCompleted(prev => new Set([...prev, step]));
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

  // ── Not logged in ──────────────────────────────────────────────────────────
  if (!user) return <LoginScreen onLogin={handleLogin} />;

  // ── Mode not yet selected ──────────────────────────────────────────────────
  if (mode === null) return <ModeSelector onSelect={handleModeSelect} />;

  // ── Auto mode ──────────────────────────────────────────────────────────────
  if (mode === "auto") {
    return (
      <div style={{ minHeight: "100vh", background: "#000000", position:"relative" }}>
        <ThreeBackground />
        <div style={{ position:"relative", zIndex:1 }}>
        <PipelineStepper
          activeStep={0}
          completedSteps={new Set()}
          onStepClick={() => {}}
          username={user}
          role={role}
          mode={mode}
          onModeToggle={handleModeToggle}
          onLogout={handleLogout}
          onAdminPanel={role === "SUPER_ADMIN" ? () => setShowAdmin(true) : undefined}
          userCount={role === "SUPER_ADMIN" ? userCount : undefined}
        />
        <ApiKeyPanel role={role} />
        <AutoModePipeline onComplete={() => showToast("Pipeline complete! Delta report downloaded.")} />
        {showAdmin && role === "SUPER_ADMIN" && (
          <AdminPanel currentUser={user} onClose={() => { setShowAdmin(false); refreshUserCount(); }} />
        )}
        {toast && <Toast msg={toast} />}
        </div>
      </div>
    );
  }

  // ── Manual mode ────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#000000", position:"relative" }}>
      <ThreeBackground />
      <div style={{ position:"relative", zIndex:1 }}>
      <PipelineStepper
        activeStep={activeStep}
        completedSteps={completed}
        onStepClick={setStep}
        username={user}
        role={role}
        mode={mode}
        onModeToggle={handleModeToggle}
        onLogout={handleLogout}
        onAdminPanel={role === "SUPER_ADMIN" ? () => setShowAdmin(true) : undefined}
        userCount={role === "SUPER_ADMIN" ? userCount : undefined}
      />

      <ApiKeyPanel role={role} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px" }}>
        <Suspense fallback={<ModuleLoader />}>

          {activeStep === 1 && (
            <M0 onComplete={(data: any) => completeStep(1, data, setM0)} />
          )}
          {activeStep === 2 && (
            <M1
              prefillData={state.m0Result ? { toProcess: state.m0Result.toProcess } : null}
              onComplete={(data: any) => completeStep(2, data, setM1)}
            />
          )}
          {activeStep === 3 && (
            <M2
              prefillData={state.m1Result}
              onComplete={(data: any) => completeStep(3, data, setM2)}
            />
          )}
          {activeStep === 4 && (
            <M3
              prefillData={state.m2Result}
              onComplete={(data: any) => completeStep(4, data, setM3)}
            />
          )}
          {activeStep === 5 && (
            <M5
              prefillData={state.m3Result}
              onComplete={(data: any) => completeStep(5, data, setM5)}
            />
          )}
          {activeStep === 6 && (
            <M4
              prefillData={{
                ...(state.m5Result || state.m3Result),
                masterCatalogs: state.m0Result?.masterCatalogs,
              }}
              onComplete={(data: any) => completeStep(6, data, setM4)}
            />
          )}
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
          {activeStep === 8 && <M7 />}

        </Suspense>
      </div>

      {showAdmin && role === "SUPER_ADMIN" && (
        <AdminPanel currentUser={user} onClose={() => { setShowAdmin(false); refreshUserCount(); }} />
      )}
      {toast && <Toast msg={toast} />}
      </div>
    </div>
  );
}

function Toast({ msg }: { msg: string }) {
  return (
    <div style={{
      position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
      background: "#111111", border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 10, padding: "12px 24px", color: "#fff", fontSize: 12,
      fontWeight: 700, zIndex: 9999, boxShadow: "0 8px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
      whiteSpace: "nowrap", letterSpacing:"0.5px",
      animation: "toastSlide 0.3s cubic-bezier(0.16,1,0.3,1)",
      borderLeft: "3px solid #dc2626",
    }}>
      {msg}
    </div>
  );
}
