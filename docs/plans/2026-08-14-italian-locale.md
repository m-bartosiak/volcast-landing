---
id: PLAN-066
created: 2026-08-14
status: draft
repo: volcast-landing
related_design: 2026-08-14-italian-locale-design.md
---

# Włoski jako 13. język volcast.app — plan implementacji

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Dodać locale `it` na landingu (12 → 13 locale) i na blogu Astro (en/pl/de → +it, 31 postów + 24 Q&A), z natywną włoską treścią rynkową w kategorii k6.

**Architecture:** Dwa rozłączne systemy. Landing to statyczny generator (`scripts/landing/build.js` + `translations.json` → commitowane `public/{locale}/index.html`), całkowicie niezależny od `LANGS` bloga. Blog to Astro z `LANGS` w `src/data/i18n.ts` jako źródłem typu `BlogLang`, z którego wywiedzione są wszystkie mapy językowe. Kolejność jest wymuszona: landing najpierw (bo linki blog→landing celują w `/it/`), potem zabezpieczenia przed pustym językiem, potem `LANGS`, potem treść.

**Tech Stack:** Astro 6, `@astrojs/vercel`, `@astrojs/sitemap`, `@astrojs/rss`, Pagefind 1.4, Node 20+, generator landingu bez zależności.

---

## ZMIANA WZGLĘDEM ZATWIERDZONEGO DESIGNU

Design zakładał commit 1 = kod bloga, commit 2 = landing. **Kolejność jest odwrócona.** Powód wyszedł z audytu i został potwierdzony w kodzie:

`getStaticPaths()` w [blog/[lang]/index.astro](../../src/pages/blog/[lang]/index.astro), [q/index.astro](../../src/pages/blog/[lang]/q/index.astro) i [rss.xml.ts](../../src/pages/blog/[lang]/rss.xml.ts) mapuje po `LANGS` **bezwarunkowo**. Dodanie `'it'` do `LANGS` przed treścią tworzy trzy puste, zalinkowane i zasitemapowane URL-e, a listingi en/pl/de zaczynają deklarować `hreflang="it"` na pustkę. Landing nie ma tego problemu, bo nie zna `LANGS`.

Dodatkowo dochodzi **Task 2** (zabezpieczenie tras przed językiem bez treści), którego design nie przewidywał. Wzorzec do skopiowania już istnieje w [tag/[tag].astro](../../src/pages/blog/[lang]/tag/[tag].astro) — reszta tras go po prostu nie ma.

## LANDMINA — przeczytaj przed dotknięciem treści

**Parowanie hreflang ma dwa niezależne mechanizmy i zmieszanie ich urywa alternaty po cichu.**

[BlogPost.astro:30-40](../../src/layouts/BlogPost.astro) robi tak:

```js
let candidates = data.translationKey ? allPosts.filter(p => p.data.translationKey === data.translationKey) : [];
if (candidates.length === 0) candidates = getClusterSlugs(lang, slug);   // ← wykona się TYLKO gdy branch 1 był pusty
```

Branch 1 **short-circuituje** mapę klastrów. Stan faktyczny w repo, zweryfikowany:

| | posty | z `translationKey` | bez |
|---|---|---|---|
| en | 32 | 13 | **19** |
| pl | 32 | 13 | 19 |
| de | 31 | 13 | 18 |

`TRANSLATION_CLUSTERS` ma **dokładnie 19 wierszy** i pokrywa **dokładnie te 19 postów EN bez klucza** — sprawdzone, zero rozbieżności w obie strony. Podział jest czysty: 19 tematów paruje się przez mapę, 13 przez `translationKey`.

Zbiory kluczy **nie są identyczne między językami**: `self-consumption` i `weather-vs-output` są tylko w EN i PL, `shading` i `balkonkraftwerk` tylko w DE, `pme-ems` tylko w PL, a `best-app` jest w EN i DE, ale **nie w PL**.

**Reguła, od której nie ma odstępstw:**

- **18 tematów klastrowych** (19 wierszy minus `timing-appliances`, który jest DROP) → plik IT **NIE MA** `translationKey` we frontmatterze; zamiast tego dopisujemy `it: '<slug>'` do odpowiedniego wiersza `TRANSLATION_CLUSTERS`.
- **13 tematów kluczowanych** → plik IT **MA** `translationKey` identyczny jak EN.
- 18 + 13 = **31 postów.** Zgadza się z zakresem.
- **Q&A: `translationKey` jest OBOWIĄZKOWY.** [QAPost.astro:21-25](../../src/layouts/QAPost.astro) nie ma żadnego fallbacku — Q&A bez klucza dostaje zero alternatów.

Gdyby plik IT dostał `translationKey` dla tematu klastrowego, a ten sam klucz miał tylko jeden inny język, IT wyemitowałby hreflang wyłącznie na ten język, gubiąc pozostałe — przy jednoczesnym wskazywaniu IT przez wszystkie. Asymetria = Google ignoruje cały klaster. Dotyczy to 61% paczki i **nie daje żadnego błędu buildu**.

---

## Task 1: Utwardzenie generatora landingu

Zanim dodamy locale, generator musi krzyczeć zamiast po cichu podstawiać angielski. Dziś [build.js:69](../../scripts/landing/build.js) robi `translations[locale] || translations['en']`, a brak `HREFLANG[locale]` daje `<html lang="undefined">` — jedno i drugie bez błędu.

**Files:**
- Modify: `scripts/landing/build.js`

**Step 1: Dodaj walidację przed pętlą generującą**

W `scripts/landing/build.js`, bezpośrednio przed `for (const locale of LOCALES) {`:

```js
// Walidacja spójności map — bez niej brakujący locale generuje stronę z angielską
// treścią pod obcym <html lang>, a brakujący HREFLANG/NATIVE_NAME wypisuje literalne
// 'undefined' na wszystkich stronach. Jedno i drugie przechodziło build bez śladu.
const missing = [];
for (const locale of LOCALES) {
  if (!translations[locale]) missing.push(`translations.json: brak bloku '${locale}'`);
  if (!HREFLANG[locale]) missing.push(`build.js: brak HREFLANG['${locale}']`);
  if (!NATIVE_NAMES[locale]) missing.push(`build.js: brak NATIVE_NAMES['${locale}']`);
}
if (missing.length) {
  console.error('BŁĄD — niespójne mapy locale:\n  ' + missing.join('\n  '));
  process.exit(1);
}
```

