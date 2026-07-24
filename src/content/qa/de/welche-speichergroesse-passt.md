---
title: "Welche Speichergröße passt zu Anlage und Verbrauch?"
description: "Die Speichergröße richtet sich nach dem Abend- und Nachtverbrauch, nicht nach der Modulleistung. Einfache Formel, zwei Beispiele und der häufigste Kauffehler."
lang: de
draft: false
category: "k3"
guide: "speicher-laden-netz-oder-sonne"
translationKey: "qa-battery-size"
seo:
  ogTitle: "Welche Speichergröße für die PV-Anlage? Einfache Regel"
---
Der Speicher wird **nach dem Abend- und Nachtverbrauch dimensioniert, nicht nach der Modulleistung**. Einfache Formel: durchschnittlicher Verbrauch von Sonnenuntergang bis Sonnenaufgang + 20 % Reserve. Für einen typischen Haushalt (3500–5000 kWh/Jahr) ergibt das meist **5–10 kWh**; ein 15–20-kWh-Speicher fährt bei solchem Verbrauch das halbe Jahr Luft spazieren.

## Warum die Modulleistung der falsche Ausgangspunkt ist

Die Aufgabe des Speichers ist, den Mittagsüberschuss in Abend und Nacht zu verschieben — seine sinnvolle Kapazität ist also genau das, was du abends und nachts verbrauchst. Alles darüber arbeitet nur, wenn riesiger Überschuss und riesiger Nachtverbrauch gleichzeitig auftreten — selten. Verkäufer skalieren den Speicher gern mit den Modulen („10 kWp, dann auch 15 kWh"), weil die Marge mit der Kapazität wächst; deine Amortisation wächst nicht mit. Ausnahmen, in denen mehr Kapazität trägt: Wärmepumpe (hoher Winterverbrauch nachts), nächtliches E-Auto-Laden mit dynamischem Tarif, geplanter Verbrauchszuwachs.

## Was du tun kannst

1. **Deinen Abend messen:** Verbrauch 18–7 Uhr über 2–3 Wochen zu verschiedenen Jahreszeiten aus Zähler oder Home Assistant ablesen. Das ist deine Basisgröße.
2. **Einspeisung prüfen:** Der Speicher füllt sich nur mit dem, was du heute einspeist — liegt der Tagesüberschuss oft unter dem Abendverbrauch, wird ein größerer Speicher (außer aus dem Netz) gar nicht voll.
3. **20 % Reserve** für Degradation und Entladetiefe aufschlagen; Wärmepumpe oder E-Auto separat einrechnen.
4. **Auch die Leistung prüfen, nicht nur die Kapazität:** Der Hybridwechselrichter muss den Speicher im Überschuss- oder Billigstromfenster vollladen können (Antwort: nachts oder mit Sonne laden).
5. **Erst dann Angebote vergleichen** — mit der gemessenen kWh-Zahl, nicht mit der aus dem Prospekt.
