/**
 * Together AI API helper for Eden Care Pipeline.
 * Hosts every major open-source model. $5–$25 free credit on signup.
 * api.together.xyz — OpenAI-compatible format.
 */

const TA_URL   = "https://api.together.xyz/v1/chat/completions";
const TA_MODEL = "meta-llama/Llama-3.3-70B-Instruct-Turbo";

export async function callTogetherAI(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  const res = await fetch(TA_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       TA_MODEL,
      messages:    [{ role: "user", content: prompt }],
      max_tokens:  maxTokens,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `TogetherAI ${res.status}`;
    try { msg += ": " + (JSON.parse(errText).error?.message || errText.slice(0, 200)); }
    catch { msg += ": " + errText.slice(0, 200); }
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}
