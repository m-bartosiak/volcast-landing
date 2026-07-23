---
title: "Eigenverbrauch erhöhen — Warmwasser, Waschmaschine & Wallbox nach Sonnenprognose steuern"
description: "Wann Heizstab, Waschmaschine und Wallbox laufen sollten, damit du deinen Solarstrom selbst nutzt — einfache Regel, Beispiele und Automatisierung."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "appliances"
seo:
  ogTitle: "Eigenverbrauch erhöhen — Geräte nach PV-Prognose steuern"
---
Die kurze Antwort: **immer dann, wenn deine Anlage mehr produziert, als das Haus gerade verbraucht** — meist im Fenster zwischen 10 und 15 Uhr. Die genauen Stunden hängen aber von Wetter, Jahreszeit und Ausrichtung ab. Hier zeige ich dir, wie du dieses Fenster für deine Anlage findest, statt zu raten.

## Warum die Uhrzeit so viel ausmacht

Die Rechnung ist in Deutschland brutal einfach: Eingespeister Strom bringt rund 8 Cent pro kWh, bezogener Strom kostet 30–40 Cent. Jede Kilowattstunde, die du direkt vom Dach verbrauchst, ist also etwa das **Drei- bis Vierfache** einer eingespeisten wert. Mit dynamischem Tarif und negativen Börsenpreisen an sonnigen Mittagen wird die Differenz noch größer.

Heizstab, Waschmaschine, Spülmaschine, Trockner und Wallbox sind die größten „verschiebbaren" Verbraucher im Haus. Allein ein 2–3-kW-Heizstab, der 1,5–2 Stunden Warmwasser macht, verbraucht 3–6 kWh am Tag — vom Abend in den Mittag verschoben, macht das über den Monat schnell einen zweistelligen Euro-Betrag aus.

## Regel Nr. 1: nicht die Uhrzeit zählt, sondern der Überschuss

Der beliebte Tipp „zwischen 11 und 14 Uhr einschalten" funktioniert nur so mittel, denn:

- **Im April** hat eine 8-kWp-Südanlage oft schon ab 9 Uhr Überschuss.
- **Im November** hat dieselbe Anlage vielleicht gar keinen — und das Mittagsprogramm spart dann nichts.
- **Ost-West-Anlagen** haben zwei Produktionsbuckel und ein längeres, aber flacheres Überschussfenster.
- **An wechselhaften Tagen** verschiebt sich die Spitze um Stunden oder reicht für den 3-kW-Heizstab schlicht nicht.

Die richtige Frage lautet: *Wie viel bleibt morgen nach der Grundlast übrig — und in welchen Stunden?* Genau das beantwortet eine stündliche Ertragsprognose.

## So mache ich es bei mir (5,2-kWp-Anlage)

Abends ein Blick auf die Prognose für morgen. Drei Szenarien:

**Sonniger Tag, Prognose 25+ kWh.** Heizstab ab 10:30, Waschmaschine um 12, Spülmaschine um 13:30 — alles passt in den Überschuss, eingespeist wird trotzdem noch genug.

**Durchwachsener Tag, 10–15 kWh.** Ich nehme die zwei stärksten Stunden aus der Stundenprognose (z. B. 12–14 Uhr) und lege nur den Heizstab hinein. Die Wäsche wartet auf einen besseren Tag — oder läuft nachts im günstigen Fenster des dynamischen Tarifs.

**Trüber Tag, unter 6 kWh.** Kein Selbstbetrug: Warmwasser läuft dann schlicht in der günstigsten Stunde des Tarifs.

Der Punkt ist: Die Entscheidung dauert abends 30 Sekunden — statt morgens aus dem Fenster zu schauen und Wolken zu deuten. Ich nutze dafür [Volcast](https://volcast.app/de/): Die App zeigt die Stundenprognose für meine konkrete Anlage (Azimut, Neigung, Verschattung), und die abendliche Benachrichtigung mit der Prognose für morgen bewahrt mich vor Fehlplanung, wenn das Wetter umschlägt.

![Stündliche PV-Produktionskurve an einem klaren Tag mit markiertem Überschussfenster](/img/blog/hourly-surplus-de.webp)

## Nächste Stufe: automatisieren statt dran denken

Mit Home Assistant lässt sich das komplett automatisieren: Die Prognose kommt als Sensor ins System, und eine Automation schaltet den Heizstab über eine smarte Steckdose oder ein Schütz ein, sobald die erwartete Produktion der nächsten Stunde über der Schwelle liegt. Ergebnis: Das Warmwasser läuft mit Sonne, ohne dass du etwas tust — und an trüben Tagen automatisch im günstigen Tariffenster.

Volcast hat eine offizielle Home-Assistant-Integration (Installation über HACS, drei Klicks; benötigt Premium für den API-Key) — die Sensoren „Energie heute", „Energie morgen", „Leistung jetzt" und der Peak-Produktions-Indikator erscheinen direkt im Energy Dashboard.

Kein Home Assistant? Dann reichen die App-Benachrichtigungen plus eine einfache Zeitschaltuhr, die du abends stellst.

## Spickzettel

| Gerät | Leistung | Wann einschalten |
|---|---|---|
| Heizstab / Warmwasser | 2–3 kW | Mitte des Überschussfensters; Priorität Nr. 1 — größter und flexibelster Verbraucher |
| Waschmaschine | 0,5–2 kW | Anfang des Fensters; niedrigere Temperatur = kleinere Lastspitze |
| Spülmaschine | 1–2 kW | Nach der Waschmaschine, noch im Fenster; Eco-Programm zieht länger, aber flacher |
| Trockner | 1,5–3 kW | Nur an Tagen mit großem Überschuss |
| Wallbox / E-Auto | 3,7–11 kW | Eigenes Thema — braucht den größten Überschuss (PV-Überschussladen) |

## FAQ

**Lohnt sich Eigenverbrauch wirklich mehr als Einspeisen?**
Fast immer ja: ca. 8 Cent Vergütung gegen 30–40 Cent Bezugspreis. Ausnahme sind seltene Konstellationen mit sehr günstigen dynamischen Tarifstunden bei gleichzeitig hoher Vergütung.

**Wann produziert eine PV-Anlage am meisten?**
Südanlagen typischerweise 11–14 Uhr (Sommerzeit); Ost-West-Anlagen haben zwei Spitzen, etwa 9–11 und 14–16 Uhr. Die tatsächliche Spitze des Tages verrät die Stundenprognose — Bewölkung kann sie deutlich verschieben.

**Alles gleichzeitig mittags einschalten — gute Idee?**
Nur wenn die Summe der Lasten in den Überschuss passt. Übersteigen Heizstab + Waschmaschine + Spülmaschine die aktuelle Produktion, kommt der Rest zum vollen Preis aus dem Netz. Besser: Geräte nacheinander durchs Überschussfenster schicken.
