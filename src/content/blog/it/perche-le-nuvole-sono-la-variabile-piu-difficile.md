---
title: "Perché la nuvolosità è così difficile da prevedere"
description: "La temperatura è prevedibile, la posizione del sole si calcola. Le nuvole no: sono teoria del caos in azione e la prima fonte di errore previsionale."
date: 2026-04-28
tags: ["clouds", "forecast-uncertainty", "irradiance", "weather", "forecasting"]
series: "deep-dives"
seriesOrder: 3
lang: it
draft: false
seo:
  ogTitle: "Perché le nuvole sono la parte più difficile della previsione fotovoltaica"
  keywords: ["nuvolosità previsione fotovoltaica", "incertezza previsione produzione", "tipi di nuvole produzione fotovoltaica", "errore previsione nuvole"]
relatedPosts: ["da-dove-arrivano-le-previsioni-meteo", "luce-diretta-e-luce-diffusa", "nowcasting-day-ahead-e-previsioni-settimanali"]
---

Se hai mai confrontato una previsione di produzione fotovoltaica con la produzione reale del tuo impianto, probabilmente hai notato uno schema: le giornate serene e quelle completamente coperte vengono previste bene. Le giornate a nuvolosità variabile sono un disastro.

Non è un difetto del modello previsionale. È una proprietà fondamentale delle nuvole. Sono, con buona probabilità, la cosa più difficile da prevedere in tutta la scienza dell'atmosfera, e per l'energia solare sono anche la variabile più importante in assoluto.

## Perché le nuvole sono diverse

Pensa alle altre variabili che contano per la produzione fotovoltaica. La posizione del sole è pura astronomia: si calcola con la precisione del secondo d'arco e con secoli di anticipo. La temperatura dell'aria cambia gradualmente ed è ben vincolata dalle configurazioni meteorologiche di grande scala; le previsioni di temperatura per il giorno successivo rientrano tipicamente entro 1-2 °C.

Le nuvole rompono questo schema perché vivono all'incrocio di più processi fisici, ciascuno su una scala diversa. La dinamica atmosferica di grande scala decide se una regione si trova sotto un promontorio anticiclonico (cielo sereno) o sotto un sistema frontale (cielo coperto). I processi di mesoscala creano bande nuvolose organizzate e celle convettive. La turbolenza di microscala determina i bordi esatti delle nuvole, il loro spessore e le loro proprietà ottiche.

I modelli meteo gestiscono ragionevolmente bene la grande scala. Faticano su mesoscala e microscala, che è esattamente la scala che conta per il tuo tetto.

## Non tutte le nuvole sono uguali

Tipi di nuvole diversi hanno effetti molto diversi sulla produzione fotovoltaica, e pongono problemi previsionali altrettanto diversi.

**Cirri** (alti, sottili, filamentosi): riducono l'irradianza diretta del 10-30%, ma restano relativamente trasparenti. Sono facili da prevedere perché legati a strutture atmosferiche di grande scala. Sotto i cirri i tuoi moduli continuano a produrre bene.

**Strati** (bassi, uniformi, una coltre grigia): bloccano gran parte della luce diretta e lasciano passare soprattutto radiazione diffusa. Riducono la produzione al 20-40% dei valori a cielo sereno. Sono relativamente facili da prevedere perché si formano in condizioni prevedibili (inversioni termiche, fronti caldi) e persistono per ore.

**Cumuli** (gonfi, a celle separate): qui la previsione si sgretola. I cumuli sono nuvole convettive: si formano quando la superficie si scalda in modo disomogeneo, generando bolle d'aria ascendenti che condensano in quota. Sono caotici per natura: piccole differenze nel riscaldamento del suolo, nell'umidità o nel gradiente del vento producono campi nuvolosi completamente diversi.

Un cumulo può ombreggiare i tuoi moduli per 5 minuti, poi passare e lasciarti pieno sole per 15 minuti prima che arrivi la nuvola successiva. Questo alternarsi acceso-spento crea oscillazioni rapide di potenza che nessun modello meteo con risoluzione di 10 km o più può catturare.

**Cumulonembi** (torri temporalesche): portano l'irradianza vicino a zero durante il passaggio e sono associati a fenomeni intensi. I temporali in sé sono in parte prevedibili (instabilità atmosferica, umidità, sollevamento), ma il loro momento e la loro posizione esatta no.

