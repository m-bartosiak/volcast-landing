---
title: "Was ist die P(U)-Kennlinie (Volt-Watt) und sollte ich sie aktivieren?"
description: "Die P(U)-Kennlinie drosselt die Leistung sanft bei steigender Netzspannung, statt hart abzuschalten. Wann sie sich lohnt und worauf du achten musst."
lang: de
draft: false
category: "k1"
guide: "pv-ertragsprognose"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "P(U)-Kennlinie / Volt-Watt — aktivieren oder nicht?"
---
Die P(U)-Kennlinie (Volt-Watt) lässt den Wechselrichter **die Einspeiseleistung stufenlos reduzieren, wenn die Netzspannung steigt** — z. B. ab 250 V — damit die 253-V-Grenze und die harte Abschaltung gar nicht erst erreicht werden. Wenn dein Wechselrichter wegen Überspannung abschaltet, macht ihre Aktivierung meist den Unterschied zwischen wenigen Prozent Verlust und Dutzenden.

## Warum das funktioniert

Eine harte Abschaltung bedeutet null Einspeisung für Sekunden bis Minuten, viele Male am Tag — und nach der Wiederzuschaltung steigt die Spannung sofort wieder. Die lineare Reduktion arbeitet anders: Der Wechselrichter speist z. B. 85–95 % ein, die Spannung stabilisiert sich knapp unter der Grenze, die Produktion läuft durch. Du gibst etwas Spitzenleistung ab, verlierst aber keine ganzen Produktionsfenster. P(U) und Q(U) sind in der VDE-AR-N 4105 vorgesehen — das ist eine normkonforme Standardfunktion, kein Trick.

## Was du tun kannst

1. **Im Log prüfen, ob Überspannung die Ursache ist** (Overvoltage-Codes an sonnigen Mittagen). Die Kennlinie hilft genau dagegen — nicht gegen andere Fehler.
2. **Installateur um Aktivierung nach den Vorgaben deines Netzbetreibers bitten** — die Parameter sind oft in den Anschlussbedingungen festgelegt. Bei einem pauschalen „geht nicht" nach schriftlicher Begründung fragen; meist finden sich die Einstellungen dann doch.
3. **Schwellen nicht selbst nach Gefühl setzen** — ein zu niedriger Startpunkt drosselt die ganze Saison ohne Not.
4. **Die Meldung an den Netzbetreiber trotzdem abschicken** — die Kennlinie begrenzt deine Verluste, die Ursache bleibt das Netz.
5. **Wirkung messen:** Wochen vor/nach der Aktivierung vergleichen — Abschaltungen sollten fast verschwinden, der Tagesertrag steigen.
