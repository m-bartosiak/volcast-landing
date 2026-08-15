/**
 * The gate on automated SEO changes.
 *
 * These run against the BUILT site, not the source. A metadata pipeline can
 * suppress a page from a template, from frontmatter, from astro.config or from
 * a redirect, and a source-level check would have to anticipate each route.
 * The built HTML is the one place where every mechanism has already resolved
 * into the thing Google will actually read.
 *
 * Run `npm run build` first. In CI the workflow does it.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const OUT = '.vercel/output/static';
const CLICKS = 'seo/pages-with-clicks.json';
const EXCEPTIONS = 'seo/noindex-exceptions.json';

/** What this branch changed. Overridable so the check can be run by hand. */
const BASE = process.env.GUARD_BASE || 'origin/main';

const git = (args) => execFileSync('git', args, { encoding: 'utf8' });

function changedFiles() {
  try {
    // Three dots: what this branch did, not what main did meanwhile.
    return git(['diff', '--name-only', `${BASE}...HEAD`]).split('\n').filter(Boolean);
  } catch {
    // No base to compare against (shallow clone, unfetched main). Say so rather
    // than passing quietly — a guard that silently checks nothing is worse than
    // no guard, because it reports green.
    throw new Error(
      `Cannot diff against ${BASE}. In CI, check out with fetch-depth: 0. ` +
      `Locally, set GUARD_BASE to a ref you have.`);
  }
}

/** Built file for a URL path, or null when the page is not in the output. */
function builtFile(urlPath) {
  const clean = urlPath.replace(/^\/+|\/+$/g, '');
  const candidates = clean === ''
    ? [path.join(OUT, 'index.html')]
    : [path.join(OUT, clean, 'index.html'), path.join(OUT, `${clean}.html`)];
  return candidates.find((f) => fs.existsSync(f)) ?? null;
}

/** A page may legitimately disappear if something redirects to its replacement. */
function hasRedirect(urlPath) {
  const cfg = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const bare = urlPath.replace(/\/+$/, '');
  return (cfg.redirects ?? []).some((r) => r.source === bare || r.source === urlPath);
}

const isNoindex = (html) =>
  /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);

/**
 * Encje z powrotem na znaki, zanim cokolwiek mierzymy.
 *
 * Astro escapuje apostrof do `&#39;`, więc surowy `<title>` liczy go jako pięć
 * znaków zamiast jednego. Dopóki tytuły były angielskie, prawie nie miało to
 * znaczenia; przy francuskim i włoskim apostrof stoi w co drugim tytule
 * (`l'autoconsumo`, `d'été`) i 56-znakowy tytuł raportował się jako 61.
 *
 * Google czyta tekst po zdekodowaniu, nie encję — więc liczenie encji mierzyło
 * coś, czego nikt nigdy nie zobaczy.
 */
const decodeEntities = (s) => s
  .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&');

