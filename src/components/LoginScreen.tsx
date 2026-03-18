import { useState, useEffect, useRef } from "react";
import { SESSION_KEY, RATE_KEY, MAX_ATTEMPTS, LOCKOUT_MS } from "../auth.config";
import { findUser } from "../lib/userManager";
import ThreeBackground from "./ThreeBackground";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function getRateData() {
  try { return JSON.parse(localStorage.getItem(RATE_KEY) || '{"attempts":[],"lockedUntil":0}'); }
  catch { return { attempts: [], lockedUntil: 0 }; }
}
function checkLock() {
  const d = getRateData(); const now = Date.now();
  if (d.lockedUntil > now) return { locked: true, remainingMs: d.lockedUntil - now };
  return { locked: false, remainingMs: 0 };
}
function recordFailure() {
  const d = getRateData(); const now = Date.now();
  d.attempts = [...(d.attempts || []).filter((t: number) => now - t < LOCKOUT_MS), now];
  if (d.attempts.length >= MAX_ATTEMPTS) d.lockedUntil = now + LOCKOUT_MS;
  localStorage.setItem(RATE_KEY, JSON.stringify(d));
}
function clearRateData() { localStorage.removeItem(RATE_KEY); }
function formatMs(ms: number) {
  const s = Math.ceil(ms / 1000);
  return s >= 60 ? Math.ceil(s / 60) + "m" : s + "s";
}

const CSS = `
  /* 3D tilt card */
  .ls-tilt { transform-style: preserve-3d; transition: transform 0.1s ease; will-change: transform; }
  /* Scan beam */
  .ls-scan { position:absolute; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent 0%,#dc2626 30%,#ffffff 50%,#dc2626 70%,transparent 100%); animation:scanDown 4s ease-in-out infinite 0.5s; }
  @keyframes scanDown { 0%{top:-1px;opacity:0} 8%{opacity:1} 90%{opacity:1} 100%{top:100%;opacity:0} }
  /* Fade-up stagger */
  .ls-line-1 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.0s both; }
  .ls-line-2 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .ls-line-3 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
  .ls-line-4 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  .ls-line-5 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  /* Shake */
  @keyframes shakeX { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
  .ls-shake { animation: shakeX 0.4s ease both; }
  /* Spin */
  @keyframes spinCW { to { transform: rotate(360deg); } }
  /* Red heartbeat cross */
  @keyframes crossPulse {
    0%,100% { filter: drop-shadow(0 0 8px rgba(220,38,38,0.4)); }
    50%     { filter: drop-shadow(0 0 24px rgba(220,38,38,0.9)); }
  }
  .ls-cross { animation: crossPulse 2s ease-in-out infinite; }
`;

