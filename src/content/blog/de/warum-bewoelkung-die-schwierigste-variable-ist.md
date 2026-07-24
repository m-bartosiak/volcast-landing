---
title: "Warum Bewölkung die schwierigste Variable der Solarprognose ist"
description: "Temperatur ist berechenbar, der Sonnenstand exakt kalkulierbar. Doch Wolken sind Chaostheorie in Aktion — und die größte Fehlerquelle jeder Solarprognose."
date: 2026-04-28
tags: ["clouds", "forecast-uncertainty", "irradiance", "weather", "forecasting"]
series: "deep-dives"
seriesOrder: 3
lang: de
draft: false
seo:
  ogTitle: "Warum Wolken der schwierigste Teil der Solarprognose sind"
  keywords: ["Bewölkung Solarprognose", "Prognoseunsicherheit Photovoltaik", "Wolkentypen PV-Ertrag", "Prognosefehler Wolken"]
---

Wenn du je eine Solarprognose mit deinem tatsächlichen Ertrag verglichen hast, ist dir wahrscheinlich ein Muster aufgefallen: Klare Tage und komplett bedeckte Tage werden gut vorhergesagt. Teilweise bewölkte Tage sind ein Chaos.

Das ist kein Versagen des Prognosemodells. Es ist eine grundlegende Eigenschaft von Wolken. Sie sind wohl das mit Abstand am schwersten Vorhersagbare in der gesamten Atmosphärenwissenschaft — und ausgerechnet die wichtigste Variable für die Solarenergie.

## Warum Wolken anders sind

Sieh dir die anderen Größen an, die für den PV-Ertrag zählen. Der Sonnenstand ist reine Astronomie — auf Bogensekunden genau Jahrhunderte im Voraus berechenbar. Die Lufttemperatur ändert sich allmählich und wird durch großräumige Wetterlagen gut eingegrenzt; Temperaturprognosen für den nächsten Tag liegen typischerweise innerhalb von 1–2 °C.

Wolken durchbrechen dieses Muster, weil sie an der Schnittstelle mehrerer physikalischer Prozesse existieren, die jeweils auf unterschiedlichen Skalen ablaufen. Die großräumige atmosphärische Dynamik entscheidet, ob eine Region unter einem Hochdruckgebiet liegt (klar) oder unter einem Frontensystem (bewölkt). Mesoskalige Prozesse erzeugen geordnete Wolkenbänder und Konvektionszellen. Kleinskalige Turbulenz bestimmt die exakten Wolkenränder, ihre Dicke und ihre optischen Eigenschaften.

Wettermodelle beherrschen die große Skala einigermaßen gut. Sie tun sich schwer mit der meso- und der Mikroskala — genau der Skala, die für dein Dach entscheidend ist.

## Nicht alle Wolken sind gleich

Verschiedene Wolkentypen wirken sich völlig unterschiedlich auf den PV-Ertrag aus, und sie stellen ganz unterschiedliche Prognoseherausforderungen dar.

**Cirrus** (hoch, dünn, schleierartig) — verringert die Direkteinstrahlung um 10–30 %, ist aber relativ durchlässig. Leicht vorherzusagen, weil er mit großräumigen atmosphärischen Strukturen zusammenhängt. Deine Module produzieren unter Cirrus weiterhin gut.

**Stratus** (tief, gleichmäßig, graue Hochnebeldecke) — blockiert den größten Teil des direkten Sonnenlichts und lässt vor allem diffuse Strahlung durch. Reduziert den Ertrag auf 20–40 % der Werte bei klarem Himmel. Relativ leicht vorherzusagen, weil Stratus unter berechenbaren Bedingungen entsteht (Temperaturinversionen, Warmfronten) und über Stunden bestehen bleibt.

**Cumulus** (bauschig, einzelne Zellen) — hier bricht die Prognose zusammen. Cumuluswolken sind konvektiv: Sie bilden sich, wenn der Boden ungleichmäßig aufheizt, wodurch aufsteigende Luftblasen entstehen, die in der Höhe kondensieren. Sie sind von Natur aus chaotisch — kleine Unterschiede bei Bodenerwärmung, Feuchte oder Windscherung erzeugen völlig unterschiedliche Wolkenfelder.

Eine Cumuluswolke verschattet deine Module vielleicht 5 Minuten lang, zieht dann weiter und schenkt dir 15 Minuten volle Sonne, bevor die nächste Wolke kommt. Dieses An-aus-Muster erzeugt schnelle Leistungssprünge, die kein Wettermodell mit einer Auflösung von 10 km oder gröber erfassen kann.

**Cumulonimbus** (aufragende Gewitterwolken) — senken die Einstrahlung beim Durchzug auf nahezu null und sind mit Unwettern verbunden. Die Gewitter selbst sind einigermaßen vorhersagbar (atmosphärische Instabilität, Feuchte, Hebung), ihr genauer Zeitpunkt und Ort jedoch nicht.

