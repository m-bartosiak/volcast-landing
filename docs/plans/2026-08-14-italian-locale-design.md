---
id: PLAN-066
created: 2026-08-14
status: draft
repo: volcast-landing
note: ID pochodzi ze wspólnego rejestru w repo Volcast (docs/plans/), żeby był unikalny między repozytoriami.
---

# Włoski jako 13. język volcast.app — design

## Kontekst

Włosi to czwarty rynek Volcasta: **300 użytkowników, 11,6% bazy** — więcej niż francuski,
niderlandzki i rumuński razem. Konwersja premium wynosi tam 2% wobec ~13% na en/pl, a
najprostszym wyjaśnieniem tej różnicy jest brak jakiejkolwiek treści po włosku: ani
landingu, ani bloga, ani Q&A. Blog pokrywa dziś en/pl/de, czyli 69% bazy; włoski jest
jedyną dużą, całkowicie niewykorzystaną szansą organiczną.

Ta różnica sama w sobie niczego nie dowodzi — użytkownicy włoscy mogą konwertować gorzej
z powodów, których lokalizacja nie ruszy. Ale koszt sprawdzenia jest niski, bo pipeline
tłumaczeniowy jest już przetarty na niemieckim, a landing to raptem 860 słów.

## Zakres

| Powierzchnia | Stan dziś | Po zmianie |
|---|---|---|
| Landing statyczny | 12 locale | 13 locale (`/it/`) |
| Blog Astro | en, pl, de | + it, **31 postów** |
| Q&A | en, pl, de × 24 | + it × 24 (21 tłumaczonych + 3 natywne) |
| Grafiki landingu | 12 locale × 3 | + `public/img/it/` × 3 |
| Wykresy blogowe | en, pl, de × 4 | + `*-it.webp` × 4 |

Poza zakresem: aplikacja mobilna (ma już locale `it`), `privacy.html` / `terms.html`
(istnieją tylko po angielsku i polsku — włoski ich nie pogorszy ani nie poprawi),
listingi sklepowe (mają już włoską lokalizację).

## Decyzje

### D1 — źródłem tłumaczenia jest angielski, nie niemiecki

Niemiecki jest strukturalnym wzorem (wyciął tematy brytyjskie, dołożył własne rynkowe),
ale sam jest tłumaczeniem. Tłumaczenie z tłumaczenia kumuluje dryf, a trzy niemieckie
posty o Balkonkraftwerk i tak wymagałyby przepisania na *fotovoltaico da balcone*.
Kanonicznym źródłem pozostaje EN.

### D2 — 31 postów, nie 32

`timing-appliances-to-your-solar-peak` jest zastąpiony przez `when-to-run-appliances-solar`
i ma na siebie 301 w `vercel.json`. Nie odtwarzamy przestarzałego tematu w nowym języku.

### D3 — kategoria k6 pisana natywnie, nie tłumaczona

`k6` jest z założenia rynkowa: u EN to eksport i taryfy UK/AU, u PL net-billing, u DE
Balkonkraftwerk. Dosłowne tłumaczenie pytania o Octopus Agile daje Włochowi treść
bezużyteczną i zerowy ruch organiczny. Włoskie k6 pokrywa realia lokalne (Scambio sul
Posto / Ritiro Dedicato, CER, detrazione, plug-in). Dokładny zestaw pytań i nazwa
kategorii wychodzą z researchu regulacyjnego, nie z pamięci modelu.

**Twierdzenia o włoskim prawie muszą być zweryfikowane w sieci przed publikacją.**
Stawki detrazione zmieniały się rocznie, Scambio sul Posto jest w fazie wygaszania, a
próg mocy dla instalacji plug-in wszedł niedawno. To najbardziej lokalna treść, jaką
publikujemy, i najłatwiejsza do skompromitowania jedną nieaktualną liczbą.

### D4 — jeden PR, osiem commitów

Merge całości naraz, ale wewnętrznie podzielone tak, żeby build był zielony po każdym
kroku i żeby **po drugim commicie włoski landing był kompletny**. Gdyby praca utknęła,
mergowalna jest sama ta część.

