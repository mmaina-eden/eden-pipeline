/**
 * DeepSeek API helper for Eden Care Pipeline.
 * Lowest cost in industry. 10M free tokens on signup.
 * platform.deepseek.com — OpenAI-compatible format.
 */

const DS_URL   = "https://api.deepseek.com/v1/chat/completions";
const DS_MODEL = "deepseek-chat"; // deepseek-chat = V3; use "deepseek-reasoner" for R1

export async function callDeepSeek(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  const res = await fetch(DS_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       DS_MODEL,
      messages:    [{ role: "user", content: prompt }],
      max_tokens:  maxTokens,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `DeepSeek ${res.status}`;
    try { msg += ": " + (JSON.parse(errText).error?.message || errText.slice(0, 200)); }
    catch { msg += ": " + errText.slice(0, 200); }
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}
