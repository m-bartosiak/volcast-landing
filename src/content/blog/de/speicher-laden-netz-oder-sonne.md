---
title: "Speicher laden — Netz oder Sonne? Arbitrage mit dynamischen Tarifen erklärt"
description: "Billig nachts laden, mittags Sonne speichern? Wann Netzladung des Heimspeichers sinnvoll ist — Regeln, Rechenbeispiele und die Rolle der Prognose."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "battery"
seo:
  ogTitle: "Speicher mit Netzstrom laden — wann sich Arbitrage lohnt"
---
Die Standardlogik des Heimspeichers ist simpel: mittags mit PV-Überschuss laden, abends entladen. Für die meisten Tage reicht das. Mit einem dynamischen Tarif kommt aber ein zweites Spiel dazu — Preisarbitrage: billigen Netzstrom einlagern und in teuren Stunden verbrauchen. Die Kunst liegt darin zu wissen, welches Spiel heute dran ist. Die Antwort steckt in zwei Prognosen: den Preisen (am Vortag bekannt) und der Produktion (prognostiziert).

## Grundregel: die Sonne hat Vorfahrt

Eigener Dachstrom ist „gratis" — jede gespeicherte PV-kWh spart abends den vollen Bezugspreis. Wenn die Prognose sagt, dass der morgige Überschuss den Speicher füllt: **nachts nicht aus dem Netz laden.** Sonst ist der Speicher morgens voll mit Billigstrom, und der Mittagsüberschuss geht für ein paar Cent ins Netz. Das ist der häufigste Anfängerfehler beim Arbitrieren.

## Wann Netzladung sinnvoll ist

**Szenario 1: trüber Morgen + teurer Abend.** PV-Prognose niedrig (Speicher wird nicht solar voll), Abendpreise hoch — nachts im Preistal genau so viel nachladen, wie die Abendrampe braucht. Gewinn = Preisdifferenz minus Wirkungsgradverluste (~10–15 % round-trip).

**Szenario 2: negative oder Null-Preise mittags.** An sonnigen Wochenenden fällt der Börsenpreis auf oder unter null, während die eigene Produktion die Ladeleistung nicht ausreizt — das Auffüllen aus dem Netz kostet dann Centbeträge oder bringt sogar welche.

**Szenario 3: angekündigte Preisspitze.** Kalte Dunkelflaute mit Extrempreisen am Abend im Day-Ahead sichtbar — mit vollem Speicher in den Abend gehen, egal woher die Ladung kam.

## Der Abend-Algorithmus in fünf Schritten

1. Day-Ahead-Preise für morgen ansehen (ab Nachmittag verfügbar).
2. Produktionsprognose für morgen ansehen.
3. Prognostizierter Überschuss ≥ Speicherkapazität → nichts tun, die Sonne regelt das.
4. Sonst: Defizit ausrechnen und die Nachladung in die billigsten Nachtstunden legen.
5. Die Abendspitze immer aus dem Speicher decken, nie aus dem Netz.

Das lässt sich in zwei Minuten pro Abend von Hand erledigen — und sollte perspektivisch von selbst laufen: Genau diese Schleife aus Preisen, Prognose und Wechselrichter-Steuerung ist die Kernaufgabe eines Heim-EMS.

## Was man beim Arbitrieren nicht vergessen darf

Round-trip-Verluste fressen 10–15 % jeder „gedrehten" kWh — Arbitrage lohnt erst ab deutlicher Preisdifferenz (als Faustregel: 25–30 % nach Verlusten). Zyklen kosten Lebensdauer, wobei LiFePO4 mit mehreren tausend Zyklen gutmütiger ist als sein Ruf. Und: Prüfe die Ladeleistung deines Systems — das nächtliche Preistal dauert nur wenige Stunden, in denen die geplante Menge auch reinpassen muss.

## FAQ

**Darf mein Speicher überhaupt aus dem Netz laden?**
Technisch können es die meisten Hybridsysteme; ob es aktiviert ist, hängt von Wechselrichter-Einstellung und ggf. Vergütungskonstellation ab — beim Installateur oder Anbieter prüfen.

**Ab welcher Preisdifferenz lohnt es sich?**
Nach Verlusten: ab etwa 25–30 % zwischen Lade- und Entladestunde. Ein typischer Tag auf dem dynamischen Tarif bietet deutlich mehr.

**Muss ich das dauerhaft manuell machen?**
Heute weitgehend ja (oder halbautomatisch in Home Assistant). Die Automatisierung genau dieser Schleife ist der Kern unseres nächsten Produkts bei VolterLabs.
