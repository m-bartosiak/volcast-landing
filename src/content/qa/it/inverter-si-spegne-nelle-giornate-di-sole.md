---
title: "Perché l'inverter si stacca nelle giornate di sole?"
description: "I distacchi di mezzogiorno sono quasi sempre sovratensione di rete, non un guasto: come riconoscere il pattern nei log e a chi va segnalato davvero."
lang: it
draft: false
updated: 2026-08-14
category: "k1"
guide: "previsione-produzione-fotovoltaica"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Inverter che si stacca con il sole: perché succede"
---
Nella grande maggioranza dei casi l'inverter si stacca perché **la tensione di rete sale oltre il limite ammesso, in genere 253 V**, e in quella condizione è obbligato a disconnettersi. Non è un guasto del tuo impianto: è una rete locale congestionata, in cui tutta la via immette energia nelle stesse ore.

## Perché succede

Ogni impianto che immette alza leggermente la tensione nel proprio punto di connessione. Quando su una stessa linea ci sono molti impianti fotovoltaici, nelle ore centrali di una giornata serena la tensione arriva a superare il limite: 253 V corrisponde alla tensione nominale di 230 V aumentata del 10%. La soglia esatta e i tempi di intervento dipendono dalla regola di connessione applicata al tuo impianto (CEI 0-21) e sono impostati nel sistema di protezione di interfaccia, quindi vanno verificati con l'installatore e con il distributore. L'inverter controlla la tensione di continuo, si disconnette con errore di sovratensione, aspetta, si riconnette, e il ciclo si ripete anche decine di volte al giorno. Ogni distacco ti costa kWh proprio nelle ore più produttive.

Il pattern è inconfondibile: distacchi nelle giornate serene tra le 11 e le 15, nessuno nelle giornate coperte, e codici di errore di sovratensione (spesso indicati come "OV" o "grid overvoltage") nel log dell'inverter.

## Cosa fare

1. **Esporta i log dell'inverter:** data, ora e tensione misurata per ogni distacco. Sono la tua prova.
2. **Misura la tensione anche di sera:** se resta alta quando i moduli non producono, il problema di rete diventa ancora più facile da dimostrare.
3. **Segnala al distributore, non al fornitore:** chi ti manda la bolletta non è chi gestisce i cavi. Come impostare la segnalazione lo trovi nella risposta dedicata alla tensione oltre 253 V.
4. **Chiedi all'installatore della regolazione volt-watt:** l'inverter può ridurre gradualmente la potenza invece di staccarsi di colpo, come spiegato nella risposta sulla curva volt-watt.
5. **Metti un numero sulle perdite:** confrontare la produzione reale con una previsione calcolata sul tuo impianto mostra quanti kWh spariscono nei distacchi, e una cifra concreta rende la segnalazione molto più difficile da liquidare.
