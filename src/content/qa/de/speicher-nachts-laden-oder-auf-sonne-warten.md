---
title: "Speicher nachts mit Billigstrom laden oder Platz für die Sonne lassen?"
description: "Die Regel ist simpel: Die Morgen-Prognose entscheidet. Sonniger Tag angekündigt — nicht aus dem Netz laden. Trüber Tag — im Tal nachladen. Der Abend-Algorithmus."
lang: de
draft: true
category: "k3"
guide: "speicher-laden-netz-oder-sonne"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Speicher nachts laden oder auf die Sonne warten?"
---
Die Regel: **Reicht die morgige Ertragsprognose, um den Speicher zu füllen — nicht nachts laden; reicht sie nicht — in den günstigsten Stunden exakt die fehlende Differenz nachladen.** Ein starres „ich lade immer nachts, ist ja billig" verdrängt den kostenlosen Mittagsüberschuss ins Netz zur Einspeisevergütung; ein starres „nie aus dem Netz" lässt dich an trüben Abenden mit leerem Speicher sitzen.

## Warum die Prognose entscheidet, nicht die Überzeugung

Nachtladung und Sonnenüberschuss konkurrieren um dieselbe Kapazität. Ein nachts mit Billigstrom gefüllter Speicher nimmt den morgigen Überschuss nicht mehr auf — und der Überschuss ist immer billiger (kostenlos) als selbst das günstigste Tarif-Tal. Umgekehrt am trüben Tag: Es kommt kein Überschuss, und die teure Abendspitze muss gedeckt werden. Dazu kommen ~10–15 % Wandlungsverluste, an denen das Modell „nachts kaufen, tags einspeisen" fast immer scheitert — die Einspeisevergütung ist zu niedrig. Sinnvoll ist nur „billig kaufen, **selbst verbrauchen** in der teuren Spitze" — und nur dann, wenn die Sonne das nicht ohnehin gratis erledigt.

## Was du tun kannst

1. **Abends zwei Zahlen prüfen:** die Ertragsprognose für morgen (Volcast zeigt Energie morgen und die Überschussstunden) und die Preise/Zeitfenster deines Tarifs.
2. **Prognose ≥ Speicherkapazität + Tagesverbrauch:** nichts tun, die Sonne übernimmt.
3. **Prognose darunter:** Defizit berechnen (Kapazität − erwarteter Überschuss) und die Nachtladung nur auf diesen Wert im günstigsten Fenster setzen.
4. **Nach 2 Wochen Handbetrieb automatisieren:** In Home Assistant ist das eine bedingte Automation auf dem Prognosesensor — ab dann fällt die Entscheidung jeden Abend von selbst.
5. **Monatlich die Abrechnung** mit dem Szenario „ohne Regel" vergleichen — die Differenz ist das beste Argument, dabei zu bleiben.
