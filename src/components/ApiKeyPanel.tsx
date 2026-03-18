/**
 * Global API Key Panel — shown once above the pipeline stepper.
 * Keys are persisted to localStorage so they auto-fill every module
 * and survive page refresh. Enter once, never again.
 */
import { useState, useEffect } from "react";
import { getStoredKey, storeKey } from "../lib/apiKeys";

const AI_PROVIDERS = [
  {
    id:          "gemini" as const,
    label:       "Gemini 2.0 Flash",
    icon:        "✨",
    color:       "#1a73e8",
    bg:          "#e8f0fe",
    border:      "#4285f4",
    placeholder: "AIza...",
    hint:        "1,500 req/day free · best for matching (large context) · aistudio.google.com",
    badge:       "PRIMARY",
    badgeColor:  "#1a73e8",
  },
  {
    id:          "groq" as const,
    label:       "Groq (Llama 3.3 70B)",
    icon:        "⚡",
    color:       "#6c35de",
    bg:          "#f3f0ff",
    border:      "#a78bfa",
    placeholder: "gsk_...",
    hint:        "14,400 req/day free · fast classification & definitions · console.groq.com",
    badge:       "FAST",
    badgeColor:  "#7c3aed",
  },
  {
    id:          "openRouter" as const,
    label:       "OpenRouter (multi-model)",
    icon:        "🔀",
    color:       "#0369a1",
    bg:          "#f0f9ff",
    border:      "#7dd3fc",
    placeholder: "sk-or-...",
    hint:        "Free models, no output token limit · DeepSeek R1, Gemma 3, Llama 3.3 · openrouter.ai",
    badge:       "MULTI",
    badgeColor:  "#0369a1",
  },
  {
    id:          "cerebras" as const,
    label:       "Cerebras (Llama 3.3 70B)",
    icon:        "🧠",
    color:       "#b45309",
    bg:          "#fffbeb",
    border:      "#fcd34d",
    placeholder: "csk-...",
    hint:        "~3,000 tok/s — world's fastest inference · free dev tier · inference.cerebras.ai",
    badge:       "SPEED",
    badgeColor:  "#d97706",
  },
  {
    id:          "deepseek" as const,
    label:       "DeepSeek (V3 / R1)",
    icon:        "🔭",
    color:       "#0f766e",
    bg:          "#f0fdfa",
    border:      "#5eead4",
    placeholder: "sk-...",
    hint:        "10M free tokens · R1 reasoning model excels at hard medical codes · platform.deepseek.com",
    badge:       "REASON",
    badgeColor:  "#0f766e",
  },
  {
    id:          "mistral" as const,
    label:       "Mistral (mistral-small)",
    icon:        "🌀",
    color:       "#7c3aed",
    bg:          "#faf5ff",
    border:      "#c4b5fd",
    placeholder: "...",
    hint:        "500K tok/min free · strict structured output · best for formatted JSON · console.mistral.ai",
    badge:       "STRUCT",
    badgeColor:  "#7c3aed",
  },
  {
    id:          "togetherAI" as const,
    label:       "Together AI (Llama 3.3 70B)",
    icon:        "🤝",
    color:       "#be185d",
    bg:          "#fdf2f8",
    border:      "#f9a8d4",
    placeholder: "...",
    hint:        "$5–$25 free credit · massive model variety · stable infrastructure · api.together.xyz",
    badge:       "CREDIT",
    badgeColor:  "#be185d",
  },
  {
    id:          "cohere" as const,
    label:       "Cohere (Command-R+)",
    icon:        "🪄",
    color:       "#065f46",
    bg:          "#ecfdf5",
    border:      "#6ee7b7",
    placeholder: "...",
    hint:        "20 req/s trial key · strong classification & structured extraction · dashboard.cohere.com",
    badge:       "CLASS",
    badgeColor:  "#059669",
  },
];

const DATA_SOURCES = [
  {
    id:          "umls" as const,
    label:       "UMLS Metathesaurus",
    icon:        "🔗",
    color:       "#0369a1",
    border:      "#7dd3fc",
    placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    hint:        "200+ medical databases in one (SNOMED, LOINC, ICD, RxNorm mappings) · Free after registration at uts.nlm.nih.gov",
  },
  {
    id:          "bioportal" as const,
    label:       "NCBO BioPortal",
    icon:        "🧭",
    color:       "#7e22ce",
    border:      "#d8b4fe",
    placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    hint:        "800+ ontologies including RadLex (imaging) & GMDN (devices) · Free at bioportal.bioontology.org",
  },
];

