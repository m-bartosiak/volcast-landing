---
title: "Caricare la batteria di notte in F3 o aspettare il sole?"
description: "La risposta cambia ogni giorno con la previsione di domani e con i prezzi: la regola per non pagare in F3 l'energia che il sole porterebbe gratis."
lang: it
draft: false
updated: 2026-08-14
category: "k3"
guide: "batteria-di-accumulo-caricare-da-rete-o-dal-sole"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Caricare l'accumulo di notte o aspettare il sole?"
---
Dipende da una sola domanda: **domani il sole riempirà comunque la batteria?** Se la previsione dice di sì, caricare di notte in fascia F3 sostituisce energia gratuita con energia comprata. Se domani è previsto grigio, riempire nella fascia più economica è puro guadagno. La risposta giusta cambia davvero di giorno in giorno, ed è per questo che un'impostazione fissa lascia sempre soldi sul tavolo.

## Perché una strategia fissa perde

Se carichi ogni notte, nelle giornate di sole la batteria si sveglia già piena: il surplus di mezzogiorno non ha dove andare e finisce in rete, valorizzato a una frazione di quanto ti è costata la ricarica notturna. Se non carichi mai dalla rete, nelle giornate grigie d'inverno paghi a prezzo pieno la sera un'energia che la fascia notturna avrebbe coperto per molto meno. Ogni regola rigida è giusta metà dell'anno e sbagliata l'altra metà.

Le variabili si conoscono tutte in anticipo: la produzione di domani (una previsione calcolata sul tuo impianto), i tuoi consumi di domani (li conosci meglio di chiunque altro) e la differenza di prezzo, fissa per fasce con un contratto bioraria, nota il giorno prima con una tariffa indicizzata al PUN. La logica sta in una frase: di notte carica solo la quota che il sole non porterà.

## Cosa fare

1. **Confronta il prezzo della fascia notturna con il valore dell'energia immessa**: se prelevare in F3 costa poco più di quanto ti viene riconosciuto sull'immissione, anche una ricarica «sprecata» è quasi gratis; se la distanza è ampia, la precisione conta.
2. **Guarda la previsione ogni sera**: kWh attesi domani contro capacità della batteria e consumo previsto. Dieci secondi bastano per la versione manuale.
3. **Imposta un obiettivo, non un interruttore**: quasi tutti gli inverter ibridi accettano «carica fino al X% entro le 6:00», e X si muove al contrario della previsione (giornata grigia, valore alto; giornata di sole, valore basso o zero).
4. **Automatizza**: Home Assistant può leggere una previsione di produzione e impostare da solo l'obiettivo notturno; lo schema è nella risposta sulle automazioni di autoconsumo.
