---
title: "Der Wechselrichter ist kleiner als die Modulleistung — ist das ein Fehler?"
description: "10 kWp Module am 8-kW-Wechselrichter? Überbelegung bis DC/AC ~1,25 ist Planungsstandard, keine Sparmaßnahme. Wo die sinnvolle Grenze liegt."
lang: de
draft: false
category: "k1"
guide: "pv-ertragsprognose"
translationKey: "qa-inverter-undersized"
seo:
  ogTitle: "Wechselrichter kleiner als Module — Fehler oder Absicht?"
---
Nein — **eine Überbelegung der Module gegenüber dem Wechselrichter (DC/AC ~1,1–1,25) ist Planungsstandard**, kein Fehler. Module erreichen ihre Nennleistung praktisch nie gleichzeitig (Temperatur, Einstrahlwinkel, Verschmutzung); ein „passgenauer" Wechselrichter wäre überbezahlt und liefe die meiste Zeit unterhalb seines besten Wirkungsgrads. Die Vernunftgrenze liegt um ~1,3 — darüber werden Clipping-Verluste spürbar.

## Warum so geplant wird

Die Datenblatt-Leistung gilt für Laborbedingungen (STC: 25 °C Zelltemperatur, 1000 W/m²). Real hat die Sommerzelle 60 °C und verliert über zehn Prozent, im Frühjahr stört der Winkel, im Herbst die Bewölkung. Eine 10-kWp-Anlage liegt die überwiegende Zeit des Jahres unter 8 kW — ein 8-kW-Wechselrichter verarbeitet all das und kappt nur kurze Spitzen an den besten kühlen Sonnentagen. Typischer Jahresverlust bei DC/AC 1,25: nur 1–3 % — dafür läuft der Wechselrichter öfter im effizienten Bereich und kostet weniger.

Deutscher Zusatzkontext: Für Anmeldung und manche Grenzwerte zählt häufig die Wechselrichterleistung — mehr Module am selben Gerät sind ein legitimer Weg, den Netzanschluss besser zu nutzen.

## Was du tun kannst

1. **Dein DC/AC-Verhältnis ausrechnen:** Modulleistung ÷ Wechselrichterleistung. 1,0–1,25 = lehrbuchmäßig; 1,25–1,35 = vertretbar bei Ost-West oder Teilverschattung; darüber — Begründung mit Ertragssimulation verlangen.
2. **Im Diagramm prüfen, wie viel real gekappt wird:** flache Spitzen nur an kühlen April/Mai-Mittagen = normal; Kappung von 9 bis 17 Uhr im Sommer = zu viel des Guten.
3. **Spitzen verbrauchen:** In Clipping-Stunden ist zusätzlicher Verbrauch (Heizstab, Laden) faktisch gratis — der Wechselrichter hätte die Energie ohnehin gekappt.
4. **Bei Erweiterung** die ~1,3 im Blick behalten oder für den neuen Strang einen zweiten Wechselrichter/Mikrowechselrichter einplanen.
