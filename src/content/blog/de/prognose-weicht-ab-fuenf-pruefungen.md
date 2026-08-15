---
title: "Prognose weicht ab: fünf Prüfungen der Reihe nach"
description: "Bevor du das Modell verdächtigst: vier Ursachen sehen aus wie Prognosefehler und sind keine. Ein fünfter Test zeigt, ob wirklich das Wetter schuld war."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "Solarprognose stimmt nicht? Diese fünf Dinge prüfen"
---
Wenn Ertrag und Prognose auseinanderlaufen, ist das Modell der naheliegende Verdächtige — und meist der falsche. Vier der fünf häufigsten Ursachen sind Eigenschaften deiner Anlage, von denen die Prognose nie erfahren hat, und jede hinterlässt eine andere Spur als ein echter Wetterfehler. Arbeite die Punkte in dieser Reihenfolge ab, das Billigste und Wahrscheinlichste zuerst. Der fünfte Schritt sagt dir dann, ob der Rest tatsächlich am Himmel liegt.

## 1. Die Nennleistung, die du eingetragen hast

Fang hier an, denn das ist mit Abstand die häufigste Ursache und in fünf Minuten geklärt. Eine Prognose modelliert das Licht, das deine Module einsammeln — sie braucht also die Modulleistung in Watt-Peak, nicht die Angabe auf dem Wechselrichter. Zwölf Module à 510 W sind ein Feld mit 6,12 kWp, auch wenn ein Wechselrichter mit 5 kW an der Wand hängt.

Die Signatur ist ein **konstantes Verhältnis**: Jeder klare Tag landet bei ungefähr demselben Bruchteil der Prognose, weil eine falsche Nennleistung ein fester Multiplikator auf jede Stunde ist. Wenn deine klaren Tage sich um 0,8 oder um 1,2 sammeln, hör hier auf zu lesen und korrigier die Zahl — alles Weitere ist Rauschen, solange sie falsch ist. Die vollständige Methode steht in [wie du die echte kWp-Zahl deiner Anlage findest](/blog/de/q/wie-viel-kwp-hat-meine-anlage-wirklich/).

## 2. Abregelung am Wechselrichter

Wenn die Lücke nur um die Mittagszeit auftritt, und zwar an den sonnigsten Tagen, und deine Ertragskurve dort oben flach ist statt spitz — dann siehst du keinen Prognosefehler. Du siehst den Wechselrichter bei der Arbeit: Ein Modulfeld, das größer ist als der Wechselrichter, ist gängige Auslegung und kappt im Jahr eine überschaubare Zahl von Stunden.

Zwei Antworten gehen ins Detail — [warum die Produktion mittags gekappt wird](/blog/de/q/warum-wird-die-produktion-mittags-gekappt/) und [ob ein kleinerer Wechselrichter ein Planungsfehler ist](/blog/de/q/wechselrichter-kleiner-als-module-fehler/). Kurzfassung: Das flache Dach der Kurve ist eine Entscheidung, kein Defekt — und die Prognose kann es nur abbilden, wenn sie die Grenze des Wechselrichters kennt.

## 3. Verschattung, die das Modell nicht sieht

Eine Prognose weiß, wo die Sonne steht. Sie weiß nichts vom Schornstein des Nachbarn, vom Walnussbaum oder von der Dachgaube drei Meter weiter westlich. Nahverschattung ist für jedes Modell unsichtbar, dem man sie nicht ausdrücklich mitgeteilt hat.

Die Signatur unterscheidet sich klar von den ersten beiden: Der Fehler ist **nicht konstant, aber er wiederholt sich zur selben Tageszeit**. Der Vormittag passt, der Nachmittag fällt ab, und das an jedem klaren Tag derselben Jahreszeit. Nimm dir fünf klare Tage und vergleiche Stunde für Stunde statt Tagessummen — die Form verrät es. Eine Tagessumme versteckt genau das, wonach du suchst.

