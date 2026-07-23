---
title: "Which EV charger integrates with Home Assistant?"
description: "Look for local API or OCPP, adjustable current, and no cloud lock-in. The checklist that matters more than any brand list, plus the solar-charging pattern."
lang: en
draft: true
category: "k5"
guide: "ev-charging-from-solar"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "EV chargers that play well with Home Assistant — what to check"
---
More important than any brand name is the checklist: **local control (native API, MQTT or OCPP), adjustable charging current, and no dependence on the vendor's cloud**. A charger meeting those three can follow your solar surplus amp-by-amp from Home Assistant; a cloud-locked one is at the mercy of an app and an internet connection.

## Why local control decides everything

Solar-following means adjusting charge current every minute or two as clouds pass. Cloud APIs add seconds of lag, rate limits and outage risk — tolerable for "start at 2 am", hopeless for surplus tracking. The robust routes are: chargers with **first-class HA integrations and local APIs** (established names in the HA community include Wallbox, go-e, Easee, openWB and Zaptec — verify current integration status before buying), anything speaking **OCPP** (an open standard with a solid HA integration), or the DIY-leaning **EVSE projects** with native MQTT. Smart-tariff households should also check the charger is approved for their tariff's schemes (e.g. Intelligent Octopus in the UK).

Adjustable current is the second gate: surplus charging works by modulating between ~6 A and the maximum, per phase. Chargers that only switch on/off can still do coarse solar charging, but the granularity difference shows directly in your self-consumption ratio.

## What to do

1. **Before buying, search the HA forum for the model + "integration"** — five minutes of reading reveals whether control is local, cloud, or reverse-engineered.
2. **Prefer OCPP support as a future-proof floor** — even if the vendor's cloud sours, the open protocol path remains.
3. **Check dynamic current control in the integration**, not just the spec sheet — some integrations expose readings but not control.
4. **Then build the surplus logic** — the same forecast-plus-priority pattern as other loads (self-consumption answer), with the EV usually behind hot water in priority but ahead of export.
