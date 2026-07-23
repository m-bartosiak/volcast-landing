---
title: "Solarprognose-App — welche zeigt, wie viel deine PV-Anlage morgen produziert?"
description: "Wechselrichter-App, Wetter-App oder spezialisierte Prognose-App? Welche App den PV-Ertrag von morgen wirklich zeigt — ehrlicher Überblick mit Empfehlung."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "best-app"
seo:
  ogTitle: "Solarprognose-App im Vergleich — welche lohnt sich?"
---
„Welche App zeigt mir, wie viel meine Anlage morgen produziert?" — die ehrliche Antwort: die App deines Wechselrichters ziemlich sicher nicht. Die meisten Apps im PV-Umfeld beantworten eine andere Frage, als du stellst. Hier die drei Kategorien im Überblick — und worauf es wirklich ankommt.

## Kategorie 1: Wechselrichter-Apps — der Blick zurück

SMA, Fronius, GoodWe, Sungrow, Deye: Jede Hersteller-App zeigt Live-Leistung und Historie oft sehr ordentlich. Aber sie schauen fast ausschließlich in die Vergangenheit. Für die Frage „lohnt es sich, die Wäsche auf morgen Mittag zu legen?" liefern sie nichts — und sie funktionieren nur mit dem eigenen Ökosystem. Wechselst du den Wechselrichter, wechselst du die App.

## Kategorie 2: Wetter-Apps — die falsche Größe

Bewölkungsprozente sagen wenig über Ertrag: Module reagieren auf Einstrahlung (W/m²), nicht auf „60 % bewölkt", und dein Dach — Azimut, Neigung, Verschattung, Temperatur — verändert das Ergebnis massiv. Warum die Übersetzung „Wetter → kWh" ohne Modell systematisch schiefgeht, erkläre ich ausführlich im [Prognose-Grundlagenartikel →](/blog/de/pv-ertragsprognose).

## Kategorie 3: Prognose-Apps — der Blick nach vorn

Spezialisierte Ertragsprognose rechnet den vollen Weg: Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) → Sonnenstand → Geometrie deiner Anlage → Temperaturkorrekturen → kWh pro Stunde. Der Unterschied zwischen den Anbietern liegt in zwei Punkten: **Kalibrierung** (lernt das Modell deine konkrete Anlage — Verschattung, Verluste, Degradation?) und **Zugänglichkeit** (App mit Benachrichtigungen oder nur API für Bastler?).

Volcast kombiniert beides: physikalisches Modell plus automatische Kalibrierung per Kalman-Filter, verpackt in eine Handy-App mit Widgets und Push-Benachrichtigungen (Abendprognose für morgen, „morgen Überschuss ab 11 Uhr"). Funktioniert mit jeder Anlage — kein Wechselrichter-Login, keine API-Keys, keine Cloud-Verbindung zur Hardware. Kostenlos mit 2-Tage-Prognose; Premium (4,49 $/Monat) erweitert auf 7 Tage, Auto-Kalibrierung und die Home-Assistant-API.

## Worauf du bei der Auswahl achten solltest

Eine kurze Checkliste, egal für welche App du dich entscheidest: Stundenauflösung statt nur Tagessumme (sonst kannst du nichts timen), Berücksichtigung deiner Anlagengeometrie inklusive Verschattung, Kalibrierung an reale Erträge, Benachrichtigungen bei Prognoseänderung, und — falls du Smart Home nutzt — eine saubere Home-Assistant-Anbindung. Den direkten Vergleich der HA-Prognosequellen findest du [hier →](/blog/de/pv-prognose-home-assistant-vergleich).

## FAQ

**Brauche ich überhaupt eine extra App neben der Wechselrichter-App?**
Wenn du nur wissen willst, was war: nein. Wenn du Verbrauch planen willst (Warmwasser, Wäsche, Wallbox): ja — dafür brauchst du den Blick nach vorn.

**Funktioniert eine Prognose-App auch mit Balkonkraftwerk?**
Ja, das physikalische Modell ist größenunabhängig — Azimut, Neigung und Leistung eintragen genügt.

**Was kostet eine gute Solarprognose?**
Die Spanne reicht von kostenlos (eingeschränkt) bis zu kommerziellen API-Tarifen. Für Privatnutzer liegt der sinnvolle Bereich bei wenigen Euro im Monat — weniger, als eine einzige falsch getimte Woche Warmwasser kostet.
