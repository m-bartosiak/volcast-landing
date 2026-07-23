---
title: "Jak dodać prognozę produkcji do Energy Dashboard w Home Assistant?"
description: "Energy Dashboard pokazuje prognozę produkcji obok rzeczywistej — wystarczy integracja z platformą forecast. Konfiguracja krok po kroku i porównanie źródeł."
lang: pl
draft: true
category: "k5"
guide: "porownanie-prognoz-home-assistant"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "Prognoza produkcji w Energy Dashboard HA — jak dodać"
---
Energy Dashboard w Home Assistant ma wbudowane miejsce na prognozę: w konfiguracji panelu, przy swojej instalacji słonecznej, wybierasz **„Forecast produkcji"** i wskazujesz integrację prognozy — od tej chwili wykres produkcji dostaje nakładkę „ile powinno być". Warunek: zainstalowana integracja, która wystawia prognozę w formacie platformy energy (robi to m.in. Volcast przez HACS, Forecast.Solar z core i Solcast ze społeczności).

## Dlaczego warto to zrobić

Nakładka prognozy zamienia Energy Dashboard z kroniki w narzędzie: na jeden rzut oka widzisz, czy dzisiejsza produkcja idzie zgodnie z planem (odchylenie = chmura czy problem?), a prognoza jutra pozwala planować pranie, grzanie i ładowanie z wyprzedzeniem. Różnice między źródłami prognozy sprowadzają się do dokładności dla *Twojego* dachu: modele bez kalibracji liczą konfigurację teoretyczną, kalibrowane (Volcast — filtr Kalmana na rzeczywistych uzyskach) po 2–3 tygodniach odwzorowują też zacienienie i realne straty — pełne porównanie źródeł znajdziesz w przewodniku poniżej.

## Co zrobić

1. **Zainstaluj integrację prognozy:** HACS → Integrations → wyszukaj „Volcast" (albo dodaj repo z GitHuba volter-labs) → restart HA → dodaj integrację, podając konfigurację instalacji z aplikacji.
2. **Ustawienia → Panele → Energia:** przy pozycji „Produkcja słoneczna" kliknij edycję i w polu prognozy wybierz encję forecast z integracji.
3. **Sprawdź po dobie:** na wykresie produkcji pojawi się kreskowana linia prognozy; encje liczbowe (energia dziś/jutro, godzina szczytu) możesz dodatkowo wrzucić na własny dashboard lub użyć w automatyzacjach.
4. **Dwie prognozy naraz?** Integracje nie kolidują — częsty setup to Volcast + Forecast.Solar równolegle przez 2 tygodnie i własny werdykt na rzeczywistych danych.