**Step 2: Zamień ostrzeżenie o brakującym kluczu na twardy błąd**

Zamień istniejący blok `console.warn` w podstawianiu `{{t.…}}` na zbieranie braków i wyjście z kodem 1 po pętli:

```js
const missingKeys = [];
// ...w callbacku podstawiania {{t.xxx}}:
if (val === null) {
  missingKeys.push(`${locale}: t.${key}`);
  const fallback = resolve(translations['en'], key);
  return fallback !== null ? fallback : `[${key}]`;
}
// ...po pętli po LOCALES:
if (missingKeys.length) {
  console.error(`BŁĄD — ${missingKeys.length} brakujących kluczy tłumaczeń:\n  ` + missingKeys.join('\n  '));
  process.exit(1);
}
```

Uzasadnienie twardego błędu: kryterium akceptacji „bez ostrzeżeń Missing key" jest jedyną bramą chroniącą przed opublikowaniem angielskiej treści pod `<html lang="it">`, a nikt nie czyta stdout.

**Step 3: Uruchom na obecnym stanie — musi przejść**

```bash
cd C:/Users/yakon/Documents/volcast-landing
node scripts/landing/build.js
```

Oczekiwane: 12 linii `✓`, kod wyjścia 0. Jeśli wywala — któryś z istniejących locale ma dziurę, napraw ją zanim ruszysz dalej.

**Step 4: Sprawdź, czy wygenerowane pliki są zgodne ze źródłem**

```bash
git diff --stat public/
```

Oczekiwane: **pusty diff.** Niepusty oznacza, że ktoś edytował wygenerowany HTML ręcznie i włoski commit by to cicho cofnął. Jeśli diff nie jest pusty — zatrzymaj się i zgłoś to użytkownikowi przed dalszą pracą.

**Step 5: Commit**

```bash
git add scripts/landing/build.js
git commit -m "fix(landing): twardy błąd zamiast cichego fallbacku na angielski"
```

---

## Task 2: Włoski landing

**Files:**
- Modify: `scripts/landing/build.js` (LOCALES, HREFLANG, NATIVE_NAMES — **bez** BLOG_LANG)
- Modify: `scripts/landing/translations.json`
- Modify: `public/index.html`, `public/redirect.html`, `public/sitemap-landing.xml`
- Create: `public/img/it/{forecast,notifications,widgets}.png`
- Generated: `public/it/index.html` + przebudowa pozostałych 12

**Step 1: Dodaj locale do trzech map**

```js
const LOCALES = ['en','cs','de','es','fr','it','nl','pl','pt','pt-br','ro','sk','uk'];
// HREFLANG:     'it': 'it',
// NATIVE_NAMES: 'it': 'Italiano',
```

**`BLOG_LANG` zostaje bez zmian.** Włoski blog jeszcze nie istnieje — `BLOG_LANG['it']='it'` dodajemy dopiero w Task 8, inaczej nawigacja z `/it/` prowadzi na pustą trasę.

**Step 2: Uruchom generator — musi paść**

```bash
node scripts/landing/build.js
```

Oczekiwane: `BŁĄD — niespójne mapy locale: translations.json: brak bloku 'it'`, kod wyjścia 1. To potwierdza, że walidacja z Taska 1 działa.

**Step 3: Napisz włoski blok w `translations.json`**

101 kluczy w namespace'ach `meta, nav, hero, features, howItWorks, screenshots, ha, trust, download, faq, footer`. Referencja płaska: `scripts/landing/translations-en.txt`.

Obowiązuje [glosariusz](../it-glossary.md) i konwencje stylu z Taska 5. Twarde wymogi:

- `meta.title` — **unikalny względem pozostałych 12 locale.** Bing raportował duplikaty tytułów; kopia struktury DE da czwarty niemal identyczny. Propozycja: `Volcast — previsioni di produzione fotovoltaica`.
- `meta.description` — **120–155 znaków.** Poniżej 100 Bing zgłasza jako za krótki, powyżej ~160 Google ucina. Wzorzec z README: propozycja wartości, potem „senza accesso all'inverter", potem różnicowanie danymi/fizyką.
- Separator dziesiętny to **przecinek**. Jednostki ze spacją nierozdzielającą: `6 kWp`, `12,4 kWh`.
- Tytuły w **sentence case**, nie Title Case — Title Case natychmiast zdradza tłumaczenie maszynowe.
- Forma **„tu"**, konsekwentnie, bez przeskoków na „lei" ani „voi".

**Step 4: Uruchom generator — musi przejść**

```bash
node scripts/landing/build.js
```

Oczekiwane: **13 linii `✓`**, w tym `it/index.html`, kod wyjścia 0, zero linii błędu.

**Step 5: Zweryfikuj wygenerowany plik**

```bash
grep -c 'hreflang=' public/it/index.html          # oczekiwane 14 (13 locale + x-default)
grep -c 'undefined' public/it/index.html          # MUSI być 0
grep -n 'html lang="it"\|canonical\|/img/it/' public/it/index.html | head
grep -L 'hreflang="it"' public/*/index.html       # MUSI być puste — wszystkie 13 mają wpis
```

**Step 6: Uzupełnij pięć ręcznych list poza generatorem**

Te miejsca **nie są generowane** i rozjazd między nimi a resztą sprawia, że Google raportuje niewzajemne adnotacje i ignoruje całą grupę:

