---
title: "Perché un impianto nuovo non ha bisogno di dati storici"
description: "Quasi tutti gli strumenti di previsione chiedono mesi di storico prima di funzionare. Un modello fisico parte dal primo giorno: ecco perché e cosa cambia."
date: 2026-05-26
tags: ["cold-start", "new-installation", "physics-model", "onboarding", "forecasting"]
series: "deep-dives"
seriesOrder: 7
lang: it
draft: false
seo:
  ogTitle: "Nessun dato storico: perché una previsione fisica funziona dal primo giorno"
  keywords: ["previsione fotovoltaico impianto nuovo", "previsione produzione senza dati storici", "cold start previsione fotovoltaica", "modello fisico previsione fotovoltaico"]
relatedPosts: ["previsioni-fotovoltaico-fisica-o-machine-learning", "i-tre-numeri-del-tuo-impianto-fotovoltaico", "modelli-di-trasposizione"]
---

Ti hanno appena montato i pannelli. L'inverter gira, l'app del produttore mostra la produzione in tempo reale e tu vuoi sapere una cosa sola: quanto produrrà l'impianto domani? Riesco a pianificarci sopra i consumi?

Se usi uno strumento di previsione basato sul machine learning, la risposta è: aspetta. Torna tra due o tre mesi, quando avremo abbastanza dati per imparare il comportamento del tuo impianto.

Se usi uno strumento basato sulla fisica come Volcast, la risposta è: subito. Ecco la curva oraria di domani.

Questo vantaggio in partenza (il cosiddetto cold start, cioè l'avvio senza dati raccolti) non è uno slogan di marketing. È una conseguenza diretta di come funzionano i due approcci.

## Perché il machine learning ha bisogno di dati

Un modello di machine learning è, in fondo, un riconoscitore di schemi. Impara la relazione tra gli ingressi (le condizioni meteo) e le uscite (la tua produzione) osservando molti esempi. Senza esempi non ha nulla con cui confrontarsi.

Pensa a che cosa deve imparare per il tuo impianto specifico: quanta potenza produci a cielo sereno nei vari periodi dell'anno (informazione che racchiude orientamento, inclinazione ed eventuali ombreggiamenti fissi); come la temperatura influisce sui tuoi moduli (dipende dal coefficiente di temperatura, dal tipo di montaggio e dalla ventilazione); come la nuvolosità si traduce in calo di produzione (dipende dall'orientamento e dai regimi di nuvolosità tipici della tua zona).

Ognuna di queste cose richiede dati raccolti in condizioni diverse. Per imparare la variazione stagionale servirebbe idealmente un anno intero. Per imparare il comportamento con le nuvole servono decine di giornate coperte. Per caratterizzare gli effetti termici servono giornate calde e giornate fresche con irradianza simile.

In pratica la maggior parte dei modelli statistici diventa "utilizzabile" dopo 2-3 mesi e "buona" dopo 6-12 mesi. Prima di allora o non è disponibile, oppure tira a indovinare in modo ragionato sulla base di impianti simili nella stessa zona, che è a sua volta una forma di approssimazione fisica, solo molto grossolana.

## Perché la fisica non ha bisogno di storico

Un modello fisico non impara il comportamento del tuo impianto osservandolo. Lo *calcola* a partire dai principi primi.

Data l'inclinazione, sa esattamente con quale angolo i raggi solari incontrano i moduli in ogni istante di ogni giorno dell'anno. È geometria, non statistica.

Dato l'orientamento (l'azimut), sa quando i pannelli guardano il sole più in faccia, e quindi che forma prende la curva giornaliera. Pura trigonometria.

Data la potenza di picco, conosce il fattore di scala tra irradianza e potenza elettrica in uscita: un solo numero che riassume rendimento e superficie dei moduli.

Data la posizione, calcola il percorso del sole (astronomia), sceglie il punto di griglia del modello meteo più adatto e applica modelli atmosferici tarati su decenni di misure. Non le tue misure: la fisica dell'atmosfera, quella che vale ovunque sulla Terra.

Il coefficiente di temperatura? I moduli in silicio cristallino stanno quasi tutti tra -0,35% e -0,45% per °C. Usare il valore tipico di -0,4% introduce al massimo un errore dell'1-2% nelle giornate di caldo estremo, cioè meno dell'incertezza della previsione meteo.

