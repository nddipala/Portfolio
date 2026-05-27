/**
 * playwright-demo/chatbot-cinematic.spec.ts
 *
 * Cinematic chatbot product showcase — nagarjun.dev
 *
 * ─────────────────── Scene breakdown ───────────────────────────────────────
 *  1   Navigate & hero animation settle          (3 s)
 *  2   Reveal scroll — bento glimpse & back      (4 s)
 *  3   Letterbox bars fade in                    (1 s)
 *  4   CSS zoom toward FAB via RAF animation     (2.6 s)
 *  5   Spotlight vignette intensifies on FAB     (1.6 s)
 *  6   Zoom-out + effects dissolve               (1.5 s)
 *  7   Hover FAB — tooltip "Want to know more?"  (2.8 s)
 *  8   Click → chatbot panel slides in           (1.6 s)
 *  9   Q1: Top skills                            (type + AI response + dwell)
 * 10   Q2: Strongest backend achievement         (type + AI response + dwell)
 * 11   Q3: AI / LLMs in real projects            (type + AI response + dwell)
 * 12   Q4: Why hire for senior backend?          (type + AI response + dwell)
 * 13   Graceful close + finale dwell             (3 s)
 * ───────────────────────────────────────────────────────────────────────────
 *
 * Selectors pulled directly from client/src/components/Chatbot.js:
 *   FAB trigger : aria-label="Open chat — Want to know more about Nagarjun?"
 *   Close btn   : aria-label="Close chat"
 *   Send btn    : aria-label="Send message"
 *   Chat input  : placeholder="Ask about Nagarjun…"
 *   Loading     : .animate-bounce  (Tailwind, three dots during AI call)
 *
 * Output → demo-output/chatbot-cinematic-demo.webm  (1920×1080)
 */

import { test, expect, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// ── Stable selectors ──────────────────────────────────────────────────────────
const FAB_LABEL   = 'Open chat — Want to know more about Nagarjun?';
const CLOSE_LABEL = 'Close chat';
const SEND_LABEL  = 'Send message';
const INPUT_PH    = 'Ask about Nagarjun…'; // "Ask about Nagarjun…"

// ── Creative questions (highlight skills indirectly) ──────────────────────────
const QUESTIONS = [
  'What are the top skills Nagarjun is really good at?',
  'Can you show me one of his strongest backend achievements?',
  'How does Nagarjun use AI and LLMs in real projects?',
  'Why should a company hire Nagarjun for a senior backend role?',
];

// ── Dedicated test-results folder (set in playwright-cinematic.config.ts) ────
const CINEMATIC_RESULTS = path.resolve('./playwright-cinematic-results');

// ═══════════════════════════════════════════════════════════════════════════════
//  CINEMATIC EFFECT HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

/** Smooth browser-native scroll */
async function pan(page: Page, top: number) {
  await page.evaluate(
    (y: number) => window.scrollTo({ top: y, behavior: 'smooth' }),
    top,
  );
}

// ── Letterbox bars ────────────────────────────────────────────────────────────
async function showLetterbox(page: Page) {
  await page.evaluate(() => {
    const el = document.createElement('div');
    el.id = 'cin-letterbox';
    el.style.cssText = `
      position:fixed;inset:0;pointer-events:none;z-index:99995;
      background:linear-gradient(to bottom,
        #000 0%,#000 7%,transparent 7%,transparent 93%,#000 93%,#000 100%);
      opacity:0;transition:opacity 0.85s ease;
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => { el.style.opacity = '1'; }),
    );
  });
  await page.waitForTimeout(900);
}

async function hideLetterbox(page: Page) {
  await page.evaluate(() => {
    const el = document.getElementById('cin-letterbox');
    if (el) { el.style.opacity = '0'; setTimeout(() => el.remove(), 900); }
  });
}

// ── Spotlight vignette centred on the FAB (bottom-right) ─────────────────────
async function showSpotlight(page: Page) {
  await page.evaluate(() => {
    const el = document.createElement('div');
    el.id = 'cin-spotlight';
    el.style.cssText = `
      position:fixed;inset:0;pointer-events:none;z-index:99994;
      background:radial-gradient(
        circle 170px at calc(100% - 60px) calc(100% - 60px),
        transparent 0%,
        rgba(0,0,0,0.84) 100%
      );
      opacity:0;transition:opacity 1.4s ease;
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => { el.style.opacity = '1'; }),
    );
  });
  await page.waitForTimeout(1_450);
}

