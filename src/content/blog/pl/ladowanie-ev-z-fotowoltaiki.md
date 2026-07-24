---
title: "Ładowanie auta elektrycznego z fotowoltaiki — kiedy podpiąć samochód"
description: "Jak ładować auto elektryczne nadwyżką z PV? Progi mocy, tryby wallboxa i planowanie ładowania według prognozy godzinowej produkcji."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: false
translationKey: "ev-charging"
seo:
  ogTitle: "Ładowanie EV z fotowoltaiki — kiedy podpiąć samochód"
---
Samochód elektryczny to największy odbiornik energii w domu — jedna sesja ładowania (20–60 kWh) potrafi przekroczyć dobowe zużycie całej reszty gospodarstwa. To jednocześnie największa szansa: każda kilowatogodzina załadowana nadwyżką z dachu zamiast z sieci to realna różnica w koszcie kilometra. Problem w tym, że EV potrzebuje dużej mocy naraz — i tu zaczyna się planowanie.

## Problem progu mocy

Minimalna moc ładowania jednofazowego to ok. 1,4 kW (6 A), typowe ustawienia to 3,7 kW, a trójfazowo 11 kW. Instalacja 5 kWp w kwietniowe południe da 4 kW — ale dom zużywa z tego 0,5–1 kW na bieżąco. Realna nadwyżka to często 2,5–3,5 kW, czyli akurat na granicy sensownego ładowania.

Wniosek: **ładowanie z nadwyżki wymaga wiedzy, kiedy nadwyżka będzie duża i jak długo potrwa** — inaczej połowa sesji idzie z sieci po pełnej cenie.

## Trzy strategie w praktyce

**Strategia „słoneczna sobota".** Najprostsza: auto stoi w weekend, prognoza pokazuje 25+ kWh — podpinasz na 4–5 godzin w oknie szczytu z mocą dobraną do nadwyżki (np. 3,7 kW). Bez żadnego sprzętu poza zwykłym wallboxem z regulacją mocy.

**Strategia mieszana.** W tygodniu auto ładuje się nocą w taniej strefie do poziomu „na dojazdy", a dobicie do pełna czeka na dzień z dużą prognozą. Wieczorny rzut oka na prognozę jutra decyduje, czy ustawiasz nocne ładowanie, czy zostawiasz miejsce w baterii na słońce.

**Strategia automatyczna (PV surplus charging).** Wallbox z trybem nadążnym (sterowany z HA lub własną logiką) moduluje prąd ładowania do bieżącej nadwyżki. Tu przydaje się prognoza o wysokiej rozdzielczości: Volcast przez API (wymaga Premium) wystawia 288 punktów 5-minutowych na dobę, więc automatyka wie, czy chmura za 20 minut to chwilowy cień, czy koniec okna — i nie przerywa sesji bez potrzeby.

## Prosty rachunek

Przy cenie prądu z sieci ~1 zł/kWh i wartości oddanej nadwyżki ~0,3–0,4 zł/kWh, każde 10 kWh załadowane słońcem zamiast z sieci „zarabia" ok. 6–7 zł. Przy 1000 km miesięcznie (ok. 170 kWh) i połowie ładowań z nadwyżki to rząd 50–60 zł miesięcznie — plus satysfakcja jazdy na własnym prądzie.

## FAQ

**Czy mogę ładować EV ze zwykłego gniazdka nadwyżką?**
Tak — „kabel awaryjny" (2,3 kW) dobrze wpasowuje się w umiarkowane nadwyżki. To wolno, ale przy aucie stojącym cały dzień pod domem bywa najskuteczniejszą metodą konsumpcji południowego garbu produkcji.

**Co jest lepsze: ładować auto czy magazyn domowy?**
Jeśli auto i tak musisz naładować — auto: unika podwójnej konwersji i cykli magazynu. Magazyn wygrywa, gdy auta nie ma w domu w godzinach produkcji.

**Ile mocy zostaje mi na ładowanie?**
Nadwyżka = bieżąca produkcja − zużycie domu. Sprawdzisz to na liczniku dwukierunkowym lub w Energy Dashboard; prognoza godzinowa mówi, jak to będzie wyglądać jutro.
