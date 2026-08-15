---
title: "La previsione non torna: cinque verifiche, in ordine"
description: "Prima di dare la colpa al modello, escludi le quattro cose che sembrano errore di previsione e non lo sono. Poi una verifica dice se era davvero il meteo."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: it
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "La previsione fotovoltaica non torna? Controlla queste 5 cose"
---
Quando produzione e previsione non tornano, il sospetto ovvio è il modello, e quasi sempre è quello sbagliato. Quattro delle cinque cause più frequenti sono caratteristiche del tuo impianto che alla previsione non sono mai state dette, e lasciano una firma diversa da quella di un vero errore meteo. Affrontale in quest'ordine — prima le più probabili e le meno costose — e il quinto passaggio ti dirà se quello che resta è davvero il cielo.

## 1. La potenza che hai inserito

Si parte da qui perché è la causa singola più frequente e si risolve in cinque minuti. Una previsione modella la luce che i moduli raccolgono, quindi le serve la potenza di picco dei pannelli, non la taglia dell'inverter. Dodici moduli da 510 W sono un impianto da 6,12 kWp anche se al muro è appeso un inverter da 5 kW.

La firma è un **rapporto costante**: ogni giornata serena finisce più o meno alla stessa frazione della previsione, perché una potenza sbagliata è un moltiplicatore fisso su ogni ora. Se le tue giornate serene si addensano intorno a 0,8 o intorno a 1,2, fermati qui e correggi il numero: finché non lo fai, tutto il resto è rumore. Il metodo completo è in [come risalire ai kWp reali del tuo impianto](/blog/it/q/qual-e-la-potenza-reale-del-mio-impianto/).

## 2. Il taglio dell'inverter

Se lo scarto compare solo intorno a mezzogiorno e solo nelle giornate più limpide, e la curva di produzione ha la sommità piatta invece di un picco, non stai guardando un errore di previsione. Stai guardando l'inverter che fa il suo mestiere: un generatore più grande dell'inverter è progettazione ordinaria, e costa una manciata di ore all'anno.

Due risposte lo spiegano nel dettaglio — [perché la produzione si appiattisce a mezzogiorno](/blog/it/q/perche-la-produzione-si-appiattisce-a-mezzogiorno/) e [se un inverter più piccolo dei pannelli sia un errore](/blog/it/q/inverter-sottodimensionato-rispetto-ai-pannelli/). In breve: la sommità piatta è una scelta di progetto, non un guasto, e la previsione può tenerne conto solo se conosce il limite dell'inverter.

## 3. Le ombre che il modello non vede

Una previsione sa dov'è il sole. Non sa del comignolo del vicino, del noce in giardino o dell'abbaino tre metri più a ovest. L'ombreggiamento vicino è invisibile a qualunque modello a cui non sia stato detto esplicitamente che esiste.

Qui la firma cambia rispetto ai primi due casi: l'errore **non è costante, ma si ripete alla stessa ora del giorno**. Il mattino torna, il pomeriggio manca, e succede in tutte le giornate serene della stessa stagione. Prendi cinque giornate limpide e confronta ora per ora invece dei totali giornalieri: è la forma della curva a tradirlo, perché la somma di giornata nasconde esattamente ciò che stai cercando.

La parte scomoda è che quella forma si sposta nel corso dell'anno, perché cambia l'altezza del sole. Un'ombra che a giugno non ti costa nulla può mangiarsi tutto il pomeriggio a ottobre.

## 4. Sporco, neve e tutto ciò che si accumula lentamente

Lo sporcamento ha la firma più riconoscibile di tutte: **una deriva lenta e in una sola direzione**. Non una brutta giornata, non una brutta settimana, ma un rapporto che ad aprile era 1,0 e a luglio è 0,92, senza un singolo episodio a cui dare la colpa. Polline, polvere dopo settimane asciutte, sabbia sahariana, salsedine vicino al mare, escrementi di uccelli su una stringa sola.

La neve è l'opposto: totale, evidente e si risolve da sé. Vale la pena citarla solo perché un generatore coperto in parte può produrre così poco da far pensare a un guasto.

La verifica è semplice. Annota ogni mese la tua migliore giornata di cielo sereno. Quella curva di riferimento personale rende visibile la deriva come nessun confronto giorno-per-giorno riuscirà mai a fare, e negli anni intercetta anche il degrado vero dei moduli.

## 5. E adesso: era il meteo?

Se i quattro punti precedenti sono esclusi, puoi finalmente porre la domanda nel modo giusto. La risposta onesta è che con le nuvole le previsioni peggiorano davvero.

Misurato sui dati di produzione dei nostri utenti: nelle giornate di cielo sereno l'errore mediano è intorno al **10%**, in quelle completamente coperte si avvicina al **18%**. Nelle giornate molto nuvolose circa il **28%** dei giorni sbaglia di più del **30%** in un verso o nell'altro, contro il **8%** delle giornate serene. Il dato che conta davvero, però, è un altro: lo scostamento mediano resta vicino a zero in tutte le classi di nuvolosità. Con le nuvole la previsione non sovrastima né sottostima in modo sistematico, diventa solo più rumorosa.

È questa distinzione il senso dell'intero passaggio. **La dispersione è meteo. Uno scarto costante è configurazione.** Se i tuoi errori sono grandi ma cadono da entrambe le parti su molti giorni, hai trovato la risposta e non c'è nulla da sistemare. Se pendono sempre dallo stesso lato, torna al punto 1.

Due note sul confronto con i numeri pubblicati dai fornitori. Gran parte delle dichiarazioni di accuratezza del settore misura l'irradianza, oppure la produzione aggregata di un intero parco impianti: entrambe molto più facili da prevedere dei kilowattora giornalieri di un singolo tetto. E una giornata isolata non dimostra nulla in nessuna direzione: servono settimane di giornate prima che una media voglia dire qualcosa.

## Cosa fare

1. **Sistema prima la potenza.** Numero di moduli per i watt di targa, separatamente per ogni orientamento. Finché questo dato non è giusto, non vale la pena misurare altro.
2. **Separa le giornate serene da quelle nuvolose** prima di calcolare qualunque media. Mescolarle produce un numero che non descrive né le une né le altre.
3. **Confronta ora per ora quando il totale giornaliero sembra a posto.** Ombre e taglio dell'inverter si nascondono entrambi dentro una somma di giornata dall'aria corretta.
4. **Segna ogni mese la tua migliore giornata serena.** È lo strumento più economico che hai per accorgerti di una deriva lenta.
5. **Giudica sulle settimane, non sui giorni.** E se vuoi il quadro più ampio, parti da [come verificare se il fotovoltaico funziona bene](/blog/it/q/come-verificare-se-il-fotovoltaico-funziona-bene/) e [perché i pannelli non raggiungono la potenza nominale](/blog/it/q/perche-i-pannelli-non-raggiungono-la-potenza-nominale/).
