---
title: "Your solar forecast is off: 5 checks, in order"
description: "Before blaming the model, rule out the four things that look like forecast error and are not. Then one test tells you whether it was really the weather."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "Solar forecast doesn't match reality? Check these 5 things"
---
When production and forecast disagree, the model is the obvious suspect and usually the wrong one. Four of the five most common causes are things about your system that the forecast was never told, and they leave a different fingerprint than a genuine weather miss. Work through them in this order — cheapest and most likely first — and the fifth step will tell you whether what remains is really the sky.

## 1. The capacity you entered

Start here, because it is the single most common cause and takes five minutes. A forecast models the light your panels collect, so it needs the panels' watts-peak, not the inverter's rating. Twelve panels of 510 W are a 6.12 kWp array even when a 5 kW inverter hangs on the wall.

The fingerprint is a **constant ratio**: every clear day lands near the same fraction of forecast, because a wrong capacity is a fixed multiplier on every hour. If your clear days cluster near 0.8 or near 1.2, stop reading and fix the number — everything below is noise until you do. The full method is in [how to find your system's real kWp](/blog/en/q/how-do-i-find-my-real-kwp/).

## 2. Clipping at the inverter

If the gap only appears around midday on the sunniest days, and your production curve has a flat top rather than a peak, you are not looking at a forecast error. You are looking at the inverter doing its job: an array larger than the inverter is standard design, and it trims a handful of hours a year.

Two answers cover this in detail — [why output goes flat at midday](/blog/en/q/why-is-solar-output-flat-at-midday/) and [whether an inverter smaller than the panels is a mistake](/blog/en/q/inverter-smaller-than-panels-is-that-wrong/). The short version: a flat top is a design decision, not a fault, and the forecast can only account for it if it knows the inverter's limit.

## 3. Shading the model cannot see

A forecast knows where the sun is. It does not know about your neighbour's chimney, the walnut tree, or the roof dormer three metres to the west. Near shading is invisible to any model that was not explicitly told about it.

The fingerprint here is different from the first two: the error is **not constant, but it repeats at the same time of day**. Morning matches the forecast, afternoon falls short, and it does so on every clear day in the same season. Take five clear days, compare hour by hour rather than daily totals, and the shape gives it away — a daily sum hides exactly the thing you are looking for.

The frustrating part is that the shape drifts across the year, because the sun's height changes. A shadow that costs you nothing in June can eat the whole afternoon in October.

## 4. Dirt, snow and the things that build up slowly

Soiling has the most distinctive signature of all: **a slow, one-directional drift**. Not a bad day, not a bad week — a ratio that was 1.0 in April and is 0.92 in July, with no single event to point at. Pollen, dust after a dry spell, salt near the coast, bird droppings on one string.

Snow is the opposite: total, obvious, and self-resolving. It is worth mentioning only because a partly covered array can produce so little that people assume a fault.

The test is easy. Note your best clear-sky day each month. That personal reference curve makes drift visible in a way that day-to-day comparison never will, and it also catches genuine degradation over years.

## 5. Now, was it the weather?

If the four above are ruled out, you can finally ask the question properly — and the honest answer is that forecasts really are worse in clouds.

Measured across our own users' production records: on days with clear skies the median error is around **12%**, while on fully overcast days it is closer to **20%**. On heavily clouded days, roughly **31%** of days miss by more than 30% in one direction or the other, against **16%** of clear days. Importantly, the median bias stays near zero in every weather bucket — the forecast does not systematically over- or under-predict in clouds, it just becomes noisier.

That distinction is the whole point of this step. **Scatter is weather. A constant offset is configuration.** If your errors are large but land on both sides across many days, you have found the answer and there is nothing to fix. If they lean consistently one way, go back to step 1.

Two notes on comparing this with the numbers vendors publish. Most industry accuracy claims measure irradiance, or a whole fleet's aggregate output — both far easier to predict than one roof's daily kilowatt-hours. And a single day proves nothing either way; you need weeks of days before an average means anything.

## What to do

1. **Fix capacity first.** Panel count times nameplate watts, per orientation. Nothing else is worth measuring until this is right.
2. **Split clear days from cloudy ones** before computing any average. Mixing them produces a number that describes neither.
3. **Compare hour by hour when the daily total looks fine.** Shading and clipping both hide inside a correct-looking daily sum.
4. **Log your best clear day each month.** It is the cheapest instrument you have for catching slow drift.
5. **Judge on weeks, not days.** And if you want the deeper background, start with [how to check whether your system is working properly](/blog/en/q/how-to-check-solar-system-is-working-properly/) and [why panels never reach their rated power](/blog/en/q/why-do-panels-never-reach-rated-power/).
