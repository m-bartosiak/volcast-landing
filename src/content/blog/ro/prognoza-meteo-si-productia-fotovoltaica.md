---
title: "De ce aplicațiile meteo nu îți spun cât vei produce"
description: "„Însorit” nu înseamnă „multă energie”. Iradianță, nebulozitate, geometria acoperișului și temperatură: de ce panourile au nevoie de prognoza lor."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "weather-vs-output"
seo:
  ogTitle: "Prognoza meteo și producția fotovoltaică — de ce diferă"
---
„Mâine e senin, 22 de grade” — și ce îți spune asta despre producția sistemului tău? Surprinzător de puțin. O prognoză meteo și o prognoză de producție răspund la întrebări diferite, iar transformarea „din ochi” a uneia în cealaltă produce greșeli sistematice. Iată cele trei motive pentru care panourile au nevoie de o prognoză proprie.

## Motivul 1: panourile nu văd „nebulozitatea”, ci iradianța

Aplicațiile meteo raportează gradul de acoperire cu nori în procente. Panourile reacționează la iradianță — câtă putere solară cade pe un metru pătrat, în W/m². Legătura dintre cele două e slabă: un văl subțire și înalt de cirrus la „60% nori” lasă să treacă mult mai multă energie decât un strat jos de stratus la aceleași 60%. Adaugă lumina difuză: într-o zi cu cer acoperit, dar luminos, un sistem poate funcționa la 20–30% din puterea nominală numai pe radiație împrăștiată — exact ce nu îți spune cuvântul „înnorat” din aplicație.

## Motivul 2: acoperișul tău schimbă totul

Aceeași iradianță înseamnă cu totul alți kWh, în funcție de geometrie: orientarea (azimutul), unghiul de înclinare, împărțirea pe stringuri, umbra coșului de fum la ora 15. Un sistem est–vest și unul orientat spre sud diferă nu doar prin totalul zilnic, ci prin toată forma curbei de producție. Nicio prognoză meteo nu îți cunoaște acoperișul — iar acoperișul decide când ai efectiv surplus.

## Motivul 3: temperatura joacă împotriva intuiției

„Caniculă egal multă energie” este cel mai răspândit mit. Panourile pierd aproximativ 0,3–0,4% din eficiență pentru fiecare grad de temperatură a celulei peste 25 °C — iar celulele ajung la 60–70 °C într-o amiază de iulie. Recordurile cad în zilele senine, răcoroase și cu vânt de primăvară, nu în arșița lui august — ceva ce „senin, 33 °C” nu îți va spune niciodată.

## Mic glosar: GHI, DNI, DHI — cele trei numere pe care le văd panourile

Dacă nu nebulozitatea, atunci ce? Iradianța se descrie prin trei componente: **GHI** (iradianță globală orizontală) — radiația totală care cade pe un plan orizontal; **DNI** (iradianță directă normală) — componenta directă, cea care aruncă umbre, unde „normală” înseamnă perpendiculară pe razele soarelui, nu „obișnuită”; **DHI** (iradianță difuză orizontală) — lumina împrăștiată de nori și de atmosferă. În soare plin domină DNI; într-o zi acoperită funcționezi aproape exclusiv pe DHI — exact motivul pentru care panourile produc și „fără soare”. Un model de prognoză combină aceste trei componente în radiația care ajunge pe planul *tău*, înclinat și orientat într-un anumit fel.

Cum devin aceste componente o prognoză orară în kWh pentru un sistem anume, calibrată pe producția reală, este explicat pas cu pas în [ghidul de prognoză a producției →](/blog/ro/prognoza-productiei-fotovoltaice). Un singur lucru de reținut aici: fără aceste trei numere, orice „prognoză solară” rămâne o ghiceală.

## FAQ

**Pot să transform singur o prognoză meteo într-o prognoză de producție?**
Aproximativ, pentru un total zilnic în soare plin. Distribuția pe ore, zilele variabile și umbrirea sezonieră au nevoie de un model; acolo estimările făcute manual greșesc cu zeci de procente.

**„Cer senin” în aplicație înseamnă producție maximă?**
Nu întotdeauna. Ceața uscată, poluarea și norii înalți subțiri taie DNI chiar și la „0% nori”, iar temperatura celulei face restul. De aici diferențele de 10–20% între zile la fel de „senine”.

**De unde vin datele de la satelit?**
Sateliții meteorologici măsoară radiația reflectată de nori — din ea se deduce câtă energie ajunge la sol în fiecare punct al grilei de calcul.
