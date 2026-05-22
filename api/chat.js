export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not set in environment variables" });
  }

  const { contents, system_instruction } = req.body;

  const models = ["gemini-2.0-flash", "gemini-1.5-flash-latest", "gemini-1.5-flash"];

  for (const model of models) {
    try {
      const response = await fetch(
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

      const data = await response.json();

      if (response.status === 404) continue;

      return res.status(response.status).json(data);
    } catch (err) {
      continue;
    }
  }

  return res.status(500).json({ error: "No available Gemini model responded successfully" });
}