async function hideSpotlight(page: Page) {
  await page.evaluate(() => {
    const el = document.getElementById('cin-spotlight');
    if (el) { el.style.opacity = '0'; setTimeout(() => el.remove(), 1_400); }
  });
}

// ── Smooth CSS zoom via requestAnimationFrame (runs entirely in-browser) ──────
//
// CSS `zoom` on <html> in Chrome scales ALL rendered content including
// position:fixed elements, so the FAB zooms in together with the page.
// The animation is a single evaluate() call that resolves when done,
// so Playwright doesn't add round-trip overhead during the animation.

async function zoomIn(page: Page, targetZoom = 1.45, durationMs = 2_600) {
  await page.evaluate(
    ({ target, duration }: { target: number; duration: number }) =>
      new Promise<void>((resolve) => {
        const t0 = performance.now();
        function tick(now: number) {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
          (document.documentElement.style as any).zoom = String(
            1 + (target - 1) * eased,
          );
          if (p < 1) requestAnimationFrame(tick);
          else resolve();
        }
        requestAnimationFrame(tick);
      }),
    { target: targetZoom, duration: durationMs },
  );
}

async function zoomOut(page: Page, durationMs = 1_100) {
  await page.evaluate(
    ({ duration }: { duration: number }) =>
      new Promise<void>((resolve) => {
        const from = parseFloat(
          (document.documentElement.style as any).zoom || '1',
        );
        const t0 = performance.now();
        function tick(now: number) {
          const p = Math.min((now - t0) / duration, 1);
          // ease-in-out quad
          const eased =
            p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          (document.documentElement.style as any).zoom = String(
            from - (from - 1) * eased,
          );
          if (p < 1) requestAnimationFrame(tick);
          else {
            (document.documentElement.style as any).zoom = '1';
            resolve();
          }
        }
        requestAnimationFrame(tick);
      }),
    { duration: durationMs },
  );
}

// ── Q&A helper — type, send, wait for AI, dwell ───────────────────────────────
async function askAndWait(
  page: Page,
  question: string,
  dwellMs = 4_500,
) {
  const input = page.getByPlaceholder(INPUT_PH);
  await input.click();

  // Humanised typing: ~145 wpm — natural rhythm, readable in video
  await page.keyboard.type(question, { delay: 68 });
  await page.waitForTimeout(1_300); // reader dwell on typed text

  const sendBtn = page.getByRole('button', { name: SEND_LABEL });
  await expect(sendBtn).toBeEnabled({ timeout: 3_000 });
  await sendBtn.click();
  await page.waitForTimeout(700); // user bubble renders

  // Typing indicator appears (three .animate-bounce dots)
  await page
    .waitForSelector('.animate-bounce', { timeout: 9_000 })
    .catch(() => { /* dots can appear/vanish fast on quick responses */ });

  // Wait until ALL dots gone → full AI response has rendered
  await page.waitForFunction(
    () => document.querySelectorAll('.animate-bounce').length === 0,
    { timeout: 55_000 },
  );

  await page.waitForTimeout(dwellMs); // reader dwell on response
}

// ═══════════════════════════════════════════════════════════════════════════════
//  VIDEO SAVE HOOK
// ═══════════════════════════════════════════════════════════════════════════════

// Playwright finalises video in fixture teardown AFTER afterEach but
// BEFORE afterAll.  Scanning the results dir in afterAll is the reliable path.
test.afterAll(async () => {
  if (!fs.existsSync(CINEMATIC_RESULTS)) {
    console.warn('\n⚠  playwright-cinematic-results/ not found.\n');
    return;
  }

  const videos: string[] = [];
  function scan(dir: string) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      fs.statSync(full).isDirectory()
        ? scan(full)
        : f === 'video.webm' && videos.push(full);
    }
  }
  scan(CINEMATIC_RESULTS);

  if (!videos.length) {
    console.warn('\n⚠  No video.webm in playwright-cinematic-results/ — check config.\n');
    return;
  }

  const newest = videos
    .map(f => ({ f, mtime: fs.statSync(f).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime)[0].f;

  const outDir = path.resolve('./demo-output');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const dst = path.join(outDir, 'chatbot-cinematic-demo.webm');
  if (fs.existsSync(dst)) fs.unlinkSync(dst);
  fs.copyFileSync(newest, dst);

  console.log(`\n🎬  Cinematic video → ${path.resolve(dst)}\n`);
});

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN CINEMATIC TEST
// ═══════════════════════════════════════════════════════════════════════════════

