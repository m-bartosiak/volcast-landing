---
title: "Prognoza się nie zgadza? Pięć sprawdzeń po kolei"
description: "Zanim obwinisz model, wyklucz cztery rzeczy, które wyglądają jak błąd prognozy, a nim nie są. Piąty krok powie, czy naprawdę zawiniła pogoda."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "Prognoza PV rozjeżdża się z produkcją? Sprawdź pięć rzeczy"
---
Kiedy produkcja rozjeżdża się z prognozą, model jest pierwszym podejrzanym — i zwykle niewinnym. Cztery z pięciu najczęstszych przyczyn to rzeczy dotyczące Twojej instalacji, o których prognoza nigdy się nie dowiedziała, a każda z nich zostawia inny ślad niż prawdziwa pomyłka pogodowa. Przejdź je w tej kolejności — od najtańszych i najbardziej prawdopodobnych — a piąty krok powie Ci, czy to, co zostało, to faktycznie niebo.

## 1. Moc, którą wpisałeś

Zacznij tutaj, bo to zdecydowanie najczęstsza przyczyna, a sprawdzenie zajmuje pięć minut. Prognoza modeluje światło, które zbierają panele, więc potrzebuje ich mocy szczytowej, a nie mocy falownika. Dwanaście paneli po 510 W to instalacja 6,12 kWp, nawet jeśli na ścianie wisi falownik 5 kW.

Sygnatura to **stały stosunek**: każdy pogodny dzień ląduje w okolicy tego samego ułamka prognozy, bo zła moc działa jak niezmienny mnożnik na każdą godzinę. Jeśli Twoje słoneczne dni skupiają się wokół 0,8 albo wokół 1,2 — przerwij czytanie i popraw tę liczbę, bo wszystko poniżej jest szumem, dopóki tego nie zrobisz. Całą metodę opisuję w [jak ustalić realną moc instalacji](/blog/pl/q/skad-wziac-realna-moc-instalacji/).

## 2. Ścinanie na falowniku

Jeśli różnica pojawia się wyłącznie w okolicach południa i tylko w najbardziej słoneczne dni, a krzywa produkcji ma płaski wierzchołek zamiast szczytu, to nie jest błąd prognozy. To falownik wykonujący swoją pracę: instalacja większa od falownika to standardowy projekt, a ścinanie dotyczy kilkunastu godzin w roku.

Szczegóły w dwóch odpowiedziach — [dlaczego produkcja ścina się w południe](/blog/pl/q/dlaczego-produkcja-scina-sie-w-poludnie/) oraz [czy falownik słabszy od paneli to błąd](/blog/pl/q/falownik-slabszy-niz-panele-czy-to-blad/). W skrócie: płaski wierzchołek to decyzja projektowa, nie usterka, a prognoza może to uwzględnić tylko wtedy, gdy zna limit falownika.

## 3. Zacienienie, którego model nie widzi

Prognoza wie, gdzie jest Słońce. Nie wie nic o kominie sąsiada, o orzechu w ogrodzie ani o lukarnie trzy metry na zachód. Zacienienie bliskie jest niewidzialne dla każdego modelu, któremu nie powiedziano o nim wprost.

Sygnatura jest tu inna niż w dwóch poprzednich punktach: błąd **nie jest stały, ale powtarza się o tej samej porze dnia**. Rano zgadza się z prognozą, po południu brakuje — i tak w każdy pogodny dzień w danym sezonie. Weź pięć słonecznych dni i porównaj godzina po godzinie, a nie sumami dziennymi; kształt zdradza wszystko, a suma dzienna ukrywa dokładnie to, czego szukasz.

Kłopotliwe jest to, że kształt przesuwa się w ciągu roku, bo zmienia się wysokość Słońca. Cień, który w czerwcu nie kosztuje nic, w październiku potrafi zjeść całe popołudnie.

## 4. Brud, śnieg i rzeczy, które narastają powoli

