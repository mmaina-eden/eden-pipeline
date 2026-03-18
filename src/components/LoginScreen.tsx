import { useState, useEffect } from "react";
import { SESSION_KEY, RATE_KEY, MAX_ATTEMPTS, LOCKOUT_MS } from "../auth.config";
import { findUser } from "../lib/userManager";
import ParticleField from "./ParticleField";

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
  return s >= 60 ? Math.ceil(s / 60) + "m " + (s % 60) + "s" : s + "s";
}

const CSS = `
  .ls-card {
    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
  }
  .ls-input {
    transition: all 0.25s;
    background: rgba(255,255,255,0.04) !important;
    color: #fff !important;
  }
  .ls-input:focus {
    border-color: #7c3aed !important;
    box-shadow: 0 0 0 3px rgba(124,58,237,0.2), 0 0 20px rgba(124,58,237,0.15) !important;
    background: rgba(124,58,237,0.07) !important;
  }
  .ls-input::placeholder { color: rgba(255,255,255,0.2); }
  .ls-btn {
    transition: all 0.2s cubic-bezier(0.16,1,0.3,1);
    position: relative; overflow: hidden;
  }
  .ls-btn::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,0.2),transparent);
    opacity:0; transition:opacity 0.2s;
  }
  .ls-btn:hover:not(:disabled)::after { opacity:1; }
  .ls-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 16px 48px rgba(124,58,237,0.55) !important; }
  .ls-btn:active:not(:disabled) { transform:translateY(0) scale(0.98); }
  .ls-attempt-dot { transition: all 0.2s; }
  .ls-orb-a { animation: floatA 12s ease-in-out infinite; }
  .ls-orb-b { animation: floatB 15s ease-in-out infinite; }
  .ls-orb-c { animation: floatC 10s ease-in-out infinite; }
  .ls-logo { animation: scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
  .ls-scan { animation: scan 3s ease-in-out infinite 1s; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes scaleIn { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
  @keyframes scan { 0%{transform:translateY(-100%);opacity:0} 20%{opacity:0.4} 80%{opacity:0.4} 100%{transform:translateY(600%);opacity:0} }
  @keyframes floatA { 0%,100%{transform:translate(0,0)scale(1)} 33%{transform:translate(60px,-40px)scale(1.08)} 66%{transform:translate(-30px,50px)scale(0.95)} }
  @keyframes floatB { 0%,100%{transform:translate(0,0)scale(1)} 33%{transform:translate(-50px,30px)scale(1.06)} 66%{transform:translate(40px,-60px)scale(0.97)} }
  @keyframes floatC { 0%,100%{transform:translate(0,0)scale(1)} 50%{transform:translate(30px,40px)scale(1.04)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .gradient-text {
    background:linear-gradient(135deg,#00d4ff 0%,#a855f7 50%,#00d4ff 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:shimmer 4s linear infinite;
  }
  @keyframes shake {
    0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)}
  }
  .ls-shake { animation:shake 0.4s ease both; }
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

  useEffect(() => {
    const iv = setInterval(() => {
      const { locked, remainingMs } = checkLock();
      setLock(locked ? remainingMs : 0);
    }, 500);
    const d = getRateData(); setAttempts((d.attempts || []).length);
    const { locked, remainingMs } = checkLock(); if (locked) setLock(remainingMs);
    return () => clearInterval(iv);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError("");
    const { locked } = checkLock(); if (locked) return;
    if (!username.trim() || !passcode) { setError("Enter both username and passcode."); return; }
    setLoading(true);
    try {
      const hash = await sha256(passcode);
      const user = findUser(username);
      if (user && user.passwordHash === hash) {
        clearRateData();
        const fingerprint = btoa((navigator.userAgent + screen.width + screen.height).slice(0, 200));
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({
          username: user.username, role: user.role,
          loginTime: new Date().toISOString(), fingerprint,
        }));
        onLogin(user.username, user.role);
      } else {
        recordFailure();
        const d = getRateData(); const remaining = MAX_ATTEMPTS - d.attempts.length;
        const { locked: nowLocked } = checkLock(); setAttempts(d.attempts.length);
        if (nowLocked) setError(`Too many attempts. Locked for ${formatMs(LOCKOUT_MS)}.`);
        else setError(`Incorrect credentials. ${remaining > 0 ? remaining + " attempt" + (remaining === 1 ? "" : "s") + " remaining." : ""}`);
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

      {/* Canvas particle field */}
      <ParticleField />

      {/* Ambient orbs */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div className="ls-orb-a" style={{ position:"absolute", top:"5%", left:"8%", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.14) 0%,transparent 65%)", filter:"blur(40px)" }} />
        <div className="ls-orb-b" style={{ position:"absolute", bottom:"8%", right:"6%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.12) 0%,transparent 65%)", filter:"blur(40px)" }} />
        <div className="ls-orb-c" style={{ position:"absolute", top:"45%", right:"20%", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,255,157,0.08) 0%,transparent 65%)", filter:"blur(30px)" }} />
      </div>

      {/* Layout */}
      <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:24, position:"relative", zIndex:1 }}>
        <div className={`ls-card${shake ? " ls-shake" : ""}`} style={{ width:"100%", maxWidth:440, background:"rgba(8,8,28,0.7)", backdropFilter:"blur(40px)", WebkitBackdropFilter:"blur(40px)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:28, padding:"44px 40px 36px", boxShadow:"0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.07)", position:"relative", overflow:"hidden" }}>

          {/* Scan line effect */}
          <div className="ls-scan" style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#00d4ff,transparent)", pointerEvents:"none" }} />

          {/* Corner glow */}
          <div style={{ position:"absolute", top:-60, right:-60, width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.2) 0%,transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:-60, left:-60, width:180, height:180, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,255,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />

          {/* Logo */}
          <div className="ls-logo" style={{ textAlign:"center", marginBottom:36 }}>
            <div style={{ position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center", width:80, height:80, marginBottom:16 }}>
              {/* Orbit rings */}
              <div style={{ position:"absolute", width:80, height:80, borderRadius:"50%", border:"1px solid rgba(0,212,255,0.3)", animation:"spinCW 8s linear infinite" }} />
              <div style={{ position:"absolute", width:60, height:60, borderRadius:"50%", border:"1px solid rgba(124,58,237,0.25)", animation:"spinCW 5s linear infinite reverse" }} />
              {/* Center */}
              <div style={{ width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg,rgba(124,58,237,0.4),rgba(0,212,255,0.3))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, filter:"drop-shadow(0 0 16px rgba(124,58,237,0.8))", boxShadow:"0 0 30px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.15)" }}>
                🏥
              </div>
              {/* Orbiting dot */}
              <div style={{ position:"absolute", width:6, height:6, borderRadius:"50%", background:"#00d4ff", boxShadow:"0 0 8px #00d4ff", animation:"orbit 8s linear infinite" }} />
            </div>
            <div style={{ fontSize:26, fontWeight:800, letterSpacing:"-0.5px" }}>
              <span className="gradient-text">Eden Care</span>
            </div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginTop:5, letterSpacing:"2px", textTransform:"uppercase" }}>
              Neural Pipeline Interface
            </div>
          </div>

          {/* Lockout banner */}
          {isLocked && (
            <div style={{ background:"rgba(255,51,102,0.1)", border:"1px solid rgba(255,51,102,0.3)", borderRadius:14, padding:"14px 18px", marginBottom:24, textAlign:"center", boxShadow:"0 0 20px rgba(255,51,102,0.1)" }}>
              <div style={{ fontWeight:700, color:"#ff6b8a", fontSize:14 }}>⛔ Access Locked</div>
              <div style={{ fontSize:13, color:"rgba(255,107,138,0.75)", marginTop:5 }}>
                Retry in <strong style={{ color:"#ff6b8a" }}>{formatMs(lockRemaining)}</strong>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:20 }}>

            {/* Username */}
            <div>
              <label style={{ display:"block", fontSize:10, fontWeight:700, color:"rgba(0,212,255,0.6)", marginBottom:8, letterSpacing:"2px", textTransform:"uppercase" }}>
                Identifier
              </label>
              <input
                className="ls-input"
                type="text" value={username} onChange={e => setUsername(e.target.value)}
                disabled={isLocked || loading} autoComplete="username"
                placeholder="Your username"
                style={{ width:"100%", padding:"13px 16px", borderRadius:14, border:`1.5px solid ${error && !isLocked ? "rgba(255,51,102,0.5)" : "rgba(255,255,255,0.08)"}`, fontSize:14, background:"rgba(255,255,255,0.04)", color:"#fff", boxSizing:"border-box", transition:"all 0.25s" }}
              />
            </div>

            {/* Passcode */}
            <div>
              <label style={{ display:"block", fontSize:10, fontWeight:700, color:"rgba(0,212,255,0.6)", marginBottom:8, letterSpacing:"2px", textTransform:"uppercase" }}>
                Passcode
              </label>
              <div style={{ position:"relative" }}>
                <input
                  className="ls-input"
                  type={showPass ? "text" : "password"} value={passcode} onChange={e => setPasscode(e.target.value)}
                  disabled={isLocked || loading} autoComplete="current-password"
                  placeholder="••••••••"
                  style={{ width:"100%", padding:"13px 48px 13px 16px", borderRadius:14, border:`1.5px solid ${error && !isLocked ? "rgba(255,51,102,0.5)" : "rgba(255,255,255,0.08)"}`, fontSize:14, background:"rgba(255,255,255,0.04)", color:"#fff", boxSizing:"border-box", transition:"all 0.25s" }}
                />
                <button type="button" onClick={() => setShowPass(p => !p)} tabIndex={-1}
                  style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:15, color:"rgba(255,255,255,0.3)", padding:4, transition:"color 0.15s" }}>
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Attempt dots */}
            {attemptsUsed > 0 && !isLocked && (
              <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ fontSize:10, color:"rgba(255,255,255,0.25)", letterSpacing:"1px", textTransform:"uppercase" }}>Attempts</span>
                <div style={{ display:"flex", gap:5 }}>
                  {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
                    <div key={i} className="ls-attempt-dot" style={{ width:8, height:8, borderRadius:"50%", background: i < attemptsUsed ? "#ff3366" : "rgba(255,255,255,0.1)", boxShadow: i < attemptsUsed ? "0 0 10px rgba(255,51,102,0.9)" : "none" }} />
                  ))}
                </div>
              </div>
            )}

            {/* Error */}
            {error && !isLocked && (
              <div style={{ background:"rgba(255,51,102,0.08)", border:"1px solid rgba(255,51,102,0.2)", borderRadius:12, padding:"11px 15px", fontSize:13, color:"#ff8fab", display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ flexShrink:0 }}>⚠️</span> {error}
              </div>
            )}

            {/* Submit */}
            <button
              className="ls-btn"
              type="submit" disabled={isLocked || loading || !username.trim() || !passcode}
              style={{ padding:"15px", borderRadius:16, border:"none", background: isLocked ? "rgba(255,255,255,0.04)" : "linear-gradient(135deg,#7c3aed 0%,#00d4ff 100%)", color: isLocked ? "rgba(255,255,255,0.2)" : "#fff", fontWeight:800, fontSize:15, cursor: isLocked ? "not-allowed" : "pointer", letterSpacing:"0.3px", boxShadow: isLocked ? "none" : "0 8px 32px rgba(124,58,237,0.4), 0 2px 0 rgba(255,255,255,0.1) inset", marginTop:4 }}>
              {loading ? (
                <span style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
                  <span style={{ width:16, height:16, borderRadius:"50%", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", display:"inline-block", animation:"spinCW 0.8s linear infinite" }} />
                  Authenticating…
                </span>
              ) : isLocked ? "⛔ Temporarily Locked" : "Authorize Access →"}
            </button>
          </form>

          {/* Footer */}
          <div style={{ marginTop:28, textAlign:"center", fontSize:10, color:"rgba(255,255,255,0.15)", letterSpacing:"1px" }}>
            SHA-256 ENCRYPTED · {MAX_ATTEMPTS} ATTEMPTS · {LOCKOUT_MS / 60000}MIN LOCKOUT
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinCW { to{transform:rotate(360deg)} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(28px) rotate(0deg)} to{transform:rotate(360deg) translateX(28px) rotate(-360deg)} }
      `}</style>
    </>
  );
}
