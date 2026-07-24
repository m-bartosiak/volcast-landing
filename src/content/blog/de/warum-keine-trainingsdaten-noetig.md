---
title: "Warum neue Anlagen mit physikbasierten Modellen keine Trainingsdaten brauchen"
description: "Die meisten Prognose-Tools brauchen Monate an Verlaufsdaten. Physikbasierte Prognosen funktionieren ab dem ersten Tag. Warum das so ist."
date: 2026-05-26
tags: ["cold-start", "new-installation", "physics-model", "onboarding", "forecasting"]
series: "deep-dives"
seriesOrder: 7
lang: de
draft: false
seo:
  ogTitle: "Keine Trainingsdaten nötig — warum physikbasierte PV-Prognosen ab dem ersten Tag funktionieren"
  keywords: ["PV-Prognose neue Anlage", "Solarprognose ohne Trainingsdaten", "Cold Start Ertragsprognose", "physikbasiertes Modell ohne Verlaufsdaten"]
---

Gerade sind deine Solarmodule installiert worden. Der Wechselrichter läuft, die App zeigt die Produktion in Echtzeit, und du bist voller Vorfreude. Du willst wissen: Wie viel werden meine Module morgen produzieren? Kann ich meinen Energieverbrauch nach der Prognose planen?

Wenn du ein Prognose-Tool auf ML-Basis nutzt, lautet die Antwort: warten. Komm in 2–3 Monaten wieder, wenn wir genug Daten haben, um das Verhalten deiner Anlage zu lernen.

Wenn du ein physikbasiertes Tool wie Volcast nutzt, lautet die Antwort: sofort. Hier ist die stündliche Produktionskurve für morgen.

Dieser „Cold-Start"-Vorteil ist kein Marketingversprechen. Er ergibt sich direkt daraus, wie die beiden Ansätze funktionieren.

## Warum ML Trainingsdaten braucht

Ein Machine-Learning-Modell ist im Kern ein Mustererkenner. Es lernt die Zusammenhänge zwischen Eingaben (Wetterbedingungen) und Ausgaben (deiner Produktion), indem es viele Beispiele beobachtet. Ohne Beispiele hat es nichts, womit es abgleichen kann.

Überleg dir, was das Modell für genau deine Anlage lernen muss: wie viel Leistung du bei klarem Himmel zu verschiedenen Jahreszeiten produzierst (das erfasst Ausrichtung, Neigung und jede feste Verschattung deiner Module). Wie sich die Temperatur auf genau deine Module auswirkt (das hängt von ihrem Temperaturkoeffizienten, der Montageart und der Belüftung ab). Wie sich Bewölkung in Produktionseinbußen übersetzt (das hängt von deiner Modulausrichtung und den typischen Wolkenmustern an deinem Standort ab).

Jedes davon erfordert Daten, die unterschiedliche Bedingungen abdecken. Um die saisonale Variation zu lernen, braucht das Modell idealerweise ein volles Jahr. Um das Wolkenverhalten zu lernen, braucht es Dutzende bewölkter Tage. Um die Temperatureffekte zu charakterisieren, braucht es sowohl heiße als auch kalte Tage mit ähnlicher Einstrahlung.

In der Praxis werden die meisten ML-Modelle nach 2–3 Monaten „brauchbar" und nach 6–12 Monaten „gut". Vorher sind sie entweder gar nicht verfügbar oder sie raten auf Basis ähnlicher Anlagen in der Umgebung — was selbst wieder eine Form von Physik-Näherung ist, nur eine grobe.

## Warum Physik keine Verlaufsdaten braucht

Ein physikbasiertes Modell lernt das Verhalten deiner Anlage nicht durch Beobachtung. Es *berechnet* es aus ersten Prinzipien.

Aus deiner Neigung weiß es exakt, wie die Sonnenstrahlen deine Module in jedem Moment jedes Tages des Jahres treffen. Das ist Geometrie, keine Statistik.

Aus deinem Azimut weiß es, wann deine Module am direktesten zur Sonne zeigen, und formt daraus die Tagesproduktionskurve. Reine Trigonometrie.

Aus deiner Nennleistung kennt es den Skalierungsfaktor zwischen Einstrahlung und elektrischer Ausgangsleistung. Eine einzige Zahl, die Modulwirkungsgrad und Fläche zusammenfasst.

Aus deinem Standort berechnet es den Sonnenlauf (Astronomie), wählt den passenden Gitterpunkt des Wettermodells und wendet atmosphärische Modelle an, die gegen jahrzehntelange Messdaten kalibriert sind — nicht gegen deine Daten, sondern gegen die grundlegende Atmosphärenphysik, die überall auf der Erde gilt.

Und der Temperaturkoeffizient? Silizium-Module liegen eng beieinander zwischen -0,35 % und -0,45 % pro °C. Wenn man den typischen Wert von -0,4 % verwendet, entsteht an extremen Temperaturtagen höchstens ein Fehler von 1–2 %. Das liegt unterhalb der Unsicherheit der Wetterprognose.

