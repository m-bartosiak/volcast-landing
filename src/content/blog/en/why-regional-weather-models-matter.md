---
title: "Why a Global Forecast Isn't Enough for Solar"
description: "Global weather models smear out the clouds that decide your solar output. Here is why regional models matter for an accurate forecast."
date: 2026-07-28
author: "Michal"
tags: ["forecasting", "nwp", "weather-models", "accuracy"]
series: "geographic"
seriesOrder: 2
lang: en
draft: true
seo:
  keywords: ["numerical weather prediction", "regional weather model", "ICON-D2", "solar forecast accuracy", "ECMWF vs regional model"]
---

Every solar forecast starts with a weather model, and not all weather models see your sky the same way. The gap between a global model and a high-resolution regional one is often the gap between a forecast that catches this afternoon's clouds and one that misses them entirely.

## Global models: the wide-angle view

Global models like the ECMWF's IFS or NOAA's GFS cover the whole planet. That reach comes at a cost: resolution. Working on a grid of roughly 9 to 25 kilometers, they treat everything inside each cell as uniform. For broad weather patterns days ahead, that is fine. For solar, where a single cumulus cloud drifting over your roof matters, it is a blur.

## Regional models: the close-up

This is where regional, high-resolution models earn their place. Germany's DWD runs ICON-D2 at about 2 km over Central Europe. France has AROME at around 1.3 km. The Nordic and Dutch services share the HARMONIE-AROME system; the UK has the Met Office's UKV; the US has NOAA's HRRR; Australia has the Bureau's ACCESS. At those resolutions the models start to resolve coastlines, terrain, and, crucially, the convective clouds that pop up on a summer afternoon.

## Clouds are the whole game

For solar, cloud timing and placement are everything, and summer convective cloud is exactly the kind a coarse global model struggles with. A 2 km model can place a build-up of afternoon cloud over the right valley at roughly the right hour; a 25 km model can only tell you the region is "partly cloudy." One of those is useful for scheduling your battery and your washing machine.

## The trade-off, and the answer

Regional models are not a free win. They cover shorter horizons, hours to a couple of days, while global models reach out ten days or more. So the honest answer is not to pick one; it is to blend. Use the sharp regional model where it is available for the near term, and fall back to the global model for the longer view. That is precisely why a good engine draws on many models at once and chooses the best available source for your region and your forecast horizon, rather than trusting a single global feed for everyone on Earth.

The best forecast for your roof is not the one with the biggest map. It is the one that knows which model to trust for your patch of sky, and when.
