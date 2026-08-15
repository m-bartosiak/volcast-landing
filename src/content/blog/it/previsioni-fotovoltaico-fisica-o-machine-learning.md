---
title: "Previsioni fotovoltaiche: modello fisico o machine learning"
description: "Due approcci opposti per prevedere la produzione: uno simula la fisica, l'altro impara dai dati. Perché la differenza conta per la tua previsione."
date: 2026-04-14
tags: ["physics-model", "machine-learning", "forecasting", "methodology"]
series: "deep-dives"
seriesOrder: 1
lang: it
draft: false
seo:
  ogTitle: "Modello fisico o machine learning nelle previsioni fotovoltaiche: quale è più accurato?"
  keywords: ["previsione fotovoltaica modello fisico", "machine learning previsione fotovoltaico", "confronto previsioni fotovoltaiche", "metodi previsione produzione PV"]
---

Se cerchi "previsione produzione fotovoltaica" trovi decine di app e servizi. Promettono tutti previsioni accurate. Ma sotto il cofano usano approcci profondamente diversi, e l'approccio determina quando la previsione funziona, quando fallisce e che cosa pretende da te.

I due schieramenti sono la **modellazione basata sulla fisica** e il **machine learning (ML)**. Non sono due strumenti diversi per lo stesso lavoro: impostano il problema in modo differente.

## L'approccio ML: imparare dalla storia

Una previsione basata su machine learning funziona così: dai in pasto al modello mesi di dati storici di produzione del tuo impianto, insieme ai dati meteo corrispondenti. Il modello individua correlazioni statistiche del tipo "quando la temperatura era X, la nuvolosità Y e il vento Z, questo impianto ha prodotto W watt".

Più dati gli fornisci, meglio impara le particolarità del tuo impianto: gli ombreggiamenti specifici, il comportamento dell'inverter, l'effetto dello sporco, le perdite sui cavi. Con abbastanza storia riesce a catturare implicitamente effetti che sarebbe difficile modellare in modo esplicito.

Sembra potente, e lo è, con due riserve non da poco.

**Prima riserva: il problema dell'avvio a freddo.** Un impianto nuovo non ha storia. Il modello non può imparare quello che non ha mai visto. Alla maggior parte delle previsioni ML servono 2-6 mesi di dati prima di diventare affidabili. E in quel periodo, che è probabilmente quello in cui la previsione ti servirebbe di più perché stai ancora capendo come si comporta l'impianto, non ottieni nulla di utile.

**Seconda riserva: il cambiamento delle condizioni.** I modelli ML presuppongono che il futuro somigli al passato. Quando le condizioni cambiano in modi che il modello non ha mai visto, l'estrapolazione va male. Una nevicata anomala di primavera, una settimana invernale insolitamente limpida, un edificio nuovo che ti fa ombra nel pomeriggio: sono esattamente i momenti in cui vorresti una previsione accurata, ed esattamente quelli in cui il ML è meno attrezzato per dartela.

## L'approccio fisico: partire dai principi primi

Una previsione basata sulla fisica lavora in modo diverso. Invece di imparare correlazioni statistiche, simula il processo fisico che trasforma la luce del sole in elettricità.

