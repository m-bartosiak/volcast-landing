---
title: "Kiedy włączyć bojler, pralkę i zmywarkę przy fotowoltaice — praktyczny przewodnik"
description: "O której godzinie grzać wodę i odpalać AGD, żeby zużyć własny prąd z PV? Prosta zasada, przykłady godzinowe i sposób na automatyzację."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "appliances"
seo:
  ogTitle: "Kiedy włączyć bojler i pralkę przy fotowoltaice? Poradnik"
---
Krótka odpowiedź: **wtedy, gdy Twoja instalacja produkuje więcej, niż dom aktualnie zużywa** — czyli zwykle w oknie 10:00–15:00, ale dokładne godziny zależą od pogody, pory roku i ustawienia paneli. W tym poradniku pokażę, jak znaleźć to okno dla swojej instalacji i jak przestać zgadywać.

## Dlaczego godzina włączenia w ogóle ma znaczenie

W net-billingu prąd oddany do sieci jest wyceniany po cenie rynkowej (RCE), a odkupowany — po pełnej taryfie z opłatami dystrybucyjnymi. W praktyce kilowatogodzina zużyta bezpośrednio z dachu jest warta **2–3 razy więcej** niż ta sama kilowatogodzina oddana do sieci i odkupiona wieczorem. Latem, gdy ceny rynkowe w południe bywają bliskie zera albo ujemne, różnica jest jeszcze większa.

Bojler, pralka, zmywarka i suszarka to najwięksi „przesuwalni" odbiorcy w domu. Sam bojler 2–3 kW grzejący wodę przez 1,5–2 h to 3–6 kWh dziennie — przesunięcie tego z wieczora na południe potrafi zmienić bilans miesiąca o kilkadziesiąt złotych.

## Zasada nr 1: nie godzina, tylko nadwyżka

Popularna rada „włączaj między 11 a 14" działa średnio, bo:

- **W kwietniu** instalacja 5 kWp na południe potrafi mieć nadwyżkę już od 9:00.
- **W listopadzie** ta sama instalacja może nie mieć jej wcale — i wtedy grzanie w południe niczego nie oszczędza.
- **Instalacja wschód–zachód** ma dwa garby produkcji i dłuższe, ale płytsze okno nadwyżki.
- **W pochmurny dzień** szczyt może przesunąć się o 2–3 godziny albo być za niski dla bojlera 3 kW.

Właściwe pytanie brzmi więc: *ile mojej instalacji zostanie jutro po pokryciu zużycia bazowego i w których godzinach?* Na to pytanie odpowiada godzinowa prognoza produkcji.

## Jak to robię u siebie (instalacja 5,2 kWp)

Wieczorem zerkam w prognozę na jutro. Trzy scenariusze:

**Dzień słoneczny, prognoza 25+ kWh.** Bojler startuje o 10:30, pralka o 12:00, zmywarka o 13:30 — wszystko mieści się w nadwyżce, do sieci i tak jeszcze sporo oddam.

**Dzień mieszany, prognoza 10–15 kWh.** Wybieram szczytowe 2 godziny z prognozy godzinowej (np. 12:00–14:00) i tam wciskam tylko bojler. Pralka czeka na lepszy dzień albo jedzie na taniej strefie nocnej, jeśli masz G12 lub taryfę dynamiczną.

**Dzień pochmurny, prognoza poniżej 6 kWh.** Nie udaję, że gram z produkcją — grzeję wodę w najtańszej strefie / najtańszej godzinie taryfy dynamicznej.

Kluczowe jest to, że decyzję podejmuję wieczorem w 30 sekund, a nie stojąc rano przy oknie i wróżąc z chmur. Używam do tego [Volcast](https://volcast.app/pl/) — aplikacja pokazuje prognozę godzinową dla mojej konkretnej instalacji (azymut, kąt, zacienienie), a wieczorne powiadomienie z prognozą na jutro ratuje przed pomyłką, gdy pogoda się przestawi.

![Krzywa godzinowej produkcji PV w pogodny dzień z zaznaczonym oknem nadwyżki](/img/blog/hourly-surplus-pl.webp)

## Poziom wyżej: automatyzacja zamiast pamiętania

Jeśli masz Home Assistant, całość można zautomatyzować: prognoza trafia do systemu jako sensor, a automatyzacja włącza grzałkę przez inteligentne gniazdko lub stycznik, gdy przewidywana produkcja w najbliższej godzinie przekracza próg. Efekt: bojler grzeje się słońcem bez Twojego udziału, a w pochmurne dni automatycznie przełącza się na tanią strefę.

Volcast ma oficjalną integrację z Home Assistant (instalacja przez HACS, 3 kliknięcia, wymaga Premium) — sensory „energia dziś", „energia jutro", „moc teraz" i wskaźnik szczytu produkcji pojawiają się od razu w Energy Dashboard.

Nie masz Home Assistanta? Wystarczą powiadomienia z aplikacji i zwykły programator czasowy ustawiany wieczorem.

## Ściąga na start

| Urządzenie | Pobór | Kiedy włączać |
|---|---|---|
| Bojler / grzałka CWU | 2–3 kW | Środek okna nadwyżki; priorytet nr 1 — największy i najbardziej elastyczny odbiór |
| Pralka | 0,5–2 kW | Początek okna nadwyżki; program z niższą temperaturą = mniejszy szczyt poboru |
| Zmywarka | 1–2 kW | Po pralce, wciąż w oknie; tryb eco wydłuża, ale spłaszcza pobór |
| Suszarka | 1,5–3 kW | Tylko w dni z dużą nadwyżką |
| Ładowanie EV | 3,7–11 kW | Osobny temat — wymaga największej nadwyżki |

## FAQ

**Czy opłaca się grzać wodę z fotowoltaiki zamiast oddawać prąd do sieci?**
W net-billingu prawie zawsze tak — autokonsumpcja jest warta 2–3× więcej niż sprzedaż nadwyżki. Wyjątek: bardzo wysokie ceny RCE przy jednoczesnej taniej strefie nocnej, ale to rzadkość.

**O której godzinie fotowoltaika produkuje najwięcej?**
Instalacja południowa — zwykle 11:00–14:00 czasu letniego; wschód–zachód — dwa szczyty, ok. 9:00–11:00 i 14:00–16:00. Dokładny szczyt danego dnia najlepiej sprawdzić w prognozie godzinowej, bo zachmurzenie potrafi go przesunąć.

**Czy włączanie wszystkiego naraz w południe ma sens?**
Tylko jeśli suma poborów mieści się w nadwyżce. Jeśli bojler + pralka + zmywarka przekroczą bieżącą produkcję, brakującą moc dobierzesz z sieci po pełnej cenie. Lepiej rozłożyć urządzenia sekwencyjnie w oknie nadwyżki.
