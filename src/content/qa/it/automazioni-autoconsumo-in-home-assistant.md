---
title: "Automazioni di autoconsumo in Home Assistant: come farle"
description: "La logica corretta: previsione di produzione, misura in tempo reale e lista di priorità dei carichi, per automazioni che non si contendono i watt."
lang: it
draft: false
category: "k5"
guide: "previsione-fotovoltaica-in-home-assistant-confronto"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Automazioni di autoconsumo in Home Assistant: lo schema"
---
Lo schema che funziona è **previsione + misura in tempo reale + lista di priorità**: la previsione di produzione decide il piano della giornata (quali carichi useranno il sole oggi), le letture live dell'inverter o del contatore decidono il momento (il surplus c'è adesso) e un ordine di priorità impedisce ai dispositivi di contendersi gli stessi watt. Le automazioni costruite solo sulle letture istantanee rincorrono le nuvole, quelle costruite solo sulla previsione ignorano la realtà. Insieme sono stabili e precise.

## Perché la struttura conta più della singola automazione

L'approccio ingenuo ("se l'immissione supera 1.500 W, avvia la lavatrice") regge fino al primo cumulo: la potenza cala, le automazioni ballano, i dispositivi si accendono e si spengono in continuazione. La struttura robusta separa tre compiti. La **pianificazione** avviene al mattino: la previsione dice se oggi c'è surplus sufficiente per l'acqua calda, per una ricarica dell'auto o per nessuno dei due, e arma gli helper booleani. L'**attivazione** avviene in tempo reale: un sensore di immissione filtrato (media su 5-10 minuti, con isteresi) fa partire il carico armato con priorità più alta. L'**arbitraggio** è la lista di priorità: prima il boiler, poi l'auto, poi la pompa della piscina, un grande consumatore alla volta.

Home Assistant ha già tutti i pezzi: le integrazioni di previsione alimentano l'Energy Dashboard e i template (vedi la risposta sull'Energy Dashboard), gli utility meter registrano quanto ogni carico ha preso dal sole e gli helper conservano il piano del giorno. Nessun codice su misura, solo automazioni che leggono il piano.

## Cosa fare

1. **Installa un'integrazione di previsione** (via HACS) ed esponi i sensori di produzione ora per ora, poi confrontali con una giornata reale prima di automatizzare qualsiasi cosa.
2. **Crea un sensore di surplus filtrato**: statistics o filter sull'energia immessa in rete, finestra di 5-10 minuti, soglie di accensione e di spegnimento abbastanza distanti da evitare il pendolamento.
3. **Scrivi il pianificatore del mattino**: una sola automazione verso le 6:00 che confronta i kWh previsti con il fabbisogno di ciascun carico e arma gli helper.
4. **Scrivi un'automazione di attivazione per ogni carico**, condizionata dal proprio helper e dalle priorità superiori: è questo che impedisce a boiler e wallbox di dividersi il surplus restando entrambi a metà.
5. **Osserva una settimana, poi tara**: le card degli utility meter mostreranno l'autoconsumo che sale; correggi le soglie del pianificatore, non quelle degli attivatori live.
