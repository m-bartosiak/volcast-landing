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
