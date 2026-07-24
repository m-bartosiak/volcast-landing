---
title: "Jak ustawić automatykę autokonsumpcji w Home Assistant?"
description: "Sensory produkcji, prognoza i 3 automatyzacje warunkowe — minimalny, działający schemat autokonsumpcji w HA, który nie kłóci falowników."
lang: pl
draft: false
category: "k5"
guide: "porownanie-prognoz-home-assistant"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Automatyka autokonsumpcji w Home Assistant — schemat"
---
Minimalny działający schemat to **trzy warstwy: pomiar (co się dzieje), prognoza (co będzie) i 2–3 automatyzacje warunkowe (co z tym zrobić)** — bez pisania kodu, na standardowych integracjach. Kluczowa zasada przy kilku falownikach/magazynie: HA steruje *odbiornikami* (grzałka, gniazdka, ładowarka), a nie walczy z wewnętrzną logiką falowników.

## Dlaczego ta kolejność

Bez pomiaru automatyzacje działają na ślepo; bez prognozy działają tylko reaktywnie (włączają się, gdy nadwyżka już jest — i wyłączają przy każdej chmurze, męcząc urządzenia). Prognoza pozwala planować: „jutro od 11:00 będzie 3 kW nadwyżki przez 4 godziny" to informacja, z której robi się spokojna, stabilna automatyzacja zamiast nerwowego przełączania. Dwa falowniki „gryzą się" zwykle wtedy, gdy oba próbują zarządzać tym samym magazynem — rozwiązaniem jest jeden nadrzędny priorytet (zwykle hybrydowy z baterią) i HA dokładające zużycie, nie sterujące ładowaniem obu naraz.

## Co zrobić

1. **Pomiar:** zintegruj falowniki (natywna integracja / Modbus TCP / SunSpec) i skonfiguruj Energy Dashboard — samo to pokazuje autokonsumpcję dzień po dniu.
2. **Prognoza:** dodaj sensor prognozy produkcji (integracja Volcast z HACS wystawia energię dziś/jutro, moc bieżącą prognozowaną i wskaźnik szczytu produkcji — wymaga Premium).
3. **Automatyzacja 1 — CWU:** „jeśli prognoza_jutro > X kWh → grzej 11:00–14:00; w przeciwnym razie grzej w taniej strefie".
4. **Automatyzacja 2 — duże AGD** (jeśli sterowalne): opóźniony start w prognozowane okno szczytu.
5. **Automatyzacja 3 — histereza dla mocy bieżącej:** włącz odbiornik przy nadwyżce > próg przez 10 min, wyłącz poniżej progu przez 10 min — bez migotania.
6. **Falowników nie „pogodzisz" w HA** — ustaw ich priorytety w aplikacjach producentów, a HA zostaw rolę dyrygenta odbiorników.
