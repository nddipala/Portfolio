import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for nagarjun.dev portfolio demo recordings.
 *
 * Set PORTFOLIO_URL env var to target a local dev server instead of production:
 *   PORTFOLIO_URL=http://localhost:3000 npm run demo:chatbot
 */
export default defineConfig({
  testDir: './tests',

  /* 90s — generous budget for slow AI API responses */
  timeout: 90_000,

  /* One retry to handle transient network hiccups */
  retries: 1,

  /* Single worker so video stays sequential and clean */
  workers: 1,

  /* Global reporter: clean line output during recording */
  reporter: [['line'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],

  use: {
    baseURL: process.env.PORTFOLIO_URL ?? 'https://nagarjun-portfolio-lac-coral.vercel.app',

    /* 1080p viewport for high-quality recording */
    viewport: { width: 1920, height: 1080 },

    /* Record video for every test run */
    video: 'on',
    recordVideo: {
      dir: './demo-output/',
      size: { width: 1920, height: 1080 },
    },

    /* Screenshot only on failure (saves disk space) */
    screenshot: 'only-on-failure',

    /* Match the portfolio's dark theme */
    colorScheme: 'dark',
    locale: 'en-US',
    timezoneId: 'America/New_York',
  },

  projects: [
    {
      name: 'chatbot-demo',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        /* slowMo adds a natural pause after every Playwright action —
           makes hover/click sequences feel deliberate on camera */
        launchOptions: {
          slowMo: 450,
        },
      },
    },
  ],
});
