---
title: "Pompă de căldură și fotovoltaic — când o pornești"
description: "Cum muți ciclurile de apă caldă ale pompei de căldură în orele de producție: programe orare, contact SG Ready și automatizări pe bază de prognoză."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "heat-pump"
seo:
  ogTitle: "Pompă de căldură și fotovoltaic: cum le sincronizezi"
---
O pompă de căldură și un sistem fotovoltaic sunt o pereche naturală, dar numai dacă pompa lucrează atunci când acoperișul produce. Programele din fabrică încălzesc apa menajeră dimineața devreme și seara: exact când soarele nu mai e acolo. Rearanjarea acestor cicluri e una dintre cele mai simple optimizări și una dintre puținele care se văd direct pe factură.

## Principiul: boilerul e o baterie termică

Stocarea electricității costă mult, stocarea căldurii e aproape gratuită. Un boiler de 200–300 de litri dus la o temperatură mai mare la prânz ține apa caldă până a doua zi dimineața. Strategia e toată aici: **„supraîncarci” boilerul în fereastra de surplus fotovoltaic, iar în afara ei doar menții temperatura.** În practică: un setpoint de 46–48 °C în cea mai mare parte a zilei, ridicat la 55–60 °C în orele de producție (de exemplu între 11:00 și 15:00). Dușul de seară merge pe soare stocat.

## Trei niveluri de implementare

**Nivelul 1 — programul integrat.** Orice pompă de căldură are programe orare: setează o țintă mai mare pentru apa menajeră într-o fereastră fixă, la mijlocul zilei. Nu costă nimic și funcționează de azi. Limita e evidentă: fereastra e rigidă, producția nu.

**Nivelul 2 — intrarea smart grid.** Aproape toate pompele fabricate în ultimii zece ani au un contact în stil SG Ready: închiderea lui forțează un mod de boost. Leagă-l la un releu comandat de sistemul tău de automatizare și pompa începe să răspundă la un semnal de tipul „există surplus”.

**Nivelul 3 — control pe bază de prognoză.** Ăsta e avantajul față de o logică bazată doar pe contor: o prognoză știe *dinainte* dacă ziua de azi are sau nu o fereastră de surplus și în ce ore cade. Într-o zi acoperită, pompa nu stă să aștepte un soare care nu vine, ci încălzește în ora cea mai ieftină din tariful tău. În Home Assistant îți trebuie două piese: un senzor de prognoză (Volcast expune energia prevăzută pentru azi și pentru mâine, plus un indicator al orei de vârf, prin HACS; necesită Premium) și o automatizare condiționată.

## Încălzirea casei: aici mergi mai atent

Iarna e sezonul incomod: pompa cere maximum exact atunci când acoperișul dă minimum. Prognoza ajută și aici. În zilele senine de iarnă poți urca setpointul de ambient cu 1–1,5 °C în orele de la mijlocul zilei și să „parchezi” căldură în șapă și în pereți. Cât de bine funcționează depinde de inerția termică a clădirii: într-o casă bine izolată, cu încălzire în pardoseală, surprinzător de bine.

Sezonul de încălzire în România ține în general din noiembrie până în martie, dar nu la fel peste tot. În Transilvania și în nordul Moldovei e mai lung și mai rece, deci pompa lucrează mai multe ore pe energie luată din rețea, iar sincronizarea cu producția aduce mai puțin în valoare absolută. În sud și pe litoral sezonul e mai scurt, iar zilele senine și geroase — exact cele în care panourile merg bine — sunt mai numeroase.

## Cazul românesc: vara problema e răcirea

Pentru multe case din Câmpia Română, din Oltenia și din Dobrogea, sarcina dominantă a verii nu e încălzirea, ci climatizarea. La 35–40 °C, aparatele merg ore în șir, iar consumul urcă exact în intervalul în care sistemul produce cel mai mult. Vestea bună: aici cele două vârfuri se suprapun aproape perfect. Raționamentul e identic și dacă nu ai o pompă de căldură propriu-zisă, ci doar aparate split de aer condiționat — care sunt, tehnic, tot pompe de căldură.

Trei mișcări concrete:

- **Prerăcește în orele de producție.** Coboară cu 1–1,5 °C între 12:00 și 16:00, cât timp există surplus, în loc să pornești de la zero la ora 19, când casa e deja încinsă și acoperișul nu mai dă nimic.
- **Folosește inerția casei.** Jaluzelele și obloanele trase în orele cu soare puternic fac răcoarea acumulată să țină mult mai mult; fără ele răcești strada.
- **Evită pornirea în vârful de seară.** Un aparat care pornește la 19:00–20:00 lucrează aproape integral pe energie luată din rețea. Mutat cu câteva ore mai devreme, dă același confort, dar pe autoconsum.

Chiar și un split fără automatizare se poate gestiona: aproape toate au un timer săptămânal, iar în Home Assistant se comandă prin integrare nativă sau printr-o telecomandă în infraroșu legată la aceeași automatizare care citește prognoza.

În Transilvania situația e inversă: nevoia de răcire e mai mică, sezonul de încălzire mai lung, iar câștigul principal rămâne apa caldă menajeră, care se consumă tot anul.

## La ce să fii atent

**Legionella:** dacă scazi temperatura de bază a apei menajere, păstrează ciclul săptămânal de dezinfecție (60 °C sau mai mult). **Cicluri prea scurte:** nu lăsa pompa să pornească și să se oprească în jurul pragului de surplus; o fereastră lungă valorează mai mult decât zece porniri scurte. **COP:** încălzirea apei la 60 °C scade randamentul; cu energie de surplus socoteala iese oricum, dar nu depăși necesarul real.

## Întrebări frecvente

**Merge cu orice pompă de căldură?**
Prin programe orare, cu toate. Prin intrarea smart grid, cu majoritatea modelelor din ultimii zece ani. Prin automatizare completă pe prognoză, cu tot ce poți atinge din Home Assistant: integrare nativă, Modbus sau comanda rezistenței electrice de rezervă.

**Cât se economisește?**
Depinde de profilul tău de consum de apă caldă: mutarea a 3–5 kWh pe zi de pe rețea pe surplus înseamnă, pe tot sezonul de producție, o economie lunară de ordinul zecilor de lei în sus.

**Și într-o casă fără fotovoltaic?**
Același mecanism funcționează pe un tarif diferențiat pe zone orare: în loc de fereastra de surplus țintești orele ieftine, de regulă noaptea. Condiția e să ai efectiv o ofertă diferențiată — verific-o în contract, pentru că majoritatea gospodăriilor din România sunt pe tarif nediferențiat, la care ora nu schimbă prețul.
