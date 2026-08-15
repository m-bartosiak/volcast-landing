---
title: "Skąd wziąć realną moc instalacji w kWp?"
description: "kWp to suma mocy paneli z tabliczek: 12 modułów po 510 W daje 6,12 kWp, nawet gdy falownik ma 5 kW. Jak sprawdzić wpisaną moc na czystych dniach."
lang: pl
draft: true
category: "k2"
guide: "trzy-liczby-instalacji-pv"
translationKey: "qa-real-kwp"
seo:
  ogTitle: "Realna moc instalacji w kWp — skąd ją wziąć"
---
Moc Twojej instalacji w kWp to **suma mocy nominalnych paneli z tabliczek i nic poza tym**. Dwanaście modułów po 510 W daje 6,12 kWp — nawet jeśli na ścianie wisi falownik 5 kW, nawet jeśli oferta instalatora zaokrągliła to do „6 kW" i nawet jeśli aplikacja dołączona do falownika pokazuje inną liczbę. Panele mierzy się w watach mocy szczytowej (Wp) po stronie DC, falownik — w watach mocy AC na wyjściu. To odpowiedzi na dwa różne pytania.

## Dlaczego te liczby celowo się różnią

Falownik słabszy od pola paneli to normalna sztuka projektowa, nie przeoczenie. Stosunek DC/AC w przedziale 1,1–1,3 jest standardem: panele osiągają moc z tabliczki wyłącznie w warunkach laboratoryjnych, więc dobranie falownika pod szczyt realny, a nie teoretyczny, kosztuje prawie nic w utraconej energii, a oszczędza konkretne pieniądze na sprzęcie. Instalacja będzie ścinać szczyty przez kilka godzin w roku, w letnie południa — i to jest świadomy wybór projektanta.

Właśnie dlatego moc falownika to zła liczba do wpisania w prognozę. Prognoza modeluje, ile światła zbiorą panele, a to wynika z ich powierzchni i sprawności — czyli dokładnie z tego, co opisuje kWp. Falownik wchodzi do gry później, jako sufit.

## Gdzie znaleźć uczciwą wartość

Tabliczka znamionowa jest z tyłu każdego panelu, ta sama wartość widnieje w karcie katalogowej, którą zostawił instalator. Pomnóż moc modułu przez liczbę modułów. Jeśli na dachu masz kilka grup skierowanych w różne strony, policz sumę osobno dla każdej — prognoza potrzebuje ich rozdzielnie, bo string wschodni i zachodni mają szczyt w odstępie kilku godzin.

Dwa miejsca, które wprowadzą Cię w błąd: aplikacja falownika, która zwykle raportuje swoją moc AC, oraz liczba z nagłówka umowy, często zaokrąglona dla czytelności.

## Jak błędna moc wygląda w danych

Sygnaturą jest **stały stosunek** i to właśnie odróżnia ten błąd od pomyłki pogodowej. Wybierz pięć do dziesięciu bezchmurnych dni rozłożonych na przestrzeni dwóch miesięcy i podziel dla każdego produkcję rzeczywistą przez prognozę. Nietrafiona pogoda rozrzuca wyniki: raz w górę, raz w dół. Błędna moc nie rozrzuca nic — każdy czysty dzień ląduje w okolicy tej samej wartości, bo błąd jest stałym mnożnikiem nałożonym na każdą godzinę każdego dnia.

Jeśli te dni skupiają się wokół 0,8, wpisana moc jest o jakieś 20% większa od faktycznej. Jeśli wokół 1,2 — wpisałeś za mało, a dokładnie tak wychodzi, gdy ktoś wklepie 5 kW falownika zamiast 6,12 kWp paneli.

## Co zrobić

1. **Policz panele i przeczytaj jedną tabliczkę** — liczba modułów razy waty, osobno dla każdej połaci dachu. Zajmuje pięć minut, a jest najcenniejszą liczbą w całej konfiguracji.
2. **Wpisz moc szczytową paneli (DC), nie kilowaty falownika** — jeśli obie wartości różnią się o 10–30%, tak właśnie ma być.
3. **Zanim obwinisz prognozę, sprawdź stosunek w czyste dni** — stałe odchylenie to błąd konfiguracji, rozrzucone to pogoda.
4. **Przelicz po każdej zmianie** — dołożone panele, wymieniony moduł, druga sekcja. Moc wpisana raz i nigdy nieweryfikowana po cichu traci aktualność.