test.describe('nagarjun.dev — cinematic chatbot showcase', () => {
  test('cinematic-chatbot-showcase', async ({ page }) => {

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 1 · Navigate & let the hero animate in
    // ────────────────────────────────────────────────────────────────────────
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('h1', { timeout: 20_000 });

    // Framer Motion entrance animations: opacity + translateY (0.7 s each)
    await page.waitForTimeout(3_000);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 2 · Reveal scroll — establish the portfolio's depth
    // ────────────────────────────────────────────────────────────────────────
    await pan(page, 520);     // glide down — bento/impact section visible
    await page.waitForTimeout(2_000);
    await pan(page, 0);       // glide back up to hero
    await page.waitForTimeout(1_800);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 3 · Letterbox bars — cinema mode begins
    // ────────────────────────────────────────────────────────────────────────
    await showLetterbox(page);
    await page.waitForTimeout(500);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 4 · Smooth CSS zoom toward the FAB (bottom-right)
    // RAF animation — zero Playwright round-trips during zoom
    // ────────────────────────────────────────────────────────────────────────
    await zoomIn(page, 1.45, 2_600);
    await page.waitForTimeout(900); // dramatic peak dwell

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 5 · Spotlight intensifies around FAB
    // ────────────────────────────────────────────────────────────────────────
    await showSpotlight(page);
    // waitForTimeout already inside showSpotlight (1 450 ms)
    await page.waitForTimeout(1_000); // breathe at spotlight peak

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 6 · Pull back — dissolve effects, return to 1:1
    // ────────────────────────────────────────────────────────────────────────
    await hideSpotlight(page);
    await hideLetterbox(page);
    await zoomOut(page, 1_100);
    await page.waitForTimeout(600);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 7 · Hover FAB — tooltip: "Want to know more about Nagarjun?"
    // ────────────────────────────────────────────────────────────────────────
    const fab = page.getByRole('button', { name: FAB_LABEL });
    await expect(fab).toBeVisible({ timeout: 10_000 });

    await fab.hover();
    await page.waitForTimeout(2_800); // tooltip dwell for viewer

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 8 · Click → chatbot panel slides in
    // ────────────────────────────────────────────────────────────────────────
    await fab.click();

    const chatInput = page.getByPlaceholder(INPUT_PH);
    await expect(chatInput).toBeVisible({ timeout: 8_000 });

    await page.waitForTimeout(1_600); // admire the Framer Motion slide-in

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 9 · Q1 — Top skills
    // ────────────────────────────────────────────────────────────────────────
    await askAndWait(page, QUESTIONS[0], 4_500);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 10 · Q2 — Strongest backend achievement
    // ────────────────────────────────────────────────────────────────────────
    await askAndWait(page, QUESTIONS[1], 4_500);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 11 · Q3 — AI / LLMs in real projects
    // ────────────────────────────────────────────────────────────────────────
    await askAndWait(page, QUESTIONS[2], 4_500);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 12 · Q4 — Why hire for senior backend? (finale — longer dwell)
    // ────────────────────────────────────────────────────────────────────────
    await askAndWait(page, QUESTIONS[3], 6_000);

    // ────────────────────────────────────────────────────────────────────────
    // SCENE 13 · Graceful close + final curtain
    // ────────────────────────────────────────────────────────────────────────
    const closeBtn = page.getByRole('button', { name: CLOSE_LABEL });
    await expect(closeBtn).toBeVisible({ timeout: 5_000 });
    await closeBtn.click();

    await page.waitForTimeout(1_400); // Framer Motion exit animation

    // FAB returns to idle glow — hold on it as the finale
    await expect(fab).toBeVisible({ timeout: 5_000 });
    await page.waitForTimeout(2_500); // curtain
  });
});