| Plik | Co dopisać |
|---|---|
| `public/index.html` (~28-40) | `<link rel="alternate" hreflang="it" href="https://volcast.app/it/">` przed `x-default` |
| `public/index.html` (~47-51) | `'it': 'it',` w `LOCALE_MAP` |
| `public/index.html` (~104-116) | `<li><a href="/it/">Italiano</a></li>` (alfabetycznie po Français) |
| `public/redirect.html` (~16-28) | ten sam wpis hreflang |
| `public/redirect.html` (~31-35) | ten sam wpis w `LOCALE_MAP` |
| `public/redirect.html` (~88-102) | ten sam wpis w `<noscript>` |
| `public/sitemap-landing.xml` | `<url><loc>https://volcast.app/it/</loc></url>` |

`LOCALE_MAP` jest krytyczny: bez niego przeglądarka z `navigator.language='it-IT'` ląduje na `/en/` mimo kompletnego `/it/` — czyli główny kanał wejścia dla nowego rynku pozostaje martwy.

**Step 7: Wgraj zrzuty ekranu**

`public/img/it/{forecast,notifications,widgets}.png` — z Play Console (lokalizacja IT) albo re-eksport z `store-assets/screenshots.html` w repo Volcast (ma kompletny blok `it`). Mapowanie: `_01` → forecast, `_04` → notifications, `_03` → widgets.

**Wymiar: 1080×1920 (Play Phone), spójnie z de/cs/pl.** [template.html:1254,1294,1306](../../scripts/landing/template.html) osadza je bez `width`/`height`, więc inny aspekt daje inny CLS na `/it/` niż na pozostałych locale.

```bash
ls public/img/it/    # forecast.png notifications.png widgets.png
node -e "const b=require('fs').readFileSync('public/img/it/forecast.png');console.log(b.readUInt32BE(16)+'x'+b.readUInt32BE(20))"
```

**Step 8: Podgląd lokalny**

```bash
npm run dev    # http://localhost:4321/it/
```

Sprawdź: przełącznik języków ma 13 pozycji z „Italiano" aktywnym, trzy zrzuty się ładują, linki Blog i Q&A prowadzą na `/blog/en/` (celowo — jeszcze).

**Step 9: Commit**

```bash
git add scripts/landing/ public/it/ public/img/it/ public/index.html public/redirect.html public/sitemap-landing.xml public/*/index.html
git commit -m "feat(landing): włoski jako 13. locale [PLAN-066]"
```

Diff obejmie **13 plików `public/*/index.html`** — regeneracja dopisuje wpis hreflang i opcję przełącznika na wszystkich stronach. To zamierzone; przejrzyj, nie odrzucaj.

**Po tym commicie `volcast.app/it/` jest kompletny i mergowalny sam w sobie.**

---

## Task 3: Zabezpieczenie tras przed językiem bez treści

Trzy trasy generują się bezwarunkowo z `LANGS` i zaczną produkować pustki w momencie dodania `'it'`. [tag/[tag].astro:33-35](../../src/pages/blog/[lang]/tag/[tag].astro) i [series/[series].astro:32-34](../../src/pages/blog/[lang]/series/[series].astro) mają już poprawny guard — kopiujemy wzorzec.

**Files:**
- Modify: `src/pages/blog/[lang]/index.astro`
- Modify: `src/pages/blog/[lang]/q/index.astro`
- Modify: `src/pages/blog/[lang]/rss.xml.ts`

**Step 1: `blog/[lang]/index.astro` — guard w `getStaticPaths` i w alternatach**

```js
export async function getStaticPaths() {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  const withContent = LANGS.filter((l) => all.some((p) => p.data.lang === l));
  return withContent.map((lang) => ({ params: { lang } }));
}
```

oraz, niżej, alternaty tylko do języków realnie mających posty:

```js
const allNonDraft = await getCollection('blog', ({ data }) => !data.draft);
const alternates = LANGS
  .filter((l) => l !== lang && allNonDraft.some((p) => p.data.lang === l))
  .map((l) => ({ lang: l, url: `/blog/${l}/` }));
```

**Step 2: `q/index.astro` — identycznie, na kolekcji `qa`**

**Step 3: `rss.xml.ts` — identyczny guard w `getStaticPaths`**

Pusty kanał RSS jest technicznie poprawny, ale nie ma powodu go publikować.

**Step 4: Zweryfikuj, że nic się nie zmieniło dla obecnych trzech języków**

```bash
npm run build
ls .vercel/output/static/blog/          # en pl de — dokładnie tyle co przed zmianą
test -f .vercel/output/static/blog/en/rss.xml && echo OK
```

**Step 5: Commit**

```bash
git add src/pages/blog/
git commit -m "fix(blog): nie generuj listingu, Q&A ani RSS dla języka bez treści"
```

---

## Task 4: Fundament bloga

Rozszerzenie `LANGS` działa jak brama — `astro check` wypisze każdą niekompletną mapę. Spodziewane ~11 błędów TS.

**Files:**
- Modify: `src/data/i18n.ts`, `src/content.config.ts`, `src/data/qa-categories.ts`, `src/data/series.ts`, `src/data/translations.ts`
- Modify: `src/components/CallToAction.astro`, `src/layouts/BaseLayout.astro`, `src/pages/blog/index.astro`

**Step 1: Rozszerz `LANGS` i uruchom bramę**

```js
export const LANGS = ['en', 'pl', 'de', 'it'] as const;
```

```bash
npx astro check
```

Oczekiwane: ~11 błędów, każdy wskazujący `Record<BlogLang, …>` bez klucza `it`. **Zapisz tę listę** — to jest checklista kolejnych kroków.

**Step 2: Uzupełnij `i18n.ts`**

```js
DATE_LOCALE.it  = 'it-IT'
OG_LOCALE.it    = 'it_IT'
READING_WPM.it  = 180
LANG_LABEL.it   = 'IT'
```

oraz pełny blok `UI.it` (21 kluczy). Punkty wyjścia, do dopracowania wg glosariusza:

