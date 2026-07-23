---
title: "PV-Ertragsprognose — so genau lässt sich der Solarertrag von morgen vorhersagen"
description: "Wie viel Strom liefert deine PV-Anlage morgen? Physikalisches Modell, Wettermodelldaten und Kalibrierung — so funktioniert eine präzise Ertragsprognose."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "forecast-hub"
seo:
  ogTitle: "PV-Ertragsprognose — Solarertrag von morgen vorhersagen"
---
Wie viel Strom produziert deine Anlage morgen? Die meisten PV-Besitzer antworten „kommt aufs Wetter an" — und belassen es dabei. Dabei lässt sich der PV-Ertrag an sonnigen Tagen nach der Kalibrierung mit einer Genauigkeit rund um 85 % vorhersagen, Stunde für Stunde. Man muss nur Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) mit einem physikalischen Modell der konkreten Anlage verbinden: Azimut, Neigungswinkel, Leistung und Verschattung.

In diesem Artikel erkläre ich, wie eine professionelle Ertragsprognose funktioniert, warum die normale Wetter-App dafür nicht ausreicht — und wie du die Prognose praktisch nutzt, um deinen Solarstrom dann zu verbrauchen, wenn er da ist, statt ihn für ein paar Cent einzuspeisen.

## Warum die Wetter-App nicht reicht

„Morgen sonnig" genügt nicht, um den Ertrag abzuschätzen. Zwischen Wetterbericht und Kilowattstunden vom Dach liegen mehrere Schichten Physik.

**Einstrahlung ist nicht Bewölkung.** Wetter-Apps zeigen Bewölkung in Prozent, aber Module reagieren auf Einstrahlung — die Leistung der Sonnenstrahlung in W/m². Ein dünner Cirrusschleier und eine tiefe, dichte Stratusdecke können beide „60 % bewölkt" bedeuten und sich im Ertrag um den Faktor zwei unterscheiden.

**Die Geometrie deines Dachs.** Dieselbe Einstrahlung liefert auf einem Süddach mit 35° Neigung einen anderen Ertrag als auf einer Ost-West-Anlage mit 15°. Dazu kommen String-Konfiguration, bifaziale Module und — am häufigsten unterschätzt — das Verschattungsprofil: der Schornstein, der Baum des Nachbarn oder der Hügel, hinter dem die Sonne um 16 Uhr verschwindet.

**Temperatur kostet Leistung.** Module verlieren Wirkungsgrad mit steigender Zelltemperatur (typisch ca. 0,3–0,4 % pro Grad über 25 °C). Deshalb sind Rekordtage oft ein sonniger, kühler April — nicht der heiße Juli.

Eine gute Ertragsprognose muss also den ganzen Weg gehen: **Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) → Sonnenstandsmodell → Geometrie und Parameter der Anlage → Temperatur- und Spektralkorrekturen → kWh für jede Stunde**.

## So funktioniert eine physikbasierte Prognose

Moderne PV-Prognosesysteme — vom Solarpark-Tool bis zur Prosumer-App — folgen demselben Schema:

1. **Eingangsdaten:** Prognosen der Einstrahlung (GHI, DNI, DHI) aus einem NWP-Ensemble mehrerer Wettermodelle plus numerische Wettermodelle für Temperatur und Wind.
2. **Transpositionsmodell:** Umrechnung der Einstrahlung von der Horizontalen auf die Ebene deiner Module, für jeden Sonnenstand des Tages.
3. **Anlagenmodell:** Spitzenleistung, Wechselrichter-Wirkungsgrad, Systemverluste, Verschattung je nach Tages- und Jahreszeit.
4. **Ergebnis:** die Produktionskurve — heute, morgen, die nächsten Tage.

Ein solches Modell „ab Werk" ist schon ordentlich. Aber jede Anlage hat ihre Eigenheiten: leicht andere Verluste, unterschätzte Verschattung, Module, die in ihrem eigenen Tempo altern. Hier kommt der zweite Baustein ins Spiel.

## Kalibrierung: eine Prognose, die dein Dach kennenlernt

