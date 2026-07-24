---
title: "Wärmepumpe mit PV-Strom — Warmwasser und Heizung zur Sonnenzeit"
description: "Wie du Warmwasser- und Heizzyklen der Wärmepumpe in die PV-Produktionsspitze legst — SG-Ready, Zeitpläne und Automatisierung per Prognose."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: false
translationKey: "heat-pump"
seo:
  ogTitle: "Wärmepumpe mit PV steuern — Warmwasser zur Sonnenzeit"
---
Wärmepumpe plus PV ist das Traumpaar der Energiewende — aber nur, wenn die Pumpe dann läuft, wenn das Dach liefert. Werkseinstellungen heizen Warmwasser meist morgens und abends: exakt dann, wenn kein Solarstrom da ist. Diese Zyklen zu verschieben ist eine der einfachsten Optimierungen mit spürbarer Wirkung auf die Stromrechnung.

## Das Prinzip: der Speicher ist dein Wärmeakku

Strom zu speichern ist teuer — Wärme fast gratis. Ein 200–300-l-Warmwasserspeicher, mittags auf höhere Temperatur gebracht, hält bis zum Morgen. Die Strategie: **im PV-Überschussfenster „überladen", außerhalb nur halten.** Konkret: Soll-Temperatur 46–48 °C über den Tag, im Produktionsfenster (z. B. 11–15 Uhr) angehoben auf 55–60 °C. Die Abenddusche läuft mit gespeicherter Sonne.

## Drei Ausbaustufen

**Stufe 1 — Zeitprogramm.** Jede Wärmepumpe kann Zeitpläne: erhöhte WW-Temperatur in einem festen Mittagsfenster. Kostet nichts, wirkt sofort. Schwäche: Das Fenster ist starr, die Produktion nicht.

**Stufe 2 — SG-Ready.** Die meisten Pumpen ab ~2013 haben den SG-Ready-Kontakt: geschlossen = Anhebebetrieb. Über ein Relais aus der Hausautomation angesteuert, reagiert die Pumpe auf das Signal „Überschuss vorhanden".

**Stufe 3 — Prognosesteuerung.** Der Vorteil gegenüber reiner Zähler-Logik: Die Prognose weiß *im Voraus*, ob heute überhaupt ein Überschussfenster kommt und wann. An trüben Tagen wartet die Pumpe nicht sinnlos auf Sonne, sondern heizt in der günstigsten Stunde des dynamischen Tarifs. In Home Assistant genügt ein Prognose-Sensor (Volcast liefert „Energie heute/morgen" und einen Peak-Produktions-Indikator über die HACS-Integration; diese benötigt Premium für den API-Key) plus eine bedingte Automation.

## Heizbetrieb — vorsichtiger als Warmwasser

Im Winter, wenn die Pumpe am meisten braucht, liefert PV am wenigsten. Trotzdem hilft die Prognose: An sonnigen Wintertagen die Soll-Raumtemperatur mittags um 1–1,5 °C anheben und die Wärme in Estrich und Wänden „parken". Wie gut das funktioniert, hängt von der Trägheit des Gebäudes ab — in gut gedämmten Häusern mit Fußbodenheizung erstaunlich gut.

## Worauf achten

**Legionellen:** Bei abgesenkter Basistemperatur den wöchentlichen Desinfektionszyklus (60 °C+) aktiv lassen. **Takten:** Die Pumpe nicht mit ständigen Starts um die Überschussschwelle quälen — ein langes Fenster schlägt zehn kurze. **COP:** WW auf 60 °C senkt die Arbeitszahl; mit „kostenlosem" Überschussstrom rechnet es sich trotzdem, aber nicht über den Bedarf hinaus erhitzen.

## FAQ

**Funktioniert das mit jeder Wärmepumpe?**
Per Zeitplan: ja. Per SG-Ready: die meisten neueren Modelle. Per voller Prognose-Automation: alles, was sich in Home Assistant einbinden lässt (nativ, Modbus oder notfalls über einen geschalteten Heizstab).

**Wie viel spart das?**
Je nach WW-Profil: 3–5 kWh täglich vom Netz in den Überschuss verschoben sind im Sommerhalbjahr typischerweise 25–50 € pro Monat.

**Und ohne PV, nur mit dynamischem Tarif?**
Gleicher Mechanismus: Statt des Überschussfensters wählst du die günstigsten Börsenstunden — die kennt man schon am Vorabend.
