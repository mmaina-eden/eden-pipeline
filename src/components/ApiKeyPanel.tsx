/**
 * API Key Panel — gated behind a 4-digit PIN.
 * Only visible to SUPER_ADMIN. Regular users see nothing.
 */
import { useState, useEffect } from "react";
import { getStoredKey, storeKey } from "../lib/apiKeys";

const PIN_HASH_KEY  = "eden_apikey_pin_v1";
const PIN_RATE_KEY  = "eden_pin_rate_v1";
const PIN_MAX_ATT   = 5;
const PIN_LOCKOUT   = 5 * 60 * 1000;

// ── PIN rate limiter ────────────────────────────────────────────────────────
function getPinRate() {
  try { return JSON.parse(localStorage.getItem(PIN_RATE_KEY) || '{"attempts":[],"lockedUntil":0}'); }
  catch { return { attempts: [], lockedUntil: 0 }; }
}
function pinLocked(): { locked: boolean; remainingMs: number } {
  const d = getPinRate(); const now = Date.now();
  return d.lockedUntil > now ? { locked: true, remainingMs: d.lockedUntil - now } : { locked: false, remainingMs: 0 };
}
function recordPinFail() {
  const d = getPinRate(); const now = Date.now();
  d.attempts = [...(d.attempts||[]).filter((t: number) => now - t < PIN_LOCKOUT), now];
  if (d.attempts.length >= PIN_MAX_ATT) d.lockedUntil = now + PIN_LOCKOUT;
  localStorage.setItem(PIN_RATE_KEY, JSON.stringify(d));
}
function clearPinRate() { localStorage.removeItem(PIN_RATE_KEY); }
function fmtMs(ms: number) { const s = Math.ceil(ms/1000); return s >= 60 ? Math.ceil(s/60)+"m "+s%60+"s" : s+"s"; }

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
}

// ── Provider / data source config ─────────────────────────────────────────
const AI_PROVIDERS = [
  { id:"gemini" as const,     label:"Gemini 2.0 Flash",         icon:"✨", color:"#38bdf8", badge:"PRIMARY",  placeholder:"AIza...",    hint:"1,500 req/day free · aistudio.google.com" },
  { id:"groq" as const,       label:"Groq (Llama 3.3 70B)",     icon:"⚡", color:"#a78bfa", badge:"FAST",     placeholder:"gsk_...",    hint:"14,400 req/day free · console.groq.com" },
  { id:"openRouter" as const, label:"OpenRouter (multi-model)",  icon:"🔀", color:"#67e8f9", badge:"MULTI",    placeholder:"sk-or-...", hint:"Free models, DeepSeek R1 · openrouter.ai" },
  { id:"cerebras" as const,   label:"Cerebras (Llama 3.3 70B)", icon:"🧠", color:"#fbbf24", badge:"SPEED",    placeholder:"csk-...",    hint:"~3,000 tok/s fastest inference · cloud.cerebras.ai" },
  { id:"deepseek" as const,   label:"DeepSeek (V3 / R1)",       icon:"🔭", color:"#34d399", badge:"REASON",   placeholder:"sk-...",     hint:"10M free tokens · platform.deepseek.com" },
  { id:"mistral" as const,    label:"Mistral (mistral-small)",   icon:"🌀", color:"#c4b5fd", badge:"STRUCT",   placeholder:"...",        hint:"500K tok/min free · console.mistral.ai" },
  { id:"togetherAI" as const, label:"Together AI (Llama 70B)",  icon:"🤝", color:"#f9a8d4", badge:"CREDIT",   placeholder:"...",        hint:"$5–$25 free credit · api.together.xyz" },
  { id:"cohere" as const,     label:"Cohere (Command-R+)",       icon:"🪄", color:"#6ee7b7", badge:"CLASS",    placeholder:"...",        hint:"20 req/s trial key · dashboard.cohere.com" },
];

