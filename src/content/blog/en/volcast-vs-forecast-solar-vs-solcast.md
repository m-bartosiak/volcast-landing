---
title: "Volcast vs Forecast.Solar vs Solcast — an honest comparison"
description: "The three most popular solar forecast sources compared honestly: accuracy, calibration, apps, free-tier limits and pricing — with a self-test method."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "brand-comparison"
seo:
  ogTitle: "Volcast vs Forecast.Solar vs Solcast — Honest Comparison"
---
Full disclosure first: we build one of the three tools compared here. So expect a table where we don't win every row — and a straight recommendation for when you should stick with the free community option. Forecast.Solar and Solcast are solid projects we used ourselves before building our own engine. The differences come down to three questions: *who it's for*, *how accurate*, and *in what form*.

## Three tools, three philosophies

**Forecast.Solar** — the tinkerer's choice: free API, simple parameters (location, azimuth, tilt, capacity), hugely popular in the Home Assistant community and shipped as a core integration. No calibration to your specific system, hourly resolution, request limits on the free tier.

**Solcast** — the industrial option: high-quality satellite irradiance data used across the energy industry, a hobbyist plan with a daily request cap, and tuning against your uploaded data. The product's heart is the API — there is no consumer mobile app.

**Volcast** — a physics engine on satellite data plus automatic Kalman-filter calibration against your real production, wrapped in a mobile app (iOS/Android, 13 languages) with push notifications — plus an official HACS integration and API on Premium ($4.49/mo).

## Comparison table

| | Volcast | Forecast.Solar | Solcast |
|---|---|---|---|
| Mobile app | yes, iOS + Android | no | no |
| Free tier | yes, 2-day forecast | yes, with API limits | hobbyist plan, daily cap |
| Calibration to your system | automatic (Kalman) | none | partial (tuning) |
| Resolution | down to 5 min | hourly | 5–30 min |
| Home Assistant | official HACS integration | core integration | community integration |
| Surplus notifications | yes | no | no |
| Curtailment detection | yes | no | no |

> Accurate as of publication day — competitors' limits and pricing change; corrections welcome, we'll update with a visible date.

## Which to pick — honestly

**Stick with Forecast.Solar if:** your system is simple and unshaded, ballpark accuracy is enough, and you just want a free sensor in the Energy Dashboard. Lowest barrier, zero cost.

**Pick Solcast if:** you're building your own solution on an API and want industrial-grade irradiance data — and don't mind the absence of an app.

**Pick Volcast if:** your system has quirks (shading, east–west layout, degradation), you want the forecast on your phone with notifications — or one tool that works in both the app and Home Assistant. Calibration is the differentiator: after 2–3 weeks the forecast reflects *your* system, not a model one.

## The test you can run yourself

Don't trust any table — including ours. All three have free entry points: run two or three in parallel for two weeks and compare against real inverter data. Your roof, your shading and your climate are the only benchmark that matters.

## FAQ

**Does Volcast use Forecast.Solar or Solcast data?**
No — our own physics engine fed by satellite irradiance data and weather models, with our own calibration layer.

**Which is the most accurate?**
On clear days all three are decent. Differences grow on mixed days and with shading — that's where calibration against real yields gives Volcast an edge you can verify with a parallel test at home.

**Can I run Volcast and Forecast.Solar side by side in Home Assistant?**
Yes — the integrations coexist fine; it's a common setup for benchmarking.
