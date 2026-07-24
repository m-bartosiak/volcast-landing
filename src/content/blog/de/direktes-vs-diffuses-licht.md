---
title: "Direktes vs. diffuses Sonnenlicht — warum auch bewölkte Tage Strom liefern"
description: "Nicht jede Sonnenstrahlung ist gleich. Die drei Komponenten des Sonnenlichts erklären, warum selbst bedeckte Tage Strom erzeugen."
date: 2026-03-31
tags: ["irradiance", "diffuse-radiation", "direct-beam", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 3
lang: de
draft: false
seo:
  ogTitle: "Direktes vs. diffuses Sonnenlicht — warum Solarmodule auch bei Bewölkung Strom liefern"
  keywords: ["direkte vs diffuse Sonnenstrahlung", "warum Solarmodule bei Bewölkung Strom liefern", "diffuse Einstrahlung", "GHI DNI DHI erklärt"]
---

Eine der häufigsten Fragen von frischgebackenen PV-Besitzern lautet: „Produzieren meine Module überhaupt etwas, wenn es bewölkt ist?" Die Antwort ist ja — manchmal sogar überraschend viel. Um zu verstehen, warum, musst du wissen, dass das Sonnenlicht, das auf dein Dach trifft, keine einheitliche Größe ist. Es sind drei.

## Die drei Komponenten der Sonnenstrahlung

Jedes Watt Sonnenenergie, das auf dein Modul trifft, gelangt über einen von drei Wegen dorthin.

### Direktnormalstrahlung (DNI)

Das ist das Sonnenlicht, das in gerader Linie von der Sonne zu deinem Modul gelangt, ohne gestreut oder absorbiert zu werden. An einem klaren Tag ist es die dominierende Komponente — das scharf begrenzte, Schatten werfende Licht, das Oberflächen aufheizt und dich blinzeln lässt.

DNI ist stark richtungsabhängig. Der Winkel zwischen deinem Modul und der Sonne spielt eine entscheidende Rolle. Module, die direkt zur Sonne zeigen, erhalten die maximale DNI; Module in einem schrägen Winkel erhalten entsprechend weniger (gemäß dem Kosinusgesetz).

An einem völlig klaren Tag zur Mittagszeit kann die DNI in Mitteleuropa auf einer zur Sonne senkrechten Fläche 800–900 W/m² überschreiten.

### Diffuse Horizontalstrahlung (DHI)

Das ist Sonnenlicht, das von der Atmosphäre gestreut wurde — durch Luftmoleküle (Rayleigh-Streuung), Aerosole (Staub, Luftverschmutzung) und vor allem durch Wolken. Statt aus einer einzigen Richtung kommt diffuses Licht aus dem gesamten Himmelsgewölbe.

An einem klaren Tag ist die DHI vergleichsweise gering — vielleicht 80–150 W/m². Doch an einem bedeckten Tag wird sie zur **einzigen** Einstrahlungsquelle und kann je nach Dicke und Art der Wolken immer noch 100–300 W/m² liefern.

Genau deshalb produzieren deine Module auch an bewölkten Tagen. Selbst wenn dichte Wolken jede Spur direkten Sonnenlichts blockieren, streut der Himmel weiterhin Licht aus allen Richtungen nach unten.

### Vom Boden reflektierte Strahlung

Die dritte Komponente ist Sonnenlicht, das vom Boden oder von umliegenden Flächen reflektiert wird, bevor es dein Modul erreicht. Sie ist kleiner als die beiden anderen, aber nicht vernachlässigbar — besonders, wenn deine Module geneigt sind (wodurch sie mehr reflektiertes Licht auffangen) und der Boden stark reflektiert.

Frischer Schnee kann 60–80 % des einfallenden Lichts reflektieren. Grüner Rasen reflektiert etwa 20 %. Dunkler Boden oder Asphalt: 10–15 %. In nordischen Ländern kann die Bodenreflexion im Winter den Ertrag spürbar steigern.

Das Reflexionsvermögen des Bodens nennt man **Albedo** — dessen geografische Bedeutung schauen wir uns in einem späteren Beitrag genauer an.

## GHI: die Zahl, die dir meist begegnet

Die meisten Wetterstationen und Solardatenquellen geben die **Globale Horizontalstrahlung (GHI)** an — die gesamte Sonnenleistung, die auf eine ebene, horizontale Fläche fällt. Die GHI ist ganz einfach:

**GHI = DNI × cos(Zenitwinkel) + DHI**

Das ist die Standardgröße, aber nicht das, was dein geneigtes Modul empfängt. Um die GHI in die Einstrahlung auf deiner konkreten geneigten Fläche umzurechnen, braucht es ein **Transpositionsmodell** — einen mathematischen Schritt, der die Komponenten aufteilt und für die Ausrichtung deines Moduls neu kombiniert. Mehr dazu in einem späteren Beitrag.

## Wie das Verhältnis alles verändert

Das Verhältnis zwischen direkter und diffuser Strahlung schwankt je nach Bedingungen enorm — und genau hier wird die Prognose spannend.

**Klarer Himmel:** 70–85 % direkt, 15–30 % diffus. Die Modulausrichtung ist entscheidend.

**Teilweise bewölkt:** 30–60 % direkt, 40–70 % diffus. Starke Schwankungen, während Wolken vorbeiziehen. Du siehst möglicherweise Leistungssprünge von 50 % innerhalb von Minuten.

**Bedeckt:** 0–10 % direkt, 90–100 % diffus. Die Modulneigung spielt eine deutlich kleinere Rolle — das Licht kommt von überall. Ein flaches Modul und ein 35°-Modul empfangen ähnliche Mengen.

**Dünne hohe Wolken (Cirrus):** 50–70 % direkt, 30–50 % diffus. Sie wirken wie ein natürlicher Filter, der die DNI sanft reduziert und zugleich die DHI erhöht.

Das hat eine praktische Konsequenz: In Regionen mit vielen bedeckten Tagen (hallo, Norddeutschland im November) ist die optimale Modulneigung tatsächlich flacher, als theoretische Berechnungen für klaren Himmel nahelegen würden — denn du sammelst dort in erster Linie diffuses Licht.

## Die Überraschung an bewölkten Tagen

An manchen teilweise bewölkten Tagen siehst du vielleicht, wie die Momentanleistung *über* den Klarhimmel-Wert steigt. Das nennt man **Cloud Enhancement** (Wolkenverstärkung) — wenn an den Rändern von Wolken reflektiertes Sonnenlicht mit der Direktstrahlung zusammentrifft und kurzzeitig Einstrahlungswerte erzeugt, die unter wolkenlosen Bedingungen gar nicht möglich wären.

Es ist ein reales, in der Fachliteratur gut dokumentiertes Phänomen. Dein Wechselrichter meldet vielleicht kurzzeitig eine Leistung über der Nennleistung der Module. Das ist kein Messfehler — das ist Physik, die ausnahmsweise etwas Nützliches tut.

## Warum das für die Prognose wichtig ist

Ein Prognosemodell, das nur vorhersagt, „wie viel Sonnenlicht insgesamt", ohne es in direkte und diffuse Komponenten zu zerlegen, macht systematische Fehler:

Es **überschätzt** den Ertrag an bewölkten Tagen bei steil geneigten Modulen (die den größten Teil des diffusen Lichts vom gegenüberliegenden Himmel verpassen).

Es **unterschätzt** den Ertrag an bewölkten Tagen bei flacheren Modulen (die diffuses Licht aus dem gesamten Himmelsgewölbe effizient einsammeln).

Und es verpasst die **Volatilität bei wechselnder Bewölkung** völlig — jene raschen Leistungssprünge, die sie verursacht.

Volcast löst das, indem es jede Komponente einzeln modelliert. Die Wetterprognose liefert Bewölkung und atmosphärische Daten; die Physik-Engine zerlegt diese in DNI und DHI; das Transpositionsmodell rechnet sie auf deine geneigte Fläche um; und das PV-Modell berechnet daraus den resultierenden Stromertrag.

Das ist aufwendiger als eine einfache Nachschlagetabelle, aber genau so funktioniert die Physik in Wirklichkeit — und deshalb bleibt die Prognose treffsicher, egal ob dein Tag sonnig, bedeckt oder chaotisch durchmischt ist.
