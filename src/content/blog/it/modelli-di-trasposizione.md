---
title: "Modelli di trasposizione: irraggiamento sul piano inclinato"
description: "I dati meteo descrivono una superficie orizzontale, i tuoi moduli sono inclinati. Il ponte matematico si chiama trasposizione: la scelta del modello pesa."
date: 2026-05-12
tags: ["transposition", "perez-model", "irradiance", "panel-orientation", "forecasting"]
series: "deep-dives"
seriesOrder: 5
lang: it
draft: false
seo:
  ogTitle: "Modelli di trasposizione spiegati: dall'irradianza orizzontale al tuo modulo inclinato"
  keywords: ["modello di trasposizione fotovoltaico", "modello di Perez irradianza", "irradianza sul piano inclinato", "calcolo irradianza POA"]
relatedPosts: ["inclinazione-e-azimut-dei-pannelli", "luce-diretta-e-luce-diffusa", "viaggio-della-luce-dallo-spazio-al-pannello"]
---

Le stazioni meteo e i modelli NWP riportano la radiazione solare su una superficie orizzontale. I tuoi moduli sono inclinati di 30°, o di 45°, oppure montati su una falda a spiovente. Il passaggio matematico che converte l'irradianza orizzontale in quella che il tuo modulo inclinato riceve davvero si chiama **trasposizione**, ed è uno dei punti in cui la previsione basata sulla fisica si guadagna lo stipendio.

## Il problema

L'irradianza globale orizzontale (GHI) è la misura standard. È quella che registrano i piranometri delle stazioni meteo, quella che si ricava dalle stime satellitari, quella che calcolano i modelli NWP.

Ma l'irradianza sul tuo modulo inclinato, chiamata irradianza sul piano dei moduli (POA, plane of array), è diversa dalla GHI. In una giornata serena d'inverno un modulo inclinato esposto a Sud può ricevere sensibilmente *più* irradianza di una superficie orizzontale, perché intercetta più frontalmente il sole basso invernale. In una giornata estiva, con il sole quasi allo zenit, lo stesso modulo inclinato può ricevere leggermente meno dell'orizzontale, perché è inclinato via dal sole di mezzogiorno.

Il rapporto tra GHI e POA dipende dalla posizione del sole (che cambia ogni minuto), dall'inclinazione e dall'orientamento dei tuoi moduli e, soprattutto, dalla ripartizione tra radiazione diretta e diffusa.

## Passo 1: decomposizione

Prima di trasporre bisogna separare la GHI nelle sue componenti: irradianza diretta normale (DNI) e irradianza diffusa orizzontale (DHI). Attenzione al termine: "normale" qui significa perpendicolare ai raggi solari, non "ordinaria". Se la fonte meteo le fornisce già separate, ottimo. Se fornisce solo la GHI, come accade per molte sorgenti di dati, serve un **modello di decomposizione** per stimare la ripartizione.

I modelli di decomposizione usano come ingresso principale l'indice di serenità (il rapporto tra la GHI al suolo e l'irradianza extraterrestre). Il cielo sereno ha indice alto e frazione diretta alta. Il cielo coperto ha indice basso e frazione diffusa alta. I modelli di Erbs, di Orgill-Hollands e BRL sono tra gli approcci di decomposizione più usati.

Questo passaggio introduce incertezza: la stessa GHI può derivare da combinazioni diverse di diretta e diffusa. Una foschia sottile e uniforme e un campo di nuvole sparse possono dare GHI simili, ma valori di POA molto diversi su un modulo inclinato.

## Passo 2: trasposizione della componente diretta

La componente diretta è pura geometria. La DNI arriva dalla direzione del sole. La frazione intercettata dalla tua superficie inclinata segue il **coseno dell'angolo di incidenza**, cioè l'angolo tra i raggi solari e la normale alla superficie del modulo.

Quando il sole è perfettamente frontale al modulo (angolo di incidenza pari a 0°) catturi il 100% della DNI. Man mano che l'angolo cresce ne catturi meno, seguendo una curva coseno. A 60° di incidenza ne catturi solo il 50%. A 90°, con il sole parallelo al piano del modulo, non ne catturi nulla.

L'angolo di incidenza dipende dalla tua inclinazione, dal tuo orientamento e dalla posizione del sole, tutte grandezze calcolabili con grande precisione. Questa parte della trasposizione è sostanzialmente esatta.

## Passo 3: trasposizione della diffusa, dove i modelli divergono

