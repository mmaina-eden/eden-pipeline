/**
 * ModeSelector — Stark black/white/red mode selection.
 * Two extreme cards: white (auto) and black-on-white (manual).
 * 3D tilt on hover, red CTA, bold typography.
 */
import { useRef } from "react";
import ThreeBackground from "./ThreeBackground";

const CSS = `
  .ms-stagger-1 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.0s both; }
  .ms-stagger-2 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .ms-stagger-3 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
  .ms-stagger-4 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  .ms-tilt { transform-style:preserve-3d; transition:transform 0.12s ease; will-change:transform; }

  /* AUTO card — white on black */
  .ms-card-auto {
    background: #ffffff; color: #000000;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  .ms-card-auto:hover {
    box-shadow: 0 32px 80px rgba(255,255,255,0.15), 0 0 0 2px rgba(255,255,255,0.5);
  }
  .ms-card-auto .ms-feature { color: rgba(0,0,0,0.55); }
  .ms-card-auto .ms-feature-check { color: #dc2626; }
  .ms-card-auto .ms-tag { background: #000; color: #fff; }
  .ms-card-auto .ms-cta {
    background: #dc2626; color: #fff;
    border: none; cursor: pointer;
    font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
    transition: all 0.2s;
  }
  .ms-card-auto .ms-cta:hover { background: #b91c1c; transform: translateY(-1px); }

  /* MANUAL card — black on black, white border */
  .ms-card-manual {
    background: #0d0d0d; color: #ffffff;
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .ms-card-manual:hover {
    border-color: rgba(255,255,255,0.5);
    box-shadow: 0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.2);
  }
  .ms-card-manual .ms-feature { color: rgba(255,255,255,0.45); }
  .ms-card-manual .ms-feature-check { color: #dc2626; }
  .ms-card-manual .ms-tag { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
  .ms-card-manual .ms-cta {
    background: transparent; color: #fff;
    border: 1px solid rgba(255,255,255,0.25); cursor: pointer;
    font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    transition: all 0.2s;
  }
  .ms-card-manual .ms-cta:hover { border-color: #dc2626; color: #dc2626; background: rgba(220,38,38,0.08); }

  /* Divider line with label */
  .ms-divider { position: relative; display: flex; align-items: center; gap: 16px; }
  .ms-divider::before, .ms-divider::after {
    content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08);
  }
`;

