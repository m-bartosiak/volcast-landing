---
title: "Il viaggio della luce: dallo spazio al tuo pannello"
description: "Segui un raggio di sole dal limite dell'atmosfera fra diffusione, assorbimento, nuvole e riflessi, fino al tuo modulo inclinato dove diventa elettricità."
date: 2026-05-05
tags: ["irradiance", "atmospheric-physics", "solar-spectrum", "pv-physics", "forecasting"]
series: "deep-dives"
seriesOrder: 4
lang: it
draft: false
seo:
  ogTitle: "Dallo spazio al pannello fotovoltaico: il viaggio completo dell'irraggiamento"
  keywords: ["irradianza solare atmosfera", "come la luce arriva ai pannelli", "attenuazione atmosferica solare", "modellazione irraggiamento"]
relatedPosts: ["luce-diretta-e-luce-diffusa", "perche-le-nuvole-sono-la-variabile-piu-difficile", "modelli-di-trasposizione"]
---

Un fotone lascia la superficie del Sole viaggiando a 300.000 km/s. Otto minuti e venti secondi più tardi entra nell'atmosfera terrestre. Quello che succede da lì in poi, negli ultimi cento chilometri di un viaggio da 150 milioni di chilometri, decide se diventerà elettricità sul tuo tetto o calore sull'asfalto.

Ecco la catena completa che una previsione basata sulla fisica deve modellare.

## Passo 1: irradianza extraterrestre

Sopra l'atmosfera la radiazione solare è notevolmente prevedibile. La **costante solare**, cioè la potenza per metro quadrato su una superficie perpendicolare ai raggi solari alla distanza media della Terra, vale circa 1.361 W/m².

Questo valore varia leggermente (circa il 3,4%) per via dell'orbita ellittica terrestre. Siamo più vicini al Sole all'inizio di gennaio (perielio) e più lontani all'inizio di luglio (afelio). Per quanto sembri controintuitivo, l'emisfero nord riceve d'inverno un po' più di irradianza extraterrestre che d'estate. L'effetto è piccolo, ma un modello fisico ne tiene conto.

Anche l'emissione solare oscilla con il ciclo undecennale delle macchie solari, ma di meno dello 0,1%: trascurabile per la previsione fotovoltaica.

## Passo 2: massa d'aria e lunghezza del percorso

La luce entra nell'atmosfera con un angolo determinato dall'altezza del sole. Quando il sole è allo zenit (angolo zenitale pari a 0°) la luce percorre il tragitto più breve possibile nell'atmosfera, definito come massa d'aria 1 (AM1).

Man mano che il sole scende verso l'orizzonte il percorso si allunga. A 60° di angolo zenitale la luce attraversa il doppio di atmosfera (AM2). Al tramonto la massa d'aria può superare il valore 30.

Più atmosfera significa più attenuazione. È per questo che i tuoi moduli producono molto meno alle 7 del mattino che a mezzogiorno, anche quando sono orientati a est: quella luce è stata filtrata da molta più aria. Ed è anche il motivo per cui le prestazioni dei moduli sono dichiarate ad AM1.5 (sole a circa 48° di altezza), un compromesso standardizzato tra condizioni allo zenit e condizioni all'orizzonte.

## Passo 3: diffusione di Rayleigh

Le molecole dell'aria (azoto, ossigeno) diffondono la luce solare. Le lunghezze d'onda più corte (blu, violetto) vengono diffuse più di quelle lunghe (rosso). È il motivo per cui il cielo è azzurro: stai guardando luce a corta lunghezza d'onda diffusa da tutte le direzioni.

Per il fotovoltaico la diffusione di Rayleigh sposta una parte della radiazione diretta nella componente diffusa del cielo. L'effetto si calcola dalla pressione atmosferica e dall'angolo solare con equazioni ben note: riduce l'irradianza diretta di circa il 10-15% a cielo sereno e reindirizza quell'energia nella componente diffusa.

## Passo 4: assorbimento e diffusione da aerosol

Gli aerosol (polveri, particolato da inquinamento, sale marino, fumo, pollini) diffondono e assorbono la luce solare molto più delle molecole d'aria pulita. A differenza della diffusione di Rayleigh, l'effetto degli aerosol dipende fortemente dalle condizioni locali ed è più difficile da prevedere.

In aria marina pulita lo spessore ottico degli aerosol (AOD) può valere 0,05, praticamente impercettibile. In una città continentale inquinata durante un episodio di smog l'AOD può arrivare a 0,5-1,0, riducendo l'irradianza diretta del 30-50%.