Der wirksamste Ansatz: Prognose und tatsächliche Produktion vergleichen und das Modell systematisch nachjustieren. Bei Volcast machen wir das mit einem Kalman-Filter — einem Algorithmus aus der Satellitennavigation, der bei jeder neuen Messung die Modellparameter genau so stark aktualisiert, wie die Messung verlässlich ist.

In der Praxis: Du trägst den tatsächlichen Tagesertrag ein, und nach zwei bis drei Wochen „weiß" das Modell Dinge über deine Anlage, die in keinem Datenblatt stehen — den realen Verschattungseffekt im Herbst, die tatsächlichen Wechselrichterverluste, die Degradation. Auf meiner eigenen 5,2-kWp-Anlage liegt die Prognose für den Folgetag nach der Kalibrierung an sonnigen Tagen unter 10 % Abweichung.

> [PLATZ FÜR GRAFIK: Prognose vs. tatsächliche Produktion, 14 Tage — echte Daten der Gründer-Anlage]

## Was dir eine Ertragsprognose konkret bringt

**Verbrauch planen.** Bei ca. 8 Cent Einspeisevergütung und 30–40 Cent Netzstrompreis ist jede selbst verbrauchte Kilowattstunde rund das Drei- bis Vierfache der eingespeisten wert. Wenn du weißt, dass morgen zwischen 11 und 14 Uhr Überschuss ansteht, laufen genau dann Warmwasser, Waschmaschine, Spülmaschine und Wallbox. Mehr dazu: [Eigenverbrauch erhöhen — Geräte nach Sonnenprognose steuern →](/blog/de/eigenverbrauch-erhoehen-geraete-timen).

**Smart Home automatisieren.** Die Prognose lässt sich in Home Assistant einbinden: Der Heizstab läuft nur bei erwartetem Überschuss, die Wärmepumpe legt ihre Warmwasserzyklen in die Produktionsspitze.

**Anlagenzustand überwachen.** Weicht die reale Produktion systematisch von der kalibrierten Prognose ab, stimmt etwas nicht — verschmutzte Module, ein wachsender Baum, ein schwächelnder String. Die Prognose ist der Referenzwert, den die Wechselrichter-App (die nur die Vergangenheit zeigt) nicht liefert.

## In 5 Minuten startklar

1. Lade eine App mit physikbasierter Prognose — [Volcast](https://volcast.app/de/) ist zum Start kostenlos (2 Tage Prognose) und funktioniert mit **jeder** Anlage: kein Wechselrichter-Login, keine API-Keys, keine Cloud-Verbindung zu deiner Hardware.
2. Trag die Parameter ein: Azimut, Neigung, Leistung, optional Strings und Verschattungsprofil.
3. Ab Tag eins bekommst du eine Stundenprognose; mit jedem eingetragenen Tagesertrag kalibriert sich das Modell automatisch auf dein Dach.

## FAQ

**Wie genau kann eine PV-Ertragsprognose sein?**
Nach der Kalibrierung typischerweise rund um 85 % an sonnigen Tagen. Am schwierigsten sind Tage mit schnell ziehender Quellbewölkung — dort streuen auch die besten Modelle stärker, die Tagessumme bleibt aber meist verlässlich.

**Brauche ich Zugriff auf den Wechselrichter?**
Nein. Die Prognose basiert auf Einstrahlungsdaten aus Wettermodellen (NWP-Ensemble) und den Anlagenparametern. Wechselrichter-Zugriff ist nur praktisch, um die reale Produktion automatisch für die Kalibrierung zu erfassen — einmal täglich manuell eintragen funktioniert genauso.

**Was ist der Unterschied zwischen Einstrahlungs- und Ertragsprognose?**
Die Einstrahlungsprognose sagt, wie viel Sonnenenergie ankommt. Die Ertragsprognose rechnet sie durch Geometrie und Parameter deiner konkreten Anlage in Kilowattstunden vom Dach um.

**Funktioniert die Prognose auch im Winter?**
Ja — im Winter überwiegen zwar trübe Tage mit höherem relativem Fehler, aber gerade dann ist die Prognose oft am wertvollsten: Sie zeigt dir die wenigen sonnigen Tage, an die du Verbrauch verschieben solltest.
