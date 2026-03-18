/**
 * Mistral AI (La Plateforme) helper for Eden Care Pipeline.
 * Free tier: 1 req/s, 500K tok/min.
 * console.mistral.ai — OpenAI-compatible format.
 */

const MI_URL   = "https://api.mistral.ai/v1/chat/completions";
const MI_MODEL = "mistral-small-latest";

export async function callMistral(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  const res = await fetch(MI_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       MI_MODEL,
      messages:    [
        { role: "system", content: "You are a JSON API. Respond ONLY with a valid JSON array. No markdown, no code fences, no explanation before or after. Start with [ and end with ]." },
        { role: "user",   content: prompt },
      ],
      max_tokens:  maxTokens,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `Mistral ${res.status}`;
    try { msg += ": " + (JSON.parse(errText).error?.message || errText.slice(0, 200)); }
    catch { msg += ": " + errText.slice(0, 200); }
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}
