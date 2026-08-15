---
title: "Perché le app meteo non bastano per il fotovoltaico"
description: "«Sereno» non vuol dire «tanta produzione»: irradianza, nuvolosità, geometria del tetto e temperatura, perché al fotovoltaico serve una previsione dedicata."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "weather-vs-output"
seo:
  ogTitle: "Previsioni meteo e produzione fotovoltaica"
---
«Domani sereno, 22 gradi»: e questo cosa ti dice sulla produzione del tuo impianto? Sorprendentemente poco. Una previsione meteo e una previsione di produzione rispondono a due domande diverse, e ricavare la seconda a occhio dalla prima porta a errori sistematici. Ecco i tre motivi per cui il fotovoltaico ha bisogno di una previsione dedicata.

## Motivo 1: i pannelli non vedono la nuvolosità, vedono l'irradianza

Le app meteo danno la copertura nuvolosa in percentuale. I pannelli rispondono all'irradianza, cioè alla potenza della radiazione in watt per metro quadro. Il legame tra le due grandezze è debole: un velo alto e sottile di cirri al «60% di nuvolosità» lascia passare molta più energia di uno strato basso di stratocumuli con la stessa identica percentuale. Aggiungi la radiazione diffusa: in una giornata coperta ma luminosa un impianto può lavorare al 20-30% della potenza nominale con la sola luce diffusa, e la parola «nuvoloso» nell'app non te lo dice.

## Motivo 2: il tuo tetto cambia tutto

La stessa irradianza si traduce in kWh completamente diversi a seconda della geometria: orientamento, inclinazione, disposizione delle stringhe, l'ombra del comignolo alle 15. Un impianto est-ovest e uno esposto a Sud non differiscono solo nel totale giornaliero, ma nell'intera forma della curva di produzione. Nessuna previsione meteo conosce il tuo tetto, ed è il tetto a decidere quando hai davvero del surplus.

## Motivo 3: la temperatura gioca contro l'intuito

«Ondata di calore uguale tanta produzione» è il mito più diffuso. I moduli perdono circa 0,3-0,4% di rendimento per ogni grado di temperatura di cella sopra i 25 °C, e a mezzogiorno di luglio le celle arrivano a 60-70 °C. I record cadono nelle giornate di primavera serene, fresche e ventilate, non nella canicola di agosto: e «sereno, 33 °C» non te lo dirà mai.

## Piccolo glossario: GHI, DNI, DHI, i tre numeri che i pannelli vedono davvero

Se non è la nuvolosità, allora cosa? L'irradianza si descrive con tre componenti. **GHI** (irradianza globale orizzontale) è la radiazione totale sul piano orizzontale. **DNI** (irradianza diretta normale) è la componente diretta, quella che proietta le ombre; «normale» qui significa perpendicolare ai raggi, non «ordinaria», ed è una delle parole più fraintese di tutta la materia. **DHI** (irradianza diffusa orizzontale) è la luce diffusa da nuvole e atmosfera. In pieno sole domina la DNI, in una giornata coperta lavori quasi solo sulla DHI, ed è esattamente il motivo per cui i pannelli producono anche «senza sole». Un modello di previsione combina queste tre componenti nella radiazione che colpisce *il tuo* piano, inclinato e ruotato.

Come queste componenti diventino una previsione oraria in kWh per un impianto specifico, calibrata sulle produzioni reali, è spiegato passo per passo nella [guida alla previsione di produzione →](/blog/it/previsione-produzione-fotovoltaica). Qui basta ricordare una cosa: senza questi tre numeri, qualunque «previsione fotovoltaica» è una stima a occhio.

## FAQ

**Posso convertire a mano una previsione meteo in produzione?**
Grosso modo sì, per il totale giornaliero in pieno sole. La distribuzione oraria, le giornate variabili e l'ombreggiamento stagionale richiedono un modello: lì le stime a mano sbagliano di decine di punti percentuali.

**«Cielo sereno» nell'app significa produzione massima?**
Non sempre: foschia, smog e nubi alte sottili tagliano la DNI anche con «0% di nuvolosità», e al resto pensa la temperatura di cella. Da qui differenze del 10-20% tra giornate ugualmente «serene».

**Da dove arrivano i dati satellitari?**
I satelliti meteorologici misurano la radiazione riflessa dalle nuvole; da quella si ricava l'energia che arriva al suolo in ogni punto della griglia.
