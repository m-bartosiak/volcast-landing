#!/usr/bin/env node
/**
 * Walidator tłumaczeń bloga. Uruchom: node scripts/check-translations.js [lang...]
 *
 * Sprawdza to, czego nie widać w review i co nie wywala builda: cichy dryf liczb
 * między wersjami językowymi, urwane parowanie hreflang, kropkę dziesiętną tam,
 * gdzie język używa przecinka, oraz obrazek w cudzym języku.
 *
 * Bez zależności — czytamy frontmatter regexem, tak samo jak robi to seo-guard.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BLOG = path.join(ROOT, 'src', 'content', 'blog');
const QA = path.join(ROOT, 'src', 'content', 'qa');
const SOURCE = 'en';

/** Języki z przecinkiem dziesiętnym. Angielski jako jedyny ma kropkę. */
const COMMA_DECIMAL = new Set(['pl', 'de', 'it', 'fr', 'ro']);

/**
 * Obrazki, które świadomie zostają po angielsku. Lista jest jawna i krótka,
 * bo każdy wpis kosztuje spójność.
 *
 * Został jeden: `ha-energy-dashboard` to zrzut cudzego interfejsu, a nie nasz
 * wykres — zlokalizowanie go wymagałoby przełączenia Home Assistanta na każdy
 * język i ponownego zrzutu.
 *
 * Trzy wykresy z danych są już generowane per język przez
 * `scripts/blog-charts/render.py`.
 */
const FOREIGN_IMAGE_ALLOWLIST = new Set(['ha-energy-dashboard-en.webp']);

/**
 * Dwie wagi, bo dwie różne klasy problemu.
 *
 * `error` to rzecz zepsuta strukturalnie — urwany hreflang, brakujący obrazek,
 * tytuł, który wywali CI. Zatrzymuje.
 *
 * `review` to rozjazd względem angielskiego oryginału, który BYWA zamierzony:
 * post zaadaptowany rynkowo ma inne liczby (produkcja zimowa we Włoszech nie
 * jest produkcją zimową w UK) i inną liczbę nagłówków. Wypisujemy do przejrzenia,
 * ale nie blokujemy — inaczej każda uzasadniona adaptacja wymagałaby wyjątku.
 */
const problems = [];
const reviews = [];
const report = (file, msg) => problems.push(`${file}\n      ${msg}`);
const review = (file, msg) => reviews.push(`${file}\n      ${msg}`);

function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return { _raw: '' };
  const out = { _raw: m[1] };
  for (const key of ['title', 'description', 'lang', 'translationKey', 'category', 'guide', 'draft', 'updated']) {
    const hit = new RegExp(`^${key}:\\s*(.*)$`, 'm').exec(m[1]);
    if (hit) out[key] = hit[1].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

const body = (text) => text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');

/**
 * Liczby istotne merytorycznie, sprowadzone do wspólnej postaci.
 *
 * Separatory trzeba znieść PRZED porównaniem, inaczej narzędzie zgłasza jako
 * rozjazd to, że angielskie `1000` zapisano po włosku jako `1.000` — czyli
 * poprawnie. Godziny i daty wypadają, bo `10:00` dawało fantomowe `00`.
 */
function numbers(text, lang) {
  let s = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\((?:https?:)?\/\/[^)]*\)/g, ' ')
    .replace(/\/img\/[^\s)]*/g, ' ')
    .replace(/\d{4}-\d{2}-\d{2}/g, ' ')
    .replace(/\b\d{1,2}:\d{2}\b/g, ' ');

  if (COMMA_DECIMAL.has(lang)) {
    s = s.replace(/(\d)\.(\d{3})\b/g, '$1$2').replace(/(\d),(\d)/g, '$1.$2');
  } else {
    s = s.replace(/(\d),(\d{3})\b/g, '$1$2');
  }
  return (s.match(/\d+(?:\.\d+)?/g) || []).sort();
}

