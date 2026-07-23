---
title: "Wie baue ich eine Eigenverbrauchs-Automatik in Home Assistant?"
description: "Sensoren, Prognose und 3 bedingte Automationen — das minimale, funktionierende Eigenverbrauchs-Schema in HA, das sich nicht mit den Wechselrichtern streitet."
lang: de
draft: true
category: "k5"
guide: "pv-prognose-home-assistant-vergleich"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Eigenverbrauchs-Automatik in Home Assistant — Schema"
---
Das minimale funktionierende Schema besteht aus **drei Ebenen: Messung (was passiert), Prognose (was kommt) und 2–3 bedingten Automationen (was daraus folgt)** — ohne eine Zeile Code, auf Standard-Integrationen. Die wichtigste Regel bei mehreren Wechselrichtern/Speicher: HA steuert die *Verbraucher* (Heizstab, Steckdosen, Wallbox) — es kämpft nicht gegen die interne Logik der Wechselrichter.

## Warum diese Reihenfolge

Ohne Messung arbeiten Automationen blind; ohne Prognose nur reaktiv (sie schalten ein, wenn der Überschuss schon da ist — und bei jeder Wolke wieder aus, was die Geräte verschleißt). Die Prognose ermöglicht Planung: „morgen ab 11 Uhr 3 kW Überschuss für 4 Stunden" ergibt eine ruhige, stabile Automation statt nervösen Schaltens. Zwei Wechselrichter „streiten" meist dann, wenn beide denselben Speicher managen wollen — die Lösung ist eine übergeordnete Priorität (in der Regel der Hybrid mit Batterie), während HA nur Verbrauch hinzufügt statt beide Ladelogiken gleichzeitig zu steuern.

## Was du tun kannst

1. **Messung:** Wechselrichter integrieren (native Integration / Modbus TCP / SunSpec) und das Energy Dashboard konfigurieren — allein das zeigt die Eigenverbrauchsquote Tag für Tag.
2. **Prognose:** einen Ertragsprognose-Sensor hinzufügen (die Volcast-Integration aus HACS liefert Energie heute/morgen, prognostizierte Momentanleistung und einen Peak-Produktions-Indikator — API im Premium-Plan).
3. **Automation 1 — Warmwasser:** „wenn Prognose_morgen > X kWh → heizen 11–14 Uhr; sonst im günstigen Tariffenster".
4. **Automation 2 — große Geräte** (falls steuerbar): Startverzögerung ins prognostizierte Peak-Fenster.
5. **Automation 3 — Hysterese auf der Momentanleistung:** einschalten bei Überschuss > Schwelle für 10 min, ausschalten unter Schwelle für 10 min — kein Flattern.
6. **Wechselrichter „versöhnst" du nicht in HA** — Prioritäten in den Hersteller-Apps setzen, HA dirigiert nur die Verbraucher.
