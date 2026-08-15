---
title: "How do I find my system's real kWp?"
description: "Add up the panel watts, not the inverter rating — they are different numbers on purpose. Plus how to spot a wrong kWp in your own production data."
lang: en
draft: true
category: "k2"
guide: "three-numbers-pv-setup"
translationKey: "qa-real-kwp"
seo:
  ogTitle: "What is my solar system's real kWp?"
---
Your system's kWp is **the sum of your panels' nameplate watts, and nothing else**. Twelve panels rated 510 W each make a 6.12 kWp array — even if the inverter on the wall says 5 kW, even if your installer's quote rounded it to "6 kW", and even if the app that came with the inverter shows a different figure. Panels are measured in watts-peak (Wp) of DC power; the inverter is rated in watts of AC output. They answer different questions.

## Why the two numbers differ on purpose

An inverter smaller than the array is normal engineering, not a mistake. A DC/AC ratio between 1.1 and 1.3 is standard: panels only reach their nameplate rating in laboratory conditions, so sizing the inverter for the real-world peak instead of the theoretical one costs almost nothing in lost energy and saves real money on hardware. Your array will clip for a handful of hours a year around midday in summer, and that is the trade the designer made deliberately.

This is exactly why the inverter's rating is the wrong number to write into a forecast. A forecast models how much light your panels collect — that is a function of panel area and efficiency, which is what kWp describes. The inverter enters later, as a ceiling.

## Where to find the honest figure

The nameplate is on the back of each panel, and the same figure appears on the datasheet your installer left you. Multiply the wattage by the number of panels. If your roof has several groups facing different directions, do the sum per group — a forecast needs them separately, because an east-facing string and a west-facing string peak hours apart.

Two places that will mislead you: the inverter's own app, which usually reports its AC rating, and the headline number on your contract, which is often rounded for readability.

## How a wrong kWp looks in your data

The signature is a **constant ratio**, and that is what distinguishes it from weather error. Pick five to ten clear, cloudless days spread across a couple of months and divide your actual production by the forecast for each. Weather misses scatter — some days high, some low. A wrong kWp does not scatter: every clear day lands near the same fraction, because the error is a fixed multiplier applied to every hour of every day.

If those clear days cluster near 0.8, you have entered roughly 20% more capacity than you own. If they cluster near 1.2, you have entered too little — which is what happens when someone types the inverter's 5 kW instead of the panels' 6.12 kWp.

## What to do

1. **Count panels and read one nameplate** — panel count times watts, per roof orientation. This takes five minutes and is the single most valuable number in your setup.
2. **Enter DC watts-peak, not inverter kW** — if the two differ by 10–30%, that is expected and correct.
3. **Check the ratio on clear days before blaming the forecast** — a constant offset is a configuration error; a scattered one is weather.
4. **Re-check after any change** — added panels, a replaced module, a second array. Capacity entered once and never revisited quietly ages out of date.