function TiltCard({ children, className, style, onClick }: React.PropsWithChildren<{ className?: string; style?: React.CSSProperties; onClick: () => void }>) {
  const ref = useRef<HTMLDivElement>(null);
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
    const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(800px) rotateY(${dx * 7}deg) rotateX(${-dy * 6}deg) scale3d(1.02,1.02,1.02)`;
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)";
  }
  return (
    <div ref={ref} className={`ms-tilt ${className || ""}`} style={{ ...style, borderRadius:20, overflow:"hidden" }}
      onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>
      {children}
    </div>
  );
}

interface Props { onSelect: (mode: "auto" | "manual") => void; }

export default function ModeSelector({ onSelect }: Props) {
  return (
    <>
      <style>{CSS}</style>
      <ThreeBackground />

      {/* Dark overlay */}
      <div style={{ position:"fixed", inset:0, zIndex:1, pointerEvents:"none", background:"rgba(0,0,0,0.55)" }} />

      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", position:"relative", zIndex:2 }}>

        {/* ── Header ──────────────────────────────────────── */}
        <div className="ms-stagger-1" style={{ textAlign:"center", marginBottom:48 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:20, padding:"6px 16px 6px 10px", borderRadius:20, border:"1px solid rgba(220,38,38,0.35)", background:"rgba(220,38,38,0.08)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="5.5" y="0" width="3" height="14" rx="1" fill="#dc2626"/>
              <rect x="0" y="5.5" width="14" height="3" rx="1" fill="#dc2626"/>
            </svg>
            <span style={{ fontSize:10, fontWeight:700, color:"#dc2626", letterSpacing:"2.5px", textTransform:"uppercase" }}>Eden Care Pipeline</span>
          </div>
          <h2 style={{ fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, color:"#ffffff", letterSpacing:"-0.04em", lineHeight:1, marginBottom:12 }}>
            Select Processing Mode
          </h2>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.38)", maxWidth:380, margin:"0 auto" }}>
            Choose how you want to process your insurance catalog data through the pipeline
          </p>
        </div>

        {/* ── Cards ───────────────────────────────────────── */}
        <div className="ms-stagger-2" style={{ display:"flex", gap:20, flexWrap:"wrap", justifyContent:"center", maxWidth:760, width:"100%" }}>

          {/* AUTO — white card */}
          <TiltCard className="ms-card-auto" style={{ flex:"1 1 320px", maxWidth:360 }} onClick={() => onSelect("auto")}>
            <div style={{ padding:"32px 28px 28px" }}>
              {/* Tag */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28 }}>
                <span className="ms-tag" style={{ fontSize:9, fontWeight:800, padding:"4px 10px", borderRadius:6, letterSpacing:"2px", textTransform:"uppercase" }}>
                  Recommended
                </span>
                <span style={{ fontSize:28 }}>🤖</span>
              </div>

              <h3 style={{ fontSize:24, fontWeight:900, letterSpacing:"-0.04em", marginBottom:6, color:"inherit" }}>
                Auto Mode
              </h3>
              <p className="ms-feature" style={{ fontSize:13, lineHeight:1.6, marginBottom:24 }}>
                Upload once. All 7 modules execute automatically with live status updates.
              </p>

              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                {["Upload → full pipeline executes","Live neural status per module","Delta report auto-downloads","Zero manual intervention"].map(f => (
                  <li key={f} style={{ display:"flex", gap:10, fontSize:12.5, alignItems:"flex-start" }}>
                    <span className="ms-feature-check" style={{ fontWeight:900, flexShrink:0, marginTop:1 }}>✕</span>
                    <span className="ms-feature">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="ms-cta" style={{ width:"100%", padding:"14px", borderRadius:12, fontSize:12 }}>
                Launch Auto Pipeline →
              </button>
            </div>
          </TiltCard>

          {/* Divider */}
          <div className="ms-divider" style={{ alignSelf:"stretch", flexDirection:"column", width:1, minHeight:300 }}>
            <div style={{ flex:1, width:1, background:"rgba(255,255,255,0.07)" }} />
            <span style={{ fontSize:10, color:"rgba(255,255,255,0.2)", letterSpacing:"2px", textTransform:"uppercase", writingMode:"vertical-lr" }}>or</span>
            <div style={{ flex:1, width:1, background:"rgba(255,255,255,0.07)" }} />
          </div>

          {/* MANUAL — dark card */}
          <TiltCard className="ms-card-manual" style={{ flex:"1 1 320px", maxWidth:360 }} onClick={() => onSelect("manual")}>
            <div style={{ padding:"32px 28px 28px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28 }}>
                <span className="ms-tag" style={{ fontSize:9, fontWeight:700, padding:"4px 10px", borderRadius:6, letterSpacing:"2px", textTransform:"uppercase" }}>
                  Full Control
                </span>
                <span style={{ fontSize:28 }}>🎛️</span>
              </div>

              <h3 style={{ fontSize:24, fontWeight:900, letterSpacing:"-0.04em", marginBottom:6, color:"inherit" }}>
                Manual Mode
              </h3>
              <p className="ms-feature" style={{ fontSize:13, lineHeight:1.6, marginBottom:24 }}>
                Step through each module individually. Inspect and verify at every stage.
              </p>

              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                {["Step-by-step navigation","Inspect results per module","Modify inputs before advancing","Best for QA & troubleshooting"].map(f => (
                  <li key={f} style={{ display:"flex", gap:10, fontSize:12.5, alignItems:"flex-start" }}>
                    <span className="ms-feature-check" style={{ fontWeight:900, flexShrink:0, marginTop:1 }}>✕</span>
                    <span className="ms-feature">{f}</span>
                  </li>
                ))}
              </ul>

              <button className="ms-cta" style={{ width:"100%", padding:"14px", borderRadius:12, fontSize:12 }}>
                Start Manual Mode →
              </button>
            </div>
          </TiltCard>
        </div>

        {/* ── Footer note ─────────────────────────────────── */}
        <div className="ms-stagger-4" style={{ marginTop:36, fontSize:11, color:"rgba(255,255,255,0.2)", letterSpacing:"0.5px" }}>
          Switch modes at any time from the navigation bar
        </div>
      </div>
    </>
  );
}
