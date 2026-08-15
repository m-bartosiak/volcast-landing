---
title: "Inclinazione e azimut: quanto pesano sulla resa annua"
description: "Due angoli decidono quanta energia catturano i tuoi pannelli. Perché contano e perché nella realtà il margine di errore è più ampio di quanto pensi."
date: 2026-04-07
tags: ["tilt", "azimuth", "panel-orientation", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 4
lang: it
draft: false
seo:
  ogTitle: "Inclinazione e orientamento dei pannelli fotovoltaici: quanto contano sulla resa"
  keywords: ["inclinazione pannelli fotovoltaici", "orientamento pannelli fotovoltaici", "azimut pannelli", "inclinazione ottimale Italia"]
---

Quando configuri una previsione di produzione fotovoltaica, in Volcast o altrove, ti vengono chiesti due numeri che descrivono l'orientamento dei moduli: inclinazione e azimut. Questi due angoli, insieme alla tua posizione geografica, definiscono il rapporto geometrico tra i pannelli e il sole nell'arco dell'anno.

Vediamo di chiarirli una volta per tutte.

## Inclinazione: quanto ti allontani dall'orizzontale

L'inclinazione (il "tilt" dei manuali in inglese) è l'angolo tra la superficie del modulo e il piano orizzontale. Un pannello appoggiato in piano ha inclinazione 0°. Un pannello montato verticale come una parete ha inclinazione 90°.

Nell'emisfero nord la regola empirica classica dice che l'inclinazione ottimale coincide con la latitudine. Milano, a circa 45°N, suggerirebbe quindi 45°. Una logica fisica c'è: agli equinozi un'inclinazione pari alla latitudine rende il modulo perpendicolare ai raggi a mezzogiorno solare.

Ma l'ottimo reale è quasi sempre **più basso**. In Italia si lavora attorno a 30-35° al Nord e 28-30° al Sud. Perché?

Primo, l'estate contribuisce in modo sproporzionato alla produzione annua (giornate lunghe, sole intenso) e il sole estivo è alto in cielo. Un'inclinazione più bassa raccoglie meglio l'estate, anche se sacrifica un po' di inverno. Alle latitudini meridionali il sole è mediamente più alto, ed è per questo che l'ottimo scende ancora di qualche grado.

Secondo, nei climi con nuvolosità significativa una quota rilevante dell'irradiazione annua è diffusa. La luce diffusa arriva da tutta la volta celeste, e un modulo più piatto "vede" più cielo. Un modulo molto inclinato punta verso l'orizzonte e si perde la luce diffusa che arriva dall'alto.

Terzo, l'autopulizia. Le inclinazioni maggiori smaltiscono meglio la pioggia, ma i moduli moderni con trattamenti antisporco non hanno bisogno di angoli estremi per questo. Sotto i 10-15° il discorso cambia: lì lo sporco tende davvero a fermarsi, e nelle zone soggette a polveri sahariane la differenza si vede.

## Azimut: verso dove sei rivolto

L'azimut è la direzione della bussola verso cui guarda il modulo. E qui arriva la trappola più fastidiosa della configurazione.

In Italia circolano **due convenzioni diverse**. Molti installatori e diversi strumenti di calcolo usano 0° = Sud, con valori negativi verso Est e positivi verso Ovest. Altri sistemi, Volcast compreso, usano la convenzione della bussola: 0° = Nord, 90° = Est, 180° = Sud, 270° = Ovest.

Prima di scrivere un numero in un campo, verifica quale delle due sta usando. Scambiarle significa ruotare virtualmente l'impianto di 180°, e la previsione ti darà il picco al mattino quando in realtà lo hai nel pomeriggio.

Nell'emisfero nord l'ottimo da manuale è il Sud pieno, perché è la direzione dell'arco più alto del sole. Massimizza l'irradiazione giornaliera totale nelle giornate serene.

Ma ci sono buone ragioni per discostarsene.

**Sud-ovest** sposta il picco di produzione più avanti nel pomeriggio, avvicinandolo ai consumi serali, quando rientri, cucini e fai partire gli elettrodomestici. Se hai una tariffa a fasce orarie o un accumulo piccolo, questo può valere più della resa totale massima.

**Impianti est-ovest**, con i moduli distribuiti sulle due falde opposte, rinunciano forse al 10-15% della produzione annua rispetto al Sud ottimale, ma restituiscono una curva giornaliera più piatta: più potenza al mattino e alla sera, meno picco a mezzogiorno. Questo assomiglia molto di più al profilo di consumo di una casa e riduce il clipping se l'inverter è sottodimensionato rispetto ai moduli.

## La sorpresa della sensibilità

Ed ecco il dato che tranquillizza quasi tutti i proprietari di impianto: la produzione è molto meno sensibile all'orientamento di quanto ci si aspetti.

Prendi un impianto rivolto a Sud con inclinazione 35° e considera le deviazioni.

Un'inclinazione di 20° invece di 35° ti costa circa il **3-5%** della produzione annua. Una di 45° circa il **2-3%**. Hai un ampio altopiano di configurazioni quasi ottimali.

Un azimut di 150° (SSE) o 210° (SSO) invece di 180° costa solo il **2-4%** annuo. Perfino Est pieno (90°) od Ovest pieno (270°) costano circa il **15-20%**: ti resta comunque l'80-85% del massimo.

Il caso peggiore, il modulo montato in piano, raccoglie ancora attorno al 90% dell'irradiazione annua ottimale alle latitudini italiane, con il Sud leggermente avvantaggiato rispetto al Nord perché il sole è mediamente più alto. I moduli in piano perdono di più per sporcamento e non si autopuliscono, ma la penalizzazione puramente geometrica è modesta.

Tradotto: non angosciarti se il tetto non è perfettamente a Sud con l'inclinazione da manuale. Nel mondo reale i vincoli della falda, l'estetica e soprattutto l'ombreggiamento pesano molto più della rincorsa all'ultimo punto percentuale di geometria.

## Perché Volcast ti chiede questi numeri

Nonostante la sensibilità sia così indulgente, inclinazione e azimut restano decisivi per la **previsione ora per ora**. La forma della curva giornaliera cambia radicalmente con l'orientamento:

un impianto a Sud inclinato 35° ha un picco marcato a mezzogiorno; uno a Est sale presto la mattina e crolla dopo le 12; uno a Ovest fa l'opposto; uno in piano ha una curva simmetrica ma più bassa.

Queste differenze di forma contano parecchio se stai decidendo quando far partire gli elettrodomestici pesanti, quando ricaricare l'auto elettrica o quando aspettarti l'eccedenza da immettere in rete.

Volcast usa inclinazione e azimut per calcolare la **trasposizione**, cioè come la posizione del sole nell'arco della giornata si traduce in irradianza sulla tua superficie specifica. Farlo bene significa che la previsione non ti dice soltanto "quanto oggi", ma "quanto alle 10, quanto alle 14 e quanto alle 17".

Insieme alla posizione geografica (che determina il percorso del sole), questi due angoli e la potenza nominale dei moduli sono i tre numeri che servono a Volcast per generare una previsione basata sulla fisica. Nessuno storico di produzione. Nessun periodo di addestramento. Solo geometria, fisica dell'atmosfera e la configurazione del tuo impianto.