La catena è questa: si parte dalla posizione del sole (calcolata con l'astronomia), si modella il passaggio della radiazione solare attraverso l'atmosfera (diffusione, assorbimento, attenuazione delle nubi), si scompone il risultato nelle componenti diretta e diffusa, si trasportano queste componenti sul piano inclinato dei tuoi moduli, si calcola la temperatura di cella e si applica la conversione fotovoltaica con la riduzione di potenza dovuta alla temperatura.

Ogni passaggio usa equazioni fisiche consolidate. Il modello di trasposizione di Perez o quello di Hay-Davies. La trasmissione atmosferica di Beer-Lambert. Il modello a singolo diodo della cella fotovoltaica. Non sono ipotesi né approssimazioni improvvisate: sono le stesse equazioni che i progettisti usano per dimensionare i parchi fotovoltaici.

Al modello servono solo tre dati da parte tua: inclinazione, azimut e potenza nominale. Uniti alla tua posizione (per il percorso del sole) e a una previsione meteo (per le condizioni atmosferiche), bastano a calcolare la produzione attesa da zero.

## Dove brilla ciascun approccio

**Il ML è migliore quando:**

hai anni di dati di produzione puliti e condizioni stabili. Il modello ha già visto ogni configurazione meteo tipica della tua zona. Nulla è cambiato nell'impianto. In questo scenario il ML riesce a catturare implicitamente micro-effetti (l'ombra parziale alle 15 di dicembre, il clipping dell'inverter nei picchi) che un modello fisico dovrebbe conoscere per configurazione esplicita.

Il ML eccelle anche nella previsione a brevissimo termine (da minuti a poche ore) quando può usare la produzione in tempo reale come ingresso. Se i tuoi moduli stanno producendo 3,2 kW e il cielo è sereno, un modello ML estrapola bene l'ora successiva senza avere bisogno di capire il perché.

**La fisica è migliore quando:**

hai un impianto nuovo. Hai cambiato qualcosa (moduli aggiunti, un'ombra nuova). Le condizioni sono anomale. Ti serve una previsione in una località o in un clima che il modello non ha mai visto. Vuoi la forma della curva ora per ora, non solo il totale giornaliero. Non hai voglia di consegnare mesi di dati di produzione a terzi.

I modelli fisici sono anche più trasparenti. Quando la previsione sbaglia puoi diagnosticare il perché: era sbagliata la previsione meteo? Era impreciso il modello termico? Era sbagliata la scomposizione dell'irradianza? Con il ML l'errore è opaco: il modello ha sbagliato perché ha sbagliato.

## La possibilità ibrida

L'approccio più solido combina i due. Usi la fisica come fondamenta, perché fornisce la comprensione strutturale di come la luce diventa elettricità. Poi usi il ML per calibrare: se il modello fisico sovrastima sistematicamente del 5% sul tuo impianto, un sottile strato di apprendimento può imparare quella correzione.

Così ottieni il vantaggio dell'avvio immediato tipico della fisica (funziona dal primo giorno) insieme alla capacità del ML di adattarsi agli effetti specifici del singolo impianto.

Volcast parte dalla fisica. Fin dalla prima previsione il modello esegue l'intera catena di simulazione fisica. Non ha bisogno di vedere che cosa hanno fatto i tuoi moduli il mese scorso per prevedere che cosa faranno domani. Le leggi della fisica non hanno un periodo di addestramento.

## La questione dell'accuratezza

La domanda ricorrente è: "quale dei due è più accurato?". La risposta onesta è che dipende dall'orizzonte di previsione e da che cosa intendi per accuratezza.

Per le **previsioni per il giorno successivo** entrambi gli approcci sono limitati soprattutto dall'incertezza della previsione meteo, non dal modello fotovoltaico. Che tu usi la fisica o il ML, se il meteo dice "sereno" e poi piove, la previsione di produzione sarà sbagliata. L'approccio di modellazione conta meno della qualità del dato meteo in ingresso.

Per la **forma della curva ora per ora** tende a vincere la fisica. Modella correttamente la salita mattutina, il picco di mezzogiorno solare e il calo serale partendo dalla geometria. Il ML può imparare questa forma, ma deve vedere abbastanza giorni per coprire la variazione stagionale.

Per la **stima di producibilità a lungo termine** la fisica è più robusta, perché non si adatta troppo alle particolarità meteo di un singolo periodo.

Per il **nowcasting** (previsione a brevissimo termine, dai 15 ai 60 minuti) tende a vincere il ML con dati in tempo reale, perché reagisce alle condizioni attuali più in fretta di un modello fisico che gira su aggiornamenti meteo ogni sei ore.

La vera domanda quindi non è "quale è più accurato" ma "quale mi dà una previsione utile con quello che ho adesso". Se hai anni di dati e un impianto stabile, il ML può essere eccellente. Se parti da zero o vuoi trasparenza, la fisica è la fondazione giusta.

## Perché ti riguarda

Da proprietario di impianto, l'approccio usato dal tuo strumento di previsione ti tocca in modi concreti.

Con uno strumento basato sulla fisica hai una previsione funzionante dal primo giorno. Non devi aspettare. Non devi esportare dati dal portale dell'inverter. Non devi affidare a terzi il tuo storico di produzione.

E ottieni una previsione su cui puoi ragionare. Se la previsione dice 25 kWh per domani e ne raccogli 18, puoi verificare: il meteo era diverso da quello previsto? C'era un'ombra inattesa? Il modello fisico ti dà una struttura per capire da dove viene la differenza.

È il tipo di previsione che offre Volcast, e nei prossimi post entriamo nel dettaglio di ogni passaggio della catena di simulazione fisica.
