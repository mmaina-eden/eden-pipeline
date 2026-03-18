/**
 * Shared Gemini API helper for Eden Care Pipeline.
 * Model: gemini-2.0-flash — 1,500 req/day free · 15 RPM · 1M token context · browser CORS native.
 * (gemini-1.5-flash was removed from the v1beta endpoint; gemini-2.0-flash is the current free-tier model)
 */

const GEMINI_MODEL = "gemini-2.0-flash";
const MAX_RETRIES  = 3;

function parseRetryDelay(errorText: string): number {
  // Gemini 429 errors include "Please retry in X.XXs" — extract and honour that wait time
  const m = errorText.match(/retry in (\d+(?:\.\d+)?)s/i);
  return m ? Math.ceil(parseFloat(m[1]) * 1000) + 500 : 10_000; // default 10s
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function callGemini(
  apiKey: string,
  prompt: string,
  maxTokens = 3000,
  jsonMode = false
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const generationConfig: Record<string, any> = { maxOutputTokens: maxTokens, temperature: 0.1 };
  if (jsonMode) generationConfig.responseMimeType = "application/json";

  const body = JSON.stringify({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  });

  let lastError = "";

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (res.ok) {
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    }

    const errText = await res.text();
    let errMsg = `Gemini ${res.status}`;
    try {
      const parsed = JSON.parse(errText);
      errMsg += `: ${parsed.error?.message ?? errText.slice(0, 300)}`;
    } catch {
      errMsg += `: ${errText.slice(0, 300)}`;
    }

    // Daily quota exhausted (limit: 0) — no point retrying, won't recover until tomorrow
    const isDailyQuota = errMsg.includes("limit: 0") || errMsg.includes("free_tier_requests");
    if (res.status === 429 && isDailyQuota) {
      throw new Error("DAILY_QUOTA_EXHAUSTED: " + errMsg);
    }

    // Per-minute rate limit — wait the suggested time then retry
    if (res.status === 429 && attempt < MAX_RETRIES) {
      const waitMs = parseRetryDelay(errMsg);
      console.warn(`[Gemini] Rate limit hit (attempt ${attempt}/${MAX_RETRIES}). Waiting ${Math.round(waitMs/1000)}s before retry...`);
      await sleep(waitMs);
      continue;
    }

    lastError = errMsg;
    break;
  }

  throw new Error(lastError || "Gemini request failed after retries");
}
