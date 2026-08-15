---
title: "Wie genau ist eine PV-Prognose wirklich?"
description: "Gemessen an 10.331 Tagen echter Produktion: der typische Tagesfehler, warum Wolken ihn vergrößern, und wie du die ehrliche Zahl für dein Dach findest."
date: 2026-09-22
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "forecast-accuracy"
seo:
  ogTitle: "Wie genau sind PV-Ertragsprognosen wirklich?"
---
Die kurze Antwort für ein einzelnes Dach, gemessen an den Ertragsdaten unserer eigenen Nutzer: **Der Median des Tagesfehlers liegt bei rund 10 %, wenn der Himmel klar ist, und bei rund 18 %, wenn er geschlossen bedeckt ist.** Das ist eine Zahl pro Tag — die Prognose für diesen Tag gegen die Kilowattstunden, die der Wechselrichter tatsächlich geliefert hat. Nicht Einstrahlung, nicht ein Flottenmittel, nicht der beste Fall.

Die meisten veröffentlichten Genauigkeitsangaben sind damit nicht vergleichbar, und der Grund dafür ist interessanter als die Zahlen selbst.

## Was der Fehler tut, wenn Wolken aufziehen

![Median des Tagesfehlers nach Bewölkungsgrad, vor und nach der Kalibrierung, gemessen an 10.331 Tagen](/img/blog/forecast-error-by-cloud-de.webp)

Die Kohorte umfasst 137 Anlagen mit mindestens 20 Datentagen und mindestens fünf klaren Tagen. Fünfzehn weitere blieben draußen, weil ihr Verhältnis von Prognose zu Ertrag an klaren Tagen außerhalb von 0,75–1,33 lag — die Signatur einer falsch eingetragenen Anlagengröße, nicht eines Prognosefehlers. Mit ihnen stieg der Anteil klarer Tage mit mehr als 30% Abweichung von 8% auf 14%.

Aus dieser Grafik lassen sich zwei Dinge ablesen, und das zweite veröffentlicht so gut wie niemand.

Das erste: Der Fehler steigt mit der Bewölkung gleichmäßig an — 9,7 % in der klarsten Klasse, 18,2 % in der bedecktesten. Keine Kante, keine Überraschung, einfach eine stetige Steigung. Aufgerissene Bewölkung ist nun einmal das Schwierigste an dieser ganzen Aufgabe.

Das zweite: **Der mittlere Bias bleibt in jeder einzelnen Klasse zwischen 0,96 und 1,01.** Bias ist die Richtung, der Fehler ist die Größe. Ein Modell, das bei Wolken systematisch zu viel verspricht, würde ein Verhältnis deutlich unter 1 zeigen — dieses tut es nicht. Wenn die Prognose an einem bedeckten Tag danebenliegt, ist sie also ungefähr genauso oft zu hoch wie zu niedrig. Bei schlechtem Wetter wird das Modell nicht pessimistisch. Es wird unruhiger.

Der Unterschied ist praktisch, nicht akademisch. Zufälliger Fehler mittelt sich über eine Woche heraus — deshalb funktioniert Wochenplanung auch dann noch, wenn ein einzelner Tag danebenliegt. Systematischer Fehler mittelt sich nie heraus, und genau der ist es wert, verfolgt zu werden.

## Warum der Vergleich mit Herstellerzahlen meist eine Falle ist

In der Branche findest du Genauigkeitsangaben im Bereich 5–15 %. Die meisten davon messen etwas, das leichter ist als dein Dach.

Einstrahlungsprognosen sind einfacher als Ertragsprognosen, weil sie vor dem unangenehmen Teil aufhören: deinem Neigungswinkel, dem Kappungspunkt deines Wechselrichters, deiner Verschattung, dem Temperaturkoeffizienten. Flottenmittel sind einfacher als Einzelanlagen, weil sich die Fehler von hundert Dächern gegenseitig aufheben — so funktioniert Mitteln nun einmal, und es schmeichelt der Zahl erheblich. Und eine Genauigkeit, die ausschließlich an klaren Tagen erhoben wurde, ist noch einmal eine ganz andere Aussage.

Unsere Zahl ist die harte Variante der Messung: ein Dach, ein Tag, echte Kilowattstunden. Beim Vergleichen lohnt nur eine einzige Frage — was genau wurde da gemessen?

## Der Teil, den du selbst nachprüfen kannst

Nichts davon ist viel wert, wenn du es nicht überprüfen kannst. Also hier die Methode; es ist dieselbe, die wir intern verwenden.

1. **Nimm mindestens vier Wochen.** Alles darunter misst Wetter, nicht Genauigkeit. Ein einzelner schlechter Tag beweist in keine Richtung etwas.
2. **Rechne für jeden Tag |Prognose − Ertrag| ÷ Ertrag.** Das ist der absolute prozentuale Tagesfehler. Bilde davon den Median, nicht den Mittelwert — sonst bestimmt ein einziger Gewittertag das ganze Ergebnis.
3. **Trenne klare von bewölkten Tagen**, bevor du irgendetwas mittelst. Vermischt entsteht eine Zahl, die keinen der beiden Fälle beschreibt, und das ist der mit Abstand häufigste Fehler in solchen Vergleichen.
4. **Prüfe die Richtung getrennt.** Bilde über deine klaren Tage den Mittelwert von Prognose ÷ Ertrag. Nahe 1,0 heißt: Die Größe deiner Anlage ist richtig eingetragen. Dauerhaft nahe 0,8 oder 1,2 heißt das Gegenteil, und kein Prognosemodell wird das für dich reparieren.

Aus Schritt 4 stammen die meisten enttäuschenden Ergebnisse. Ein konstanter Versatz ist ein Konfigurationsproblem im Kostüm eines Prognoseproblems, und es lohnt sich, ihn auszuschließen, bevor du über alles andere urteilst.

## Was Kalibrierung bringt

Die indigofarbenen Balken in der Grafik sind das reine Physikmodell, die grünen zeigen den Stand, nachdem die Kalibrierung dein Dach ein paar Wochen lang beobachtet hat. Der Abstand ist über alle Wetterklassen hinweg gleich groß — grob zwei bis drei Prozentpunkte, und damit größer als der Unterschied zwischen zwei konkurrierenden Anbietern.

Deshalb sagt eine Genauigkeitsangabe für Tag eins wenig aus. Ein Modell, das deine Anlage noch nie gesehen hat, arbeitet mit der Leistung, der Neigung und der Ausrichtung, die du eingetragen hast — und das sind Näherungen an ein echtes Dach mit einem echten Schornstein darauf.

## Die ehrliche Zusammenfassung

Für ein einzelnes Dach, auf Tageskilowattstunden, über die ganze Bandbreite des Wetters: **Der Median liegt je nach Bewölkung bei etwa 10–18 %**, ohne systematische Neigung in die eine oder andere Richtung. Etwa 8 % der klaren und 28 % der stark bewölkten Tage weichen um mehr als 30 % ab.

Das reicht, um eine Waschmaschine, eine Autoladung oder einen Wärmepumpenlauf um das Produktionsfenster von morgen herum zu planen. Es reicht nicht, um auf Basis eines einzelnen Tageswerts mit Energie zu handeln — und wer dir das über irgendeine Prognose erzählt, verkauft dir etwas.
