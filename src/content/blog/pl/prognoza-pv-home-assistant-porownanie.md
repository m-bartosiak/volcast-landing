---
title: "Prognoza PV w Home Assistant — Volcast vs Forecast.Solar vs Solcast"
description: "Forecast.Solar, Solcast czy Volcast? Porównujemy dokładność, limity API i konfigurację prognozy produkcji PV w Home Assistant. Instrukcja krok po kroku."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "ha-comparison"
seo:
  ogTitle: "Prognoza PV w Home Assistant — porównanie integracji"
---
Prognoza produkcji to fundament automatyzacji energetycznych w Home Assistant: bez niej bojler, pompa ciepła czy wallbox reagują na to, co *jest*, zamiast na to, co *będzie*. Do wyboru są trzy popularne źródła prognozy — Forecast.Solar, Solcast i Volcast. Porównuję je uczciwie, bo sam przeszedłem przez wszystkie trzy, zanim zbudowaliśmy własne.

## Szybkie porównanie

| | Forecast.Solar | Solcast | Volcast |
|---|---|---|---|
| Model | statystyczny, uproszczony | satelitarny, wysokiej klasy | fizyczny + autokalibracja (filtr Kalmana) |
| Kalibracja do instalacji | brak | ograniczona (tuning) | automatyczna, ciągła |
| Limity darmowe | publiczne API z limitem zapytań | konto hobbystyczne z dziennym limitem odświeżeń | 2 dni prognozy w aplikacji |
| Pełna prognoza + API | płatne plany | plany komercyjne | Premium $4.49/mies. |
| Rozdzielczość | godzinowa | godzinowa/30 min | godzinowa + 5-minutowa |
| Instalacja w HA | wbudowana integracja | integracja społeczności | oficjalna integracja HACS |
| Profil zacienienia | brak | brak | tak, w modelu |
| Aplikacja mobilna z powiadomieniami | nie | nie | tak (iOS/Android) |

*Stan na lipiec 2026 — limity i cenniki konkurencji potrafią się zmieniać, sprawdź aktualne warunki u źródła.*

## Forecast.Solar — dobry start, sufit dokładności

Największa zaleta: zero tarcia. Integracja jest wbudowana w Home Assistant, konfiguracja to pięć pól i działa. Dla wielu osób to wystarczający punkt wyjścia.

Ograniczenia ujawniają się z czasem: model jest uproszczony i nie uczy się Twojej instalacji — jeśli masz nietypowe zacienienie, instalację wschód–zachód albo panele o kilka lat starsze, rozjazd między prognozą a rzeczywistością bywa spory i *systematyczny*. A automatyzacja karmiona systematycznie zawyżoną prognozą będzie systematycznie grzać wodę z sieci.

## Solcast — mocne dane, wąskie darmowe drzwi

Solcast to klasa sama w sobie pod względem danych satelitarnych — firma obsługuje farmy słoneczne i traderów energii. Problem hobbysty jest inny: darmowe konto ma ciasny dzienny limit odświeżeń API, co wymusza ostrożne planowanie zapytań, a rejestracja i konfiguracja są zauważalnie bardziej techniczne. Świetne źródło, jeśli mieścisz się w limitach i nie potrzebujesz kalibracji do własnego dachu.

## Volcast — fizyka plus uczenie się Twojego dachu

Nasze podejście łączy pełny model fizyczny (transpozycja irradiancji, korekty spektralne i temperaturowe, profil zacienienia) z autokalibracją: filtr Kalmana porównuje prognozę z rzeczywistą produkcją i koryguje parametry modelu. Po 2–3 tygodniach prognoza zna Twój dach — z jego cieniem od komina o 15:00 włącznie. Na mojej instalacji 5,2 kWp błąd dnia następnego w słoneczne dni spada poniżej 10%.

W Home Assistant dostajesz z pudełka: `sensor.volcast_energy_today`, `sensor.volcast_energy_tomorrow`, moc na żywo, wskaźnik szczytu produkcji i wpięcie w Energy Dashboard. Do tego 288 punktów 5-minutowych na dobę przez REST API — przydatne przy sterowaniu wallboxem. Uczciwie: API wymaga planu Premium ($4.49/mies.), a prognoza darmowa obejmuje 2 dni w aplikacji mobilnej.

## Instalacja Volcast w HA — 5 kroków

1. Otwórz **HACS** → menu ⋮ → *Niestandardowe repozytoria*.
2. Dodaj `https://github.com/volter-labs/volcast-ha-integration` jako integrację.
3. Kliknij *Zainstaluj* i zrestartuj Home Assistant.
4. Wygeneruj klucz API w aplikacji Volcast (Premium) — `vk_...`.
5. *Ustawienia → Urządzenia i usługi → Dodaj integrację* → „Volcast" → wklej klucz. Sensory pojawiają się automatycznie.

> [MIEJSCE NA SCREENSHOT: Energy Dashboard z sensorami Volcast + przykładowa automatyzacja grzałki]

## Które rozwiązanie dla kogo

**Forecast.Solar** — chcesz mieć „jakąś" prognozę w 5 minut i nie planujesz na niej automatyzacji krytycznych dla rachunku. **Solcast** — potrzebujesz surowych danych satelitarnych najwyższej klasy i mieścisz się w darmowych limitach. **Volcast** — automatyzujesz realne pieniądze (bojler, pompa ciepła, ładowanie EV) i chcesz prognozy skalibrowanej do własnego dachu, plus wieczornego powiadomienia z prognozą na jutro w telefonie.

## FAQ

**Czy mogę używać dwóch źródeł prognozy jednocześnie?**
Tak — częsta praktyka na start: porównaj przez 2 tygodnie prognozy z rzeczywistą produkcją w Energy Dashboard i zostaw to źródło, które mniej się myli na *Twojej* instalacji.

**Czy Volcast łączy się z moim falownikiem?**
Nie — prognoza powstaje z danych z modeli pogodowych (ensemble NWP) i parametrów instalacji. Rzeczywistą produkcję do kalibracji możesz zapisywać ręcznie albo automatycznie z sensora energii w HA.

**Czy integracja działa bez chmury?**
Prognoza jest liczona w chmurze (dane z modeli pogodowych), a integracja poza parametrami instalacji wysyła tylko Twoją realną produkcję — i to wyłącznie, gdy sam włączysz kalibrację (opcja opt-in). Nic więcej, żadnego trackingu.