### D5 — generator wykresów trafia do repo

Commit `461b48e` wrzucił dziewięć WebP-ów bez skryptu, który je wyprodukował. Włoski
wymusza odtworzenie generatora; skoro i tak powstaje, wchodzi do repo. Czternasty język
będzie wtedy jedną komendą, a nie kolejną archeologią.

## Architektura zmian

### Landing — `scripts/landing/`

Zmiana addytywna w czterech mapach [`build.js`](../../scripts/landing/build.js):

```js
LOCALES        += 'it'
HREFLANG.it     = 'it'
NATIVE_NAMES.it = 'Italiano'
BLOG_LANG.it    = 'it'      // bez tego /it/ linkowałby do bloga angielskiego
```

Plus blok `it` w `translations.json` (101 kluczy, ~860 słów), wpis w
`public/sitemap-landing.xml` i `hreflang="it"` w shimie `public/index.html`.

Generator wypisuje przełącznik języków i tagi hreflang na **wszystkich** locale, więc
przebudowa dotknie 13 plików `public/*/index.html`, nie jednego. To zamierzone.

### Blog — `src/`

`LANGS` w [`i18n.ts`](../../src/data/i18n.ts) jest źródłem typu `BlogLang`, z którego
wywiedzione są wszystkie `Record<BlogLang, …>`. Dopisanie `'it'` **zamienia każdą
niekompletną mapę w błąd kompilacji** — `astro check` staje się listą kontrolną:

- `DATE_LOCALE.it = 'it-IT'`, `OG_LOCALE.it = 'it_IT'`, `READING_WPM.it`, `LANG_LABEL.it`
- `UI.it` — 20 stringów interfejsu
- `QA_CATEGORIES.*.it` — 6 kategorii, z k6 rynkowo odmiennym
- `SERIES.*.it` — 4 serie (tytuł + opis)
- `TranslationCluster.it?: string` + slug IT w każdym klastrze mającym wersję włoską

Poza tym `z.enum(['en','pl','de'])` w `content.config.ts` — **dwa wystąpienia**, kolekcja
`blog` i kolekcja `qa`.

Wyczerpującą listę pozostałych miejsc (routing, RSS, Pagefind, JSON-LD, og:locale)
dostarcza audyt kodu z fazy researchu; nie zgadujemy jej.

### Sekwencja commitów

| # | Zakres | Stan po commicie |
|---|---|---|
| 1 | Kod: `i18n.ts`, `content.config.ts`, `translations.ts`, `qa-categories.ts`, `series.ts` + reszta z audytu | `astro check` zielony, trasa `/blog/it/` istnieje i jest pusta |
| 2 | Landing: `build.js`, `translations.json`, sitemap, shim, `public/img/it/` | **`volcast.app/it/` kompletny** |
| 3 | Blog: klaster prognozy | |
| 4 | Blog: klaster autokonsumpcji | |
| 5 | Blog: klaster sezon i rynek | |
| 6 | Blog: klaster geografia | 31 postów |
| 7 | Q&A: 21 tłumaczonych + 3 natywne IT | komplet |
| 8 | Wykresy IT + generator, poprawki po korekcie | domknięcie |

## Kontrola jakości tłumaczenia

Trzy warstwy, bo każda łapie inną klasę błędu.

**Glosariusz jako kontrakt.** ~40 par EN→IT z notatką o groźnych kalkach, w
`docs/it-glossary.md`, egzekwowane skryptem `scripts/check-it-terms.js`. Spójność
terminologiczna przez 55 plików to zadanie, w którym skrypt jest niezawodny, a model nie.

**Walidator strukturalny.** `scripts/check-it-parity.js` porównuje każdy plik IT z jego
angielskim źródłem: identyczne liczby, identyczne ścieżki obrazków, identyczne
`entity_id`, ta sama liczba nagłówków, obecny i poprawny `translationKey`. To wyłapuje
cichy dryf treści — klasę błędu, która przechodzi review i publikuje „~85%" jako „~95%".

