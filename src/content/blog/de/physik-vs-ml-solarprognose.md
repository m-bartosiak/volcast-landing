---
title: "Physikbasierte vs. ML-basierte Solarprognose — warum der Ansatz entscheidend ist"
description: "Zwei grundverschiedene Wege, PV-Erträge vorherzusagen: der eine modelliert die Physik, der andere lernt aus Daten. Warum der Unterschied für deine Prognose zählt."
date: 2026-04-14
tags: ["physics-model", "machine-learning", "forecasting", "methodology"]
series: "deep-dives"
seriesOrder: 1
lang: de
draft: false
seo:
  ogTitle: "Physik vs. ML in der Solarprognose — welcher Ansatz ist genauer?"
  keywords: ["physikbasierte Solarprognose", "PV-Prognose maschinelles Lernen", "Solarprognose Vergleich", "PV-Ertragsprognose Methoden"]
---

Wenn du nach „Solarertragsprognose" suchst, stößt du auf Dutzende Apps und Dienste. Alle versprechen genaue Vorhersagen. Doch unter der Haube arbeiten sie mit grundlegend verschiedenen Ansätzen — und der Ansatz bestimmt, wann die Prognose funktioniert, wann sie scheitert und was sie von dir braucht.

Die beiden Lager sind die **physikbasierte Modellierung** und das **maschinelle Lernen (ML)**. Das sind nicht einfach zwei Werkzeuge für dieselbe Aufgabe. Sie denken das Problem grundlegend anders.

## Der ML-Ansatz: aus der Vergangenheit lernen

Eine ML-Prognose funktioniert so: Du fütterst das Modell mit Monaten historischer Ertragsdaten deiner Anlage, zusammen mit den dazugehörigen Wetterdaten. Das Modell findet statistische Muster — „als die Temperatur X, die Bewölkung Y und der Wind Z waren, produzierte diese Anlage W Watt".

Je mehr Daten du lieferst, desto besser lernt es die Eigenheiten deiner Anlage: konkrete Verschattungsmuster, das Verhalten des Wechselrichters, Verschmutzungseffekte, Kabelverluste. Mit genug Historie kann es implizit Effekte erfassen, die sich explizit nur schwer modellieren ließen.

Das klingt mächtig, und das ist es auch — mit zwei entscheidenden Einschränkungen.

**Einschränkung eins: das Kaltstart-Problem.** Eine neue Anlage hat keine Historie. Das Modell kann nicht lernen, was es nie gesehen hat. Die meisten ML-Prognosen brauchen 2 bis 6 Monate Daten, bevor sie zuverlässig werden. In dieser Zeit — also ausgerechnet dann, wenn du eine Prognose am dringendsten brauchst, weil du dein System noch kennenlernst — bekommst du nichts Brauchbares.

**Einschränkung zwei: die Verteilungsverschiebung.** ML-Modelle setzen voraus, dass die Zukunft der Vergangenheit ähnelt. Ändern sich die Bedingungen auf eine Weise, die das Modell noch nicht gesehen hat, extrapoliert es schlecht. Ein überraschender Schneesturm im Frühjahr, eine ungewöhnlich klare Winterwoche oder ein neues Gebäude, das nachmittags Schatten wirft — genau das sind die Momente, in denen du eine genaue Prognose willst, und genau dann ist ML am wenigsten dafür gerüstet.

## Der Physik-Ansatz: Modellierung aus ersten Prinzipien

Eine physikbasierte Prognose arbeitet anders. Statt statistische Zusammenhänge zu lernen, simuliert sie den physikalischen Prozess, der aus Sonnenlicht Strom macht.

Die Kette sieht so aus: Man startet mit dem Sonnenstand (astronomisch berechnet), modelliert, wie die Sonnenstrahlung die Atmosphäre durchläuft (Streuung, Absorption, Wolkendämpfung), zerlegt das Ergebnis in direkte und diffuse Anteile, transponiert diese auf deine geneigte Modulfläche, berechnet die Zelltemperatur und wendet die photovoltaische Umwandlung samt Temperatur-Derating an.

Jeder Schritt nutzt gut etablierte physikalische Gleichungen: das Transpositionsmodell nach Perez oder Hay-Davies, die atmosphärische Transmission nach Beer-Lambert, das Eindioden-Modell der PV-Zelle. Das sind keine Schätzungen oder Näherungen — es sind dieselben Gleichungen, mit denen PV-Ingenieure Solarparks auslegen.

Das Modell braucht von dir nur drei Eingaben: Neigungswinkel, Azimut und Nennleistung. Zusammen mit deinem Standort (für den Sonnenverlauf) und einer Wetterprognose (für die atmosphärischen Bedingungen) berechnet es den erwarteten Ertrag von Grund auf.

## Wo jeder Ansatz glänzt

**ML ist besser, wenn:**

Du über Jahre saubere Ertragsdaten und stabile Bedingungen verfügst. Das Modell hat jedes Wettermuster gesehen, das an deinem Standort auftritt. An deiner Anlage hat sich nichts geändert. In diesem Szenario kann ML implizit Mikroeffekte erfassen (Teilverschattung um 15 Uhr im Dezember, Clipping des Wechselrichters bei Spitzenleistung), die ein Physikmodell nur mit expliziter Konfiguration abbilden könnte.

