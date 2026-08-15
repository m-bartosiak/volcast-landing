---
title: "Nowcasting, day-ahead e settimana: quanto sono accurati"
description: "Una previsione a 15 minuti e una a 7 giorni sono problemi diversi. Ecco cosa può dare davvero ogni orizzonte e dove l'accuratezza smette di reggere."
date: 2026-05-19
tags: ["nowcasting", "forecast-horizon", "accuracy", "time-series", "forecasting"]
series: "deep-dives"
seriesOrder: 6
lang: it
draft: false
seo:
  ogTitle: "Accuratezza della previsione fotovoltaica per orizzonte: dal nowcasting alla settimana"
  keywords: ["nowcasting fotovoltaico", "accuratezza previsione giorno successivo", "orizzonte di previsione fotovoltaica", "previsione fotovoltaica a breve termine"]
relatedPosts: ["previsioni-fotovoltaico-fisica-o-machine-learning", "perche-le-nuvole-sono-la-variabile-piu-difficile", "da-dove-arrivano-le-previsioni-meteo"]
---

Non tutte le previsioni sono lo stesso problema. Prevedere la produzione del tuo impianto nei prossimi 30 minuti, per domani e per la settimana prossima richiede fonti di dati diverse, metodi diversi e porta a livelli di accuratezza molto diversi.

Capire che cosa può realisticamente offrire ciascun orizzonte temporale ti aiuta a usare bene la previsione, ed evita la delusione quando una previsione a 5 giorni non è precisa al kilowattora.

## Nowcasting: le prossime 0-6 ore

Il nowcasting (previsione a brevissimo termine) è l'orizzonte più corto. Risponde alla domanda: "quanto produrranno i miei moduli nei prossimi minuti o nelle prossime ore?".

I migliori approcci di nowcasting non si appoggiano affatto ai modelli NWP. Usano invece altre fonti.

**Immagini satellitari**: i satelliti geostazionari fotografano i campi nuvolosi ogni 5-15 minuti. Seguendo il movimento delle nuvole tra un fotogramma e l'altro si può estrapolare la loro posizione con 30-120 minuti di anticipo. Questo approccio a vettori di moto delle nuvole coglie le condizioni attuali molto meglio di un modello meteo inizializzato 3-6 ore prima.

**Sky camera**: una telecamera fisheye a terra, installata sull'impianto o nelle vicinanze, fotografa il cielo ogni minuto. L'elaborazione dell'immagine individua le nuvole, ne stima velocità e direzione e prevede quando ombreggeranno i tuoi moduli. Si ottengono così previsioni iperlocali con risoluzione fino a 1-5 minuti.

**Dati di produzione in tempo reale**: se in questo momento produci 3,8 kW e le condizioni sono stabili, nei prossimi 15 minuti sarai probabilmente vicino a 3,8 kW. I modelli di persistenza (che assumono la continuazione delle condizioni attuali) sono sorprendentemente efficaci sugli orizzonti molto brevi.

**Accuratezza**: nella finestra 0-30 minuti i metodi di persistenza e quelli satellitari raggiungono errori assoluti medi del 5-10% della potenza installata in condizioni stabili. Durante i transitori nuvolosi l'errore si impenna, ma rientra in fretta.

**Limite**: il nowcasting non può prevedere cambiamenti meteo che non sono ancora iniziati. Un sistema nuvoloso che si sta formando a 50 km di distanza non comparirà nell'estrapolazione satellitare finché non sarà molto più vicino.

## Infragiornaliero: da 6 a 24 ore

Questo orizzonte copre "la produzione che resta oggi" e "domani mattina". È qui che i modelli NWP diventano la fonte principale di dati, con la corsa più recente ancora ragionevolmente fresca.

L'atmosfera ha prevedibilità limitata su questa scala: lo stato attuale vincola ciò che può succedere nelle prossime 12-24 ore, ma i processi di mesoscala (sviluppo di nuvolosità convettiva, brezze marine, effetti orografici) introducono incertezza significativa.

**Accuratezza**: le previsioni per il giorno successivo sull'energia giornaliera totale rientrano tipicamente entro il 15-25% della produzione reale, espresso come percentuale della potenza installata. Le singole ore possono sbagliare di più, soprattutto nella finestra tra le 11 e le 15, quando le nuvole convettive sono più probabili.

