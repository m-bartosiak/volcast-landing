---
title: "I tre numeri del tuo impianto fotovoltaico"
description: "Inclinazione, orientamento e potenza di picco: a un modello fisico bastano tre numeri per prevedere la produzione del tuo impianto fotovoltaico."
date: 2026-03-24
tags: ["setup", "parameters", "getting-started", "pv-basics", "beginner"]
series: "fundamentals"
seriesOrder: 5
lang: it
draft: false
seo:
  ogTitle: "I tre numeri che definiscono il tuo impianto fotovoltaico (e perché bastano)"
  keywords: ["parametri impianto fotovoltaico", "configurazione impianto fotovoltaico", "dati per la previsione di produzione", "configurare Volcast"]
relatedPosts: ["inclinazione-e-azimut-dei-pannelli", "come-funzionano-i-pannelli-fotovoltaici"]
---

La maggior parte degli strumenti di previsione fotovoltaica chiede una lista infinita di dati, oppure pretende settimane di storico di produzione prima di restituire qualcosa di utile. Volcast chiede tre numeri, più la tua posizione (che il telefono conosce già). Punto.

Non è una limitazione: è una scelta progettuale che nasce dal modo in cui funziona la modellazione fisica. Vediamo cosa dice al modello ciascuno dei tre numeri e perché tre bastano.

## Numero 1: l'angolo di inclinazione

**Che cos'è.** L'angolo dei tuoi moduli rispetto al piano orizzontale, in gradi. 0° è disteso in piano, 90° è verticale.

**Cosa dice al modello.** Come calcolare l'angolo di incidenza, cioè l'angolo tra i raggi solari in arrivo e la superficie del modulo, in ogni istante della giornata. È questo a determinare quanta parte dell'irradianza diretta disponibile il tuo pannello riesce a intercettare.

L'angolo di incidenza entra anche nel calcolo della **riflessione di Fresnel**. Ad angoli molto radenti (luce che colpisce il vetro quasi di lato) una parte maggiore della luce rimbalza sulla superficie invece di entrare nella cella. È la stessa fisica che fa sembrare uno specchio la superficie di un lago al tramonto.

**Come trovarlo.** Se i moduli sono su un tetto a falda, l'inclinazione coincide con la pendenza della falda. Valori comuni: tra 15 e 45°. Se non conosci la pendenza del tetto, una app inclinometro appoggiata al modulo te la dice in pochi secondi. Su tetto piano o su impianto a terra, l'inclinazione è quella a cui è regolata la struttura di montaggio.

**Sensibilità.** Come visto nel post precedente, la producibilità annua varia lentamente con l'inclinazione. Sbagliare di 5° cambia la resa di circa l'1-2%. Non complicarti la vita: una stima ragionevole va benissimo.

## Numero 2: l'orientamento (azimut)

**Che cos'è.** La direzione verso cui guardano i moduli. Attenzione alla convenzione, perché in Italia ne circolano due: quella usata da PVGIS e da Volcast, in cui **180° è il Sud pieno**, 90° è Est e 270° è Ovest, e quella degli installatori, in cui il Sud è 0° e gli scostamenti si contano in più o in meno. Se inserisci il valore giusto nella convenzione sbagliata, l'intera curva giornaliera si sposta: controlla sempre quale delle due ti sta chiedendo lo strumento che stai usando.

**Cosa dice al modello.** In quale momento della giornata i tuoi moduli ricevono più luce diretta. Un impianto a Sud fa il suo massimo a mezzogiorno solare. Uno rivolto a Est fa il massimo al mattino. È questo a dare forma all'intera curva di produzione giornaliera.

L'orientamento influenza anche quanta radiazione riflessa dal suolo raggiunge il modulo (moduli che guardano dalla parte opposta a una superficie chiara ne perdono una parte) e come la radiazione diffusa del cielo si distribuisce nel campo di vista del modulo.

**Come trovarlo.** Una app bussola puntata verso i moduli ti dà l'azimut. Oppure guarda il tetto su Google Maps: nell'emisfero nord il Sud è verso il basso. Se hai un impianto diviso Est-Ovest, in Volcast puoi configurare due stringhe separate.

**Sensibilità.** Come per l'inclinazione, la producibilità annua varia dolcemente. Uno scostamento di 30° dal Sud pieno costa circa il 3-5%. Perfino i moduli rivolti a Est o a Ovest raccolgono l'80-85% del massimo teorico.

## Numero 3: la potenza di picco (kWp)

**Che cos'è.** La potenza di targa del tuo impianto, in kilowatt di picco (kWp). È la potenza in uscita in condizioni STC: 1.000 W/m² di irradianza, 25 °C di temperatura di cella, spettro solare AM1.5.

