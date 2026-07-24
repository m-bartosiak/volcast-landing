---
title: "Volcast vs Forecast.Solar vs Solcast — uczciwe porównanie prognoz PV"
description: "Trzy najpopularniejsze źródła prognozy produkcji PV porównane uczciwie: dokładność, kalibracja, aplikacja, limity darmowych planów i ceny."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: false
translationKey: "brand-comparison"
seo:
  ogTitle: "Volcast vs Forecast.Solar vs Solcast — porównanie"
---
Piszemy to porównanie jako twórcy jednego z trzech porównywanych narzędzi — więc zacznijmy od deklaracji: będzie uczciwie, z tabelą, w której nie wszystkie rubryki wygrywamy. Forecast.Solar i Solcast to solidne projekty, z których sami korzystaliśmy, zanim zbudowaliśmy własny silnik. Różnice między całą trójką sprowadzają się do trzech pytań: *dla kogo*, *jak dokładnie* i *w jakiej formie*.

## Trzy narzędzia, trzy filozofie

**Forecast.Solar** — prognoza „dla majsterkowiczów": darmowe API, proste parametry (lokalizacja, azymut, kąt, moc), ogromna popularność w społeczności Home Assistant. Model bazuje na danych pogodowych bez kalibracji do konkretnej instalacji; darmowy plan ma limity zapytań i rozdzielczość godzinową.

**Solcast** — klasa komercyjna: satelitarne dane irradiancji o wysokiej jakości, wykorzystywane przez przemysł energetyczny. Dla hobbystów dostępny plan domowy z limitem zapytań na dobę. Kalibracja do instalacji istnieje (tuning na podstawie przesyłanych danych), ale sercem produktu jest API — aplikacji mobilnej dla prosumenta brak.

**Volcast** — silnik fizyczny na danych z modeli pogodowych (ensemble NWP) plus automatyczna kalibracja filtrem Kalmana do rzeczywistej produkcji Twojej instalacji, opakowane w aplikację mobilną (iOS/Android, 13 języków) z powiadomieniami — oraz integrację HACS i API w planie Premium. Filozofia: prognoza ma być narzędziem codziennych decyzji, nie surowym feedem danych.

## Tabela porównawcza

| | Volcast | Forecast.Solar | Solcast |
|---|---|---|---|
| Aplikacja mobilna | tak, iOS + Android | nie | nie |
| Darmowy plan | tak, prognoza 2 dni | tak, z limitami API | plan hobbystyczny z limitem dobowym |
| Kalibracja do instalacji | automatyczna (Kalman) | brak | częściowa (tuning) |
| Rozdzielczość | do 5 minut | godzinowa | do 5–30 minut |
| Home Assistant | oficjalna integracja HACS | integracja core HA | integracja społecznościowa |
| Powiadomienia o nadwyżce | tak | nie | nie |
| Wykrywanie curtailmentu | tak | nie | nie |
| Cena dla prosumenta | 0 zł / Premium 4,49 USD mies. | 0 zł / płatne wyższe plany | 0 / plany komercyjne |

> Stan na dzień publikacji — limity i ceny konkurencji zmieniają się; poprawki zgłoś nam, a zaktualizujemy tabelę z datą.

## Co wybrać — szczerze

**Wybierz Forecast.Solar, jeśli:** chcesz darmowej prognozy w Home Assistant „na już", masz prostą instalację bez zacienienia i wystarcza Ci orientacyjna dokładność. To najniższy próg wejścia i zero kosztów.

**Wybierz Solcast, jeśli:** budujesz własne rozwiązanie na API, potrzebujesz przemysłowej jakości danych irradiancji i nie przeszkadza Ci brak aplikacji ani ręczna konfiguracja.

**Wybierz Volcast, jeśli:** chcesz prognozy, która sama uczy się Twojego dachu (zacienienie, degradacja, realne straty), korzystasz z telefonu częściej niż z dashboardu — albo chcesz jednego narzędzia, które działa i w aplikacji, i w Home Assistant. Różnicę robi kalibracja: po 2–3 tygodniach prognoza odzwierciedla *Twoją* instalację, nie modelową.

## Test, który możesz zrobić sam

Nie wierz żadnej tabeli — także naszej. Wszystkie trzy narzędzia mają darmowy start: uruchom dwa lub trzy równolegle na 2 tygodnie i porównaj z rzeczywistą produkcją z falownika. To najuczciwszy benchmark, bo Twój dach, Twoje zacienienie i Twój klimat są jedyną miarą, która się liczy.

## FAQ

**Czy Volcast korzysta z danych Forecast.Solar albo Solcast?**
Nie — mamy własny silnik fizyczny zasilany danymi irradiancji z modeli pogodowych (ensemble NWP), z własną warstwą kalibracji.

**Które narzędzie jest najdokładniejsze?**
W dni słoneczne wszystkie trzy są przyzwoite. Różnice rosną w dni mieszane i przy zacienieniu — tam kalibracja do rzeczywistych uzysków daje Volcastowi przewagę, którą najłatwiej sprawdzić testem równoległym u siebie.

**Czy mogę używać Volcast i Forecast.Solar jednocześnie w Home Assistant?**
Tak, integracje nie gryzą się — częsty setup na czas własnego benchmarku.
