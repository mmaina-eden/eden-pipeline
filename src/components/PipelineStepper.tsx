const STEPS = [
  { id:1, key:"m0", moduleLabel:"M0", label:"Pre-Scan",           icon:"🔍", color:"#38bdf8" },
  { id:2, key:"m1", moduleLabel:"M1", label:"PHI Scrubber",        icon:"🛡️", color:"#f43f5e" },
  { id:3, key:"m2", moduleLabel:"M2", label:"Triage Router",        icon:"🗂️", color:"#a78bfa" },
  { id:4, key:"m3", moduleLabel:"M3", label:"Alias Engine",         icon:"🔗", color:"#06b6d4" },
  { id:5, key:"m5", moduleLabel:"M5", label:"Definition Engine",    icon:"📖", color:"#fb923c" },
  { id:6, key:"m4", moduleLabel:"M4", label:"Confidence + DNA",     icon:"⚖️", color:"#34d399" },
  { id:7, key:"m6", moduleLabel:"M6", label:"Delta Report",         icon:"📊", color:"#818cf8" },
  { id:8, key:"m7", moduleLabel:"M7", label:"Audit Log",            icon:"📋", color:"#94a3b8" },
];

const CSS = `
  @keyframes stepGlow{0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0)}50%{box-shadow:0 0 12px 3px rgba(124,58,237,0.5)}}
  .eden-step-btn{transition:all 0.15s;}
  .eden-step-btn:hover:not(:disabled){background:rgba(255,255,255,0.06)!important;}
  .eden-mode-btn{transition:all 0.15s;}
  .eden-mode-btn:hover{opacity:0.85;}
  .eden-logout-btn{transition:all 0.15s;}
  .eden-logout-btn:hover{background:rgba(244,63,94,0.15)!important;border-color:rgba(244,63,94,0.4)!important;color:#f87171!important;}
  .eden-admin-btn{transition:all 0.15s;}
  .eden-admin-btn:hover{background:rgba(124,58,237,0.2)!important;border-color:rgba(124,58,237,0.5)!important;}
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
      <div style={{ background:"rgba(10,10,26,0.92)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,0.07)", padding:"0 20px", position:"sticky", top:0, zIndex:200 }}>

        {/* Top bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0 8px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:18, filter:"drop-shadow(0 0 8px rgba(124,58,237,0.7))" }}>🏥</span>
            <span style={{ color:"#fff", fontWeight:800, fontSize:15, letterSpacing:"-0.3px" }}>Eden Care Pipeline</span>
          </div>

          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            {/* Mode toggle */}
            <button className="eden-mode-btn" onClick={onModeToggle}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"5px 12px", borderRadius:20, border:"1px solid rgba(255,255,255,0.12)", background: mode==="auto" ? "rgba(6,182,212,0.15)" : "rgba(168,85,247,0.15)", cursor:"pointer", fontSize:12, fontWeight:700, color: mode==="auto" ? "#06b6d4" : "#a78bfa" }}>
              <span>{mode==="auto" ? "🤖" : "📋"}</span>
              <span>{mode==="auto" ? "AUTO" : "MANUAL"}</span>
            </button>

            {/* Admin panel button (super admin only) */}
            {isSuperAdmin && onAdminPanel && (
              <button className="eden-admin-btn" onClick={onAdminPanel}
                style={{ display:"flex", alignItems:"center", gap:6, padding:"5px 12px", borderRadius:20, border:"1px solid rgba(124,58,237,0.25)", background:"rgba(124,58,237,0.1)", cursor:"pointer", fontSize:12, fontWeight:700, color:"#a78bfa", position:"relative" }}>
                <span>👥</span>
                <span>Users</span>
                {userCount !== undefined && userCount > 0 && (
                  <span style={{ position:"absolute", top:-6, right:-6, background:"#7c3aed", color:"#fff", borderRadius:"50%", width:16, height:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:800 }}>{userCount}</span>
                )}
              </button>
            )}

            {/* User chip */}
            <div style={{ display:"flex", alignItems:"center", gap:7, padding:"4px 12px", borderRadius:20, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.6)" }}>👤 {username}</span>
              <span style={{ fontSize:9, fontWeight:800, padding:"2px 7px", borderRadius:10, background: isSuperAdmin ? "rgba(124,58,237,0.3)" : "rgba(6,182,212,0.2)", color: isSuperAdmin ? "#c4b5fd" : "#67e8f9", border: `1px solid ${isSuperAdmin ? "rgba(124,58,237,0.4)" : "rgba(6,182,212,0.3)"}` }}>
                {isSuperAdmin ? "ADMIN" : "USER"}
              </span>
            </div>

            <button className="eden-logout-btn" onClick={onLogout}
              style={{ padding:"5px 12px", borderRadius:20, border:"1px solid rgba(255,255,255,0.1)", background:"transparent", color:"rgba(255,255,255,0.5)", fontSize:11, cursor:"pointer", fontWeight:600 }}>
              Sign Out
            </button>
          </div>
        </div>

        {/* Step bar */}
        <div style={{ display:"flex", alignItems:"center", padding:"8px 0", overflowX:"auto", gap:0 }}>
          {STEPS.map((step, i) => {
            const isDone      = completedSteps.has(step.id);
            const isActive    = activeStep === step.id;
            const isAccessible = step.id <= 6
              ? (step.id === 1 || completedSteps.has(step.id - 1) || isDone)
              : true;

            return (
              <div key={step.id} style={{ display:"flex", alignItems:"center", flex: i < STEPS.length - 1 ? "1 1 auto" : "0 0 auto" }}>
                <button className="eden-step-btn" onClick={() => isAccessible && onStepClick(step.id)}
                  disabled={!isAccessible} title={step.label}
                  style={{ display:"flex", alignItems:"center", gap:7, padding:"6px 10px", borderRadius:10, border: isActive ? `1.5px solid ${step.color}` : "1.5px solid transparent", background: isActive ? step.color + "1a" : "transparent", cursor: isAccessible ? "pointer" : "not-allowed", opacity: isAccessible ? 1 : 0.35, whiteSpace:"nowrap" }}>
                  <div style={{ width:24, height:24, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, background: isDone ? "#10b981" : isActive ? step.color : "rgba(255,255,255,0.08)", color:"#fff", flexShrink:0, boxShadow: isActive ? `0 0 10px ${step.color}60` : "none", transition:"all 0.2s" }}>
                    {isDone ? "✓" : step.id}
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                    <span style={{ fontSize:9, color:"rgba(255,255,255,0.3)", lineHeight:1 }}>{step.moduleLabel}</span>
                    <span style={{ fontSize:11, fontWeight: isActive ? 700 : 500, color: isActive ? "#fff" : isDone ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)", lineHeight:1.3 }}>{step.icon} {step.label}</span>
                  </div>
                </button>

                {i < STEPS.length - 1 && (
                  <div style={{ flex:1, height:1.5, background: isDone ? "#10b981" : "rgba(255,255,255,0.06)", minWidth:6, transition:"background 0.3s" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
