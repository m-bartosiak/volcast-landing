---
title: "Die Reise der Einstrahlung: Vom All zu deinem Solarmodul in 8 Schritten"
description: "Begleite einen Sonnenstrahl vom Rand der Atmosphäre durch Streuung, Absorption, Wolken und Reflexion, bis er auf dein geneigtes Modul trifft und zu Strom wird."
date: 2026-05-05
tags: ["irradiance", "atmospheric-physics", "solar-spectrum", "pv-physics", "forecasting"]
series: "deep-dives"
seriesOrder: 4
lang: de
draft: false
seo:
  ogTitle: "Vom All zum Solarmodul — die komplette Reise der Einstrahlung"
  keywords: ["Sonneneinstrahlung Atmosphäre", "wie Sonnenlicht Solarmodule erreicht", "atmosphärische Abschwächung Einstrahlung", "Einstrahlungsmodellierung Schritte"]
---

Ein Photon verlässt die Sonnenoberfläche mit 300.000 km/s. Acht Minuten und zwanzig Sekunden später tritt es in die Erdatmosphäre ein. Was dann passiert — auf den letzten hundert Kilometern einer 150 Millionen Kilometer langen Reise — entscheidet, ob es auf deinem Dach zu Strom wird oder auf dem Gehweg zu Wärme.

Hier ist die komplette Kette, die eine physikbasierte Prognose abbilden muss.

## Schritt 1: Extraterrestrische Einstrahlung

Oberhalb der Atmosphäre ist die Sonnenstrahlung bemerkenswert vorhersehbar. Die **Solarkonstante** — die Leistung pro Quadratmeter senkrecht zu den Sonnenstrahlen im mittleren Abstand der Erde — beträgt rund 1361 W/m².

Dieser Wert schwankt leicht (~3,4 %), weil die Erdumlaufbahn elliptisch ist. Am nächsten sind wir der Sonne Anfang Januar (Perihel), am weitesten entfernt Anfang Juli (Aphel). Entgegen der Intuition erhält die Nordhalbkugel im Winter etwas mehr extraterrestrische Einstrahlung als im Sommer. Der Effekt ist klein, aber ein Physikmodell berücksichtigt ihn.

Die Sonnenleistung schwankt außerdem im 11-jährigen Sonnenfleckenzyklus, allerdings um weniger als 0,1 % — für die PV-Prognose vernachlässigbar.

## Schritt 2: Luftmasse und Weglänge

Sonnenlicht tritt in einem Winkel in die Atmosphäre ein, der von der Sonnenhöhe abhängt. Steht die Sonne direkt im Zenit (Zenitwinkel = 0°), nimmt das Licht den kürzesten Weg durch die Atmosphäre — definiert als Luftmasse 1,0 (AM1.0).

Sinkt die Sonne Richtung Horizont, wird der Weg länger. Bei 60° Zenitwinkel durchquert das Licht doppelt so viel Atmosphäre (AM2.0). Beim Sonnenuntergang kann die Luftmasse 30 überschreiten.

Mehr Atmosphäre bedeutet mehr Abschwächung. Deshalb produzieren deine Module um 7 Uhr morgens deutlich weniger als mittags, selbst wenn das Modul zufällig nach Osten zeigt — das Sonnenlicht wurde durch mehr Luft gefiltert. Und deshalb wird die Modulleistung bei AM1.5 angegeben (Sonne bei etwa 48° Höhe) — ein standardisierter Kompromiss zwischen Zenit- und Horizontbedingungen.

## Schritt 3: Rayleigh-Streuung

Luftmoleküle (Stickstoff, Sauerstoff) streuen das Sonnenlicht. Kürzere Wellenlängen (Blau, Violett) werden stärker gestreut als längere (Rot). Deshalb ist der Himmel blau — du siehst gestreutes kurzwelliges Licht aus allen Richtungen.

Für die PV lenkt die Rayleigh-Streuung einen Teil der direkten Strahlung in diffuse Himmelsstrahlung um. Der Effekt lässt sich aus Luftdruck und Sonnenstand mit gut bekannten Gleichungen berechnen. Er reduziert die Direktstrahlung bei klarem Himmel um rund 10–15 % und leitet diese Energie in die diffuse Komponente um.

## Schritt 4: Aerosol-Absorption und -Streuung

Aerosole — Staub, Schadstoffpartikel, Meersalz, Rauch, Pollen — streuen und absorbieren Sonnenlicht weit stärker als saubere Luftmoleküle. Anders als die Rayleigh-Streuung hängen Aerosoleffekte stark von den örtlichen Bedingungen ab und sind schwerer vorherzusagen.

In sauberer maritimer Luft liegt die aerosoloptische Dicke (AOD) vielleicht bei 0,05 — kaum spürbar. In einer verschmutzten Großstadt im Binnenland während einer Smog-Episode kann die AOD 0,5–1,0 erreichen und die Direktstrahlung um 30–50 % senken.

Für Deutschland reichen typische AOD-Werte von 0,1 (saubere Winterluft) bis 0,3 (Sommerdunst, landwirtschaftliche Verbrennung). Saharastaub-Ereignisse erreichen gelegentlich Mitteleuropa und treiben die AOD für einige Tage deutlich nach oben.

