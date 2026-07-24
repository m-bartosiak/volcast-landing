---
title: "Ładować magazyn w nocy z taniej taryfy czy zostawić miejsce na słońce?"
description: "Zasada jest jedna: decyzję podejmuje jutrzejsza prognoza. Słoneczne jutro — nie ładuj z sieci. Pochmurne — doładuj w dolinie. Prosty algorytm na każdy wieczór."
lang: pl
draft: false
category: "k3"
guide: "magazyn-energii-kiedy-ladowac"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Ładować magazyn nocą czy zostawić na słońce?"
---
Zasada brzmi: **jeśli jutrzejsza prognoza produkcji wystarczy, żeby napełnić magazyn — nie ładuj nocą; jeśli nie wystarczy — doładuj w najtańszych godzinach dokładnie brakującą różnicę.** Sztywne „zawsze ładuję nocą, bo tanio" wypycha darmową południową nadwyżkę do sieci za grosze; sztywne „nigdy nie ładuję z sieci" zostawia Cię z pustym magazynem w pochmurne wieczory.

## Dlaczego to zależy od prognozy, nie od przekonań

Nocne ładowanie i słoneczna nadwyżka konkurują o tę samą pojemność. Magazyn napełniony nocą tanim prądem nie przyjmie jutrzejszej nadwyżki — a nadwyżka jest zawsze tańsza (darmowa) niż nawet najtańsza strefa. Odwrotnie w pochmurny dzień: nadwyżki nie będzie, a wieczorny szczyt trzeba czymś pokryć. Do tego dochodzą straty konwersji ~10–15%, przez które arbitraż „kup w nocy, sprzedaj w dzień" prawie nigdy się nie spina — wartość oddawanej energii jest za niska. Sensowne jest tylko „kup w nocy, **zużyj** w drogim szczycie" — i tylko wtedy, gdy słońce nie załatwi tego za darmo.

## Co zrobić

1. **Wieczorem sprawdź dwie liczby:** prognozę produkcji na jutro (Volcast pokazuje energię jutro i godziny nadwyżki) oraz ceny/strefy taryfy.
2. **Prognoza ≥ pojemność magazynu + dzienne zużycie:** nic nie rób, słońce załatwi temat.
3. **Prognoza niższa:** policz deficyt (pojemność − spodziewana nadwyżka) i ustaw nocne doładowanie tylko na tę wartość, w najtańszej strefie.
4. **Zautomatyzuj po 2 tygodniach ręcznego trybu:** w Home Assistant to jedna automatyzacja warunkowa na sensorze prognozy — od tej pory decyzja podejmuje się sama, codziennie.
5. **Raz w miesiącu porównaj rachunek** ze scenariuszem „bez reguły" — różnica jest najlepszym argumentem, żeby przy niej zostać.
