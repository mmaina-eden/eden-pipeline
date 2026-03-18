/**
 * PipelineStepper — Neural command bar with orbital step nodes.
 * Sticky header with animated module navigation + user controls.
 */

const STEPS = [
  { id:1, key:"m0", moduleLabel:"M0", label:"Pre-Scan",        icon:"🔍", color:"#38bdf8" },
  { id:2, key:"m1", moduleLabel:"M1", label:"PHI Scrubber",    icon:"🛡️", color:"#f43f5e" },
  { id:3, key:"m2", moduleLabel:"M2", label:"Triage Router",   icon:"🗂️", color:"#a78bfa" },
  { id:4, key:"m3", moduleLabel:"M3", label:"Alias Engine",    icon:"🔗", color:"#00d4ff" },
  { id:5, key:"m5", moduleLabel:"M5", label:"Definition Eng.", icon:"📖", color:"#fb923c" },
  { id:6, key:"m4", moduleLabel:"M4", label:"DNA + Conf.",     icon:"⚖️", color:"#34d399" },
  { id:7, key:"m6", moduleLabel:"M6", label:"Delta Report",    icon:"📊", color:"#818cf8" },
  { id:8, key:"m7", moduleLabel:"M7", label:"Audit Log",       icon:"📋", color:"#94a3b8" },
];

