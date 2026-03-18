const STEPS = [
  { id: 1, key: "m0", moduleLabel: "M0", label: "Pre-Scan",            icon: "🔍", color: "#0ea5e9" },
  { id: 2, key: "m1", moduleLabel: "M1", label: "PHI Scrubber",         icon: "🛡️", color: "#dc2626" },
  { id: 3, key: "m2", moduleLabel: "M2", label: "Triage Router",         icon: "🗂️", color: "#7c3aed" },
  { id: 4, key: "m3", moduleLabel: "M3", label: "Alias Engine",          icon: "🔗", color: "#0284c7" },
  { id: 5, key: "m5", moduleLabel: "M5", label: "Definition Engine",     icon: "📖", color: "#d97706" },
  { id: 6, key: "m4", moduleLabel: "M4", label: "Confidence Threshold",  icon: "⚖️", color: "#16a34a" },
  { id: 7, key: "m6", moduleLabel: "M6", label: "Delta Report",          icon: "📊", color: "#4338ca" },
  { id: 8, key: "m7", moduleLabel: "M7", label: "Audit Log",             icon: "📋", color: "#334155" },
];

interface Props {
  activeStep: number;
  completedSteps: Set<number>;
  onStepClick: (step: number) => void;
  username: string;
  onLogout: () => void;
}

export default function PipelineStepper({ activeStep, completedSteps, onStepClick, username, onLogout }: Props) {
  return (
    <div style={{ background: "#0f172a", padding: "0 20px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px #0006" }}>
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0 8px", borderBottom: "1px solid #1e293b" }}>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, letterSpacing: "-0.3px" }}>🏥 Eden Care Pipeline</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>👤 {username}</span>
          <button onClick={onLogout} style={{ padding: "4px 12px", borderRadius: 7, border: "1px solid #334155", background: "transparent", color: "#94a3b8", fontSize: 11, cursor: "pointer" }}>Sign Out</button>
        </div>
      </div>

      {/* Step bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px 0", overflowX: "auto", gap: 0 }}>
        {STEPS.map((step, i) => {
          const isDone = completedSteps.has(step.id);
          const isActive = activeStep === step.id;
          // M7 and M8 always accessible; others need previous step done
          const isAccessible = step.id <= 6 ? (step.id === 1 || completedSteps.has(step.id - 1) || isDone) : true;

          return (
            <div key={step.id} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? "1 1 auto" : "0 0 auto" }}>
              <button
                onClick={() => isAccessible && onStepClick(step.id)}
                disabled={!isAccessible}
                title={step.label}
                style={{
                  display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", borderRadius: 10,
                  border: isActive ? "2px solid " + step.color : "2px solid transparent",
                  background: isActive ? step.color + "25" : "transparent",
                  cursor: isAccessible ? "pointer" : "not-allowed",
                  opacity: isAccessible ? 1 : 0.4,
                  whiteSpace: "nowrap",
                  transition: "all 0.15s",
                }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700,
                  background: isDone ? "#16a34a" : isActive ? step.color : "#1e293b",
                  color: "#fff", flexShrink: 0,
                }}>
                  {isDone ? "✓" : step.id}
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 9, color: "#64748b", lineHeight: 1 }}>{step.moduleLabel}</span>
                  <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : isDone ? "#94a3b8" : "#64748b", lineHeight: 1.2 }}>{step.icon} {step.label}</span>
                </div>
              </button>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 2, background: isDone ? "#16a34a" : "#1e293b", minWidth: 8 }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