Unangenehm daran ist, dass die Form über das Jahr wandert, weil sich der Sonnenstand ändert. Ein Schatten, der dich im Juni nichts kostet, kann im Oktober den halben Nachmittag auffressen.

## 4. Schmutz, Schnee und alles, was langsam wächst

Verschmutzung hat die eindeutigste Signatur von allen: **eine langsame Drift in eine Richtung**. Kein schlechter Tag, keine schlechte Woche — ein Verhältnis, das im April bei 1,0 lag und im Juli bei 0,92 liegt, ohne ein einzelnes Ereignis, auf das man zeigen könnte. Pollen, Staub nach einer trockenen Phase, Salz in Küstennähe, Vogelkot auf einem String.

Schnee ist der Gegenfall: total, offensichtlich und selbstauflösend. Erwähnenswert nur deshalb, weil ein teilweise bedecktes Feld so wenig liefern kann, dass man einen Defekt vermutet.

Der Test ist simpel. Notier dir jeden Monat deinen besten klaren Tag. Diese persönliche Referenzkurve macht Drift sichtbar, wie es ein Vergleich von Tag zu Tag nie schafft — und sie fängt nebenbei echte Degradation über Jahre ab.

## 5. Und jetzt: war es das Wetter?

Wenn die vier Punkte oben ausgeschlossen sind, kannst du die Frage endlich sauber stellen — und die ehrliche Antwort lautet: In Wolken sind Prognosen tatsächlich schlechter.

Gemessen an den Ertragsdaten unserer eigenen Nutzer: An Tagen mit klarem Himmel liegt der mittlere Fehler bei rund **12 %**, an Tagen mit geschlossener Bewölkung eher bei **20 %**. An stark bewölkten Tagen weichen etwa **31 %** der Tage um mehr als **30 %** in die eine oder andere Richtung ab, gegenüber **16 %** der klaren Tage. Wichtig dabei: Der mittlere Bias bleibt in jeder Wetterklasse nahe null — die Prognose über- oder unterschätzt in Wolken nicht systematisch, sie wird nur unruhiger.

Genau diese Unterscheidung ist der Sinn dieses Schritts. **Streuung ist Wetter. Ein konstanter Versatz ist Konfiguration.** Wenn deine Abweichungen groß sind, über viele Tage aber auf beiden Seiten landen, hast du die Antwort gefunden und es gibt nichts zu reparieren. Kippen sie dauerhaft in eine Richtung, geh zurück zu Schritt 1.

Zwei Anmerkungen zum Vergleich mit Herstellerzahlen. Die meisten Genauigkeitsangaben der Branche messen Einstrahlung oder den aggregierten Ertrag einer ganzen Flotte — beides ist deutlich leichter vorherzusagen als die Tageskilowattstunden eines einzelnen Dachs. Und ein einzelner Tag beweist in keine Richtung etwas; es braucht Wochen, bevor ein Mittelwert überhaupt eine Bedeutung hat.

## Was zu tun ist

1. **Zuerst die Nennleistung.** Modulanzahl mal Typenschildleistung, getrennt nach Ausrichtung. Vorher lohnt keine einzige Messung.
2. **Klare Tage von bewölkten trennen**, bevor du irgendeinen Mittelwert bildest. Vermischt beschreibt die Zahl keinen von beiden.
3. **Stunde für Stunde vergleichen, wenn die Tagessumme in Ordnung aussieht.** Verschattung und Abregelung verstecken sich beide in einer korrekt wirkenden Tagessumme.
4. **Jeden Monat den besten klaren Tag notieren.** Das ist das billigste Messgerät, das du hast, um langsame Drift zu erkennen.
5. **Über Wochen urteilen, nicht über Tage.** Und wenn du tiefer einsteigen willst, fang an bei [wie du prüfst, ob deine Anlage richtig arbeitet](/blog/de/q/wie-pruefe-ich-ob-die-anlage-richtig-arbeitet/) und [warum Module nie ihre Nennleistung erreichen](/blog/de/q/warum-erreichen-module-nie-die-nennleistung/).
