---
title: "Lumină directă și difuză — de ce produci și pe nori"
description: "Nu toată radiația solară e la fel. Cele trei componente ale luminii explică de ce panourile produc curent și în zilele complet acoperite de nori."
date: 2026-03-31
tags: ["irradiance", "diffuse-radiation", "direct-beam", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 3
lang: ro
draft: false
seo:
  ogTitle: "Radiație directă și difuză — de ce panourile produc și pe cer acoperit"
  keywords: ["radiatie directa si difuza", "panouri fotovoltaice pe timp innorat", "iradianta difuza", "GHI DNI DHI explicate"]
---

Una dintre cele mai frecvente întrebări ale celor care tocmai și-au montat panouri pe acoperiș: „produc ceva panourile mele când e înnorat?”. Răspunsul e da, iar uneori surprinzător de mult. Ca să înțelegi de ce, trebuie să știi că lumina care ajunge pe acoperișul tău nu e un singur lucru. Sunt trei.

## Cele trei componente ale radiației solare

Fiecare watt de energie solară care lovește panoul tău ajunge acolo pe una dintre cele trei căi de mai jos.

### Iradianța directă normală (DNI)

Este lumina care călătorește în linie dreaptă de la soare la panoul tău, fără să fie împrăștiată sau absorbită pe drum. Într-o zi senină e componenta dominantă: lumina cu umbre tăiate net, cea care încinge suprafețele și te face să mijești ochii.

Un lucru merită lămurit din start: „normală” înseamnă aici perpendiculară pe razele soarelui, nu „obișnuită”. DNI se măsoară pe o suprafață ținută perpendicular pe direcția din care vine lumina.

DNI e puternic direcțională. Îi pasă enorm de unghiul dintre panoul tău și soare. Panourile orientate direct spre soare primesc DNI maxim; cele așezate oblic primesc proporțional mai puțin, după legea cosinusului.

Într-o zi perfect senină, la amiaza solară, în România DNI poate depăși 800–900 W/m² pe o suprafață perpendiculară pe razele soarelui.

### Iradianța difuză orizontală (DHI)

Este lumina împrăștiată de atmosferă: de moleculele de aer (împrăștiere Rayleigh), de aerosoli (praf, poluare) și mai ales de nori. În loc să vină dintr-o singură direcție, lumina difuză vine din toată bolta cerească.

Într-o zi senină, DHI e relativ modestă, undeva la 80–150 W/m². Dar pe cer complet acoperit devine **singura** sursă de iradianță și poate livra în continuare 100–300 W/m², în funcție de grosimea și tipul norilor.

De asta produc panourile tale și în zilele mohorâte. Chiar și când norii groși blochează orice urmă de lumină directă, cerul continuă să împrăștie lumină spre sol din toate direcțiile.

Ceața de iarnă din Câmpia Română e cazul de manual: soarele nu se vede deloc ore în șir, dar invertorul raportează totuși producție. Toată vine din componenta difuză.

### Radiația reflectată de sol

A treia componentă e lumina care se lovește de sol sau de suprafețele din jur înainte să ajungă pe panou. E mai mică decât celelalte două, dar nu neglijabilă, mai ales dacă panourile sunt înclinate (o înclinare mai mare interceptează mai multă lumină reflectată) și dacă solul e foarte reflectant.

Zăpada proaspătă reflectă 60–80% din lumina primită. Iarba verde reflectă în jur de 20%. Solul închis la culoare sau asfaltul: 10–15%. În zonele cu strat de zăpadă persistent, cum sunt Carpații și podișurile înalte, reflexia poate adăuga vizibil la producția de iarnă.

Reflectivitatea solului se numește **albedo** și îi vom explora importanța geografică într-un articol viitor.

## GHI: cifra pe care o vezi de obicei

Majoritatea stațiilor meteo și a surselor de date solare raportează **iradianța globală orizontală (GHI)** — puterea solară totală care cade pe o suprafață plană, orizontală. GHI e pur și simplu:

**GHI = DNI × cos(unghi zenital) + DHI**

Aceasta e mărimea standard, dar nu e ce primește panoul tău înclinat. Conversia din GHI în iradianța de pe suprafața ta înclinată cere un **model de transpoziție** — un pas matematic care separă componentele și le recombină pentru orientarea panourilor tale. Revenim asupra lui într-un articol viitor.

## Cum raportul dintre componente schimbă totul

Proporția dintre radiația directă și cea difuză variază dramatic cu condițiile meteo, iar aici devine prognoza cu adevărat interesantă.

**Cer senin:** 70–85% direct, 15–30% difuz. Orientarea panourilor contează enorm.

**Parțial noros:** 30–60% direct, 40–70% difuz. Fluctuații sălbatice pe măsură ce trec norii. Poți vedea variații de putere de 50% în câteva minute.

**Cer complet acoperit:** 0–10% direct, 90–100% difuz. Înclinarea contează mult mai puțin, pentru că lumina vine de peste tot. Un panou orizontal și unul la 35° primesc cantități apropiate.

**Nori subțiri de mare altitudine (cirrus):** 50–70% direct, 30–50% difuz. Funcționează ca un filtru natural, reduc blând DNI și cresc DHI.

Asta are o consecință practică: în zonele cu multe zile acoperite — depresiunile Transilvaniei și Câmpia Română în noiembrie–ianuarie — unghiul optim de înclinare e de fapt mai mic decât ar sugera calculele teoretice pentru cer senin, pentru că aduni în principal lumină difuză.

## Surpriza zilelor cu nori

În unele zile parțial noroase poți vedea puterea instantanee urcând *peste* valoarea de cer senin. Fenomenul se numește **intensificare prin nori** (cloud enhancement): lumina reflectată de marginile norilor se adaugă radiației directe și creează pentru scurt timp niveluri de iradianță imposibile pe cer perfect senin.

E un fenomen real, bine documentat în literatură. Invertorul tău poate raporta pentru câteva minute o putere peste cea nominală a panourilor. Nu e o eroare de măsurare, e fizica lucrând în favoarea ta, pentru o dată.

## De ce contează pentru prognoză

Un model de prognoză care estimează doar „câtă lumină totală” fără să o descompună în componenta directă și cea difuză va face erori sistematice:

Va **supraestima** producția în zilele acoperite pentru panourile foarte înclinate, care ratează o bună parte din lumina difuză venită din partea opusă a cerului.

Va **subestima** producția în zilele acoperite pentru panourile mai apropiate de orizontală, care adună eficient lumina difuză din toată bolta.

Și va rata complet **volatilitatea zilelor parțial noroase**, cea care produce salturile rapide de putere.

Volcast tratează asta modelând fiecare componentă separat. Prognoza meteo furnizează nebulozitatea și datele atmosferice; motorul fizic descompune rezultatul în DNI și DHI; modelul de transpoziție le convertește pe suprafața ta înclinată; iar modelul fotovoltaic calculează producția electrică rezultată.

E mai complicat decât un simplu tabel de corespondență, dar așa funcționează fizica în realitate — și de asta prognoza rămâne corectă fie că ziua ta e senină, acoperită sau haotic amestecată.
