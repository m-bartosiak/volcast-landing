---
title: "Regolazione volt-watt, o curva P(U): conviene attivarla?"
description: "La volt-watt riduce gradualmente la potenza dell'inverter quando la tensione sale, invece di farlo staccare: quando recupera energia e cosa comporta."
lang: it
draft: false
updated: 2026-08-14
category: "k1"
guide: "previsione-produzione-fotovoltaica"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "Curva volt-watt P(U): che cos'è e quando attivarla"
---
La regolazione volt-watt, detta anche curva P(U), fa sì che l'inverter **riduca gradualmente la potenza quando la tensione di rete sale, invece di disconnettersi di colpo** al superamento del limite. Se il tuo inverter si stacca per sovratensione, attivarla di solito recupera energia: perdere il 20-30% della potenza per qualche minuto è meglio che perderne il 100% per dieci.

## Perché aiuta

Un distacco per sovratensione è tutto o niente: l'inverter va offline, aspetta, si riconnette e spesso si stacca di nuovo pochi minuti dopo. La volt-watt sostituisce quel gradino con una rampa: man mano che la tensione si avvicina al limite, la potenza viene ridotta quanto basta a tenere viva la connessione. La funzione è presente sulla maggior parte degli inverter moderni venduti in Italia, ma viene spesso lasciata disattivata dall'installatore.

Il compromesso, detto onestamente: con la volt-watt rinunci in modo stabile a un po' di energia nelle giornate a tensione alta per non perderne molta di colpo. E maschera il problema di fondo, che sta nella rete e non nel tuo impianto. Per questo funziona meglio insieme alla segnalazione formale al distributore, non al posto di quella.

## Cosa fare

1. **Verifica se l'inverter si stacca davvero:** cerca i codici di sovratensione nel log. Nessun distacco, nessun motivo per cambiare impostazioni.
2. **Chiedi all'installatore di attivare la volt-watt** con parametri conformi alla regola di connessione applicabile al tuo impianto (CEI 0-21). È configurazione lato rete, protetta da password installatore, e metterci mano da soli può mettere in discussione il regolamento di esercizio con il distributore.
3. **Continua a segnalare la sovratensione al distributore:** la volt-watt è un antidolorifico, la cura è sistemare la rete.
4. **Osserva l'effetto nei dati di produzione:** confrontare la produzione con una previsione calcolata sul tuo impianto dice se la limitazione resta di qualche punto percentuale (accettabile) o cresce nel tempo, e allora conviene insistere con il distributore.
