/**
 * ModeSelector — Cinematic mode selection after login.
 * Full-screen with particle field, 3D-style cards, animated reveal.
 */
import ParticleField from "./ParticleField";

const CSS = `
  @keyframes ms-fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ms-shine  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes ms-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  .ms-title  { animation: ms-fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .ms-cards  { animation: ms-fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
  .ms-footer { animation: ms-fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) 0.4s both; }

  .ms-card {
    position: relative; cursor: pointer; overflow: hidden;
    border-radius: 24px;
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.3s ease,
                border-color 0.3s ease;
  }
  .ms-card::before {
    content:''; position:absolute; inset:0; border-radius:24px;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
    opacity:0; transition:opacity 0.3s;
  }
  .ms-card:hover::before { opacity:1; }
  .ms-card.auto:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0,212,255,0.25), 0 0 0 1px rgba(0,212,255,0.4);
    border-color: rgba(0,212,255,0.5) !important;
  }
  .ms-card.manual:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 80px rgba(124,58,237,0.25), 0 0 0 1px rgba(124,58,237,0.4);
    border-color: rgba(124,58,237,0.5) !important;
  }
  .ms-card:active { transform: scale(0.98) !important; }

  .ms-icon { animation: ms-float 3s ease-in-out infinite; }
  .ms-icon-2 { animation: ms-float 3s ease-in-out infinite 0.4s; }

  .ms-cta {
    transition: all 0.2s;
    position: relative; overflow: hidden;
  }
  .ms-cta::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,0.2),transparent);
    opacity:0; transition:opacity 0.2s;
  }
  .ms-card:hover .ms-cta::after { opacity:1; }
  .ms-card:hover .ms-cta { letter-spacing:1px; }

  .gradient-text {
    background:linear-gradient(135deg,#00d4ff 0%,#a855f7 50%,#00d4ff 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation: ms-shine 4s linear infinite;
  }
`;

interface Props {
  onSelect: (mode: "auto" | "manual") => void;
}