function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return {};
  const out = {};
  for (const key of ['title', 'description', 'draft']) {
    const hit = new RegExp(`^${key}:\\s*(.*)$`, 'm').exec(m[1]);
    if (hit) out[key] = hit[1].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

/** The same file as it stands on the base branch, or null if it is new. */
function atBase(file) {
  try { return git(['show', `${BASE}:${file}`]); } catch { return null; }
}

/** src/content/blog/en/foo.md -> /blog/en/foo/ ; qa -> /blog/en/q/foo/ */
function urlForContent(file) {
  const m = /^src\/content\/(blog|qa)\/([^/]+)\/(.+)\.md$/.exec(file);
  if (!m) return null;
  const [, collection, lang, slug] = m;
  return collection === 'blog' ? `/blog/${lang}/${slug}/` : `/blog/${lang}/q/${slug}/`;
}

test('the build exists', () => {
  assert.ok(fs.existsSync(OUT), `No build at ${OUT}. Run \`npm run build\` first.`);
});

/**
 * The one that matters.
 *
 * Putting noindex on a page that earns clicks is the worst thing this pipeline
 * can do, and the least visible: it reads as a one-line metadata change in a
 * diff, and it surfaces weeks later as a ranking that is simply gone. Deleting
 * such a page is the same damage by another route, so both are checked here.
 */
test('pages with recent clicks stay indexable', () => {
  assert.ok(fs.existsSync(CLICKS),
    `${CLICKS} is missing. It is the input for this check, and without it the ` +
    `check silently passes everything.`);

  const data = JSON.parse(fs.readFileSync(CLICKS, 'utf8'));

  // Deliberate exceptions live in their own file, not by editing the click data.
  // The click data is regenerated weekly from Search Console, so a row deleted
  // to unblock a pull request comes back the next Monday and blocks the one
  // after it. A decision has to outlive the numbers that provoked it.
  const excepted = new Map(
    (JSON.parse(fs.readFileSync(EXCEPTIONS, 'utf8')).exceptions ?? [])
      .map((e) => [e.path, e]));

  const unjustified = [...excepted.values()].filter((e) => !e.reason?.trim());
  assert.deepEqual(unjustified, [],
    `Every entry in ${EXCEPTIONS} needs a reason. Missing on: ` +
    unjustified.map((e) => e.path).join(', '));

  const problems = [];

  for (const page of data.pages) {
    if (excepted.has(page.path)) continue;
    const file = builtFile(page.path);
    if (!file) {
      if (!hasRedirect(page.path)) {
        problems.push(
          `${page.path} — ${page.clicks} clicks in ${data.window.start}..${data.window.end} — ` +
          `is not in the build and nothing in vercel.json redirects it.`);
      }
      continue;
    }
    if (isNoindex(fs.readFileSync(file, 'utf8'))) {
      problems.push(
        `${page.path} — ${page.clicks} clicks in ${data.window.start}..${data.window.end} — ` +
        `would ship with noindex.`);
    }
  }

  assert.deepEqual(problems, [],
    `\n\nThese pages earn traffic and this branch would take them out of the index:\n` +
    problems.map((p) => `  • ${p}`).join('\n') +
    `\n\nIf that is deliberate, it needs a person: add the path to ${EXCEPTIONS} ` +
    `with a reason, in the same commit. Do not edit ${CLICKS} — it is regenerated ` +
    `from Search Console every week and any edit to it is undone by Monday.\n`);
});

/**
 * Length limits apply to what CHANGED, not to the corpus.
 *
 * 152 of 165 pages exceed 60 characters today, because BaseLayout appends
 * " — Volcast Blog" to every title. Enforcing the limit across the corpus would
 * block every pull request from now until someone rewrites all of them;
 * enforcing it on a field this branch actually touched keeps the rule real and
 * the gate usable.
 */
test('titles this branch rewrote fit in 60 characters', () => {
  const problems = [];

  for (const file of changedFiles()) {
    const url = urlForContent(file);
    if (!url || !fs.existsSync(file)) continue;

    const now = frontmatter(fs.readFileSync(file, 'utf8'));
    const before = frontmatter(atBase(file) ?? '');
    if (now.title === before.title) continue;      // untouched — not our business

    // Measured on the rendered tag, which is what Google reads: the title plus
    // whatever the layout appends. Reading it off the build means the check
    // cannot drift from the template.
    const built = builtFile(url);
    if (!built) continue;                          // draft, not published yet
    const tag = decodeEntities(/<title>([^<]*)<\/title>/.exec(fs.readFileSync(built, 'utf8'))?.[1] ?? '');
    if (tag.length > 60) {
      problems.push(`${url} — ${tag.length} chars: ${tag}`);
    }
  }

  assert.deepEqual(problems, [],
    `\n\nRewritten titles over 60 characters, measured on the rendered <title>:\n` +
    problems.map((p) => `  • ${p}`).join('\n') +
    `\n\nThe layout adds " — Volcast Blog" (15 chars), so the frontmatter title ` +
    `has about 45 to work with.\n`);
});

test('descriptions this branch rewrote land between 140 and 155 characters', () => {
  const problems = [];

  for (const file of changedFiles()) {
    if (!urlForContent(file) || !fs.existsSync(file)) continue;

    const now = frontmatter(fs.readFileSync(file, 'utf8'));
    const before = frontmatter(atBase(file) ?? '');
    if (!now.description || now.description === before.description) continue;

    const n = now.description.length;
    // Upper bound is 155, not the 160 Google truncates at, because BaseLayout
    // cuts the description with substring(0, 155) before it ever reaches a
    // page. Anything written between 156 and 160 is silently chopped mid-word,
    // so allowing it would only permit invisible damage.
    if (n < 140 || n > 155) {
      problems.push(`${file} — ${n} chars`);
    }
  }

  assert.deepEqual(problems, [],
    `\n\nRewritten descriptions outside 140–155 characters:\n` +
    problems.map((p) => `  • ${p}`).join('\n') +
    `\n\n155 is the layout's own truncation point, not a style preference.\n`);
});
