---
title: "Why weather apps can't tell you your solar output"
description: "\"Sunny\" doesn't mean \"lots of power\". Irradiance vs cloud cover, roof geometry and temperature — why panels need their own forecast, explained simply."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: true
translationKey: "weather-vs-output"
seo:
  ogTitle: "Weather Forecast vs Solar Output — Why They Differ"
---
"Sunny tomorrow, 22 degrees" — and what does that tell you about your system's output? Surprisingly little. A weather forecast and a production forecast answer different questions, and eyeballing one into the other produces systematic mistakes. Here are the three reasons panels need a forecast of their own.

## Reason 1: panels don't see "cloud cover" — they see irradiance

Weather apps report cloudiness in percent. Panels respond to irradiance — radiation power in watts per square metre. The link between the two is loose: a high, thin veil of cirrus at "60% cloudy" passes far more energy than a low stratus deck at the same 60%. Add diffuse light: on a bright overcast day a system can run at 20–30% of rated power on scattered light alone — something "cloudy" in an app says nothing about.

## Reason 2: your roof changes everything

The same irradiance means completely different kWh depending on geometry: azimuth, tilt, string layout, the chimney's shadow at 3 pm. An east–west array and a south-facing one differ not just in daily total but in the entire shape of the production curve. No weather forecast knows your roof — and the roof decides when you actually have surplus.

## Reason 3: temperature plays against intuition

"Heatwave = lots of power" is the most common myth. Panels lose about 0.3–0.4% efficiency per degree of cell temperature above 25 °C — and cells hit 60–70 °C on a July midday. Records fall on sunny, cool, breezy spring days, not in August heat — which "sunny, 33 °C" will never tell you.

## A tiny glossary: GHI, DNI, DHI — the three numbers panels actually see

If not cloud cover, then what? Irradiance is described by three components: **GHI** (Global Horizontal Irradiance) — total radiation on a horizontal plane; **DNI** (Direct Normal) — the beam component, the one that casts shadows; **DHI** (Diffuse Horizontal) — light scattered by clouds and atmosphere. In full sun DNI dominates; on an overcast day you run almost entirely on DHI — which is exactly why panels still produce "without sun". A forecasting model combines these three into the radiation hitting *your* tilted, rotated plane.

How those components become an hourly kWh forecast for a specific system — calibrated against real yields — is covered step by step in the [production forecasting guide →](/blog/en/solar-production-forecast). The one thing to remember here: without these three numbers, any "solar forecast" is guesswork.

## FAQ

**Can I convert a weather forecast to production by hand?**
Roughly — for a daily total in full sun. Hourly distribution, mixed days and seasonal shading need a model; manual estimates miss by tens of percent there.

**Does "clear sky" in an app mean maximum production?**
Not always — haze, smog and thin high cloud cut DNI even at "0% cloud", and cell temperature does the rest. Hence 10–20% differences between equally "clear" days.

**Where does satellite data come from?**
Meteorological satellites measure radiation reflected off clouds — from that, the energy reaching the ground at each grid point is derived.
