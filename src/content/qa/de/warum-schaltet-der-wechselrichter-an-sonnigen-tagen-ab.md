---
title: "Warum schaltet der Wechselrichter an sonnigen Tagen ab?"
description: "Abschaltungen im Produktionspeak sind meist Überspannung im Netz (>253 V), kein Defekt. Woran du es erkennst und was wirklich hilft."
lang: de
draft: true
category: "k1"
guide: "pv-ertragsprognose"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Wechselrichter schaltet an sonnigen Tagen ab — warum?"
---
In den allermeisten Fällen schaltet der Wechselrichter ab, weil **die Netzspannung über die zulässigen 253 V steigt** — und er sich dann normgerecht (VDE-AR-N 4105) vom Netz trennen muss. Das ist kein Defekt deiner Anlage, sondern ein überlastetes Ortsnetz, in das mittags die ganze Nachbarschaft gleichzeitig einspeist.

## Warum das passiert

Jede einspeisende Anlage hebt die Spannung an ihrem Netzpunkt leicht an. Hängen an einem Trafostrang viele PV-Anlagen, steigt die Spannung an sonnigen Mittagen über die Grenze (230 V +10 % = 253 V). Der Wechselrichter überwacht sie permanent, trennt sich bei Überschreitung mit Überspannungsfehler, wartet, verbindet neu — und das Spiel wiederholt sich, teils dutzendfach am Tag. Jede Trennung kostet kWh genau in den ertragreichsten Stunden.

Das Muster ist eindeutig: Abschaltungen an sonnigen Tagen zwischen 11 und 15 Uhr, keine an bewölkten, im Log Fehlercodes wie „Grid Overvoltage".

## Was du tun kannst

1. **Logs exportieren** — Datum, Uhrzeit und gemessene Spannung jeder Abschaltung. Das ist dein Beweismaterial.
2. **Spannung auch abends messen** — liegt sie ohne PV-Einspeisung über der Norm, ist das Netzproblem noch leichter nachweisbar.
3. **Überspannung dem Netzbetreiber melden** (nicht dem Stromanbieter) — wie das wirksam geht, steht in der eigenen Antwort zum Melden von Überspannung.
4. **Installateur auf die P(U)-Kennlinie ansprechen** — sanfte Leistungsreduktion statt harter Abschaltung; Details in der Antwort zur P(U)/Volt-Watt-Kennlinie.
5. **Verluste beziffern:** Der Vergleich der realen Produktion mit der Prognose für deine Anlage zeigt, wie viele kWh durch Abschaltungen fehlen — eine solche Zahl macht deine Beschwerde beim Netzbetreiber deutlich schwerer abzuwimmeln.
