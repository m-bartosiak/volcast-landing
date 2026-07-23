---
title: "Dlaczego falownik wyłącza się w słoneczne dni?"
description: "Falownik wyłącza się w szczycie produkcji? W 9 na 10 przypadków to zbyt wysokie napięcie w sieci (>253 V), nie usterka. Co sprawdzić i co zrobić."
lang: pl
draft: true
category: "k1"
guide: "prognoza-produkcji-fotowoltaiki"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Dlaczego falownik wyłącza się w słoneczne dni?"
---
W zdecydowanej większości przypadków falownik wyłącza się, bo **napięcie w sieci przekracza dopuszczalne 253 V** — a on ma obowiązek się wtedy odłączyć. To nie usterka falownika ani błąd instalacji: to przeciążona lokalna sieć, do której w słoneczne południe oddaje energię cała okolica naraz.

## Dlaczego tak się dzieje

Każda instalacja oddająca energię lekko podnosi napięcie w swoim punkcie sieci. Gdy na jednym obwodzie transformatora pracuje kilkanaście instalacji, napięcie w słoneczne południe rośnie ponad normę (230 V +10%, czyli 253 V). Falownik monitoruje je w sposób ciągły i przy przekroczeniu progu odłącza się z komunikatem o przepięciu, odczekuje, wraca — i cykl się powtarza, czasem kilkanaście razy dziennie. Każde odłączenie to stracone kWh dokładnie w godzinach największej produkcji.

Objaw rozpoznasz po wzorcu: wyłączenia występują w słoneczne dni między 11:00 a 15:00, znikają w pochmurne, a w logach falownika widnieje kod błędu napięciowego (grid overvoltage / OV).

## Co zrobić

1. **Pobierz logi z falownika** — daty, godziny i zmierzone napięcia przy każdym wyłączeniu. To Twój materiał dowodowy.
2. **Zmierz napięcie także wieczorem** — jeśli przekracza normę, gdy PV nie produkuje, problem sieci jest jeszcze łatwiejszy do wykazania.
3. **Zgłoś przekroczenia operatorowi dystrybucyjnemu** (nie sprzedawcy prądu) — jak to zrobić skutecznie, opisujemy w osobnej odpowiedzi o zgłaszaniu napięcia powyżej 253 V.
4. **Zapytaj instalatora o krzywą P(U)/Volt-Watt** — falownik może łagodnie redukować moc zamiast twardo się wyłączać; szczegóły w odpowiedzi o krzywej P(U).
5. **Policz straty** — porównanie rzeczywistej produkcji z prognozą dla Twojej instalacji pokazuje, ile kWh znika przez wyłączenia; taka liczba bardzo wzmacnia reklamację u operatora.
