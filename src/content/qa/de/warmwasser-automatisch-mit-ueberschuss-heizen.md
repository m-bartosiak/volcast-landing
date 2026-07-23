---
title: "Wie heize ich Warmwasser automatisch mit PV-Überschuss?"
description: "Zeitschaltung, Heizstab-Regler oder Home Assistant mit Prognose? Drei Automatisierungsstufen für Warmwasser aus Überschuss — Kosten, Stärken, Schwächen."
lang: de
draft: true
category: "k5"
guide: "eigenverbrauch-erhoehen-geraete-timen"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Warmwasser mit PV-Überschuss heizen — 3 Wege"
---
Drei bewährte Wege, vom einfachsten: **(1) Zeitprogramm** — der Heizstab läuft in einem festen Mittagsfenster (Kosten: Schaltuhr oder Smart-Steckdose), **(2) Überschussregler** — ein Gerät leitet den gemessenen Überschuss stufenlos in den Heizstab, **(3) Prognose-Automatisierung** in Home Assistant — geheizt wird nur an Tagen und zu Stunden, an denen der Überschuss wirklich kommt. Das beste Verhältnis von Wirkung zu Kosten liefert meist Weg 3, weil er nicht „blind" heizt.

## Warum „mittags einschalten" allein nicht reicht

Das Zeitprogramm funktioniert im sonnigen Sommer — an wechselhaften Tagen heizt es aber aus dem Netz in der Preisspitze, und an trüben völlig unnötig, statt aufs günstige Zeitfenster zu warten. Der Überschussregler löst die Messseite elegant (heizt wattgenau mit dem Überschuss), weiß aber nichts über die Zukunft: Er startet mit dem ersten Überschuss um 10 Uhr, obwohl die Prognose den Peak für 13 Uhr ansagt — und wartet am trüben Tag auf einen Überschuss, der nie kommt, statt morgens den günstigen Tarif zu nutzen. Die Prognose ergänzt die fehlende Ebene: den Plan.

## Was du tun kannst

1. **Start ohne Investition:** Smart-Steckdose/Schütz + Prognose-Regel („morgen Überschuss ab 11 Uhr" → heizen 11–14 Uhr; „morgen trüb" → heizen im günstigen Fenster). Die Volcast-Sensoren „Energie morgen" und den Peak-Produktions-Indikator gibt es über die HACS-Integration (benötigt Premium für den API-Key).
2. **In Home Assistant** verbindet eine bedingte Automation Prognose, aktuelle Leistung (falls gemessen) und Tariffenster — die „einrichten und vergessen"-Stufe.
3. **Überschussregler ergänzen,** wenn jedes Watt zählt (großer Heizstab, wechselhaftes Wetter) — am stärksten im Duo mit der Prognose-Regel, die entscheidet, *ob heute überhaupt* auf Sonne gewartet wird.
4. **Sicherheit:** den wöchentlichen 60-°C+-Zyklus (Legionellen) und den Gerätethermostat als oberste Instanz beibehalten.
