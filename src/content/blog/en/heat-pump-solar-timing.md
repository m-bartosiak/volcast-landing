---
title: "Heat pump + solar — matching heating to your production"
description: "How to shift heat pump hot-water cycles into your solar production peak — schedules, smart-grid inputs and forecast-driven automation."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "heat-pump"
seo:
  ogTitle: "Heat Pump and Solar — Time Heating to Your Production"
---
A heat pump and solar panels are a natural pair — but only when the pump runs while the roof is producing. Factory schedules heat water in the morning and evening: exactly when there's no solar power. Reshuffling those cycles is one of the simplest optimisations with a visible effect on the bill.

## The principle: your tank is a heat battery

Storing electricity is expensive — storing heat is almost free. A 200–300 litre hot-water tank raised to a higher temperature at midday keeps water warm until morning. The strategy: **"overcharge" the tank during the solar surplus window, only maintain outside it.** In practice: a setpoint of 46–48 °C most of the day, raised to 55–60 °C in the production window (say 11 am–3 pm). The evening shower runs on stored sunshine.

## Three levels of implementation

**Level 1 — the built-in schedule.** Every pump has time programs: set a higher hot-water target in a fixed midday window. Costs nothing, works today. Weakness: the window is rigid, production isn't.

**Level 2 — smart-grid input.** Most pumps made in the last decade have an SG-Ready-style contact: closing it forces a boost mode. Wire it to a relay driven by your home automation, and the pump responds to a "surplus available" signal.

**Level 3 — forecast-driven control.** The edge over meter-only logic: a forecast knows *in advance* whether today has a surplus window at all, and when. On an overcast day the pump doesn't wait pointlessly for sun — it heats in the cheapest tariff hour instead. In Home Assistant this is one forecast sensor (Volcast exposes "energy today/tomorrow" and a peak-production indicator via HACS; requires Premium) plus one conditional automation.

## Space heating — tread more carefully than hot water

Winter is the awkward season: the pump needs the most when the roof gives the least. The forecast still helps: on sunny winter days, raise the room setpoint by 1–1.5 °C at midday and "park" heat in the slab and walls. How well this works depends on the building's thermal mass — in a well-insulated house with underfloor heating, surprisingly well.

## Watchouts

**Legionella:** if you lower the base hot-water temperature, keep the weekly sanitising cycle (60 °C+). **Short-cycling:** don't make the pump start-stop around the surplus threshold — one long window beats ten bursts. **COP:** heating water to 60 °C lowers efficiency; with "free" surplus power the maths still works, but don't overshoot actual demand.

## FAQ

**Does this work with any heat pump?**
Via schedules: all of them. Via smart-grid input: most models from the last ~decade. Via full forecast automation: anything you can reach from Home Assistant (natively, via Modbus, or by switching an immersion backup element).

**How much does it save?**
Depending on your hot-water profile: shifting 3–5 kWh a day from tariff to surplus is typically a solid double-digit monthly saving through the production season.

**What about homes without solar?**
The same mechanism works with a dynamic tariff: instead of the surplus window you target the cheapest wholesale hours — known the evening before.
