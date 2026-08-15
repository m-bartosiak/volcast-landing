---
title: "Călătoria radiației: din spațiu până la panoul tău"
description: "Urmărește o rază de soare de la marginea atmosferei, prin difuzie, absorbție, nori și reflexie, până ajunge pe panoul tău înclinat și devine curent."
date: 2026-05-05
tags: ["irradiance", "atmospheric-physics", "solar-spectrum", "pv-physics", "forecasting"]
series: "deep-dives"
seriesOrder: 4
lang: ro
draft: false
seo:
  ogTitle: "Din spațiu până la panoul fotovoltaic — călătoria completă a radiației"
  keywords: ["iradianta solara atmosfera", "cum ajunge lumina la panouri fotovoltaice", "atenuare atmosferica radiatie solara", "etape model iradianta"]
relatedPosts: ["lumina-directa-si-lumina-difuza", "norii-cea-mai-grea-variabila", "modele-de-transpozitie"]
---

Un foton pleacă de la suprafața Soarelui cu 300.000 km/s. Opt minute și douăzeci de secunde mai târziu intră în atmosfera Pământului. Ce se întâmplă mai departe — în ultima sută de kilometri dintr-o călătorie de 150 de milioane de kilometri — decide dacă ajunge curent electric pe acoperișul tău sau căldură pe asfalt.

Iată lanțul complet pe care o prognoză bazată pe fizică trebuie să îl modeleze.

## Pasul 1: Iradianța extraterestră

Deasupra atmosferei, radiația solară e remarcabil de previzibilă. **Constanta solară** — puterea pe metru pătrat, pe o suprafață perpendiculară pe razele soarelui, la distanța medie a Pământului — e de aproximativ 1.361 W/m².

Valoarea variază ușor (~3,4%) din cauza orbitei eliptice a Pământului. Suntem cel mai aproape de Soare la începutul lui ianuarie (periheliu) și cel mai departe la începutul lui iulie (afeliu). Contraintuitiv, emisfera nordică primește iarna puțin mai multă iradianță extraterestră decât vara. Efectul e mic, dar un model fizic îl ia în calcul.

Producția Soarelui fluctuează și cu ciclul petelor solare de 11 ani, însă cu mai puțin de 0,1% — neglijabil pentru prognoza fotovoltaică.

## Pasul 2: Masa de aer și lungimea drumului

Lumina intră în atmosferă sub un unghi dat de înălțimea soarelui. Când soarele e exact la zenit (unghi zenital 0°), lumina parcurge cel mai scurt drum prin atmosferă — definit ca masă de aer 1,0 (AM1.0).

Pe măsură ce soarele coboară spre orizont, drumul se lungește. La un unghi zenital de 60°, lumina traversează de două ori mai multă atmosferă (AM2.0). La apus, masa de aer poate depăși 30.

Mai multă atmosferă înseamnă mai multă atenuare. De asta panourile tale produc mult mai puțin la ora 7 decât la prânz, chiar dacă sunt orientate spre est — lumina a fost filtrată prin mai mult aer. Tot de asta performanța panourilor e raportată la AM1.5 (soarele la circa 48° înălțime) — un compromis standardizat între situația de la zenit și cea de la orizont.

## Pasul 3: Difuzia Rayleigh

Moleculele de aer (azot, oxigen) difuzează lumina solară. Lungimile de undă scurte (albastru, violet) se difuzează mai mult decât cele lungi (roșu). De asta cerul e albastru — vezi lumină de lungime de undă scurtă, împrăștiată din toate direcțiile.

Pentru fotovoltaic, difuzia Rayleigh redirecționează o parte din radiația directă în radiație difuză de cer. Efectul se calculează din presiunea atmosferică și unghiul soarelui, cu ecuații binecunoscute. Reduce iradianța directă cu aproximativ 10–15% pe cer senin și mută acea energie în componenta difuză.

## Pasul 4: Absorbția și difuzia pe aerosoli

Aerosolii — praf, particule de poluare, sare marină, fum, polen — difuzează și absorb lumina mult mai puternic decât moleculele de aer curat. Spre deosebire de difuzia Rayleigh, efectele aerosolilor depind mult de condițiile locale și sunt mai greu de prezis.

În aer maritim curat, adâncimea optică a aerosolilor (AOD) poate fi 0,05 — abia sesizabilă. Într-un oraș continental poluat, în timpul unui episod de smog, AOD poate ajunge la 0,5–1,0, reducând iradianța directă cu 30–50%.

