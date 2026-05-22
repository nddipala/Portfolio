const MODELS = [
  "llama-3.3-70b-versatile",
  "llama3-8b-8192",
  "gemma2-9b-it",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ type: "no_key", error: "API key not configured" });
  }

  const { messages, system } = req.body;

  const groqMessages = [
    { role: "system", content: system },
    ...messages,
  ];

  for (const model of MODELS) {
    let response, data;
    try {
      response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: groqMessages,
          max_tokens: 400,
          temperature: 0.4,
        }),
      });
      data = await response.json();
    } catch (err) {
      continue;
    }

    if (response.status === 404) continue;

    if (response.status === 429) {
      return res.status(429).json({ type: "quota_exceeded", error: "Rate limit exceeded" });
    }

    if (!response.ok) {
      return res.status(response.status).json({ type: "api_error", error: data?.error?.message || "API error" });
    }

    return res.status(200).json({ reply: data.choices[0].message.content });
  }

  return res.status(429).json({ type: "quota_exceeded", error: "All models rate limited" });
}
