---
title: "Is Octopus Agile worth it with solar and a battery?"
description: "Agile rewards automated flexibility and punishes set-and-forget. When half-hourly pricing beats Flux/Go for a solar-battery home — and when it does not."
lang: en
draft: true
category: "k6"
guide: "dynamic-tariff-with-solar"
translationKey: "qa-en-agile-worth-it"
seo:
  ogTitle: "Octopus Agile with solar and a battery — who actually wins"
---
Agile pays off for exactly one kind of household: **automated, flexible, and comfortable with volatility.** With solar, a battery and software that follows both the half-hourly prices and tomorrow's production forecast, it typically beats fixed TOU tariffs over the year. Run set-and-forget, the same tariff can cost more than the boring alternative — the winter price spikes are real.

## Why the answer splits so sharply

Agile passes wholesale half-hourly prices through to you: cheap and occasionally near-zero or negative in windy or sunny troughs, expensive in still winter evening peaks. The tariff itself has no opinion — it simply hands the steering wheel over. A solar-battery home holds every lever that pricing rewards: charge the battery in the day's cheapest window, hold through the peak, self-consume solar regardless, and (on the export side) time discharge into well-paid evenings.

But each lever needs pulling every day, because the price curve changes every day — and so does your production. That is why the honest comparison is not Agile vs Flux/Go on average prices, but *your automation* vs *their schedule*. Structured TOU tariffs bake the intelligence into fixed windows; Agile outsources it to you. No automation = no edge, full spike exposure.

## What to do

1. **Backtest with your own data** — run recent smart-meter half-hours through published Agile price history versus your current tariff; suppliers and community tools make this a one-evening job.
2. **Automate before switching, not after** — battery scheduling driven by day-ahead prices plus a production forecast (Home Assistant handles both) is the difference between winning and donating.
3. **Mind the joint constraint**: cheap-window charging and tomorrow's solar compete for battery space — the overnight-vs-solar rule applies daily on Agile.
4. **Decide your winter posture in advance** — cap exposure via automation (pre-charge before forecast spikes) or accept switching back for the darkest months; both are valid, drifting into a spike unprepared is not.
