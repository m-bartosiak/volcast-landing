/**
 * Renders card.html to a 1200x630 PNG for use as og:image.
 *
 * Needs Playwright, which this repo does not depend on — the output PNG is
 * committed, so the generator only runs when the card actually changes. Run it
 * from a checkout that has Playwright installed (the FBScraper repo does):
 *
 *   cd ../FBScraper && node ../volcast-landing/scripts/landing/og/render.mjs
 *
 * Failing that, open card.html in a browser at exactly 1200x630 and screenshot.
 */
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

const here = dirname(fileURLToPath(import.meta.url));
const CARD = join(here, 'card.html');
const OUT = join(here, '..', '..', '..', 'public', 'img', 'og-landing.png');

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await page.goto(pathToFileURL(CARD).href, { waitUntil: 'networkidle' });
// Webfonts arrive after networkidle often enough to matter — the headline
// silently falling back to a system sans is the exact failure this prevents.
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

await page.screenshot({ path: OUT, type: 'png' });
await browser.close();

console.log(`Wrote ${OUT}`);
