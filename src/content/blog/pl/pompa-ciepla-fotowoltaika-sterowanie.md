---
title: "Pompa ciepła + fotowoltaika — jak zgrać grzanie z produkcją PV"
description: "Jak przesunąć pracę pompy ciepła na godziny produkcji PV? Bufor CWU, harmonogramy i automatyzacja prognozą — praktyczny przewodnik prosumenta."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "heat-pump"
seo:
  ogTitle: "Pompa ciepła i fotowoltaika — jak sterować, by oszczędzać"
---
Pompa ciepła i fotowoltaika to naturalny duet — ale tylko wtedy, gdy pompa pracuje w godzinach, w których panele produkują. Domyślne ustawienia większości pomp grzeją wodę rano i wieczorem, czyli dokładnie wtedy, kiedy prądu z dachu nie ma. Przestawienie tego harmonogramu to jedna z najprostszych optymalizacji o realnym wpływie na rachunek.

## Zasada: zasobnik CWU to Twój magazyn ciepła

Kilowatogodziny trudno tanio magazynować — ciepło łatwo. Zasobnik 200–300 l podgrzany do wyższej temperatury w południe trzyma ciepłą wodę do rana. Strategia jest więc prosta: **w godzinach nadwyżki PV pompa „przeładowuje" zasobnik, a poza nimi tylko podtrzymuje**.

W praktyce: zadana CWU 46–48°C przez większość doby, a w oknie produkcji (np. 11:00–15:00) podniesiona do 55–60°C. Wieczorna kąpiel idzie z ciepła zgromadzonego słońcem.

## Trzy poziomy wdrożenia

**Poziom 1 — harmonogram w sterowniku.** Każda pompa ma programy czasowe: ustaw wyższą temperaturę CWU w stałym oknie południowym. Zero kosztów, działa od dziś. Wada: okno jest sztywne, a produkcja nie.

**Poziom 2 — SG-Ready.** Większość nowszych pomp ma wejście SG-Ready: zwarcie styków wymusza tryb podwyższonej temperatury. Podłącz je do przekaźnika sterowanego z automatyki domowej — pompa reaguje na sygnał „jest nadwyżka".

**Poziom 3 — sterowanie prognozą.** Tu wchodzi przewaga nad prostą automatyką „od licznika": prognoza wie *z wyprzedzeniem*, czy dziś w ogóle będzie okno nadwyżki i kiedy. W pochmurny dzień pompa nie czeka bez sensu na słońce, tylko grzeje w najtańszej strefie taryfy. W Home Assistant wystarczy sensor prognozy (Volcast wystawia „energia dziś/jutro" i godzinę szczytu przez integrację HACS) plus jedna automatyzacja warunkowa.

## Ogrzewanie budynku — ostrożniej niż CWU

Z centralnym ogrzewaniem gra się trudniej: zimą, gdy pompa zużywa najwięcej, produkcja PV jest najmniejsza. Ale i tu prognoza pomaga: w słoneczne zimowe dni można lekko podnieść temperaturę zadaną (tzw. nadgrzewanie budynku o 1–1,5°C w południe) i „zmagazynować" ciepło w podłodze czy ścianach. Efekt zależy od bezwładności budynku — w dobrze ocieplonym domu z podłogówką działa zaskakująco dobrze.

## Na co uważać

- **Legionella:** jeśli obniżasz bazową temperaturę CWU, zostaw cotygodniowy cykl antybakteryjny (60°C+).
- **Taktowanie:** nie zmuszaj pompy do krótkich, częstych startów wokół progu nadwyżki — lepsze jedno dłuższe okno niż dziesięć zrywów.
- **COP a temperatura:** grzanie CWU do 60°C obniża COP; rachunek i tak wychodzi na plus, bo prąd jest „darmowy", ale nie przesadzaj powyżej potrzeb.

## FAQ

**Czy każdą pompę ciepła da się sprząc z fotowoltaiką?**
Harmonogramem — każdą. SG-Ready — większość produkowanych po ~2013 r. Pełną automatyzacją prognozą — każdą, którą da się wpiąć w Home Assistant (natywnie, przez Modbus lub sterowanie stycznikiem grzałki).

**Ile można oszczędzić?**
Zależnie od profilu zużycia CWU: przesunięcie 3–5 kWh dziennie z taryfy do nadwyżki to zwykle kilkadziesiąt złotych miesięcznie w sezonie produkcyjnym.

**Co z pompą w bloku / bez PV?**
Ten sam mechanizm działa z taryfą dynamiczną: zamiast okna nadwyżki wybierasz najtańsze godziny cen giełdowych.
