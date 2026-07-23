---
title: "Verschattung bei PV — wie viel Ertrag sie wirklich kostet"
description: "Schornstein, Baum, Gaube: wie Verschattung den PV-Ertrag drückt, wie du sie misst — und wie eine Prognose mit Verschattungsprofil sie einpreist."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: de
draft: true
translationKey: "shading"
seo:
  ogTitle: "Verschattung bei PV — so viel Ertrag kostet sie wirklich"
---
Verschattung ist der am meisten unterschätzte Ertragskiller — und der am häufigsten schöngeredete. Ein Schornsteinschatten, der nachmittags über zwei Module wandert, kostet je nach String-Verschaltung nicht „zwei Module für eine Stunde", sondern unter Umständen die Leistung des halben Strings. Hier die Physik dahinter, die Messmethoden und der Umgang damit in Prognose und Planung.

## Warum Teilverschattung überproportional wehtut

Module in einem String sind in Serie geschaltet — der Strom des schwächsten Glieds begrenzt alle. Ein zu 50 % verschattetes Modul kann den ganzen String ausbremsen, wenn die Bypass-Dioden die betroffene Zellgruppe nicht sauber überbrücken. Moderne Optimierer und Mikrowechselrichter entschärfen das, kosten aber Geld und lösen das Grundproblem nicht: Verschattete Fläche produziert nicht.

Die typischen Täter, grob nach Schadenspotenzial: wachsende Bäume (der Schaden nimmt jedes Jahr zu), Nachbargebäude und Gauben (saisonal wandernd — im Winter reicht der Schatten viel weiter), Schornsteine und Antennen (klein, aber täglich zur selben Zeit), sowie Staub und Blätter an der Modulunterkante.

## Verschattung messen statt schätzen

**Methode 1 — der Sonnentag:** An einem klaren Tag alle 1–2 Stunden ein Foto des Dachs. Der Schattenverlauf über den Tag ist dein Ist-Profil — im Sommer. **Methode 2 — der Winter-Check:** Denselben Durchgang im Dezember wiederholen; tief stehende Sonne verlängert jeden Schatten dramatisch. **Methode 3 — Daten:** Wiederkehrende „Dellen" in der Produktionskurve zur immer gleichen Uhrzeit sind die Signatur eines Objekts; wandert die Delle mit der Jahreszeit, ist es Geometrie, nicht Verschmutzung.

## Verschattung in der Prognose

Eine Prognose ohne Verschattungsprofil überschätzt systematisch — jeden Tag zur selben Stunde. Deshalb gehört das Profil ins Modell: Volcast lässt dich die Verschattung deiner Anlage hinterlegen und lernt zusätzlich über die Auto-Kalibrierung — wiederkehrende Abweichungen zwischen Prognose und realem Ertrag fließen per Kalman-Filter zurück in die Parameter. Nach ein paar Wochen bildet die Prognose auch den Herbstschatten des Nachbarbaums ab, der in keiner Planungssoftware stand.

Der Nebeneffekt ist ein Frühwarnsystem: Wächst die Abweichung zur kalibrierten Prognose über Monate, ist meist etwas Neues im Spiel — der Baum ist größer geworden, oder ein Modul schwächelt. Mehr dazu: [PV-Ertragsprognose erklärt →](/blog/de/pv-ertragsprognose).

## Was tun gegen Verschattung — ehrlich sortiert

Nach Kosten-Nutzen: Baum-/Astpflege (oft der größte Hebel, mit dem Nachbarn reden lohnt), Reinigung der Modulunterkanten, Optimierer nur für die tatsächlich betroffenen Module (nicht pauschal fürs ganze Dach), Umbelegung der Strings bei ohnehin anstehenden Arbeiten. Und manchmal die ehrlichste Antwort: akzeptieren, einpreisen — und den Verbrauch in die unverschatteten Stunden legen.

## FAQ

**Wie viel Ertrag kostet Verschattung typischerweise?**
Die Spanne ist riesig: von 2–3 % (kleiner Schornstein, gute Bypass-Dioden) bis über 25 % (Baum südlich der Anlage). Deshalb: messen, nicht raten.

**Lohnen sich Optimierer nachträglich?**
Für einzelne nachweislich verschattete Module: oft ja. Fürs ganze unverschattete Dach: meist nein — das ist Marge des Verkäufers, nicht dein Ertrag.

**Erkennt die Prognose neue Verschattung automatisch?**
Eine kalibrierte Prognose zeigt sie als wachsende, zeitlich stabile Abweichung — das ist genau der Hinweis, dem man nachgehen sollte.