```
blogTitle: 'Blog'
blogMetaTitle: 'Previsioni fotovoltaiche e produzione solare'   ← MUSI być unikalny per locale
blogName: 'Blog Volcast'
latest: 'Ultimo'
relatedPosts: 'Articoli correlati'
backToBlog: '← Torna al blog'
postsTagged / articlesTagged: 'Articoli con tag'
updated: 'aggiornato'
readingSuffix: 'min di lettura'
searchPlaceholder: 'Cerca articoli...'
getItOn: 'Disponibile su'    downloadOn: 'Scarica su'
prev: '← Precedente'         next: 'Successivo →'
qaFullGuide: 'Guida completa'    qaRelated: 'Domande correlate'
qaIndexTitle: 'Domande e risposte'
qaIndexSubtitle: 'Risposte brevi e pratiche alle domande più comuni sul fotovoltaico'
commonQuestions: 'Domande frequenti'
```

**Step 3: `content.config.ts` — DWA enumy**

`lang: z.enum(['en','pl','de','it'])` w kolekcji `blog` (~linia 15) **i** w kolekcji `qa` (~linia 40). Są niezależne i drugi łatwo przeoczyć.

**Step 4: `qa-categories.ts` — sześć kategorii**

```js
k1: it: 'Rete e inverter'
k2: it: 'Produzione e resa'
k3: it: 'Accumulo domestico'
k4: it: 'Tariffe e bollette'
k5: it: 'Automazione del surplus'
k6: it: 'Incentivi e ritiro dell'energia'
```

**k6 celowo NIE nazywa się „Scambio sul posto".** Ten mechanizm jest zamknięty dla nowych instalacji — nazwanie kategorii martwym mechanizmem traci wiarygodność u czytelnika, który zna rynek. Granica wobec k4 („Tariffe e bollette") musi być ostra, bo [QAPost.astro:29](../../src/layouts/QAPost.astro) dobiera „Domande correlate" po `category`: **k4 = co płacę za prąd, k6 = co dostaję za prąd oddany i jakie są dopłaty.**

**Step 5: `series.ts` — cicha dziura, uwaga**

Typ jest luźny (`Record<string, Record<string, …>>`), więc **brak `it` NIE wywoła błędu.** Efekt: `/blog/it/series/fundamentals/` dostaje `<title>fundamentals — Volcast Blog</title>` i angielski opis, indeksowalne.

To już się dzieje: `de` istnieje **tylko dla `geographic`**, więc trzy niemieckie strony serii są dziś zepsute w produkcji. Uzupełnij `it` dla wszystkich czterech serii **i przy okazji `de` dla trzech brakujących.**

**Step 6: `translations.ts` — pole w interfejsie**

```ts
export interface TranslationCluster { en?: string; pl?: string; de?: string; it?: string; }
```

Same wiersze `it:` dochodzą razem z treścią (Task 6–9), nie teraz — wpis wskazujący na nieistniejący plik jest odfiltrowany przez [BlogPost.astro:41-43](../../src/layouts/BlogPost.astro), ale zaśmieca mapę.

**Step 7: `CallToAction.astro` — drugi słownik obok `i18n.ts`**

```js
it: {
  heading: 'Prova Volcast',
  body: 'Previsioni di produzione fotovoltaica precise, basate sulla fisica. Senza accesso all\'inverter.',
  cta: 'Scarica gratis',
}
```

**Step 8: `BaseLayout.astro:35` — usuń martwy `otherLang`**

`const otherLang = lang === 'en' ? 'pl' : 'en'` to binarny fallback bez żadnych wywołań (wszystkie strony podają `alternates`). Zostawiony skłamie przy 14. języku. Zamień na `LANGS.find(l => l !== lang) ?? 'en'` albo usuń wraz z gałęzią `translationUrl`.

**Step 9: `blog/index.astro` — negocjacja języka (SSR)**

Jedyna trasa SSR w repo. Ternary `pl → de → en` wrzuca włoskie przeglądarki na blog EN. Zamień na pętlę:

```js
import { LANGS } from '../../data/i18n';
const lang = LANGS.find((l) => prefs.some((p) => p.startsWith(l))) ?? 'en';
```

**Step 10: Brama musi być zielona**

```bash
npx astro check     # zero błędów
npm run build
ls .vercel/output/static/blog/    # nadal en pl de — Task 3 blokuje pustego it
```

**Step 11: Commit**

```bash
git add src/
git commit -m "feat(blog): fundament locale it + naprawa serii de [PLAN-066]"
```

---

## Task 5: Glosariusz i walidatory

Zanim powstanie 34 000 słów, powstają narzędzia, które ich pilnują.

**Files:**
- Create: `docs/it-glossary.md`
- Create: `scripts/check-it-terms.js`
- Create: `scripts/check-it-parity.js`
- Modify: `package.json` (skrypt `check:it`)

**Step 1: `docs/it-glossary.md`**

67 par EN→IT z `docs/it-research/raw-terminologia.json`, z notatką o groźnej kalce przy każdej. Pozycje o najwyższym koszcie pomyłki:

| EN | IT | Pułapka |
|---|---|---|
| irradiance | **irradianza** (W/m²) | `irraggiamento` to energia (kWh/m²), nie moc |
| yield (kWh) | **produzione** | `rendimento` = sprawność w %, nigdy kWh |
| yield per kWp | **resa / producibilità specifica** | |
| efficiency | **rendimento** (%) | zawsze kończy się znakiem % |
| string | **stringa** | nie `filo`, `catena`, `corda` |
| inverter | **inverter** | nie `invertitore`, nie `convertitore` |
| self-consumption | **autoconsumo** | jedno słowo, bez łącznika |
| export to grid | **immissione in rete** | nie `esportazione` |
| import | **prelievo dalla rete** | |
| net metering | **scambio sul posto (SSP)** | ⚠ dla nowych instalacji niedostępny — patrz Task 9 |
| feed-in | **ritiro dedicato (RID)** | `tariffa incentivante` to stary Conto Energia |
| bias | **scostamento sistematico** | ⚠ `pregiudizio` = uprzedzenie społeczne |
| curtailment | **limitazione dell'immissione** | ≠ clipping (sprzęt vs polecenie z zewnątrz) |
| shading | **ombreggiamento** | nie `ombreggiatura` (grafika) |
| dynamic tariff | **tariffa a prezzo indicizzato (al PUN)** | ⚠ `tariffa dinamica` ma marginalny wolumen |
| time-of-use | **fasce orarie F1/F2/F3** | instytucja czysto włoska, obowiązkowa w każdym tekście o przesuwaniu zużycia |

