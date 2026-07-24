---
title: "Nowcasting, Day-Ahead oder Wochenprognose — Genauigkeit über alle Zeithorizonte"
description: "Eine 15-Minuten-Prognose und eine 7-Tage-Prognose sind grundverschiedene Probleme. Was jeder Zeithorizont realistisch leisten kann."
date: 2026-05-19
tags: ["nowcasting", "forecast-horizon", "accuracy", "time-series", "forecasting"]
series: "deep-dives"
seriesOrder: 6
lang: de
draft: false
seo:
  ogTitle: "Genauigkeit der Solarprognose nach Zeithorizont — von Nowcasting bis zur Woche"
  keywords: ["Solar Nowcasting", "Day-Ahead Solarprognose Genauigkeit", "Zeithorizont Solarprognose", "kurzfristige PV-Prognose"]
---

Nicht jede Prognose ist dasselbe Problem. Deine Solarproduktion für die nächsten 30 Minuten, für morgen oder für nächste Woche vorherzusagen — das erfordert jeweils andere Datenquellen, andere Methoden und liefert ganz unterschiedliche Genauigkeiten.

Wenn du verstehst, was jeder Zeithorizont realistisch leisten kann, nutzt du die Prognose effektiver — und bist nicht enttäuscht, wenn eine 5-Tage-Prognose eben nicht auf die Kilowattstunde genau ist.

## Nowcasting: die nächsten 0 bis 6 Stunden

Nowcasting ist der kürzeste Horizont. Es beantwortet die Frage: „Was produzieren meine Module in den nächsten Minuten bis Stunden?"

Die besten Nowcasting-Ansätze verzichten komplett auf NWP-Wettermodelle. Stattdessen nutzen sie:

**Satellitenbilder** — geostationäre Satelliten fotografieren die Wolkenfelder alle 5 bis 15 Minuten. Verfolgt man, wie sich die Wolken zwischen den Aufnahmen bewegen, lässt sich ihre Position 30 bis 120 Minuten im Voraus extrapolieren. Dieser Ansatz über „Wolkenbewegungsvektoren" (cloud motion vectors) erfasst die aktuellen Bedingungen deutlich besser als ein Wettermodell, das vor 3 bis 6 Stunden initialisiert wurde.

**Himmelskameras** — eine bodengebundene Fischaugenkamera an oder nahe der Anlage fotografiert den Himmel jede Minute. Die Bildverarbeitung erkennt Wolken, schätzt Geschwindigkeit und Richtung und sagt voraus, wann sie genau deine Module verschatten. So entstehen hyperlokale Nowcasts mit einer Auflösung von 1 bis 5 Minuten.

**Echtzeit-Produktionsdaten** — wenn deine aktuelle Produktion bei 3,8 kW liegt und die Bedingungen stabil sind, werden die nächsten 15 Minuten wahrscheinlich nah an 3,8 kW bleiben. Persistenzmodelle (die annehmen, dass die aktuellen Bedingungen andauern) sind für sehr kurze Horizonte überraschend treffsicher.

**Genauigkeit:** Für das Zeitfenster von 0 bis 30 Minuten erreichen Persistenz- und satellitengestützte Methoden unter stabilen Bedingungen mittlere absolute Fehler von 5 bis 10 % der installierten Leistung. Bei Wolkenübergängen schießen die Fehler kurz hoch, erholen sich aber schnell wieder.

**Grenze:** Nowcasting kann keine Wetteränderungen vorhersagen, die noch gar nicht begonnen haben. Ein Wolkensystem, das sich 50 km entfernt bildet, taucht in der Satelliten-Extrapolation erst auf, wenn es deutlich näher ist.

## Intraday: 6 bis 24 Stunden im Voraus

Dieser Horizont deckt die „restliche Produktion heute" und „morgen früh" ab. Hier werden NWP-Wettermodelle zur wichtigsten Datenquelle, wobei ihr jüngster Lauf noch einigermaßen frisch ist.

Die Atmosphäre ist auf dieser Skala nur begrenzt vorhersagbar — der aktuelle Zustand steckt ab, was in den nächsten 12 bis 24 Stunden passieren kann, aber mesoskalige Prozesse (konvektive Wolkenbildung, Seewind, Gebirgseffekte) bringen erhebliche Unsicherheit ins Spiel.

**Genauigkeit:** Day-Ahead-Prognosen für die tägliche Gesamtenergie liegen typischerweise im Bereich von 15 bis 25 % der tatsächlichen Produktion, gemessen als Anteil der installierten Leistung. Einzelne Stunden können stärker danebenliegen — besonders im Zeitfenster von 11 bis 15 Uhr, wenn konvektive Wolken am wahrscheinlichsten sind.

