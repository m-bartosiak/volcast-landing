---
title: "Home battery — when to charge from grid vs solar"
description: "Cheap overnight grid charging vs storing midday sun: when each strategy pays, with worked examples — and where a production forecast fits in."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "battery"
seo:
  ogTitle: "Home Battery — Charge From Grid or Solar? Arbitrage 101"
---
The default battery logic is simple: charge on midday solar surplus, discharge in the evening. Most days, that's all you need. But add a dynamic tariff and a second game appears — price arbitrage: storing cheap grid power and using it in expensive hours. The skill is knowing which game to play on which day. The answer lives in two forecasts: prices (known the day before) and production (forecast).

## Ground rule: sunshine goes first

Your own roof power is "free" — every stored solar kWh saves the full retail price in the evening. So if the forecast says tomorrow's surplus will fill the battery: **don't grid-charge overnight.** Otherwise the battery wakes up full of cheap power and the midday surplus exports for pennies. That's the most common beginner arbitrage mistake.

## When grid charging makes sense

**Scenario 1: overcast tomorrow + expensive evening.** Low solar forecast (the battery won't fill itself) and high evening prices — charge overnight in the price trough exactly as much as the evening ramp needs. Profit = price spread minus round-trip losses (~10–15%).

**Scenario 2: negative or zero midday prices.** On sunny weekends the wholesale price hits zero or below while your own production can't max out the charger — topping up from the grid then costs pennies or even earns them.

**Scenario 3: an announced price spike.** A cold, windless evening with extreme day-ahead prices — enter the evening with a full battery, whatever the charging source.

## The five-step evening algorithm

1. Check tomorrow's hourly prices (published each afternoon).
2. Check tomorrow's production forecast.
3. Forecast surplus ≥ battery capacity → do nothing; the sun handles it.
4. Otherwise: compute the deficit and schedule top-up in the cheapest overnight hours.
5. Always cover the evening peak from the battery, never from the grid.

This takes two minutes a day by hand — and should eventually run itself: exactly this loop of prices, forecast and inverter control is the core job of a home EMS.

## What arbitrage players shouldn't forget

Round-trip losses eat 10–15% of every "turned" kWh — arbitrage pays only from a clear price spread (rule of thumb: 25–30% after losses). Cycles cost battery life, though LiFePO4's several thousand cycles make that cheaper than commonly assumed. And check your charge power: the overnight trough lasts only a few hours, and the planned amount has to fit inside it.

## FAQ

**Is grid-charging a home battery allowed?**
Technically most hybrid systems can; whether it's enabled depends on inverter settings and sometimes your export scheme — check with your installer or supplier.

**What price spread makes arbitrage worthwhile?**
After losses: from roughly 25–30% between the charge and discharge hour. A typical dynamic-tariff day offers considerably more.

**Do I have to do all this manually?**
Today, largely yes (or semi-automatically in Home Assistant). Automating this exact loop is the core of the next product we're building, Volcast EMS.
