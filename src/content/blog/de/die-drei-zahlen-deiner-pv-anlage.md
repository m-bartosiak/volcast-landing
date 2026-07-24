---
title: "Die drei Zahlen, die deine PV-Anlage definieren (und warum Volcast nur sie braucht)"
description: "Neigung, Azimut und Nennleistung — mehr braucht eine physikbasierte Prognose nicht, um deinen Solarertrag vorherzusagen."
date: 2026-03-24
tags: ["setup", "parameters", "getting-started", "pv-basics", "beginner"]
series: "fundamentals"
seriesOrder: 5
lang: de
draft: false
seo:
  ogTitle: "Die drei Zahlen, die deine Solaranlage definieren — und warum das reicht"
  keywords: ["PV-Anlage einrichten", "Solaranlage Parameter", "Ertragsprognose Eingaben", "Volcast Einrichtungsanleitung"]
---

Die meisten Solar-Prognosetools verlangen eine ellenlange Liste an Eingaben oder brauchen wochenlange Produktionsdaten, bevor sie eine brauchbare Vorhersage liefern. Volcast fragt nach drei Zahlen — plus deinem Standort, den dein Handy ohnehin schon kennt. Mehr nicht.

Das ist keine Einschränkung, sondern eine bewusste Design-Entscheidung, die tief in der Funktionsweise physikbasierter Modellierung verwurzelt ist. Schauen wir uns an, was jede Zahl dem Modell verrät und warum drei ausreichen.

## Zahl 1: Neigungswinkel

**Was das ist:** Der Winkel deiner Module gegenüber dem waagerechten Boden, in Grad. 0° ist flach, 90° ist senkrecht.

**Was das dem Modell verrät:** Wie es den Einfallswinkel berechnet — den Winkel zwischen den einfallenden Sonnenstrahlen und der Moduloberfläche — zu jedem Zeitpunkt des Tages. Das bestimmt unmittelbar, wie viel der verfügbaren Direkteinstrahlung dein Modul einfängt.

Der Einfallswinkel fließt außerdem in die Berechnung der **Fresnel-Reflexion** ein. Bei flachen Einfallswinkeln (das Licht trifft fast seitlich auf das Glas) wird mehr Licht an der Oberfläche reflektiert, statt in die Zelle zu gelangen. Das ist dieselbe Physik, die eine Seeoberfläche bei Sonnenuntergang spiegelglatt erscheinen lässt.

**Wie du ihn findest:** Wenn deine Module auf einem Schrägdach liegen, entspricht die Neigung der Dachneigung. Übliche Werte in Europa: 15–45°. Falls du deine Dachneigung nicht kennst, liefert dir eine Neigungsmesser-App auf dem Smartphone, ans Modul gehalten, die Antwort in Sekunden. Bei Flachdach- oder Freiflächen-Installationen ist die Neigung genau der Winkel, auf den das Montagegestell eingestellt ist.

**Empfindlichkeit:** Wie wir im vorigen Beitrag besprochen haben, ändert sich der Jahresertrag nur langsam mit der Neigung. Eine Abweichung von 5° verändert den Ertrag um etwa 1–2 %. Zerbrich dir darüber nicht den Kopf — eine vernünftige Schätzung genügt.

## Zahl 2: Azimutwinkel

**Was das ist:** Die Himmelsrichtung, in die dein Modul zeigt. 180° ist Süden (Optimum auf der Nordhalbkugel), 90° ist Osten, 270° ist Westen.

**Was das dem Modell verrät:** Zu welcher Tageszeit deine Module das meiste direkte Sonnenlicht erhalten. Ein nach Süden ausgerichtetes Modul erreicht sein Maximum zur Sonnenmittagszeit. Ein nach Osten ausgerichtetes Modul erreicht es am Vormittag. Das formt die gesamte Tagesertragskurve.

Der Azimut beeinflusst außerdem, wie viel bodenreflektiertes Licht das Modul erreicht (Module, die von einer schneebedeckten Fläche wegzeigen, verpassen diese Reflexion) und wie sich die diffuse Himmelsstrahlung über das Sichtfeld des Moduls verteilt.

**Wie du ihn findest:** Eine Kompass-App auf deinem Handy, auf deine Module gerichtet, gibt dir den Azimut. Oder schau dir dein Dach auf Google Maps an — auf der Nordhalbkugel ist Süden unten. Wenn du eine Ost-West-Installation hast, kannst du in Volcast zwei Teilfelder anlegen.

**Empfindlichkeit:** Wie bei der Neigung ändert sich der Jahresertrag nur sanft. Eine Abweichung von 30° gegenüber Süden kostet etwa 3–5 %. Selbst nach Osten oder Westen ausgerichtete Module fangen noch 80–85 % des theoretischen Maximums ein.

## Zahl 3: Nennleistung (kWp)

**Was das ist:** Die typenschildmäßige Leistung deiner Anlage in Kilowatt-Peak (kWp). Das ist die Gesamtleistung unter Standardtestbedingungen (STC): 1000 W/m² Einstrahlung, 25 °C Zelltemperatur, AM1.5-Sonnenspektrum.

**Was das dem Modell verrät:** Den Skalierungsfaktor für die gesamte Berechnung. Die Physik-Engine berechnet, welcher Anteil der STC-Einstrahlung deine geneigte Fläche zu einem gegebenen Zeitpunkt erreicht, wendet Temperatur-Deratings und optische Verluste an und multipliziert mit deiner Nennleistung, um die erwartete Leistung in Watt zu erhalten.

