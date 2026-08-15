---
title: "Qual è la potenza reale del mio impianto fotovoltaico?"
description: "I kWp sono la somma dei watt di targa dei moduli, non i kW dell'inverter. Come trovare il dato giusto e riconoscere una potenza inserita male."
lang: it
draft: true
category: "k2"
guide: "i-tre-numeri-del-tuo-impianto-fotovoltaico"
translationKey: "qa-real-kwp"
seo:
  ogTitle: "kWp o kW dell'inverter: quale potenza inserire"
---
I kWp del tuo impianto sono **la somma dei watt di targa dei moduli, e nient'altro**. Dodici pannelli da 510 W ciascuno fanno un generatore da 6,12 kWp, anche se l'inverter appeso al muro dichiara 5 kW, anche se il preventivo dell'installatore ha arrotondato a «6 kW» e anche se l'app fornita con l'inverter mostra un numero diverso. I moduli si misurano in watt di picco (Wp) in corrente continua, l'inverter in watt di uscita in corrente alternata. Rispondono a due domande diverse.

## Perché i due numeri sono diversi apposta

Un inverter più piccolo del generatore è buona progettazione, non una svista. Un rapporto DC/AC tra 1,1 e 1,3 è la prassi: i moduli raggiungono la potenza di targa solo in condizioni di laboratorio, quindi dimensionare l'inverter sul picco reale invece che su quello teorico costa quasi nulla in energia persa e fa risparmiare sull'hardware. L'impianto andrà in clipping per una manciata di ore all'anno, intorno a mezzogiorno d'estate: è il compromesso che il progettista ha scelto consapevolmente.

Proprio per questo la taglia dell'inverter è il numero sbagliato da inserire in una previsione. La previsione modella quanta luce raccolgono i moduli, cioè una funzione della superficie e del rendimento delle celle: esattamente ciò che descrivono i kWp. L'inverter entra in gioco dopo, come tetto massimo.

## Dove trovare il dato onesto

L'etichetta è sul retro di ogni modulo, e lo stesso valore compare sulla scheda tecnica lasciata dall'installatore. Moltiplica i watt per il numero di pannelli. Se il tetto ha più falde con orientamenti diversi, fai la somma gruppo per gruppo: la previsione li tratta separatamente, perché una stringa a Est e una a Ovest hanno il picco a ore di distanza.

Due fonti che ti portano fuori strada: l'app dell'inverter, che di solito riporta la sua potenza in alternata, e il numero in copertina del contratto, spesso arrotondato per leggibilità.

## Come si riconosce un kWp sbagliato nei dati

La firma è un **rapporto costante**, ed è questo a distinguerlo dall'errore meteo. Prendi da cinque a dieci giornate limpide, senza nuvole, distribuite su un paio di mesi, e dividi la produzione reale per quella prevista. Gli errori del meteo si disperdono: un giorno sopra, un giorno sotto. Un kWp sbagliato non si disperde: ogni giornata serena cade vicino alla stessa frazione, perché l'errore è un moltiplicatore fisso applicato a ogni ora di ogni giorno.

Se quelle giornate limpide si raccolgono intorno a 0,8, hai inserito circa il 20% di potenza in più di quella che possiedi. Se si raccolgono intorno a 1,2, ne hai inserita troppo poca: è quello che succede quando si scrivono i 5 kW dell'inverter al posto dei 6,12 kWp dei moduli.

## Cosa fare

1. **Conta i pannelli e leggi un'etichetta** — numero di moduli per i watt di targa, separatamente per ogni orientamento del tetto. Sono cinque minuti e sono il dato più prezioso di tutta la configurazione.
2. **Inserisci i watt di picco in continua, non i kW dell'inverter** — se i due valori differiscono del 10-30%, è previsto e corretto.
3. **Verifica il rapporto nelle giornate limpide prima di dare la colpa alla previsione** — uno scarto costante è un errore di configurazione, uno scarto disperso è meteo.
4. **Ricontrolla dopo ogni modifica** — pannelli aggiunti, un modulo sostituito, una seconda falda. Una potenza inserita una volta e mai più rivista invecchia in silenzio.