export default function LoginScreen({ onLogin }: { onLogin: (username: string, role: string) => void }) {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [lockRemaining, setLock]= useState(0);
  const [attempts, setAttempts] = useState(0);
  const [shake, setShake]       = useState(false);
  const cardRef                 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      const { locked, remainingMs } = checkLock();
      setLock(locked ? remainingMs : 0);
    }, 500);
    const d = getRateData(); setAttempts((d.attempts || []).length);
    const { locked, remainingMs } = checkLock(); if (locked) setLock(remainingMs);
    return () => clearInterval(iv);
  }, []);

  // 3D tilt on mouse move
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current; if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 5}deg) scale3d(1.01,1.01,1.01)`;
  }
  function handleMouseLeave() {
    const card = cardRef.current; if (!card) return;
    card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError("");
    const { locked } = checkLock(); if (locked) return;
    if (!username.trim() || !passcode) { setError("Enter both fields."); return; }
    setLoading(true);
    try {
      const hash = await sha256(passcode);
      const user = findUser(username);
      if (user && user.passwordHash === hash) {
        clearRateData();
        const fp = btoa((navigator.userAgent + screen.width + screen.height).slice(0, 200));
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ username: user.username, role: user.role, loginTime: new Date().toISOString(), fingerprint: fp }));
        onLogin(user.username, user.role);
      } else {
        recordFailure();
        const d = getRateData(); const remaining = MAX_ATTEMPTS - d.attempts.length;
        const { locked: nowLocked } = checkLock(); setAttempts(d.attempts.length);
        if (nowLocked) setError(`Locked for ${formatMs(LOCKOUT_MS)}.`);
        else setError(`Incorrect credentials.${remaining > 0 ? ` ${remaining} left.` : ""}`);
        setPasscode("");
        setShake(true); setTimeout(() => setShake(false), 450);
      }
    } finally { setLoading(false); }
  }

  const isLocked = lockRemaining > 0;
  const attemptsUsed = Math.min(attempts, MAX_ATTEMPTS);

  return (
    <>
      <style>{CSS}</style>
      <ThreeBackground />

      {/* Subtle red vignette */}
      <div style={{ position:"fixed", inset:0, zIndex:1, pointerEvents:"none", background:"radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Layout: left brand + right form */}
      <div style={{ minHeight:"100vh", display:"flex", position:"relative", zIndex:2 }}>

        {/* ── LEFT — Brand statement ──────────────────────── */}
        <div style={{ flex:"0 0 48%", display:"flex", flexDirection:"column", justifyContent:"center", padding:"60px 56px", borderRight:"1px solid rgba(255,255,255,0.06)" }}>

          {/* Medical cross */}
          <div className="ls-cross ls-line-1" style={{ marginBottom:32 }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect x="20" y="0"  width="12" height="52" rx="3" fill="#dc2626"/>
              <rect x="0"  y="20" width="52" height="12" rx="3" fill="#dc2626"/>
            </svg>
          </div>

          {/* Company */}
          <div className="ls-line-2" style={{ fontSize:11, fontWeight:700, color:"#dc2626", letterSpacing:"4px", textTransform:"uppercase", marginBottom:16 }}>
            Health Insurance Provider
          </div>

          {/* Giant heading */}
          <h1 className="ls-line-3" style={{ fontSize:"clamp(42px, 6vw, 72px)", fontWeight:900, lineHeight:0.95, letterSpacing:"-0.04em", color:"#ffffff", marginBottom:12 }}>
            EDEN<br/>CARE
          </h1>

          {/* Rule */}
          <div className="ls-line-3" style={{ width:80, height:3, background:"#dc2626", marginBottom:24 }} />

          <p className="ls-line-4" style={{ fontSize:15, color:"rgba(255,255,255,0.45)", lineHeight:1.7, maxWidth:340, marginBottom:40 }}>
            Medical code intelligence pipeline. Automated processing of hospital billing catalogs for insurance claims adjudication.
          </p>

          {/* Stats row */}
          <div className="ls-line-5" style={{ display:"flex", gap:32 }}>
            {[["7","AI Modules"],["M4","DNA Engine"],["SHA-256","Security"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize:22, fontWeight:900, color:"#ffffff", letterSpacing:"-0.03em" }}>{val}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Login form ──────────────────────────── */}
        <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 48px" }}>

          <div
            ref={cardRef}
            className={`ls-tilt${shake ? " ls-shake" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ width:"100%", maxWidth:400, background:"rgba(12,12,12,0.92)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, overflow:"hidden", boxShadow:"0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)", position:"relative" }}
          >
            {/* Scan beam */}
            <div className="ls-scan" />

            {/* Top red stripe */}
            <div style={{ height:3, background:"linear-gradient(90deg,#dc2626,#ef4444,#dc2626)", backgroundSize:"200%", animation:"borderMarch 2s linear infinite" }} />
            <style>{`@keyframes borderMarch{0%{background-position:0%}100%{background-position:200%}}`}</style>

            <div style={{ padding:"36px 36px 32px" }}>

              {/* Card heading */}
              <div style={{ marginBottom:32 }}>
                <div style={{ fontSize:11, fontWeight:700, color:"#dc2626", letterSpacing:"3px", textTransform:"uppercase", marginBottom:8 }}>
                  Secure Access
                </div>
                <div style={{ fontSize:22, fontWeight:800, color:"#ffffff", letterSpacing:"-0.03em" }}>
                  Authorize Entry
                </div>
              </div>

              {/* Lockout */}
              {isLocked && (
                <div style={{ background:"rgba(220,38,38,0.08)", border:"1px solid rgba(220,38,38,0.3)", borderRadius:12, padding:"14px 16px", marginBottom:24, display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:8, height:8, borderRadius:"50%", background:"#dc2626", flexShrink:0 }} />
                  <div>
                    <div style={{ fontWeight:700, color:"#ef4444", fontSize:13 }}>Access Suspended</div>
                    <div style={{ fontSize:12, color:"rgba(220,38,38,0.7)", marginTop:2 }}>Retry in <strong style={{ color:"#ef4444" }}>{formatMs(lockRemaining)}</strong></div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:18 }}>

                {/* Username */}
                <div>
                  <label style={{ display:"block", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:8 }}>
                    Identifier
                  </label>
                  <input
                    className="input-black"
                    type="text" value={username} onChange={e => setUsername(e.target.value)}
                    disabled={isLocked || loading} autoComplete="username" placeholder="Username"
                    style={{ width:"100%", padding:"12px 14px", borderRadius:10, fontSize:14, boxSizing:"border-box", border:`1px solid ${error && !isLocked ? "rgba(220,38,38,0.5)" : "rgba(255,255,255,0.1)"}`, background:"rgba(255,255,255,0.04)", color:"#fff" }}
                  />
                </div>

                {/* Passcode */}
                <div>
                  <label style={{ display:"block", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:8 }}>
                    Passcode
                  </label>
                  <div style={{ position:"relative" }}>
                    <input
                      className="input-black"
                      type={showPass ? "text" : "password"} value={passcode} onChange={e => setPasscode(e.target.value)}
                      disabled={isLocked || loading} autoComplete="current-password" placeholder="••••••••••"
                      style={{ width:"100%", padding:"12px 44px 12px 14px", borderRadius:10, fontSize:14, boxSizing:"border-box", border:`1px solid ${error && !isLocked ? "rgba(220,38,38,0.5)" : "rgba(255,255,255,0.1)"}`, background:"rgba(255,255,255,0.04)", color:"#fff" }}
                    />
                    <button type="button" onClick={() => setShowPass(p => !p)} tabIndex={-1}
                      style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,0.3)", fontSize:14, padding:4 }}>
                      {showPass ? "🙈" : "👁"}
                    </button>
                  </div>
                </div>

                {/* Attempt dots */}
                {attemptsUsed > 0 && !isLocked && (
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:10, color:"rgba(255,255,255,0.25)", letterSpacing:"1.5px", textTransform:"uppercase" }}>Attempts</span>
                    <div style={{ display:"flex", gap:5 }}>
                      {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
                        <div key={i} style={{ width:7, height:7, borderRadius:"50%", transition:"all 0.2s", background: i < attemptsUsed ? "#dc2626" : "rgba(255,255,255,0.1)", boxShadow: i < attemptsUsed ? "0 0 8px rgba(220,38,38,0.8)" : "none" }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Error */}
                {error && !isLocked && (
                  <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 14px", borderRadius:10, background:"rgba(220,38,38,0.08)", border:"1px solid rgba(220,38,38,0.25)", fontSize:12, color:"#fca5a5" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:"#dc2626", flexShrink:0 }} />
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  className="btn-red"
                  type="submit" disabled={isLocked || loading || !username.trim() || !passcode}
                  style={{ padding:"14px", borderRadius:12, fontSize:13, letterSpacing:"3px", marginTop:4 }}
                >
                  {loading ? (
                    <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                      <span style={{ width:14, height:14, borderRadius:"50%", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", display:"inline-block", animation:"spinCW 0.8s linear infinite" }} />
                      VERIFYING
                    </span>
                  ) : isLocked ? "LOCKED" : "AUTHORIZE ACCESS"}
                </button>
              </form>

              {/* Footer */}
              <div style={{ marginTop:24, paddingTop:20, borderTop:"1px solid rgba(255,255,255,0.06)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:9, color:"rgba(255,255,255,0.18)", letterSpacing:"1px", textTransform:"uppercase" }}>
                  SHA-256 · Rate Limited
                </span>
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <div className="live-dot" style={{ width:5, height:5 }} />
                  <span style={{ fontSize:9, color:"rgba(220,38,38,0.6)", letterSpacing:"1px", textTransform:"uppercase" }}>Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spinCW { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
