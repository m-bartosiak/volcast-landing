---
title: "Previsione della produzione fotovoltaica: i kWh di domani"
description: "Quanto produrrà il tuo impianto domani? Modello fisico, dati dei modelli meteo e calibrazione: come funziona una previsione di produzione accurata."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "forecast-hub"
seo:
  ogTitle: "Previsione produzione fotovoltaica: i kWh di domani"
---
Quanto produrrà il tuo impianto domani? La maggior parte di chi ha il fotovoltaico risponde "dipende dal meteo" e si ferma lì. In realtà, dopo la calibrazione, la produzione si può prevedere con un'accuratezza intorno all'85% nelle giornate serene, ora per ora. Basta unire i dati di irradianza dei modelli meteo (ensemble NWP) a un modello fisico del tuo impianto specifico: orientamento, inclinazione, potenza e ombreggiamento.

In questo articolo ti spiego come funziona una previsione di produzione professionale, perché una normale app meteo non basta e come usare la previsione in pratica, così consumi la tua energia quando c'è invece di immetterla in rete a una frazione del suo valore.

## Perché l'app meteo non basta

"Domani sereno" non dice quasi nulla sulla produzione. Tra il bollettino meteo e i kilowattora che escono dal tuo tetto ci sono diversi strati di fisica.

**L'irradianza non è la nuvolosità.** Le app meteo mostrano la copertura nuvolosa in percentuale, ma i moduli rispondono all'irradianza, cioè alla potenza della radiazione solare che arriva su una superficie, misurata in W/m². Un velo sottile di cirri e una coltre bassa e compatta di strati possono valere entrambi "60% di nuvolosità" e differire nella produzione di un fattore due.

**La geometria del tuo tetto.** La stessa irradianza dà un risultato diverso su una falda a Sud inclinata di 35° e su un impianto est-ovest a 15°. Aggiungi la configurazione delle stringhe, i moduli bifacciali e, il fattore più spesso ignorato, il profilo dell'orizzonte: il camino, l'albero del vicino o la collina dietro cui il sole sparisce alle 16.

**La temperatura lavora contro di te.** I moduli perdono rendimento man mano che sale la temperatura di cella (tipicamente circa 0,3-0,4% per ogni grado sopra i 25 °C). È per questo che i record di produzione arrivano più spesso in una giornata serena e fresca di primavera che in pieno luglio.

Una buona previsione di produzione deve quindi percorrere tutta la catena: **dati di irradianza dai modelli meteo (ensemble NWP) → modello della posizione del sole → geometria e parametri del tuo impianto → correzioni di temperatura e spettrali → kWh per ogni ora**.

## Come funziona una previsione basata sulla fisica

I sistemi moderni di previsione fotovoltaica, dagli strumenti per i grandi impianti alle app per chi produce in casa, seguono lo stesso schema:

1. **Dati in ingresso:** previsioni di irradianza (GHI, DNI, DHI) da un ensemble di modelli meteo, più i modelli numerici che forniscono temperatura e vento.
2. **Modello di trasposizione:** conversione dell'irradianza dal piano orizzontale al piano dei tuoi moduli, per la posizione del sole in ogni ora della giornata.
3. **Modello dell'impianto:** potenza di picco, rendimento dell'inverter, perdite di sistema, ombreggiamento in funzione dell'ora e della stagione.
4. **Risultato:** la curva di produzione, oggi, domani e nei giorni successivi.

Un modello così, "di serie", è già discreto. Ma ogni impianto ha le sue particolarità: perdite leggermente diverse, ombreggiamento sottostimato, moduli che invecchiano al proprio ritmo. Qui entra in gioco il secondo pezzo.

## Calibrazione: una previsione che impara il tuo tetto

L'approccio più efficace è confrontare la previsione con la produzione reale e correggere il modello in modo sistematico. In Volcast lo facciamo con un filtro di Kalman, un algoritmo noto dalla navigazione satellitare che a ogni nuova misura aggiorna i parametri del modello esattamente quanto quella misura è affidabile.

In pratica: registri la produzione giornaliera reale e dopo due o tre settimane il modello "sa" cose sul tuo impianto che nessuna scheda tecnica contiene, cioè l'effetto reale dell'ombreggiamento autunnale, le perdite effettive dell'inverter, il degrado dei moduli. Sul mio impianto da 5,2 kWp la previsione per il giorno successivo, dopo la calibrazione, sbaglia meno del 10% nelle giornate serene.

![Previsione e produzione reale a confronto su 14 giorni, impianto da 5,2 kWp: con la calibrazione di Kalman l'errore scende sotto il 10%](/img/blog/forecast-vs-actual-14d-en.webp)

## A cosa ti serve davvero una previsione di produzione

**Pianificare i consumi.** Un kilowattora consumato in casa vale quanto lo paghi in bolletta; lo stesso kilowattora immesso in rete, con il ritiro dedicato, viene valorizzato a prezzi di mercato molto più bassi. Se sai che domani il surplus arriva tra le 11 e le 14, è in quella finestra che devono partire lo scaldabagno, la lavatrice, la lavastoviglie e la ricarica dell'auto elettrica. Qui i dettagli: [Quando far partire gli elettrodomestici con il fotovoltaico →](/blog/it/quando-usare-gli-elettrodomestici-con-il-fotovoltaico).

**Automatizzare la casa.** La previsione può entrare in Home Assistant e comandare i dispositivi in automatico: la resistenza del boiler parte solo se è previsto surplus, la pompa di calore sposta i cicli di acqua calda dentro il picco di produzione.

**Tenere d'occhio la salute dell'impianto.** Se la produzione reale si scosta in modo sistematico dalla previsione calibrata, qualcosa non va: moduli sporchi, un albero cresciuto, una stringa che sta cedendo. La previsione è il riferimento che l'app dell'inverter, che mostra solo il passato, non ti dà mai.

## Parti in 5 minuti

1. Installa un'app con previsione basata sulla fisica: [Volcast](https://volcast.app/it/) si usa gratis per iniziare (previsione a 2 giorni) e funziona con **qualsiasi** impianto, senza login all'inverter, senza chiavi API, senza collegamento cloud al tuo hardware.
2. Inserisci i parametri: orientamento, inclinazione, potenza e, se vuoi, disposizione delle stringhe e profilo dell'orizzonte.
3. Dal primo giorno hai una previsione oraria; registrando la produzione reale attivi la calibrazione automatica, che settimana dopo settimana adatta il modello al tuo tetto.

## FAQ

**Quanto può essere accurata una previsione di produzione fotovoltaica?**
Dopo la calibrazione, tipicamente intorno all'85% nelle giornate serene. Le più difficili sono le giornate con cumuli in rapido movimento: lì anche i modelli migliori disperdono di più, ma il totale giornaliero resta di solito affidabile.

**Serve l'accesso all'inverter per prevedere la produzione?**
No. La previsione si costruisce sui dati dei modelli meteo (ensemble NWP) e sui parametri del tuo impianto. L'accesso all'inverter serve solo a registrare in automatico la produzione reale per la calibrazione: inserirla a mano una volta al giorno funziona altrettanto bene.

**Che differenza c'è tra previsione di irradianza e previsione di produzione?**
La previsione di irradianza dice quanta energia solare arriverà. La previsione di produzione la fa passare attraverso la geometria e i parametri del tuo impianto specifico e restituisce i kilowattora che escono dal tuo tetto.

**La previsione funziona anche d'inverno?**
Sì. D'inverno prevalgono le giornate coperte, con errore relativo più alto, ma è proprio allora che la previsione vale di più: ti segnala le poche giornate serene su cui conviene spostare i consumi.
