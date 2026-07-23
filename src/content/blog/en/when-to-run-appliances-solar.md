---
title: "When to run your water heater, washing machine and dishwasher on solar — a practical guide"
description: "What time should the water heater and appliances run to use your own solar power? A simple rule, hourly examples, and how to automate it."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "appliances"
seo:
  ogTitle: "When to Run Appliances on Solar Power — Practical Guide"
---
The short answer: **whenever your system is producing more than your home is using** — usually somewhere in the 10 am–3 pm window, but the exact hours depend on weather, season and panel orientation. This guide shows you how to find that window for your system instead of guessing.

## Why timing matters at all

In almost every market, exported solar earns a fraction of what grid power costs — feed-in rates of a few cents against retail prices several times higher. Practically, a kilowatt-hour consumed straight off your roof is worth **two to four times** the same kilowatt-hour exported and bought back in the evening. On dynamic tariffs, with wholesale prices near zero or negative on sunny middays, the gap gets even wider.

The water heater, washing machine, dishwasher, dryer and EV charger are the biggest "shiftable" loads in a home. A 2–3 kW immersion heater running 1.5–2 hours is 3–6 kWh a day — moving that from evening to midday can visibly change your monthly bill.

## Rule #1: it's not the hour, it's the surplus

The popular advice "switch things on between 11 and 2" works only so-so, because:

- **In April**, a 5 kWp south-facing system can have surplus from 9 am.
- **In November**, the same system may have none at all — and midday heating saves nothing.
- **East–west arrays** have two production humps and a longer but shallower surplus window.
- **On mixed days**, the peak can shift by hours or simply be too low for a 3 kW heater.

The right question is: *how much will be left tomorrow after base load — and in which hours?* That's exactly what an hourly production forecast answers.

## How I do it at home (5.2 kWp system)

Each evening, a glance at tomorrow's forecast. Three scenarios:

**Sunny day, 25+ kWh forecast.** Water heater starts at 10:30, washing machine at noon, dishwasher at 1:30 pm — everything fits inside the surplus, and there's still plenty left to export.

**Mixed day, 10–15 kWh.** I pick the two strongest hours from the hourly forecast (say 12–2 pm) and put only the water heater there. Laundry waits for a better day — or runs overnight in the cheap window if you're on a time-of-use or dynamic tariff.

**Overcast day, under 6 kWh.** No pretending: hot water simply runs in the cheapest tariff hour.

The point is that the decision takes 30 seconds in the evening — not standing at the window in the morning reading clouds. I use [Volcast](https://volcast.app/en/) for this: the app shows an hourly forecast for my specific setup (azimuth, tilt, shading), and the evening "tomorrow's forecast" notification saves me when the weather flips.

> [SCREENSHOT PLACEHOLDER: hourly forecast with the surplus window highlighted]

## Level up: automate instead of remembering

With Home Assistant, the whole thing runs itself: the forecast feeds in as a sensor, and an automation switches the heater on via a smart plug or contactor whenever the next hour's predicted production clears a threshold. Result: your water heats on sunshine without you touching anything — and falls back to the cheap tariff window on overcast days.

Volcast has an official Home Assistant integration (requires Premium; installed via HACS in three clicks) — "energy today", "energy tomorrow", "power now" and a peak-production indicator appear straight in the Energy Dashboard.

No Home Assistant? App notifications plus a basic timer plug set in the evening get you most of the way.

## Cheat sheet

| Appliance | Draw | When to run it |
|---|---|---|
| Water heater / immersion | 2–3 kW | Middle of the surplus window; priority #1 — the biggest, most flexible load |
| Washing machine | 0.5–2 kW | Start of the window; lower-temperature programme = smaller peak draw |
| Dishwasher | 1–2 kW | After the washer, still inside the window; eco mode runs longer but flatter |
| Dryer | 1.5–3 kW | Only on big-surplus days |
| EV charging | 3.7–11 kW | Its own topic — needs the largest surplus (solar excess charging) |

## FAQ

**Is self-consumption really worth more than exporting?**
Almost always: feed-in pays a few cents while grid power costs several times that. Rare exceptions exist where export rates are unusually high alongside very cheap off-peak import.

**What time does a solar system produce the most?**
South-facing systems typically peak 11 am–2 pm (summer time); east–west arrays have two peaks, roughly 9–11 am and 2–4 pm. Check the hourly forecast for the actual peak — clouds can shift it substantially.

**Does switching everything on at noon make sense?**
Only if the combined load fits inside the surplus. If heater + washer + dishwasher exceed current production, the difference comes from the grid at full price. Better to run appliances sequentially through the surplus window.