const CSS = `
  @keyframes ps-shine { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes ps-spin  { to{transform:rotate(360deg)} }
  @keyframes ps-pulse { 0%,100%{box-shadow:0 0 0 0 currentColor} 50%{box-shadow:0 0 0 4px transparent} }
  @keyframes ps-nodeIn { from{transform:scale(0.6);opacity:0} to{transform:scale(1);opacity:1} }

  .ps-step { transition: all 0.2s cubic-bezier(0.16,1,0.3,1); }
  .ps-step:hover:not(:disabled) { background: rgba(255,255,255,0.05) !important; }

  .ps-node {
    transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .ps-node-active {
    animation: ps-pulse 1.8s ease-in-out infinite;
  }

  .ps-mode { transition: all 0.2s; }
  .ps-mode:hover { opacity:0.85; transform:translateY(-1px); }

  .ps-admin { transition: all 0.2s; }
  .ps-admin:hover { background:rgba(124,58,237,0.2) !important; border-color:rgba(124,58,237,0.5) !important; }

  .ps-logout { transition: all 0.2s; }
  .ps-logout:hover { background:rgba(255,51,102,0.12) !important; border-color:rgba(255,51,102,0.35) !important; color:#ff8fab !important; }

  .ps-connector { transition: background 0.4s ease, box-shadow 0.4s ease; }

  .gradient-text {
    background:linear-gradient(135deg,#00d4ff 0%,#a855f7 50%,#00d4ff 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:ps-shine 4s linear infinite;
  }
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
        background: "rgba(4,4,18,0.88)",
        backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(255,255,255,0.055)",
        padding: "0 20px",
        position: "sticky", top: 0, zIndex: 200,
        boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
      }}>

        {/* ── Top control bar ────────────────────────────────── */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0 9px", borderBottom:"1px solid rgba(255,255,255,0.045)" }}>

          {/* Brand */}
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:32, height:32, borderRadius:10, background:"linear-gradient(135deg,rgba(124,58,237,0.5),rgba(0,212,255,0.3))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, boxShadow:"0 0 16px rgba(124,58,237,0.4)" }}>
              🏥
            </div>
            <div>
              <div style={{ fontWeight:900, fontSize:14, letterSpacing:"-0.2px" }}>
                <span className="gradient-text">Eden Care</span>
              </div>
              <div style={{ fontSize:9, color:"rgba(255,255,255,0.25)", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:1 }}>
                Neural Pipeline
              </div>
            </div>
          </div>

          {/* Right controls */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>

            {/* Mode toggle */}
            <button className="ps-mode" onClick={onModeToggle} style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"5px 12px", borderRadius:20,
              border:`1px solid ${mode === "auto" ? "rgba(0,212,255,0.3)" : "rgba(168,85,247,0.3)"}`,
              background: mode === "auto" ? "rgba(0,212,255,0.1)" : "rgba(168,85,247,0.1)",
              cursor:"pointer", fontSize:11, fontWeight:700,
              color: mode === "auto" ? "#67e8f9" : "#c4b5fd",
              boxShadow: mode === "auto" ? "0 0 16px rgba(0,212,255,0.15)" : "0 0 16px rgba(168,85,247,0.15)",
            }}>
              <span>{mode === "auto" ? "🤖" : "🎛️"}</span>
              <span>{mode === "auto" ? "AUTO" : "MANUAL"}</span>
            </button>

            {/* Admin panel (super admin only) */}
            {isSuperAdmin && onAdminPanel && (
              <button className="ps-admin" onClick={onAdminPanel} style={{
                display:"flex", alignItems:"center", gap:6,
                padding:"5px 12px", borderRadius:20,
                border:"1px solid rgba(124,58,237,0.25)",
                background:"rgba(124,58,237,0.08)",
                cursor:"pointer", fontSize:11, fontWeight:700,
                color:"#a78bfa", position:"relative",
              }}>
                <span>👥</span>
                <span>Users</span>
                {userCount !== undefined && userCount > 0 && (
                  <span style={{ position:"absolute", top:-5, right:-5, background:"linear-gradient(135deg,#7c3aed,#a855f7)", color:"#fff", borderRadius:"50%", width:16, height:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:800, boxShadow:"0 0 8px rgba(124,58,237,0.6)" }}>
                    {userCount}
                  </span>
                )}
              </button>
            )}

            {/* User chip */}
            <div style={{ display:"flex", alignItems:"center", gap:7, padding:"5px 12px", borderRadius:20, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.55)" }}>👤 {username}</span>
              <span style={{
                fontSize:9, fontWeight:800, padding:"2px 7px", borderRadius:8,
                background: isSuperAdmin ? "rgba(124,58,237,0.25)" : "rgba(0,212,255,0.15)",
                color: isSuperAdmin ? "#c4b5fd" : "#67e8f9",
                border: `1px solid ${isSuperAdmin ? "rgba(124,58,237,0.35)" : "rgba(0,212,255,0.25)"}`,
                letterSpacing: "0.8px",
                boxShadow: isSuperAdmin ? "0 0 8px rgba(124,58,237,0.2)" : "0 0 8px rgba(0,212,255,0.15)",
              }}>
                {isSuperAdmin ? "ADMIN" : "USER"}
              </span>
            </div>

            {/* Sign out */}
            <button className="ps-logout" onClick={onLogout} style={{
              padding:"5px 12px", borderRadius:20,
              border:"1px solid rgba(255,255,255,0.08)",
              background:"transparent", color:"rgba(255,255,255,0.4)",
              fontSize:11, cursor:"pointer", fontWeight:600,
            }}>
              Sign Out
            </button>
          </div>
        </div>

        {/* ── Step node bar ──────────────────────────────────── */}
        <div style={{ display:"flex", alignItems:"center", padding:"10px 0 8px", overflowX:"auto", gap:0 }}>
          {STEPS.map((step, i) => {
            const isDone       = completedSteps.has(step.id);
            const isActive     = activeStep === step.id;
            const isAccessible = step.id === 1 || completedSteps.has(step.id - 1) || isDone || step.id === 8;

            return (
              <div key={step.id} style={{ display:"flex", alignItems:"center", flex: i < STEPS.length - 1 ? "1 1 auto" : "0 0 auto" }}>
                <button
                  className="ps-step"
                  onClick={() => isAccessible && onStepClick(step.id)}
                  disabled={!isAccessible} title={step.label}
                  style={{
                    display:"flex", alignItems:"center", gap:8,
                    padding:"6px 10px", borderRadius:12,
                    border: isActive ? `1px solid ${step.color}50` : "1px solid transparent",
                    background: isActive ? `${step.color}12` : "transparent",
                    cursor: isAccessible ? "pointer" : "not-allowed",
                    opacity: isAccessible ? 1 : 0.3,
                    whiteSpace:"nowrap",
                  }}
                >
                  {/* Node circle */}
                  <div
                    className={`ps-node${isActive ? " ps-node-active" : ""}`}
                    style={{
                      width: 28, height: 28, borderRadius:"50%",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:11, fontWeight:700, flexShrink:0,
                      background: isDone
                        ? "linear-gradient(135deg,#10b981,#059669)"
                        : isActive
                          ? `linear-gradient(135deg,${step.color},${step.color}aa)`
                          : "rgba(255,255,255,0.07)",
                      color:"#fff",
                      boxShadow: isDone
                        ? "0 0 12px rgba(16,185,129,0.5)"
                        : isActive
                          ? `0 0 16px ${step.color}80, 0 0 4px ${step.color}40`
                          : "none",
                      border: isActive ? `1px solid ${step.color}60` : "1px solid transparent",
                      transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                  >
                    {isDone ? "✓" : step.id}
                  </div>

                  {/* Label */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                    <span style={{ fontSize:8.5, color:"rgba(255,255,255,0.25)", lineHeight:1, letterSpacing:"0.8px", textTransform:"uppercase" }}>
                      {step.moduleLabel}
                    </span>
                    <span style={{
                      fontSize:11, lineHeight:1.3,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff" : isDone ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.3)",
                    }}>
                      {step.icon} {step.label}
                    </span>
                  </div>
                </button>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="ps-connector" style={{
                    flex:1, height:1.5, minWidth:6,
                    background: isDone
                      ? `linear-gradient(90deg,#10b981,${STEPS[i+1].color}80)`
                      : "rgba(255,255,255,0.05)",
                    boxShadow: isDone ? "0 0 6px rgba(16,185,129,0.3)" : "none",
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
