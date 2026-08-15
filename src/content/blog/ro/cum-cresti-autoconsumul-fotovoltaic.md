---
title: "Cum crești autoconsumul fotovoltaic — 7 metode reale"
description: "Compensarea cantitativă nu face autoconsumul inutil: șapte metode verificate prin care folosești mai mult din energia produsă de panourile tale."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "self-consumption"
seo:
  ogTitle: "Cum crești autoconsumul fotovoltaic — 7 metode"
---
În România calculul nu arată ca în ghidurile străine, unde energia injectată se plătește cu câțiva cenți și de aici rezultă totul. La noi funcționează compensarea cantitativă: 1 kWh injectat se scade din 1 kWh consumat ulterior, până la nivelul consumului tău. Rețeaua chiar se comportă, în limita aceea, ca un depozit foarte ieftin. Legea nr. 160/2026, publicată în Monitorul Oficial nr. 603 din 23.07.2026 și intrată în vigoare pe 26 iulie 2026, menține mecanismul pentru instalațiile de până la 200 kW pe loc de consum până la 31 decembrie 2030.

Atunci de ce mai contează autoconsumul? Din trei motive foarte concrete.

**Compensarea acoperă energia, nu toată factura.** Cantitatea de kWh se compensează, dar tarifele de rețea (distribuție și transport), acciza și TVA rămân legate de energia pe care o consumi din rețea. Uită-te pe factura ta la modul în care sunt separate poziția de furnizare și restul componentelor — Legea 160/2026 cere explicit această separare — și vei vedea că un kWh „recuperat” prin compensare nu e gratuit până la capăt.

**Surplusul peste consumul tău nu se compensează.** El este cumpărat de furnizor, iar prețul este mult sub cel pe care îl plătești tu. În metodologia ANRE aflată în vigoare (Ordinul nr. 15/2022, cu modificările ulterioare) prețul de achiziție este cel al energiei active, din care se scad marja de furnizare și costul estimat de dezechilibru. În oferta de serviciu universal pentru clienți casnici prosumatori a Electrica Furnizare valabilă în trimestrul al doilea din 2026, asta însemna în jur de 0,45 lei/kWh, față de un preț contractual final de circa 1,48–1,57 lei/kWh cu TVA. Cifrele diferă de la furnizor la furnizor și de la o perioadă la alta — caută-le în oferta ta.

**Compensarea are termen.** După 31 decembrie 2030, conform aceleiași legi, instalațiile de până la 200 kW trec pe regulile valabile azi pentru intervalul 200–400 kW, adică decontare financiară la prețul pieței. Obiceiurile pe care ți le formezi acum vor conta și mai mult atunci. Pentru textul oficial și pentru metodologia de aplicare, sursa de referință este ANRE — noua metodologie era încă în lucru la data acestui articol.

O gospodărie fără nicio strategie autoconsumă 20–30% din producție. Cei șapte pași de mai jos te duc realist la 40–60%, iar cu o baterie mai sus.

## 1. Mută consumurile mari în orele de producție

Apa caldă, mașina de spălat, mașina de spălat vase și uscătorul adună împreună 8–10 kWh pe zi de consum ușor de mutat. Doar schimbarea obiceiului de la „electrocasnicele seara” la „electrocasnicele la prânz” poate ridica autoconsumul cu 10–15 puncte procentuale. Strategia oră cu oră o găsești în [Când pornești boilerul și mașina de spălat pe soare →](/blog/ro/cand-pornesti-electrocasnicele-pe-soare).

## 2. Planifică după prognoză, nu după ceas

„Pornește tot la prânz” funcționează prost în zilele înnorate și în afara sezonului. O [prognoză de producție](/blog/ro/prognoza-productiei-fotovoltaice) orară îți spune dacă mâine vei avea surplus și în ce ore — o decizie de 30 de secunde seara, în locul ghicitului de dimineață la fereastră.

## 3. Încălzește apa cu energie electrică

