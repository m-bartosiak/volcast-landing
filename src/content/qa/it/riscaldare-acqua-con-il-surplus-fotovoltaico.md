---
title: "Riscaldare l'acqua con il surplus del fotovoltaico"
description: "Il bollitore è l'accumulo più economico che hai già in casa. Timer, deviatore di surplus o automazione guidata dalla previsione, a confronto."
lang: it
draft: false
updated: 2026-08-14
category: "k5"
guide: "quando-usare-gli-elettrodomestici-con-il-fotovoltaico"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Acqua calda dal surplus fotovoltaico: tre modi"
---
Il bollitore elettrico è **l'accumulo di energia più economico che possiedi già**: 200 litri immagazzinano all'incirca 10 kWh sotto forma di calore. Per portarci dentro il surplus ci sono tre livelli: un semplice timer (gratis, grossolano), un deviatore di surplus (preciso, ma è un acquisto) e un'automazione guidata dalla previsione con un relè smart (precisa *e* predittiva, ed è la strada meno cara se già usi Home Assistant).

## Perché è la prima automazione da costruire

L'acqua calda è un carico grande, completamente spostabile e con accumulo incorporato: a nessuno interessa *quando* l'acqua è stata scaldata, ma solo che sia calda all'ora della doccia. Dirottare nel bollitore energia che altrimenti finirebbe in rete significa moltiplicarne il valore per il rapporto tra il prezzo che paghi in bolletta e il valore molto più basso riconosciuto sull'energia immessa. Succede ogni giorno, per tutta l'estate.

I tre livelli si distinguono per quello che sanno. Il **timer** tira a indovinare ("a mezzogiorno di solito c'è sole") e nelle giornate grigie scalda prelevando dalla rete. Il **deviatore** (tipo Eddi o iBoost, oppure un bollitore in pompa di calore con ingresso SG Ready) misura l'immissione istantanea e modula la resistenza per consumare esattamente il surplus, ma reagisce solo al presente. L'**automazione guidata dalla previsione** aggiunge il futuro: scalda a mezzogiorno quando la previsione promette surplus, ripiega sulla fascia notturna F3 quando domani si annuncia grigio e non scalda mai due volte.

## Cosa fare

1. **Controlla bollitore e resistenza**: qualsiasi resistenza elettrica va bene, i bollitori trifase o in pompa di calore chiedono solo il relè giusto o l'ingresso SG Ready.
2. **Parti oggi con il timer stupido**: fascia centrale in estate, cattura una quota sorprendente del valore a costo zero.
3. **Poi passa alla misura o alla previsione**: un deviatore, oppure un relè smart più un'automazione che confronta il surplus previsto con il fabbisogno del bollitore (lo schema è nella risposta sulle automazioni di autoconsumo).
4. **Aggiungi il ripiego per le giornate grigie**: se la previsione dice che non ci sarà surplus, scalda in F3 anziché a mezzogiorno. Questa singola regola è quasi tutto ciò che un deviatore commerciale non sa fare.
