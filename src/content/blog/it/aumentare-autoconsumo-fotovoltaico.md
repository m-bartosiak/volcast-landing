---
title: "Aumentare l'autoconsumo del fotovoltaico: 7 modi concreti"
description: "L'energia autoconsumata vale il prezzo pieno della bolletta, quella immessa in rete molto meno: sette modi concreti per usare di più il tuo impianto."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "self-consumption"
seo:
  ogTitle: "Aumentare l'autoconsumo del fotovoltaico"
---
Il conto, in Italia, è diventato semplice: l'energia che consumi direttamente vale quanto il prezzo al kWh che paghi in bolletta, oneri e imposte compresi, mentre l'energia immessa in rete ti viene riconosciuta a un valore molto più basso. Lo scambio sul posto non è più attivabile per i nuovi impianti, quindi il riferimento per chi allaccia oggi è il ritiro dedicato (RID) del GSE, che valorizza l'energia immessa ai prezzi zonali orari, con i prezzi minimi garantiti come rete di sicurezza per gli impianti che ne hanno diritto. Le condizioni aggiornate le pubblica il GSE: prendi il tuo prezzo in €/kWh dalla fattura, mettilo accanto al valore riconosciuto sull'immissione e avrai il tuo moltiplicatore.

Una famiglia senza strategia autoconsuma il 20-30% della propria produzione. I sette passi qui sotto portano realisticamente al 40-60%, e più in alto con un accumulo.

## 1. Sposta i carichi grandi nelle ore di produzione

Acqua calda, lavatrice, lavastoviglie e asciugatrice mettono insieme 8-10 kWh al giorno di carico liberamente spostabile. Solo cambiare l'abitudine da «elettrodomestici alla sera» a «elettrodomestici a mezzogiorno» può alzare l'autoconsumo di 10-15 punti percentuali. La strategia ora per ora, fasce F1/F2/F3 comprese, è in [Quando far partire gli elettrodomestici con il fotovoltaico →](/blog/it/quando-usare-gli-elettrodomestici-con-il-fotovoltaico).

## 2. Pianifica sulla previsione, non sull'orologio

«Accendi tutto a mezzogiorno» funziona male nelle giornate nuvolose e fuori stagione. Una [previsione di produzione](/blog/it/previsione-produzione-fotovoltaica) oraria ti dice se domani il surplus ci sarà e in quali ore: una decisione da 30 secondi la sera, al posto delle congetture del mattino guardando fuori dalla finestra.

## 3. Scalda l'acqua con l'elettricità

Una resistenza nel bollitore è l'accumulo più economico che esista: il surplus di mezzogiorno diventa acqua calda per la sera. Il costo di ingresso è una resistenza più una presa intelligente o un contattore, e assorbe 3-6 kWh al giorno. È anche il carico più tollerante: non importa a che ora esatta parte, importa solo che parta quando c'è sole.

## 4. Automatizza, lascia che sia la casa a sorvegliare il surplus

Home Assistant più un sensore di previsione più prese intelligenti: la resistenza si accende quando la produzione prevista supera una soglia e ripiega sulla fascia più economica nelle giornate coperte. Si configura una volta e poi lavora da sola. L'integrazione ufficiale Volcast per Home Assistant (si installa da HACS e richiede Premium) espone proprio «energia oggi», «energia domani» e la potenza attuale, che sono i tre valori su cui si costruiscono queste automazioni.

## 5. Ricarica l'auto elettrica dal surplus

Se guidi elettrico, l'auto è il carico più grande della casa: 20-60 kWh per ricarica. Anche una ricarica solo parzialmente da surplus sposta l'ago più di tutti gli elettrodomestici messi insieme. Attenzione però alla potenza disponibile del contratto: con i 3 kW del contratto domestico standard la ricarica va modulata sul surplus, non impostata al massimo.

## 6. Riprogramma la pompa di calore

Alza la temperatura di set point dell'acqua calda sanitaria nelle ore di produzione e lascia che la pompa «sovraccarichi» il bollitore quando c'è sole: la sera va avanti con il calore accumulato. Molte pompe di calore hanno ingressi SG-Ready o programmazioni orarie che si sposano naturalmente con una previsione. D'estate lo stesso ragionamento vale al contrario, con il raffrescamento: raffredda casa nelle ore centrali, quando l'energia è tua.

## 7. Valuta un accumulo, ma prima misura

La batteria è ciò che alza di più l'autoconsumo (fino al 70-80%), ma è anche l'investimento più grande. Prima di comprarla, passa 2-3 mesi a misurare quanta energia immetti in rete nelle ore in cui poi la ricompri: quella è la capacità che ti serve davvero, non quella scritta sul volantino. Senza scambio sul posto il calcolo pende più che in passato verso l'accumulo, perché ogni kWh immesso vale poco, ma resta un calcolo da fare con i tuoi numeri.

## Da dove cominciare

L'ordine che massimizza l'effetto per euro speso: abitudini (1-2), resistenza nel bollitore (3), automazione (4), auto elettrica e pompa di calore (5-6), accumulo (7). I primi quattro passi non richiedono investimenti importanti, solo sapere quanto produrrai domani.

## FAQ

**Quale percentuale di autoconsumo si può considerare buona?**
Senza strategia 20-30%. Con spostamento dei consumi e acqua calda elettrica 40-60%. Con un accumulo oltre il 70%. Ogni punto percentuale è denaro vero, tanto più adesso che l'energia immessa vale poco.

**Ha senso consumare energia solo per non immetterla in rete?**
No. L'autoconsumo conviene per l'energia che avresti comunque usato: acqua calda, lavatrice, ricarica. Il consumo artificiale è spreco, non risparmio.

**Come misuro il mio autoconsumo?**
Dai dati dell'inverter o del contatore: (produzione − energia immessa) / produzione. L'Energy Dashboard di Home Assistant lo mostra direttamente, se hai configurato produzione, prelievo e immissione.
