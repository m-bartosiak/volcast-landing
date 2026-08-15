---
title: "Perché una previsione globale non basta per il fotovoltaico"
description: "I modelli globali spalmano su decine di chilometri le nuvole che decidono la produzione: ecco perché per il fotovoltaico servono i modelli regionali."
date: 2026-07-28
author: "Michal"
tags: ["forecasting", "nwp", "weather-models", "accuracy"]
series: "geographic"
seriesOrder: 2
lang: it
draft: false
seo:
  keywords: ["previsione numerica del tempo", "modello meteo regionale", "COSMO-IT ICON-2I", "accuratezza previsione fotovoltaica", "modelli ad area limitata Italia"]
---

Ogni previsione di produzione fotovoltaica parte da un modello meteo, e non tutti i modelli vedono il tuo cielo allo stesso modo. La distanza tra un modello globale e uno regionale ad alta risoluzione è spesso la distanza tra una previsione che azzecca le nuvole di questo pomeriggio e una che le manca del tutto.

## I modelli globali: l'inquadratura grandangolare

I modelli globali, come l'IFS dell'ECMWF o il GFS del NOAA, coprono l'intero pianeta. Quella copertura ha un prezzo: la risoluzione. Lavorando su una griglia di circa 9-25 km, trattano come uniforme tutto ciò che sta dentro una singola cella. Per le configurazioni meteo di grande scala, a qualche giorno di distanza, va benissimo. Per il fotovoltaico, dove conta il singolo cumulo che passa sopra il tuo tetto, è una sfocatura.

## I modelli regionali: il primo piano

È qui che i modelli ad area limitata, girati su un dominio ristretto ma con griglia molto più fitta, si guadagnano il posto. Il DWD tedesco gira ICON-D2 a circa 2 km sull'Europa centrale, la Francia ha AROME intorno a 1,3 km, i servizi nordici e quello olandese condividono il sistema HARMONIE-AROME.

Sull'Italia la catena di riferimento è un'altra. Il servizio meteorologico dell'Aeronautica Militare, insieme ai servizi regionali (in particolare ARPAE), gira da anni COSMO-IT, con griglia dell'ordine di un paio di chilometri, oggi in transizione verso ICON-2I, la configurazione italiana del modello ICON. Accanto a questi il CNR sviluppa MOLOCH, su una griglia poco superiore al chilometro e pensato proprio per i fenomeni convettivi, e BOLAM, a maglia più larga, usato come modello di inquadramento.

A queste risoluzioni i modelli cominciano a risolvere le linee di costa, l'orografia e, cosa decisiva per te, le nuvole convettive che si formano in un pomeriggio d'estate.

## Le nuvole sono tutta la partita

Per il fotovoltaico il momento e la posizione delle nuvole sono tutto, e la convezione estiva è esattamente il fenomeno con cui un modello globale a maglia larga fa più fatica. L'Italia, da questo punto di vista, è un caso da manuale: i temporali che si accendono sui versanti appenninici a metà pomeriggio, la nebbia della Pianura Padana che in dicembre tiene sotto una coltre mezza regione e non l'altra, la brezza di mare che ripulisce il cielo sulla costa mentre venti chilometri nell'entroterra un cumulo si sta ingrossando.

Un modello a 2 km può collocare l'ammasso nuvoloso sopra la valle giusta all'ora all'incirca giusta. Un modello a 25 km ti sa dire soltanto che sulla regione il cielo è "poco nuvoloso". Solo uno dei due ti serve davvero per decidere quando far partire la lavatrice o come gestire la batteria di accumulo.

## Il compromesso, e la risposta

I modelli regionali non sono una vittoria gratis. Coprono orizzonti più brevi, da qualche ora a un paio di giorni, mentre i globali arrivano a dieci giorni e oltre, e girano su un dominio limitato: fuori da quel dominio, semplicemente, non esistono.

La risposta onesta quindi non è scegliere, è combinare. Usa il modello regionale, più affilato, dove è disponibile e per il breve termine; torna al globale per la visione lunga. È esattamente per questo che un buon motore di previsione attinge a più modelli insieme e sceglie la fonte migliore per la tua zona e per il tuo orizzonte di previsione, invece di fidarsi di un unico flusso globale uguale per chiunque sulla Terra.

La previsione migliore per il tuo tetto non è quella con la mappa più grande. È quella che sa di quale modello fidarsi per il tuo pezzo di cielo, e quando.
