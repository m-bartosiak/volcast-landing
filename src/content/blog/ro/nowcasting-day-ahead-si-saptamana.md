---
title: "Nowcasting, day-ahead și o săptămână — ce precizie ai"
description: "O prognoză la 15 minute și una la 7 zile sunt probleme diferite. Iată ce poate da realist fiecare orizont de timp și unde se rupe acuratețea."
date: 2026-05-19
tags: ["nowcasting", "forecast-horizon", "accuracy", "time-series", "forecasting"]
series: "deep-dives"
seriesOrder: 6
lang: ro
draft: false
seo:
  ogTitle: "Acuratețea prognozei fotovoltaice pe orizonturi — de la nowcasting la o săptămână"
  keywords: ["nowcasting fotovoltaic", "acuratete prognoza ziua urmatoare", "orizont de prognoza fotovoltaica", "prognoza solara pe termen scurt"]
relatedPosts: ["prognoza-model-fizic-sau-machine-learning", "norii-cea-mai-grea-variabila", "de-unde-vin-prognozele-meteo"]
---

Nu toate prognozele sunt aceeași problemă. Să prezici cât produc panourile tale în următoarele 30 de minute, mâine și săptămâna viitoare cere surse de date diferite, metode diferite și livrează niveluri de acuratețe foarte diferite.

Dacă înțelegi ce poate oferi realist fiecare orizont de timp, folosești prognoza mai bine — și nu mai ești dezamăgit când o prognoză la 5 zile nu e precisă la kilowatt-oră.

## Prognoza imediată (nowcasting): următoarele 0–6 ore

Prognoza imediată e cel mai scurt orizont. Răspunde la întrebarea: „cât vor produce panourile mele în următoarele minute sau ore?”

Cele mai bune abordări de nowcasting nu se bazează deloc pe modele NWP. În schimb, folosesc:

**Imagini satelitare** — sateliții geostaționari fotografiază câmpurile de nori la fiecare 5–15 minute. Urmărind cum se mișcă norii între cadre, poți extrapola poziția lor cu 30–120 de minute înainte. Această abordare, cu vectori de mișcare a norilor, prinde condițiile actuale mult mai bine decât un model meteo inițializat acum 3–6 ore.

**Camere de cer** — o cameră fisheye montată la sol, la instalație sau în apropiere, fotografiază cerul în fiecare minut. Procesarea de imagine detectează norii, le estimează viteza și direcția și prezice când îți vor umbri exact panourile tale. Asta îți dă prognoze hiperlocale, cu rezoluție de 1–5 minute.

**Date de producție în timp real** — dacă produci acum 3,8 kW și condițiile sunt stabile, următoarele 15 minute vor fi probabil aproape de 3,8 kW. Modelele de persistență (care presupun că se mențin condițiile actuale) sunt surprinzător de eficiente pe orizonturi foarte scurte.

**Acuratețe:** pentru fereastra de 0–30 de minute, metodele de persistență și cele bazate pe satelit pot atinge erori medii absolute de 5–10% din puterea instalată, în condiții stabile. În timpul tranzițiilor de nori, erorile sar în sus, dar revin repede.

**Limitare:** prognoza imediată nu poate prezice schimbări de vreme care încă nu au început. Un sistem noros care se formează la 50 km distanță nu apare în extrapolarea satelitară decât când e mult mai aproape.

## Intrazilnic: 6–24 de ore înainte

Acest orizont acoperă „producția rămasă pe ziua de azi” și „dimineața de mâine”. Aici modelele NWP devin sursa principală de date, iar rularea lor cea mai recentă e încă rezonabil de proaspătă.

Atmosfera are predictibilitate limitată la această scară — starea actuală constrânge ce se poate întâmpla în următoarele 12–24 de ore, dar procesele de mezoscară (dezvoltarea norilor convectivi, briza de mare, efectele de relief) introduc incertitudine semnificativă.

**Acuratețe:** prognozele pentru ziua următoare, la nivel de energie totală zilnică, se încadrează tipic în 15–25% față de producția reală, raportat la puterea instalată. Orele individuale pot devia mai mult — mai ales în intervalul 11:00–15:00, când norii convectivi sunt cel mai probabili.