Qui viene il difficile. La radiazione diffusa arriva da tutto il cielo, ma non in modo uniforme. La porzione di cielo vicina al sole è più luminosa di quella opposta. In certe condizioni l'orizzonte è più luminoso dello zenit. Le nuvole creano chiazze chiare e scure.

Un modulo inclinato vede solo una parte della volta celeste. Un modulo inclinato di 35° rispetto all'orizzontale "vede" meno cielo dietro di sé (sotto la linea di orizzonte del modulo) e più cielo davanti. Quanta radiazione diffusa riceve dipende da come è distribuita la luminosità del cielo.

I diversi modelli di trasposizione fanno ipotesi diverse su questa distribuzione.

**Modello isotropo**: il più semplice. Assume che la radiazione diffusa sia uniforme su tutta la volta celeste. La superficie inclinata ne riceve una frazione proporzionale al proprio fattore di vista del cielo: (1 + cos(inclinazione)) / 2. Un modulo orizzontale (inclinazione pari a 0°) vede tutto il cielo; un modulo verticale ne vede metà.

Questo modello è banale dal punto di vista computazionale, ma è sistematicamente sbagliato. I cieli reali non sono uniformi: sono più luminosi vicino al sole e vicino all'orizzonte.

**Modello di Hay-Davies**: aggiunge una componente circumsolare. Tratta parte della radiazione diffusa come proveniente dalla direzione del sole (come la diretta) e il resto come isotropa. È più accurato dell'isotropo, soprattutto con cielo sereno o poco nuvoloso, dove l'aumento di luminosità attorno al sole è significativo.

**Modello di Perez**: il più usato nell'industria fotovoltaica. Scompone la radiazione diffusa in tre componenti: fondo isotropo, brillamento circumsolare (la regione attorno al sole) e brillamento all'orizzonte (una fascia luminosa lungo l'orizzonte, particolarmente evidente a cielo sereno). Usa coefficienti empirici ricavati da estese campagne di misura.

Il modello di Perez ottiene tipicamente un'accuratezza migliore del 5-10% rispetto all'isotropo su superfici inclinate, con il miglioramento più marcato per inclinazioni ripide e cieli sereni. Su moduli orizzontali o in condizioni di cielo coperto tutti i modelli convergono, perché il cielo è davvero all'incirca uniforme.

## Passo 4: componente riflessa dal suolo

La luce che si riflette sul terreno e colpisce il modulo dal basso aggiunge un terzo contributo. Si calcola così: GHI × albedo × (1 - cos(inclinazione)) / 2.

La riflettanza del suolo (albedo) varia: neve fresca 0,6-0,8, prato verde 0,2, terreno scuro 0,1, cemento 0,3. Un'inclinazione maggiore cattura più radiazione riflessa.

Nella maggior parte degli impianti la riflessione dal suolo contribuisce per il 2-5% dell'irradianza POA totale. In ambienti innevati e con moduli molto inclinati può arrivare al 10-15%, un bonus non banale.

## Mettendo tutto insieme

Irradianza POA totale = diretta trasposta + diffusa trasposta + riflessa dal suolo.

Questo singolo numero, calcolato per ogni ora (o ogni 15 minuti) del periodo di previsione, alimenta il modello di cella fotovoltaica che ne ricava l'uscita elettrica. La trasposizione è il punto in cui l'inclinazione e l'orientamento che hai inserito diventano critici: sono loro a dare forma all'intera curva di produzione giornaliera.

Un modulo esposto a Sud con 30° di inclinazione a Roma ha un picco netto attorno al mezzogiorno solare. Un modulo esposto a est raggiunge il picco tra le 9 e le 10. Un modulo orizzontale ha una curva più larga e più bassa. Sono queste forme a stabilire quando conviene programmare i consumi più pesanti, ricaricare l'auto elettrica o aspettarsi surplus da immettere in rete.

Volcast implementa il modello di trasposizione di Perez. Per ogni ora di previsione decompone l'irradianza del modello meteo nelle componenti diretta e diffusa, calcola la posizione del sole, ricava l'angolo di incidenza sul tuo modulo inclinato, applica il modello di Perez per la diffusa con le sue componenti circumsolare e di orizzonte, aggiunge la riflessione dal suolo e arriva all'irradianza POA che entra nella fase di conversione fotovoltaica.

È più matematica di una tabella di riferimento. Ma è il motivo per cui la previsione coglie correttamente la forma della tua curva di produzione giornaliera, non solo il totale.
