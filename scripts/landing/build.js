#!/usr/bin/env node
/**
 * build.js — generuje statyczne strony HTML z szablonu + tłumaczeń.
 * Zero zależności. Uruchom: node scripts/landing/build.js
 *
 * Wejścia (template.html, translations.json) leżą OBOK tego pliku, poza public/.
 * Trzymanie ich w public/ oznaczało, że Vercel serwował je pod
 * volcast.app/template.html i /translations.json — szablon z niepodstawionymi
 * {{...}} był indeksowalny, a Bing zgłaszał marnowanie budżetu crawlowania.
 * Wyjście nadal ląduje w public/{locale}/index.html.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', '..', 'public');

const LOCALES = ['en','cs','de','es','fr','nl','pl','pt','pt-br','ro','sk','uk'];
const BASE_URL = 'https://volcast.app';

// BCP 47 hreflang mapping
const HREFLANG = {
  'en': 'en', 'pl': 'pl', 'de': 'de', 'nl': 'nl',
  'es': 'es', 'fr': 'fr', 'uk': 'uk', 'pt': 'pt',
  'pt-br': 'pt-BR', 'ro': 'ro', 'cs': 'cs', 'sk': 'sk'
};

// Native language names (for language switcher)
const NATIVE_NAMES = {
  'en': 'English', 'pl': 'Polski', 'de': 'Deutsch', 'nl': 'Nederlands',
  'es': 'Español', 'fr': 'Français', 'uk': 'Українська', 'pt': 'Português',
  'pt-br': 'Português (BR)', 'ro': 'Română', 'cs': 'Čeština', 'sk': 'Slovenčina'
};

// Blog istnieje tylko w en/pl/de — pozostałe locale kierujemy na blog EN.
const BLOG_LANG = { 'en': 'en', 'pl': 'pl', 'de': 'de' };

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const translations = JSON.parse(fs.readFileSync(path.join(__dirname, 'translations.json'), 'utf8'));

/** Resolve dot-notation key from nested object */
function resolve(obj, key) {
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

/** Generate hreflang <link> tags */
function hreflangTags() {
  const tags = LOCALES.map(loc =>
    `  <link rel="alternate" hreflang="${HREFLANG[loc]}" href="${BASE_URL}/${loc}/">`
  );
  tags.push(`  <link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/">`);
  return tags.join('\n');
}

/** Generate language switcher options HTML */
function langSwitcherOptions(currentLocale) {
  return LOCALES.map(loc => {
    const active = loc === currentLocale ? ' active' : '';
    const ariaCurrent = loc === currentLocale ? ' aria-current="page"' : '';
    return `              <a href="/${loc}/" class="lang-option${active}"${ariaCurrent} data-lang="${loc}">${NATIVE_NAMES[loc]}</a>`;
  }).join('\n');
}

const hreflang = hreflangTags();

// Walidacja map przed generowaniem. Bez niej każda z tych trzech dziur przechodzi
// bez śladu: brak bloku w translations.json daje stronę z angielską treścią pod
// obcym <html lang> i własnym canonicalem (podręcznikowy duplikat treści), a brak
// wpisu w HREFLANG albo NATIVE_NAMES wypisuje literalne "undefined" — to drugie
// na WSZYSTKICH stronach naraz, bo przełącznik języka jest wspólny.
const missingMaps = [];
for (const locale of LOCALES) {
  if (!translations[locale]) missingMaps.push(`translations.json — brak bloku '${locale}'`);
  if (!HREFLANG[locale]) missingMaps.push(`build.js — brak HREFLANG['${locale}']`);
  if (!NATIVE_NAMES[locale]) missingMaps.push(`build.js — brak NATIVE_NAMES['${locale}']`);
}
if (missingMaps.length) {
  console.error('BŁĄD — niespójne mapy locale:\n  ' + missingMaps.join('\n  '));
  process.exit(1);
}

// Zbierane przez całą pętlę, zgłaszane raz na końcu. Ostrzeżenie na stdout nie
// zatrzymywało niczego, a jedynym skutkiem brakującego klucza jest angielskie
// zdanie na stronie w innym języku — dokładnie to, czego nikt nie zauważy.
const missingKeys = [];

for (const locale of LOCALES) {
  const t = translations[locale];

  let html = template;

  // Inject hreflang tags
  html = html.replace('{{HREFLANG}}', hreflang);

  // Replace global placeholders
  html = html.replace(/\{\{LOCALE\}\}/g, locale);
  html = html.replace(/\{\{LANG\}\}/g, HREFLANG[locale]);
  html = html.replace(/\{\{BASE_URL\}\}/g, BASE_URL);
  html = html.replace(/\{\{NATIVE_NAME\}\}/g, NATIVE_NAMES[locale]);
  html = html.replace(/\{\{BLOG_LANG\}\}/g, BLOG_LANG[locale] || 'en');

  // Inject language switcher options
  html = html.replace('{{LANG_SWITCHER_OPTIONS}}', langSwitcherOptions(locale));

  // Replace {{tj.xxx.yyy}} — JS-safe (escapes single quotes for use in JS strings)
  html = html.replace(/\{\{tj\.([a-zA-Z0-9_.]+)\}\}/g, (_match, key) => {
    const val = resolve(t, key) ?? resolve(translations['en'], key) ?? `[${key}]`;
    return String(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  });

  // Replace all {{t.xxx.yyy}} with translation values (HTML context)
  html = html.replace(/\{\{t\.([a-zA-Z0-9_.]+)\}\}/g, (_match, key) => {
    const val = resolve(t, key);
    if (val === null) {
      missingKeys.push(`${locale}: t.${key}`);
      // Fallback to EN
      const fallback = resolve(translations['en'], key);
      return fallback !== null ? fallback : `[${key}]`;
    }
    return val;
  });

  // Write to public/{locale}/index.html
  const dir = path.join(PUBLIC_DIR, locale);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`  ✓ ${locale}/index.html`);
}

if (missingKeys.length) {
  console.error(`\nBŁĄD — ${missingKeys.length} brakujących kluczy tłumaczeń:\n  ` + missingKeys.join('\n  '));
  process.exit(1);
}

console.log(`\nDone — ${LOCALES.length} locale pages generated.`);
