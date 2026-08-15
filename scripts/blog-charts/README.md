# Wykresy blogowe

```bash
python scripts/blog-charts/render.py
```

Generuje 3 wykresy × 6 języków prosto do `public/img/blog/`. Bez argumentów,
bez konfiguracji — dane są w samym skrypcie.

## Dlaczego dane siedzą w skrypcie

To realna produkcja instalacji 5,2 kWp dewelopera, wyciągnięta z long-term
statistics Home Assistanta (recorder SQLite na NAS-ie, `statistics_meta.id = 63`,
dzienny total = `max(state)` per data CET). Nie zmieniają się i nie mają być
odświeżane — to konkretny, opisany w tekstach okres:

- `D14` — 14 dni czerwca 2026: produkcja rzeczywista, prognoza surowa, prognoza po Kalmanie
- `NOV` / `DEC` / `FEB` — dobowa produkcja listopad 2025 (79 kWh), grudzień 2025 (32 kWh),
  luty 2026 (100 kWh, śnieg do ~13.02). Styczeń w całości pod śniegiem, dlatego pominięty
- `HP` — krzywa godzinowa pogodnego dnia, próg zużycia domu 1,2 kW

## Historia

Commit `461b48e` wrzucił dziewięć plików WebP **bez tego skryptu i bez danych**.
Przy dodawaniu it/fr/ro trzeba było wybrać: odczytać dziewięćdziesiąt słupków
z obrazka „na oko" — co dałoby w każdym języku nieco inne liczby dla tej samej
instalacji, czyli zmyśloną liczbę udającą pomiar — albo odzyskać generator.
Odzyskany, więc siódmy język to jedna komenda.

**Kontrola wierności przy przenoszeniu:** regeneracja `en`, `pl` i `de` dała pliki
**bajt w bajt identyczne** z tymi z lipca. Nowe języki wychodzą z tej samej ścieżki
kodu i tych samych danych.

## Dodanie języka

Dopisz blok do `LAB` (klucze `14`, `W`, `H`) i dodaj kod do listy w `num()`,
jeśli język używa przecinka dziesiętnego. Uruchom skrypt.
