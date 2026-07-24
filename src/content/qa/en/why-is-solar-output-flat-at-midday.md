---
title: "Why does my solar output flatten at midday?"
description: "A flat plateau in your midday production curve is inverter clipping or an export limit — usually by design, not a defect. How to tell which one."
lang: en
draft: false
category: "k1"
guide: "solar-production-forecast"
translationKey: "qa-clipping"
seo:
  ogTitle: "Flat-topped solar output at midday — clipping explained"
---
A flat plateau at the top of your production curve means output is being **capped — either by the inverter's rated power (clipping) or by an export limit** set at your connection. Both cut the peak off an otherwise bell-shaped curve, and in most systems both are deliberate design choices rather than faults.

## Why this happens

**Inverter clipping:** if your panels are rated higher than the inverter (say 6.5 kW of panels on a 5 kW inverter), on perfect days the DC side can deliver more than the inverter can convert — so it holds output flat at its maximum. This oversizing is standard practice and usually profitable, because panels rarely reach nameplate output anyway; see the separate answer on undersized inverters.

**Export limits:** many connection agreements cap how much you may feed into the grid — 3.68 kW per phase is a common threshold in the UK (G98), and 5 kW export limits are widespread in Australia. The inverter then throttles to keep the meter reading at the limit, no matter what the panels could do.

The two look similar but behave differently: clipping caps total output at the inverter's rating, while an export limit caps *export* — so running the dishwasher during the plateau lifts total production if it is an export limit, and changes nothing if it is clipping.

## What to do

1. **Compare the plateau height with your inverter's rated AC power** — a match means clipping.
2. **Check your connection agreement for an export cap** — a plateau below inverter rating usually means an export limit.
3. **Move consumption into the plateau hours** — with an export limit, every kWh you use at midday is a kWh the cap would otherwise have thrown away. Hot water, laundry, EV charging.
4. **Compare actual output with a forecast for your system** — a good forecast models the clipped curve, so a plateau *below* the expected one flags a real problem (shading, string fault) rather than design.