Il rendimento dell'inverter? Gli inverter moderni lavorano tra il 96% e il 98% su gran parte del loro campo di potenza. Assumere il 97% è sufficientemente accurato per una previsione.

Le perdite sui cavi? Tipicamente 1-3%, e praticamente costanti. Scalano la produzione in modo uniforme, senza cambiare la forma della curva.

Nessuno di questi valori richiede di osservare il tuo impianto. Sono proprietà fisiche stimabili da conoscenze generali con un'accuratezza più che sufficiente per prevedere.

## Il primo giorno

Ecco che cosa succede quando configuri Volcast il giorno stesso in cui ti hanno acceso l'impianto.

Inserisci tre numeri: inclinazione, orientamento, potenza di picco. La posizione la fornisce il telefono. In pochi secondi il modello esegue la simulazione fisica completa per domani: calcolo della posizione del sole, recupero dei dati del modello meteo, modellazione della radiazione atmosferica, scomposizione dell'irradianza nelle sue componenti, trasposizione di Perez sul piano dei moduli, riduzione di potenza per temperatura e stima della potenza elettrica in uscita.

Vedi una curva oraria per domani: la salita del mattino a partire dall'alba, il picco vicino al mezzogiorno solare (spostato dal tuo orientamento), il calo del pomeriggio e il totale giornaliero stimato.

È una previsione perfetta? No. Si porta dietro tutta l'incertezza della previsione meteo sottostante, soprattutto quella sulla nuvolosità. Ma è fondata sulla fisica: la forma della curva è corretta perché la geometria non mente, l'ampiezza è calibrata sulla tua potenza di picco, gli effetti termici sono modellati con la termodinamica.

Confrontalo con un "aspetta tre mesi". Per chi ha appena acceso l'impianto e muore dalla voglia di capirlo, tre mesi sono un'eternità.

## Quando lo storico serve davvero

Questo non vuol dire che i dati storici siano inutili. Se usi Volcast da sei mesi e noti che la previsione sovrastima sistematicamente dell'8%, quel dato ti sta dicendo qualcosa: forse c'è un ombreggiamento che non hai dichiarato, forse i moduli sono orientati un po' diversamente da come li hai inseriti, forse l'inverter va in clipping (limita la potenza in uscita) prima di quanto il modello supponga.

Il modello fisico fornisce la base. Il confronto con lo storico fornisce la calibrazione. Insieme sono più accurati di ciascuno dei due preso da solo.

Le versioni future di Volcast potranno integrare sempre di più questa autocalibrazione, usando i tuoi dati di produzione reali (se scegli di condividerli) per rifinire i parametri del modello fisico. Ma la parola chiave è "rifinire": la fisica ti porta al 90-95% del risultato già il primo giorno, la calibrazione lucida gli ultimi punti percentuali.

## Che cosa comporta, più in generale

Il vantaggio in partenza non è solo una questione di comodità. Ha conseguenze su tutto l'ecosistema della previsione fotovoltaica.

**Accessibilità.** Una previsione che funziona subito è una previsione che funziona per tutti: per chi ha appena installato, per chi ha cambiato piattaforma di monitoraggio, per chi semplicemente non ha voglia di esportare e caricare file di dati.

**Privacy.** Una previsione fisica non ha bisogno del tuo storico di produzione. I parametri dell'impianto (inclinazione, orientamento, potenza) non sono dati sensibili: si leggono da una foto satellitare del tetto. Ottieni la previsione senza cedere i tuoi profili di consumo.

**Resilienza.** Quando qualcosa cambia, e prima o poi cambia (aggiungi pannelli, cresce un albero, ti sostituiscono l'inverter), un modello fisico si adegua subito con i parametri aggiornati. Un modello statistico deve re-imparare, magari da zero.

**Scalabilità.** Un modello fisico produce una previsione per qualsiasi punto della Terra con tre dati in ingresso. Non serve accumulare dati di addestramento per ogni nuovo impianto, per ogni regione, per ogni paese.

È per questo che Volcast ha scelto l'approccio fisico. Le leggi della termodinamica, dell'ottica e della fisica dei semiconduttori non hanno bisogno di un periodo di addestramento: funzionano dal primo giorno, ovunque, su qualsiasi impianto.

Tre numeri. Nessuno storico. Accurata dalla prima previsione.