NWP-Wettermodelle enthalten Aerosolprognosen, doch diese sind gröber aufgelöst als meteorologische Variablen. Die meisten Solarprognosen nutzen klimatologische Aerosoldaten (Monatsmittel) statt Echtzeit-Aerosolprognosen.

## Schritt 5: Ozon- und Gasabsorption

Ozon in der Stratosphäre absorbiert UV-Strahlung — wichtig für die Biologie, für die PV aber weniger relevant, da die meisten UV-Photonen ohnehin mehr Energie besitzen als die Bandlücke von Silizium (der Überschuss wird durch Thermalisierung zu Wärme).

Wasserdampf in der Troposphäre absorbiert bestimmte Infrarot-Wellenlängen und erzeugt Absorptionsbanden, die die Gesamteinstrahlung mindern. Der Effekt hängt vom ausfällbaren Wassergehalt ab, der mit der Luftfeuchte variiert und in den Ausgaben der NWP-Modelle enthalten ist.

CO₂, Methan und andere Treibhausgase haben bei bestimmten Wellenlängen geringfügige Absorptionseffekte. Diese sind im Grunde konstant und in den Standard-Atmosphärenmodellen fest hinterlegt.

## Schritt 6: Wolkenabschwächung

Wolken sind der dominierende Faktor für die Einstrahlung am Boden, und ihre Komplexität haben wir in einem eigenen Beitrag behandelt. In der Einstrahlungskette wirken Wolken sowohl als Absorber als auch als Streukörper: Sie reduzieren die Direktstrahlung drastisch und wandeln einen Teil davon in diffuse Strahlung um.

Die Physik ist komplex: Die optische Dicke einer Wolke hängt vom Flüssigwassergehalt, der Tröpfchengrößenverteilung und der vertikalen Ausdehnung der Wolke ab. Dünne Zirren haben vielleicht eine optische Dicke von 0,5–2 und lassen den Großteil des Lichts durch. Dicke Cumulonimben können eine optische Dicke von über 100 erreichen und blockieren praktisch die gesamte Direktstrahlung.

Ein Physikmodell braucht die optischen Wolkeneigenschaften aus der Wettervorhersage. Die meisten NWP-Modelle liefern den Gesamtbedeckungsgrad, einige auch den Wolkenwassergehalt, aus dem sich die optische Dicke abschätzen lässt.

## Schritt 7: Ankunft am Boden — GHI

Nachdem sie die Atmosphäre überstanden hat, kommt die Sonnenstrahlung am Boden als **Globalstrahlung auf die Horizontale (GHI)** an — die gesamte Sonnenleistung auf einer flachen, horizontalen Fläche. Sie ist die Summe aus Direktstrahlung (auf die Horizontale projiziert) und diffuser Himmelsstrahlung.

An einem klaren Sommertag auf deutschen Breiten erreicht die GHI im Maximum etwa 800–950 W/m². An einem bedeckten Tag sind es vielleicht 100–300 W/m². Diese Werte sind es, die Wetterstationen messen und NWP-Modelle vorhersagen.

Aber die GHI ist nicht das, was deine Module empfangen — denn deine Module sind nicht horizontal. Um die GHI in die Einstrahlung auf deiner geneigten Fläche umzurechnen, braucht es einen weiteren Schritt.

## Schritt 8: Transposition auf deine geneigte Fläche

Dieser letzte Schritt — im nächsten Beitrag ausführlich behandelt — nimmt die horizontalen Einstrahlungskomponenten (direkt und diffus) und berechnet, was bei deiner konkreten Modulausrichtung ankommt. Er berücksichtigt den Einfallswinkel der Direktstrahlung, den Himmelssichtfaktor der Diffusstrahlung und die bodenreflektierte Strahlung auf Basis der Oberflächen-Albedo.

Der Transpositionsschritt ist die Stelle, an der deine Angaben zu Neigung und Azimut am meisten zählen. Ein nach Süden ausgerichtetes 35°-Modul in München empfängt ein ganz anderes Einstrahlungsprofil als ein nach Westen ausgerichtetes 20°-Modul, obwohl beide unter demselben Himmel stehen.

## Die komplette Kette

Alles zusammengesetzt: extraterrestrische Einstrahlung → Luftmassen-Abschwächung → Rayleigh-Streuung → Aerosoleffekte → Gasabsorption → Wolkenabschwächung → GHI am Boden → Transposition auf die geneigte Fläche → Anpassung an die Zelltemperatur → elektrische Leistung.

Jeder Schritt folgt der Physik. Jeder Schritt bringt etwas Unsicherheit mit. Der kumulierte Effekt ist eine Prognose, die das grundlegende Verhalten des Systems erfasst und dabei die Grenzen der Wettervorhersage erbt — vor allem bei der Wolkenprognose.

Genau das berechnet Volcast für jede Stunde jeder Prognose. Keine Nachschlagetabelle. Keine statistische Regression. Die tatsächliche physikalische Kette, berechnet aus deinen drei Eingabeparametern und den besten verfügbaren Wetterdaten.
