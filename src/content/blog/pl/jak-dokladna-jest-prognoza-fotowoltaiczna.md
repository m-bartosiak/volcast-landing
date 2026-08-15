---
title: "Jak dokładna jest prognoza fotowoltaiczna naprawdę?"
description: "Mierzone na 10 331 dniach realnej produkcji: mediana dziennego błędu, dlaczego chmury go zwiększają i jak policzyć uczciwą liczbę dla własnego dachu."
date: 2026-09-22
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "forecast-accuracy"
seo:
  ogTitle: "Jaka jest realna dokładność prognozy produkcji PV?"
---
Krótka odpowiedź dla pojedynczego dachu, policzona na zapisach produkcji naszych własnych użytkowników: **mediana dziennego błędu to około 10% przy czystym niebie i około 18% przy pełnym zachmurzeniu**. To jedna liczba na dzień — prognoza na dany dzień zestawiona z kilowatogodzinami, które falownik faktycznie zrobił. Nie irradiancja, nie średnia z floty, nie najlepszy przypadek.

Większości publikowanych deklaracji dokładności nie da się z tym porównać, a powód ma większe znaczenie niż same liczby.

## Co dzieje się z błędem, kiedy nadciągają chmury

![Mediana dziennego błędu prognozy w zależności od zachmurzenia, przed kalibracją i po niej, na 10 331 dniach](/img/blog/forecast-error-by-cloud-pl.webp)

Kohorta to 137 instalacji mających co najmniej 20 dni danych i co najmniej pięć dni bezchmurnych. Kolejnych piętnaście odrzuciliśmy, bo ich stosunek prognozy do produkcji w dni czyste wypadał poza pasmem 0,75–1,33 — to sygnatura źle wpisanej mocy, a nie błędu prognozy. Ich obecność podnosiła odsetek dni czystych chybionych o ponad 30% z 8% do 14%.

Z tego wykresu warto odczytać dwie rzeczy, przy czym drugiej prawie nikt nie publikuje.

Pierwsza: błąd rośnie razem z zachmurzeniem — 9,7% w najbardziej pogodnym koszyku, 18,2% w najbardziej zachmurzonym. Żadnego urwiska, żadnej niespodzianki, po prostu równomierne nachylenie, bo rozproszone zachmurzenie jest w tym całym zagadnieniu rzeczą najtrudniejszą do przewidzenia.

Druga: **mediana obciążenia trzyma się między 0,96 a 1,01 w każdym koszyku**. Obciążenie to kierunek, błąd to wielkość. Model, który systematycznie zawyża w chmurach, pokazywałby stosunek wyraźnie poniżej jedności — ten tego nie robi. Kiedy więc prognoza mija się z rzeczywistością w pochmurny dzień, mniej więcej równie prawdopodobne jest, że była za wysoka, jak i za niska. Przy złej pogodzie prognoza nie staje się pesymistyczna, tylko bardziej rozstrzelona.

To rozróżnienie ma praktyczne konsekwencje, nie akademickie. Błąd losowy uśrednia się w skali tygodnia — dlatego planowanie tygodniowe działa nawet wtedy, gdy pojedynczy dzień zawodzi. Błąd systematyczny nie uśrednia się nigdy i to za nim warto gonić.

## Dlaczego porównywanie tego z liczbami dostawców to pułapka

W branży spotkasz deklaracje dokładności w przedziale 5-15%. Większość z nich mierzy coś łatwiejszego niż Twój dach.

Prognoza irradiancji jest łatwiejsza od prognozy produkcji, bo kończy się przed najbardziej upierdliwą częścią: kątem paneli, punktem ścinania falownika, zacienieniem, współczynnikiem temperaturowym. Agregat całej floty jest łatwiejszy od pojedynczej instalacji, bo błędy na stu dachach wzajemnie się znoszą — tak po prostu działa uśrednianie i podkręca ono wynik naprawdę mocno. A dokładność podawana wyłącznie dla dni bezchmurnych to jeszcze inna deklaracja.

Nasza to trudny wariant pomiaru: jeden dach, jeden dzień, realne kilowatogodziny. Przy porównywaniu jedyne pytanie warte zadania brzmi: co dokładnie zmierzono?

## Część, którą możesz sprawdzić sam

Wszystko powyżej niewiele znaczy, jeśli nie da się tego zweryfikować, więc oto metoda — ta sama, której używamy wewnętrznie.

1. **Weź co najmniej cztery tygodnie dni.** Przy krótszym okresie mierzysz pogodę, a nie dokładność. Jeden nieudany dzień nie dowodzi niczego w żadną stronę.
2. **Dla każdego dnia policz |prognoza − produkcja| ÷ produkcja.** To dzienny bezwzględny błąd procentowy. Z tych wartości weź medianę, nie średnią — inaczej jeden dzień z burzą zdominuje cały wynik.
3. **Oddziel dni pogodne od pochmurnych**, zanim cokolwiek uśrednisz. Wymieszane dają liczbę, która nie opisuje ani jednych, ani drugich, i jest to najczęstszy błąd w takich porównaniach.
4. **Kierunek sprawdź osobno.** Uśrednij prognoza ÷ produkcja po dniach pogodnych. Wynik blisko 1,0 oznacza, że moc instalacji jest wpisana poprawnie. Konsekwentnie w okolicach 0,8 albo 1,2 oznacza, że nie jest — i żaden model prognostyczny tego za Ciebie nie naprawi.

Punkt czwarty jest źródłem większości rozczarowujących wyników. Stałe przesunięcie to problem konfiguracji przebrany za problem prognozy i warto go wykluczyć, zanim oceni się cokolwiek innego.

## Czego spodziewać się po kalibracji

Indygowe słupki na wykresie to surowy model fizyczny, zielone to stan po tym, jak pętla kalibracyjna popatrzy na Twój dach przez dwa tygodnie. Odstęp jest konsekwentny — mniej więcej dwa do trzech punktów w każdym koszyku pogodowym, czyli więcej, niż wynosi różnica między dwoma konkurencyjnymi dostawcami prognoz.

To także powód, dla którego dokładność deklarowana na dzień pierwszy niewiele znaczy. Model, który nigdy nie widział Twojej instalacji, pracuje na zadeklarowanej mocy, kącie i orientacji, a to są przybliżenia prawdziwego dachu z prawdziwym kominem.

## Uczciwe podsumowanie

Dla jednego dachu, na dziennych kilowatogodzinach, przy pełnym przekroju pogody: **mediana dnia mieści się mniej więcej w 10-18% zależnie od zachmurzenia**, bez systematycznego przechyłu w którąkolwiek stronę, przy czym około 8% dni pogodnych i 28% dni mocno zachmurzonych mija się z prognozą o więcej niż 30%.

To wystarczy, żeby zaplanować pranie, ładowanie auta albo pracę pompy ciepła wokół jutrzejszego okna produkcji. Nie wystarczy, żeby handlować energią na podstawie liczby z jednego dnia — a kto twierdzi inaczej o jakiejkolwiek prognozie, ten coś sprzedaje.
