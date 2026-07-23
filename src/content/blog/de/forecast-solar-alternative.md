---
title: "Forecast.Solar-Alternative gesucht? Volcast, Solcast & Co. im ehrlichen Vergleich"
description: "Wann Forecast.Solar reicht — und wann sich eine Alternative lohnt: Volcast und Solcast im ehrlichen Vergleich mit Tabelle, Grenzen und Preisen."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "brand-comparison"
seo:
  ogTitle: "Forecast.Solar Alternative — ehrlicher Vergleich"
---
Vorweg die Transparenz: Wir bauen eines der hier verglichenen Werkzeuge. Deshalb gibt es eine Tabelle, in der wir nicht jede Zeile gewinnen — und eine klare Empfehlung, wann du bei Forecast.Solar bleiben solltest. Forecast.Solar ist ein verdientes Community-Projekt, das wir selbst genutzt haben, bevor wir unsere eigene Engine gebaut haben.

## Warum überhaupt eine Alternative suchen?

Die typischen Gründe aus der Home-Assistant-Community: die Prognose passt nicht zur eigenen Anlage (Verschattung, Ost-West-Belegung), die API-Limits des Gratis-Plans stören bei häufigen Abfragen, es fehlt eine Handy-App mit Benachrichtigungen — oder man will Kalibrierung: ein Modell, das aus den realen Erträgen der eigenen Anlage lernt, statt aus Standardannahmen zu rechnen.

## Die drei Kandidaten in Kürze

**Forecast.Solar** — der Community-Standard: kostenloses API, simple Parameter, Core-Integration in Home Assistant. Keine Kalibrierung an die konkrete Anlage, Stundenauflösung, Limits im Gratis-Plan. Für einfache, unverschattete Anlagen oft völlig ausreichend.

**Solcast** — die Industrie-Option: hochwertige Satelliten-Einstrahlungsdaten, Hobby-Plan mit Tageslimit, Tuning an eigene Daten möglich. Kern ist das API — eine Endnutzer-App gibt es nicht.

**Volcast** — Physik-Engine auf Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) plus automatische Kalman-Kalibrierung an deine reale Produktion, verpackt in eine Handy-App (iOS/Android, 13 Sprachen) mit Push-Benachrichtigungen, dazu offizielle HACS-Integration und API im Premium-Plan (4,49 $/Monat).

## Vergleichstabelle

| | Volcast | Forecast.Solar | Solcast |
|---|---|---|---|
| Handy-App | ja, iOS + Android | nein | nein |
| Gratis-Plan | ja, 2-Tage-Prognose | ja, mit API-Limits | Hobby-Plan mit Tageslimit |
| Kalibrierung an die Anlage | automatisch (Kalman) | keine | teilweise (Tuning) |
| Auflösung | bis 5 Minuten | stündlich | 5–30 Minuten |
| Home Assistant | offizielle HACS-Integration | Core-Integration | Community-Integration |
| Überschuss-Benachrichtigungen | ja | nein | nein |
| Abregelungs-Erkennung | ja | nein | nein |

> Stand: Publikationstag — Limits und Preise der Anbieter ändern sich; Korrekturen nehmen wir dankbar an und aktualisieren mit Datum.

## Ehrliche Empfehlung

**Bleib bei Forecast.Solar, wenn** deine Anlage einfach und unverschattet ist, dir Tagesgenauigkeit reicht und du nur einen Sensor im Energy Dashboard willst. Es kostet nichts und tut, was es soll.

**Nimm Solcast, wenn** du auf dem API eigene Lösungen baust und Industriedaten willst — App und Komfort sind dir egal.

**Nimm Volcast, wenn** deine Anlage Eigenheiten hat (Verschattung, Ost-West, Degradation), du die Prognose auch am Handy mit Benachrichtigungen willst — oder ein Werkzeug für beides: App *und* Home Assistant. Den Unterschied macht die Kalibrierung: Nach 2–3 Wochen bildet die Prognose *deine* Anlage ab, nicht die Modellanlage.

## Der Test, den du selbst machen kannst

Glaub keiner Tabelle — auch unserer nicht. Alle drei sind kostenlos startbar: Lass zwei oder drei zwei Wochen parallel laufen und vergleiche mit den realen Wechselrichter-Erträgen. Dein Dach ist der einzige Benchmark, der zählt.

## FAQ

**Nutzt Volcast Daten von Forecast.Solar oder Solcast?**
Nein — eigene Physik-Engine auf Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble), mit eigener Kalibrierungsschicht.

**Läuft Volcast parallel zu Forecast.Solar in Home Assistant?**
Ja, die Integrationen stören sich nicht — ein übliches Setup für den eigenen Benchmark.

**Was kostet der Umstieg?**
Nichts zum Testen: Gratis-Tier mit 2-Tage-Prognose; Premium (7 Tage, Auto-Kalibrierung, API) kostet 4,49 $/Monat und ist monatlich kündbar.
