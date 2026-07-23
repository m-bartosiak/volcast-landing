---
title: "Jaka ładowarka EV integruje się z Home Assistant?"
description: "Nie marka decyduje, tylko otwartość sterowania: OCPP, lokalne API lub wsparcie EVCC. Czego wymagać od wallboxa pod automatyzację nadwyżką w HA."
lang: pl
draft: true
category: "k5"
guide: "ladowanie-ev-z-fotowoltaiki"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "Ładowarka EV z integracją Home Assistant — co wybrać"
---
Zamiast konkretnej marki szukaj **otwartego protokołu sterowania**: wallbox z **OCPP**, lokalnym API albo wsparciem w projekcie **EVCC** da się spiąć z Home Assistant i sterować mocą ładowania — a to warunek ładowania nadwyżką. Popularne wybory w społeczności HA to m.in. urządzenia klasy openWB/EVCC-kompatybilnej, go-e, Easee czy Zappi (przez integracje społecznościowe); pełną listę wspieranych modeli utrzymuje projekt EVCC.

## Dlaczego protokół bije markę

Ładowanie nadwyżką wymaga jednej zdolności: **płynnej regulacji prądu ładowania z zewnątrz** (6–16 A na fazę), w rytmie zmieniającej się produkcji. Wallboxy zamknięte na aplikację producenta bywają świetne, ale jeśli nie wystawiają sterowania lokalnie, HA może je co najwyżej włączać/wyłączać — a tryb start/stop męczy auto i sieć. OCPP lub lokalne API dają pełną kontrolę; EVCC (instalowalny jako dodatek HA) dokłada gotową logikę trybów (nadwyżka / min+nadwyżka / szybkie) i obsługę pomiaru. Uwaga na fazy: przy małych nadwyżkach kluczowa jest praca 1-fazowa (od ~1,4 kW) lub automatyczne przełączanie 1↔3 fazy.

## Co zrobić

1. **Sprawdź listę kompatybilności EVCC** dla rozważanych modeli — to najszybszy filtr rynku.
2. **Wymagaj od instalatora:** OCPP lub lokalne API, regulacja 6–16 A, praca 1-fazowa lub przełączanie faz, licznik w wallboxie albo miejsce na osobny.
3. **Logikę zbuduj tak:** EVCC/HA czyta nadwyżkę + sensor prognozy (Volcast przez HACS, 288 punktów 5-minutowych dziennie) → tryb „nadwyżka" w dni z dobrym oknem, nocne doładowanie „do minimum" w pozostałe.
4. **Przetestuj chmurę:** dobra konfiguracja nie przerywa sesji przy 15-minutowym cieniu — od tego jest histereza i prognoza krótkoterminowa.
