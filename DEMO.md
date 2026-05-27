# Portfolio Demo — Chatbot Video Recording

Playwright-powered script that records a cinematic 1080p demo of the AI chatbot feature on [nagarjun-portfolio-lac-coral.vercel.app](https://nagarjun-portfolio-lac-coral.vercel.app).

## Quick Start

```bash
# 1 — install Playwright dependencies (root of repo)
cd Portfolio
npm install

# 2 — download Chromium browser binary
npm run demo:install

# 3 — record the demo (headless, saves video automatically)
npm run demo:chatbot
```

The video is saved to **`demo-output/chatbot-demo.webm`** (1920×1080).

---

## Commands

| Command | Description |
|---|---|
| `npm run demo:chatbot` | Headless recording — fastest, no window |
| `npm run demo:chatbot:headed` | Windowed — watch it record live |
| `npm run demo:install` | Download Playwright's Chromium binary |

---

## What the Script Records

| Scene | Action |
|---|---|
| 1 | Navigate to homepage, wait for hero animations |
| 2 | Gentle scroll reveal — bento impact section, back up |
| 3 | Hover FAB → tooltip "Want to know more about Nagarjun?" |
| 4 | Click FAB → chat panel slides in |
| 5 | Type question character-by-character (cinematic speed) |
| 6 | Send message |
| 7 | Show AI typing indicator, wait for full response |
| 8 | Close chatbot |
| 9 | Final dwell on hero |

Total runtime: ~60–80 seconds depending on AI response time.

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORTFOLIO_URL` | `https://nagarjun-portfolio-lac-coral.vercel.app` | Target URL — use `http://localhost:3000` for local dev |

**Local dev example:**
```bash
# Terminal 1: start React dev server
cd client && npm start

# Terminal 2: run demo against local
PORTFOLIO_URL=http://localhost:3000 npm run demo:chatbot
```

---

## Output

```
demo-output/
└── chatbot-demo.webm    ← 1920×1080, ~30-90s recording
```

The `.webm` can be converted to MP4 for sharing:
```bash
ffmpeg -i demo-output/chatbot-demo.webm -c:v libx264 -crf 18 demo-output/chatbot-demo.mp4
```

---

## Folder Structure

```
Portfolio/
├── playwright.config.ts       ← video config, 1080p, slowMo
├── package.json               ← demo:chatbot scripts
├── tsconfig.playwright.json   ← TypeScript for tests
├── DEMO.md                    ← this file
├── tests/
│   └── demo/
│       └── chatbot.spec.ts    ← cinematic demo script
└── demo-output/
    └── chatbot-demo.webm      ← generated video (gitignored)
```

---

## Notes

- The script targets the **production Vercel URL** by default — the real Groq API is called.
- AI response time varies (2–15s). The script waits up to **50 seconds** before timing out.
- `retries: 1` in `playwright.config.ts` handles transient network flakiness.
- Re-running overwrites the previous `chatbot-demo.webm`.
