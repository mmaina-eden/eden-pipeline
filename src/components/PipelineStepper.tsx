/**
 * PipelineStepper — Clinical black bar with white steps and red active state.
 * Minimal, precise, medical-grade navigation.
 */

const STEPS = [
  { id:1, key:"m0", moduleLabel:"M0", label:"Pre-Scan",       icon:"🔍", color:"#ffffff" },
  { id:2, key:"m1", moduleLabel:"M1", label:"PHI Scrubber",   icon:"🛡",  color:"#ffffff" },
  { id:3, key:"m2", moduleLabel:"M2", label:"Triage",         icon:"🗂",  color:"#ffffff" },
  { id:4, key:"m3", moduleLabel:"M3", label:"Alias Engine",   icon:"🔗", color:"#ffffff" },
  { id:5, key:"m5", moduleLabel:"M5", label:"Definitions",    icon:"📖", color:"#ffffff" },
  { id:6, key:"m4", moduleLabel:"M4", label:"DNA + Conf.",    icon:"⚖",  color:"#ffffff" },
  { id:7, key:"m6", moduleLabel:"M6", label:"Delta Report",   icon:"📊", color:"#ffffff" },
  { id:8, key:"m7", moduleLabel:"M7", label:"Audit Log",      icon:"📋", color:"#ffffff" },
];

const CSS = `
  .ps-btn { transition: all 0.15s; }
  .ps-btn:hover:not(:disabled) { background: rgba(255,255,255,0.05) !important; }
  .ps-btn:disabled { opacity: 0.28; cursor: not-allowed; }
  .ps-node { transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1); }
  .ps-ctrl { transition: all 0.15s; }
  .ps-ctrl:hover { opacity: 0.8; }
  .ps-mode { transition: all 0.15s; }
  .ps-mode:hover { background: rgba(255,255,255,0.08) !important; }
  .ps-logout { transition: all 0.15s; }
  .ps-logout:hover { border-color: #dc2626 !important; color: #dc2626 !important; }
  .ps-connector { transition: background 0.4s; }
  @keyframes ps-nodeIn { from{transform:scale(0.6);opacity:0} to{transform:scale(1);opacity:1} }
  @keyframes ps-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0)} 50%{box-shadow:0 0 0 5px rgba(220,38,38,0.2)} }
  .ps-active { animation: ps-pulse 1.8s ease-in-out infinite; }
`;

interface Props {
  activeStep:     number;
  completedSteps: Set<number>;
  onStepClick:    (step: number) => void;
  username:       string;
  role:           string;
  mode:           "auto" | "manual";
  onModeToggle:   () => void;
  onLogout:       () => void;
  onAdminPanel?:  () => void;
  userCount?:     number;
}

