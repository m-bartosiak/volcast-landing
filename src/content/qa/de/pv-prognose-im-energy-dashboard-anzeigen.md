---
title: "Wie bekomme ich die Ertragsprognose ins Energy Dashboard von Home Assistant?"
description: "Das Energy Dashboard zeigt die Prognose neben der realen Produktion — eine Forecast-Integration genügt. Einrichtung Schritt für Schritt und Quellenvergleich."
lang: de
draft: true
category: "k5"
guide: "pv-prognose-home-assistant-vergleich"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "PV-Prognose im HA Energy Dashboard — so geht's"
---
Das Energy Dashboard hat einen eingebauten Platz für die Prognose: In der Panel-Konfiguration wählst du bei deiner Solaranlage **„Ertragsprognose"** und die passende Integration — ab dann bekommt die Produktionskurve eine „Soll"-Überlagerung. Voraussetzung ist eine Integration, die die Prognose im Format der Energy-Plattform liefert (das tun u. a. Volcast über HACS, Forecast.Solar aus dem Core und Solcast aus der Community).

## Warum sich das lohnt

Die Prognose-Überlagerung macht aus dem Energy Dashboard ein Werkzeug: Auf einen Blick siehst du, ob die heutige Produktion im Plan liegt (Abweichung = Wolke oder Problem?), und die Morgen-Prognose erlaubt, Waschen, Heizen und Laden im Voraus zu planen. Die Quellen unterscheiden sich vor allem in der Genauigkeit für *dein* Dach: Unkalibrierte Modelle rechnen die theoretische Konfiguration, kalibrierte (Volcast — Kalman-Filter auf deinen realen Erträgen) bilden nach 2–3 Wochen auch Verschattung und reale Verluste ab — den vollständigen Quellenvergleich findest du im Guide unten.

## Was du tun kannst

1. **Prognose-Integration installieren:** HACS → Integrationen → „Volcast" suchen (oder das Repo von volter-labs hinzufügen) → HA neu starten → Integration einrichten und die Anlagenkonfiguration aus der App übernehmen (die Volcast-Integration benötigt Premium für den API-Key).
2. **Einstellungen → Dashboards → Energie:** bei „Solarproduktion" auf Bearbeiten und im Prognosefeld die Forecast-Entität der Integration wählen.
3. **Nach einem Tag prüfen:** Auf der Produktionskurve erscheint die gestrichelte Prognoselinie; die Zahlen-Entitäten (Energie heute/morgen, Peak-Produktions-Indikator) kannst du zusätzlich auf ein eigenes Dashboard legen oder in Automationen nutzen.
4. **Zwei Prognosen parallel?** Integrationen kollidieren nicht — ein beliebtes Setup ist Volcast + Forecast.Solar für 2 Wochen im Direktvergleich auf den eigenen Daten.
