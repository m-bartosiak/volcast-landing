---
title: "Come i pannelli fotovoltaici trasformano la luce in energia"
description: "Spiegazione chiara dell'effetto fotovoltaico: dai fotoni che colpiscono il silicio alla corrente alternata che alimenta casa tua, senza tecnicismi inutili."
date: 2026-03-24
tags: ["solar-basics", "photovoltaic-effect", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 1
lang: it
draft: false
seo:
  ogTitle: "Come i pannelli fotovoltaici trasformano la luce in elettricità"
  keywords: ["come funzionano i pannelli fotovoltaici", "effetto fotovoltaico spiegato", "fisica della cella fotovoltaica", "conversione dell'energia solare"]
relatedPosts: ["perche-i-pannelli-producono-di-piu-in-primavera", "luce-diretta-e-luce-diffusa", "inclinazione-e-azimut-dei-pannelli"]
---

Ogni secondo la superficie terrestre riceve dal Sole circa 430 miliardi di miliardi di joule di energia. I tuoi pannelli fotovoltaici ne intercettano una fetta minuscola e la trasformano in elettricità senza parti in movimento, senza combustione e senza rumore. Ma come?

La risposta sta all'incrocio tra fisica quantistica e ingegneria dei semiconduttori. Tranquillo: non serve una laurea in fisica. Vediamola passo per passo.

## Tutto comincia da un fotone

La luce solare non è un flusso continuo di energia. Arriva sotto forma di pacchetti discreti chiamati **fotoni**, minuscoli grumi di energia elettromagnetica, ciascuno con un contenuto energetico che dipende dalla sua lunghezza d'onda. I fotoni blu trasportano più energia di quelli rossi. Quelli infrarossi ne trasportano meno di entrambi.

Questo conta perché una cella fotovoltaica può usare solo i fotoni sopra una certa soglia di energia. Per il silicio, il materiale di oltre il 95% dei pannelli installati nel mondo, quella soglia è di circa 1,1 elettronvolt (eV), che corrisponde al vicino infrarosso. Tutto ciò che sta sotto attraversa la cella come se non ci fosse.

## Il panino di semiconduttore

Una cella fotovoltaica è in sostanza una sottile fetta di silicio "drogata" di proposito: sono state cioè aggiunte quantità minime di altri elementi per cambiarne le proprietà elettriche.

Lo strato superiore è drogato con fosforo, che ha un elettrone in più rispetto al silicio. Ne risulta un'abbondanza di elettroni liberi: è il silicio **di tipo n** (n come portatori di carica negativa).

Lo strato inferiore è drogato con boro, che ha un elettrone in meno. Ne risultano delle "lacune", cioè posti in cui un elettrone potrebbe stare ma non c'è. È il silicio **di tipo p** (p come portatori di carica positiva).

Dove i due strati si incontrano succede qualcosa di notevole. Gli elettroni del lato n migrano verso il lato p per riempire le lacune, e si crea una zona sottile con un campo elettrico interno. È la **giunzione p-n**, il motore di ogni cella fotovoltaica.

## L'effetto fotovoltaico

Quando un fotone con energia sufficiente colpisce il silicio, strappa un elettrone dal suo legame atomico. Si forma così una coppia elettrone-lacuna: un elettrone libero e un posto vuoto.

Il punto chiave è questo: il campo elettrico della giunzione p-n si comporta come un cancello a senso unico. Spinge l'elettrone liberato verso il lato n e la lacuna verso il lato p. Questa separazione di cariche genera la tensione, cioè la pressione elettrica che mette in moto la corrente.

Collega un filo dalla parte superiore della cella a quella inferiore (attraverso l'impianto elettrico di casa) e gli elettroni scorrono: quella è elettricità. L'elettrone finisce per riempire una lacuna, l'energia del fotone è stata catturata come lavoro utile e il ciclo continua finché la luce continua ad arrivare.

Questo è l'**effetto fotovoltaico**, osservato per la prima volta da Edmond Becquerel nel 1839 e sfruttato in modo pratico solo nel 1954 nei Bell Labs.

## Dalla cella alla potenza utilizzabile

Una singola cella di silicio produce circa 0,5-0,6 V, non abbastanza per essere utile da sola. Le celle vengono quindi collegate in serie (per sommare le tensioni) e in parallelo (per sommare le correnti), formando un **modulo**: quello che vedi sul tetto.

Un modulo residenziale tipico contiene 60 o 72 celle e produce 30-40 V in corrente continua (DC). Casa tua funziona in corrente alternata (AC) a 230 V in Europa, o a 120 V in Nord America, quindi un **inverter** converte l'uscita in continua dei pannelli in alternata compatibile con la rete.

Il percorso è questo: **fotone → elettrone liberato → corrente continua → inverter → corrente alternata → i tuoi elettrodomestici.**

## Cosa si perde per strada

Non tutta la luce solare diventa elettricità. Anzi: un pannello di silicio standard converte solo il 18-22% dell'energia solare in ingresso. Dove finisce il resto?

**Fotoni sotto la soglia di banda proibita** (circa il 19% della luce solare): non hanno energia sufficiente a liberare elettroni. Attraversano la cella o vengono assorbiti come calore.

**Perdite per termalizzazione** (circa il 33%): avvengono quando fotoni ad alta energia (blu, ultravioletti) liberano un elettrone ma portano con sé più energia di quella necessaria. L'eccesso diventa calore nella cella.

**Ricombinazione**: gli elettroni liberati ricadono nelle lacune prima di raggiungere il circuito. La qualità produttiva e il progetto della cella riducono il fenomeno, ma non riescono a eliminarlo del tutto.

**Riflessione e ombreggiamento**: costano un altro paio di punti percentuali, anche se i rivestimenti antiriflesso e le superfici testurizzate aiutano.

**Resistenza elettrica** nei contatti metallici e nei cablaggi della cella: consuma una piccola frazione sotto forma di calore.

Il rendimento massimo teorico di una cella di silicio a singola giunzione è circa il 29,4% (il limite di Shockley-Queisser). Le migliori celle da laboratorio hanno raggiunto il 26,8%. I pannelli sul tuo tetto sono quindi sorprendentemente vicini a ciò che la fisica consente.

## Perché tutto questo conta per la previsione

Capire questa catena, dal fotone all'elettrone alla potenza, fa vedere perché prevedere con precisione la produzione è un problema di fisica e non solo di statistica.

La quantità di elettricità che i tuoi pannelli producono dipende da **quanti fotoni utilizzabili raggiungono la superficie della cella** e da **con quanta efficienza la cella li converte** alla temperatura in cui si trova in quel momento. Entrambe le cose seguono leggi fisiche che si possono modellare.

Lo spettro della luce in arrivo cambia con le condizioni atmosferiche. Il rendimento della cella si sposta con la temperatura. L'angolo di incidenza conta. Tutte grandezze calcolabili, se conosci la fisica.

È esattamente quello che fa Volcast. Invece di indovinare la produzione futura a partire dagli andamenti storici, simula la catena fisica, dalle condizioni atmosferiche alla modellazione dell'irradianza fino al comportamento della cella, per la tua installazione specifica.