const images = (text) => (text.match(/\/img\/[^\s)"']+/g) || []).sort();
const entities = (text) => (text.match(/\b(?:sensor|binary_sensor|switch|number)\.[a-z0-9_]+/g) || []).sort();
const headings = (text) => (text.match(/^#{2,3}\s/gm) || []).length;

function listMd(dir, lang) {
  const d = path.join(dir, lang);
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d).filter((f) => f.endsWith('.md'));
}

// Mapa klastrów — potrzebna do reguły parowania. Parsujemy plik TS regexem,
// bo importowanie TypeScriptu z czystego node kosztowałoby zależność.
const clustersSrc = fs.readFileSync(path.join(ROOT, 'src', 'data', 'translations.ts'), 'utf8');
const CLUSTERS = [...clustersSrc.matchAll(/\{\s*(en:[^}]*)\}/g)].map((m) => {
  const row = {};
  for (const pair of m[1].matchAll(/(\w+):\s*'([^']*)'/g)) row[pair[1]] = pair[2];
  return row;
});

function check(kind, lang) {
  const dir = kind === 'blog' ? BLOG : QA;
  const srcFiles = new Map(
    listMd(dir, SOURCE).map((f) => {
      const text = fs.readFileSync(path.join(dir, SOURCE, f), 'utf8');
      return [f.replace(/\.md$/, ''), { fm: frontmatter(text), body: body(text) }];
    })
  );
  const postSlugs = new Set(listMd(BLOG, lang).map((f) => f.replace(/\.md$/, '')));

  for (const file of listMd(dir, lang)) {
    const slug = file.replace(/\.md$/, '');
    const rel = `src/content/${kind}/${lang}/${file}`;
    const text = fs.readFileSync(path.join(dir, lang, file), 'utf8');
    const fm = frontmatter(text);
    const b = body(text);

    if (fm.lang !== lang) report(rel, `frontmatter lang="${fm.lang}" nie zgadza się z katalogiem "${lang}"`);

    // --- parowanie wersji językowych -------------------------------------
    const clusterRow = CLUSTERS.find((c) => c[lang] === slug);
    if (kind === 'qa') {
      if (!fm.translationKey) report(rel, 'Q&A bez translationKey — QAPost nie ma żadnego fallbacku, wpis nie dostanie ani jednego hreflang');
    } else if (fm.translationKey && clusterRow) {
      report(rel, `ma jednocześnie translationKey="${fm.translationKey}" i wiersz w TRANSLATION_CLUSTERS — BlogPost użyje tylko klucza i pominie mapę, gubiąc języki spoza klucza`);
    } else if (!fm.translationKey && !clusterRow) {
      report(rel, 'nie ma ani translationKey, ani wiersza w TRANSLATION_CLUSTERS — wpadnie w dopasowanie po identycznym slugu, które dla przetłumaczonego sluga zawsze zawodzi (zero hreflang)');
    }

    // --- źródło angielskie -------------------------------------------------
    let src = null;
    if (fm.translationKey) {
      for (const [enSlug, data] of srcFiles) {
        if (data.fm.translationKey === fm.translationKey) { src = { slug: enSlug, ...data }; break; }
      }
    } else if (clusterRow?.en) {
      const data = srcFiles.get(clusterRow.en);
      if (data) src = { slug: clusterRow.en, ...data };
    }

    if (src) {
      const a = numbers(src.body, SOURCE), c = numbers(b, lang);
      if (a.join(',') !== c.join(',')) {
        const only = (x, y) => x.filter((v) => !y.includes(v));
        review(rel, `liczby inne niż w ${src.slug}.md — brak: [${only(a, c).slice(0, 8)}] nadmiar: [${only(c, a).slice(0, 8)}]`);
      }
      const ha = headings(src.body), hc = headings(b);
      if (ha !== hc) review(rel, `liczba nagłówków ${hc} vs ${ha} w ${src.slug}.md`);

      // Identyfikatory techniczne to jedyna rzecz, która NIE MA prawa się różnić
      // nawet w poście zaadaptowanym — sensor.volcast_energy_today nazywa się tak
      // samo we wszystkich językach, a przetłumaczony nie zadziała u czytelnika.
      const ea = entities(src.body), ec = entities(b);
      if (ea.join(',') !== ec.join(',')) {
        report(rel, `identyfikatory techniczne rozjechały się względem ${src.slug}.md: [${ec.filter((v) => !ea.includes(v)).slice(0, 5)}]`);
      }
    } else if (kind === 'blog') {
      report(rel, 'nie udało się znaleźć angielskiego źródła — parowanie hreflang będzie puste');
    }

    // --- obrazki ----------------------------------------------------------
    for (const img of images(b)) {
      const onDisk = path.join(ROOT, 'public', img.replace(/^\//, ''));
      if (!fs.existsSync(onDisk)) report(rel, `obrazek nie istnieje: ${img}`);
      const m = /-([a-z]{2})\.(webp|png|jpg)$/.exec(img);
      if (m && m[1] !== lang && !FOREIGN_IMAGE_ALLOWLIST.has(path.basename(img))) {
        report(rel, `obrazek w języku "${m[1]}" na stronie "${lang}": ${img}`);
      }
    }

    // --- typografia i długości --------------------------------------------
    if (COMMA_DECIMAL.has(lang)) {
      const dots = b
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/(?:https?:)?\/\/[^\s)]+/g, ' ')
        .replace(/\/img\/[^\s)]*/g, ' ')
        // Data w formacie europejskim (23.07.2026) — te języki tak je zapisują
        // i kropka jest w nich poprawna. Bez tego walidator zgłaszał datę
        // publikacji ustawy jako błąd typograficzny.
        .replace(/\b\d{1,2}\.\d{1,2}\.\d{4}\b/g, ' ')
        // Jedna do dwóch cyfr po kropce = ułamek. Dokładnie trzy = separator
        // tysięcy, poprawny w tych językach (300.000 to trzysta tysięcy, nie
        // trzysta całych). Bez tego rozróżnienia walidator zgłaszał niemieckie
        // liczby zapisane prawidłowo.
        .match(/\b\d+\.\d{1,2}(?!\d)/g);
      if (dots) report(rel, `kropka dziesiętna w języku używającym przecinka: ${[...new Set(dots)].slice(0, 6).join(', ')}`);
    }

    if (fm.title && fm.title.length > 60) {
      report(rel, `tytuł ${fm.title.length} znaków, limit 60 (seo-guard mierzy wyrenderowany <title> i odrzuci build)`);
    }
    if (fm.description && (fm.description.length < 140 || fm.description.length > 155)) {
      report(rel, `opis ${fm.description.length} znaków, wymagane 140-155 (seo-guard)`);
    }

    // --- Q&A: hub musi być w tym samym języku ------------------------------
    if (kind === 'qa' && fm.guide && !postSlugs.has(fm.guide)) {
      report(rel, `guide: "${fm.guide}" nie istnieje wśród wpisów w języku "${lang}" — link do huba prowadzi donikąd`);
    }
  }
}

/**
 * Domyślny zakres to języki wprowadzone razem z tymi regułami.
 *
 * pl i de powstały wcześniej i naruszają je masowo — 202 trafienia przy
 * pierwszym uruchomieniu, głównie tytuły i opisy pisane pod nieistniejący wtedy
 * limit. Gate, który od pierwszego dnia świeci na czerwono na zastanej treści,
 * przestaje cokolwiek znaczyć, więc obowiązuje ta sama zasada co w seo-guard:
 * pilnujemy tego, co ta gałąź wnosi, nie całego korpusu.
 *
 * Audyt starszych języków: `node scripts/check-translations.js pl de`.
 */
const DEFAULT_LANGS = ['it', 'fr', 'ro'];

const requested = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const langs = (requested.length ? requested : DEFAULT_LANGS)
  .filter((l) => fs.existsSync(path.join(BLOG, l)) || fs.existsSync(path.join(QA, l)));

for (const lang of langs) {
  check('blog', lang);
  check('qa', lang);
}

const counted = langs.reduce((n, l) => n + listMd(BLOG, l).length + listMd(QA, l).length, 0);

if (reviews.length) {
  console.log(`\nDO PRZEJRZENIA — ${reviews.length} rozjazdów względem angielskiego (nie blokują):\n`);
  for (const r of reviews) console.log(`  · ${r}`);
}

if (problems.length) {
  console.error(`\nBŁĄD — ${problems.length} naruszeń w ${counted} plikach (${langs.join(', ') || 'brak języków'}):\n`);
  for (const p of problems) console.error(`  • ${p}`);
  process.exit(1);
}

console.log(`\nOK — ${counted} plików w ${langs.length} językach (${langs.join(', ') || '—'}), zero naruszeń blokujących.`);
