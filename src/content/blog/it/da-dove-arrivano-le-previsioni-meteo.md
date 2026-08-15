---
title: "Da dove arrivano le previsioni meteo: i modelli NWP"
description: "La previsione di produzione vale quanto il dato meteo che la alimenta. Come funzionano i modelli numerici e dove sbagliano quando c'è di mezzo il sole."
date: 2026-04-21
tags: ["nwp", "weather-models", "gfs", "ecmwf", "icon", "forecasting"]
series: "deep-dives"
seriesOrder: 2
lang: it
draft: false
seo:
  ogTitle: "I modelli meteo spiegati a chi ha il fotovoltaico: GFS, ECMWF, ICON, COSMO-IT"
  keywords: ["previsione numerica del tempo fotovoltaico", "modelli meteo GFS ECMWF", "risoluzione modelli meteo", "modelli NWP spiegati", "dati meteo per il fotovoltaico"]
---

Ogni previsione di produzione fotovoltaica è, nella sostanza, una previsione meteo con qualche passaggio in più. Puoi avere il modello fotovoltaico più sofisticato del mondo, ma se il dato meteo in ingresso dice "sereno" mentre fuori piove, la previsione di produzione sarà sbagliata.

Da dove arrivano allora i dati meteo? E perché fonti diverse danno risultati diversi?

## La macchina meteo globale

La meteorologia moderna gira sulla **previsione numerica del tempo (NWP, numerical weather prediction)**: simulazioni al computer di enormi dimensioni che modellano l'intera atmosfera con equazioni fisiche. Non sono semplici estrapolazioni delle condizioni attuali. Sono simulazioni fluidodinamiche complete, che risolvono le equazioni di Navier-Stokes per il moto atmosferico insieme alla termodinamica, alla fisica della radiazione e ai processi legati all'umidità.

Tutto comincia con l'**assimilazione dei dati**: miliardi di osservazioni da satelliti, stazioni al suolo, radiosonde (i palloni sonda), aerei, navi e boe oceaniche vengono immesse nel modello per ricostruire lo stato attuale dell'atmosfera. Da lì il modello avanza nel tempo, calcolando minuto per minuto come evolve l'atmosfera.

I principali modelli globali che alimentano le previsioni fotovoltaiche sono:

**GFS (Global Forecast System)**, gestito dal NOAA statunitense. Gratuito e aperto. Risoluzione della griglia: circa 13 km (0,25°). Aggiornamento ogni 6 ore. Previsioni fino a 16 giorni. È il cavallo da lavoro dei dati meteo gratuiti. Le sue uscite utili al fotovoltaico comprendono la nuvolosità totale, la temperatura, la velocità del vento e il flusso di radiazione a onde corte verso il basso (in pratica la GHI al suolo).

**ECMWF (Centro europeo per le previsioni meteorologiche a medio termine)**, considerato da molti il miglior modello globale al mondo. Risoluzione: circa 9 km (0,1°). Aggiornamento ogni 6 ore. Gestisce nettamente meglio le configurazioni meteo europee. I dati ECMWF sono in parte commerciali: la piena risoluzione richiede una licenza a pagamento, mentre prodotti a risoluzione inferiore sono liberamente disponibili.

**ICON (Icosahedral Nonhydrostatic)**, gestito dal DWD, il servizio meteorologico tedesco. Dati aperti dal 2023. Versione globale a circa 13 km, annidamento europeo a circa 6,5 km, annidamento tedesco a circa 2,2 km. È particolarmente valido sull'Europa centrale, e l'annidamento europeo copre anche l'Italia.

## I modelli ad area limitata che coprono l'Italia

Sull'Italia esiste inoltre una famiglia di modelli ad area limitata, cioè girati su un dominio ristretto ma con griglia molto più fitta di quella globale. Sono quelli che hanno qualche possibilità di descrivere l'orografia alpina e appenninica, la nebbia della Pianura Padana e le brezze costiere: fenomeni che un modello globale a 13 km semplicemente non vede.

Il servizio meteorologico dell'Aeronautica Militare, insieme ai servizi regionali (in particolare ARPAE Emilia-Romagna), gestisce da anni la catena **COSMO-IT**, con griglia dell'ordine di un paio di chilometri, oggi in transizione verso **ICON-2I**, la configurazione italiana del modello ICON. Accanto a questi ci sono **MOLOCH** e **BOLAM**, sviluppati dal CNR e utilizzati da diversi servizi regionali: MOLOCH lavora su una griglia poco superiore al chilometro ed è pensato proprio per i fenomeni convettivi, BOLAM su una griglia più larga come modello di inquadramento.

Per il fotovoltaico il vantaggio non è teorico. In una giornata di convezione estiva sull'Appennino, o in una mattinata di nebbia padana in dicembre, la differenza tra un modello globale e un modello ad area limitata è la differenza tra "nuvolosità media 40%" e una previsione che ti dice dove e quando.

## Che cosa produce davvero un modello NWP

Per la previsione fotovoltaica le uscite critiche sono queste:

**Nuvolosità**, di solito fornita come frazione totale di cielo coperto (0-100%) e talvolta suddivisa in nubi alte, medie e basse. È la variabile singola più importante per il fotovoltaico, ed è anche la più difficile da prevedere con precisione.

