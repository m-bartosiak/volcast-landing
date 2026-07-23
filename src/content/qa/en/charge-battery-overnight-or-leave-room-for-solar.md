---
title: "Should I charge the battery overnight on cheap rates or leave room for solar?"
description: "The right answer changes daily with tomorrow's solar forecast and prices. The decision rule that avoids paying for grid power the sun would have delivered free."
lang: en
draft: true
category: "k3"
guide: "home-battery-charge-grid-or-solar"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Charge the battery at night or wait for the sun?"
---
It depends on one question: **will tomorrow's sun fill the battery anyway?** If the forecast says yes, overnight charging just displaces free solar with paid grid power. If tomorrow looks grey, filling up in the cheap window is pure win. The right answer genuinely changes day by day — which is why a fixed setting is always leaving money on the table.

## Why a fixed strategy loses

Charge every night, and on sunny days the battery greets the morning already full: the day's surplus has nowhere to go and gets exported at a fraction of what the overnight charge cost. Never charge at night, and on grey winter days you buy peak-priced evening power a cheap window could have covered. Each policy is right about half the year and wrong the other half.

The variables are all knowable in advance: tomorrow's production (a per-system forecast), tomorrow's consumption (your own pattern), and the price spread (fixed on TOU tariffs like Octopus Go, published day-ahead on dynamic ones like Agile). The logic is one sentence: charge overnight only the amount the sun will not deliver.

## What to do

1. **Compare the cheap rate with your export rate** — if overnight import costs less than what you earn exporting midday surplus, even a "wasted" overnight charge is nearly free insurance; if not, precision matters.
2. **Check the forecast each evening** — expected kWh vs battery capacity; a 10-second glance covers the manual version.
3. **Set a target, not a toggle** — most hybrid inverters accept "charge to X% by 6 am"; scale X inversely with tomorrow's forecast (grey day → high, sunny → low or zero).
4. **Automate it** — Home Assistant can read a production forecast and set the overnight target automatically; the self-consumption automation answer covers the pattern.
