---
title: "How do I heat water automatically with solar surplus?"
description: "A hot water cylinder is the cheapest energy storage you already own. Timer, surplus diverter, or forecast-driven automation — compared honestly."
lang: en
draft: true
category: "k5"
guide: "when-to-run-appliances-solar"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Hot water from solar surplus — three ways, from timer to smart"
---
The hot water cylinder is **the cheapest energy store you already own** — 200 litres holds roughly 10 kWh as heat. There are three tiers of getting surplus into it: a simple timer (free, crude), a surplus diverter (precise, hardware cost), and forecast-driven automation via a smart relay (precise *and* predictive, cheapest hardware if you already run Home Assistant).

## Why this is the first automation to build

Water heating is a big, fully shiftable load with built-in storage: nobody cares *when* the water was heated, only that it is hot at shower time. Diverting surplus that would export at a poor rate into the cylinder effectively multiplies that energy's value by your import/export price ratio — typically two- to three-fold, per day, all summer.

The tiers differ in what they know. A **timer** guesses ("11 am is usually sunny") and heats from the grid on grey days. A **diverter** (Eddi/iBoost-class, or PV-ready heat pump cylinders via SG Ready) measures live export and modulates the element to consume exactly the surplus — but reacts only to the present moment. **Forecast-driven automation** adds the future: heat at noon when the forecast promises surplus, fall back to the cheap overnight window when tomorrow looks grey, and never heat twice.

## What to do

1. **Check the cylinder and immersion element** — any electric immersion works; three-phase or heat-pump cylinders just need the right relay or SG Ready input.
2. **Start with the dumb timer today** — midday slot in summer; it captures a surprising share of the value for zero cost.
3. **Upgrade to measurement or forecast** — either a diverter, or a smart relay plus an automation that compares forecast surplus against cylinder needs (the Home Assistant self-consumption answer shows the pattern).
4. **Add the grey-day fallback** — if the forecast says no surplus, heat in the cheap tariff window instead; that single rule is most of what a commercial diverter cannot do.