Dopisz sekcję stylu: forma **„tu"**; **przecinek dziesiętny, kropka tysięczna** (`1.250,75 kWh`); spacja przed jednostką; miesiące i dni **małą literą** (`agosto`, nie `Agosto`); daty `dd/mm/rrrr`; zegar 24-godzinny z dwukropkiem; **bez em dashu** (włoska typografia go nie używa w roli angielskiej — przecinki, nawiasy albo półpauza ze spacjami); tytuły **sentence case**; waluta po kwocie (`3.500 €`).

**Step 2: `scripts/check-it-terms.js`**

Wejście: `src/content/{blog,qa}/it/*.md` + `scripts/landing/translations.json` (blok `it`).

Sprawdza:
1. **Zakazane kalki** — lista z glosariusza (`pregiudizio`, `invertitore`, `esportazione in rete`, `auto-consumo`, `ombreggiatura`, `irradiamento`, `bifaciale`, `tariffa dinamica`, `previsione solare`, …). Każde trafienie = błąd z plikiem i linią.
2. **Spójność wariantów** — jeśli w korpusie występuje i `irradianza diretta normale`, i `irradianza normale diretta`, zgłoś. To samo dla `sistema di accumulo` vs `batteria di accumulo` w tej samej roli.
3. **Separator dziesiętny** — regex `\d+\.\d` w treści IT (poza blokami kodu, URL-ami i wersjami). To najczęstszy błąd tłumaczenia maszynowego i psuje się także w tabelach i podpisach.
4. **Jednostki** — `KWh`, `Kwh`, `kwh`, `KWp`, `kWpicco` = błąd.
5. **Tytuły w Title Case** — heurystyka na `title:` i `##` z ≥3 słowami zaczynającymi się wielką literą, z pominięciem nazw własnych.

**Step 3: `scripts/check-it-parity.js`**

Dla każdego pliku IT znajduje angielskie źródło (przez `translationKey` albo wiersz `TRANSLATION_CLUSTERS`) i porównuje:

1. **Zbiór liczb** — po normalizacji separatora. Rozjazd = błąd. To łapie cichy dryf typu „~85%" → „~95%".
2. **Ścieżki obrazków** — muszą istnieć na dysku. **Dodatkowo: każde `/img/blog/*-{en,pl,de}.webp` w pliku IT jest błędem**, chyba że jest na jawnej allowliście (`ha-energy-dashboard-en.webp` — świadomie odłożone). Bez tej reguły walidator przepuściłby angielski wykres jako „identyczną ścieżkę".
3. **Identyfikatory techniczne** — `sensor.volcast_*`, `entity_id`, nazwy integracji: identyczne.
4. **Liczba nagłówków** `##` i `###`.
5. **Reguła parowania z landminy:**
   - plik IT z `translationKey` → temat MUSI być w zbiorze 13 kluczowanych, a klucz identyczny jak EN;
   - plik IT bez `translationKey` → MUSI istnieć wiersz `TRANSLATION_CLUSTERS` z `it:` równym slugowi pliku;
   - **oba naraz albo żadne = błąd.**
6. **Q&A: `translationKey` obowiązkowy**, a `guide:` musi wskazywać **włoski** slug istniejącego postu IT.
7. **`updated:` we frontmatterze** jest wymagany dla każdego pliku zawierającego twierdzenie regulacyjne (lista `usedIn` z `docs/it-research/`). Bez daty twierdzenie z sierpnia 2026 czyta się jako ponadczasowe i za rok kłamie po cichu.

**Step 4: Podłącz do `package.json`**

```json
"check:it": "node scripts/check-it-terms.js && node scripts/check-it-parity.js"
```

**Step 5: Uruchom na pustym korpusie**

```bash
npm run check:it
```

Oczekiwane: przechodzi (zero plików IT = zero naruszeń). To sanity check samego skryptu.

**Step 6: Commit**

```bash
git add docs/it-glossary.md scripts/check-it-*.js package.json
git commit -m "feat(it): glosariusz + walidatory terminologii i parytetu"
```

---

## Task 6–8: Treść bloga, klastrami

Pełna mapa 31 postów ze slugami i tytułami: [`docs/it-research/raw-mapa-tresci.json`](../it-research/raw-mapa-tresci.json).

Każdy klaster to osobny commit. Po każdym: `npx astro check && npm run check:it && npm run build`.

**Konwencja slugów** (z researchu, obowiązująca):
- `fotovoltaico`, nie `solare`, jako rdzeń; `pannelli`/`moduli` w postach o fizyce panelu
- 3–6 słów, docelowo ≤ 50 znaków; Q&A dopuszczalnie do 7–8
- **fold do ASCII, bez apostrofów** — `perche-`, nie `perché-`; elizje rozwiązujemy przeformułowaniem, nie myślnikiem (`viaggio-della-luce-dallo-spazio-al-pannello`, nie `il-viaggio-dell-irraggiamento`)
- bez marki w slugu, jedyny wyjątek `volcast-vs-forecast-solar-vs-solcast` (nazwy własne SĄ zapytaniem)

### Task 6: Klaster prognozy (6 postów, `translationKey`)

`forecast-hub`, `ha-comparison`, `brand-comparison`, `best-app`, `weather-vs-output` + `physics-vs-ml` (klastrowy).

Uwagi rynkowe:
- **`weather-vs-output` ZOSTAJE**, mimo że DE go wyciął — `meteo` to jeden z najsilniejszych head-terms włoskiego wyszukiwania
- **`best-app`**: dołóż marki popularne we Włoszech — FIMER/Aurora, Zucchetti/Sofar, Huawei, SolarEdge; wyjaśnij różnicę między aplikacją *monitorującą* (SEMS, FusionSolar, SolarGo) a *prognostyczną*, bo tamtędy idzie realny ruch
- **`ha-comparison`**: tytuł po włosku, ale angielskie nazwy integracji zostają w H2 — to one łapią ruch

