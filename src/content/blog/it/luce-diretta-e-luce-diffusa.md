---
title: "Luce diretta e diffusa: perché produci col cielo coperto"
description: "Non tutta la radiazione solare è uguale. Capire le tre componenti della radiazione spiega perché i pannelli producono anche nelle giornate coperte."
date: 2026-03-31
tags: ["irradiance", "diffuse-radiation", "direct-beam", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 3
lang: it
draft: false
seo:
  ogTitle: "Luce diretta e luce diffusa: perché i pannelli producono anche con il cielo coperto"
  keywords: ["radiazione diretta e diffusa", "pannelli fotovoltaici cielo coperto", "irradianza diffusa", "GHI DNI DHI spiegati"]
---

Una delle domande più frequenti di chi ha appena messo il fotovoltaico sul tetto è: "i miei pannelli producono qualcosa quando è nuvolo?". La risposta è sì, e a volte molto più di quanto ti aspetti. Per capire perché devi sapere che la luce che arriva sul tuo tetto non è una cosa sola. Sono tre.

## Le tre componenti della radiazione solare

Ogni watt di energia solare che colpisce il tuo modulo ci arriva lungo uno di tre percorsi.

### Irradianza diretta normale (DNI)

È la luce che viaggia in linea retta dal sole al tuo pannello senza essere diffusa né assorbita. In una giornata limpida è la componente dominante: la luce che proietta ombre nette, scalda le superfici e ti costringe a socchiudere gli occhi.

Una precisazione sul nome, perché in italiano "normale" trae in inganno: qui non significa "ordinaria", ma "perpendicolare ai raggi". La DNI si misura su una superficie messa esattamente di fronte al sole.

La DNI è fortemente direzionale. Dipende in modo netto dall'angolo tra il tuo modulo e il sole. I pannelli puntati direttamente verso il sole ricevono il massimo della DNI; quelli inclinati di traverso ne ricevono proporzionalmente meno, secondo la legge del coseno.

In una giornata perfettamente limpida, a mezzogiorno solare e alle latitudini italiane, la DNI può superare gli 800-900 W/m² su una superficie perpendicolare ai raggi.

### Irradianza diffusa orizzontale (DHI)

È la luce solare che è stata diffusa dall'atmosfera: dalle molecole d'aria (scattering di Rayleigh), dagli aerosol (polveri, inquinamento) e soprattutto dalle nuvole. Invece di arrivare da una sola direzione, la luce diffusa arriva da tutta la volta celeste.

Con cielo sereno la DHI è relativamente modesta, dell'ordine di 80-150 W/m². Ma in una giornata coperta diventa l'**unica** sorgente di irradianza, e può comunque valere 100-300 W/m² a seconda dello spessore e del tipo di nubi.

È per questo che i tuoi pannelli producono anche quando il cielo è chiuso. Anche quando le nubi bloccano ogni traccia di luce diretta, il cielo continua a diffondere luce verso il basso da tutte le direzioni.

### Irradianza riflessa dal suolo

La terza componente è la luce che rimbalza sul terreno o sulle superfici circostanti prima di colpire il modulo. È più piccola delle altre due, ma non trascurabile, soprattutto se i pannelli sono inclinati (intercettano più luce riflessa) e se il suolo è molto riflettente.

La neve fresca riflette il 60-80% della luce incidente. L'erba verde circa il 20%. Terreno scuro o asfalto: il 10-15%. Sulle Alpi e sull'Appennino, con manto nevoso al suolo, la componente riflessa può dare un contributo tutt'altro che marginale alla produzione invernale.

La riflettività del suolo si chiama **albedo**, e in un post successivo vedremo quanto pesa a seconda di dove ti trovi.

## GHI: il numero che di solito vedi

Quasi tutte le stazioni meteo e le fonti di dati solari pubblicano l'**irradianza globale orizzontale (GHI)**, cioè la potenza solare totale che cade su una superficie piana orizzontale. La GHI è semplicemente:

**GHI = DNI × cos(angolo zenitale) + DHI**

È la grandezza standard, ma non è quella che riceve il tuo pannello inclinato. Per passare dalla GHI all'irradianza sul tuo piano serve un **modello di trasposizione**: un passaggio matematico che separa le componenti e le ricombina per l'orientamento dei tuoi moduli. Ne parliamo in un post dedicato.

## Come il rapporto tra le componenti cambia tutto

La ripartizione tra radiazione diretta e diffusa varia moltissimo con le condizioni del cielo, ed è qui che la previsione diventa interessante.

**Cielo sereno:** 70-85% diretta, 15-30% diffusa. L'orientamento dei moduli pesa moltissimo.

**Poco nuvoloso:** 30-60% diretta, 40-70% diffusa. Oscillazioni violente al passaggio delle nubi: puoi vedere la potenza variare del 50% nel giro di qualche minuto.

**Cielo coperto:** 0-10% diretta, 90-100% diffusa. L'inclinazione conta molto meno, perché la luce arriva da ogni direzione. Un modulo in piano e uno a 35° ricevono quantità simili.

**Nubi alte e sottili (cirri):** 50-70% diretta, 30-50% diffusa. Funzionano come un filtro naturale: abbassano dolcemente la DNI e alzano la DHI.

Da qui una conseguenza pratica: nei climi con molte giornate coperte (pensa alla Pianura Padana a novembre) l'inclinazione ottimale reale è un po' più bassa di quella che suggerirebbe un calcolo fatto a cielo sereno, perché quello che stai raccogliendo è soprattutto luce diffusa.

## La sorpresa delle giornate nuvolose

In alcune giornate poco nuvolose puoi vedere la potenza istantanea salire *sopra* il valore a cielo sereno. Si chiama **cloud enhancement**, cioè esaltazione da nube: la luce riflessa dai bordi delle nuvole si somma alla radiazione diretta e crea per pochi istanti livelli di irradianza superiori a quelli possibili con cielo perfettamente limpido.

È un fenomeno reale e ben documentato in letteratura. L'inverter può segnalare per qualche minuto una potenza superiore a quella nominale dei moduli. Non è un errore di misura: è la fisica che per una volta gioca a tuo favore.

## Perché tutto questo conta per la previsione

Un modello che prevede solo "quanta luce totale" senza scomporla in componente diretta e diffusa commette errori sistematici:

**Sovrastima** la produzione nelle giornate coperte per i moduli molto inclinati, che perdono buona parte della luce diffusa proveniente dalla porzione opposta di cielo.

**Sottostima** la produzione nelle giornate coperte per i moduli più piatti, che raccolgono la luce diffusa in modo efficiente da tutta la volta celeste.

E manca completamente la **volatilità del poco nuvoloso**, quella che produce le oscillazioni rapide di potenza.

Volcast affronta il problema modellando ogni componente separatamente. La previsione meteo fornisce nuvolosità e dati atmosferici; il motore fisico scompone il tutto in DNI e DHI; il modello di trasposizione porta questi valori sul tuo piano inclinato; il modello fotovoltaico calcola la potenza elettrica che ne risulta.

È più complicato di una tabella di conversione, ma è il modo in cui la fisica funziona davvero. Ed è il motivo per cui la previsione resta attendibile sia che la giornata sia serena, sia che sia coperta, sia che sia un caotico misto delle due.
