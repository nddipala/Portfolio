/**
 * Cinematic demo script: nagarjun.dev chatbot feature
 *
 * Selectors are derived directly from client/src/components/Chatbot.js:
 *   - FAB:        aria-label="Open chat — Want to know more about Nagarjun?"
 *   - Close:      aria-label="Close chat"
 *   - Send:       aria-label="Send message"
 *   - Input:      placeholder="Ask about Nagarjun…"
 *   - Typing dots: .animate-bounce (Tailwind CSS utility)
 *
 * Output: demo-output/chatbot-demo.webm  (1920×1080, renamed in afterAll)
 *
 * Run:
 *   npm run demo:chatbot              # headless
 *   npm run demo:chatbot:headed       # windowed (see what's being recorded)
 */

import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// ── Stable selectors (aria-label preferred; falls back to placeholder) ────────
const FAB_LABEL   = 'Open chat — Want to know more about Nagarjun?';
const CLOSE_LABEL = 'Close chat';
const SEND_LABEL  = 'Send message';
const INPUT_PH    = 'Ask about Nagarjun…'; // "Ask about Nagarjun…"

// Message typed character-by-character for cinematic effect
const DEMO_MESSAGE =
  'Tell me about Nagarjun\'s experience at Aetna CVS Health';

// ── Helpers ──────────────────────────────────────────────────────────────────
async function smoothScrollTo(page: Parameters<typeof test>[1] extends never ? never : any, top: number) {
  await page.evaluate((y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, top);
}

// ── Save hook — runs once after all tests; copies video to demo-output/ ─────
// Playwright finalises video during fixture teardown (after afterEach),
// placing it under test-results/<test-name>/video.webm.
// afterAll runs after teardown, so the file is guaranteed to be complete.
test.afterAll(async () => {
  const testResultsDir = path.resolve('./test-results');
  if (!fs.existsSync(testResultsDir)) {
    console.warn('\n⚠  test-results/ not found — was video recording enabled?\n');
    return;
  }

  // Recursively collect every video.webm written in this run
  const videos: string[] = [];
  function scan(dir: string) {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) scan(full);
      else if (entry === 'video.webm') videos.push(full);
    }
  }
  scan(testResultsDir);

  if (videos.length === 0) {
    console.warn('\n⚠  No video.webm found in test-results/ — check playwright.config.ts.\n');
    return;
  }

  // Pick the most recently modified one (handles re-runs cleanly)
  const newest = videos
    .map(f => ({ filePath: f, mtime: fs.statSync(f).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)[0].filePath;

  const outDir = path.resolve('./demo-output');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const dst = path.join(outDir, 'chatbot-demo.webm');
  if (fs.existsSync(dst)) fs.unlinkSync(dst);
  fs.copyFileSync(newest, dst);

  console.log(`\n✅  Video saved → ${path.resolve(dst)}\n`);
});

// ── Main cinematic test ───────────────────────────────────────────────────────
test.describe('nagarjun.dev — chatbot demo recording', () => {
  test('chatbot-cinematic-demo', async ({ page }) => {

    // ── Scene 1 · Navigate & wait for hero to settle ─────────────────────────
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Hero headline must exist before we proceed
    await page.waitForSelector('h1', { timeout: 20_000 });

    // Let Framer Motion entrance animations fully complete
    await page.waitForTimeout(2_500);

    // ── Scene 2 · Gentle scroll reveal (establish context) ───────────────────
    // Glide down to hint at the impact/bento section below the fold
    await smoothScrollTo(page, 480);
    await page.waitForTimeout(2_000);

    // Glide back up — return to hero before engaging the chatbot
    await smoothScrollTo(page, 0);
    await page.waitForTimeout(1_800);

    // ── Scene 3 · Spotlight the FAB ──────────────────────────────────────────
    const fab = page.getByRole('button', { name: FAB_LABEL });
    await expect(fab).toBeVisible({ timeout: 10_000 });

    // Hover slowly — intentional, cinematic
    await fab.hover();

    // Hold on tooltip so the viewer can read "Want to know more about Nagarjun?"
    await page.waitForTimeout(2_800);

    // ── Scene 4 · Open the chatbot panel ─────────────────────────────────────
    await fab.click();

    // Wait for Framer Motion slide-in (duration: 220ms in component)
    const chatInput = page.getByPlaceholder(INPUT_PH);
    await expect(chatInput).toBeVisible({ timeout: 8_000 });

    // Dwell to show the opening animation and welcome message
    await page.waitForTimeout(1_400);

    // ── Scene 5 · Type the demo message (character-by-character) ─────────────
    await chatInput.click();
    // delay:72 ≈ ~120 wpm — fast enough to feel snappy, slow enough to read
    await page.keyboard.type(DEMO_MESSAGE, { delay: 72 });

    // Pause so viewer can read the fully-typed question
    await page.waitForTimeout(1_800);

    // ── Scene 6 · Send the message ───────────────────────────────────────────
    const sendBtn = page.getByRole('button', { name: SEND_LABEL });
    await expect(sendBtn).toBeEnabled({ timeout: 3_000 });
    await sendBtn.click();

    // Let user message bubble render before AI starts "thinking"
    await page.waitForTimeout(900);

    // ── Scene 7 · Wait for AI typing indicator, then response ────────────────
    // Typing dots (.animate-bounce) appear while waiting for Groq API
    await page.waitForSelector('.animate-bounce', { timeout: 8_000 })
      .catch(() => { /* dots may flash briefly — not critical */ });

    // Wait until ALL bounce dots are gone → full response has rendered
    await page.waitForFunction(
      () => document.querySelectorAll('.animate-bounce').length === 0,
      { timeout: 50_000 },
    );

    // Give the viewer time to read the AI response
    await page.waitForTimeout(4_800);

    // ── Scene 8 · Close the chatbot panel ────────────────────────────────────
    const closeBtn = page.getByRole('button', { name: CLOSE_LABEL });
    await expect(closeBtn).toBeVisible({ timeout: 5_000 });
    await closeBtn.click();

    // Wait for Framer Motion exit animation (same duration as open: 220ms)
    await page.waitForTimeout(1_400);

    // ── Scene 9 · Final dwell on the hero ────────────────────────────────────
    // The FAB should show its idle ping-ring animation again
    await expect(fab).toBeVisible({ timeout: 5_000 });
    await page.waitForTimeout(2_000);
  });
});
