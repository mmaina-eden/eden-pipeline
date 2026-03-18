/**
 * Cohere API helper for Eden Care Pipeline.
 * Trial key: free, 20 req/s, no strict token cap.
 * dashboard.cohere.com
 * NOTE: Cohere v1/chat uses { message } (not { messages[] }) and returns { text }.
 */

const CO_URL = "https://api.cohere.com/v1/chat";

export async function callCohere(
  apiKey:    string,
  prompt:    string,
  maxTokens: number = 2000,
): Promise<string> {
  const res = await fetch(CO_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       "command-r-plus-08-2024",
      message:     prompt,          // Cohere: singular `message`, not `messages` array
      max_tokens:  maxTokens,
      temperature: 0.1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    let msg = `Cohere ${res.status}`;
    try { msg += ": " + (JSON.parse(errText).message || errText.slice(0, 200)); }
    catch { msg += ": " + errText.slice(0, 200); }
    throw new Error(msg);
  }

  const data = await res.json();
  // Cohere v1/chat returns { text: "..." } directly (not OpenAI-style choices[])
  return data.text ?? data.message?.content?.[0]?.text ?? "";
}
