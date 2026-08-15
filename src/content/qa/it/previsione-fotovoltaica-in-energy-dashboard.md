---
title: "Come aggiungo la previsione all'Energy Dashboard?"
description: "L'Energy Dashboard può sovrapporre una previsione al grafico di produzione: come collegarla con un'integrazione HACS e cosa dice la linea tratteggiata."
lang: it
draft: false
category: "k5"
guide: "previsione-fotovoltaica-in-home-assistant-confronto"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "Previsione di produzione nell'Energy Dashboard di Home Assistant"
---
L'Energy Dashboard supporta le previsioni in modo nativo: installa un'integrazione di previsione, poi in **Impostazioni → Dashboard → Energia** modifica la voce della produzione solare e attiva l'opzione di previsione messa a disposizione da quell'integrazione. La linea tratteggiata si sovrappone alla produzione reale e trasforma la dashboard da specchietto retrovisore a piano della giornata.

## Perché la linea tratteggiata conta

Senza previsione l'Energy Dashboard ti racconta solo quello che è già successo. Con la previsione nascono due usi nuovi. Il primo è la **pianificazione**: un'occhiata al mattino ti dice se oggi è giornata da lavatrice e ricarica dell'auto o se è una giornata grigia, e ogni automazione può leggere gli stessi sensori che usa la dashboard. Il secondo è il **controllo di salute dell'impianto**: se la produzione reale segue la previsione il sistema sta bene, se resta sistematicamente sotto è il primo segnale visibile di ombreggiamento, sporco sui moduli o guasto.

Quanto puoi fidarti di entrambi gli usi dipende dalla qualità della previsione. I modelli più semplici stimano soltanto da posizione e geometria dei pannelli; i servizi basati sulla fisica aggiungono l'irraggiamento dei modelli meteo (ensemble NWP) e si calibrano sulla storia reale del tuo impianto, riducendo l'errore al punto che uno scarto del 15% diventa un segnale e non rumore.

## Cosa fare

1. **Installa l'integrazione da HACS**, configura l'impianto (posizione, orientamento, inclinazione, kWp) e verifica che compaiano i nuovi sensori (energia di oggi, energia residua, ora successiva).
2. **Aggiungi la previsione nell'Energy Dashboard**: modifica la sorgente solare e attiva la previsione dell'integrazione; la linea tratteggiata compare sul grafico di produzione entro un'ora.
3. **Controlla per qualche giorno**: una previsione clamorosamente sbagliata con cielo sereno di solito significa inclinazione o azimut inseriti male, e conviene sistemarli prima che un'automazione ci faccia affidamento.
4. **Riusa i sensori oltre la dashboard**: le stesse entità alimentano l'automazione del piano mattutino e l'obiettivo di carica notturna della batteria; la dashboard è solo la punta visibile.