export default function ModeSelector({ onSelect }: Props) {
  return (
    <>
      <style>{CSS}</style>
      <ParticleField />

      {/* Ambient orbs */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"10%", left:"5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.1) 0%,transparent 70%)", filter:"blur(60px)" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 70%)", filter:"blur(60px)" }} />
      </div>

      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", gap:40, position:"relative", zIndex:1 }}>

        {/* Title block */}
        <div className="ms-title" style={{ textAlign:"center" }}>
          <div style={{ fontSize:48, marginBottom:12, filter:"drop-shadow(0 0 20px rgba(124,58,237,0.7))" }}>🏥</div>
          <div style={{ fontSize:32, fontWeight:900, letterSpacing:"-1px", lineHeight:1.1, marginBottom:10 }}>
            <span className="gradient-text">Choose Your Mode</span>
          </div>
          <div style={{ color:"rgba(255,255,255,0.38)", fontSize:14, maxWidth:380, margin:"0 auto", lineHeight:1.6 }}>
            Select how you'd like to process your medical catalog data through the Eden pipeline
          </div>
        </div>

        {/* Cards */}
        <div className="ms-cards" style={{ display:"flex", gap:24, flexWrap:"wrap", justifyContent:"center", maxWidth:740, width:"100%" }}>

          {/* ── AUTO ─────────────────────────────────────────── */}
          <div className="ms-card auto" onClick={() => onSelect("auto")}
            style={{ flex:"1 1 300px", maxWidth:340, background:"rgba(0,12,28,0.75)", backdropFilter:"blur(32px)", WebkitBackdropFilter:"blur(32px)", border:"1.5px solid rgba(0,212,255,0.2)", padding:"32px 28px", display:"flex", flexDirection:"column", gap:20, boxShadow:"0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

            {/* Icon + label */}
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div className="ms-icon" style={{ width:60, height:60, borderRadius:18, background:"linear-gradient(135deg,rgba(0,212,255,0.25),rgba(0,212,255,0.08))", border:"1px solid rgba(0,212,255,0.35)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, boxShadow:"0 0 24px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)", flexShrink:0 }}>
                🤖
              </div>
              <div>
                <div style={{ color:"#67e8f9", fontWeight:800, fontSize:20, letterSpacing:"-0.3px" }}>Auto Mode</div>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:4 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#00ff9d", boxShadow:"0 0 8px #00ff9d", display:"inline-block" }} />
                  <span style={{ color:"rgba(0,255,157,0.7)", fontSize:11, fontWeight:600, letterSpacing:"1px" }}>FULLY AUTOMATED</span>
                </div>
              </div>
            </div>

            <div style={{ color:"rgba(255,255,255,0.5)", fontSize:13, lineHeight:1.7 }}>
              Upload your files once and watch the entire pipeline execute automatically. Real-time status for every module.
            </div>

            <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
              {[
                ["🚀","Upload once — all 7 modules run"],
                ["📡","Live neural status indicators"],
                ["⚡","Delta report auto-downloads"],
                ["🎯","Ideal for batch processing"],
              ].map(([icon, text]) => (
                <li key={text} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:12.5, color:"rgba(255,255,255,0.45)" }}>
                  <span style={{ flexShrink:0, fontSize:13 }}>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="ms-cta" style={{ marginTop:"auto", padding:"14px", borderRadius:14, border:"none", background:"linear-gradient(135deg,rgba(0,212,255,0.85),rgba(0,180,220,0.6))", color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer", letterSpacing:"0.3px", boxShadow:"0 6px 24px rgba(0,212,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)", transition:"all 0.2s" }}>
              Launch Auto Pipeline →
            </button>
          </div>

          {/* ── MANUAL ───────────────────────────────────────── */}
          <div className="ms-card manual" onClick={() => onSelect("manual")}
            style={{ flex:"1 1 300px", maxWidth:340, background:"rgba(8,4,22,0.75)", backdropFilter:"blur(32px)", WebkitBackdropFilter:"blur(32px)", border:"1.5px solid rgba(124,58,237,0.2)", padding:"32px 28px", display:"flex", flexDirection:"column", gap:20, boxShadow:"0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

            {/* Icon + label */}
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div className="ms-icon-2" style={{ width:60, height:60, borderRadius:18, background:"linear-gradient(135deg,rgba(124,58,237,0.3),rgba(168,85,247,0.1))", border:"1px solid rgba(124,58,237,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, boxShadow:"0 0 24px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.1)", flexShrink:0 }}>
                🎛️
              </div>
              <div>
                <div style={{ color:"#c4b5fd", fontWeight:800, fontSize:20, letterSpacing:"-0.3px" }}>Manual Mode</div>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:4 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#a855f7", boxShadow:"0 0 8px #a855f7", display:"inline-block" }} />
                  <span style={{ color:"rgba(168,85,247,0.7)", fontSize:11, fontWeight:600, letterSpacing:"1px" }}>STEP-BY-STEP</span>
                </div>
              </div>
            </div>

            <div style={{ color:"rgba(255,255,255,0.5)", fontSize:13, lineHeight:1.7 }}>
              Navigate each module individually. Inspect and verify results at every stage before advancing. Full precision control.
            </div>

            <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
              {[
                ["🔬","Module-by-module navigation"],
                ["🔎","Review results at each stage"],
                ["✏️","Modify inputs before proceeding"],
                ["🛡️","Best for QA & troubleshooting"],
              ].map(([icon, text]) => (
                <li key={text} style={{ display:"flex", alignItems:"flex-start", gap:10, fontSize:12.5, color:"rgba(255,255,255,0.45)" }}>
                  <span style={{ flexShrink:0, fontSize:13 }}>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <button className="ms-cta" style={{ marginTop:"auto", padding:"14px", borderRadius:14, border:"none", background:"linear-gradient(135deg,rgba(124,58,237,0.85),rgba(168,85,247,0.6))", color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer", letterSpacing:"0.3px", boxShadow:"0 6px 24px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.2)", transition:"all 0.2s" }}>
              Start Manual Pipeline →
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="ms-footer" style={{ color:"rgba(255,255,255,0.18)", fontSize:12, letterSpacing:"0.5px" }}>
          Switch modes anytime via the control bar above
        </div>
      </div>
    </>
  );
}
