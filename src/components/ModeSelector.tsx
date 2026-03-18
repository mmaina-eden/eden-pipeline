/**
 * ModeSelector — shown after login to choose Auto or Manual pipeline mode.
 */
const CSS = `
  @keyframes modeFadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  .mode-card{animation:modeFadeIn 0.4s ease forwards;transition:all 0.2s;cursor:pointer;}
  .mode-card:hover{transform:translateY(-4px)!important;box-shadow:0 20px 60px rgba(0,0,0,0.5)!important;}
  .mode-card.auto:hover{border-color:rgba(6,182,212,0.6)!important;box-shadow:0 20px 60px rgba(6,182,212,0.2)!important;}
  .mode-card.manual:hover{border-color:rgba(124,58,237,0.6)!important;box-shadow:0 20px 60px rgba(124,58,237,0.2)!important;}
`;

interface Props {
  onSelect: (mode: "auto" | "manual") => void;
}

export default function ModeSelector({ onSelect }: Props) {
  return (
    <>
      <style>{CSS}</style>
      <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0a0a1a 0%,#0f172a 50%,#1a0533 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32, gap:32 }}>

        {/* Title */}
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:42, marginBottom:12, filter:"drop-shadow(0 0 16px rgba(124,58,237,0.6))" }}>🏥</div>
          <div style={{ color:"#fff", fontSize:22, fontWeight:800, letterSpacing:"-0.3px" }}>Choose Pipeline Mode</div>
          <div style={{ color:"rgba(255,255,255,0.4)", fontSize:13, marginTop:6 }}>Select how you'd like to process your data</div>
        </div>

        {/* Cards */}
        <div style={{ display:"flex", gap:20, flexWrap:"wrap", justifyContent:"center", maxWidth:700, width:"100%" }}>

          {/* Auto card */}
          <div className="mode-card auto" onClick={() => onSelect("auto")}
            style={{ flex:"1 1 280px", maxWidth:320, background:"rgba(6,182,212,0.06)", border:"1.5px solid rgba(6,182,212,0.25)", borderRadius:20, padding:"28px 24px", display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:52, height:52, borderRadius:14, background:"linear-gradient(135deg,rgba(6,182,212,0.3),rgba(6,182,212,0.1))", border:"1px solid rgba(6,182,212,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, filter:"drop-shadow(0 0 8px rgba(6,182,212,0.5))" }}>🤖</div>
              <div>
                <div style={{ color:"#67e8f9", fontWeight:800, fontSize:17 }}>Auto Mode</div>
                <div style={{ color:"rgba(255,255,255,0.35)", fontSize:11, marginTop:3 }}>Fully automated</div>
              </div>
            </div>
            <div style={{ color:"rgba(255,255,255,0.6)", fontSize:13, lineHeight:1.6 }}>
              Upload your file once. All 7 modules run automatically in sequence. Watch live progress as your data is processed from scan to final report.
            </div>
            <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
              {["Upload → auto-run all modules","Live progress with status updates","Delta report downloads automatically","Ideal for batch processing"].map(f => (
                <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:12, color:"rgba(255,255,255,0.5)" }}>
                  <span style={{ color:"#06b6d4", flexShrink:0, marginTop:1 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button style={{ marginTop:"auto", padding:"12px", borderRadius:12, border:"none", background:"linear-gradient(135deg,rgba(6,182,212,0.8),rgba(6,182,212,0.5))", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", boxShadow:"0 4px 20px rgba(6,182,212,0.3)" }}>
              Start Auto Pipeline →
            </button>
          </div>

          {/* Manual card */}
          <div className="mode-card manual" onClick={() => onSelect("manual")}
            style={{ flex:"1 1 280px", maxWidth:320, background:"rgba(124,58,237,0.06)", border:"1.5px solid rgba(124,58,237,0.25)", borderRadius:20, padding:"28px 24px", display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:52, height:52, borderRadius:14, background:"linear-gradient(135deg,rgba(124,58,237,0.3),rgba(124,58,237,0.1))", border:"1px solid rgba(124,58,237,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, filter:"drop-shadow(0 0 8px rgba(124,58,237,0.5))" }}>📋</div>
              <div>
                <div style={{ color:"#c4b5fd", fontWeight:800, fontSize:17 }}>Manual Mode</div>
                <div style={{ color:"rgba(255,255,255,0.35)", fontSize:11, marginTop:3 }}>Step-by-step control</div>
              </div>
            </div>
            <div style={{ color:"rgba(255,255,255,0.6)", fontSize:13, lineHeight:1.6 }}>
              Navigate each module individually. Review and verify results at every stage before proceeding. Full control over the entire pipeline.
            </div>
            <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:7 }}>
              {["Step-by-step module navigation","Review results at each stage","Modify inputs before proceeding","Best for troubleshooting & QA"].map(f => (
                <li key={f} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:12, color:"rgba(255,255,255,0.5)" }}>
                  <span style={{ color:"#7c3aed", flexShrink:0, marginTop:1 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button style={{ marginTop:"auto", padding:"12px", borderRadius:12, border:"none", background:"linear-gradient(135deg,rgba(124,58,237,0.8),rgba(124,58,237,0.5))", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", boxShadow:"0 4px 20px rgba(124,58,237,0.3)" }}>
              Start Manual Pipeline →
            </button>
          </div>
        </div>

        <div style={{ color:"rgba(255,255,255,0.2)", fontSize:11 }}>
          You can switch modes at any time using the toggle in the header
        </div>
      </div>
    </>
  );
}
