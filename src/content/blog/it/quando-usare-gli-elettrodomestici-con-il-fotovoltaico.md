---
title: "Quando far partire gli elettrodomestici con il fotovoltaico"
description: "A che ora far partire boiler, lavatrice e lavastoviglie per usare il tuo fotovoltaico: una regola semplice, esempi orari, fasce F1-F3 e automazioni."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "appliances"
seo:
  ogTitle: "Elettrodomestici e fotovoltaico: quando accenderli"
---
La risposta breve: **quando il tuo impianto sta producendo più di quanto la casa sta consumando**, di solito in una finestra tra le 10 e le 15, ma le ore esatte dipendono da meteo, stagione e orientamento dei moduli. Questa guida ti mostra come trovare quella finestra per il tuo impianto, invece di tirare a indovinare.

## Perché l'orario conta davvero

L'energia che prelevi dalla rete la paghi al prezzo pieno della bolletta, oneri di rete e imposte comprese. L'energia che immetti ti viene invece riconosciuta solo come componente energia: con il ritiro dedicato del GSE la valorizzazione segue i prezzi zonali orari, con i prezzi minimi garantiti come rete di sicurezza per gli impianti che ne hanno diritto. Il risultato pratico è che un kilowattora consumato direttamente dal tetto vale tipicamente due volte o più lo stesso kilowattora immesso e ricomprato la sera. Vuoi il numero esatto per casa tua? Ti servono due valori: il prezzo in €/kWh che leggi sulla fattura e il valore riconosciuto sull'energia immessa, che trovi sul sito del GSE.

Chi ha ancora attivo lo scambio sul posto su un impianto più vecchio ragiona in modo diverso, perché una parte del valore dell'energia immessa gli torna in compensazione. Per i nuovi impianti quella strada non è più attivabile, e questo ha spostato tutto il peso della convenienza sull'autoconsumo.

Boiler elettrico, lavatrice, lavastoviglie, asciugatrice e wallbox sono i carichi più facilmente spostabili di una casa. Solo una resistenza da 2-3 kW che scalda l'acqua per 1,5-2 ore fa 3-6 kWh al giorno: portarla dalla sera a mezzogiorno si vede in bolletta a fine mese.

C'è poi un vincolo tutto italiano da tenere presente: il contratto domestico più diffuso ha una potenza disponibile di 3 kW. Boiler e lavatrice insieme, magari con il forno acceso, fanno scattare il contatore anche in una giornata di pieno sole, perché nel momento in cui la produzione cala il prelievo copre la differenza. I carichi vanno messi in fila, non in parallelo. La potenza disponibile del tuo contratto è scritta in bolletta.

## Regola n. 1: non conta l'ora, conta il surplus

Il consiglio popolare «accendi tutto tra le 11 e le 14» funziona solo così così, perché:

- **Ad aprile** un impianto da 6 kWp esposto a Sud può avere surplus già dalle 9.
- **A novembre**, in Pianura Padana con la nebbia, lo stesso impianto può non averne affatto, e scaldare l'acqua a mezzogiorno non fa risparmiare nulla.
- **Gli impianti est-ovest** hanno due gobbe di produzione e una finestra di surplus più lunga ma più bassa.
- **Nelle giornate variabili** il picco si sposta di ore, oppure è semplicemente troppo basso per una resistenza da 3 kW.

La domanda giusta è un'altra: *quanto resterà domani dopo il carico di base, e in quali ore?* È esattamente ciò a cui risponde una previsione di produzione oraria.

## Come faccio io a casa (impianto da 5,2 kWp)

Ogni sera, un'occhiata alla previsione per il giorno dopo. Tre scenari:

**Giornata serena, previsione oltre 25 kWh.** Il boiler parte alle 10:30, la lavatrice a mezzogiorno, la lavastoviglie alle 13:30: tutto sta dentro il surplus, e ne resta comunque parecchio da immettere.

**Giornata variabile, 10-15 kWh.** Prendo le due ore più forti dalla previsione oraria (per esempio tra le 12 e le 14) e ci metto dentro solo il boiler. Il bucato aspetta una giornata migliore, oppure va di notte in F3 se hai una tariffa bioraria o indicizzata.

**Giornata coperta, sotto i 6 kWh.** Inutile illudersi: l'acqua calda si fa semplicemente nell'ora più economica della tariffa.

