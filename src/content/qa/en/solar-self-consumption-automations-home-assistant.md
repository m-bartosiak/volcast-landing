---
title: "How do I set up solar self-consumption automations in Home Assistant?"
description: "The reliable recipe: production forecast + live power readings + priority list of loads. How to structure automations that do not fight each other."
lang: en
draft: false
category: "k5"
guide: "home-assistant-solar-forecast-comparison"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Self-consumption automations in Home Assistant — the pattern"
---
The pattern that works is **forecast + live measurement + a priority list**: a production forecast decides the day's plan (which loads get solar today), live inverter/meter readings trigger the moment (surplus is flowing now), and a priority order stops devices fighting over the same watts. Automations built on live readings alone chase clouds; forecast alone misses reality. Together they are calm and accurate.

## Why structure beats one-off automations

The naive approach — "if export > 1500 W, start the washing machine" — works until the first cumulus: power dips, automations flap, devices cycle. The robust structure separates three concerns. **Planning** happens in the morning: the forecast says whether today carries enough surplus for water heating, EV top-up, or neither, and sets helper booleans. **Triggering** happens live: a smoothed export sensor (5–10 min average, hysteresis) starts the highest-priority armed load. **Arbitration** is the priority list: cylinder before EV before pool pump, one big consumer at a time.

Home Assistant has all the pieces natively: forecast integrations feed the Energy Dashboard and templates (see the Energy Dashboard answer), utility meters track what each load consumed from solar, and helpers hold the day plan. No custom code — just automations that read the plan.

## What to do

1. **Install a forecast integration** (HACS) and expose per-hour production sensors; verify against a real day before automating.
2. **Create a smoothed surplus sensor** — statistics/filter over grid export, 5–10 minute window, with on/off thresholds far enough apart to prevent flapping.
3. **Write the morning planner** — one automation at ~6 am comparing forecast kWh with each load's need, arming helpers.
4. **Write one trigger automation per load**, gated by its helper and the priority above it — this is what prevents the boiler and wallbox from splitting surplus into two half-fed loads.
5. **Watch a week, then tune thresholds** — the utility-meter cards will show self-consumption climbing; adjust the planner's thresholds, not the live triggers.
