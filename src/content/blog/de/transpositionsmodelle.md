---
title: "Transpositionsmodelle: Wie Volcast berechnet, was auf dein geneigtes Modul trifft"
description: "Wetterdaten liefern die Einstrahlung auf eine horizontale Fläche. Deine Module sind geneigt. Die Brücke dazwischen heißt Transposition — und das Modell zählt."
date: 2026-05-12
tags: ["transposition", "perez-model", "irradiance", "panel-orientation", "forecasting"]
series: "deep-dives"
seriesOrder: 5
lang: de
draft: false
seo:
  ogTitle: "Transpositionsmodelle erklärt — von horizontaler Einstrahlung zur geneigten Modulfläche"
  keywords: ["Transpositionsmodell Solar", "Perez-Modell Einstrahlung", "Einstrahlung geneigte Fläche", "POA-Einstrahlung berechnen"]
---

Wetterstationen und NWP-Wettermodelle geben die Sonneneinstrahlung immer auf eine horizontale Fläche bezogen an. Deine Module stehen aber mit 30°, 45° oder auf einem Steildach geneigt. Der Rechenschritt, der die horizontale Einstrahlung in das umrechnet, was dein konkret geneigtes Modul tatsächlich abbekommt, heißt **Transposition** — und genau hier zahlt sich physikbasierte Prognose aus.

## Das Problem

Die Globalstrahlung auf eine horizontale Fläche (GHI, Global Horizontal Irradiance) ist die Standardgröße. Sie ist das, was Pyranometer an Wetterstationen messen. Sie ist das, was Satellitenschätzungen liefern. Und sie ist das, was NWP-Modelle berechnen.

Die Einstrahlung auf dein geneigtes Modul — die sogenannte **Modulebenen-Einstrahlung (POA, Plane of Array)** — unterscheidet sich aber von der GHI. An einem klaren Wintertag kann ein nach Süden geneigtes Modul deutlich *mehr* Einstrahlung abbekommen als eine horizontale Fläche, weil es die tiefstehende Wintersonne frontaler einfängt. An einem Sommertag, wenn die Sonne fast senkrecht steht, kann dasselbe geneigte Modul etwas weniger abbekommen als die Horizontale, weil es von der Mittagssonne weggeneigt ist.

Das Verhältnis zwischen GHI und POA hängt vom Sonnenstand ab (der sich jede Minute ändert), von Neigung und Azimut deiner Module und — entscheidend — von der Aufteilung zwischen direkter und diffuser Strahlung.

## Schritt 1: Zerlegung

Bevor du transponieren kannst, musst du die GHI in ihre Komponenten zerlegen: die Direktnormalstrahlung (DNI, Direct Normal Irradiance) und die diffuse Horizontalstrahlung (DHI, Diffuse Horizontal Irradiance). Liefert die Wetterquelle diese getrennt — super. Gibt sie nur die GHI aus (bei vielen Datenquellen üblich), brauchst du ein **Zerlegungsmodell**, das die Aufteilung schätzt.

Zerlegungsmodelle nutzen den Clearness-Index (das Verhältnis von GHI am Boden zur extraterrestrischen Einstrahlung) als wichtigste Eingangsgröße. Klarer Himmel hat einen hohen Clearness-Index und einen hohen Direktanteil. Bewölkter Himmel hat einen niedrigen Clearness-Index und einen hohen Diffusanteil. Verbreitete Ansätze sind die Modelle von Erbs, Orgill-Hollands und BRL.

Dieser Schritt bringt Unsicherheit ins Spiel — dieselbe GHI kann aus unterschiedlichen Kombinationen von Direkt- und Diffusstrahlung entstehen. Ein dünner, gleichmäßiger Dunstschleier und ein Feld aus vereinzelten Wolken können ähnliche GHI-Werte erzeugen, aber sehr unterschiedliche POA-Werte auf einem geneigten Modul liefern.

## Schritt 2: Transposition des Direktstrahls

Der Direktstrahl ist reine Geometrie. Die DNI kommt aus Richtung der Sonne. Welchen Anteil deine geneigte Fläche davon abfängt, folgt dem **Kosinus des Einfallswinkels** — also des Winkels zwischen den Sonnenstrahlen und der Flächennormalen deines Moduls.

Steht die Sonne genau frontal zu deinem Modul (Einfallswinkel = 0°), fängst du 100 % der DNI ein. Mit wachsendem Winkel wird es weniger, entlang einer Kosinuskurve. Bei 60° Einfallswinkel bekommst du nur noch 50 % ab. Bei 90° (Sonne parallel zur Modulfläche) gar nichts mehr.

Der Einfallswinkel hängt von Neigung, Azimut und Sonnenstand ab — alles hochpräzise berechenbar. Diese Komponente der Transposition ist im Grunde exakt.

## Schritt 3: Transposition der Diffusstrahlung — hier gehen die Modelle auseinander

Das ist der schwierige Teil. Diffuse Strahlung kommt aus dem gesamten Himmel — aber nicht gleichmäßig. Der Himmel nahe der Sonne ist heller als der Himmel gegenüber der Sonne. Unter bestimmten Bedingungen ist der Horizont heller als der Zenit. Wolken erzeugen helle und dunkle Flecken.

