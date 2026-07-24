---
title: "Woher Wetterprognosen kommen: NWP-Modelle erklärt für PV-Besitzer"
description: "Deine Solarprognose ist nur so gut wie ihr Wetterinput. So funktionieren numerische Wettermodelle — und wo sie bei Solarenergie an ihre Grenzen stoßen."
date: 2026-04-21
tags: ["nwp", "weather-models", "gfs", "ecmwf", "icon", "forecasting"]
series: "deep-dives"
seriesOrder: 2
lang: de
draft: false
seo:
  ogTitle: "Wettermodelle für Solarenergie erklärt — GFS, ECMWF, ICON"
  keywords: ["numerische Wettervorhersage Solar", "GFS ECMWF Solarprognose", "Wettermodell Auflösung", "NWP-Modelle erklärt", "Wetterdaten für Solar"]
---

Jede PV-Ertragsprognose ist im Kern eine Wetterprognose mit ein paar zusätzlichen Schritten. Du kannst das ausgeklügeltste PV-Modell der Welt haben — wenn der Wetterinput „sonnig" meldet, während es in Wirklichkeit regnet, liegt deine Ertragsprognose daneben.

Woher kommen also die Wetterdaten? Und warum liefern verschiedene Wetterquellen unterschiedliche Ergebnisse?

## Die globale Wettermaschine

Moderne Wettervorhersage läuft über **numerische Wettervorhersage (NWP, Numerical Weather Prediction)** — riesige Computersimulationen, die die gesamte Atmosphäre mithilfe physikalischer Gleichungen modellieren. Das sind keine simplen Hochrechnungen der aktuellen Verhältnisse. Es sind vollständige strömungsmechanische Simulationen, die die Navier-Stokes-Gleichungen für atmosphärische Strömungen lösen — gekoppelt mit Thermodynamik, Strahlungsphysik und Feuchteprozessen.

Der Ablauf beginnt mit der **Datenassimilation**: Milliarden von Beobachtungen aus Satelliten, Wetterstationen, Radiosonden (Wetterballons), Flugzeugen, Schiffen und Meeresbojen fließen in das Modell ein und erzeugen eine Momentaufnahme des aktuellen atmosphärischen Zustands. Anschließend schreitet das Modell in der Zeit voran und berechnet Minute für Minute, wie sich die Atmosphäre entwickelt.

Die großen globalen Modelle, die die meisten Solarprognosen speisen, sind:

**GFS (Global Forecast System)** — betrieben von der NOAA (USA). Frei und offen. Gitterauflösung: ca. 13 km (0,25°). Aktualisierung alle 6 Stunden. Vorhersage bis 16 Tage. GFS ist das Arbeitspferd unter den frei verfügbaren Wetterdaten. Zu den solarrelevanten Ausgaben gehören der Gesamtbedeckungsgrad, die Temperatur, die Windgeschwindigkeit und der abwärts gerichtete kurzwellige Strahlungsfluss (im Wesentlichen die GHI am Boden).

**ECMWF (European Centre for Medium-Range Weather Forecasts)** — gilt weithin als das beste globale Modell der Welt. Gitterauflösung: ca. 9 km (0,1°). Aktualisierung alle 6 Stunden. Überlegen bei der Abbildung europäischer Wetterlagen. Die ECMWF-Daten sind teilweise kommerziell — die volle Auflösung erfordert eine kostenpflichtige Lizenz, während Produkte niedrigerer Auflösung frei verfügbar sind.

**ICON (Icosahedral Nonhydrostatic)** — betrieben vom DWD (Deutscher Wetterdienst). Offene Daten seit 2023. Globale Version mit ca. 13 km, europäisches Nest mit ca. 6,5 km, deutsches Nest mit ca. 2,2 km. Besonders gut für die Vorhersage in Mitteleuropa — relevant, wenn du in Deutschland, Polen oder einem Nachbarland wohnst.

## Was NWP-Modelle tatsächlich ausgeben

Für die Solarprognose sind diese NWP-Ausgaben entscheidend:

**Bewölkung** — meist als Gesamtbedeckungsgrad (0–100 %) angegeben, manchmal aufgeteilt in hohe, mittlere und tiefe Wolkenschichten. Das ist die mit Abstand wichtigste Größe für die PV-Prognose — und zugleich die am schwersten präzise vorherzusagende.

**Temperatur** — die Lufttemperatur in 2 Metern Höhe, mit der die Zelltemperatur abgeschätzt und die temperaturbedingte Leistungsminderung der Module angesetzt wird.

**Windgeschwindigkeit und -richtung** — beeinflussen die Zelltemperatur über konvektive Kühlung. Ein windiger Tag bedeutet kühlere Module und leicht höhere Wirkungsgrade.

**Solare Einstrahlung am Boden** — manche Modelle geben die Globalstrahlung (GHI, Global Horizontal Irradiance) oder ihre Komponenten direkt aus. Das ist die unmittelbar nützlichste Größe, aber sie wird innerhalb des Modells aus denselben Wolken- und Atmosphärendaten berechnet und erbt damit deren Unsicherheiten.

**Luftfeuchte und Aerosolbelastung** — beeinflussen die Transparenz der Atmosphäre und das Verhältnis von direkter zu diffuser Strahlung.