Der Wechselrichter-Wirkungsgrad? Moderne Wechselrichter arbeiten über den größten Teil ihres Leistungsbereichs mit 96–98 % Wirkungsgrad. 97 % anzusetzen ist für Prognosezwecke genau genug.

Kabelverluste? Typischerweise 1–3 % und näherungsweise konstant. Sie skalieren die Ausgangsleistung gleichmäßig, ohne die Form der Prognose zu verändern.

Nichts davon erfordert, deine Anlage zu beobachten. Es sind physikalische Eigenschaften, die sich aus allgemeinem Wissen mit für Prognosezwecke akzeptabler Genauigkeit schätzen lassen.

## Das Erlebnis am ersten Tag

Das passiert, wenn du Volcast am ersten Tag mit deinen Solarmodulen einrichtest:

Du gibst drei Zahlen ein: Neigung, Azimut, Nennleistung. Den Standort liefert dein Handy. Innerhalb von Sekunden führt das Modell die komplette physikalische Simulation für die Prognose von morgen durch: Berechnung der Sonnenposition, Abruf der Wettermodelldaten, Modellierung der atmosphärischen Strahlung, Zerlegung der Einstrahlung, Perez-Transposition auf deine geneigte Fläche, Temperatur-Derating und Schätzung der elektrischen Ausgangsleistung.

Du siehst eine stündliche Produktionskurve für morgen. Sie zeigt den Anstieg am Morgen ab Sonnenaufgang, das Maximum um den solaren Mittag (verschoben durch deinen Azimut), den Rückgang am Nachmittag und den geschätzten Tagesertrag.

Ist diese Prognose perfekt? Nein. Sie trägt die gesamte Unsicherheit der zugrunde liegenden Wetterprognose in sich — vor allem die Unsicherheit der Wolkenvorhersage. Aber sie ist physikalisch fundiert. Die Form der Kurve stimmt, weil Geometrie nicht lügt. Die Größenordnung ist auf deine Nennleistung kalibriert. Die Temperatureffekte sind aus der Thermodynamik modelliert.

Vergleich das mit „bitte 3 Monate warten". Für einen neuen PV-Besitzer, der sein System verstehen will, ist dieses Warten eine Ewigkeit.

## Wann Verlaufsdaten doch helfen

Das soll nicht heißen, dass historische Daten nutzlos sind. Wenn du Volcast seit 6 Monaten laufen hast und feststellst, dass die Prognose konsequent um 8 % zu hoch liegt, sagt dir das etwas — vielleicht hast du eine nicht erfasste Verschattung, oder deine Module weichen leicht vom angegebenen Azimut ab, oder dein Wechselrichter regelt früher ab, als das Modell annimmt.

Das Physikmodell liefert die Grundlinie. Der Vergleich mit Verlaufsdaten liefert die Kalibrierung. Zusammen sind sie genauer als jeder Ansatz für sich.

Zukünftige Versionen von Volcast könnten diese Selbstkalibrierung einbauen — also deine tatsächlichen Produktionsdaten nutzen (wenn du sie teilen möchtest), um die Parameter des physikalischen Modells feinzujustieren. Aber das Schlüsselwort ist „feinjustieren". Die Physik bringt dich am ersten Tag zu 90–95 % ans Ziel. Die Kalibrierung poliert die letzten paar Prozent.

## Die weitergehende Bedeutung

Der Cold-Start-Vorteil ist nicht nur eine Frage der Bequemlichkeit. Er hat Auswirkungen auf das gesamte Ökosystem der Solarprognose.

**Zugänglichkeit:** Eine Prognose, die sofort funktioniert, ist eine Prognose, die für alle funktioniert — auch für Menschen, die gerade erst Module bekommen haben, die ihre Wechselrichter-Plattform gewechselt haben oder die sich schlicht nicht mit Datenexport- und Upload-Prozessen herumschlagen wollen.

**Datenschutz:** Eine physikbasierte Prognose braucht deine Produktionshistorie nicht. Deine Anlagenparameter (Neigung, Azimut, Leistung) sind keine sensiblen Daten — sie sind auf einem Satellitenfoto deines Dachs sichtbar. Du bekommst eine Prognose, ohne deine Verbrauchsmuster preiszugeben.

**Robustheit:** Wenn sich etwas ändert — du fügst Module hinzu, ein Baum wächst, dein Wechselrichter wird ausgetauscht — passt sich ein Physikmodell sofort mit aktualisierten Parametern an. Ein ML-Modell muss neu lernen, unter Umständen von Grund auf.

**Skalierbarkeit:** Ein Physikmodell kann mit drei Eingaben eine Prognose für jeden Standort der Erde erzeugen. Es müssen keine Trainingsdaten für jede neue Anlage, Region oder jedes Land angesammelt werden.

Deshalb hat sich Volcast für den Physik-First-Ansatz entschieden. Die Gesetze der Thermodynamik, der Optik und der Halbleiterphysik brauchen keine Trainingsphase. Sie funktionieren ab dem ersten Tag, überall, für jede Anlage.

Drei Zahlen. Keine Historie. Genau ab der ersten Prognose.
