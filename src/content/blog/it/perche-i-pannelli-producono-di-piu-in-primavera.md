---
title: "Perché i pannelli producono più in primavera che d'estate"
description: "Il coefficiente di temperatura spiegato: perché una giornata limpida di aprile rende più di un pomeriggio di agosto a 38 °C nel Centro-Sud italiano."
date: 2026-03-24
tags: ["temperature-coefficient", "seasonal-production", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 2
lang: it
draft: false
seo:
  ogTitle: "Perché i pannelli producono più in primavera che d'estate: il coefficiente di temperatura"
  keywords: ["coefficiente di temperatura pannelli fotovoltaici", "produzione primavera estate fotovoltaico", "perdite per temperatura fotovoltaico", "rendimento pannelli caldo"]
relatedPosts: ["come-funzionano-i-pannelli-fotovoltaici", "luce-diretta-e-luce-diffusa", "inclinazione-e-azimut-dei-pannelli"]
---

Se tieni d'occhio i dati di produzione del tuo impianto, avrai notato qualcosa di controintuitivo: alcune delle giornate migliori capitano in aprile o maggio, non nella canicola di luglio o agosto.

Non è un difetto di misura. È fisica.

## Il paradosso: più sole, meno potenza

L'estate porta giornate più lunghe e il sole più alto sull'orizzonte. Più luce colpisce i pannelli, e per più ore. La logica direbbe che l'estate debba dominare i grafici di produzione.

Sul totale mensile, di solito è così: luglio e agosto restano i mesi con più kilowattora, semplicemente perché le giornate sono lunghissime. Ma se guardi la potenza istantanea di picco, o l'energia prodotta per ora di sole, la primavera vince spesso.

Il colpevole è la temperatura.

## Come il calore ti ruba i watt

Una cella fotovoltaica è un dispositivo a semiconduttore, e i semiconduttori sono sensibili alla temperatura. Quando una cella di silicio si scalda succedono tre cose che ne riducono la resa.

Primo, **la banda proibita si restringe**. La soglia di energia che i fotoni devono superare per liberare elettroni si abbassa leggermente. Sembrerebbe un vantaggio (più fotoni diventano utili), ma l'effetto è piccolo e viene travolto da quello che segue.

Secondo, **la tensione a circuito aperto cala**. È l'effetto dominante. Più temperatura significa più energia termica nel reticolo cristallino, e quindi più ricombinazione tra elettroni e lacune: gli elettroni liberati hanno più probabilità di ricadere in una lacuna prima di raggiungere il circuito. La caduta di tensione è all'incirca lineare con la temperatura: attorno a **-0,3% per grado Celsius** nei pannelli al silicio più diffusi.

Terzo, **la corrente aumenta leggermente** con la temperatura, ma questo guadagno (circa +0,05% per °C) è troppo piccolo per compensare la perdita di tensione.

Il risultato netto è il **coefficiente di temperatura della potenza**, tipicamente compreso tra **-0,35% e -0,45% per °C** sopra i 25 °C di riferimento delle condizioni STC.

## Mettiamoci i numeri

Rendiamolo concreto. Il tuo pannello è dichiarato 400 W in condizioni STC: 25 °C di temperatura di cella e 1.000 W/m² di irradianza.

In una giornata di luglio nel Centro-Sud la temperatura dell'aria può stare tra i 35 e i 40 °C. Con il sole pieno che scalda i moduli, la temperatura di cella arriva facilmente a 60-70 °C su un tetto ben esposto. Prendiamo 65 °C: sono 40 °C sopra il riferimento STC.

Con un coefficiente di -0,4% per °C, la perdita è del 16%: il tuo pannello da 400 W ne eroga circa 336 al picco, anche con sole perfetto.

Ora prendi una limpida giornata di aprile: aria a 15 °C, sole pieno, brezza leggera. La temperatura di cella arriva forse a 35-40 °C, cioè solo 10-15 °C sopra STC. Perdita: dal 4 al 6%. Il pannello eroga 376-384 W.

La differenza è di **40-48 W per pannello**, dovuta unicamente alla temperatura.

Moltiplica per 20 pannelli e stai guardando 800-960 W di differenza di potenza di picco tra una giornata fresca di primavera e una calda d'estate, a parità di sole.

## Perché la temperatura di cella non è quella dell'aria

I tuoi pannelli lavorano molto più caldi dell'aria che li circonda. Con 1.000 W/m² di irradianza la temperatura di cella supera tipicamente quella ambiente di 20-30 °C, a seconda del montaggio e del vento.

I **moduli su tetto a falda**, con poco spazio per l'aria sotto, sono i più caldi. Gli impianti **a terra o su strutture inclinate** ben ventilate restano più freschi. La velocità del vento pesa moltissimo: una brezza costante può abbassare la temperatura di cella di 10 °C o più rispetto all'aria ferma. Nelle località costiere questo è un vantaggio reale nelle ore centrali d'estate.

Per questo il settore usa un parametro chiamato **NOCT** (temperatura nominale di funzionamento della cella), tipicamente 42-46 °C, che rappresenta la temperatura di cella in condizioni realistiche definite (800 W/m², 20 °C di aria, 1 m/s di vento). È sempre ben sopra la temperatura ambiente.

## Il punto dolce della primavera

La primavera, in particolare da marzo a maggio, offre una combinazione unica.

**Irradianza forte.** Il sole è già abbastanza alto per una buona radiazione diretta: a mezzogiorno, in Italia, tra aprile e maggio arriva a 55-65° sull'orizzonte.

**Temperature fresche.** Con aria tra gli 8 e i 18 °C la temperatura di cella resta moderata e le perdite termiche si riducono al minimo.

**Cieli sereni.** La primavera porta spesso configurazioni stabili di alta pressione, con ottima trasparenza dell'atmosfera.

**Giornate già lunghe.** Non quanto a giugno, ma aprile e maggio offrono già 13-15 ore di luce.

Il risultato: irradianza alta su pannelli che lavorano freschi ed efficienti. È il punto dolce del fotovoltaico.

Nel Centro-Sud l'effetto è più marcato che nel resto d'Europa, proprio perché le estati sono più calde: la stessa irradianza di agosto arriva su moduli che lavorano decine di gradi sopra le condizioni di targa.

## Cosa significa per la previsione

La temperatura non è una nota a piè di pagina nella modellazione del fotovoltaico: è una variabile primaria. Qualunque previsione che ignori la temperatura di cella sovrastima sistematicamente la produzione estiva e sottostima quella di primavera e autunno.

Volcast la modella in modo esplicito. Non si limita a chiedersi "quanto sole ci sarà": calcola la temperatura di cella attesa a partire da irradianza, temperatura dell'aria e vento, poi applica il coefficiente di temperatura per prevedere la potenza reale in uscita.

È uno dei vantaggi concreti della previsione basata sulla fisica: l'effetto della temperatura è dentro il modello fisico, non appreso da dati storici che potrebbero non contenere condizioni insolite.

La prossima volta che vedi una splendida giornata di primavera battere un pomeriggio afoso d'agosto, saprai esattamente perché.