**Cosa dice al modello.** Il fattore di scala dell'intero calcolo. Il motore fisico calcola quale frazione dell'irradianza STC raggiunge la tua superficie inclinata in un dato istante, applica la riduzione per temperatura e le perdite ottiche, e moltiplica per la potenza di targa per ottenere la produzione attesa in watt.

In un modello fisico il kWp è di fatto il ponte tra il modello di irradianza (che restituisce W/m² di energia utilizzabile) e l'uscita elettrica, che è ciò che ti interessa davvero. Riassume in un solo numero il rendimento dei moduli, la superficie totale e le caratteristiche delle celle.

**Come trovarlo.** È sul contratto di installazione, sul display dell'inverter o sulle targhette dei moduli. Valori residenziali tipici: 3-15 kWp. Un impianto di 10 moduli da 400 W è da 4,0 kWp.

**Sensibilità.** Questo è il numero che devi azzeccare. Un errore del 10% sulla potenza di targa produce un errore del 10% sulla previsione: la relazione è lineare. Per fortuna è anche il numero più facile da conoscere con precisione, perché è scritto sui documenti.

## E la posizione?

Tecnicamente la posizione è un quarto dato, ma Volcast la prende automaticamente dal GPS del telefono, oppure la puoi mettere a mano su una mappa. Dalle coordinate il modello ricava tutto ciò che gli serve sul percorso del sole: declinazione solare, angoli orari, orari di alba e tramonto, elevazione e azimut del sole in ogni istante dell'anno.

La posizione serve anche a scegliere il punto di griglia corretto della previsione meteo. I dati dei modelli meteorologici arrivano su una griglia geografica (tipicamente con passo di 0,1-0,25° per i modelli regionali) e la tua posizione determina quali celle vengono usate e come vengono interpolate.

## Perché non servono altri parametri?

Ti chiederai: il modello non dovrebbe conoscere la marca dei moduli, il rendimento dell'inverter, le perdite sui cavi o gli ombreggiamenti?

Il punto è che, per una **previsione**, i parametri aggiuntivi danno rendimenti decrescenti.

**Marca e modello dei moduli** incidono soprattutto sulla potenza di targa (che hai già inserito) e sul coefficiente di temperatura. I coefficienti dei moduli al silicio stanno stretti tra -0,35% e -0,45%/°C: usare il valore medio introduce forse l'1-2% di errore nelle giornate calde. Per una previsione è rumore, rispetto all'incertezza meteo.

**Il rendimento dell'inverter**, sopra il 96-98% negli apparecchi moderni, significa perdite del 2-4%. La differenza tra marche è minima, forse un punto percentuale tra un buon inverter e uno ottimo. Di nuovo, sotto il rumore della previsione meteo.

**Le perdite sui cavi** valgono tipicamente l'1-3% e sono abbastanza costanti. Scalano tutto in modo uniforme, senza cambiare la forma della previsione.

**L'ombreggiamento** è l'unico parametro che conta davvero e che i tre numeri non catturano. Se hai ombre importanti (alberi, comignoli, edifici vicini), la produzione reale sarà sistematicamente più bassa della previsione. È un limite noto: Volcast ti dice il massimo teorico per il tuo orientamento e sei tu a correggere mentalmente per le ombre che conosci. Le versioni future potranno aggiungere la modellazione delle ombre.

La filosofia è questa: **catturare la fisica che pesa di più con il minor numero di dati**. Inclinazione, orientamento e potenza ti portano a un'accuratezza del 90-95%. Il 5-10% che resta dipende da fattori o difficili da misurare con precisione (ombreggiamento, sporcamento) o che variano così poco tra un impianto e l'altro che usare una media va benissimo (coefficienti di temperatura, rendimento dell'inverter).

## Il confronto con il machine learning

Questa semplicità è un vantaggio diretto rispetto agli approcci basati su machine learning. Un modello ML ha bisogno di settimane o mesi di storico di produzione per imparare come si comporta il tuo impianto nelle varie condizioni. Finché non ha quei dati non può prevedere nulla. E se le condizioni cambiano (nuove ombre da un albero cresciuto, degrado dei moduli, pannelli aggiunti), gli serve altro tempo per re-imparare.

La fisica non ha un periodo di apprendimento. Dati tre numeri e una previsione meteo, calcola la produzione attesa dai principi primi: gli stessi principi che governavano l'energia solare prima ancora che i tuoi moduli venissero fabbricati.

È questo il vantaggio di modellare la fisica invece di adattarsi ai dati.