In einem Physikmodell ist kWp im Grunde die Brücke zwischen dem Einstrahlungsmodell (das W/m² nutzbarer Energie ausgibt) und der elektrischen Leistung (die dich eigentlich interessiert). Sie fasst Modulwirkungsgrad, Gesamtfläche und Zelleigenschaften in einer einzigen Zahl zusammen.

**Wie du sie findest:** Sie steht auf deinem Installationsvertrag, auf dem Display deines Wechselrichters oder auf den Typenschildern der Module. Typische Werte im Eigenheim: 3–15 kWp. Eine Anlage mit 10 Modulen à 400 W ergibt 4,0 kWp.

**Empfindlichkeit:** Das ist die eine Zahl, die du richtig treffen solltest. Ein Fehler von 10 % bei der Nennleistung bedeutet 10 % Fehler in der Ertragsprognose — der Zusammenhang ist linear. Zum Glück ist es auch die Zahl, die du am genauesten kennst, denn sie steht schwarz auf weiß in deinen Unterlagen.

## Was ist mit dem Standort?

Der Standort ist streng genommen eine vierte Eingabe, aber Volcast holt ihn sich automatisch über das GPS deines Handys oder lässt dich ihn auf einer Karte setzen. Aus deinen Koordinaten leitet das Modell alles ab, was es über den Sonnenstand wissen muss: Sonnendeklination, Stundenwinkel, Sonnenauf- und -untergangszeiten sowie Sonnenhöhe und -azimut zu jedem Zeitpunkt des Jahres.

Der Standort wählt außerdem den passenden Gitterpunkt der Wetterprognose aus. Die Daten der NWP-Wettermodelle liegen auf einem geografischen Gitter vor (bei Regionalmodellen typischerweise mit 0,1–0,25° Abstand), und dein Standort bestimmt, welche Gitterzellen verwendet und wie sie interpoliert werden.

## Warum nicht mehr Parameter?

Du fragst dich vielleicht: Sollte das Modell nicht deine konkrete Modulmarke, den Wechselrichter-Wirkungsgrad, die Kabelverluste oder die Verschattungsmuster kennen?

Die Sache ist die — für eine **Prognose** bringen zusätzliche Parameter immer weniger:

**Modulmarke/-modell** wirkt sich hauptsächlich auf die Nennleistung (die du bereits angibst) und den Temperaturkoeffizienten aus. Die Temperaturkoeffizienten von Silizium-Modulen liegen eng beieinander zwischen −0,35 % und −0,45 %/°C. Wer den Durchschnitt verwendet, handelt sich an heißen Tagen vielleicht 1–2 % Fehler ein. Für Prognosezwecke ist das Rauschen im Vergleich zur Wetterunsicherheit.

**Wechselrichter-Wirkungsgrad** über 96–98 % bei modernen Geräten bedeutet Verluste von 2–4 %. Die Unterschiede zwischen den Marken sind winzig — vielleicht 1 % zwischen einem guten und einem hervorragenden Wechselrichter. Auch das liegt unter dem Rauschen der Wetterprognose.

**Kabelverluste** liegen typischerweise bei 1–3 % und sind ziemlich konstant. Sie skalieren alles gleichmäßig, ohne die Form der Prognose zu verändern.

**Verschattung** ist der eine Parameter, der wirklich zählt und von den drei Zahlen nicht erfasst wird. Wenn du eine nennenswerte Verschattung hast (Bäume, Schornsteine, Nachbargebäude), fällt deine tatsächliche Produktion systematisch niedriger aus als die Prognose. Das ist eine bekannte Grenze — Volcast nennt dir das theoretische Maximum für deine Ausrichtung, und du kannst bekannte Verschattung im Kopf abziehen. Künftige Versionen könnten eine Verschattungsmodellierung ergänzen.

Die Philosophie lautet: **die wichtigste Physik mit den wenigsten Eingaben erfassen**. Neigung, Azimut und Leistung bringen dich auf 90–95 % Genauigkeit. Die verbleibenden 5–10 % stammen aus Faktoren, die entweder schwer präzise zu messen sind (Verschattung, Verschmutzung) oder zwischen Anlagen so wenig variieren, dass Mittelwerte völlig genügen (Temperaturkoeffizienten, Wechselrichter-Wirkungsgrad).

## Der Vergleich mit Machine Learning

Diese Schlichtheit ist ein direkter Vorteil gegenüber Machine-Learning-Ansätzen. Ein ML-Modell braucht wochen- oder monatelange historische Produktionsdaten, um zu lernen, wie sich deine konkrete Anlage unter verschiedenen Bedingungen verhält. Solange es diese Daten nicht hat, kann es nicht prognostizieren. Und wenn sich die Bedingungen ändern (neue Verschattung durch einen wachsenden Baum, Moduldegradation, zusätzliche Module), braucht das Modell Zeit, um umzulernen.

Die Physik kennt keine Lernphase. Aus drei Zahlen und einer Wetterprognose berechnet sie den erwarteten Ertrag von Grund auf — nach denselben Prinzipien, die die Sonnenenergie schon steuerten, bevor deine Module überhaupt hergestellt wurden.

Das ist die Stärke, die Physik zu modellieren, statt die Daten anzupassen.
