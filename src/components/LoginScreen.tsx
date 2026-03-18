import { useState, useEffect } from "react";
import { SESSION_KEY, RATE_KEY, MAX_ATTEMPTS, LOCKOUT_MS } from "../auth.config";
import { findUser } from "../lib/userManager";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function getRateData() {
  try { return JSON.parse(localStorage.getItem(RATE_KEY) || '{"attempts":[],"lockedUntil":0}'); }
  catch { return { attempts: [], lockedUntil: 0 }; }
}
function checkLock(): { locked: boolean; remainingMs: number } {
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
  @keyframes edenFloat1{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(40px,-30px)scale(1.1)}}
  @keyframes edenFloat2{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(-30px,40px)scale(0.9)}}
  @keyframes edenFloat3{0%,100%{transform:translate(0,0)scale(1)}50%{transform:translate(20px,20px)scale(1.05)}}
  @keyframes edenFadeIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  .eden-card{animation:edenFadeIn 0.5s ease forwards;}
  .eden-input{transition:all 0.2s;}
  .eden-input:focus{border-color:#7c3aed!important;box-shadow:0 0 0 3px rgba(124,58,237,0.25)!important;outline:none!important;}
  .eden-btn{transition:all 0.2s;}
  .eden-btn:hover:not(:disabled){opacity:0.9;transform:translateY(-1px);box-shadow:0 16px 48px rgba(124,58,237,0.55)!important;}
  .eden-btn:active:not(:disabled){transform:translateY(0);}
`;

export default function LoginScreen({ onLogin }: { onLogin: (username: string, role: string) => void }) {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [lockRemaining, setLock]= useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      const { locked, remainingMs } = checkLock();
      setLock(locked ? remainingMs : 0);
    }, 500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const d = getRateData(); setAttempts((d.attempts || []).length);
    const { locked, remainingMs } = checkLock(); if (locked) setLock(remainingMs);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError("");
    const { locked } = checkLock(); if (locked) return;
    if (!username.trim() || !passcode) { setError("Please enter both username and passcode."); return; }
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
        if (nowLocked) setError(`Too many failed attempts. Locked for ${formatMs(LOCKOUT_MS)}.`);
        else setError(`Incorrect username or passcode.${remaining > 0 ? ` ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.` : ""}`);
        setPasscode("");
      }
    } finally { setLoading(false); }
  }

  const isLocked = lockRemaining > 0;
  const attemptsUsed = Math.min(attempts, MAX_ATTEMPTS);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0a0a1a 0%,#0f172a 45%,#1a0533 100%)", display:"flex", alignItems:"center", justifyContent:"center", padding:24, position:"relative", overflow:"hidden" }}>

        {/* Floating orbs */}
        <div style={{ position:"absolute",top:"8%",left:"12%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,58,237,0.18) 0%,transparent 70%)",animation:"edenFloat1 9s ease-in-out infinite",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:"10%",right:"8%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,0.14) 0%,transparent 70%)",animation:"edenFloat2 11s ease-in-out infinite",pointerEvents:"none" }} />
        <div style={{ position:"absolute",top:"50%",right:"25%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(168,85,247,0.1) 0%,transparent 70%)",animation:"edenFloat3 13s ease-in-out infinite",pointerEvents:"none" }} />

        {/* Card */}
        <div className="eden-card" style={{ background:"rgba(255,255,255,0.045)", backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:24, padding:"40px 36px", width:"100%", maxWidth:420, boxShadow:"0 32px 80px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.08)", position:"relative", zIndex:1 }}>

          {/* Logo */}
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div style={{ fontSize:52, marginBottom:12, filter:"drop-shadow(0 0 20px rgba(124,58,237,0.7))" }}>🏥</div>
            <div style={{ fontSize:24, fontWeight:800, color:"#fff", letterSpacing:"-0.5px" }}>Eden Care Pipeline</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginTop:5 }}>Medical Code Processing System</div>
          </div>

          {/* Lockout */}
          {isLocked && (
            <div style={{ background:"rgba(244,63,94,0.12)", border:"1px solid rgba(244,63,94,0.3)", borderRadius:12, padding:"12px 16px", marginBottom:20, textAlign:"center" }}>
              <div style={{ fontWeight:700, color:"#f43f5e", fontSize:14 }}>🔒 Temporarily locked</div>
              <div style={{ fontSize:13, color:"rgba(244,63,94,0.8)", marginTop:4 }}>Try again in <strong style={{ color:"#f43f5e" }}>{formatMs(lockRemaining)}</strong></div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
            <div>
              <label style={{ display:"block", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", marginBottom:7, letterSpacing:"1px" }}>USERNAME</label>
              <input className="eden-input" type="text" value={username} onChange={e => setUsername(e.target.value)}
                disabled={isLocked || loading} autoComplete="username" placeholder="Enter your username"
                style={{ width:"100%", padding:"12px 16px", borderRadius:12, border:"2px solid "+(error&&!isLocked?"rgba(244,63,94,0.5)":"rgba(255,255,255,0.1)"), fontSize:14, background:"rgba(255,255,255,0.06)", color:"#fff", boxSizing:"border-box" }} />
            </div>
            <div>
              <label style={{ display:"block", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.45)", marginBottom:7, letterSpacing:"1px" }}>PASSCODE</label>
              <div style={{ position:"relative" }}>
                <input className="eden-input" type={showPass?"text":"password"} value={passcode} onChange={e => setPasscode(e.target.value)}
                  disabled={isLocked || loading} autoComplete="current-password" placeholder="Enter your passcode"
                  style={{ width:"100%", padding:"12px 48px 12px 16px", borderRadius:12, border:"2px solid "+(error&&!isLocked?"rgba(244,63,94,0.5)":"rgba(255,255,255,0.1)"), fontSize:14, background:"rgba(255,255,255,0.06)", color:"#fff", boxSizing:"border-box" }} />
                <button type="button" onClick={() => setShowPass(p=>!p)} tabIndex={-1}
                  style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:16, color:"rgba(255,255,255,0.4)", padding:4 }}>
                  {showPass?"🙈":"👁️"}
                </button>
              </div>
            </div>

            {attemptsUsed > 0 && !isLocked && (
              <div style={{ display:"flex", gap:7, alignItems:"center" }}>
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)" }}>Attempts:</span>
                {Array.from({ length:MAX_ATTEMPTS }).map((_,i) => (
                  <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:i<attemptsUsed?"#f43f5e":"rgba(255,255,255,0.12)", boxShadow:i<attemptsUsed?"0 0 8px rgba(244,63,94,0.8)":"none", transition:"all 0.2s" }} />
                ))}
              </div>
            )}

            {error && !isLocked && (
              <div style={{ background:"rgba(244,63,94,0.1)", border:"1px solid rgba(244,63,94,0.25)", borderRadius:10, padding:"10px 14px", fontSize:13, color:"#fca5a5" }}>
                {error}
              </div>
            )}

            <button className="eden-btn" type="submit" disabled={isLocked||loading||!username.trim()||!passcode}
              style={{ padding:"14px", borderRadius:14, border:"none", background:isLocked?"rgba(255,255,255,0.05)":"linear-gradient(135deg,#7c3aed,#06b6d4)", color:isLocked?"rgba(255,255,255,0.25)":"#fff", fontWeight:700, fontSize:15, cursor:isLocked?"not-allowed":"pointer", letterSpacing:"0.3px", boxShadow:isLocked?"none":"0 8px 32px rgba(124,58,237,0.4)" }}>
              {loading?"Verifying…":isLocked?"🔒 Locked":"Sign In →"}
            </button>
          </form>

          <div style={{ marginTop:24, textAlign:"center", fontSize:11, color:"rgba(255,255,255,0.18)" }}>
            Secured with SHA-256 · {MAX_ATTEMPTS} attempts before {LOCKOUT_MS/60000}min lockout
          </div>
        </div>
      </div>
    </>
  );
}
