---
title: "Volcast vs Forecast.Solar vs Solcast: confronto onesto"
description: "Le tre fonti di previsione fotovoltaica più diffuse a confronto: accuratezza, calibrazione, app, limiti gratuiti e prezzi, con un test da fare a casa."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "brand-comparison"
seo:
  ogTitle: "Volcast vs Forecast.Solar vs Solcast: confronto onesto"
---
Prima la dichiarazione di interessi: uno dei tre strumenti confrontati qui lo sviluppiamo noi. Quindi aspettati una tabella in cui non vinciamo ogni riga, e un consiglio diretto su quando ti conviene restare sull'opzione gratuita della community. Forecast.Solar e Solcast sono progetti solidi, che abbiamo usato noi stessi prima di costruire il nostro motore. Le differenze si riducono a tre domande: *per chi è*, *quanto è accurato*, *in che forma lo usi*.

## Tre strumenti, tre filosofie

**Forecast.Solar**: la scelta di chi smanetta. API gratuita, parametri semplici (posizione, orientamento, inclinazione, potenza), enorme diffusione nella community di Home Assistant e integrazione inclusa nel core. Nessuna calibrazione sul tuo impianto specifico, risoluzione oraria, limiti di richieste sul piano gratuito.

**Solcast**: l'opzione industriale. Dati satellitari di irradianza di alta qualità, usati in tutto il settore energetico, un piano hobbistico con tetto giornaliero di richieste e il tuning sui dati che carichi tu. Il cuore del prodotto è l'API: non esiste un'app mobile per il consumatore.

**Volcast**: un motore fisico che gira su dati dei modelli meteo (ensemble NWP), più la calibrazione automatica con filtro di Kalman sulla tua produzione reale, il tutto dentro un'app mobile (iOS/Android, 13 lingue) con notifiche push, oltre a un'integrazione HACS ufficiale e all'API con il Premium (4,49 $/mese).

## La tabella di confronto

| | Volcast | Forecast.Solar | Solcast |
|---|---|---|---|
| App mobile | sì, iOS + Android | no | no |
| Piano gratuito | sì, previsione a 2 giorni | sì, con limiti API | piano hobbistico, tetto giornaliero |
| Calibrazione sul tuo impianto | automatica (Kalman) | nessuna | parziale (tuning) |
| Risoluzione | fino a 5 min | oraria | 5-30 min |
| Home Assistant | integrazione HACS ufficiale | integrazione nel core | integrazione della community |
| Notifiche di surplus | sì | no | no |
| Rilevamento della limitazione di produzione | sì | no | no |

> Dati corretti al giorno della pubblicazione: limiti e prezzi degli altri servizi cambiano. Se trovi un errore scrivici, correggiamo indicando la data.

## Quale scegliere, onestamente

**Resta su Forecast.Solar se:** il tuo impianto è semplice e non ombreggiato, ti basta un ordine di grandezza e vuoi solo un sensore gratuito nell'Energy Dashboard. Barriera minima, costo zero.

**Scegli Solcast se:** stai costruendo una tua soluzione sopra un'API e vuoi dati di irradianza di livello industriale, e l'assenza di un'app non ti pesa.

**Scegli Volcast se:** il tuo impianto ha le sue particolarità (ombreggiamento, disposizione est-ovest, degrado), vuoi la previsione sul telefono con le notifiche, oppure un unico strumento che funzioni sia nell'app sia in Home Assistant. La calibrazione è l'elemento che fa la differenza: dopo 2-3 settimane la previsione rispecchia *il tuo* impianto, non un impianto da manuale.

## Il test che puoi fare da solo

Non fidarti di nessuna tabella, nemmeno della nostra. Tutte e tre hanno un punto di ingresso gratuito: fanne girare due o tre in parallelo per due settimane e confrontale con i dati reali dell'inverter. Il tuo tetto, il tuo ombreggiamento e il tuo clima sono l'unico banco di prova che conta.

## FAQ

**Volcast usa i dati di Forecast.Solar o di Solcast?**
No: usiamo un motore fisico nostro, alimentato dai dati di irradianza dei modelli meteo (ensemble NWP), con il nostro strato di calibrazione.

**Qual è il più accurato?**
Nelle giornate serene tutti e tre se la cavano bene. Le differenze crescono nelle giornate variabili e in presenza di ombreggiamento: è lì che la calibrazione sulla produzione reale dà a Volcast un vantaggio, che puoi verificare con un test in parallelo a casa tua.

**Posso usare Volcast e Forecast.Solar insieme in Home Assistant?**
Sì: le integrazioni convivono senza problemi ed è una configurazione comune proprio per fare confronti.