**Was gut funktioniert:** Physikbasierte Modelle glänzen hier, weil sie die Form der Produktionskurve (Anstieg am Morgen, Zeitpunkt des Höhepunkts, Rückgang am Abend) korrekt aus der Geometrie ableiten. Selbst wenn die Gesamtenergie wegen Wolkenfehlern danebenliegt, ist die Kurvenform physikalisch festgelegt und meist richtig.

**Was scheitert:** die genaue zeitliche Lage der Wolken. Die Prognose sagt vielleicht einen Produktionseinbruch von 40 % um 14 Uhr voraus, während er tatsächlich um 11 Uhr eintritt — oder umgekehrt. Der Gesamteinfluss der Wolken über den Tag mag ähnlich sein, aber die zeitlichen Verschiebungen sind ärgerlich für alle, die konkrete stundengenaue Aktionen planen.

## Kurzfrist: 1 bis 3 Tage im Voraus

In diesem Bereich liefern NWP-Wettermodelle noch nützliche Orientierung, doch Vorhersagen auf Wolkenskala werden zunehmend unsicher. Die Temperaturprognosen bleiben gut (auf 2 bis 3 °C genau). Großräumige Wetterlagen (Hochdruck = sonnig, Frontdurchgang = bewölkt) werden gut erfasst.

**Genauigkeit:** Die Tagessummen liegen für Tag 2 und 3 im Bereich von 20 bis 30 %. Die Stundenprofile werden eher zur Orientierung als zur Vorhersage — „überwiegend sonnig mit möglichen Wolken am Nachmittag" statt „Höhepunkt um 13:47 Uhr".

**Wofür es gut ist:** planen, an welchem Tag die Waschmaschine laufen soll, ob es sich lohnt, eine energieintensive Aufgabe auf morgen zu verschieben, und den Verbrauch für die nächsten Tage grob zu planen.

## Mittelfrist: 4 bis 7 Tage im Voraus

Wettermodelle erfassen in diesem Bereich großräumige Muster, tun sich mit Details aber schwer. Die chaotische Natur der Atmosphäre führt dazu, dass kleine Fehler in den Anfangsbedingungen exponentiell anwachsen — ein Phänomen, das als „Schmetterlingseffekt" bekannt ist und nicht nur eine Metapher ist, sondern eine reale mathematische Eigenschaft der Atmosphärendynamik.

**Genauigkeit:** Die Tagessummen liegen vielleicht im Bereich von 30 bis 40 %. Einzelne Stunden sind im Grunde nur Rauschen. Die Prognose kann dir sagen „Donnerstag wird sonniger als Mittwoch", aber nicht „Donnerstag produziert 22,3 kWh".

**Wofür es gut ist:** wöchentliche Energieplanung, die Einschätzung, ob eine eher sonnige oder bewölkte Woche bevorsteht, und die grobe Terminierung von Wartung oder Modulreinigung.

## Langfrist: 1 bis 2 Wochen und darüber hinaus

Jenseits einer Woche verlieren deterministische Wetterprognosen fast ihre gesamte konkrete Aussagekraft. Ensemble-Prognosen (bei denen das Modell mehrfach mit leicht veränderten Anfangsbedingungen läuft) liefern probabilistische Orientierung — „70 % Wahrscheinlichkeit für überdurchschnittliche Solarbedingungen nächste Woche" — aber keine konkreten Produktionszahlen.

Saisonprognosen (1 bis 3 Monate) gibt es für allgemeine Trends, sie sind aber noch unschärfer. Sie deuten vielleicht auf „wärmer und trockener als im Durchschnitt" für die kommende Saison hin, was sich locker als „vermutlich ordentliche Solarproduktion" übersetzen lässt.

**Wofür es gut ist:** langfristige Energiebudgetierung, der Vergleich von erwarteter und tatsächlicher kumulierter Produktion und das Verständnis saisonaler Muster.

## Was Volcast liefert

Volcast konzentriert sich auf den Day-Ahead-Horizont — den Sweet Spot, an dem die physikbasierte Prognose den größten praktischen Nutzen bietet. Du bekommst eine stündliche Produktionskurve für den nächsten Tag, die aktualisiert wird, sobald frische Wetterdaten verfügbar sind.

Das ist der handlungsrelevante Horizont: nah genug, dass die Wettermodelle nützliche Wolkenvorhersagen liefern, weit genug voraus, dass du den Verbrauch von morgen planen kannst, und über einen ganzen Tag gespannt, sodass du die komplette Form der Produktionskurve siehst.

Die Prognose gibt nicht vor, über längere Horizonte präzise zu sein, wo die Physik das nicht hergibt. Und sie versucht sich nicht am Echtzeit-Nowcasting, das eine andere Infrastruktur erfordert (Satelliten-Feeds, Telemetrie der Produktionsdaten) — eine eigene Herausforderung.

Day-Ahead, stündlich, physikbasiert. Genau hier ist das Signal-Rausch-Verhältnis am besten.
