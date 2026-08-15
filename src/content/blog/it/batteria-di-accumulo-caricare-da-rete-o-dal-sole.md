---
title: "Batteria di accumulo: caricare dalla rete o dal sole?"
description: "Arbitraggio domestico: quando conviene caricare l'accumulo dalla rete in fascia F3 e quando lasciare spazio al sole, previsione di produzione alla mano."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "battery"
seo:
  ogTitle: "Batteria di accumulo: caricare dalla rete o dal sole?"
---
La logica di default di un accumulo domestico è semplice: carichi con il surplus fotovoltaico nelle ore centrali e scarichi la sera. Nella maggior parte dei giorni basta questo. Ma se hai una tariffa a prezzo indicizzato al PUN, o anche solo un contratto bioraria, entra in gioco un secondo schema: l'arbitraggio sul prezzo, cioè immagazzinare energia prelevata quando costa poco e usarla nelle ore care. La bravura sta nel capire quale dei due giochi conviene giocare oggi. La risposta sta in due previsioni: quella dei prezzi (nota il giorno prima) e quella della produzione (previsione di produzione fotovoltaica).

## Regola di base: il sole ha la precedenza

L'energia del tuo tetto è "gratis": ogni kWh fotovoltaico immagazzinato e consumato la sera ti fa risparmiare il prezzo pieno che pagheresti in bolletta. Quindi, se la previsione dice che il surplus di domani riempirà la batteria, **non caricare dalla rete durante la notte**. Altrimenti la batteria si sveglia piena di energia comprata e il surplus di mezzogiorno finisce in rete per pochi centesimi. È l'errore più comune di chi inizia a fare arbitraggio.

In Italia questa regola pesa più che altrove. Lo scambio sul posto non è più attivabile per i nuovi impianti: chi entra oggi si rivolge al ritiro dedicato, dove l'energia immessa viene valorizzata a un prezzo sensibilmente più basso di quello che paghi per prelevare la stessa energia. Il confronto da fare è concreto: prendi il prezzo del kWh sulla tua ultima bolletta e mettilo accanto al prezzo riconosciuto dal GSE per l'energia immessa. La distanza tra i due numeri è esattamente il valore di ogni kWh che riesci ad autoconsumare invece di immettere, e spiega perché il sole ha la precedenza sulla rete.

## Quando conviene caricare dalla rete

**Scenario 1: domani coperto e sera cara.** Previsione di produzione bassa (la batteria non si riempirà da sola) e prezzi serali alti: carichi di notte, nella fascia F3, esattamente quanto serve a coprire la rampa serale. Il guadagno è la differenza di prezzo tra fascia di ricarica e fascia di scarica, meno le perdite di ciclo (circa il 10-15%). Con un contratto bioraria il confronto è tra F3 e F1; con una tariffa indicizzata al PUN è tra l'ora più economica della notte e le ore serali di punta.

**Scenario 2: prezzi bassi, nulli o negativi a metà giornata.** Nei fine settimana soleggiati il prezzo sul mercato del giorno prima può scendere fino a zero o sotto zero, mentre la tua produzione da sola non riesce a saturare la potenza di ricarica. In quelle ore un rabbocco dalla rete costa pochissimo. Nota una coincidenza utile: sabato pomeriggio, domenica e festivi sono già in fascia F3, quindi lo stesso momento in cui il mercato è depresso è anche quello in cui la tua fascia oraria è la più economica.

**Scenario 3: picco di prezzo annunciato.** Una sera fredda e senza vento, con prezzi del giorno prima molto alti, si affronta con la batteria piena, qualunque sia la sorgente di ricarica.

## L'algoritmo serale in cinque passi

1. Guarda i prezzi orari di domani (pubblicati nel pomeriggio) oppure, se hai un contratto a fasce, il calendario F1/F2/F3 del giorno.
2. Guarda la previsione di produzione per domani.
3. Se il surplus previsto è maggiore o uguale alla capacità della batteria, non fare nulla: ci pensa il sole.
4. Altrimenti calcola il deficit e programma il rabbocco nelle ore notturne più economiche.
5. Il picco serale coprilo sempre dalla batteria, mai dalla rete.

Fatto a mano richiede due minuti al giorno, e prima o poi dovrebbe girare da solo: proprio questo anello fatto di prezzi, previsione e controllo dell'inverter è il compito centrale di un EMS domestico.

## Cosa non dimenticare quando fai arbitraggio

Le perdite di ciclo si mangiano il 10-15% di ogni kWh "girato", quindi l'arbitraggio paga solo con una differenza di prezzo netta (regola pratica: dal 25-30% in su, dopo le perdite). I cicli consumano vita utile della batteria, anche se le diverse migliaia di cicli delle celle LiFePO4 rendono questo costo più basso di quanto si creda.

Poi c'è un vincolo tutto italiano: la potenza disponibile del tuo contatore. Con un contratto domestico da 3 kW, la ricarica dalla rete deve stare dentro quel limite insieme a tutto il resto della casa, e la finestra notturna conveniente dura solo poche ore. Prima di pianificare un rabbocco da 8 kWh, verifica che la potenza di ricarica riesca davvero a farcelo stare.

Verifica infine che la differenza di prezzo esista sul serio. Su alcune offerte monorarie non c'è alcuno spread da sfruttare: in quel caso l'unico gioco che resta è il primo, cioè riempire la batteria con il sole e proteggere l'autoconsumo.

## FAQ

**È consentito caricare la batteria di casa dalla rete?**
Tecnicamente la maggior parte dei sistemi ibridi lo permette; se la funzione sia attiva dipende dalle impostazioni dell'inverter e, in qualche caso, dal regime commerciale del tuo impianto. Verifica con l'installatore e con il tuo fornitore.

**Quale differenza di prezzo rende conveniente l'arbitraggio?**
Al netto delle perdite: indicativamente dal 25-30% tra l'ora di carica e quella di scarica. Una giornata tipica con prezzo indicizzato offre spesso molto di più; uno spread bioraria può essere invece più stretto, quindi va misurato sulla tua offerta.

**Devo fare tutto questo a mano?**
Oggi in larga parte sì (oppure in semiautomatico in Home Assistant). Automatizzare esattamente questo anello è il cuore del prossimo prodotto a cui stiamo lavorando, Volcast EMS.
