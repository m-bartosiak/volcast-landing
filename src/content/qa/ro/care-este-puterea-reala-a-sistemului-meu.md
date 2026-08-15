---
title: "Care e puterea reală a sistemului meu — kWp sau kW?"
description: "Puterea instalată e suma waților de pe etichetele panourilor, nu kW-ul invertorului. Cum o afli corect și cum se vede în date o valoare greșită."
lang: ro
draft: true
category: "k2"
guide: "cele-trei-numere-ale-sistemului-tau"
translationKey: "qa-real-kwp"
seo:
  ogTitle: "Puterea reală a sistemului: kWp de panouri, nu kW de invertor"
---
Puterea sistemului în kWp e **suma waților de pe etichetele panourilor, atât și nimic altceva**. Douăsprezece panouri de 510 W fac un câmp de 6,12 kWp — chiar dacă invertorul de pe perete scrie 5 kW, chiar dacă oferta instalatorului a rotunjit la „6 kW” și chiar dacă aplicația invertorului îți arată altă cifră. Panourile se măsoară în wați-vârf (Wp) de putere în curent continuu, invertorul în wați de curent alternativ la ieșire. Sunt răspunsuri la două întrebări diferite.

## De ce cele două cifre diferă intenționat

Un invertor mai mic decât câmpul de panouri e inginerie normală, nu o scăpare. Un raport DC/AC între 1,1 și 1,3 e practica uzuală: panourile ating puterea de pe etichetă doar în condiții de laborator, așa că dimensionarea invertorului după vârful real, nu după cel teoretic, costă aproape nimic în energie pierdută și economisește bani reali la echipament. Câmpul tău va fi tăiat (clipping) câteva ore pe an, în jurul prânzului de vară, iar ăsta e compromisul pe care proiectantul l-a făcut deliberat.

Exact de asta puterea invertorului e cifra greșită de trecut într-o prognoză. O prognoză modelează câtă lumină captează panourile — o funcție de suprafață și randament, adică fix ce descrie kWp. Invertorul intră mai târziu în calcul, ca plafon.

## Unde găsești cifra onestă

Eticheta e pe spatele fiecărui panou, iar aceeași valoare apare în fișa tehnică lăsată de instalator. Înmulțește puterea unui panou cu numărul de panouri. Dacă acoperișul are mai multe grupuri orientate diferit, fă suma separat pentru fiecare grup — prognoza are nevoie de ele distinct, pentru că un string spre est și unul spre vest au vârfurile la ore diferite.

Două surse care te induc în eroare: aplicația invertorului, care de obicei raportează puterea lui în curent alternativ, și cifra de pe contract, adesea rotunjită ca să sune rotund.

## Cum arată în date o putere greșit introdusă

Semnătura e un **raport constant**, și exact asta o deosebește de eroarea meteo. Alege cinci-zece zile senine, fără nori, răspândite pe câteva luni, și împarte producția reală la prognoză pentru fiecare zi. Ratările meteo se împrăștie — o zi peste, alta sub. O putere greșită nu se împrăștie: fiecare zi senină cade în jurul aceleiași fracții, pentru că eroarea e un multiplicator fix aplicat fiecărei ore din fiecare zi.

Dacă zilele senine se strâng în jurul lui 0,8, ai trecut cu circa 20% mai multă putere decât ai pe acoperiș. Dacă se strâng în jurul lui 1,2, ai trecut prea puțin — exact ce se întâmplă când cineva scrie cei 5 kW ai invertorului în loc de 6,12 kWp ai panourilor.

## Ce ai de făcut

1. **Numără panourile și citește o etichetă** — număr de panouri înmulțit cu wații, separat pe fiecare orientare de acoperiș. Durează cinci minute și e cea mai valoroasă cifră din configurația ta.
2. **Introdu wați-vârf în curent continuu, nu kW de invertor** — dacă cele două diferă cu 10–30%, e normal și corect.
3. **Verifică raportul în zile senine înainte să dai vina pe prognoză** — un decalaj constant e eroare de configurare, unul împrăștiat e meteo.
4. **Reverifică după orice modificare** — panouri adăugate, un modul înlocuit, un al doilea câmp. O putere introdusă o dată și niciodată revizuită se învechește pe tăcute.
