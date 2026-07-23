---
title: "Dlaczego panele nie osiągają mocy nominalnej?"
description: "Instalacja 6 kWp pokazuje maksymalnie 4,5–5 kW? To normalne — moc nominalna to warunki laboratoryjne. Ile realnie „powinno być\" i kiedy się martwić."
lang: pl
draft: true
category: "k2"
guide: "prognoza-pogody-a-produkcja-pv"
translationKey: "qa-below-rated"
seo:
  ogTitle: "Dlaczego panele nie osiągają mocy z tabliczki?"
---
Bo **moc nominalna to wynik z laboratorium** (STC: dokładnie 1000 W/m², ogniwo 25°C, idealny kąt padania), a te warunki na dachu praktycznie nie występują jednocześnie. Realna instalacja w najlepszych momentach osiąga zwykle **75–90% mocy z tabliczki** — 6 kWp pokazujące 4,8–5,2 kW w chłodne słoneczne południe działa wzorowo.

## Dlaczego tak się dzieje

Składa się na to kilka warstw, każda po kilka procent: temperatura ogniw (największa — patrz odpowiedź o wiośnie i lecie), kąt padania światła inny niż prostopadły przez większość dnia, straty falownika i przewodów (2–4%), zabrudzenie i lekkie niedopasowanie modułów. Do tego nasłonecznienie 1000 W/m² to wartość niemal maksymalna dla Polski — typowe „pełne słońce" daje 700–900 W/m². Pomnóż te czynniki, a 80% mocy nominalnej okazuje się bardzo dobrym wynikiem, nie wadą.

Wyjątek potwierdzający regułę: w chłodny dzień z ostrym słońcem i odbiciem od chmur lub śniegu zdarzają się krótkie piki powyżej mocy nominalnej — to tzw. cloud edge effect, również normalny.

## Co zrobić

1. **Zmień punkt odniesienia:** zamiast „6 kWp powinno dawać 6 kW" przyjmij realne maksimum ~80–90% w idealnych warunkach.
2. **Sprawdź moc chwilową w chłodny słoneczny dzień w południe** — to jedyny miarodajny test „szczytu".
3. **Jeśli maksimum wyraźnie odbiega** (np. 60% mocy nominalnej w idealnych warunkach) — szukaj wzorca: stała godzina = zacienienie; równe „ścięcie" = limit (odpowiedź o ścinaniu produkcji); losowo = warto zbadać stringi.
4. **Odchylenie licz od prognozy dla Twojej konfiguracji,** nie od tabliczki — skalibrowany model wie, ile Twój dach powinien dawać o 13:00 w kwietniu, i to od niego liczy się „za mało".
