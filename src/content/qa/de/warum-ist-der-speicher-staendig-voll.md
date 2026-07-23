---
title: "Warum ist der Speicher ständig voll und speist nichts ein?"
description: "Ein voller Speicher an Sonnentagen ist meist korrekt arbeitende Priorität, Einspeiselimit oder Backup-Modus — kein Defekt. In 5 Minuten erkannt."
lang: de
draft: true
category: "k3"
guide: "speicher-laden-netz-oder-sonne"
translationKey: "qa-battery-full"
seo:
  ogTitle: "Speicher ständig voll, keine Einspeisung — warum?"
---
Meistens, weil **das System exakt so arbeitet, wie es eingestellt ist**: Im Eigenverbrauchsmodus steht der Speicher in sonnigen Wochen naturgemäß voll da (entladen wird erst abends), und „keine Einspeisung" ist in der Regel ein gesetztes Einspeiselimit bzw. eine Nulleinspeisung — oder ein Backup-Modus, der einen hohen Mindestladestand hält. Ein Defekt ist es selten.

## Warum das passiert

Der Hybridwechselrichter arbeitet Prioritäten ab: erst der aktuelle Hausverbrauch, dann die Speicherladung, zuletzt die Einspeisung. Im Sommer ist der Speicher vor Mittag voll und hat bis zum Abend keinen Grund zu arbeiten — daher der Eindruck „steht dauernd auf 100 %". Fehlt zusätzlich die Einspeisung, prüfe drei Einstellungen: das **Einspeiselimit** (Export Control — bei „Nulleinspeisungs"-Konfigurationen auf 0, manchmal versehentlich), die **Backup-Reserve** (z. B. min. 80 % SoC „für den Blackout" — der Speicher arbeitet dann kaum) und den **Betriebsmodus** (Backup/USV statt Eigenverbrauch). Von außen sieht alles identisch aus: voller Speicher, null Einspeisung.

## Was du tun kannst

1. **Flussdiagramm in der Wechselrichter-App öffnen** und schauen, wohin der Überschuss nach Speicher-Vollladung geht: Fällt die Produktion auf den Hausverbrauch zurück — Einspeisung ist blockiert; fließt Einspeisung — alles gut, es ist einfach Sommer.
2. **Betriebsmodus und Mindest-SoC prüfen:** Eigenverbrauch + 10–20 % Reserve ist die gesunde Standardkonfiguration; 80–100 % Reserve macht den Speicher zur teuren USV.
3. **Einspeiselimit mit deiner Anmeldung abgleichen** — verlangt der Netzbetreiber keine Null, steht aber Null drin, den Installateur um Korrektur bitten.
4. **Wenn der Speicher „arbeiten" soll** (Arbitrage im dynamischen Tarif): weiter zur Antwort „nachts laden oder auf die Sonne warten".
