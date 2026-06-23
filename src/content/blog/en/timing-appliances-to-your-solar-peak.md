---
title: "How to Time Your Heavy Appliances Around Your Solar Peak"
description: "Your most valuable kilowatt-hour is the one you use yourself. How to read your forecast and time heavy loads to your solar peak."
date: 2026-06-23
author: "Michal"
tags: ["self-consumption", "home-assistant", "peak-window", "automation"]
series: "practical"
seriesOrder: 3
lang: en
draft: false
seo:
  keywords: ["solar self-consumption", "peak production window", "schedule appliances solar", "home assistant solar automation", "maximize self-consumption"]
---

Most of the money in a solar system is not made at installation, it is made in the small daily decisions about when you use your electricity. And the single most valuable kilowatt-hour you have is the one your panels make and you use yourself, right then, without it ever touching the grid.

## Why self-consumption beats export

In most markets today, what you are paid to export is well below what you pay to import, and net-billing arrangements rarely work in your favour. So a kilowatt-hour you consume the moment it is produced saves you the full retail price, while the same kilowatt-hour exported earns you a fraction of it. That gap is the whole game. The more of your own production you use directly, the faster your system pays for itself.

## What the "peak window" really means

Your peak window is the stretch of hours when production runs highest, centered on solar noon and widening through summer. In a European summer it is roughly the middle of the day, often something like 10:00 to 15:00. It is not a single magic moment but a usable band of hours, and the goal is simple: line up your biggest, most flexible loads with it.

## Which loads you can actually move

You would be surprised how much of a household's consumption is flexible if you look for it. The dishwasher and washing machine almost always have delay timers. The dryer can wait. An EV rarely needs charging at a fixed time, it just needs to be full by morning. Your water heater, heat pump, pool pump, and air conditioning can all be nudged earlier into the day. And if you have a battery, it is the most flexible load of all.

## Use a 7-day forecast to plan the week

This is where a forecast turns from interesting into useful. Instead of reacting day by day, you plan: front-load the heavy tasks onto the high-production days and ease off when the week looks cloudy. Set the dishwasher's delay timer to start in the peak window. Charge the EV on the sunny afternoons rather than overnight from the grid. A clear view of the next several days lets you spend your own sunshine instead of buying someone else's.

## Let Home Assistant do the work

If you want to stop thinking about it entirely, automation closes the loop. With Home Assistant you can trigger actions straight off the forecast, start the dishwasher when production crosses a threshold, schedule EV charging into the peak window, divert any surplus to the water heater. Volcast's hour-by-hour forecast, peak-window notifications, and REST API exist precisely so your smart home can act on the sun before it arrives.

## You do not have to automate everything

Do not let the fancy setups put you off starting. You do not need a single line of automation to benefit. Just moving the laundry and the dishwasher to the middle of a sunny day already shifts real money back into your pocket. Get the habit first, then automate the parts you are tired of remembering.
