---
title: "Pompa di calore e fotovoltaico: scaldare quando produci"
description: "Come spostare i cicli di acqua calda della pompa di calore nelle ore di produzione: programmi orari, contatto SG Ready e automazioni su previsione."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "heat-pump"
seo:
  ogTitle: "Pompa di calore e fotovoltaico: come sincronizzarli"
---
Una pompa di calore e un impianto fotovoltaico sono una coppia naturale, ma solo se la pompa lavora mentre il tetto produce. I programmi di fabbrica scaldano l'acqua sanitaria la mattina presto e la sera: esattamente quando il sole non c'è. Rimettere in ordine quei cicli è una delle ottimizzazioni più semplici, ed è una di quelle che si vedono in bolletta.

## Il principio: il bollitore è una batteria termica

Accumulare elettricità costa caro, accumulare calore è quasi gratis. Un bollitore da 200–300 litri portato a temperatura più alta a mezzogiorno tiene l'acqua calda fino al mattino dopo. La strategia è tutta qui: **"sovraccarichi" il bollitore nella finestra di surplus fotovoltaico e fuori da quella finestra ti limiti al mantenimento.** In pratica un setpoint di 46–48 °C per gran parte della giornata, alzato a 55–60 °C nelle ore di produzione (per esempio tra le 11 e le 15). La doccia della sera va a sole immagazzinato.

## Tre livelli di implementazione

**Livello 1: il programma integrato.** Ogni pompa di calore ha programmi orari: imposta un target più alto per l'acqua sanitaria in una finestra fissa nelle ore centrali. Non costa nulla e funziona da oggi. Il limite è evidente: la finestra è rigida, la produzione no.

**Livello 2: ingresso smart grid.** Quasi tutte le pompe di calore degli ultimi dieci anni hanno un contatto in stile SG Ready: chiuderlo forza una modalità di boost. Collegalo a un relè comandato dalla tua domotica e la pompa inizia a rispondere a un segnale "c'è surplus".

**Livello 3: controllo guidato dalla previsione.** È il vantaggio rispetto a una logica basata solo sul contatore: una previsione sa *in anticipo* se oggi esiste una finestra di surplus e in quali ore cade. In una giornata coperta la pompa non resta ad aspettare il sole che non arriva, ma scalda nell'ora più economica, tipicamente di notte in fascia F3. In Home Assistant servono due pezzi: un sensore di previsione (Volcast espone l'energia prevista per oggi e per domani più un indicatore dell'ora di picco, tramite HACS; richiede Premium) e un'automazione condizionale.

## Riscaldamento degli ambienti: qui vai più cauto

L'inverno è la stagione scomoda: la pompa chiede il massimo proprio quando il tetto dà il minimo. La previsione aiuta comunque. Nelle giornate invernali di sole puoi alzare di 1–1,5 °C il setpoint ambiente nelle ore centrali e "parcheggiare" calore nel massetto e nelle pareti. Quanto bene funziona dipende dall'inerzia termica dell'edificio: in una casa ben isolata con riscaldamento a pavimento, sorprendentemente bene.

C'è però una differenza italiana che vale la pena mettere in conto: in buona parte del Paese, e in modo netto al Centro-Sud, la stagione di riscaldamento è corta e i mesi davvero critici sono pochi. Il grosso del lavoro della pompa, e il grosso del guadagno di sincronizzazione, sta altrove.

## Il caso italiano: d'estate il tema è il fresco

Per molte case italiane la pompa di calore lavora più ore in raffrescamento che in riscaldamento, e vale lo stesso ragionamento anche se hai semplici climatizzatori split. La buona notizia è che qui i due picchi coincidono quasi perfettamente: il caldo chiede condizionamento nelle stesse ore in cui l'impianto produce di più.

Tre mosse concrete:

- **Pre-raffresca nelle ore di produzione.** Abbassa di 1–1,5 °C tra le 12 e le 16, quando il surplus c'è, invece di partire da zero alle 19 quando la casa è già calda e il tetto non produce più.
- **Sfrutta l'inerzia della casa.** Tapparelle e schermature chiuse nelle ore più calde fanno durare il fresco accumulato molto più a lungo; senza di quelle stai raffrescando la strada.
- **Evita l'accensione in fascia serale.** Un climatizzatore che parte alle 19–20 lavora quasi interamente su energia prelevata dalla rete, spesso in fascia F2. Anticiparlo di qualche ora sposta lo stesso comfort sull'autoconsumo.

Anche uno split senza domotica si può gestire: quasi tutti hanno un timer settimanale, e in Home Assistant si comandano via integrazione nativa o con un telecomando a infrarossi collegato alla stessa automazione che legge la previsione.

## Cose a cui stare attenti

**Legionella:** se abbassi la temperatura di base dell'acqua sanitaria, mantieni il ciclo settimanale di sanificazione (60 °C o più). **Cicli troppo brevi:** non far accendere e spegnere la pompa attorno alla soglia di surplus; una finestra lunga vale più di dieci partenze corte. **COP:** scaldare l'acqua a 60 °C fa scendere il rendimento; con energia di surplus il conto torna lo stesso, ma non superare il fabbisogno reale.

## FAQ

**Funziona con qualsiasi pompa di calore?**
Con i programmi orari, con tutte. Con l'ingresso smart grid, con la maggior parte dei modelli degli ultimi dieci anni circa. Con l'automazione completa su previsione, con tutto ciò che riesci a raggiungere da Home Assistant: integrazione nativa, Modbus, oppure il comando della resistenza elettrica di backup.

**Quanto si risparmia?**
Dipende dal profilo di consumo di acqua calda: spostare 3–5 kWh al giorno dalla rete al surplus è, per tutta la stagione produttiva, un risparmio mensile a due cifre.

**E in una casa senza fotovoltaico?**
Lo stesso meccanismo funziona sulle fasce orarie e sulle offerte a prezzo indicizzato: invece della finestra di surplus punti alle ore più economiche, che in bolletta sono quelle di fascia F3, cioè notti, domeniche e festivi.
