---
title: "Perché la produzione si appiattisce a mezzogiorno?"
description: "Il plateau nella curva di mezzogiorno è clipping dell'inverter oppure un limite all'immissione: quasi sempre una scelta di progetto, non un guasto."
lang: it
draft: false
updated: 2026-08-14
category: "k1"
guide: "previsione-produzione-fotovoltaica"
translationKey: "qa-clipping"
seo:
  ogTitle: "Produzione piatta a mezzogiorno: il clipping spiegato"
---
Un plateau piatto in cima alla curva di produzione significa che la potenza viene **limitata: dalla potenza nominale AC dell'inverter (clipping) oppure da un limite all'immissione in rete** impostato sul tuo impianto. In entrambi i casi la campana viene tagliata in alto e, nella maggior parte degli impianti, si tratta di una scelta di progetto e non di un difetto.

## Perché succede

**Clipping dell'inverter:** se i moduli hanno una potenza superiore a quella dell'inverter (per esempio 6,5 kWp su un inverter da 5 kW), nelle giornate migliori il lato DC produce più di quanto l'inverter riesca a convertire, quindi la potenza in uscita resta ferma al suo massimo. Il sovradimensionamento del generatore FV è prassi normale e in genere conveniente, perché i moduli raggiungono raramente la potenza di targa: il dettaglio è nella risposta sull'inverter più piccolo dei pannelli.

**Limitazione dell'immissione:** l'inverter può essere configurato per non immettere in rete oltre un certo valore, fino all'azzeramento completo dell'immissione. In quel caso riduce la potenza perché il contatore resti entro il limite, indipendentemente da quanto potrebbero dare i moduli. Se sul tuo impianto esiste una limitazione, la trovi nella configurazione fatta dall'installatore o nel regolamento di esercizio firmato con il distributore.

Le due cose si assomigliano ma si comportano in modo diverso: il clipping limita la produzione totale alla taglia dell'inverter, la limitazione riguarda solo l'energia immessa. Far partire la lavastoviglie durante il plateau aumenta quindi la produzione totale se c'è un limite all'immissione, e non cambia nulla se è clipping.

## Cosa fare

1. **Confronta l'altezza del plateau con la potenza nominale AC dell'inverter:** se i due valori coincidono, è clipping.
2. **Verifica se sul tuo impianto è impostato un limite in immissione:** un plateau più basso della taglia dell'inverter di solito indica proprio questo. Chiedi conferma all'installatore o al distributore.
3. **Sposta i consumi nelle ore del plateau:** con un limite all'immissione ogni kWh che usi nelle ore centrali è un kWh che altrimenti andrebbe perso. Acqua calda, lavatrice, ricarica dell'auto elettrica.
4. **Confronta la produzione reale con una previsione calcolata sul tuo impianto:** una buona previsione modella anche la curva tagliata, quindi un plateau più basso di quello atteso segnala un problema vero (ombreggiamento, stringa in avaria) e non una scelta di progetto.