### Task 7: Klaster autokonsumpcji (6 postów)

`self-consumption`, `appliances`, `ev-charging`, `heat-pump`, `winter`, `battery`.

- **`self-consumption` ZOSTAJE osobnym postem** (DE go wtopił w `appliances`). Po zamknięciu Scambio sul Posto autoconsumo jest centralnym pojęciem rynku włoskiego — najwyższy potencjał SEO w całym klastrze.
- **`appliances`**: `fasce F1/F2/F3` to najważniejsza różnica wobec EN. Tekst musi rozdzielić trzy scenariusze, bo duża część ruchu to osoby **bez** PV szukające F2/F3: z PV → godziny centralne 10–16; z akumulatorem → wieczór/noc; bez PV → F3.
- **`ev-charging`**: kwota w funtach → euro; dołóż realia `potenza disponibile` 3 kW.
- **`heat-pump`**: Centro/Sud ma krótki sezon grzewczy — dołóż wątek `climatizzatore`/`raffrescamento`, którego EN nie ma.
- **`winter`**: liczby EN są dla szerokości UK i zaniżają Włochy. Rozbij na Nord (`nebbia` Pianury Padańskiej) vs Centro/Sud; śnieg ogranicz do Alp i Apeninów.
- **`battery`**: logika oparta na tariff spread → spread F3/F1 albo oferta indeksowana PUN.

### Task 8: Klastry sezon/rynek i geografia (19 postów) + `BLOG_LANG`

Fizyka (`how-solar-panels-convert-sunlight`, `direct-vs-diffuse`, `tilt-and-azimuth`, `irradiance-journey`, `transposition-models`, `nowcasting`, `why-cloud-cover`, `where-weather-forecasts-come-from`, `why-no-training-data`, `three-numbers`, `why-panels-produce-more-in-spring`, `why-solar-panels-produce-less-in-heat`) + rynek (`dynamic-tariff`, `negative-prices`, `summer-surplus`) + geografia (`same-system-different-cities`, `why-regional-weather-models`, `coastal-vs-inland`, `saharan-dust`).

Najwyższy priorytet dla rynku IT:
- **`saharan-dust`** — w EN to temat „Południowa Europa", dla Włoch zjawisko lokalne i regularne. Przeramuj na Italia (Sycylia, Sud, Centro), dołóż osadzanie pyłu i `pulizia` — czego wersja EN nie ma.
- **`same-system-different-cities`** — to nie tłumaczenie, tylko **przepisanie**. Post jest zbudowany wokół Warszawy, Madrytu, Berlina i Amsterdamu (7/7/4/4 wystąpienia). Przebuduj na Milano / Roma / Palermo, kontrast północny Bolzano albo Berlino, `producibilità specifica` ~1.150 (Nord) do ~1.450 (Sud) kWh/kWp.
- **`where-weather-forecasts-come-from`** i **`why-regional-weather-models`** — UKV i Met Office są czysto brytyjskie. Podstaw COSMO-IT / ICON-2I / MOLOCH / BOLAM (Aeronautica Militare, ARPAE); ICON, AROME, IFS/ECMWF, GFS zostają.
- **`tilt-and-azimuth`** — 30–35° (Nord), 28–30° (Sud). Wyjaśnij **dwie konkurencyjne konwencje azymutu** (0°=Sud instalatorska vs 180°=Sud PVGIS) — to realny problem użytkownika konfigurującego aplikację i nikt tego dobrze nie pokrywa.
- **`why-solar-panels-produce-less-in-heat`** — przykłady na 35–40 °C typowe dla Centro/Sud.

**Na koniec tego taska:** `BLOG_LANG['it'] = 'it'` w `build.js`, przebudowa landingu, commit. Od tego momentu `/it/` linkuje na `/blog/it/`. Pominięcie tego kroku oznacza, że włoscy użytkownicy **nigdy nie trafią na włoski blog** i nic tego nie zgłosi.

**Opcjonalnie:** port postu DE `verschattung-pv-ertrag` (`shading`) jako `ombreggiamento-e-resa-fotovoltaica`. Nie istnieje w EN, jest w pełni generyczny i dla Włoch trafia idealnie (zabudowa historyczna, dachy w dolinach, Apeniny).

---

## Task 9: Q&A — 21 tłumaczonych + 3 natywne

Pełna mapa: [`docs/it-research/raw-mapa-tresci.json`](../it-research/raw-mapa-tresci.json), sekcja `qa`.

**Files:** `src/content/qa/it/*.md` (24 pliki)

**Step 1: 21 pozycji k1–k5**

`translationKey` **obowiązkowy** (QAPost nie ma fallbacku). `guide:` wskazuje **włoski** slug huba, np. `previsione-produzione-fotovoltaica`. `category` bez zmian względem EN.

Adaptacje rynkowe oznaczone `action: adapt` w mapie — głównie przeliczenie taryf na `fasce` i wartości nadwyżki na RID zamiast export rate.

**Step 2: 3 natywne pozycje k6**

Zastępują wyciętą trójkę brytyjską (`which-export-tariff`, `is-octopus-agile`, `do-i-need-a-battery-or-are-panels-enough`). Nowe klucze z prefiksem `qa-it-`:

| Slug | Pytanie | Klucz |
|---|---|---|
| `scambio-sul-posto-o-ritiro-dedicato` | Scambio sul posto o Ritiro Dedicato: cosa cambia? | `qa-it-ssp-vs-rid` |
| `quanto-vale-1-kwh-immesso-in-rete` | Quanto vale davvero 1 kWh immesso in rete? | `qa-it-rid-value` |
| `conviene-entrare-in-una-comunita-energetica` | Conviene entrare in una CER? | `qa-it-cer` |

**Step 3: BRAMA FAKTOGRAFICZNA — czytaj przed napisaniem choćby zdania**