const DATA_SOURCES = [
  { id:"umls" as const,      label:"UMLS Metathesaurus", icon:"🔗", color:"#67e8f9", placeholder:"xxxxxxxx-xxxx-...", hint:"200+ medical databases · uts.nlm.nih.gov" },
  { id:"bioportal" as const, label:"NCBO BioPortal",     icon:"🧭", color:"#c4b5fd", placeholder:"xxxxxxxx-xxxx-...", hint:"800+ ontologies · bioportal.bioontology.org" },
];

type AllKeyId = typeof AI_PROVIDERS[number]["id"] | typeof DATA_SOURCES[number]["id"];

const DIGITS = ["1","2","3","4","5","6","7","8","9","⌫","0","✓"];

const CSS = `
  @keyframes pinShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
  .pin-shake{animation:pinShake 0.4s ease;}
  .pin-digit-btn{transition:all 0.1s;}
  .pin-digit-btn:hover:not(:disabled){background:rgba(124,58,237,0.25)!important;border-color:rgba(124,58,237,0.5)!important;}
  .pin-digit-btn:active:not(:disabled){transform:scale(0.94);}
  .key-row-card{transition:border-color 0.2s;}
  .key-row-card:hover{border-color:rgba(124,58,237,0.35)!important;}
`;

interface Props { role: string; }

export default function ApiKeyPanel({ role }: Props) {
  // Only render for SUPER_ADMIN
  if (role !== "SUPER_ADMIN") return null;

  return <ApiKeyPanelInner />;
}

