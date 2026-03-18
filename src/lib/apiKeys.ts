/**
 * Persistent API key store — keys survive page refresh and module changes.
 * Stored in localStorage under namespaced keys so they're isolated to this app.
 */

const NS: Record<string, string> = {
  // ── AI Providers ──────────────────────────────────────────────────────────
  gemini:      "eden_api_gemini",
  groq:        "eden_api_groq",
  openRouter:  "eden_api_openrouter",
  cerebras:    "eden_api_cerebras",
  togetherAI:  "eden_api_togetherai",
  mistral:     "eden_api_mistral",
  cohere:      "eden_api_cohere",
  deepseek:    "eden_api_deepseek",
  // ── Data Sources ──────────────────────────────────────────────────────────
  umls:        "eden_api_umls",
  bioportal:   "eden_api_bioportal",
};

export type ApiKeyName = keyof typeof NS;

export function getStoredKey(name: ApiKeyName): string {
  try { return localStorage.getItem(NS[name]) || ""; }
  catch { return ""; }
}

export function storeKey(name: ApiKeyName, value: string): void {
  try {
    const trimmed = value.trim();
    if (trimmed) localStorage.setItem(NS[name], trimmed);
    else         localStorage.removeItem(NS[name]);
  } catch { /* storage not available */ }
}

/** Returns an object with all currently stored keys. */
export function getAllStoredKeys(): Record<ApiKeyName, string> {
  return {
    gemini:     getStoredKey("gemini"),
    groq:       getStoredKey("groq"),
    openRouter: getStoredKey("openRouter"),
    cerebras:   getStoredKey("cerebras"),
    togetherAI: getStoredKey("togetherAI"),
    mistral:    getStoredKey("mistral"),
    cohere:     getStoredKey("cohere"),
    deepseek:   getStoredKey("deepseek"),
    umls:       getStoredKey("umls"),
    bioportal:  getStoredKey("bioportal"),
  };
}