In Italia i valori tipici di AOD vanno da circa 0,1 (aria invernale pulita, tipicamente in quota) a 0,3 e oltre nella Pianura Padana e nelle foschie estive. Gli episodi di sabbia sahariana risalgono regolarmente verso la penisola, soprattutto su Sicilia, Sud e Centro, e per qualche giorno fanno salire l'AOD in modo sensibile.

I modelli NWP includono previsioni di aerosol, ma sono più grossolane delle variabili meteorologiche. La maggior parte delle previsioni fotovoltaiche usa dati climatologici di aerosol (medie mensili) invece di previsioni in tempo reale.

## Passo 5: assorbimento di ozono e gas

L'ozono nella stratosfera assorbe la radiazione ultravioletta: conta molto per la biologia, meno per il fotovoltaico, perché quasi tutti i fotoni UV hanno comunque più energia del bandgap del silicio (l'eccesso diventa calore per termalizzazione).

Il vapore acqueo nella troposfera assorbe specifiche lunghezze d'onda infrarosse, creando bande di assorbimento che riducono l'irradianza totale. L'effetto dipende dal contenuto di acqua precipitabile, che varia con l'umidità ed è compreso negli output dei modelli NWP.

CO₂, metano e altri gas serra hanno effetti di assorbimento minori a lunghezze d'onda specifiche. Sono sostanzialmente costanti e già incorporati nei modelli atmosferici standard.

## Passo 6: attenuazione da nuvole

Le nuvole sono il principale fattore di modifica dell'irradianza al suolo, e alla loro complessità abbiamo dedicato un post a parte. Nella catena dell'irraggiamento le nuvole agiscono sia da assorbitori sia da diffusori: riducono drasticamente la radiazione diretta convertendone una parte in radiazione diffusa.

La fisica è complessa: lo spessore ottico di una nuvola dipende dal contenuto di acqua liquida, dalla distribuzione dimensionale delle gocce e dall'estensione verticale. Un cirro sottile può avere spessore ottico di 0,5-2 e lasciar passare quasi tutta la luce. Un cumulonembo spesso può superare il valore 100 e bloccare praticamente tutta la radiazione diretta.

Un modello fisico ha bisogno delle proprietà ottiche delle nuvole a partire dalla previsione meteo. La maggior parte dei modelli NWP fornisce la frazione di copertura nuvolosa totale e alcuni forniscono il contenuto d'acqua, da cui si può stimare lo spessore ottico.

## Passo 7: arrivo al suolo, la GHI

Dopo essere sopravvissuta all'atmosfera, la radiazione solare arriva al suolo come **irradianza globale orizzontale (GHI)**, cioè la potenza solare totale su una superficie piana orizzontale. È la somma della componente diretta (proiettata sull'orizzontale) e della radiazione diffusa dal cielo.

In una giornata serena d'estate alle latitudini italiane la GHI di picco raggiunge circa 900-1.000 W/m². In una giornata coperta può stare tra 100 e 300 W/m². Sono questi i valori che misurano le stazioni meteo e che prevedono i modelli NWP.

Ma la GHI non è ciò che ricevono i tuoi moduli, perché i tuoi moduli non sono orizzontali. Convertire la GHI nell'irradianza sulla tua superficie inclinata richiede un passaggio in più.

## Passo 8: trasposizione sul tuo piano inclinato

Quest'ultimo passo, che il prossimo post tratta in dettaglio, prende le componenti orizzontali dell'irradianza (diretta e diffusa) e calcola che cosa arriva sul tuo specifico orientamento. Tiene conto dell'angolo di incidenza per la radiazione diretta, del fattore di vista del cielo per la diffusa e della radiazione riflessa dal suolo in base all'albedo.

La trasposizione è il punto in cui inclinazione e orientamento che hai inserito pesano di più. Un modulo esposto a Sud con 30° di inclinazione a Roma riceve un profilo di irradianza molto diverso da un modulo esposto a ovest con 20° di inclinazione, anche se stanno sotto lo stesso cielo.

## La catena completa

Mettendo tutto in fila: irradianza extraterrestre, attenuazione per massa d'aria, diffusione di Rayleigh, effetti degli aerosol, assorbimento dei gas, attenuazione da nuvole, GHI al suolo, trasposizione sul piano inclinato, correzione per temperatura di cella, uscita elettrica.

Ogni passo è governato dalla fisica. Ogni passo introduce un po' di incertezza. L'effetto cumulativo è una previsione che cattura il comportamento di fondo del sistema, ereditando però i limiti della previsione meteo, soprattutto sulla nuvolosità.

È questo che Volcast calcola per ogni ora di ogni previsione. Non una tabella di riferimento. Non una regressione statistica. La catena fisica vera, calcolata dai tuoi tre parametri di ingresso e dai migliori dati meteo disponibili.