**Korekta zewnętrzna (Gemini) na listę różnic, nie na przepisanie.** `docs/it-review/`,
~12 plików po ~3 000 słów, prompt w nagłówku każdego, wymuszony format odpowiedzi:
`plik → linia → obecnie → propozycja → powód`. Plik `00-PRIORYTET.md` zawiera landing
i wszystkie tytuły oraz opisy SEO — ~4 000 słów niosących większość wartości handlowej.

Uzasadnienie formatu: drugi model realnie łapie kalki i sztuczną składnię, bo ma inne
dane treningowe. Ale nie wie, że `stringa` to termin branżowy, a `sensor.volcast_energy_today`
się nie tłumaczy — a wklejenie z powrotem przepisanych 34 000 słów jest nieweryfikowalne
i cicho przesuwa liczby, linki i frontmatter. Lista różnic daje płynność bez utraty
kontroli nad faktami.

## Zasoby graficzne

Grafiki `public/img/{locale}/*.png` **nie są surowymi zrzutami z telefonu** — to gotowe
kompozycje sklepowe (1080×1920 Play Phone dla de/cs/pl, 1284×2778 App Store 6.5" dla en)
z nagłówkiem marketingowym, wychodzące z `store-assets/screenshots.html` w repo Volcast.
Ten generator ma już kompletny blok `it` i przycisk IT — włoskie wersje istnieją w Play
Console i App Store Connect.

| Zasób | Źródło | Wykonawca |
|---|---|---|
| `img/it/forecast.png` | zrzut sklepowy `_01` | user |
| `img/it/notifications.png` | zrzut sklepowy `_04` (ekran alertów) | user |
| `img/it/widgets.png` | zrzut sklepowy `_03` | user |
| `img/blog/{forecast-vs-actual-14d,winter-production,hourly-surplus}-it.webp` | odtworzony generator, etykiety z glosariusza | Claude |
| `img/blog/ha-energy-dashboard-it.webp` | zrzut Home Assistanta po włosku | odłożone — na razie wersja EN |

Dane wejściowe wykresów są odczytywalne z istniejących WebP-ów i z commita `461b48e`
(listopad 79 / grudzień 32 / luty 100 kWh; błąd 16% → 9,5%; próg gospodarstwa 1,2 kW).

## Ryzyka

**Slugi są nieodwracalne.** Zły slug po zaindeksowaniu to 301 na zawsze. Slugi IT wychodzą
z researchu fraz wyszukiwania, nie z transliteracji angielskich. To jedyny element, który
trzeba zrobić dobrze *przed*, a nie poprawić *po*.

**Recypocność hreflang.** Deklaracja jednostronna jest przez Google ignorowana — dodanie
`it` do klastra zmienia też strony EN/PL/DE. Wynika to automatycznie z
`TRANSLATION_CLUSTERS`, ale tylko dla postów faktycznie mających wersję IT. Stąd commity
klastrami, a nie plikami: klaster albo jest kompletny, albo go nie ma.

**Pusta trasa `/blog/it/`.** Między commitem 1 a 3 język istnieje bez treści. Do
zweryfikowania w audycie, czy `getStaticPaths` w ogóle wygeneruje trasę dla języka bez
postów, czy wywali build. Gdyby cokolwiek miało trafić na produkcję przed commitem 3 —
`noindex` na pustym indeksie.

**Nieaktualne regulacje.** Opisane w D3. Mitygacja: każde twierdzenie regulacyjne
przechodzi niezależną weryfikację ze źródeł pierwotnych (GSE, ARERA, MASE, Agenzia delle
Entrate), a nie tylko autorską.

## Kryteria akceptacji

- `npm run build` zielony (zawiera `astro check`)
- `node scripts/landing/build.js` bez ostrzeżeń `Missing key … for locale: it`
- 13 wzajemnie zgodnych wpisów hreflang na każdej stronie landingu
- każdy post i każde Q&A po włosku ma `translationKey` obecny w klastrze
- `scripts/check-it-parity.js` i `scripts/check-it-terms.js` czyste
- zero literałów `[key]` w wygenerowanym HTML-u
- ręczny przegląd `/it/`, `/blog/it/`, `/blog/it/q/` na podglądzie Vercela
