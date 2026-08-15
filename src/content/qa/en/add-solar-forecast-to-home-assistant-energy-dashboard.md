---
title: "Solar forecast in the Home Assistant Energy Dashboard"
description: "The Energy Dashboard can overlay a production forecast on your solar graph. How to wire it via HACS and what the dashed line really tells you."
lang: en
draft: false
category: "k5"
guide: "home-assistant-solar-forecast-comparison"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "Solar forecast in the HA Energy Dashboard — setup and pitfalls"
---
The Energy Dashboard supports forecasts natively: install a forecast integration, then in **Settings → Dashboards → Energy** edit your solar production entry and tick the forecast option provided by that integration. The dashed forecast line then overlays your actual production — turning the dashboard from a rear-view mirror into a plan for the day.

## Why the dashed line matters

Without a forecast, the Energy Dashboard tells you what already happened. With one, two new uses appear. First, **planning**: the morning glance shows whether today is a laundry-and-EV day or a grey one — and every automation can read the same sensors the dashboard uses (see the self-consumption answer). Second, **health monitoring**: actual hugging the forecast means the system is fine; actual persistently sagging under it is the earliest visible sign of shading, soiling or a fault (see the system-check answer in K2).

Forecast quality decides how much you can trust both uses. Simple models estimate from location and panel geometry alone; physics-based services layer weather-model (NWP ensemble) irradiance data and calibrate against your system's real history, which narrows the error enough that a 15% shortfall is a signal, not noise. The comparison guide walks through the options available as HA integrations.

## What to do

1. **Install the integration via HACS**, configure your array (location, orientation, tilt, kWp) and check new sensors appear (today/remaining/next-hour energy).
2. **Add the forecast in the Energy Dashboard** — edit the solar source, enable the integration's forecast; the dashed line appears on the production graph within an hour.
3. **Sanity-check for a few days** — a forecast wildly off in clear weather usually means a wrong tilt/azimuth entry, worth fixing before any automation trusts it.
4. **Reuse the sensors beyond the dashboard** — the same entities drive the morning-planner automation and the overnight battery target; the dashboard is just the visible tip.