export default function PipelineStepper({
  activeStep, completedSteps, onStepClick, username, role,
  mode, onModeToggle, onLogout, onAdminPanel, userCount,
}: Props) {
  const isSuperAdmin = role === "SUPER_ADMIN";

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        background: "#000000",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "sticky", top: 0, zIndex: 200,
        boxShadow: "0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.8)",
      }}>
        {/* Red top line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, #dc2626 0%, #ef4444 40%, #dc2626 100%)" }} />

        {/* ── Top control bar ──────────────────────────────── */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>

          {/* Brand */}
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink:0 }}>
              <rect x="8.5" y="0" width="5" height="22" rx="1.5" fill="#dc2626"/>
              <rect x="0"   y="8.5" width="22" height="5" rx="1.5" fill="#dc2626"/>
            </svg>
            <div>
              <div style={{ fontWeight:900, fontSize:14, color:"#ffffff", letterSpacing:"-0.03em", lineHeight:1 }}>EDEN CARE</div>
              <div style={{ fontSize:8, color:"rgba(255,255,255,0.28)", letterSpacing:"2px", textTransform:"uppercase", marginTop:2 }}>
                Health Insurance · Pipeline
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>

            {/* Mode toggle */}
            <button className="ps-mode" onClick={onModeToggle} style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"5px 12px", borderRadius:6,
              border:"1px solid rgba(255,255,255,0.1)",
              background:"rgba(255,255,255,0.04)",
              cursor:"pointer", fontSize:11, fontWeight:700,
              color:"rgba(255,255,255,0.65)",
              letterSpacing:"1px", textTransform:"uppercase",
            }}>
              <span style={{ fontSize:12 }}>{mode === "auto" ? "🤖" : "🎛"}</span>
              <span>{mode === "auto" ? "Auto" : "Manual"}</span>
            </button>

            {/* Admin */}
            {isSuperAdmin && onAdminPanel && (
              <button className="ps-ctrl" onClick={onAdminPanel} style={{
                display:"flex", alignItems:"center", gap:6,
                padding:"5px 12px", borderRadius:6,
                border:"1px solid rgba(220,38,38,0.3)",
                background:"rgba(220,38,38,0.07)",
                cursor:"pointer", fontSize:11, fontWeight:700,
                color:"rgba(220,38,38,0.9)", position:"relative",
                letterSpacing:"1px", textTransform:"uppercase",
              }}>
                <span>👥</span>
                <span>Users</span>
                {userCount !== undefined && userCount > 0 && (
                  <span style={{ position:"absolute", top:-5, right:-5, background:"#dc2626", color:"#fff", borderRadius:"50%", width:15, height:15, display:"flex", alignItems:"center", justifyContent:"center", fontSize:8, fontWeight:800 }}>
                    {userCount}
                  </span>
                )}
              </button>
            )}

            {/* User */}
            <div style={{ display:"flex", alignItems:"center", gap:7, padding:"5px 12px", borderRadius:6, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.5)" }}>{username}</span>
              <span style={{
                fontSize:8, fontWeight:800, padding:"2px 6px", borderRadius:4, letterSpacing:"1.5px", textTransform:"uppercase",
                background: isSuperAdmin ? "#dc2626" : "rgba(255,255,255,0.1)",
                color: isSuperAdmin ? "#fff" : "rgba(255,255,255,0.5)",
              }}>
                {isSuperAdmin ? "ADMIN" : "USER"}
              </span>
            </div>

            <button className="ps-logout" onClick={onLogout} style={{
              padding:"5px 12px", borderRadius:6,
              border:"1px solid rgba(255,255,255,0.08)",
              background:"transparent", color:"rgba(255,255,255,0.35)",
              fontSize:11, cursor:"pointer", fontWeight:600,
              letterSpacing:"0.5px",
            }}>
              Sign Out
            </button>
          </div>
        </div>

        {/* ── Step bar ─────────────────────────────────────── */}
        <div style={{ display:"flex", alignItems:"center", padding:"8px 20px", overflowX:"auto", gap:0 }}>
          {STEPS.map((step, i) => {
            const isDone       = completedSteps.has(step.id);
            const isActive     = activeStep === step.id;
            const isAccessible = step.id === 1 || completedSteps.has(step.id - 1) || isDone || step.id === 8;

            return (
              <div key={step.id} style={{ display:"flex", alignItems:"center", flex: i < STEPS.length - 1 ? "1 1 auto" : "0 0 auto" }}>

                <button
                  className="ps-btn"
                  onClick={() => isAccessible && onStepClick(step.id)}
                  disabled={!isAccessible} title={step.label}
                  style={{
                    display:"flex", alignItems:"center", gap:7,
                    padding:"6px 10px", borderRadius:8, border:"none",
                    background: isActive ? "rgba(220,38,38,0.1)" : "transparent",
                    cursor: isAccessible ? "pointer" : "not-allowed",
                    whiteSpace:"nowrap",
                    outline: isActive ? "1px solid rgba(220,38,38,0.4)" : "none",
                  }}
                >
                  {/* Node */}
                  <div
                    className={`ps-node${isActive ? " ps-active" : ""}`}
                    style={{
                      width: 26, height: 26, borderRadius: isDone ? 8 : "50%",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize: 11, fontWeight: 800, flexShrink: 0,
                      background: isDone    ? "#ffffff"
                                : isActive  ? "#dc2626"
                                : "rgba(255,255,255,0.07)",
                      color: isDone    ? "#000000"
                           : isActive  ? "#ffffff"
                           : "rgba(255,255,255,0.4)",
                      boxShadow: isDone   ? "0 0 0 2px rgba(255,255,255,0.2)"
                               : isActive ? "0 0 16px rgba(220,38,38,0.6)"
                               : "none",
                      transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                  >
                    {isDone ? "✓" : step.id}
                  </div>

                  {/* Label */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                    <span style={{ fontSize:8, color:"rgba(255,255,255,0.2)", letterSpacing:"1px", textTransform:"uppercase", lineHeight:1 }}>
                      {step.moduleLabel}
                    </span>
                    <span style={{
                      fontSize:11, lineHeight:1.3,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#ffffff" : isDone ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.28)",
                    }}>
                      {step.icon} {step.label}
                    </span>
                  </div>
                </button>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="ps-connector" style={{
                    flex:1, height:1, minWidth:8,
                    background: isDone ? "#ffffff" : "rgba(255,255,255,0.07)",
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
