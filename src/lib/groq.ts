/**
 * Groq API helper for Eden Care Pipeline.
 * Model: llama-3.3-70b-versatile (free tier)
 * Free limits: 14,400 requests/day · 6,000 input tokens/min · 500 output tokens/min
 * Best suited for: M2 Triage Router (domain classification) + M4 Definition Engine (short AI fallback)
 * Auto-retries on 429 rate-limit errors, honouring Groq's retry-after header.
 */

const GROQ_MODEL  = "llama-3.3-70b-versatile";
const GROQ_URL    = "https://api.groq.com/openai/v1/chat/completions";
const MAX_RETRIES = 4;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Parse retry wait from Groq error body: "Please try again in 12.3s" */
function parseGroqRetryDelay(errText: string, retryAfterHeader: string | null): number {
  if (retryAfterHeader) {
    const secs = parseFloat(retryAfterHeader);
    if (!isNaN(secs)) return Math.ceil(secs * 1000) + 500;
  }
  const m = errText.match(/try again in (\d+(?:\.\d+)?)s/i);
  return m ? Math.ceil(parseFloat(m[1]) * 1000) + 500 : 15_000; // default 15s
}

export async function callGroq(
  apiKey: string,
  prompt: string,
  maxTokens = 1000
): Promise<string> {
  let lastError = "";

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: maxTokens,
        temperature: 0.1,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data.choices?.[0]?.message?.content ?? "";
    }

    const errText = await res.text();
    let msg = `Groq ${res.status}`;
    try {
      const parsed = JSON.parse(errText);
      msg += `: ${parsed.error?.message ?? errText.slice(0, 200)}`;
    } catch {
      msg += `: ${errText.slice(0, 200)}`;
    }

    // Rate limit — wait then retry automatically
    if (res.status === 429 && attempt < MAX_RETRIES) {
      const waitMs = parseGroqRetryDelay(errText, res.headers.get("retry-after"));
      console.warn(`[Groq] Rate limit hit (attempt ${attempt}/${MAX_RETRIES}). Waiting ${Math.round(waitMs / 1000)}s...`);
      await sleep(waitMs);
      continue;
    }

    lastError = msg;
    break;
  }

  throw new Error(lastError || "Groq request failed after retries");
}
