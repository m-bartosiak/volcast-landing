---
title: "Welche Wallbox lässt sich mit Home Assistant steuern?"
description: "Nicht die Marke entscheidet, sondern die Offenheit: OCPP, lokale API oder EVCC-Support. Was eine Wallbox fürs Überschussladen mit HA können muss."
lang: de
draft: false
category: "k5"
guide: "pv-ueberschussladen-wallbox"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "Wallbox mit Home Assistant steuern — worauf achten"
---
Statt nach einer Marke such nach **offenen Steuerprotokollen**: Eine Wallbox mit **OCPP**, lokaler API oder Unterstützung im Projekt **EVCC** lässt sich mit Home Assistant verbinden und in der Ladeleistung regeln — die Voraussetzung fürs Überschussladen. Beliebte Optionen in der HA-Community sind u. a. openWB, go-e, Easee oder Geräte mit EVCC-Support; die gepflegte Kompatibilitätsliste führt das EVCC-Projekt.

## Warum das Protokoll wichtiger ist als die Marke

Überschussladen braucht genau eine Fähigkeit: **stufenlose Regelung des Ladestroms von außen** (6–16 A je Phase), im Takt der schwankenden Produktion. Auf die Hersteller-App beschränkte Wallboxen mögen gut sein — ohne lokale Steuerschnittstelle kann HA sie höchstens ein-/ausschalten, und Start-Stopp-Betrieb strapaziert Auto und Netzanschluss. OCPP oder lokale API geben volle Kontrolle; EVCC (als HA-Add-on installierbar) liefert die fertige Modus-Logik (Überschuss / Min+Überschuss / Schnell) samt Messwertverarbeitung. Achte auf die Phasen: Bei kleinen Überschüssen ist 1-phasiges Laden (ab ~1,4 kW) oder automatische 1↔3-Phasen-Umschaltung entscheidend. Und mit Blick auf § 14a EnWG: Eine steuerbare Wallbox ist ohnehin die Zukunft — dann lieber eine, die *du* steuerst.

## Was du tun kannst

1. **EVCC-Kompatibilitätsliste** für die Kandidaten prüfen — der schnellste Marktfilter.
2. **Vom Installateur verlangen:** OCPP oder lokale API, Regelung 6–16 A, 1-phasiger Betrieb oder Phasenumschaltung, Zähler in der Wallbox oder Platz für einen separaten.
3. **Die Logik so aufbauen:** EVCC/HA liest Überschuss + Prognosesensor (Volcast über HACS, 288 5-Minuten-Punkte am Tag) → Modus „Überschuss" an Tagen mit gutem Fenster, nächtliches Minimum-Laden an den übrigen.
4. **Den Wolkentest machen:** Eine gute Konfiguration bricht die Session bei 15 Minuten Schatten nicht ab — dafür sind Hysterese und Kurzfrist-Prognose da.
