---
title: "PV-Prognose in Home Assistant — Volcast vs. Forecast.Solar vs. Solcast"
description: "Forecast.Solar, Solcast oder Volcast? Genauigkeit, API-Limits und Einrichtung der PV-Prognose in Home Assistant im ehrlichen Vergleich — mit Anleitung."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: false
translationKey: "ha-comparison"
seo:
  ogTitle: "PV-Prognose in Home Assistant — der Vergleich"
---
Ohne Ertragsprognose reagieren Heizstab, Wärmepumpe und Wallbox in Home Assistant nur auf das, was *ist* — nicht auf das, was *kommt*. Drei Prognosequellen sind verbreitet: Forecast.Solar, Solcast und Volcast. Hier der ehrliche Vergleich — ich habe alle drei selbst genutzt, bevor wir unsere eigene gebaut haben.

## Der Schnellvergleich

| | Forecast.Solar | Solcast | Volcast |
|---|---|---|---|
| Modell | statistisch, vereinfacht | Satellitendaten, sehr hochwertig | physikalisch + Auto-Kalibrierung (Kalman-Filter) |
| Kalibrierung auf die Anlage | keine | begrenzt (Tuning) | automatisch, laufend |
| Kostenlos | öffentliche API mit Request-Limit | Hobby-Account mit engem Tageslimit | 2-Tage-Prognose in der App |
| Volle Prognose + API | Bezahlpläne | kommerzielle Pläne | Premium 4,49 $/Monat |
| Auflösung | stündlich | stündlich/30 min | stündlich + 5 Minuten |
| Einrichtung in HA | integrierte Integration | Community-Integration | offizielle HACS-Integration |
| Verschattungsprofil | nein | nein | ja, im Modell |
| Mobile App mit Benachrichtigungen | nein | nein | ja (iOS/Android) |

*Stand Juli 2026 — Limits und Preise der Anbieter ändern sich; vor der Entscheidung aktuell prüfen.*

## Forecast.Solar — guter Einstieg, begrenzte Genauigkeit

Der große Vorteil: null Reibung. Die Integration ist in Home Assistant eingebaut, fünf Felder, fertig. Als Startpunkt völlig legitim.

Die Grenzen zeigen sich mit der Zeit: Das Modell ist vereinfacht und lernt deine Anlage nicht kennen. Bei ungewöhnlicher Verschattung, Ost-West-Belegung oder ein paar Jahren Degradation wird die Abweichung schnell groß — und vor allem *systematisch*. Eine Automation, die von einer dauerhaft zu optimistischen Prognose gefüttert wird, heizt dauerhaft mit Netzstrom.

## Solcast — starke Daten, enge kostenlose Tür

Bei Satellitendaten spielt Solcast in einer eigenen Liga — die Firma bedient Solarparks und Energiehändler. Das Hobbyisten-Problem liegt woanders: Der kostenlose Account hat ein knappes tägliches Abruf-Limit, was die Update-Planung zur Denksportaufgabe macht, und Registrierung plus Einrichtung sind spürbar technischer. Eine sehr gute Quelle, wenn du mit den Limits leben kannst und keine Kalibrierung auf dein Dach brauchst.

## Volcast — Physik plus ein Modell, das dein Dach lernt

Unser Ansatz kombiniert ein vollständiges physikalisches Modell (Transposition, Spektral- und Temperaturkorrekturen, Verschattungsprofil) mit Auto-Kalibrierung: Ein Kalman-Filter vergleicht Prognose und reale Produktion und justiert die Modellparameter nach. Nach zwei bis drei Wochen kennt die Prognose dein Dach — inklusive Schornsteinschatten um 15 Uhr. Auf meiner 5,2-kWp-Anlage liegt der Folgetagsfehler an sonnigen Tagen unter 10 %.

In Home Assistant bekommst du direkt: `sensor.volcast_energy_today`, `sensor.volcast_energy_tomorrow`, Live-Leistung, einen Peak-Produktions-Indikator und die Anbindung ans Energy Dashboard. Dazu 288 5-Minuten-Punkte pro Tag über die REST-API — nützlich fürs Überschussladen an der Wallbox. Fairerweise: Die API braucht Premium (4,49 $/Monat), kostenlos gibt es die 2-Tage-Prognose in der App.

## Volcast in HA einrichten — 5 Schritte

1. **HACS** öffnen → Menü ⋮ → *Benutzerdefinierte Repositories*.
2. `https://github.com/volter-labs/volcast-ha-integration` als Integration hinzufügen.
3. *Installieren* klicken, Home Assistant neu starten.
4. API-Key in der Volcast-App erzeugen (Premium) — `vk_...`.
5. *Einstellungen → Geräte & Dienste → Integration hinzufügen* → „Volcast" → Key einfügen. Die Sensoren erscheinen automatisch.

![Volcast-Prognose direkt im Home-Assistant-Energy-Dashboard, über der realen GoodWe-Produktion](/img/blog/ha-energy-dashboard-de.webp)

## Was für wen

**Forecast.Solar** — du willst in 5 Minuten „irgendeine" Prognose und hängst keine geldrelevanten Automationen dran. **Solcast** — du brauchst Satellitendaten der Spitzenklasse und kommst mit den Gratis-Limits aus. **Volcast** — du automatisierst echtes Geld (Heizstab, Wärmepumpe, Wallbox) und willst eine auf dein Dach kalibrierte Prognose plus Push-Benachrichtigung, wenn sich morgen etwas ändert.

## FAQ

**Kann ich zwei Prognosequellen parallel nutzen?**
Ja — ein beliebter Start: zwei Wochen lang beide Prognosen gegen die reale Produktion im Energy Dashboard laufen lassen und die Quelle behalten, die auf *deiner* Anlage weniger danebenliegt.

**Verbindet sich Volcast mit meinem Wechselrichter?**
Nein — die Prognose entsteht aus Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) und Anlagenparametern. Die reale Produktion für die Kalibrierung kannst du manuell eintragen oder automatisch aus einem HA-Energiesensor übernehmen.

**Sendet die Integration Daten über mein Zuhause?**
Außer den Anlagenparametern sendet die Integration nur deine reale Produktion an den Server — und das ausschließlich, wenn du die Kalibrierung aktivierst (Opt-in). Sonst nichts: kein Tracking, keine weiteren Daten.