## Il problema della nuvolosità variabile

Lo scenario peggiore per la previsione fotovoltaica non è la giornata completamente coperta: è quella a nuvolosità variabile. Ed è proprio la condizione più frequente in molti climi, gran parte dell'Italia compresa.

In una giornata a nuvolosità variabile l'irradianza sul tuo tetto oscilla in modo violento. Un minuto hai 900 W/m² di radiazione diretta. Due minuti dopo passa una nuvola e sei a 200 W/m² di sola diffusa. Due minuti più tardi puoi arrivare a 1.100 W/m² per effetto del cloud enhancement (l'esaltazione dovuta ai bordi delle nuvole), un picco breve sopra il valore a cielo sereno, quando la luce diretta si somma a quella riflessa dai bordi nuvolosi vicini.

Un modello meteo vede questa giornata come "copertura nuvolosa al 50%, irradianza media 600 W/m²". Quella media è approssimativamente corretta per un totale orario, ma la realtà istantanea non assomiglia per niente a un tranquillo 600 W/m².

Per la gestione di una batteria di accumulo, per la ricarica dell'auto elettrica o per qualunque applicazione a cui interessa la potenza in un istante preciso e non l'energia su un'ora, questa media è un limite serio.

## Perché i modelli fanno fatica

I modelli NWP rappresentano le nuvole attraverso **schemi di parametrizzazione**, ricette matematiche semplificate che stimano le proprietà delle nuvole a partire dalle variabili di scala maggiore che il modello riesce a risolvere. Il modello conosce temperatura, umidità e moti verticali in ogni punto di griglia. La parametrizzazione li converte in frazione nuvolosa, contenuto d'acqua liquida e spessore ottico.

Queste parametrizzazioni sono approssimazioni. Funzionano in senso statistico: mediate su molte celle di griglia e molti giorni, le proprietà delle nuvole risultano all'incirca corrette. Ma per una specifica cella in una specifica ora la nuvola parametrizzata può sbagliare di parecchio.

La difficoltà di fondo è la **scala**: le nuvole convettive si formano su scale che vanno da qualche centinaio di metri a pochi chilometri, mentre i modelli globali hanno celle da 10-25 km. Il modello non può simulare ciò che non riesce a risolvere. I modelli regionali ad alta risoluzione (griglia di 2-3 km) cominciano a rappresentare le singole celle convettive, ma sono disponibili solo per aree e orizzonti temporali limitati.

## Che cosa significa per le previsioni fotovoltaiche

Le implicazioni pratiche sono queste.

**I totali giornalieri di energia** si prevedono ragionevolmente bene. Anche quando il modello sbaglia il momento in cui arrivano le nuvole, la frazione nuvolosa complessiva della giornata è di solito all'incirca corretta. Le previsioni di produzione giornaliera per il giorno successivo rientrano tipicamente entro il 15-25% del valore reale.

**I profili di potenza orari** sono molto più difficili. La previsione può collocare il picco di produzione alle 13 mentre nella realtà cade alle 11, perché un sistema nuvoloso è arrivato prima di quanto modellato. L'energia totale può essere simile, ma la distribuzione nel tempo no.

**Le variazioni sotto l'ora** sono di fatto imprevedibili oltre i 30-60 minuti successivi. Questo è il campo del nowcasting (previsione a brevissimo termine), che usa immagini satellitari, sensori a terra o telecamere sky camera per seguire le nuvole in tempo reale, invece di affidarsi alle previsioni NWP.

**Le giornate serene e quelle coperte** si prevedono bene perché rappresentano stati atmosferici stabili. Il modello cattura la configurazione di grande scala che produce quelle condizioni. Sono le situazioni intermedie e miste a metterlo in crisi.

Volcast affronta la cosa con onestà. Il modello fisico produce la migliore stima possibile a partire dai dati meteo in ingresso, ma non pretende di prevedere oscillazioni di potenza da 5 minuti in un pomeriggio a nuvolosità variabile. Servirebbe uno strumento di tutt'altro tipo, che guarda il cielo in tempo reale invece di simularlo dai modelli meteo.

L'obiettivo è darti una stima utile della produzione di domani e una forma della curva oraria accurata, dicendoti con chiarezza dove sta l'incertezza. Anticipazione: sta nelle nuvole.