Il punto è che la decisione richiede 30 secondi la sera, invece di stare la mattina alla finestra a interpretare le nuvole. Per questo uso [Volcast](https://volcast.app/it/): l'app mostra la previsione oraria per il mio impianto specifico (orientamento, inclinazione, ombreggiamento), e la notifica serale con la previsione per domani mi salva quando il tempo cambia.

![Curva oraria di produzione fotovoltaica in una giornata serena, con evidenziata la finestra di surplus di mezzogiorno](/img/blog/hourly-surplus-it.webp)

## E le fasce orarie F1, F2 e F3?

Qui sta la differenza principale rispetto a un consiglio generico preso da un blog straniero. In Italia le fasce orarie definite da ARERA sono tre: **F1** dal lunedì al venerdì dalle 8 alle 19, **F2** dal lunedì al venerdì dalle 7 alle 8 e dalle 19 alle 23 più il sabato dalle 7 alle 23, **F3** tutte le altre ore, cioè le notti, le domeniche e i giorni festivi. Se hai un'offerta monoraria paghi lo stesso prezzo in tutte le ore e le fasce non ti riguardano; con un'offerta bioraria o multioraria, invece, cambiano il conto. Controlla in bolletta quale delle due hai.

Il rapporto tra fasce e fotovoltaico è più semplice di quanto sembri, e va letto in due tempi:

- **Nelle ore in cui produci**, le fasce non contano quasi nulla. L'energia autoconsumata non la paghi affatto, quindi vale più del risparmio che otterresti spostando lo stesso carico da F1 a F3. Il sole batte la fascia, sempre.
- **Nelle ore in cui non produci**, comandano le fasce. Giornate coperte, sere d'inverno, carichi che non stanno nella finestra di surplus: lì il posto giusto per lavatrice e lavastoviglie è F3, quindi la notte o la domenica.

Ne segue una conseguenza poco intuitiva: **la domenica è già tutta in F3**. In una domenica coperta spostare il bucato non ti fa risparmiare granché, perché non c'è nessuna fascia cara da evitare. Il sabato pomeriggio, invece, è F3 solo dopo le 23, quindi lì il sole conta ancora.

## Livello successivo: automatizzare invece di ricordarsene

Con Home Assistant tutto questo si gestisce da solo: la previsione entra nel sistema come sensore e un'automazione accende la resistenza tramite una presa intelligente o un contattore quando la produzione prevista per l'ora successiva supera la soglia. Risultato: l'acqua si scalda con il sole senza che tu tocchi nulla, e nelle giornate coperte l'automazione ripiega sulla fascia più economica.

Volcast ha un'integrazione ufficiale per Home Assistant (si installa da HACS in tre clic e richiede Premium): i sensori con energia di oggi, energia di domani, potenza attuale e l'indicatore del picco di produzione compaiono direttamente nell'Energy Dashboard.

Non usi Home Assistant? Le notifiche dell'app più un semplice temporizzatore impostato la sera ti portano quasi allo stesso risultato.

## Tabella riassuntiva

| Apparecchio | Potenza | Quando farlo partire |
|---|---|---|
| Boiler elettrico / resistenza | 2-3 kW | Al centro della finestra di surplus; priorità n. 1, è il carico più grande e più flessibile |
| Lavatrice | 0,5-2 kW | All'inizio della finestra; programma a temperatura più bassa uguale picco di prelievo più basso |
| Lavastoviglie | 1-2 kW | Dopo la lavatrice, sempre dentro la finestra; il programma eco dura di più ma è più piatto |
| Asciugatrice | 1,5-3 kW | Solo nelle giornate con surplus abbondante |
| Ricarica auto elettrica | 1,4-7,4 kW (monofase) | Capitolo a sé: richiede il surplus più grande e un contratto con potenza adeguata |

## FAQ

**L'autoconsumo vale davvero più dell'immissione in rete?**
Quasi sempre sì: l'energia immessa viene riconosciuta a un valore che è una frazione del prezzo che paghi al prelievo. Fai il conto con i tuoi numeri, prezzo in bolletta contro valore riconosciuto dal GSE, e il rapporto lo vedi subito.

**A che ora produce di più un impianto fotovoltaico?**
Gli impianti esposti a Sud tipicamente tra le 11 e le 14 (ora legale); quelli est-ovest hanno due picchi, all'incirca tra le 9 e le 11 e tra le 14 e le 16. Il picco reale della giornata lo dice la previsione oraria: le nuvole possono spostarlo parecchio.

**Ha senso accendere tutto insieme a mezzogiorno?**
Solo se la somma dei carichi sta dentro il surplus. Se boiler più lavatrice più lavastoviglie superano la produzione del momento, la differenza arriva dalla rete a prezzo pieno, e con 3 kW di potenza disponibile rischi anche di far scattare il contatore. Meglio far passare gli apparecchi uno dopo l'altro attraverso la finestra di surplus.