Ein geneigtes Modul sieht immer nur einen Teil des Himmelsgewölbes. Ein mit 35° geneigtes Modul „sieht" weniger vom Himmel hinter sich (unterhalb der Horizontlinie des Moduls) und mehr vom Himmel davor. Wie viel Diffusstrahlung es abbekommt, hängt davon ab, wie die Himmelshelligkeit verteilt ist.

Verschiedene Transpositionsmodelle treffen dazu unterschiedliche Annahmen:

**Isotropes Modell** — das einfachste. Es nimmt an, dass die Diffusstrahlung gleichmäßig über das gesamte Himmelsgewölbe verteilt ist. Die geneigte Fläche bekommt einen Anteil ab, der proportional zu ihrem Sichtfaktor zum Himmel ist: (1 + cos(Neigung)) / 2. Ein flach liegendes Modul (Neigung = 0°) sieht den vollen Himmel; ein senkrechtes Modul sieht die Hälfte.

Dieses Modell ist rechnerisch trivial, aber systematisch falsch. Reale Himmel sind nicht gleichmäßig — sie sind nahe der Sonne und nahe dem Horizont heller.

**Hay-Davies-Modell** — ergänzt eine zirkumsolare Komponente. Es behandelt einen Teil der Diffusstrahlung so, als käme er aus Richtung der Sonne (wie der Direktstrahl), und den Rest als isotrop. Genauer als das isotrope Modell, besonders bei klarem und teils klarem Himmel, wo die zirkumsolare Aufhellung deutlich ins Gewicht fällt.

**Perez-Modell** — das in der PV-Branche am weitesten verbreitete. Es zerlegt die Diffusstrahlung in drei Komponenten: den isotropen Hintergrund, die zirkumsolare Aufhellung (Bereich rund um die Sonne) und die Horizontaufhellung (ein heller Streifen entlang des Horizonts, besonders bei klarem Himmel ausgeprägt). Es nutzt empirische Koeffizienten aus umfangreichen Messkampagnen.

Das Perez-Modell erreicht auf geneigten Flächen typischerweise 5–10 % bessere Genauigkeit als das isotrope Modell, wobei der Vorteil bei steilen Neigungen und klarem Himmel am größten ist. Bei flach liegenden Modulen oder bedecktem Himmel laufen alle Modelle zusammen, weil der Himmel dann tatsächlich näherungsweise gleichmäßig ist.

## Schritt 4: Bodenreflektierter Anteil

Sonnenlicht, das am Boden reflektiert wird und von unten auf dein Modul trifft, liefert einen dritten Beitrag. Berechnet wird er als: GHI × Albedo × (1 − cos(Neigung)) / 2.

Der Bodenreflexionsgrad (Albedo) schwankt: Neuschnee 0,6–0,8, grünes Gras 0,2, dunkler Boden 0,1, Beton 0,3. Ein größerer Neigungswinkel fängt mehr Bodenreflexion ein.

Bei den meisten Anlagen trägt die Bodenreflexion 2–5 % zur gesamten POA-Einstrahlung bei. In verschneiter Umgebung mit steil aufgestellten Modulen kann sie 10–15 % erreichen — ein spürbarer Bonus.

## Alles zusammengesetzt

Gesamte POA-Einstrahlung = transponierter Direktstrahl + transponierte Diffusstrahlung + Bodenreflexion.

Dieser eine Wert, für jede Stunde (oder alle 15 Minuten) des Prognosezeitraums berechnet, fließt ins PV-Zellmodell ein, um den elektrischen Ertrag zu ermitteln. Beim Transpositionsschritt werden deine Eingaben zu Neigung und Azimut kritisch — sie formen die gesamte Tagesproduktionskurve.

Ein nach Süden ausgerichtetes 35°-Modul in Warschau hat rund um den solaren Mittag eine scharfe Spitze. Ein nach Osten ausgerichtetes Modul erreicht sein Maximum um 9–10 Uhr. Ein flach liegendes Modul hat eine breite, flachere Kurve. Diese Formen bestimmen unmittelbar, wann du große Verbraucher einplanen, ein E-Auto laden oder mit Überschuss zur Einspeisung rechnen solltest.

Volcast setzt das Perez-Transpositionsmodell ein. Für jede Prognosestunde zerlegt es die Einstrahlung des Wettermodells in Direkt- und Diffusanteil, berechnet den Sonnenstand, ermittelt den Einfallswinkel auf dein geneigtes Modul, wendet das Perez-Diffusmodell mit seiner zirkumsolaren und seiner Horizontkomponente an, addiert die Bodenreflexion und kommt so zur POA-Einstrahlung, die in den PV-Umwandlungsschritt eingeht.

Das ist mehr Rechenarbeit als eine Nachschlagetabelle. Aber genau deshalb bildet die Prognose die Form deiner Tagesproduktionskurve korrekt ab — und nicht nur die Gesamtsumme.