**Ce funcționează:** modelele bazate pe fizică strălucesc aici, pentru că prezic corect forma curbei de producție (creșterea de dimineață, momentul vârfului, scăderea de seară) pornind de la geometrie. Chiar dacă energia totală e greșită din cauza norilor, forma curbei e constrânsă fizic și e de obicei corectă.

**Ce nu funcționează:** momentul exact al norilor. Prognoza poate anunța o scădere de 40% a producției la ora 14, când ea se produce de fapt la ora 11, sau invers. Impactul total al norilor pe zi poate fi asemănător, dar decalajele de sincronizare sunt frustrante pentru oricine își planifică acțiuni pe ore precise.

## Termen scurt: 1–3 zile înainte

La acest interval, modelele NWP încă oferă indicații utile, dar predicțiile la scara norilor devin tot mai incerte. Prognozele de temperatură rămân bune (în limita a 2–3 °C). Configurațiile meteo de scară mare (presiune ridicată = însorit, trecere de front = înnorat) sunt bine surprinse.

**Acuratețe:** totalurile zilnice se încadrează în 20–30% pentru zilele 2 și 3. Profilurile orare devin orientare, nu predicție — „predominant însorit, cu posibili nori după-amiaza”, nu „vârf la 13:47”.

**La ce e bun:** să alegi ziua în care pornești mașina de spălat, să decizi dacă merită să amâni o sarcină mare consumatoare pentru mâine, planificarea generală a consumului pentru zilele următoare.

## Termen mediu: 4–7 zile înainte

La acest interval, modelele meteo prind configurațiile de scară mare, dar se chinuie cu detaliile. Natura haotică a atmosferei face ca erori mici din condițiile inițiale să crească exponențial — fenomenul cunoscut drept „efectul fluturelui”, care nu e doar o metaforă, ci o proprietate matematică reală a dinamicii atmosferice.

**Acuratețe:** totalurile zilnice pot fi în limita a 30–40%. Orele individuale sunt practic zgomot. Prognoza îți poate spune „joi va fi mai însorit decât miercuri”, dar nu „joi vei produce 22,3 kWh”.

**La ce e bun:** planificarea energetică pe săptămână, decizia dacă să te aștepți la o săptămână în general însorită sau înnorată, programarea aproximativă a unei lucrări de întreținere sau a spălării panourilor.

## Termen extins: 1–2 săptămâni și mai departe

Peste o săptămână, prognozele meteo deterministe pierd aproape toată precizia specifică. Prognozele de tip ansamblu (rularea modelului de mai multe ori, cu condiții inițiale ușor diferite) oferă indicații probabilistice — „70% șanse de condiții solare peste medie săptămâna viitoare” — dar nu cifre concrete de producție.

Prognozele sezoniere (1–3 luni) există pentru tendințe generale, dar sunt și mai puțin specifice. Pot indica „mai cald și mai uscat decât media” pentru sezonul care vine, ceea ce se traduce vag prin „probabil producție solară decentă”.

**La ce e bun:** bugetarea energetică pe termen lung, compararea producției cumulate așteptate cu cea reală, înțelegerea tiparelor sezoniere.

## Ce livrează Volcast

Volcast se concentrează pe orizontul zilei următoare — punctul dulce în care prognoza bazată pe fizică oferă cea mai multă valoare practică. Primești o curbă orară de producție pentru ziua următoare, actualizată pe măsură ce apar date meteo proaspete.

Acesta e orizontul acționabil: destul de aproape încât modelele meteo să dea predicții utile despre nori, destul de departe încât să îți poți planifica consumul de mâine și acoperind o zi întreagă, ca să vezi forma completă a curbei de producție.

Prognoza nu se preface că e precisă pe orizonturi lungi, unde fizica nu susține așa ceva. Și nu încearcă prognoză imediată în timp real, care cere altă infrastructură (fluxuri satelitare, telemetrie de producție) și e o provocare separată.

Pentru ziua următoare, oră cu oră, pe bază de fizică. Acolo e cel mai bun raport semnal-zgomot.
