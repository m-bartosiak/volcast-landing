---
title: "Charging your EV from solar — when to plug in the car"
description: "How to charge your EV on solar surplus: power thresholds, charger modes, and planning charge sessions with an hourly production forecast."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: en
draft: false
translationKey: "ev-charging"
seo:
  ogTitle: "EV Charging From Solar — When to Plug In Your Car"
---
An electric car is the largest energy consumer in a household — a single charging session (20–60 kWh) can exceed the daily consumption of everything else combined. That also makes it the biggest opportunity: every kilowatt-hour charged from your roof instead of the grid saves the full gap between a few cents of export value and full retail price. The catch: an EV doesn't sip power, it gulps — and that's where planning starts.

## The threshold problem

Single-phase charging starts around 1.4 kW (6 A), typical settings are 3.7 kW, three-phase 11 kW. A 5 kWp system on an April midday delivers maybe 4 kW — of which the house takes 0.5–1 kW of base load. Real surplus is often 2.5–3.5 kW: enough to charge, but only if you hit the window. Plug in blindly at 5 pm and you're charging grid power.

## Three strategies

**"Sunny Saturday".** The simplest: the car sits at home on a weekend, the forecast shows 25+ kWh — plug in during the forecast peak with current matched to the expected surplus (say 3.7 kW for 4–5 hours). Needs nothing beyond a charger with adjustable power.

**The mixed strategy.** On weekdays the car charges overnight in the cheap tariff window only "to commuting range" — topping up waits for the next strong solar day. An evening glance at tomorrow's forecast decides how much battery headroom to leave for the sun.

**Automatic surplus charging.** The endgame: a charger in PV mode (native, or driven by Home Assistant / EVCC) continuously modulates charge current to the live surplus. This is where forecast resolution pays off: Volcast's API (Premium) delivers 288 five-minute points per day, so the automation knows whether the cloud in 20 minutes is a passing shadow or the end of the window — and doesn't abort the session unnecessarily.

## The maths

10 kWh charged on sunshine instead of grid ≈ 2–3 €/£/$ saved, depending on your rates (retail price minus lost export value). At 1,000 km a month (~170 kWh) with half the charging from surplus, that's a meaningful monthly sum — plus the unquantifiable part: commuting on power you harvested yourself.

## FAQ

**Can I surplus-charge from a regular socket?**
Yes — the "granny charger" (2.3 kW) actually fits moderate surpluses well. Slow, but for a car parked at home all day it's often the most effective way to absorb the midday hump.

**Charge the car or the home battery first?**
If the car needs charging anyway: the car. It avoids double conversion and battery cycles. The home battery wins when the car isn't home during production hours.

**How much power is left for charging?**
Surplus = current production − house consumption. Check it on a bidirectional meter or the Energy Dashboard; the hourly forecast tells you what it will look like tomorrow.
