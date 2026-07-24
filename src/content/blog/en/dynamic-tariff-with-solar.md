---
title: "Dynamic electricity tariffs with solar — is it worth it?"
description: "Hourly prices, export rates and storage: who wins on a dynamic tariff with solar — with a real day-in-the-life example from a prosumer household."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: false
translationKey: "dynamic-tariff"
seo:
  ogTitle: "Dynamic Electricity Tariff With Solar — Is It Worth It?"
---
On a dynamic tariff you pay the hourly wholesale price plus network charges and the supplier's margin — Tibber and Octopus in Europe, Amber in Australia, and a growing list elsewhere. Prices swing severalfold within a day: sunny middays are dirt cheap or negative, winter evenings expensive. For the average consumer it's a lottery; for a solar owner with flexible loads or a battery, it's a tool. I write this as someone who has lived on a dynamic tariff for years.

## How it works in practice

Billing follows day-ahead market prices — and those are **published the afternoon before**. That's the underrated core of the model: every evening you can plan the entire next day. Cheap hours are typically overnight and sunny middays; expensive ones are the morning and evening ramps (7–9 am, 6–9 pm).

## Who comes out ahead

**It pays if at least one is true:** you have solar (your own production covers the middays anyway), you can shift big loads (water heating, laundry, EV), you have a battery (arbitrage: charge cheap, discharge dear), or you heat with a buffered heat pump.

**It doesn't pay if:** your consumption sits immovably in the price peaks, you value a predictable bill above optimisation, or even a minute of daily planning annoys you.

## A real day on a dynamic tariff

Sunny day: overnight, whatever must be ready by morning charges in the cheap trough; through the day the house lives off its own production, with hot water, dishwasher and EV in the production peak; during the expensive evening ramp almost nothing runs, because everything important already did. Overcast day: the plan inverts — the big loads move into the cheapest tariff hours.

The decisive input is two forecasts combined: **tomorrow's prices** (known) and **tomorrow's production** (forecast). Only together do they answer whether the water heats on sunshine at 1 pm or on cheap grid power at 3 am. Automating exactly that loop is what home energy-management systems (EMS) are for — I currently run it semi-automatically in Home Assistant with Volcast forecast sensors (the HA integration requires Premium). Australia's Amber ecosystem, where households pay a subscription for automated wholesale optimisation, shows where this is heading everywhere.

## The risks, stated plainly

Prices can also spike: a cold, windless evening means several times the average rate. Without flexibility, a dynamic tariff can end up *more* expensive than a flat one. Rule of thumb: switch only once you can shift at least 30–40% of your consumption — or a battery smooths the peaks for you.

## FAQ

**Can I still export on a dynamic tariff?**
Yes — export is settled independently (fixed feed-in or wholesale-linked, depending on market and provider); the dynamic side mainly changes what you pay for imports.

**Where do I see tomorrow's prices?**
In your provider's app or public day-ahead dashboards — published each afternoon for the next day.

**What happens during negative prices?**
Importing is effectively rewarded — the ideal hour for battery charging and big loads. More in [the negative prices article →](/blog/en/negative-electricity-prices-solar).
