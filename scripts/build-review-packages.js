#!/usr/bin/env node
/**
 * Buduje paczki do korekty zewnętrznej. Uruchom: node scripts/build-review-packages.js
 *
 * Format wymusza LISTĘ RÓŻNIC, nie przepisanie tekstu. Powód jest praktyczny:
 * drugi model realnie łapie kalki i sztuczną składnię, bo ma inne dane treningowe,
 * ale nie wie, że `stringa` to termin branżowy ani że `sensor.volcast_energy_today`
 * się nie tłumaczy. Wklejenie z powrotem przepisanych kilkudziesięciu tysięcy słów
 * jest nieweryfikowalne i cicho przesuwa liczby, linki i frontmatter — a dokładnie
 * ten dryf wyłapała już kontrola przy korekcie copy landingu (francuskie
 * „Sans onduleur" i niemieckie „deutlich besser" dorobione do źródła).
 *
 * Kolejność paczek to kolejność szkody, nie objętości. Tytuły i opisy trafiają
 * do SERP-a natychmiast, a poprawianie ich po zaindeksowaniu resetuje sygnały
 * zamiast je edytować.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DEST = path.join(ROOT, 'docs', 'review');
const LANGS = ['it', 'fr', 'ro'];

const LANG_NAME = { it: 'włoski', fr: 'francuski', ro: 'rumuński' };
const NATIVE = { it: 'italiano', fr: 'français', ro: 'română' };

const PROMPT = (lang, what) => `Jesteś native speakerem języka ${LANG_NAME[lang]} i redaktorem technicznym w branży fotowoltaicznej.

Poniżej ${what} ze strony produktowej aplikacji do prognozowania produkcji PV.

ZADANIE: wskaż miejsca, które brzmią nienaturalnie dla native speakera — kalki z angielskiego, sztuczną składnię, terminy, których branża w tym języku nie używa, błędy typograficzne.

FORMAT ODPOWIEDZI — wyłącznie tabela, nic poza nią:

| # | obecnie | propozycja | powód |
|---|---------|------------|-------|

ZASADY, ważne:
- NIE przepisuj całych tekstów. Tylko konkretne fragmenty do zmiany.
- NIE zmieniaj liczb, dat, nazw własnych, nazw aktów prawnych ani identyfikatorów technicznych (sensor.volcast_*, HACS, Home Assistant, Energy Dashboard). Jeśli liczba wygląda podejrzanie, napisz to w kolumnie „powód", ale nie proponuj innej.
- NIE skracaj ani nie wydłużaj tytułów i opisów: mają twarde limity (tytuł ≤ 60 znaków, opis 140–155). Jeśli Twoja propozycja zmienia długość, podaj liczbę znaków.
- Jeśli fragment jest poprawny, nie wymieniaj go. Interesują mnie tylko rzeczy do poprawy.
- Rejestr: zwracamy się do czytelnika ${lang === 'fr' ? 'przez „vous"' : 'na „ty"'}, konsekwentnie.

---

`;

function frontmatter(text, key) {
  const m = new RegExp(`^${key}:\\s*(.*)$`, 'm').exec(text.split('---')[1] || '');
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

fs.mkdirSync(DEST, { recursive: true });
const written = [];

// --- Paczka 0: tytuły i opisy, wszystkie języki ------------------------------
// Największa dźwignia na znak: to jedyny tekst, który zobaczy ktoś, kto jeszcze
// nie kliknął.
for (const lang of LANGS) {
  const rows = [];
  for (const kind of ['blog', 'qa']) {
    const dir = path.join(ROOT, 'src', 'content', kind, lang);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
      const text = fs.readFileSync(path.join(dir, f), 'utf8');
      const title = frontmatter(text, 'title');
      const desc = frontmatter(text, 'description');
      if (!title) continue;
      rows.push(`### ${kind}/${f}\n\nTYTUŁ (${title.length} zn.): ${title}\nOPIS (${desc ? desc.length : 0} zn.): ${desc || ''}\n`);
    }
  }
  const file = path.join(DEST, `00-PRIORYTET-${lang}.md`);
  fs.writeFileSync(file,
    PROMPT(lang, `wszystkie tytuły i opisy meta (${rows.length} stron)`) +
    `Te teksty trafiają bezpośrednio do wyników wyszukiwania Google. To jedyne zdania,\n` +
    `które zobaczy ktoś, kto jeszcze nie kliknął.\n\n---\n\n` + rows.join('\n'), 'utf8');
  written.push([file, rows.length + ' stron']);
}

/**
 * Pliki o najwyższym ryzyku językowym: kategoria rynkowa k6 (pisana od zera,
 * nie tłumaczona) plus posty, które wymagały mocnej adaptacji rynkowej zamiast
 * tłumaczenia. To w nich autor najbardziej oddalił się od angielskiego wzorca,
 * więc tam najłatwiej o sformułowanie, które brzmi jak tłumaczenie z niczego.
 */