Pentru România, valorile tipice de AOD merg de la 0,1 (aer curat de iarnă) la 0,3 (ceață uscată de vară, arderi agricole). Episoadele de praf saharian ajung regulat până la noi, mai ales primăvara, și cresc AOD semnificativ pentru câteva zile.

Modelele NWP includ prognoze de aerosoli, dar acestea sunt mai grosiere decât variabilele meteorologice. Majoritatea prognozelor solare folosesc date climatologice de aerosoli (medii lunare), nu prognoze de aerosoli în timp real.

## Pasul 5: Absorbția de ozon și de gaze

Ozonul din stratosferă absoarbe radiația ultravioletă — important pentru biologie, mai puțin pentru fotovoltaic, pentru că majoritatea fotonilor UV au oricum mai multă energie decât banda interzisă a siliciului (surplusul devine căldură prin termalizare).

Vaporii de apă din troposferă absorb anumite lungimi de undă din infraroșu, creând benzi de absorbție care reduc iradianța totală. Efectul depinde de conținutul de apă precipitabilă, care variază cu umezeala și e inclus în ieșirile modelelor NWP.

CO₂, metanul și celelalte gaze cu efect de seră au efecte minore de absorbție, la lungimi de undă specifice. Sunt practic constante și sunt deja încorporate în modelele atmosferice standard.

## Pasul 6: Atenuarea de către nori

Norii sunt cel mai puternic modificator al iradianței la sol, iar complexitatea lor am tratat-o într-un articol separat. În lanțul iradianței, norii acționează și ca absorbanți, și ca difuzori: reduc dramatic radiația directă și o transformă parțial în radiație difuză.

Fizica e complicată: grosimea optică a norului depinde de conținutul de apă lichidă, de distribuția dimensiunilor picăturilor și de dezvoltarea pe verticală a norului. Un cirrus subțire poate avea o grosime optică de 0,5–2 și lasă să treacă cea mai mare parte a luminii. Un cumulonimbus gros poate depăși grosimea optică 100, blocând practic toată radiația directă.

Un model fizic are nevoie de proprietățile optice ale norilor din prognoza meteo. Cele mai multe modele NWP oferă fracția totală de acoperire cu nori, iar unele oferă și conținutul de apă din nori, din care se poate estima grosimea optică.

## Pasul 7: Sosirea la sol — GHI

După ce supraviețuiește atmosferei, radiația solară ajunge la sol ca **iradianță globală orizontală (GHI)** — puterea solară totală pe o suprafață orizontală plană. E suma dintre radiația directă (proiectată pe orizontală) și radiația difuză de cer.

Într-o zi senină de vară, la latitudinile României, GHI de vârf ajunge la circa 850–1.000 W/m². Într-o zi complet acoperită poate fi 100–300 W/m². Acestea sunt valorile pe care le măsoară stațiile meteo și pe care le prezic modelele NWP.

Dar GHI nu e ce primesc panourile tale — pentru că panourile tale nu sunt orizontale. Conversia GHI în iradianța de pe suprafața ta înclinată cere încă un pas.

## Pasul 8: Transpoziția pe suprafața ta înclinată

Acest ultim pas — tratat pe larg în articolul următor — ia componentele orizontale ale iradianței (directă și difuză) și calculează ce ajunge la orientarea concretă a panourilor tale. Ține cont de unghiul de incidență pentru radiația directă, de factorul de vedere a cerului pentru radiația difuză și de radiația reflectată de sol, în funcție de albedo.

Pasul de transpoziție e locul unde înclinarea și azimutul pe care le introduci contează cel mai mult. Un panou orientat spre sud, la 35°, montat în București, primește un profil de iradianță foarte diferit de un panou orientat spre vest, la 20°, deși stau sub același cer.

## Lanțul complet

Puse cap la cap: iradianță extraterestră → atenuare prin masa de aer → difuzie Rayleigh → efecte de aerosoli → absorbție de gaze → atenuare de către nori → GHI la sol → transpoziție pe suprafața înclinată → corecție pentru temperatura celulei → putere electrică la ieșire.

Fiecare pas e guvernat de fizică. Fiecare pas introduce o doză de incertitudine. Efectul cumulat e o prognoză care surprinde comportamentul de fond al sistemului, moștenind în același timp limitele prognozei meteo — în principal la capitolul nori.

Asta calculează Volcast pentru fiecare oră din fiecare prognoză. Nu un tabel de căutare. Nu o regresie statistică. Lanțul fizic propriu-zis, calculat din cele trei date de intrare ale tale și din cele mai bune date meteo disponibile.
