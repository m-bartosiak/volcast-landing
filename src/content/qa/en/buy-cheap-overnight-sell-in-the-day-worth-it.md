---
title: "Is it worth buying cheap power overnight and selling in the day?"
description: "Import-export arbitrage only pays when the spread beats round-trip losses plus battery wear. The honest arithmetic, and why it is a bonus, not a business."
lang: en
draft: false
category: "k4"
guide: "home-battery-charge-grid-or-solar"
translationKey: "qa-arbitrage"
seo:
  ogTitle: "Battery arbitrage — buy at night, sell by day. Does it add up?"
---
Sometimes — but the honest arithmetic is stricter than the forum posts suggest. Grid arbitrage pays only when **the price spread beats round-trip losses (10–15%) plus battery wear**, and export prices in most markets sit well below import prices most of the time. Treat it as a seasoning on top of self-consumption, not the main course.

## Why the maths is tighter than it looks

Every stored kWh loses 10–15% to charge-discharge efficiency, so a cheap-window purchase must be resold (or self-consumed) at a price at least that much higher just to break even — before counting cycle wear on a battery with a finite cycle life. The classic profitable pattern is not "buy at night, export at noon" (midday export is usually the day's *worst* price, thanks to everyone's solar) but "buy at night, **skip the evening peak**": self-consuming stored cheap power against a high import price is a far wider spread than any export deal.

Genuine export arbitrage exists at the edges: dynamic export products occasionally spike during evening scarcity (UK Agile Outgoing-style, Amber in Australia), and a battery that exports into those hours can earn well. But those spikes are episodic; a strategy needs them, plus automation fast enough to catch them.

## What to do

1. **Compute your break-even spread**: cheap import price ÷ 0.85 (round trip) plus a few pence/cents for wear. Only spreads above that line earn anything.
2. **Aim the discharge at your own evening peak**, not at export — avoided import is almost always the better "sale".
3. **Coordinate with the solar forecast** — overnight arbitrage and next-day sun compete for the same battery space; the overnight-vs-solar answer gives the decision rule.
4. **Let automation do the catching** — spike-riding only works when Home Assistant or the inverter's own scheduler reacts to prices; if the plan is manual, halve the expected profit before deciding.
