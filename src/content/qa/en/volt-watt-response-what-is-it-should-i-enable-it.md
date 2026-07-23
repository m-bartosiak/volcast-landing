---
title: "What is volt-watt response and should I enable it?"
description: "Volt-watt gently reduces inverter output as grid voltage rises, instead of hard tripping. When it saves you energy and what to watch out for."
lang: en
draft: true
category: "k1"
guide: "solar-production-forecast"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "Volt-watt / P(U) curve — what it is and when to enable it"
---
Volt-watt (also called a P(U) curve) makes the inverter **gradually reduce output as grid voltage rises, instead of disconnecting outright** when the limit is breached. If your inverter trips on overvoltage, enabling it usually recovers energy: losing 20–30% of power for a few minutes beats losing 100% for ten.

## Why this helps

A hard overvoltage trip is all-or-nothing: the inverter drops offline, waits, reconnects, and often trips again minutes later. Volt-watt replaces that cliff with a slope — as voltage approaches the limit, output is trimmed just enough to keep the connection alive. In Australia this behaviour is mandatory on new systems under AS/NZS 4777.2; in Europe it is supported by most modern inverters but often left disabled by installers.

The honest trade-off: volt-watt means you are permanently curtailing a little energy on high-voltage days to avoid losing a lot. It also masks the underlying grid problem — which is why it works best alongside, not instead of, a formal report to your network operator.

## What to do

1. **Check whether your inverter trips at all** — look for overvoltage codes in the log. No trips, no need to change anything.
2. **Ask the installer to enable volt-watt** with settings appropriate for your grid code — this is grid-facing configuration, usually behind an installer password, and getting it wrong can breach your connection agreement.
3. **Keep reporting overvoltage to the network operator** — volt-watt is a painkiller, the grid fix is the cure.
4. **Watch the effect in your production data** — comparing output against a forecast for your system shows whether curtailment stays at a few percent (fine) or grows (time to escalate the grid complaint).
