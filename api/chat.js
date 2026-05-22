const MODELS = [
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash-8b",
  "gemini-1.5-flash-latest",
  "gemini-2.0-flash",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ type: "no_key", error: "API key not configured" });
  }

  const { contents, system_instruction } = req.body;

  for (const model of MODELS) {
    let response, data;
    try {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction,
            contents,
            generationConfig: { maxOutputTokens: 400, temperature: 0.4 },
          }),
        }
      );
      data = await response.json();
    } catch (err) {
      continue;
    }

    if (response.status === 404) continue;

    if (response.status === 429) {
      return res.status(429).json({ type: "quota_exceeded", error: "Quota exceeded" });
    }

    if (!response.ok) {
      return res.status(response.status).json({ type: "api_error", error: data?.error?.message || "API error" });
    }

    return res.status(200).json(data);
  }

  return res.status(429).json({ type: "quota_exceeded", error: "All models quota exhausted" });
}