Twierdzenia o włoskim prawie pochodzą z `docs/it-research/`, gdzie każde ma źródło, datę i werdykt sceptyka. **Weryfikacji poddano 8 z 46 twierdzeń** — reszta jest oznaczona jako niezweryfikowana i nie wolno jej publikować bez sprawdzenia.

**Bezpieczne** (potwierdzone ze źródeł pierwotnych GSE/ARERA):
- Scambio sul Posto zamknięty dla nowych instalacji; ostatni dostęp dla instalacji uruchomionych do 29.05.2025, wniosek do GSE do 26.09.2025 (art. 9 ust. 2 D.Lgs. 199/2021, DM MASE 30.12.2024, delibera ARERA 78/2025/R/efr, potw. 213/2025/R/efr)
- Istniejące konwencje SSP trwają do naturalnego wygaśnięcia, bez odnowienia po 15 latach
- RID jako ścieżka wynagradzania energii wprowadzonej — **z zastrzeżeniem**, że nie jest „nowym następcą", tylko istniejącym od 2008 mechanizmem (art. 13 D.Lgs. 387/2003)
- PMG na 2026 zaktualizowane komunikatem ARERA z 29.01.2026, waloryzacja ISTAT +1,4%

**Skorygowane przez sceptyków — użyj wersji poprawionej, nie oryginalnej:**
- ~~Zakaz przedłużania konwencji SSP po 15 latach od 1.01.2026~~ → **obowiązuje od 2024** (art. 4-ter ust. 4 DL 181/2023, ustawa 11/2024)
- ~~Przejście SSP → RID wymaga osobnego wniosku~~ → **jest co do zasady automatyczne** (delibera ARERA 457/2024/R/efr; GSE aktywuje RID przy wygaśnięciu konwencji). To odwrotność pierwotnego twierdzenia i sama w sobie porada, która wprowadzałaby w błąd.

**ZABLOKOWANE — nie publikuj w obecnej formie:**
- PMG ~4,7 c€/kWh (`rid-04`) — źródła wtórne się rozjeżdżają, wymagana wartość z załącznika ARERA
- cena strefowa ~12,8 c€/kWh (`rid-06`) — **wyłącznie źródła wtórne, a ta liczba podpiera ekonomikę w sześciu postach.** Jedna błędna liczba kompromituje sześć tekstów naraz
- CER: 8–10 €/MWh za uniknięte straty (`cer-05`) — źródło: blog dostawcy
- CER: termin umowy z GSE do 30.06.2026 (`cer-08`) — krytyczny czasowo i niezweryfikowany
- **TIDE (`tide-01…05`) — wytnij z treści konsumenckiej w całości.** Sam research stwierdza, że nie nakłada dziś żadnego obowiązku ani nie zmienia rachunku prosumenta. Zero wartości SEO, niezerowe ryzyko pomylenia z reformą taryf

**Uzupełnienia z drugiego przebiegu** (`detrazione`, `fotovoltaico da balcone`, dokładne godziny `fasce F1/F2/F3`, koniec `maggior tutela`, `contatore 2G`) — wejdą do `docs/it-research/` z flagą publikowalności. **Godzin `fasce` nie wolno napisać z pamięci**: trafiają do porady operacyjnej „kiedy włączyć pralkę", więc błędna godzina to błędna porada.

Zasada nadrzędna: **lepiej napisać tekst bez liczby niż z błędną.** Gdzie brak źródła pierwotnego — odeślij do GSE/ARERA zamiast podawać wartość.

**Step 4: Weryfikacja i commit**

```bash
npm run check:it && npm run build
git add src/content/qa/it/
git commit -m "feat(blog): 24 Q&A po włosku, w tym 3 natywne rynkowe [PLAN-066]"
```

---

## Task 10: Wykresy

**Files:**
- Create: `scripts/blog-charts/render.py`, `scripts/blog-charts/data.json`, `scripts/blog-charts/README.md`
- Create: `public/img/blog/{forecast-vs-actual-14d,winter-production,hourly-surplus}-it.webp`

**Step 1: Odtwórz generator i zapisz dane wejściowe**

Commit `461b48e` wrzucił dziewięć WebP-ów bez skryptu. Dane są odtwarzalne z samych wykresów i z opisu commita: listopad 79 / grudzień 32 / luty 100 kWh; błąd 16% → 9,5%; próg gospodarstwa 1,2 kW; krzywa godzinowa dnia bezchmurnego dla 5,2 kWp.

**Dane wejściowe idą do `data.json` w repo**, nie tylko do komentarza w commicie — inaczej generator jest w repo, a jego wejście dalej w `git log`.

**Step 2: Generator przyjmuje LOCALE, nie słownik napisów**

To nie jest kosmetyka. Oś z `12.5 kWh` na włoskiej stronie jest **błędem merytorycznym** — włoski separator dziesiętny to przecinek. Locale musi obejmować:

```python
import locale, matplotlib
locale.setlocale(locale.LC_ALL, 'it_IT.UTF-8')
matplotlib.rcParams['axes.formatter.use_locale'] = True
```

plus nazwy miesięcy **małą literą** (`gennaio`, nie `Gennaio`) i format dat `dd/mm`.

**Step 3: Wygeneruj IT, zregeneruj en/pl/de i porównaj**

Regeneracja istniejących trzech języków jest testem wierności generatora — jeśli wychodzą pikselowo inne niż w repo, generator nie odtwarza oryginału i trzeba go poprawić, zanim uwierzymy wersji włoskiej.

**Step 4: `ha-energy-dashboard`**

Odłożone — post IT używa `-en`. Wpisz tę ścieżkę na **allowlistę** w `check-it-parity.js`, bo domyślna reguła traktuje `-en` w pliku IT jako błąd. **Alt text musi być włoski** niezależnie od języka obrazka.

**Step 5: Commit**

```bash
git add scripts/blog-charts/ public/img/blog/*-it.webp
git commit -m "feat(blog): wykresy po włosku + generator do repo [PLAN-066]"
```

---

## Task 11: Paczka do korekty zewnętrznej

**Files:** `docs/it-review/00-PRIORYTET.md` + `01..N.md`