ML brilliert außerdem bei der sehr kurzfristigen Prognose (Minuten bis Stunden im Voraus), wenn es Echtzeit-Ertragsdaten als Eingabe nutzt. Wenn deine Module gerade 3,2 kW produzieren und der Himmel klar ist, kann ein ML-Modell die nächste Stunde recht gut extrapolieren, ohne zu verstehen, warum.

**Physik ist besser, wenn:**

Du eine neue Anlage hast. Du etwas verändert hast (Module ergänzt, neue Verschattung). Die Bedingungen ungewöhnlich sind. Du eine Prognose an einem Standort oder in einem Klima brauchst, das das Modell nie gesehen hat. Du den stündlichen Kurvenverlauf willst, nicht nur Tagessummen. Du keine monatelangen Ertragsdaten mit einem Dritten teilen willst.

Physikmodelle sind außerdem transparenter. Wenn die Prognose danebenliegt, kannst du diagnostizieren, warum — lag die Wetterprognose falsch? War das Temperaturmodell ungenau? War die Zerlegung der Einstrahlung fehlerhaft? Bei ML sind Fehler undurchsichtig: Das Modell lag falsch, weil das Modell falsch lag.

## Die Hybrid-Option

Der stärkste Ansatz kombiniert beide. Nutze die Physik als Fundament — sie liefert das strukturelle Verständnis, wie aus Sonnenlicht Strom wird. Setze dann ML zur Kalibrierung ein: Wenn das Physikmodell für deine Anlage konsequent um 5 % zu hoch prognostiziert, kann eine dünne ML-Schicht diese Korrektur lernen.

So bekommst du den Kaltstart-Vorteil der Physik (funktioniert vom ersten Tag an) zusammen mit der Fähigkeit von ML, sich mit der Zeit an anlagenspezifische Effekte anzupassen.

Volcast setzt bei der Physik an. Schon ab deiner ersten Prognose durchläuft das Modell die vollständige physikalische Simulationskette. Es muss nicht wissen, was deine Module letzten Monat gemacht haben, um vorherzusagen, was sie morgen leisten. Die Gesetze der Physik haben keine Trainingsphase.

## Die Frage nach der Genauigkeit

Oft wird gefragt: „Was ist genauer?" Die ehrliche Antwort lautet: Es kommt auf den Zeithorizont an und darauf, was du unter Genauigkeit verstehst.

Bei **Prognosen für den Folgetag** sind beide Ansätze in erster Linie durch die Unsicherheit der Wetterprognose begrenzt — nicht durch das PV-Modell. Egal ob Physik oder ML: Sagt die Wetterprognose „klar" und es regnet, wird deine Ertragsprognose falsch sein. Der Modellierungsansatz zählt weniger als die Qualität der Wetterdaten.

Beim **stündlichen Kurvenverlauf** hat meist die Physik die Nase vorn. Sie bildet den morgendlichen Anstieg, das Mittagsmaximum und den abendlichen Abfall geometrisch korrekt ab. ML kann diese Form lernen, muss dafür aber genug Tage sehen, um die saisonale Schwankung zu erfassen.

Bei der **langfristigen Ertragsschätzung** ist die Physik robuster, weil sie sich nicht an die Wettermuster eines bestimmten Zeitraums überanpasst.

Beim **Nowcasting** (nächste 15 bis 60 Minuten) hat meist ML mit Echtzeit-Eingabedaten die Nase vorn, weil es schneller auf aktuelle Bedingungen reagieren kann als ein Physikmodell, das auf 6-stündlichen Wetteraktualisierungen läuft.

Die eigentliche Frage ist nicht „was ist genauer", sondern „was liefert mir mit dem, was ich jetzt gerade habe, eine brauchbare Prognose". Hast du jahrelange Daten und eine stabile Anlage, kann ML hervorragend sein. Fängst du bei null an oder willst du Transparenz, ist die Physik das richtige Fundament.

## Warum das für dich zählt

Als PV-Besitzer beeinflusst der Ansatz deines Prognosewerkzeugs deine Erfahrung ganz konkret.

Mit einem physikbasierten Werkzeug bekommst du schon am ersten Tag eine funktionierende Prognose. Du musst nicht warten. Du musst keine Daten aus dem Portal deines Wechselrichters exportieren. Du musst keinem Dritten deine Ertragshistorie anvertrauen.

Du bekommst außerdem eine Prognose, die du nachvollziehen kannst. Sagt die Prognose morgen 25 kWh voraus und du erntest nur 18 kWh, kannst du prüfen: War das Wetter anders als vorhergesagt? Gab es unerwartete Verschattung? Das Physikmodell gibt dir einen Rahmen, um die Lücke zu verstehen.

Genau diese Art von Prognose liefert Volcast — und in den folgenden Beiträgen tauchen wir tiefer in jeden einzelnen Schritt der physikalischen Simulationskette ein.
