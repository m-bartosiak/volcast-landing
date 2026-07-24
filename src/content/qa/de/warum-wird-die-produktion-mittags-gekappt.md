---
title: "Warum wird die Produktion mittags flach gekappt?"
description: "Ein flaches Plateau statt Mittagsspitze bedeutet Clipping, Einspeisebegrenzung oder Wirkleistungslimit. So unterscheidest du die Ursachen und bezifferst den Verlust."
lang: de
draft: false
category: "k1"
guide: "pv-ertragsprognose"
translationKey: "qa-clipping"
seo:
  ogTitle: "PV-Produktion mittags flach gekappt — woran liegt es?"
---
Ein flaches „Plateau" statt einer runden Mittagsspitze heißt: **etwas begrenzt die Leistung nach oben** — am häufigsten ein Wechselrichter, der kleiner ist als die Modulleistung (Clipping), eine eingestellte Einspeisebegrenzung oder ein Wirkleistungslimit aus den Anschlussbedingungen. Das ist konfiguriertes Verhalten, kein Defekt — aber du solltest wissen, was es kostet.

## Warum das passiert

Drei typische Ursachen: **(1) AC-Clipping** — z. B. 8 kWp Module an einem 6-kW-Wechselrichter: Mittags könnten die Module mehr liefern, als er wandeln kann, die Kurve wird exakt auf seiner Nennleistung gekappt. **(2) Einspeisebegrenzung** — der Wechselrichter hat ein Limit für die Netzeinspeisung (bei Bestandsanlagen oft die alte 70-%-Regel, bei neuen teils vertraglich); die Kurve kappt bei Limit + aktuellem Hausverbrauch. **(3) Spannungsbedingte Drosselung** — aktive P(U)-Kennlinie im überlasteten Netz kappt unregelmäßig und nur an manchen Tagen.

Erkennung über die Kapphöhe: exakt Wechselrichter-Nennleistung = Clipping; „runde" Zahl darunter (z. B. 70 % der Modulleistung) = Einspeiselimit; wandernde, spannungsabhängige Kappung = P(U).

## Was du tun kannst

1. **Kappwert aus dem Tagesdiagramm ablesen** und mit Wechselrichterleistung und Anschlussunterlagen vergleichen.
2. **Clipping:** meist nichts — moderate Überbelegung (DC/AC bis ~1,25) ist gewollt und wirtschaftlich; Details in der Antwort zum unterdimensionierten Wechselrichter.
3. **Einspeiselimit prüfen:** Steht in den Einstellungen (Export Control / Wirkleistungsbegrenzung) ein Wert, der nicht mehr zu deiner Situation passt (Altkonfiguration, „sicherheitshalber")? Änderungen nur im Rahmen deiner Anschlussvereinbarung.
4. **Verlust beziffern:** Prognose (was die Anlage könnte) minus reale Produktion = täglich „liegengelassene" kWh — die Grundlage für jede Entscheidung.
5. **Kappstunden nutzen:** Im Kappfenster ist jeder eingeschaltete Verbraucher (Heizstab, Laden) gerettete Energie — begrenzt wird die Einspeisung, nicht dein Verbrauch.