**Step 1: `00-PRIORYTET.md`**

Landing (860 słów) + **wszystkie 55 tytułów i opisów SEO**. To ~4 000 słów niosących większość wartości handlowej — trafiają do SERP-a i do sitemapy natychmiast, a poprawianie ich po zaindeksowaniu resetuje sygnały zamiast je edytować.

**Ten przebieg musi się zamknąć PRZED commitem landingu (Task 2), nie po Tasku 10.**

**Step 2: Reszta korpusu, ~12 plików po ~3 000 słów**

**Step 3: Prompt w nagłówku każdego pliku**

Wymusza format `plik → linia → obecnie → propozycja → powód` i **zakazuje przepisywania całości**. Uzasadnienie: drugi model łapie kalki, bo ma inne dane treningowe, ale nie wie, że `stringa` to termin branżowy ani że `sensor.volcast_energy_today` się nie tłumaczy. Wklejenie z powrotem przepisanych 34 000 słów jest nieweryfikowalne i cicho przesuwa liczby, linki i frontmatter.

**Step 4: Osobny przebieg na separatory dziesiętne**

Nie jako punkt na liście do przeczytania, tylko `node scripts/check-it-terms.js --decimals`. Psuje się w tabelach, podpisach i **na wykresach**, które są binarne i wymagają regeneracji, a nie edycji tekstu.

---

## Task 12: Weryfikacja końcowa

**Step 1: Bramy automatyczne**

```bash
node scripts/landing/build.js     # 13× ✓, exit 0
npx astro check                   # zero błędów
npm run check:it                  # zero naruszeń
npm run build                     # astro check + build + pagefind
```

**Step 2: Trasy i sitemapa**

```bash
ls .vercel/output/static/blog/it/ .vercel/output/static/blog/it/q/
grep -c '<item>' .vercel/output/static/blog/it/rss.xml       # 31
grep -n 'volcast.app/it/' public/sitemap-landing.xml
grep -c '/blog/it/' .vercel/output/static/sitemap-0.xml
```

**Step 3: Pagefind — indeks włoski**

```bash
grep -o '"it"' .vercel/output/static/_pagefind/pagefind-entry.json
```

Pagefind buduje **osobny indeks per `<html lang>`**. Potwierdź, że włoski fragment powstał, inaczej wyszukiwarka na `/blog/it/` nie zwróci nic. Stemmer `it` jest w 1.4.0 wbudowany, konfiguracji nie trzeba.

**Step 4: ICU — nazwy miesięcy**

```bash
node -e "console.log(new Date('2026-08-14').toLocaleDateString('it-IT',{year:'numeric',month:'long',day:'numeric'}))"
```

Oczekiwane `14 agosto 2026`. Jeśli wyjdzie `August` — runtime ma small-ICU i włoskie daty zrenderują się po angielsku, cicho.

**Step 5: Recyproczność hreflang — realnym crawlem, nie przeglądem kodu**

Weź 5 losowych stron IT i ich rodzeństwo EN. Porównaj zbiory `<link rel="alternate">` **w obie strony**. To jedyny test, który wykrywa landminę z parowania kluczy; przegląd kodu jej nie wykryje.

**Step 6: Przegląd wizualny**

`/it/`, `/blog/it/`, `/blog/it/q/`, trzy losowe posty, trzy Q&A, `/blog/it/series/fundamentals/` (tytuł po włosku, nie surowy slug).

---

## Zanim to trafi na produkcję

**Zdefiniuj metrykę sukcesu i baseline — przed publikacją, nie po.**

Teza całego przedsięwzięcia („2% konwersji premium wśród włoskich użytkowników wobec ~13% na en/pl") jest po wdrożeniu **niemierzalna w obecnym stanie**: Umami ma jeden `website-id` dla landingu i bloga, event `app_store_click` niesie `store` i `location`, ale **nie język**. Nie ma grupy kontrolnej ani baseline'u sprzed publikacji.

Przy 300 włoskich użytkownikach wykrywalna zmiana konwersji to kilka punktów procentowych — czyli „brak zmiany" będzie znaczyło „nie mieliśmy mocy, żeby to zobaczyć", a nie „nic się nie stało". Zapisz to teraz, inaczej za trzy miesiące powstanie kolejna analiza odwracająca poprzednią.

Minimum: zrzut liczby włoskich użytkowników i konwersji premium na dzień publikacji, plus ruch organiczny `/it/` i `/blog/it/` w Search Console jako metryka wiodąca — bo to ona reaguje pierwsza i ma wystarczającą liczebność.

**Do rozstrzygnięcia przed publikacją:** kanibalizacja `/it/` wobec `/blog/it/previsione-produzione-fotovoltaica/`. Obie strony celują w tę samą frazę head i obie startują od zera autorytetu — będą się wzajemnie tłumić. Zdecyduj, która bierze `previsione produzione fotovoltaica`, a która wariant długiego ogona.

**Znane, świadomie pominięte:**
- `/privacy` i `/terms` pozostają wyłącznie po angielsku, linkowane ze stopki włoskiego landingu — przy 300 użytkownikach w UE warto to odnotować jako dług
- `og:image` to jedna angielska karta dla wszystkich 13 locale; `og:image:alt` w `template.html:21` jest zahardkodowany **po polsku** dla wszystkich locale (istniejący bug, IT go dziedziczy)
- `Header.astro` i `Footer.astro` mają `Home`/`Blog`/`Q&A` po angielsku we wszystkich językach
- `.github/workflows/publish-blog.yml` obsługuje wyłącznie `src/content/blog/` — **24 Q&A nie da się rozłożyć w czasie tym cronem**
- `.github/workflows/indexnow.yml` ma `paths:` ograniczone do `src/content/**`, więc **landing `/it/` nigdy nie zostanie zapingowany** do Bing/Yandex; dodaj `public/it/**` albo zgłoś ręcznie
- 55 nowych URL-i jednego dnia na domenie publikującej ~1 post/tydzień — rozważ drip przez `schedule.json` dla postów