O rezistență în boiler este cea mai ieftină „baterie” care există: surplusul de la prânz devine apă caldă seara. Costul de intrare este o rezistență plus o priză inteligentă sau un contactor, iar consumul absorbit ajunge la 3–6 kWh pe zi. Este și cel mai tolerant consumator: nu contează la ce minut pornește, contează doar să pornească atunci când e soare.

## 4. Automatizează — lasă casa să urmărească surplusul

Home Assistant plus un senzor de prognoză plus prize inteligente: rezistența pornește când producția prevăzută pentru ora următoare depășește un prag și se retrage spre orele ieftine în zilele acoperite. Se configurează o dată și apoi merge singură. Integrarea oficială Volcast pentru Home Assistant (se instalează din HACS și necesită Premium) expune exact valorile de care ai nevoie: energia de azi, energia de mâine și puterea de acum.

## 5. Încarcă mașina electrică din surplus

Dacă mergi pe electric, mașina este cel mai mare consumator din casă: 20–60 kWh pe sesiune. Chiar și o încărcare doar parțial din surplus mișcă acul mai mult decât toate electrocasnicele la un loc. Atenție însă la puterea aprobată în certificatul de racordare: la o racordare monofazată tipică, încărcarea se modulează pe surplus, nu se setează la maximum. Detaliile sunt în [Încărcarea mașinii electrice din surplus fotovoltaic →](/blog/ro/incarcarea-masinii-electrice-din-fotovoltaic).

## 6. Reprogramează pompa de căldură

Ridică temperatura de referință a apei calde menajere în orele de producție și lasă pompa să „supraîncarce” boilerul cât e soare: seara merge pe căldura acumulată. Multe pompe au intrări SG-Ready sau programări orare care se potrivesc natural cu o prognoză. Vara, în Câmpia Română și în Dobrogea, raționamentul se inversează și devine chiar mai profitabil: răcorești casa la prânz, exact când energia este a ta.

## 7. Ia în calcul o baterie, dar întâi măsoară

Stocarea ridică autoconsumul cel mai mult (până la 70–80%), dar este și investiția cea mai mare. Înainte să cumperi, petrece 2–3 luni măsurând câtă energie injectezi în orele în care mai târziu o consumi din rețea — aceea este capacitatea de care ai nevoie cu adevărat, nu cea de pe pliantul comercial. Ține cont și de compensare: atâta timp cât injecția ta rămâne sub consumul anual, rețeaua îți face deja o parte din treabă, iar bateria se justifică mai degrabă prin ce nu acoperă compensarea. La 14 august 2026, programul Casa Verde nu avea o sesiune deschisă, iar ghidul de finanțare pentru 2026 nu era publicat de AFM — verifică pe afm.ro înainte să-ți construiești calculul pe o subvenție.

## De unde începi

Ordinea care maximizează efectul per leu cheltuit: obiceiuri (1–2), rezistență în boiler (3), automatizare (4), mașină electrică și pompă de căldură (5–6), baterie (7). Primii patru pași nu cer investiții importante, ci doar să știi cât vei produce mâine.

## FAQ

**Ce înseamnă un autoconsum „bun”?**
Fără nicio strategie, 20–30%. Cu mutarea consumurilor și apă caldă electrică, 40–60%. Cu baterie, peste 70%. Fiecare punct procentual înseamnă bani reali, mai ales pe partea din factură care nu se compensează.

**Are sens să consum energie doar ca să nu o injectez?**
Nu. Autoconsumul are sens pentru energia pe care oricum ai fi consumat-o: apă caldă, rufe, încărcarea mașinii. Consumul artificial e risipă, nu economie — cu atât mai mult cât timp compensarea cantitativă îți recuperează kWh injectat.

**Cum îmi măsor autoconsumul?**
Din datele invertorului sau ale contorului: (producție − energie injectată) / producție. Energy Dashboard din Home Assistant îl arată direct, dacă ai configurat producția, consumul din rețea și injecția.
