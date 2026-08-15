---
title: "Previsione fotovoltaica in Home Assistant: quale scegliere"
description: "Forecast.Solar, Solcast o Volcast? Accuratezza, limiti delle API e configurazione della previsione fotovoltaica in Home Assistant, con guida passo passo."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: it
draft: false
translationKey: "ha-comparison"
seo:
  ogTitle: "Previsione fotovoltaica in Home Assistant: il confronto"
---
La previsione di produzione è la base dell'automazione energetica in Home Assistant: senza, la resistenza del boiler, la pompa di calore e il wallbox reagiscono a quello che *è*, non a quello che *arriva*. Le fonti di previsione più diffuse sono tre: Forecast.Solar, Solcast e Volcast. Ecco un confronto onesto, visto che le ho usate tutte e tre prima di costruire la nostra.

## Il confronto rapido

| | Forecast.Solar | Solcast | Volcast |
|---|---|---|---|
| Modello | statistico, semplificato | dati satellitari, di ottimo livello | fisico + calibrazione automatica (filtro di Kalman) |
| Calibrazione sul tuo impianto | nessuna | limitata (tuning) | automatica e continua |
| Piano gratuito | API pubblica con limiti di richieste | account hobbistico con tetto giornaliero stretto | previsione a 2 giorni nell'app |
| Previsione completa + API | piani a pagamento | piani commerciali | Premium 4,49 $/mese |
| Risoluzione | oraria | oraria/30 min | oraria + 5 minuti |
| Configurazione in HA | integrazione inclusa | integrazione della community | integrazione HACS ufficiale |
| Profilo dell'orizzonte | no | no | sì, nel modello |
| App mobile con notifiche | no | no | sì (iOS/Android) |

*Dati a luglio 2026: limiti e prezzi dei vari servizi cambiano, verificali prima di decidere.*

## Forecast.Solar: ottimo punto di partenza, accuratezza con un tetto

Il suo pregio più grande è l'attrito zero: l'integrazione è già dentro Home Assistant, cinque campi da compilare e hai finito. Come punto di partenza è del tutto legittima.

I limiti si vedono con il tempo: il modello è semplificato e non impara mai a conoscere il tuo impianto. Con un ombreggiamento fuori dall'ordinario, una disposizione est-ovest o qualche anno di degrado, lo scarto tra previsione e realtà cresce, e soprattutto è *sistematico*. Un'automazione alimentata da una previsione costantemente ottimista ti scalda l'acqua costantemente con energia prelevata dalla rete.

## Solcast: dati eccellenti, porta gratuita stretta

Sulla qualità dei dati satellitari Solcast gioca in un campionato a parte: serve impianti di taglia industriale e trader di energia. Il problema per chi lo usa in casa è un altro: l'account gratuito ha un tetto giornaliero stretto di chiamate API, che trasforma la pianificazione degli aggiornamenti in un rompicapo, e registrazione e configurazione sono nettamente più tecniche. Una fonte molto valida se rientri nei limiti e non ti serve una calibrazione sul tuo tetto.

## Volcast: fisica più un modello che impara il tuo tetto

Il nostro approccio unisce un modello fisico completo (trasposizione dell'irradianza, correzioni spettrali e di temperatura, profilo dell'orizzonte) alla calibrazione automatica: un filtro di Kalman confronta previsione e produzione reale e aggiusta i parametri del modello. Dopo due o tre settimane la previsione conosce il tuo tetto, ombra del camino alle 15 compresa. Sul mio impianto da 5,2 kWp l'errore sul giorno successivo, nelle giornate serene, scende sotto il 10%.

In Home Assistant ottieni subito: `sensor.volcast_energy_today`, `sensor.volcast_energy_tomorrow`, la potenza in tempo reale, un indicatore del picco di produzione e il collegamento all'Energy Dashboard. In più 288 punti da 5 minuti al giorno tramite API REST, utili per la ricarica da surplus al wallbox. Per correttezza: l'API richiede il Premium (4,49 $/mese), gratis resta la previsione a 2 giorni nell'app.

## Configurare Volcast in HA: 5 passaggi

1. Apri **HACS** → menu ⋮ → *Custom repositories*.
2. Aggiungi `https://github.com/volter-labs/volcast-ha-integration` come integrazione.
3. Clicca *Install* e riavvia Home Assistant.
4. Genera una chiave API nell'app Volcast (Premium), nel formato `vk_...`.
5. *Impostazioni → Dispositivi e servizi → Aggiungi integrazione* → "Volcast" → incolla la chiave. I sensori compaiono in automatico.

![Previsione Volcast direttamente nell'Energy Dashboard di Home Assistant, sovrapposta alla produzione reale di un inverter GoodWe](/img/blog/ha-energy-dashboard-en.webp)

## Quale per chi

**Forecast.Solar**: vuoi *una* previsione in 5 minuti e non ci appendi automazioni che pesano sulla bolletta. **Solcast**: ti servono dati satellitari di primissimo livello e stai dentro i limiti gratuiti. **Volcast**: stai automatizzando soldi veri (acqua calda, pompa di calore, ricarica dell'auto) e vuoi una previsione calibrata sul tuo tetto, più una notifica sul telefono quando domani cambia.

## FAQ

**Posso usare due fonti di previsione in parallelo?**
Sì, è anche un modo diffuso per iniziare: fai girare entrambe contro la produzione reale nell'Energy Dashboard per due settimane e tieni quella che sbaglia meno sul *tuo* impianto.

**Volcast si collega al mio inverter?**
No: la previsione nasce dai dati di irradianza dei modelli meteo (ensemble NWP) e dai parametri del tuo impianto. La produzione reale per la calibrazione la puoi inserire a mano oppure farla leggere in automatico da un sensore di energia di Home Assistant.

**L'integrazione manda dati sulla mia casa?**
Oltre ai parametri dell'impianto, l'integrazione invia solo le letture della tua produzione reale, e soltanto se attivi la calibrazione. Nient'altro, nessun tracciamento.