## Das Problem der teilweisen Bewölkung

Der ungünstigste Fall für die Solarprognose ist nicht der komplett bewölkte Tag — es ist der teilweise bewölkte. Und genau das ist in vielen Klimazonen die häufigste Wetterlage, auch in Mitteleuropa.

An einem teilweise bewölkten Tag schwankt die Einstrahlung an deinem Standort wild. In der einen Minute hast du 900 W/m² an direkter Strahlung. Zwei Minuten später zieht eine Wolke durch und du bist bei 200 W/m² rein diffuser Strahlung. Zwei Minuten danach erreichst du vielleicht 1100 W/m² durch Cloud Enhancement — ein kurzer Ausschlag über den Klarhimmelwert hinaus, wenn sich direktes Sonnenlicht mit dem an nahen Wolkenrändern reflektierten Licht überlagert.

Ein Wettermodell sieht diesen Tag als „50 % Bewölkung, 600 W/m² mittlere Einstrahlung". Dieser Mittelwert stimmt für eine Stundensumme ungefähr, aber die momentane Realität hat mit einem glatten Verlauf von 600 W/m² nichts zu tun.

Für das Batteriemanagement, das Laden von E-Autos oder jede Anwendung, die sich für die Leistung in einem bestimmten Moment interessiert statt für die Energie über eine Stunde, ist diese Mittelung eine ernste Einschränkung.

## Warum Modelle sich schwertun

NWP-Wettermodelle bilden Wolken über **Parametrisierungsschemata** ab — vereinfachte mathematische Rezepte, die Wolkeneigenschaften aus den großräumigeren Variablen abschätzen, die das Modell auflösen kann. Das Modell kennt an jedem Gitterpunkt Temperatur, Feuchte und Vertikalbewegung. Die Parametrisierung wandelt diese in Bewölkungsgrad, Flüssigwassergehalt und optische Dicke um.

Diese Parametrisierungen sind Näherungen. Sie funktionieren statistisch — über viele Gitterzellen und viele Tage gemittelt stimmen die Wolkeneigenschaften ungefähr. Aber für eine bestimmte Gitterzelle zu einer bestimmten Stunde kann die parametrisierte Wolke erheblich danebenliegen.

Die grundlegende Herausforderung ist die **Skala**: Konvektive Wolken bilden sich auf Skalen von einigen hundert Metern bis wenigen Kilometern, doch globale Modelle haben Gitterzellen von 10–25 km. Das Modell kann nicht simulieren, was es nicht auflösen kann. Hochaufgelöste regionale Modelle (2–3 km Gitter) können einzelne Konvektionszellen ansatzweise abbilden, sind aber nur für begrenzte Gebiete und Vorhersagezeiträume verfügbar.

## Was das für Solarprognosen bedeutet

Die praktischen Folgen sind:

**Tägliche Energiesummen** werden einigermaßen gut prognostiziert. Selbst wenn das Modell den zeitlichen Verlauf der Bewölkung falsch trifft, stimmt der Gesamtbewölkungsgrad über einen Tag meist ungefähr. Tagesertragsprognosen für den nächsten Tag liegen typischerweise innerhalb von 15–25 % des tatsächlichen Werts.

**Stündliche Leistungsprofile** sind viel schwerer. Die Prognose sagt vielleicht das Ertragsmaximum um 13 Uhr voraus, während es in Wirklichkeit um 11 Uhr liegt, weil ein Wolkensystem früher als modelliert eintraf. Die Gesamtenergie mag ähnlich sein, aber das Timing stimmt nicht.

**Unterstündliche Schwankungen** sind jenseits der nächsten 30–60 Minuten praktisch nicht vorhersagbar. Das ist die Domäne des Nowcasting — Wolken in Echtzeit über Satellitenbilder, Bodensensoren oder Himmelskameras zu verfolgen, statt sich auf NWP-Vorhersagen zu verlassen.

**Klare und bedeckte Tage** werden gut prognostiziert, weil sie stabile atmosphärische Zustände darstellen. Das Modell erfasst das großräumige Muster, das diese Bedingungen erzeugt. Es sind die wechselhaften, gemischten Verhältnisse, an denen es scheitert.

Volcast geht damit ehrlich um. Das Physikmodell liefert die bestmögliche Schätzung aus den Wetterdaten, aber es tut nicht so, als könnte es 5-Minuten-Leistungssprünge an einem teilweise bewölkten Nachmittag vorhersagen. Dafür bräuchte es ein völlig anderes Werkzeug — eines, das den Himmel in Echtzeit beobachtet, statt ihn aus Wettermodellen zu simulieren.

Das Ziel ist, dir eine nützliche Ertragsschätzung für den nächsten Tag und eine korrekte Form der Stundenkurve zu geben — und transparent zu machen, wo die Unsicherheit steckt. Spoiler: Sie steckt in den Wolken.
