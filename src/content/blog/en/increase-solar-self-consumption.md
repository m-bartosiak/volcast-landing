---
title: "Increase solar self-consumption — 7 proven ways to use more of your own power"
description: "Exported solar earns cents; self-consumed solar saves full retail. Seven proven ways to use more of your own power — from timing to automation."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "self-consumption"
seo:
  ogTitle: "Increase Solar Self-Consumption — 7 Proven Ways"
---
The economics are the same almost everywhere now: exported solar earns a few cents per kilowatt-hour, while grid power costs several times that. Every kWh you consume directly instead of exporting is worth two to four exported ones. A typical household with no strategy self-consumes 20–30% of its production. The seven steps below realistically get you to 40–60% — and higher with a battery.

## 1. Shift the big loads into production hours

Water heating, washing machine, dishwasher and dryer add up to 8–10 kWh a day of freely movable load. Just changing the habit from "appliances in the evening" to "appliances at midday" can lift self-consumption by 10–15 percentage points. The detailed hour-by-hour playbook is in [When to run your appliances on solar →](/blog/en/when-to-run-appliances-solar).

## 2. Plan by forecast, not by clock

"Run things at noon" fails on cloudy days and off-season. An hourly [production forecast](/blog/en/solar-production-forecast) tells you whether tomorrow has a surplus at all and in which hours — a 30-second decision each evening instead of morning guesswork.

## 3. Heat water with electricity

An immersion element in the hot-water tank is the cheapest "battery" there is: midday surplus becomes evening hot water. Entry cost is a heater plus a smart plug or contactor, and it soaks up 3–6 kWh daily.

## 4. Automate — let the house watch the surplus

Home Assistant + a forecast sensor + smart plugs: the heater switches on when predicted production clears a threshold and falls back to the cheap tariff window on overcast days. Configured once, it runs itself. Volcast's official HACS integration (requires Premium) exposes "energy today/tomorrow" and live power for exactly this.

## 5. Charge the EV on surplus

If you drive electric, the car is the biggest single load in the house — 20–60 kWh per session. Even partial surplus charging moves the needle more than all the appliances combined.

## 6. Retime the heat pump

Raise the hot-water setpoint during production hours and let the pump "overcharge" the tank on sunshine — the evening runs on stored heat. Many pumps support SG-Ready inputs or schedules that pair naturally with a forecast.

## 7. Consider a battery — but measure first

Storage lifts self-consumption the most (to 70–80%), but it's also the biggest investment. Before buying, spend 2–3 months measuring how much energy you export during hours you later buy back — that's the capacity you actually need, not the one on the sales flyer.

## Where to start

The order that maximises effect per euro: habits (1–2) → immersion heater (3) → automation (4) → EV/heat pump (5–6) → battery (7). The first four steps require no major investment — only knowing what you'll produce tomorrow.

## FAQ

**What counts as "good" self-consumption?**
No strategy: 20–30%. With load shifting and water heating: 40–60%. With a battery: 70%+. Each percentage point is real money.

**Should I burn power just to avoid exporting?**
No — self-consumption only makes sense for energy you'd use anyway (hot water, laundry, charging). Artificial consumption is waste, not savings.

**How do I measure my self-consumption?**
From inverter or meter data: (production − export) / production. Home Assistant's Energy Dashboard shows it directly.
