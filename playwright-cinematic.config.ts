import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config — cinematic chatbot showcase
 *
 * Separate from playwright.config.ts so the two demo scripts
 * don't share test-results/ and accidentally grab each other's video.
 *
 * Usage:
 *   npm run demo:cinematic            # headless
 *   npm run demo:cinematic:headed     # windowed
 *
 * Target a local dev server:
 *   PORTFOLIO_URL=http://localhost:3000 npm run demo:cinematic
 */
export default defineConfig({
  testDir: './playwright-demo',

  /*
   * 4 AI responses × up to 45s each + cinematic pauses ≈ 6–8 min total.
   * Set a generous budget.
   */
  timeout: 480_000,

  /* Single retry for transient network failures */
  retries: 1,

  /* One worker — video recording must stay sequential */
  workers: 1,

  /* Dedicated results folder (avoids collision with playwright.config.ts) */
  outputDir: './playwright-cinematic-results',

  reporter: [
    ['line'],
    ['html', { open: 'never', outputFolder: 'playwright-cinematic-report' }],
  ],

  use: {
    baseURL: process.env.PORTFOLIO_URL ?? 'https://nagarjun-portfolio-lac-coral.vercel.app',

    /* 1080p viewport — matches the recorded video size */
    viewport: { width: 1920, height: 1080 },

    /* Record every run */
    video: 'on',
    recordVideo: {
      dir: './playwright-cinematic-results/',
      size: { width: 1920, height: 1080 },
    },

    screenshot: 'only-on-failure',
    colorScheme: 'dark',
    locale: 'en-US',
    timezoneId: 'America/New_York',
  },

  projects: [
    {
      name: 'cinematic',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        /*
         * NO slowMo here — all pacing is controlled explicitly via
         * waitForTimeout() inside the spec so cinematic zoom animations
         * run at their own internal RAF cadence without interference.
         */
        launchOptions: {
          slowMo: 0,
        },
      },
    },
  ],
});
