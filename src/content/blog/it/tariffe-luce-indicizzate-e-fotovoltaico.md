---
title: "Tariffa indicizzata al PUN con il fotovoltaico: conviene?"
description: "Prezzo indicizzato al PUN, fasce F1, F2 e F3 e fotovoltaico: a chi conviene davvero una tariffa oraria, con l'esempio di una giornata reale in casa."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "dynamic-tariff"
seo:
  ogTitle: "Tariffa indicizzata al PUN e fotovoltaico: conviene?"
---
Con una tariffa a prezzo indicizzato non paghi l'energia a un prezzo fisso deciso in contratto, ma un prezzo agganciato al mercato all'ingrosso, più gli oneri, la spesa per il trasporto e il margine del venditore. Sul mercato il prezzo oscilla di parecchie volte nell'arco della giornata: i mezzogiorni di sole sono bassissimi o addirittura negativi, le sere d'inverno care. Per il consumatore medio è una lotteria; per chi ha il fotovoltaico, carichi spostabili o un accumulo è uno strumento. Lo scrivo da chi convive da anni con un prezzo che cambia di ora in ora.

## Come funziona davvero in Italia

Il riferimento è il PUN, il prezzo unico nazionale che si forma sul mercato del giorno prima (MGP): i prezzi del giorno successivo si conoscono **il pomeriggio precedente**. È il cuore sottovalutato del modello: ogni sera puoi pianificare l'intera giornata dopo.

C'è però un passaggio che in Italia fa tutta la differenza e che le traduzioni dall'inglese saltano. Il mercato retail domestico italiano, nella maggior parte dei casi, non ti ribalta addosso il prezzo ora per ora: molte offerte indicizzate applicano la **media mensile** del PUN, altre lavorano **per fasce orarie**, poche arrivano al prezzo orario vero. Prima di firmare, guarda nelle condizioni economiche quale indice viene usato e con quale granularità. È la differenza tra "posso spostare i consumi di ora in ora e vederlo in bolletta" e "posso solo spostarli tra una fascia e l'altra". Se l'offerta usa la media mensile, spostare la lavatrice di due ore non cambia nulla: cambia solo il momento in cui prelevi, non il prezzo che paghi.

Le fasce orarie sono l'altra metà del discorso, e sono un'istituzione tutta italiana definita da ARERA:

- **F1**: dal lunedì al venerdì, dalle 8 alle 19
- **F2**: dal lunedì al venerdì dalle 7 alle 8 e dalle 19 alle 23, sabato dalle 7 alle 23
- **F3**: tutte le altre ore, cioè notti, domeniche e giorni festivi

Le fasce compaiono in bolletta e valgono anche per le componenti diverse dall'energia. Verifica sulla tua bolletta e sul sito di ARERA come sono applicate al tuo contratto: è il punto da cui parte qualunque automazione seria.

## A chi conviene

**Conviene se almeno una di queste è vera:** hai il fotovoltaico (la tua produzione copre comunque le ore centrali), puoi spostare carichi grandi (acqua calda, lavatrice, lavastoviglie, auto elettrica), hai un sistema di accumulo (arbitraggio: carichi quando costa poco, scarichi quando costa molto), oppure scaldi con una pompa di calore dotata di accumulo inerziale.

**Non conviene se:** i tuoi consumi stanno immobili nelle ore di punta, preferisci una bolletta prevedibile all'ottimizzazione, un minuto di pianificazione al giorno ti infastidisce, oppure la tua offerta è indicizzata alla media mensile e quindi non premia lo spostamento orario.

Le offerte si scelgono sul mercato libero e cambiano spesso: per confrontarle in modo neutro c'è il Portale Offerte di ARERA, che è la fonte da usare al posto delle classifiche commerciali.

## Una giornata reale a prezzo indicizzato

Giornata di sole: durante la notte, in fascia F3, si carica ciò che deve essere pronto la mattina; di giorno la casa vive della propria produzione, con acqua calda, lavastoviglie e ricarica dell'auto nel picco produttivo; nella rampa serale cara, tra le 19 e le 21, non parte quasi nulla, perché tutto ciò che contava è già stato fatto. Giornata coperta: il piano si ribalta e i carichi grandi si spostano nelle ore più economiche, tipicamente la notte in F3.

Il dato decisivo non è uno solo, sono due messi insieme: **i prezzi di domani** (noti) e **la produzione di domani** (prevista). Solo insieme rispondono alla domanda se l'acqua si scalda con il sole all'una del pomeriggio o con energia prelevata alle 3 di notte. Automatizzare esattamente questo anello è il mestiere dei sistemi di gestione dell'energia domestica (EMS); io per ora lo faccio in modo semi-automatico in Home Assistant con i sensori di previsione di Volcast (l'integrazione richiede Premium).

## I rischi, detti chiaramente

I prezzi possono anche schizzare verso l'alto: una sera fredda e senza vento vale diverse volte il prezzo medio. Senza flessibilità, una tariffa indicizzata può risultare *più cara* di una a prezzo fisso. Regola pratica: passa all'indicizzato solo quando riesci a spostare almeno il 30–40% dei consumi, oppure quando un accumulo appiattisce i picchi al posto tuo.

Un secondo rischio, più italiano: la potenza disponibile. Con i 3 kW tipici di molte utenze domestiche non puoi far partire insieme boiler, forno e ricarica dell'auto per approfittare di un'ora conveniente, quindi il piano della giornata va fatto in sequenza e non in parallelo.

## E l'energia che immetti in rete?

Il prezzo che paghi per l'energia prelevata e la valorizzazione di quella immessa sono due rapporti separati: il primo con il venditore, il secondo tipicamente con il GSE, in scambio sul posto per chi ce l'ha già oppure in ritiro dedicato per i nuovi impianti. Cambiare tariffa di prelievo non tocca il secondo. Le condizioni economiche aggiornate del ritiro dedicato sono pubblicate dal GSE: verificale sul sito del GSE prima di fare i conti, perché sono l'unico riferimento affidabile.

## FAQ

**Con una tariffa indicizzata posso ancora immettere in rete?**
Sì. La valorizzazione dell'energia immessa segue il meccanismo che hai con il GSE ed è indipendente dall'offerta di prelievo; la tariffa indicizzata cambia soprattutto quanto paghi ciò che prelevi.

**Dove vedo i prezzi di domani?**
Nell'app del tuo venditore, se l'offerta è oraria, oppure sui riepiloghi pubblici del mercato del giorno prima: il PUN del giorno successivo si conosce dal pomeriggio precedente.

**Cosa succede quando i prezzi vanno sotto zero?**
Prelevare viene di fatto premiato: è l'ora ideale per caricare l'accumulo e far partire i carichi grandi. Ne parlo qui: [prezzi negativi dell'energia →](/blog/it/prezzi-negativi-energia-e-fotovoltaico).
