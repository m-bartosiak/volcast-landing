---
title: "Quanto è accurata davvero una previsione fotovoltaica?"
description: "Misurato su 10.331 giorni di produzione reale: l'errore mediano giornaliero, quanto pesano le nuvole e come calcolare il numero onesto per il tuo tetto."
date: 2026-09-22
author: "Michał Bartosiak"
tags: []
lang: it
draft: true
translationKey: "forecast-accuracy"
seo:
  ogTitle: "Quanto è accurata la previsione di produzione fotovoltaica?"
---
La risposta breve, per un singolo tetto e misurata sui dati di produzione dei nostri utenti: **l'errore mediano giornaliero è intorno all'10% con cielo sereno e intorno al 18% con cielo completamente coperto**. È un numero al giorno, che mette a confronto la previsione di quella giornata con i kilowattora che l'inverter ha davvero prodotto — non l'irradianza, non la media di un parco impianti, non il caso migliore.

Quasi nessuna delle percentuali di accuratezza che si leggono in giro misura la stessa cosa, e il motivo conta più dei numeri.

## Che cosa fa l'errore man mano che arrivano le nuvole

![Errore mediano giornaliero della previsione per classe di nuvolosità, prima e dopo la calibrazione, misurato su 10.331 giorni](/img/blog/forecast-error-by-cloud-it.webp)

La coorte è di 137 impianti con almeno 20 giorni di dati e almeno cinque giornate serene. Altri quindici sono rimasti fuori perché il rapporto tra previsione e produzione nelle giornate serene cadeva fuori dall'intervallo 0,75–1,33: è la firma di una potenza inserita male, non di un errore di previsione. Tenerli dentro portava la quota di giornate serene sbagliate di oltre il 30% dall'8% al 14%.

Da questo grafico si leggono due cose, e la seconda non la pubblica quasi nessuno.

La prima è che l'errore cresce con la nuvolosità in modo regolare: **9,7%** nella classe di cielo più limpido, **18,2%** in quella più coperta. Nessun salto, nessuna sorpresa — solo una pendenza costante, perché la nuvolosità variabile è davvero la cosa più difficile da prevedere in tutto questo problema.

La seconda è che **lo scostamento mediano — il bias — resta fra 0,96 e 1,01 in ogni singola classe di nuvolosità**. L'errore è la dimensione dello sbaglio; lo scostamento è la sua direzione. Un modello che con le nuvole sovrastimasse in modo sistematico mostrerebbe un rapporto che scivola ben sotto 1, e qui non succede. Quindi, quando la previsione sbaglia in una giornata coperta, è più o meno altrettanto probabile che sia stata troppo alta quanto troppo bassa. Con il brutto tempo la previsione non diventa pessimista: diventa più rumorosa.

La distinzione non è accademica, è pratica. L'errore casuale si compensa nell'arco di una settimana, ed è per questo che la pianificazione settimanale regge anche quando la singola giornata no. L'errore sistematico non si compensa mai, ed è quello che vale la pena inseguire.

## Perché confrontare questo dato con i numeri dei fornitori è quasi sempre una trappola

Nel settore girano dichiarazioni di accuratezza nell'intervallo **5-15%**. Gran parte di quelle misura qualcosa di più facile del tuo tetto.

Prevedere l'irradianza è più facile che prevedere la produzione, perché ci si ferma prima della parte disordinata: l'inclinazione dei tuoi moduli, il punto di taglio del tuo inverter, le tue ombre, il coefficiente di temperatura. Gli aggregati di flotta sono più facili dei singoli impianti, perché gli errori di cento tetti si annullano a vicenda — è semplicemente il modo in cui funziona una media, e abbellisce il numero parecchio. E un'accuratezza dichiarata solo sulle giornate di cielo sereno è un'affermazione ancora diversa.

Il nostro è la versione difficile della misura: un tetto, un giorno, kilowattora reali. Quando confronti, l'unica domanda che vale la pena fare è che cosa esattamente sia stato misurato.

## La parte che puoi verificare da solo

Niente di tutto questo vale molto se non puoi controllarlo, quindi ecco il metodo — è lo stesso che usiamo internamente.

1. **Prendi almeno quattro settimane di giornate.** Con meno stai misurando il meteo, non l'accuratezza. Una singola giornata storta non dimostra nulla, in nessuna delle due direzioni.
2. **Per ogni giornata calcola |previsione − reale| ÷ reale.** È l'errore percentuale assoluto giornaliero. Di quei valori prendi la **mediana**, non la media: altrimenti un solo giorno di temporale domina l'intero risultato.
3. **Separa le giornate serene da quelle nuvolose** prima di mediare qualsiasi cosa. Mescolarle produce un numero che non descrive né le une né le altre, ed è l'errore più comune in assoluto in questo tipo di confronti.
4. **Controlla la direzione a parte.** Calcola la media di previsione ÷ reale sulle tue giornate serene. Un valore vicino a **1,0** significa che la taglia dell'impianto è inserita correttamente. Un valore stabilmente intorno a **0,8** o a **1,2** significa che non lo è, e nessun modello previsionale te lo sistemerà.

Il punto 4 è da dove arriva la maggior parte dei risultati deludenti. Uno scarto costante è un problema di configurazione travestito da problema di previsione, e conviene escluderlo prima di giudicare qualunque altra cosa.

## Che cosa aspettarsi dalla calibrazione

Le barre indaco del grafico sono il modello fisico grezzo; quelle verdi sono il risultato dopo che il ciclo di calibrazione ha osservato il tuo tetto per un paio di settimane. Il divario è coerente — grosso modo due o tre punti in ogni classe di nuvolosità, cioè un effetto più grande della differenza fra due fornitori di previsioni in concorrenza.

È anche il motivo per cui un'accuratezza dichiarata al primo giorno vuol dire poco. Un modello che non ha mai visto il tuo impianto lavora sulla potenza, l'inclinazione e l'orientamento che hai dichiarato tu, e quelli sono l'approssimazione di un tetto vero, con sopra un comignolo vero.

## Il riassunto onesto

Per un singolo tetto, sui kilowattora giornalieri, su tutto l'arco delle condizioni meteo: **la giornata mediana cade entro l'10-18% circa a seconda della nuvolosità**, senza inclinazioni sistematiche in nessuna direzione, e circa il **8%** delle giornate serene e il **28%** di quelle molto coperte sbagliano di più del **30%**.

È abbastanza per programmare una lavatrice, una ricarica dell'auto o un ciclo della pompa di calore dentro la finestra di produzione di domani. Non è abbastanza per fare trading di energia sul numero di una singola giornata, e chiunque ti dica il contrario, a proposito di qualsiasi previsione, ti sta vendendo qualcosa.