## Das Auflösungsproblem

Wenn wir sagen, GFS habe „13 km Auflösung", heißt das: Jede Gitterzelle ist etwa 13 km × 13 km groß. Das Modell berechnet für diese gesamte Fläche einen einzigen Satz atmosphärischer Bedingungen.

Deine PV-Anlage belegt vielleicht 40 Quadratmeter.

Dieser Größenunterschied hat handfeste Folgen. Eine 2 km breite Quellwolke kann deine Module 20 Minuten lang verschatten — sitzt sie aber in einer Gitterzelle, die sonst wolkenfrei ist, meldet das Modell womöglich 10 % Bewölkung für die gesamte Zelle. Das übersetzt sich in eine sanfte, gemittelte Reduktion der Einstrahlung, nicht in das scharfe An-Aus-Muster, das du tatsächlich erlebst.

Eine höhere Auflösung hilft. Das 2,2-km-Nest von ICON über Deutschland kann einzelne Konvektionszellen ansatzweise auflösen. Doch selbst 2 km sind gewaltig im Vergleich zu deinem Dach.

Deshalb haben **alle Solarprognosen eine Untergrenze der Unsicherheit**, die auch die ausgefeilteste PV-Modellierung nicht überwinden kann. Das Wettermodell kann schlicht nicht mit der Präzision sehen, die deine Module erleben, was genau an deinem Standort passiert.

## Prognosehorizont und nachlassende Genauigkeit

Die NWP-Genauigkeit nimmt mit der Zeit ab — und das Tempo hängt von der jeweiligen Größe ab:

**Temperaturprognosen** sind vergleichsweise stabil. Vorhersagen für den Folgetag liegen meist innerhalb von 1–2 °C, und selbst 3-Tages-Prognosen sind brauchbar. Die Temperatur ändert sich langsam und wird durch großräumige atmosphärische Muster gut eingegrenzt.

**Die Bewölkung** verschlechtert sich viel schneller. Wolkenprognosen für den Folgetag sind nützlich, liegen aber oft bei Zeitpunkt und Deckungsgrad daneben. Ab Tag 3 sind konkrete Wolkenvorhersagen unzuverlässig — das Modell kann dir „teils bewölkt" sagen, aber nicht, ob die Wolken um 14 Uhr über deinem Dach stehen.

**Die solare Einstrahlung** erbt die Unsicherheit der Bewölkung. Tagessummen für den Folgetag liegen im Mittel vielleicht innerhalb von 15–20 %. Stundenweise Vorhersagen können bei wechselnder Bewölkung um 50 % oder mehr danebenliegen.

Dieses Nachlassen ist wichtig dafür, wie du eine Prognose nutzt. Folgetag: Verbrauch planen. Drei Tage voraus: nur grobe Planung. Eine Woche voraus: bestenfalls ein allgemeiner Trend.

## Aktualisierungszyklen der Modelle

Globale NWP-Modelle laufen typischerweise alle 6 Stunden (00, 06, 12, 18 UTC). Jeder Lauf braucht 1–3 Stunden Rechenzeit, sodass die Daten bei Verfügbarkeit bereits einige Stunden alt sind. Eine Prognose aus dem 00-UTC-Lauf steht womöglich erst um 03–04 UTC bereit.

Für die Solarprognose bedeutet das: Morgendliche Prognosen für „heute" beruhen auf Atmosphärendaten von vor mehreren Stunden. Die Bedingungen können sich ändern — besonders bei Konvektionswolken, die sich an Frühlings- und Sommernachmittagen rasch aufbauen.

Manche regionalen Modelle laufen häufiger (stündlich oder alle 3 Stunden) und liefern frischere Daten, allerdings über ein kleineres geografisches Gebiet.

## Warum mehrere Modelle zählen

Kein einzelnes NWP-Modell ist überall und immer das beste. GFS schlägt vielleicht ECMWF bei einer bestimmten Sturmzugbahn. ICON trifft womöglich die Bewölkung über Mitteleuropa punktgenau, während GFS sie verpasst. Die Modellgüte schwankt mit Jahreszeit, Wetterlage und geografischem Standort.

Ausgefeilte Prognosesysteme nutzen **Multi-Modell-Ensembles** — sie mischen die Ausgaben mehrerer NWP-Modelle, um systematische Verzerrungen zu verringern. Manche fahren zusätzlich **Ensemble-Prognosen** innerhalb eines einzigen Modells: Sie stören die Anfangsbedingungen leicht und lassen die Simulation mehrfach laufen, um die Prognoseunsicherheit abzuschätzen.

Für dich als Nutzer einer Solarprognose lautet die praktische Erkenntnis: Vertrau keiner einzelnen Wetterquelle blind. Die beste Prognose nutzt die besten verfügbaren Wetterdaten für deine Region und deinen Zeithorizont — und macht idealerweise transparent, wie viel Unsicherheit in ihrem Wetterinput steckt.

Zu verstehen, woher die Wetterdaten kommen, macht deine Prognose nicht genauer — aber es hilft dir zu verstehen, warum sie an manchen Tagen punktgenau sitzt und an anderen danebenliegt. Nicht das PV-Modell ist das schwache Glied. Es ist die Atmosphäre.
