/**
 * OpenRouter API helper for Eden Care Pipeline.
 * Free models: google/gemma-3-27b-it:free, meta-llama/llama-4-scout:free
 * No output token rate limit on free tier — good fallback when Groq/Gemini are exhausted.
 * Browser CORS: supported (OpenRouter allows browser fetch with API key).
 */

const OR_URL   = "https://openrouter.ai/api/v1/chat/completions";
// Free models in priority order — tries next if one returns 429/404
// Updated March 2026: mistral-7b and llama-4-scout removed from free tier
const OR_MODELS = [
  "deepseek/deepseek-r1:free",              // DeepSeek R1 — strong reasoning, consistently available
  "deepseek/deepseek-chat-v3-0324:free",    // DeepSeek V3 — fast, good instruction following
  "google/gemma-3-27b-it:free",             // Gemma 3 27B — Google model, good fallback
  "meta-llama/llama-3.3-70b-instruct:free", // Llama 3.3 70B — same family as Groq
  "qwen/qwq-32b:free",                      // QwQ 32B — strong reasoning fallback
];

export async function callOpenRouter(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  let lastError = "";

  for (const model of OR_MODELS) {
    try {
      const res = await fetch(OR_URL, {
        method: "POST",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer":  typeof window !== "undefined" ? window.location.origin : "https://eden-pipeline",
          "X-Title":       "Eden Care Pipeline",
        },
        body: JSON.stringify({
          model,
          messages:   [{ role: "user", content: prompt }],
          max_tokens: maxTokens,
          temperature: 0.1,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content ?? "";
        if (text.trim()) return text;
        throw new Error("Empty response from " + model);
      }

      const errText = await res.text();
      let msg = `OpenRouter ${res.status}`;
      try { msg += ": " + (JSON.parse(errText).error?.message || errText.slice(0, 200)); }
      catch { msg += ": " + errText.slice(0, 200); }

      // 429 (rate limit) or 404 (model unavailable) — try next model in list
      if (res.status === 429 || res.status === 404) { lastError = msg; continue; }
      throw new Error(msg);

    } catch (err: any) {
      // Only swallow rate-limit / model-unavailable errors — try next model
      // Re-throw everything else (network failures, auth errors, etc.)
      const isRetryable = err.message.includes("429") || err.message.includes("quota")
                       || err.message.includes("404") || err.message.includes("unavailable");
      if (isRetryable) { lastError = err.message; continue; }
      throw err;
    }
  }

  throw new Error(lastError || "OpenRouter: all free models exhausted");
}
