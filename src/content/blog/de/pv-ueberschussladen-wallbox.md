---
title: "PV-Überschussladen — das E-Auto mit Sonnenstrom laden"
description: "So lädst du dein E-Auto mit PV-Überschuss: Leistungsschwellen, Wallbox-Modi und Ladeplanung nach stündlicher Ertragsprognose — praktisch erklärt."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "ev-charging"
seo:
  ogTitle: "PV-Überschussladen — E-Auto mit Solarstrom laden"
---
Das E-Auto ist der größte Verbraucher im Haushalt — eine Ladung (20–60 kWh) übersteigt oft den Tagesverbrauch des restlichen Hauses. Genau deshalb ist es der größte Hebel: Jede kWh, die aus dem Überschuss statt aus dem Netz kommt, spart die volle Differenz zwischen ~8 ct Einspeisevergütung und 30–40 ct Netzpreis. Der Haken: Ein Auto lädt nicht mit „ein bisschen" — und da beginnt die Planung.

## Das Schwellenproblem

Einphasig lädt ein E-Auto minimal mit ca. 1,4 kW (6 A), üblich sind 3,7 kW, dreiphasig 11 kW. Eine 8-kWp-Anlage liefert im April-Mittag vielleicht 6 kW — davon zieht das Haus 0,5–1 kW Grundlast. Der reale Überschuss liegt oft bei 3–5 kW: genug zum Laden, aber nur, wenn du das Fenster triffst. Wer blind um 17 Uhr ansteckt, lädt Netzstrom.

## Drei Strategien

**„Sonniger Samstag".** Die einfachste: Auto steht am Wochenende, die Prognose zeigt 30+ kWh — anstecken im Prognose-Peak, Ladeleistung an den erwarteten Überschuss angepasst (z. B. 3,7 kW für 4–5 Stunden). Braucht nichts außer einer Wallbox mit einstellbarer Leistung.

**Mischstrategie.** Unter der Woche lädt das Auto nachts im günstigen Tariffenster nur „bis zur Pendelreichweite" — das Vollmachen wartet auf den nächsten starken PV-Tag. Der abendliche Blick auf die Morgen-Prognose entscheidet, wie viel Platz du im Akku für die Sonne lässt.

**Automatisches Überschussladen.** Die Königsklasse: Eine Wallbox im PV-Modus (nativ oder über Home Assistant / EVCC gesteuert) moduliert den Ladestrom laufend mit dem Überschuss. Hier zahlt sich hohe Prognoseauflösung aus: Volcast liefert über die API 288 5-Minuten-Werte pro Tag — die Automatik weiß, ob die Wolke in 20 Minuten ein kurzer Schatten oder das Ende des Fensters ist, und bricht die Session nicht unnötig ab.

## Die Rechnung

10 kWh mit Sonne statt Netz geladen ≈ 2,50–3 € gespart (Differenz Netzpreis minus entgangene Vergütung). Bei 1.000 km/Monat (~170 kWh) und der Hälfte der Ladungen aus Überschuss: **25–40 € monatlich** — im Sommerhalbjahr eher mehr. Dazu kommt der nicht bezifferbare Teil: Pendeln mit selbst geerntetem Strom fühlt sich einfach richtig an.

## FAQ

**Reicht die normale Steckdose fürs Überschussladen?**
Der Notlader (2,3 kW) passt sogar besonders gut zu moderaten Überschüssen — langsam, aber bei einem Auto, das tagsüber zu Hause steht, oft die effektivste Methode, den Mittagsbuckel zu verwerten.

**Auto laden oder Heimspeicher füllen — was zuerst?**
Wenn das Auto ohnehin geladen werden muss: das Auto. Es vermeidet Doppel-Umwandlung und Speicherzyklen. Der Heimspeicher gewinnt, wenn das Auto tagsüber nicht da ist.

**Ab welchem Überschuss lohnt der Ladestart?**
Einphasig ab ~1,4 kW dauerhaftem Überschuss; sinnvoll planbar ab ~3 kW. Die Stundenprognose zeigt dir am Vorabend, ob und wann dieses Fenster morgen existiert.
