# Materiał źródłowy do lokalizacji włoskiej (PLAN-066)

Surowe wyniki dwóch przebiegów researchu z 2026-08-14. Nie edytować ręcznie —
to zapis tego, co ustalono i z jaką pewnością. Poprawki idą do glosariusza
(`docs/it-glossary.md`) i do planu, nie tutaj.

| Plik | Zawartość |
|---|---|
| `raw-mapa-tresci.json` | 31 postów + 24 Q&A: slugi IT, tytuły, adaptacje rynkowe, konwencja slugów |
| `raw-terminologia.json` | 67 par EN→IT z pułapkami, konwencje stylu, 10 fraz wyszukiwania |
| `raw-audyt-kodu.json` | 61 miejsc w kodzie zakładających zamknięty zbiór języków + 20 ryzyk |
| `raw-regulacje.json` | 46 twierdzeń o regulacjach IT, 8 werdyktów sceptyków, 2 obalone |
| `raw-krytyk.md` | Krytyk kompletności — czego brakowało w audycie i planie |
| **`FAKTY-REGULACYJNE.md`** | **Skonsolidowany dokument z drugiego przebiegu — zacznij tutaj** |
| `raw-regulacje-2.json` | 177 twierdzeń: detrazione, plug-in, fasce orarie, źródła pierwotne |
| `raw-werdykty-2.json` | 9 werdyktów sceptyków na twierdzenia najwyższego ryzyka |
| `raw-luki-2.json` | 38 rzeczy jawnie nieustalonych — czytaj przed napisaniem liczby |
| `raw-kontrola-copy.md` | Kontrola korekty copy w 12 locale (commit 759970c) |

> ⚠️ **Tytuły postów IT muszą mieć ≤ 45 znaków we frontmatterze.** `tests/seo-guard.test.js`
> mierzy wyrenderowany `<title>` z limitem 60, a `BlogPost` dokłada `" — Volcast Blog"`
> (15 znaków). Test wszedł do `main` **po** tym researchu, więc **30 z 31 tytułów postów
> i 22 z 24 tytułów Q&A w `raw-mapa-tresci.json` wywaliłyby CI.** Slugi zostają, tytuły
> do przepisania. Opisy: 140–155 znaków (nie 120–155 jak w README landingu — to inny gate).

## Ostrzeżenie o twierdzeniach regulacyjnych

**Zweryfikowano niezależnie 8 z 46 twierdzeń.** Pozostałe 38 nie przeszło
kontroli sceptyka i nie wolno ich publikować bez sprawdzenia w źródle pierwotnym
(GSE, ARERA, MASE, GME, Agenzia delle Entrate, Gazzetta Ufficiale, CEI).

Dwa twierdzenia zostały **obalone** i w oryginalnej formie wprowadzałyby w błąd:

- zakaz przedłużania konwencji SSP po 15 latach obowiązuje **od 2024**, nie od 2026
- przejście SSP → RID jest **automatyczne**, nie wnioskowe

Cztery są **zablokowane** do czasu potwierdzenia w źródle pierwotnym: `rid-04`
(PMG), `rid-06` (cena strefowa — podpiera ekonomikę w sześciu postach), `cer-05`,
`cer-08`. Sekcja TIDE jest wycięta z treści konsumenckiej w całości.

Każde twierdzenie ma datę ważności. Post, który je zawiera, musi mieć `updated:`
we frontmatterze — inaczej za rok będzie kłamał po cichu.

## Drugi przebieg — co domknął, a czego nie

Detrazione wyszła ze źródła pierwotnego Agenzia delle Entrate: **36%, albo 50% dla
abitazione principale**, limit 96 000 € na jednostkę nieruchomości, 10 rat rocznych,
bateria objęta tym samym limitem. Od 2027 spadek do 30% / 36%.

Sceptyk odrzucił dwie ramy interpretacyjne mimo poprawnych liczb, i obie są warte
zapamiętania:

- **„prima casa" to nie „abitazione principale".** Pierwsze to ulga przy *nabyciu*
  (imposta di registro, warunek rezydencji), drugie to przesłanka *odliczenia*.
  Włoski czytelnik wyłapie tę pomyłkę natychmiast.
- **„Stan na 2027 jest już znany" jest fałszem.** Identyczny schodek był wpisany
  w ustawę dla 2026 i został nadpisany w grudniu 2025 przez ustawę budżetową.
  Właściwe sformułowanie to `salvo proroghe`.

Nie ustalono m.in.: żadne włoskie źródło pierwotne nie podaje **zmierzonej** rocznej
produkcji zestawów balkonowych (wszystkie liczby w sieci są modelowane), i nie wiadomo,
czy `fasce` ARERA liczą się wg czasu letniego czy stałego CET. Pełna lista w `raw-luki-2.json`.