Zabrudzenie ma najbardziej charakterystyczny ślad ze wszystkich: **powolny dryf w jedną stronę**. Nie jeden zły dzień, nie zły tydzień — stosunek, który w kwietniu wynosił 1,0, a w lipcu 0,92, bez żadnego pojedynczego zdarzenia, na które można wskazać palcem. Pyłki, kurz po suchym okresie, sól przy wybrzeżu, ptasie odchody na jednym stringu.

Śnieg jest przeciwieństwem: całkowity, oczywisty i sam się rozwiązuje. Wspominam o nim tylko dlatego, że częściowo przykryta instalacja potrafi produkować tak mało, że ludzie zakładają awarię.

Test jest prosty. Zapisuj swój najlepszy bezchmurny dzień w każdym miesiącu. Taka osobista krzywa odniesienia uwidacznia dryf w sposób, w jaki porównywanie dnia do dnia nigdy tego nie zrobi — przy okazji wyłapuje też realną degradację przez lata.

## 5. No dobrze, czy to była pogoda?

Jeśli cztery powyższe punkty są wykluczone, można wreszcie zadać pytanie poprawnie — a uczciwa odpowiedź brzmi: prognozy naprawdę są gorsze w chmurach.

Mierzone na produkcji naszych użytkowników: w dni z czystym niebem mediana błędu wynosi około **10%**, przy pełnym zachmurzeniu jest bliżej **18%**. Przy mocnym zachmurzeniu mniej więcej **28%** dni mija się z prognozą o więcej niż **30%** w jedną albo drugą stronę, wobec **8%** dni pogodnych. Co istotne, mediana obciążenia pozostaje blisko zera w każdym koszyku pogodowym — prognoza nie zawyża ani nie zaniża systematycznie w chmurach, po prostu robi się bardziej rozstrzelona.

To rozróżnienie jest sednem tego kroku. **Rozrzut w obie strony to pogoda. Stałe przesunięcie to konfiguracja.** Jeśli Twoje błędy są duże, ale przez wiele dni lądują raz po jednej, raz po drugiej stronie — masz odpowiedź i nie ma czego naprawiać. Jeśli konsekwentnie przechylają się w jedną stronę, wróć do punktu 1.

Dwie uwagi przy porównywaniu tego z liczbami publikowanymi przez dostawców. Większość branżowych deklaracji dokładności dotyczy irradiancji albo zagregowanej produkcji całej floty — jedno i drugie jest znacznie łatwiejsze do przewidzenia niż dzienne kilowatogodziny z jednego dachu. I pojedynczy dzień nie dowodzi niczego w żadną stronę; potrzebujesz tygodni, zanim średnia zacznie cokolwiek znaczyć.

## Co robić

1. **Najpierw popraw moc.** Liczba paneli razy moc z tabliczki, osobno dla każdej orientacji. Nic innego nie warto mierzyć, dopóki to się nie zgadza.
2. **Oddziel dni pogodne od pochmurnych**, zanim policzysz jakąkolwiek średnią. Wymieszane dają liczbę, która nie opisuje ani jednych, ani drugich.
3. **Porównuj godzina po godzinie, gdy suma dzienna wygląda dobrze.** Zacienienie i ścinanie chowają się w poprawnie wyglądającej sumie dziennej.
4. **Notuj najlepszy bezchmurny dzień w miesiącu.** To najtańszy przyrząd pomiarowy, jaki masz, do wychwycenia powolnego dryfu.
5. **Oceniaj na tygodniach, nie na dniach.** A jeśli chcesz szerszego tła, zacznij od [jak sprawdzić, czy instalacja działa poprawnie](/blog/pl/q/jak-sprawdzic-czy-instalacja-dziala-poprawnie/) i [dlaczego panele nigdy nie osiągają mocy nominalnej](/blog/pl/q/dlaczego-panele-nie-osiagaja-mocy-nominalnej/).
