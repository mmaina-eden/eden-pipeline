import { useState, useEffect } from "react";
import { USERS, SESSION_KEY, RATE_KEY, MAX_ATTEMPTS, LOCKOUT_MS } from "../auth.config";

// ── SHA-256 via Web Crypto API (built into all modern browsers) ────────────────
async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// ── Rate limiter helpers ───────────────────────────────────────────────────────
function getRateData() {
  try { return JSON.parse(localStorage.getItem(RATE_KEY) || '{"attempts":[],"lockedUntil":0}'); }
  catch { return { attempts: [], lockedUntil: 0 }; }
}

function checkLock(): { locked: boolean; remainingMs: number } {
  const d = getRateData();
  const now = Date.now();
  if (d.lockedUntil > now) return { locked: true, remainingMs: d.lockedUntil - now };
  return { locked: false, remainingMs: 0 };
}

function recordFailure() {
  const d = getRateData();
  const now = Date.now();
  d.attempts = [...(d.attempts || []).filter((t: number) => now - t < LOCKOUT_MS), now];
  if (d.attempts.length >= MAX_ATTEMPTS) d.lockedUntil = now + LOCKOUT_MS;
  localStorage.setItem(RATE_KEY, JSON.stringify(d));
}

function clearRateData() { localStorage.removeItem(RATE_KEY); }

function formatMs(ms: number) {
  const s = Math.ceil(ms / 1000);
  return s >= 60 ? Math.ceil(s / 60) + "m " + (s % 60) + "s" : s + "s";
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function LoginScreen({ onLogin }: { onLogin: (username: string) => void }) {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [lockRemaining, setLock]= useState(0);
  const [attempts, setAttempts] = useState(0);

  // Countdown ticker
  useEffect(() => {
    const iv = setInterval(() => {
      const { locked, remainingMs } = checkLock();
      if (locked) { setLock(remainingMs); }
      else { setLock(0); }
    }, 500);
    return () => clearInterval(iv);
  }, []);

  // On mount — check current state
  useEffect(() => {
    const d = getRateData();
    setAttempts((d.attempts || []).length);
    const { locked, remainingMs } = checkLock();
    if (locked) setLock(remainingMs);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const { locked } = checkLock();
    if (locked) return;

    if (!username.trim() || !passcode) { setError("Please enter both username and passcode."); return; }

    setLoading(true);
    try {
      const hash = await sha256(passcode);
      const user = USERS.find(u => u.username.toLowerCase() === username.trim().toLowerCase() && u.passwordHash === hash);

      if (user) {
        clearRateData();
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ username: user.username, loginTime: new Date().toISOString() }));
        onLogin(user.username);
      } else {
        recordFailure();
        const d = getRateData();
        const remaining = MAX_ATTEMPTS - d.attempts.length;
        const { locked: nowLocked } = checkLock();
        setAttempts(d.attempts.length);
        if (nowLocked) {
          setError(`Too many failed attempts. Locked for ${formatMs(LOCKOUT_MS)}.`);
        } else {
          setError(`Incorrect username or passcode. ${remaining > 0 ? remaining + " attempt" + (remaining === 1 ? "" : "s") + " remaining." : ""}`);
        }
        setPasscode("");
      }
    } finally {
      setLoading(false);
    }
  }

  const isLocked = lockRemaining > 0;
  const attemptsUsed = Math.min(attempts, MAX_ATTEMPTS);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0f172a,#1e1b4b)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#fff", borderRadius: 20, padding: 36, width: "100%", maxWidth: 420, boxShadow: "0 20px 60px #0006" }}>

        {/* Logo area */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>🏥</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px" }}>Eden Care Pipeline</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>Medical Code Processing System</div>
        </div>

        {/* Lockout banner */}
        {isLocked && (
          <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 10, padding: "12px 16px", marginBottom: 20, textAlign: "center" }}>
            <div style={{ fontWeight: 700, color: "#dc2626", fontSize: 14 }}>🔒 Account temporarily locked</div>
            <div style={{ fontSize: 13, color: "#b91c1c", marginTop: 4 }}>Too many failed attempts. Try again in <strong>{formatMs(lockRemaining)}</strong></div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 6 }}>USERNAME</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              disabled={isLocked || loading}
              autoComplete="username"
              placeholder="Enter your username"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "2px solid " + (error && !isLocked ? "#fca5a5" : "#e2e8f0"), fontSize: 14, outline: "none", background: isLocked ? "#f8fafc" : "#fff", boxSizing: "border-box" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 6 }}>PASSCODE</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPass ? "text" : "password"}
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                disabled={isLocked || loading}
                autoComplete="current-password"
                placeholder="Enter your passcode"
                style={{ width: "100%", padding: "11px 44px 11px 14px", borderRadius: 10, border: "2px solid " + (error && !isLocked ? "#fca5a5" : "#e2e8f0"), fontSize: 14, outline: "none", background: isLocked ? "#f8fafc" : "#fff", boxSizing: "border-box" }}
              />
              <button type="button" onClick={() => setShowPass(p => !p)} tabIndex={-1}
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#94a3b8" }}>
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Attempt dots */}
          {attemptsUsed > 0 && !isLocked && (
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>Attempts:</span>
              {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: i < attemptsUsed ? "#dc2626" : "#e2e8f0" }} />
              ))}
            </div>
          )}

          {error && !isLocked && (
            <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#dc2626" }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={isLocked || loading || !username.trim() || !passcode}
            style={{ padding: "13px", borderRadius: 12, border: "none", background: isLocked ? "#e2e8f0" : "linear-gradient(135deg,#1e1b4b,#4338ca)", color: isLocked ? "#94a3b8" : "#fff", fontWeight: 700, fontSize: 15, cursor: isLocked ? "not-allowed" : "pointer", letterSpacing: "0.3px", transition: "opacity 0.15s" }}>
            {loading ? "Verifying..." : isLocked ? "🔒 Locked" : "Sign In →"}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: "center", fontSize: 11, color: "#cbd5e1" }}>
          Secured with SHA-256 · {MAX_ATTEMPTS} attempts before {LOCKOUT_MS / 60000}min lockout
        </div>
      </div>
    </div>
  );
}
