---
title: "Quale wallbox si integra con Home Assistant?"
description: "Conta più della marca: controllo locale (API o OCPP), corrente regolabile e nessun vincolo al cloud. La checklist e lo schema per la ricarica da surplus."
lang: it
draft: false
category: "k5"
guide: "ricarica-auto-elettrica-con-il-fotovoltaico"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "Wallbox e Home Assistant: cosa verificare prima di comprare"
---
Più di qualsiasi marca conta la checklist: **controllo locale (API nativa, MQTT o OCPP), corrente di ricarica regolabile e nessuna dipendenza dal cloud del produttore**. Una wallbox che rispetta questi tre punti può seguire il tuo surplus fotovoltaico ampere per ampere da Home Assistant; una wallbox chiusa nel cloud dipende da un'app e da una connessione internet.

## Perché il controllo locale decide tutto

Seguire il sole significa correggere la corrente di ricarica ogni uno o due minuti, mentre passano le nuvole. Le API cloud aggiungono secondi di latenza, limiti di chiamate e rischio di disservizio: accettabile per un "parti alle 2:00", inutilizzabile per inseguire il surplus. Le strade solide sono tre: wallbox con **integrazione HA di prima qualità e API locale** (nella comunità Home Assistant ricorrono Wallbox, go-e, Easee, openWB e Zaptec, ma verifica lo stato dell'integrazione prima di comprare), qualsiasi dispositivo che parli **OCPP** (standard aperto, con un'integrazione HA solida) oppure i progetti EVSE più fai-da-te, con MQTT nativo.

La corrente regolabile è il secondo filtro, e in Italia pesa più che altrove: la ricarica da surplus funziona modulando tra circa 6 A e il massimo per fase, e con una fornitura domestica tipica da 3 kW la finestra di modulazione è stretta. Una wallbox che sa solo accendere e spegnere può fare una ricarica solare grossolana, ma la differenza di granularità si vede direttamente nella tua percentuale di autoconsumo, e si vede ancora di più se il contatore rischia di staccare per sovraccarico.

## Cosa fare

1. **Prima di comprare, cerca nel forum HA il modello più la parola "integration"**: cinque minuti di lettura ti dicono se il controllo è locale, cloud o frutto di reverse engineering.
2. **Preferisci il supporto OCPP come pavimento a prova di futuro**: anche se il cloud del produttore peggiora, resta la strada del protocollo aperto.
3. **Verifica il controllo dinamico della corrente nell'integrazione**, non sulla scheda tecnica: alcune integrazioni espongono le letture ma non i comandi.
4. **Controlla la gestione del carico** rispetto alla potenza disponibile del tuo contatore, soprattutto se in casa girano anche pompa di calore o piano a induzione.
5. **Poi costruisci la logica del surplus**: lo stesso schema previsione più priorità usato per gli altri carichi (vedi la risposta sulle automazioni di autoconsumo), con l'auto di solito dietro all'acqua calda ma davanti all'immissione in rete.
