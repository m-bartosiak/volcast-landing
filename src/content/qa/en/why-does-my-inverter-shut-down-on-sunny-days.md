---
title: "Why does my inverter shut down on sunny days?"
description: "Midday shutdowns are usually grid overvoltage (above 253 V), not a fault. How to spot the pattern in your logs and what actually fixes it."
lang: en
draft: false
category: "k1"
guide: "solar-production-forecast"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Inverter shutting down on sunny days — why it happens"
---
In the vast majority of cases the inverter shuts down because **grid voltage rises above the permitted limit (typically 253 V)** — and it is required to disconnect when that happens. It is not a fault in your system: it is a congested local grid that the whole street is exporting into at the same time.

## Why this happens

Every exporting system slightly raises the voltage at its connection point. When a dozen solar homes share one transformer circuit, midday voltage on a clear day climbs past the limit (230 V +10% = 253 V in the UK, Ireland and Australia alike). The inverter monitors it continuously, disconnects with an overvoltage error, waits, reconnects — and the cycle repeats, sometimes dozens of times a day. Every disconnection costs you kWh in exactly the most productive hours.

The pattern is unmistakable: shutdowns on sunny days between 11 am and 3 pm, none on overcast days, and "grid overvoltage" or "OV" error codes in the inverter log.

## What to do

1. **Export the inverter logs** — date, time and measured voltage for every shutdown. That is your evidence.
2. **Measure voltage in the evening too** — if it is above the norm when the panels are not producing, the grid problem is even easier to prove.
3. **Report it to your network operator** — the DNO in the UK, ESB Networks in Ireland, your DNSP in Australia — not to your electricity retailer. How to make the report stick is covered in a separate answer on reporting voltage above 253 V.
4. **Ask your installer about volt-watt response** — the inverter can gently reduce power instead of tripping hard; details in the answer on the volt-watt curve. In Australia this mode is already the default under AS/NZS 4777.2.
5. **Put a number on the losses** — comparing actual production against a forecast for your exact system shows how many kWh disappear through shutdowns; a concrete figure makes your complaint much harder to brush off.
