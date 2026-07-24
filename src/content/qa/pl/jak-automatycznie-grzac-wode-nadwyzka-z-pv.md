---
title: "Jak automatycznie grzać wodę nadwyżką z fotowoltaiki?"
description: "Stycznik z harmonogramem, router solarny czy Home Assistant z prognozą? Trzy poziomy automatyzacji grzania CWU nadwyżką — koszty, wady, zalety."
lang: pl
draft: false
category: "k5"
guide: "kiedy-wlaczyc-bojler-pralke-fotowoltaika"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Automatyczne grzanie wody nadwyżką z PV — 3 sposoby"
---
Trzy sprawdzone drogi, od najprostszej: **(1) harmonogram czasowy** — grzałka włączana w stałym oknie południowym (koszt: stycznik z zegarem lub smart-gniazdko), **(2) router solarny** — urządzenie płynnie kierujące nadwyżkę w grzałkę na podstawie pomiaru na liczniku, **(3) automatyzacja prognozą** w Home Assistant — grzanie startuje tylko w dni i godziny, w których nadwyżka faktycznie będzie. Najlepszy stosunek efektu do kosztu daje zwykle wariant 3, bo nie grzeje „w ciemno".

## Dlaczego samo „włącz w południe" nie wystarcza

Harmonogram działa w słoneczne lato, ale w dni mieszane grzeje z sieci w szczycie cen, a w pochmurne — całkiem niepotrzebnie, zamiast poczekać na tanią strefę. Router solarny rozwiązuje to od strony pomiaru (grzeje dokładnie nadwyżką, watt po wacie), lecz nie wie nic o przyszłości: zacznie grzać od pierwszej nadwyżki o 10:00, choć prognoza mówi, że szczyt będzie o 13:00 i lepiej byłoby wtedy zebrać pełną moc — a w pochmurny dzień będzie czekał na nadwyżkę, która nie nadejdzie, zamiast rano skorzystać z taniej taryfy. Prognoza dokłada brakującą warstwę: plan.

## Co zrobić

1. **Start bez inwestycji:** smart-gniazdko/stycznik + reguła z prognozy („jutro nadwyżka od 11:00" → grzej 11:00–14:00; „jutro pochmurno" → grzej w taniej strefie). W Volcast sensory „energia jutro" i wskaźnik szczytu produkcji są dostępne przez integrację HACS (wymaga Premium).
2. **W Home Assistant** jedna automatyzacja warunkowa łączy: prognozę jutra, bieżącą moc (jeśli masz pomiar) i strefę taryfy — to poziom „ustaw i zapomnij".
3. **Router solarny dołóż,** jeśli chcesz wycisnąć watty co do jednego (duża grzałka, zmienna pogoda) — najlepiej działa właśnie w parze z regułą prognozową, która decyduje *czy dziś w ogóle* czekać na słońce.
4. **Bezpieczeństwo:** zostaw cotygodniowy cykl 60°C+ (legionella) i termostat sprzętowy jako nadrzędny.