function ApiKeyPanelInner() {
  // "idle" | "pin-entry" | "pin-setup" | "open"
  const [state, setState]         = useState<"idle"|"pin-entry"|"pin-setup"|"open">("idle");
  const [pin, setPin]             = useState("");
  const [pinError, setPinError]   = useState("");
  const [pinShake, setPinShake]   = useState(false);
  const [pinLock, setPinLock]     = useState(0);
  const [setupPin, setSetupPin]   = useState("");
  const [setupConfirm, setSetupC] = useState("");
  const [setupStep, setSetupStep] = useState<"enter"|"confirm">("enter");
  const [show, setShow]           = useState<Record<string, boolean>>({});
  const [keys, setKeys]           = useState<Record<string, string>>({});

  useEffect(() => {
    setKeys({
      gemini: getStoredKey("gemini"), groq: getStoredKey("groq"),
      openRouter: getStoredKey("openRouter"), cerebras: getStoredKey("cerebras"),
      deepseek: getStoredKey("deepseek"), mistral: getStoredKey("mistral"),
      togetherAI: getStoredKey("togetherAI"), cohere: getStoredKey("cohere"),
      umls: getStoredKey("umls"), bioportal: getStoredKey("bioportal"),
    });
  }, [state]);

  useEffect(() => {
    const iv = setInterval(() => {
      const { locked, remainingMs } = pinLocked();
      setPinLock(locked ? remainingMs : 0);
    }, 500);
    return () => clearInterval(iv);
  }, []);

  function handleOpen() {
    const hasPIN = !!localStorage.getItem(PIN_HASH_KEY);
    setState(hasPIN ? "pin-entry" : "pin-setup");
    setPin(""); setPinError("");
  }

  function handleClose() { setState("idle"); setPin(""); setPinError(""); }

  // ── PIN keypad press ───────────────────────────────────────────────────
  async function handleDigit(d: string) {
    if (state === "pin-entry") {
      if (d === "⌫") { setPin(p => p.slice(0,-1)); return; }
      if (d === "✓") { await verifyPin(); return; }
      if (pin.length >= 4) return;
      const next = pin + d;
      setPin(next);
      if (next.length === 4) setTimeout(() => verifyPin(next), 100);
    }
    if (state === "pin-setup") {
      if (setupStep === "enter") {
        if (d === "⌫") { setSetupPin(p => p.slice(0,-1)); return; }
        if (d === "✓" || setupPin.length === 3) {
          const next = d === "⌫" || d === "✓" ? setupPin : setupPin + d;
          if (next.length === 4) { setSetupPin(next); setSetupStep("confirm"); setSetupC(""); return; }
          if (d !== "⌫" && d !== "✓") setSetupPin(p => p.length < 4 ? p + d : p);
          return;
        }
        setSetupPin(p => p.length < 4 ? p + d : p);
        if (setupPin.length + 1 === 4 && d !== "⌫" && d !== "✓") { setTimeout(() => { setSetupStep("confirm"); setSetupC(""); }, 150); }
      } else {
        if (d === "⌫") { setSetupC(p => p.slice(0,-1)); return; }
        if (d === "✓") { await savePin(); return; }
        const next = setupConfirm + d;
        setSetupC(next);
        if (next.length === 4) setTimeout(() => savePin(next), 100);
      }
    }
  }

  async function verifyPin(override?: string) {
    const { locked } = pinLocked();
    if (locked) return;
    const p = override || pin;
    if (p.length < 4) { setPinError("Enter all 4 digits"); return; }
    const stored = localStorage.getItem(PIN_HASH_KEY);
    const hash = await sha256(p);
    if (hash === stored) {
      clearPinRate(); setState("open"); setPin(""); setPinError("");
    } else {
      recordPinFail();
      const { locked: nowLocked, remainingMs } = pinLocked();
      if (nowLocked) setPinLock(remainingMs);
      triggerShake();
      setPinError(nowLocked ? `Locked for ${fmtMs(PIN_LOCKOUT)}` : `Wrong PIN`);
      setPin("");
    }
  }

  async function savePin(override?: string) {
    const p1 = setupPin; const p2 = override || setupConfirm;
    if (p1 !== p2) {
      triggerShake(); setPinError("PINs don't match — try again");
      setSetupStep("enter"); setSetupPin(""); setSetupC(""); return;
    }
    const hash = await sha256(p1);
    localStorage.setItem(PIN_HASH_KEY, hash);
    setState("open"); setSetupPin(""); setSetupC(""); setPinError("");
  }

  function triggerShake() { setPinShake(true); setTimeout(() => setPinShake(false), 500); }

  function handleChange(id: AllKeyId, value: string) {
    setKeys(prev => ({ ...prev, [id]: value }));
    storeKey(id, value);
  }

  const AI_IDS = AI_PROVIDERS.map(p => p.id);
  const aiSetCount = AI_IDS.filter(k => keys[k]?.trim()).length;

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <>
      <style>{CSS}</style>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"10px 20px 0" }}>

        {/* Trigger button */}
        {state === "idle" && (
          <button onClick={handleOpen}
            style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 16px", borderRadius:10, border:"1px solid rgba(124,58,237,0.3)", background:"rgba(124,58,237,0.1)", cursor:"pointer", fontSize:13, fontWeight:600, color:"#c4b5fd", width:"100%", transition:"all 0.2s" }}>
            <span style={{ fontSize:14 }}>🔑</span>
            <span style={{ flex:1 }}>API Keys — {aiSetCount === 0 ? "No keys set yet" : `${aiSetCount}/${AI_IDS.length} AI providers active`}</span>
            <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:"rgba(124,58,237,0.2)", color:"#a78bfa" }}>🔒 PIN protected</span>
            <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)" }}>▼ open</span>
          </button>
        )}

        {/* PIN entry / setup overlay */}
        {(state === "pin-entry" || state === "pin-setup") && (
          <div style={{ background:"rgba(10,10,26,0.97)", border:"1px solid rgba(124,58,237,0.3)", borderRadius:16, padding:24, display:"flex", flexDirection:"column", alignItems:"center", gap:16, position:"relative" }}>
            <button onClick={handleClose} style={{ position:"absolute", top:12, right:14, background:"none", border:"none", color:"rgba(255,255,255,0.4)", cursor:"pointer", fontSize:18 }}>✕</button>

            <div style={{ fontSize:24, filter:"drop-shadow(0 0 10px rgba(124,58,237,0.7))" }}>🔑</div>
            <div style={{ color:"#fff", fontWeight:700, fontSize:14, textAlign:"center" }}>
              {state === "pin-entry"
                ? "Enter your 4-digit PIN"
                : setupStep === "enter" ? "Set a 4-digit PIN for API Keys" : "Confirm your PIN"}
            </div>

            {pinLock > 0 && (
              <div style={{ background:"rgba(244,63,94,0.15)", border:"1px solid rgba(244,63,94,0.3)", borderRadius:8, padding:"8px 16px", fontSize:12, color:"#f43f5e", textAlign:"center" }}>
                🔒 Locked — try again in {fmtMs(pinLock)}
              </div>
            )}

            {/* Dot display */}
            <div className={pinShake ? "pin-shake" : ""} style={{ display:"flex", gap:12, marginTop:4 }}>
              {Array.from({length:4}).map((_,i) => {
                const filled = state === "pin-entry" ? i < pin.length
                  : setupStep === "enter" ? i < setupPin.length : i < setupConfirm.length;
                return (
                  <div key={i} style={{ width:14, height:14, borderRadius:"50%", border:"2px solid rgba(124,58,237,0.6)", background: filled ? "#7c3aed" : "transparent", boxShadow: filled ? "0 0 8px rgba(124,58,237,0.8)" : "none", transition:"all 0.15s" }} />
                );
              })}
            </div>

            {pinError && (
              <div style={{ fontSize:12, color:"#f43f5e", textAlign:"center" }}>{pinError}</div>
            )}

            {/* Keypad */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, width:200 }}>
              {DIGITS.map(d => (
                <button key={d} className="pin-digit-btn" onClick={() => handleDigit(d)}
                  disabled={pinLock > 0 || (d === "✓" && (
                    state === "pin-entry" ? pin.length < 4
                    : setupStep === "enter" ? setupPin.length < 4 : setupConfirm.length < 4
                  ))}
                  style={{ padding:"14px 0", borderRadius:10, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", color: d === "✓" ? "#10b981" : d === "⌫" ? "#f43f5e" : "#fff", fontSize: d === "✓" || d === "⌫" ? 18 : 20, fontWeight:700, cursor:"pointer" }}>
                  {d}
                </button>
              ))}
            </div>

            {state === "pin-setup" && setupStep === "confirm" && (
              <button onClick={() => { setSetupStep("enter"); setSetupPin(""); setSetupC(""); setPinError(""); }}
                style={{ fontSize:11, color:"rgba(255,255,255,0.35)", background:"none", border:"none", cursor:"pointer" }}>← Re-enter PIN</button>
            )}
          </div>
        )}

        {/* Open panel with keys */}
        {state === "open" && (
          <div style={{ background:"rgba(10,10,26,0.95)", border:"1px solid rgba(124,58,237,0.25)", borderRadius:16, padding:16, display:"flex", flexDirection:"column", gap:12 }}>

            {/* Header */}
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:14, color:"#c4b5fd" }}>🔑</span>
              <span style={{ flex:1, fontWeight:700, fontSize:13, color:"#fff" }}>API Keys — {aiSetCount}/{AI_IDS.length} AI providers active</span>
              <button onClick={handleClose}
                style={{ padding:"4px 12px", borderRadius:8, border:"1px solid rgba(255,255,255,0.1)", background:"transparent", color:"rgba(255,255,255,0.4)", fontSize:11, cursor:"pointer" }}>
                🔒 Lock
              </button>
            </div>

            <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", paddingBottom:8, borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
              Keys saved in browser storage — never leave your device.
            </div>

            {/* AI Providers */}
            <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.3)", letterSpacing:"1px", textTransform:"uppercase" }}>
              🤖 AI Providers ({aiSetCount}/{AI_IDS.length})
            </div>
            {AI_PROVIDERS.map(p => {
              const val = keys[p.id] || ""; const isSet = val.trim().length > 0;
              return (
                <div key={p.id} className="key-row-card" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:10, padding:"10px 14px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
                    <span style={{ fontSize:14 }}>{p.icon}</span>
                    <span style={{ fontWeight:700, fontSize:12, color:p.color }}>{p.label}</span>
                    <span style={{ fontSize:9, fontWeight:800, color:"#fff", background:p.color+"33", border:`1px solid ${p.color}55`, padding:"1px 6px", borderRadius:8 }}>{p.badge}</span>
                    {isSet && <span style={{ fontSize:10, color:"#34d399", marginLeft:"auto" }}>✓ saved</span>}
                  </div>
                  <div style={{ display:"flex", gap:7 }}>
                    <input type={show[p.id]?"text":"password"} value={val} onChange={e => handleChange(p.id, e.target.value)}
                      placeholder={p.placeholder}
                      style={{ flex:1, padding:"7px 10px", borderRadius:7, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.04)", color:"#fff", fontSize:11, fontFamily:"monospace", outline:"none" }} />
                    <button onClick={() => setShow(prev => ({...prev,[p.id]:!prev[p.id]}))}
                      style={{ padding:"6px 10px", borderRadius:7, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.05)", cursor:"pointer", fontSize:12, color:"rgba(255,255,255,0.5)" }}>
                      {show[p.id]?"🙈":"👁"}
                    </button>
                    {isSet && <button onClick={() => handleChange(p.id,"")}
                      style={{ padding:"6px 10px", borderRadius:7, border:"1px solid rgba(244,63,94,0.3)", background:"rgba(244,63,94,0.1)", cursor:"pointer", fontSize:11, color:"#f87171" }}>✕</button>}
                  </div>
                  <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", marginTop:5 }}>{p.hint}</div>
                </div>
              );
            })}

            {/* Data Sources */}
            <div style={{ fontSize:10, fontWeight:800, color:"rgba(255,255,255,0.3)", letterSpacing:"1px", textTransform:"uppercase", marginTop:4 }}>
              🗄️ Data Source Keys (optional)
            </div>
            {DATA_SOURCES.map(d => {
              const val = keys[d.id] || ""; const isSet = val.trim().length > 0;
              return (
                <div key={d.id} className="key-row-card" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:10, padding:"10px 14px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:7 }}>
                    <span style={{ fontSize:14 }}>{d.icon}</span>
                    <span style={{ fontWeight:700, fontSize:12, color:d.color }}>{d.label}</span>
                    <span style={{ fontSize:9, fontWeight:800, color:"#fff", background:d.color+"33", padding:"1px 6px", borderRadius:8 }}>DATA</span>
                    {isSet && <span style={{ fontSize:10, color:"#34d399", marginLeft:"auto" }}>✓ saved</span>}
                  </div>
                  <div style={{ display:"flex", gap:7 }}>
                    <input type={show[d.id]?"text":"password"} value={val} onChange={e => handleChange(d.id, e.target.value)}
                      placeholder={d.placeholder}
                      style={{ flex:1, padding:"7px 10px", borderRadius:7, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.04)", color:"#fff", fontSize:11, fontFamily:"monospace", outline:"none" }} />
                    <button onClick={() => setShow(prev => ({...prev,[d.id]:!prev[d.id]}))}
                      style={{ padding:"6px 10px", borderRadius:7, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.05)", cursor:"pointer", fontSize:12, color:"rgba(255,255,255,0.5)" }}>
                      {show[d.id]?"🙈":"👁"}
                    </button>
                    {isSet && <button onClick={() => handleChange(d.id,"")}
                      style={{ padding:"6px 10px", borderRadius:7, border:"1px solid rgba(244,63,94,0.3)", background:"rgba(244,63,94,0.1)", cursor:"pointer", fontSize:11, color:"#f87171" }}>✕</button>}
                  </div>
                  <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)", marginTop:5 }}>{d.hint}</div>
                </div>
              );
            })}

            <div style={{ fontSize:10, color:"rgba(255,255,255,0.2)", padding:"8px 12px", background:"rgba(255,255,255,0.02)", borderRadius:8, border:"1px solid rgba(255,255,255,0.04)", marginTop:4 }}>
              💡 Gemini handles M5 matching. DeepSeek &amp; Cerebras are fast fallbacks. All 8 AI providers form a waterfall chain — no batch is ever dropped. UMLS &amp; BioPortal unlock extra M3 terminology tiers.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