const isMarketFile = (text, name) =>
  /^category:\s*"?k6/m.test(text) ||
  /tariff|tarif|tarife|autoconsum|autoconsommation|prezzi-negativi|prix-negatifs|preturi-negative|surplus|eccedenze|batteri|baterie|elettrodomestici|electrocasnice|lave-linge|quand-lancer|cand-pornesti/i.test(name);

// --- Paczki treści: pełne pliki, dzielone po ~6000 słów -----------------------
const WORDS_PER_CHUNK = 6000;
for (const lang of LANGS) {
  const files = [];
  const market = [];
  for (const kind of ['blog', 'qa']) {
    const dir = path.join(ROOT, 'src', 'content', kind, lang);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
      const text = fs.readFileSync(path.join(dir, f), 'utf8');
      const entry = { name: `${kind}/${lang}/${f}`, text, words: text.split(/\s+/).length };
      (isMarketFile(text, f) ? market : files).push(entry);
    }
  }

  if (market.length) {
    const w = market.reduce((a, m) => a + m.words, 0);
    const file = path.join(DEST, `01-RYNKOWE-${lang}.md`);
    fs.writeFileSync(file,
      PROMPT(lang, `treść rynkowa i najmocniej adaptowana (${market.length} plików, ~${w} słów)`) +
      `To pliki, w których autor najbardziej oddalił się od angielskiego wzorca: kategoria\n` +
      `rynkowa k6 pisana od zera oraz posty przeliczone na realia lokalne. Warstwa faktów\n` +
      `została już sprawdzona wobec źródeł pierwotnych — interesuje mnie wyłącznie język.\n\n---\n\n` +
      market.map((c) => `### ${c.name}\n\n${c.text}\n`).join('\n---\n\n'), 'utf8');
    written.push([file, `${market.length} plików, ~${w} słów`]);
  }

  let chunk = [], words = 0, n = 1;
  const flush = () => {
    if (!chunk.length) return;
    n++;
    const file = path.join(DEST, `${String(n).padStart(2, '0')}-tresc-${lang}.md`);
    fs.writeFileSync(file,
      PROMPT(lang, `fragmenty treści bloga (${chunk.length} plików, ~${words} słów)`) +
      chunk.map((c) => `### ${c.name}\n\n${c.text}\n`).join('\n---\n\n'), 'utf8');
    written.push([file, `${chunk.length} plików, ~${words} słów`]);
    chunk = []; words = 0;
  };
  for (const f of files) {
    if (words + f.words > WORDS_PER_CHUNK && chunk.length) flush();
    chunk.push(f); words += f.words;
  }
  flush();
}

// --- Indeks ------------------------------------------------------------------
const index = `# Paczki do korekty zewnętrznej

Wygenerowane przez \`node scripts/build-review-packages.js\`. Każdy plik jest samodzielny:
otwórz, zaznacz wszystko, wklej do modelu. Prompt jest w nagłówku.

**Kolejność to kolejność szkody, nie objętości** — można przerwać po dowolnym poziomie
i mieć z tego sensowną wartość.

**Poziom 0 — \`00-PRIORYTET-*\` (3 paczki).** Tytuły i opisy, 55 stron na język. Największa
dźwignia na znak: to jedyne zdania, które zobaczy ktoś, kto jeszcze nie kliknął. Trafiają
do wyników wyszukiwania natychmiast, a poprawianie ich po zaindeksowaniu resetuje sygnały
zamiast je edytować. Jeśli robisz tylko jedną rzecz, zrób tę.

**Poziom 1 — \`01-RYNKOWE-*\` (3 paczki).** Treść, w której autor najbardziej oddalił się od
angielskiego wzorca: kategoria k6 pisana od zera plus posty przeliczone na realia lokalne.
Najwyższe ryzyko językowe po tytułach. Warstwa faktów jest już sprawdzona osobno.

**Poziom 2 — \`02..NN-tresc-*\` (19 paczek).** Reszta korpusu, po ~5–6 tys. słów. Tu ryzyko
jest najniższe, bo to tłumaczenia z angielskiego oryginału, porównywane maszynowo przez
\`npm run check:i18n\`.

Odpowiedzi wracają jako tabela różnic, nie jako przepisany tekst. Nanoszę je selektywnie:
zmiany stylistyczne biorę, zmiany merytoryczne konfrontuję z glosariuszem i plikiem faktów,
bo drugi model nie wie, które terminy są branżowe.

| plik | zawartość |
|---|---|
${written.map(([f, d]) => `| \`${path.basename(f)}\` | ${d} |`).join('\n')}

## Czego NIE oddajemy do korekty

Dziewięć plików Q&A kategorii k6 przeszło już weryfikację faktograficzną wobec źródeł
pierwotnych (\`docs/i18n-research/fact-check/\`). Ich warstwa merytoryczna jest sprawdzona;
do korekty idzie tylko język, tak jak w pozostałych plikach.
`;
fs.writeFileSync(path.join(DEST, 'README.md'), index, 'utf8');

console.log(`Zapisano ${written.length} paczek do docs/review/:`);
for (const [f, d] of written) console.log(`  ${path.basename(f).padEnd(24)} ${d}`);
