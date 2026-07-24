---
title: "Dynamischer Stromtarif mit PV — lohnt sich Tibber & Co. für Anlagenbesitzer?"
description: "Börsenpreise, Grundgebühren, Einspeisung: Für wen sich ein dynamischer Tarif mit PV und Speicher rechnet — mit einem realen Tagesbeispiel."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: false
translationKey: "dynamic-tariff"
seo:
  ogTitle: "Dynamischer Stromtarif mit PV-Anlage — lohnt sich das?"
---
Bei einem dynamischen Stromtarif zahlst du den stündlichen Börsenpreis plus Netzentgelte, Abgaben und die Marge des Anbieters (Tibber, Rabot, Ostrom und andere). Die Preise schwanken innerhalb eines Tages um ein Mehrfaches — sonnige Mittage sind oft spottbillig oder negativ, Winterabende teuer. Für den Durchschnittshaushalt ein Glücksspiel; für PV-Besitzer mit flexiblem Verbrauch oder Speicher ein Werkzeug. Ich schreibe das als jemand, der seit Jahren auf einem dynamischen Tarif lebt.

## Wie es praktisch funktioniert

Abgerechnet wird nach den Day-Ahead-Börsenpreisen — und die stehen **schon am Vortag ab Nachmittag fest**. Das ist der unterschätzte Kern des Modells: Du kannst jeden Abend die komplette nächste Tagesplanung machen. Günstig sind typischerweise Nacht und sonnige Mittage, teuer die Rampen morgens (7–9 Uhr) und abends (18–21 Uhr).

## Für wen es sich rechnet

**Es lohnt sich, wenn mindestens eins zutrifft:** Du hast PV (die eigene Produktion deckt die Mittagsstunden ohnehin), du kannst große Lasten verschieben (Warmwasser, Wäsche, Wallbox), du hast einen Speicher (Arbitrage: billig laden, teuer entladen), du heizt mit Wärmepumpe und Puffer.

**Es lohnt sich nicht, wenn:** dein Verbrauch fest in den Preisspitzen liegt, dir eine planbare Rechnung über alles geht, oder dich schon eine Minute Tagesplanung nervt.

## Ein realer Tag auf dem dynamischen Tarif

Sonniger Tag: nachts lädt, was morgens fertig sein muss (Billigfenster); tagsüber lebt das Haus von der eigenen Produktion — Warmwasser, Spülmaschine und Wallbox liegen im Produktions-Peak; in der teuren Abendrampe läuft fast nichts mehr, weil alles Wichtige erledigt ist. Trüber Tag: umgekehrt geplant — die großen Lasten wandern in die günstigsten Tarifstunden.

Entscheidend ist die Kombination zweier Informationen: **Preise für morgen** (bekannt) und **Produktion für morgen** (prognostiziert). Erst zusammen sagen sie, ob der Heizstab um 13 Uhr mit Sonne oder um 3 Uhr mit Billigstrom laufen soll. Genau diese Verknüpfung automatisiert die Werkzeugklasse EMS — ich baue sie mir bislang halbautomatisch in Home Assistant mit den Volcast-Prognosesensoren.

## Die Risiken ehrlich benannt

Preise können auch explodieren: Eine kalte Dunkelflaute am Abend bedeutet ein Mehrfaches des Durchschnittspreises. Ohne Flexibilität kann der dynamische Tarif *teurer* enden als der Standardtarif. Faustregel: Erst wechseln, wenn du mindestens 30–40 % deines Verbrauchs verschieben kannst — oder ein Speicher die Spitzen für dich glättet.

## FAQ

**Kann ich mit dynamischem Tarif weiter einspeisen?**
Ja — die Einspeisevergütung läuft unabhängig vom Bezugstarif weiter; einige Anbieter bieten zusätzlich börsenbasierte Vergütungsmodelle an.

**Woher kenne ich die Preise für morgen?**
Aus der App deines Anbieters oder öffentlichen Day-Ahead-Übersichten — täglich ab Nachmittag für den Folgetag.

**Was passiert bei negativen Preisen?**
Beziehen wird dann faktisch belohnt — die ideale Stunde für Speicherladung und Großverbraucher. Details im Artikel über [negative Strompreise →](/blog/de/negative-strompreise-pv).