**Cosa funziona**: i modelli basati sulla fisica brillano qui, perché prevedono correttamente la forma della curva di produzione (salita del mattino, momento del picco, calo serale) partendo dalla geometria. Anche quando l'energia totale sbaglia per via delle nuvole, la forma della curva è vincolata fisicamente ed è di solito corretta.

**Cosa fallisce**: il momento preciso in cui arrivano le nuvole. La previsione può collocare un calo di produzione del 40% alle 14 mentre in realtà accade alle 11, o viceversa. L'impatto complessivo delle nuvole sulla giornata può essere simile, ma lo spostamento temporale è frustrante per chi pianifica azioni ora per ora.

## Breve termine: da 1 a 3 giorni

Su questo intervallo i modelli NWP danno ancora indicazioni utili, ma le previsioni alla scala delle nuvole diventano sempre più incerte. Le previsioni di temperatura restano buone (entro 2-3 °C). Le configurazioni meteo di grande scala (alta pressione uguale sole, passaggio frontale uguale nuvole) sono ben colte.

**Accuratezza**: i totali giornalieri rientrano entro il 20-30% per il secondo e il terzo giorno. I profili orari diventano un'indicazione più che una previsione: "in prevalenza soleggiato con possibili nuvole pomeridiane" invece di "picco alle 13:47".

**A cosa serve**: decidere in quale giorno fare la lavatrice, capire se conviene rimandare a domani un consumo energivoro, pianificare a grandi linee i consumi dei prossimi giorni.

## Medio termine: da 4 a 7 giorni

Su questo intervallo i modelli meteo colgono le configurazioni di grande scala, ma faticano sui dettagli. La natura caotica dell'atmosfera fa sì che piccoli errori nelle condizioni iniziali crescano esponenzialmente: è il cosiddetto effetto farfalla, che non è solo una metafora ma una reale proprietà matematica della dinamica atmosferica.

**Accuratezza**: i totali giornalieri possono rientrare entro il 30-40%. Le singole ore sono sostanzialmente rumore. La previsione può dirti "giovedì sarà più soleggiato di mercoledì", ma non "giovedì produrrai 22,3 kWh".

**A cosa serve**: pianificare l'energia della settimana, capire se aspettarsi un periodo generalmente soleggiato o nuvoloso, programmare a grandi linee la manutenzione o la pulizia dei moduli.

## Lungo termine: da 1 a 2 settimane e oltre

Oltre la settimana le previsioni meteo deterministiche perdono quasi tutta la capacità di dire qualcosa di specifico. Le previsioni di ensemble (lo stesso modello eseguito più volte con condizioni iniziali leggermente diverse) danno indicazioni probabilistiche, del tipo "70% di probabilità di condizioni solari sopra la media la prossima settimana", ma non numeri di produzione.

Le previsioni stagionali (da 1 a 3 mesi) esistono per le tendenze generali, ma sono ancora meno specifiche. Possono indicare "più caldo e più secco della media" per la stagione in arrivo, il che si traduce vagamente in "produzione fotovoltaica probabilmente discreta".

**A cosa serve**: budget energetico di lungo periodo, confronto tra produzione cumulata attesa ed effettiva, comprensione degli andamenti stagionali.

## Cosa offre Volcast

Volcast si concentra sull'orizzonte del giorno successivo, il punto ideale in cui la previsione basata sulla fisica dà il massimo valore pratico. Ottieni una curva di produzione oraria per il giorno dopo, aggiornata man mano che arrivano dati meteo freschi.

È l'orizzonte su cui puoi agire: abbastanza vicino perché i modelli meteo diano previsioni di nuvolosità utili, abbastanza in anticipo da poter pianificare i consumi di domani, e sufficientemente esteso da farti vedere la forma completa della curva di produzione.

La previsione non finge di essere precisa su orizzonti più lunghi, dove la fisica non la sostiene. E non tenta il nowcasting in tempo reale, che richiede un'infrastruttura diversa (flussi satellitari, telemetria dei dati di produzione) e rappresenta una sfida a parte.

Giorno successivo, passo orario, base fisica. È lì che il rapporto tra segnale e rumore è migliore.