type AllKeyId = typeof AI_PROVIDERS[number]["id"] | typeof DATA_SOURCES[number]["id"];

export default function ApiKeyPanel() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState<Record<string, boolean>>({});
  const [keys, setKeys] = useState<Record<string, string>>(() => ({
    gemini:     "",
    groq:       "",
    openRouter: "",
    cerebras:   "",
    deepseek:   "",
    mistral:    "",
    togetherAI: "",
    cohere:     "",
    umls:       "",
    bioportal:  "",
  }));

  // Load from localStorage on mount
  useEffect(() => {
    setKeys({
      gemini:     getStoredKey("gemini"),
      groq:       getStoredKey("groq"),
      openRouter: getStoredKey("openRouter"),
      cerebras:   getStoredKey("cerebras"),
      deepseek:   getStoredKey("deepseek"),
      mistral:    getStoredKey("mistral"),
      togetherAI: getStoredKey("togetherAI"),
      cohere:     getStoredKey("cohere"),
      umls:       getStoredKey("umls"),
      bioportal:  getStoredKey("bioportal"),
    });
    // Auto-open if no AI keys are saved yet
    const hasAny = ["gemini","groq","openRouter","cerebras","deepseek","mistral","togetherAI","cohere"]
      .some(k => getStoredKey(k as any));
    if (!hasAny) setOpen(true);
  }, []);

  function handleChange(id: AllKeyId, value: string) {
    setKeys(prev => ({ ...prev, [id]: value }));
    storeKey(id, value);
  }

  const AI_IDS = AI_PROVIDERS.map(p => p.id);
  const aiSetCount = AI_IDS.filter(k => keys[k]?.trim()).length;
  const aiTotal    = AI_IDS.length;

  const headerBg     = aiSetCount === aiTotal ? "#f0fdf4" : aiSetCount > 0 ? "#fffbeb" : "#fef2f2";
  const headerBorder = aiSetCount === aiTotal ? "#bbf7d0" : aiSetCount > 0 ? "#fde68a" : "#fca5a5";
  const badgeText    = aiSetCount === aiTotal ? "✅ All set" : aiSetCount === 0 ? "" : `${aiTotal - aiSetCount} more optional`;
  const badgeBg      = aiSetCount === aiTotal ? "#dcfce7" : "#fef9c3";
  const badgeColor   = aiSetCount === aiTotal ? "#16a34a" : "#b45309";

  const dataSetIndicators = DATA_SOURCES
    .filter(d => keys[d.id]?.trim())
    .map(d => d.label.split(" ")[0]);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto 0", padding: "12px 20px 0" }}>
      {/* Collapsed header bar */}
      <button
        onClick={() => setOpen(p => !p)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          background: headerBg,
          border: `1px solid ${headerBorder}`,
          borderRadius: open ? "10px 10px 0 0" : 10,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: "#1e293b",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 16 }}>🔑</span>
        <span style={{ flex: 1 }}>
          API Keys — {aiSetCount === 0 ? "No AI keys saved yet" : `${aiSetCount}/${aiTotal} AI providers configured`}
          {dataSetIndicators.map(label => (
            <span key={label} style={{ marginLeft: 8, fontSize: 11, color: "#0369a1" }}>· {label} ✓</span>
          ))}
        </span>
        {aiSetCount > 0 && badgeText && (
          <span style={{
            fontSize: 11, fontWeight: 700,
            color: badgeColor, background: badgeBg,
            padding: "2px 8px", borderRadius: 12,
          }}>
            {badgeText}
          </span>
        )}
        <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 4 }}>{open ? "▲ hide" : "▼ edit"}</span>
      </button>

      {/* Expanded key inputs */}
      {open && (
        <div style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderTop: "none",
          borderRadius: "0 0 10px 10px",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>
            Keys are saved in your browser and auto-filled in every module — enter once and forget.
            Keys are only stored locally and never leave your device.
          </div>

          {/* AI Providers section */}
          <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: 0.8, textTransform: "uppercase", borderBottom: "1px solid #f1f5f9", paddingBottom: 6 }}>
            🤖 AI Providers ({aiSetCount}/{aiTotal} active)
          </div>

          {AI_PROVIDERS.map(p => {
            const val = keys[p.id] || "";
            const isSet = val.trim().length > 0;
            return (
              <div key={p.id} style={{
                background: p.bg,
                border: `1px solid ${isSet ? p.border : "#e2e8f0"}`,
                borderRadius: 8,
                padding: "10px 14px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 15 }}>{p.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: p.color }}>{p.label}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: 0.5,
                    color: "#fff", background: p.badgeColor,
                    padding: "1px 6px", borderRadius: 10,
                  }}>{p.badge}</span>
                  {isSet && <span style={{ fontSize: 11, color: "#16a34a", marginLeft: "auto" }}>✓ saved</span>}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    type={show[p.id] ? "text" : "password"}
                    value={val}
                    onChange={e => handleChange(p.id, e.target.value)}
                    placeholder={p.placeholder}
                    style={{
                      flex: 1, padding: "7px 10px",
                      border: "1px solid #e2e8f0", borderRadius: 6,
                      fontSize: 12, fontFamily: "monospace",
                      background: "#fff", outline: "none",
                    }}
                  />
                  <button
                    onClick={() => setShow(prev => ({ ...prev, [p.id]: !prev[p.id] }))}
                    style={{
                      padding: "6px 10px", borderRadius: 6,
                      border: "1px solid #e2e8f0", background: "#f8fafc",
                      cursor: "pointer", fontSize: 12, color: "#475569",
                    }}
                  >
                    {show[p.id] ? "🙈" : "👁"}
                  </button>
                  {isSet && (
                    <button
                      onClick={() => handleChange(p.id, "")}
                      style={{
                        padding: "6px 10px", borderRadius: 6,
                        border: "1px solid #fca5a5", background: "#fff1f2",
                        cursor: "pointer", fontSize: 12, color: "#dc2626",
                      }}
                    >✕</button>
                  )}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 5 }}>{p.hint}</div>
              </div>
            );
          })}

          {/* Data Sources section */}
          <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", letterSpacing: 0.8, textTransform: "uppercase", borderBottom: "1px solid #f1f5f9", paddingBottom: 6, marginTop: 4 }}>
            🗄️ Data Source Keys (optional)
          </div>

          {DATA_SOURCES.map(d => {
            const val = keys[d.id] || "";
            const isSet = val.trim().length > 0;
            return (
              <div key={d.id} style={{
                background: "#f8fafc",
                border: `1px solid ${isSet ? d.border : "#e2e8f0"}`,
                borderRadius: 8, padding: "10px 14px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 15 }}>{d.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 13, color: d.color }}>{d.label}</span>
                  <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", background: d.color, padding: "1px 6px", borderRadius: 10 }}>DATA</span>
                  <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 2 }}>optional</span>
                  {isSet && <span style={{ fontSize: 11, color: "#16a34a", marginLeft: "auto" }}>✓ saved</span>}
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    type={show[d.id] ? "text" : "password"}
                    value={val}
                    onChange={e => handleChange(d.id, e.target.value)}
                    placeholder={d.placeholder}
                    style={{ flex: 1, padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 6, fontSize: 12, fontFamily: "monospace", background: "#fff", outline: "none" }}
                  />
                  <button onClick={() => setShow(prev => ({ ...prev, [d.id]: !prev[d.id] }))}
                    style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #e2e8f0", background: "#f8fafc", cursor: "pointer", fontSize: 12, color: "#475569" }}>
                    {show[d.id] ? "🙈" : "👁"}
                  </button>
                  {isSet && (
                    <button onClick={() => handleChange(d.id, "")}
                      style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #fca5a5", background: "#fff1f2", cursor: "pointer", fontSize: 12, color: "#dc2626" }}>✕</button>
                  )}
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 5 }}>{d.hint}</div>
              </div>
            );
          })}

          <div style={{
            fontSize: 11, color: "#94a3b8", marginTop: 4,
            padding: "8px 12px", background: "#f8fafc",
            borderRadius: 6, border: "1px solid #f1f5f9",
          }}>
            💡 <strong>How providers are used:</strong> Gemini handles matching (M5) in large batches.
            DeepSeek &amp; Cerebras are blazing-fast fallbacks. Groq, OpenRouter, Mistral, Together AI, and Cohere
            form a deep fallback chain so no batch is ever dropped. All active providers run <strong>in parallel</strong> to maximise speed.
            UMLS &amp; BioPortal unlock additional terminology tiers in the M3 Alias Engine.
          </div>
        </div>
      )}
    </div>
  );
}