**Temperatura**, misurata a 2 metri dal suolo, usata per stimare la temperatura di cella e applicare la riduzione di potenza dei moduli con il caldo.

**Velocità e direzione del vento**, che influenzano la temperatura di cella attraverso il raffreddamento convettivo. Una giornata ventosa significa moduli più freddi e rendimento leggermente più alto.

**Radiazione solare al suolo**: alcuni modelli forniscono direttamente l'irradianza globale orizzontale (GHI) o le sue componenti. È la variabile più immediatamente utile, ma viene calcolata dentro il modello usando gli stessi dati di nuvolosità e atmosfera, quindi ne eredita tutte le incertezze.

**Umidità e carico di aerosol**, che modificano la trasparenza dell'atmosfera e il rapporto tra radiazione diretta e diffusa. In Italia questo capitolo comprende anche gli episodi di sabbia sahariana, che possono tagliare sensibilmente la componente diretta.

## Il problema della risoluzione

Quando diciamo che GFS ha "risoluzione 13 km" intendiamo che ogni cella della griglia misura all'incirca 13 km per 13 km. Il modello calcola un unico set di condizioni atmosferiche per tutta quell'area.

Il tuo impianto occupa forse 40 metri quadrati.

Questo scarto di scala ha conseguenze concrete. Un cumulo largo 2 km può ombreggiare i tuoi moduli per venti minuti, ma se si trova dentro una cella di griglia per il resto serena il modello può riportare una nuvolosità del 10% sull'intera cella, che si traduce in una riduzione dolce e mediata dell'irradianza, non nel brusco acceso-spento che sperimentano davvero i tuoi pannelli.

Aumentare la risoluzione aiuta. Un annidamento a 2 km comincia a risolvere le singole celle convettive. Ma anche 2 km restano enormi rispetto al tuo tetto.

È per questo che **tutte le previsioni fotovoltaiche hanno un pavimento di incertezza** che nessuna raffinatezza del modello PV può superare. Il modello meteo semplicemente non vede quello che succede nel punto preciso in cui stanno i tuoi moduli, con il dettaglio con cui lo vivono loro.

## Orizzonte di previsione e decadimento dell'accuratezza

L'accuratezza NWP peggiora con il passare dei giorni, e la velocità del peggioramento cambia a seconda della variabile.

Le previsioni di **temperatura** sono relativamente stabili. Per il giorno successivo di solito rientrano entro 1-2 °C, e anche a tre giorni restano ragionevoli. La temperatura cambia lentamente ed è ben vincolata dalle configurazioni atmosferiche di larga scala.

La **nuvolosità** decade molto più in fretta. La previsione per domani è utile, ma spesso sbaglia i tempi e la copertura. Al terzo giorno le previsioni specifiche di nuvolosità sono inaffidabili: il modello ti sa dire "poco nuvoloso", non se le nubi saranno sopra il tuo tetto alle 14.

L'**irradianza solare** eredita l'incertezza della nuvolosità. Le previsioni del totale giornaliero per l'indomani si collocano mediamente entro il 15-20% di errore. Quelle ora per ora possono sbagliare del 50% o più nelle condizioni di cielo poco nuvoloso.

Questo andamento conta per come usi la previsione. Per domani: pianifica i consumi. A tre giorni: solo pianificazione di massima. A una settimana: al massimo la tendenza generale.

## Cicli di aggiornamento

I modelli globali girano tipicamente ogni 6 ore (00, 06, 12 e 18 UTC). Ogni corsa richiede da una a tre ore di calcolo, quindi quando i dati diventano disponibili sono già vecchi di qualche ora. Una previsione generata dalla corsa delle 00 UTC può essere pubblicata solo verso le 03-04 UTC.

Per il fotovoltaico questo significa che la previsione mattutina per "oggi" si basa su dati atmosferici di diverse ore prima. Le condizioni possono cambiare, soprattutto per le nubi convettive che si sviluppano rapidamente nei pomeriggi di primavera ed estate.

Alcuni modelli ad area limitata girano più spesso (ogni ora o ogni tre ore) e forniscono dati più freschi, ma su un'area geografica più piccola.

## Perché servono più modelli

Nessun modello NWP è il migliore ovunque e sempre. GFS può battere ECMWF su una specifica traiettoria di perturbazione. ICON può azzeccare la nuvolosità sull'arco alpino mentre GFS la manca. L'abilità di un modello varia con la stagione, il regime meteorologico e la zona geografica.

I sistemi di previsione più evoluti usano **ensemble multi-modello**, cioè mescolano le uscite di più modelli NWP per ridurre gli scostamenti sistematici. Alcuni eseguono anche **previsioni d'insieme** all'interno di un singolo modello: perturbano leggermente le condizioni iniziali e ripetono la simulazione più volte per stimare l'incertezza.

Per chi consuma una previsione fotovoltaica la lezione pratica è: non fidarti in modo assoluto di una singola fonte meteo. La previsione migliore usa i dati meteo migliori per la tua zona e per il tuo orizzonte temporale, e possibilmente ammette l'incertezza che si porta dietro dai suoi ingressi.

Capire da dove arrivano i dati meteo non renderà la tua previsione più accurata, ma ti aiuterà a capire perché certi giorni la previsione è perfetta e altri giorni sbaglia. L'anello debole non è il modello fotovoltaico. È l'atmosfera.
