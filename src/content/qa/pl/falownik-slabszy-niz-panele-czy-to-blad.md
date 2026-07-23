---
title: "Falownik ma mniejszą moc niż panele — czy to błąd?"
description: "10 kWp paneli na falowniku 8 kW? Przewymiarowanie DC/AC do ~1,25 to norma projektowa, nie oszczędność instalatora. Kiedy to zaleta, a kiedy przesada."
lang: pl
draft: true
category: "k1"
guide: "prognoza-produkcji-fotowoltaiki"
translationKey: "qa-inverter-undersized"
seo:
  ogTitle: "Falownik słabszy niż panele — czy to błąd instalatora?"
---
Nie — **przewymiarowanie paneli względem falownika (DC/AC ~1,1–1,25) to standard projektowy**, nie błąd. Panele niemal nigdy nie osiągają mocy znamionowej jednocześnie (temperatura, kąt, zabrudzenie), więc falownik dobrany „pod korek" byłby przepłacony i pracował poniżej optymalnej sprawności przez większość roku. Granica zdrowego rozsądku to okolice 1,3 — powyżej straty z clippingu zaczynają być odczuwalne.

## Dlaczego tak się projektuje

Moc z tabliczki panelu to warunki laboratoryjne (STC): 25°C ogniwa i pełne 1000 W/m². W realu letnie ogniwo ma 60°C i traci kilkanaście procent, wiosną przeszkadza kąt, jesienią zachmurzenie. Instalacja 10 kWp przez zdecydowaną większość godzin w roku produkuje poniżej 8 kW — falownik 8 kW obsłuży to wszystko, a utnie tylko krótkie szczyty w najlepsze chłodne, słoneczne dni. Typowa strata roczna przy DC/AC 1,25 to zaledwie 1–3% produkcji, za to falownik częściej pracuje w zakresie wysokiej sprawności i jest tańszy.

Dodatkowy kontekst polski: moc instalacji w umowie z operatorem to zwykle moc falownika — więcej paneli na tym samym falowniku bywa sposobem na lepsze wykorzystanie przyłącza.

## Co zrobić

1. **Policz swój stosunek DC/AC:** moc paneli ÷ moc falownika. 1,0–1,25 = podręcznikowo; 1,25–1,35 = akceptowalnie przy wschód–zachód lub częstym zacienieniu; powyżej — poproś instalatora o uzasadnienie z symulacją strat.
2. **Sprawdź na wykresie, ile realnie ścinasz:** płaskie szczyty tylko w kwietniowo-majowe południa to norma; ścinanie od 9:00 do 17:00 latem to sygnał przesady.
3. **Konsumuj szczyty:** w godzinach clippingu dodatkowe zużycie (bojler, ładowanie) jest de facto darmowe — falownik i tak by tę energię uciął.
4. **Przy rozbudowie** trzymaj się granicy ~1,3 albo rozważ drugi falownik/mikrofalowniki dla nowej sekcji.
