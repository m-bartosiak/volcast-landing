---
title: "Ricaricare l'auto elettrica con il surplus fotovoltaico"
description: "Come ricaricare l'auto elettrica con il surplus fotovoltaico: soglie di potenza, modalità della wallbox e ricariche pianificate sulla previsione oraria."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "ev-charging"
seo:
  ogTitle: "Ricarica auto elettrica con il fotovoltaico"
---
Un'auto elettrica è il consumatore più grande di una casa: una singola ricarica (20-60 kWh) può superare il consumo giornaliero di tutto il resto messo insieme. Ed è proprio per questo che è anche l'occasione più grande: ogni kilowattora preso dal tetto invece che dalla rete ti fa guadagnare l'intera differenza tra il poco che vale l'energia immessa e il prezzo pieno che paghi al prelievo. Il problema è che un'auto non sorseggia energia, la beve: ed è lì che comincia la pianificazione.

## Il problema della soglia

La ricarica monofase parte da circa 1,4 kW (6 A), le impostazioni tipiche sono 3,7 kW e, dove il contratto lo consente, 7,4 kW; la trifase da 11 kW in una casa italiana è rara. Un impianto da 6 kWp a mezzogiorno di aprile dà forse 4,5 kW, di cui la casa si prende 0,5-1 kW di carico di base. Il surplus reale è spesso 3-3,5 kW: abbastanza per caricare, ma solo se centri la finestra. Se attacchi la spina alla cieca alle 17, stai caricando energia della rete.

## Il vincolo italiano: la potenza disponibile

Il contratto domestico standard è da 3 kW. La potenza disponibile limita quanto puoi prelevare dalla rete in un dato istante, non quanto produce l'impianto: se la ricarica avviene davvero dal surplus, il prelievo resta basso e il contatore non se ne accorge. Il problema si presenta la sera e nelle giornate coperte, quando la stessa wallbox da 3,7 kW, da sola, è già fuori scala. Per questo molti proprietari di auto elettrica portano il contratto a 4,5 o 6 kW. Prima di scegliere la wallbox, guarda in bolletta qual è la tua potenza disponibile: è quel numero, non la potenza dell'impianto, a decidere quanto puoi caricare quando il sole non c'è.

## Tre strategie

**«Sabato di sole».** La più semplice: l'auto sta a casa nel fine settimana, la previsione dà oltre 25 kWh, attacchi nel picco previsto con la corrente impostata sul surplus atteso (per esempio 3,7 kW per 4-5 ore). Non serve altro che una wallbox con potenza regolabile.

**La strategia mista.** Nei giorni feriali l'auto carica di notte, nella fascia più economica, solo «fino all'autonomia che serve per andare al lavoro»: il pieno aspetta la prossima giornata di sole forte. L'occhiata serale alla previsione per domani decide quanto spazio lasciare in batteria per il sole.

**La ricarica automatica da surplus.** Il livello più alto: una wallbox in modalità fotovoltaico (nativa oppure pilotata da Home Assistant o EVCC) modula di continuo la corrente di carica seguendo il surplus istantaneo. Qui la risoluzione della previsione conta davvero: l'API di Volcast (richiede Premium) fornisce 288 punti da 5 minuti al giorno, così l'automazione sa se la nuvola tra 20 minuti è un'ombra di passaggio o la fine della finestra, e non interrompe la sessione senza motivo.

## I conti

10 kWh caricati con il sole invece che dalla rete valgono la differenza tra il prezzo che paghi in bolletta e il valore riconosciuto sull'energia immessa. Fai il conto con i tuoi numeri: prendi il prezzo in €/kWh dalla fattura, sottrai la valorizzazione dell'energia immessa pubblicata dal GSE per il ritiro dedicato e moltiplica per i kilowattora caricati dal surplus. Con 1.000 km al mese (circa 170 kWh) e metà delle ricariche dal sole, il risultato è una voce che si vede a fine mese, e nel semestre estivo si vede parecchio. Poi c'è la parte non quantificabile: muoversi con energia raccolta sul proprio tetto.

## FAQ

**Posso ricaricare dal surplus con una presa normale?**
Sì. Il cavo di emergenza (2,3 kW) si sposa bene con surplus moderati: è lento, ma per un'auto che resta a casa tutto il giorno è spesso il modo più efficace di assorbire la gobba di mezzogiorno, e con 3 kW di potenza disponibile è anche quello che stressa meno il contatore.

**Prima l'auto o la batteria di casa?**
Se l'auto va comunque caricata, l'auto. Eviti una doppia conversione e dei cicli di carica sull'accumulo. La batteria di casa vince quando l'auto non è a casa nelle ore di produzione.

**Quanta potenza resta per la ricarica?**
Surplus uguale produzione attuale meno consumo della casa. Lo leggi dal contatore bidirezionale o dall'Energy Dashboard; quanto sarà domani, invece, te lo dice la previsione oraria.
