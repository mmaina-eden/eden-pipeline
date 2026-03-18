/**
 * Cerebras Cloud API helper for Eden Care Pipeline.
 * Uses Wafer-Scale hardware — fastest inference (~3,000 tok/s).
 * Free dev access at: cloud.cerebras.ai
 * OpenAI-compatible format.
 */

const CB_URL = "https://inference.cerebras.ai/v1/chat/completions";

export async function callCerebras(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  const res = await fetch(CB_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:                 "llama-3.3-70b",
      messages:              [{ role: "user", content: prompt }],
      max_completion_tokens: maxTokens,
      temperature:           0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `Cerebras ${res.status}`;
    try { msg += ": " + (JSON.parse(errText).error?.message || errText.slice(0, 200)); }
    catch { msg += ": " + errText.slice(0, 200); }
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}
