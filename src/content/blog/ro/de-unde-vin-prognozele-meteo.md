---
title: "De unde vin prognozele meteo — modelele NWP pe scurt"
description: "Prognoza ta de producție valorează cât intrarea ei meteo. Cum funcționează modelele numerice, ce prind bine și unde cedează pentru fotovoltaic."
date: 2026-04-21
tags: ["nwp", "weather-models", "gfs", "ecmwf", "icon", "forecasting"]
series: "deep-dives"
seriesOrder: 2
lang: ro
draft: false
seo:
  ogTitle: "Modelele meteo explicate pentru prosumatori — GFS, ECMWF, ICON, ALARO"
  keywords: ["prognoza numerica a vremii fotovoltaic", "modele meteo GFS ECMWF ICON", "rezolutie model meteo", "modele NWP explicate", "date meteo pentru panouri fotovoltaice"]
---

Orice prognoză de producție fotovoltaică este, în esență, o prognoză meteo cu câțiva pași în plus. Poți avea cel mai sofisticat model PV din lume: dacă intrarea meteo spune „senin” și afară plouă, prognoza ta de producție va fi greșită.

De unde vin, așadar, datele meteo? Și de ce dau surse diferite rezultate diferite?

## Mașinăria meteo globală

Prognoza modernă a vremii se bazează pe **prognoza numerică a vremii (NWP — numerical weather prediction)**: simulări uriașe pe calculator care modelează întreaga atmosferă folosind ecuații fizice. Nu sunt extrapolări simple ale condițiilor curente. Sunt simulări complete de dinamica fluidelor, care rezolvă ecuațiile Navier-Stokes pentru curgerea atmosferică, cuplate cu termodinamică, fizica radiației și procesele umidității.

Totul începe cu **asimilarea datelor**: miliarde de observații de la sateliți, stații meteo, radiosonde (baloane meteorologice), aeronave, nave și geamanduri sunt introduse în model pentru a construi o fotografie a stării actuale a atmosferei. Apoi modelul avansează în timp, calculând cum evoluează atmosfera minut cu minut.

Principalele modele globale care alimentează majoritatea prognozelor solare sunt:

**GFS (Global Forecast System)** — rulat de NOAA (SUA). Gratuit și deschis. Rezoluția grilei: circa 13 km (0,25°). Se actualizează la fiecare 6 ore. Prognoze până la 16 zile. GFS e calul de povară al datelor meteo gratuite. Printre ieșirile lui relevante pentru fotovoltaic sunt nebulozitatea totală, temperatura, viteza vântului și fluxul de radiație de undă scurtă la sol (practic GHI la suprafață).

**ECMWF (Centrul European pentru Prognoze Meteo pe Termen Mediu)** — considerat pe scară largă cel mai bun model global. Rezoluția grilei: circa 9 km (0,1°). Se actualizează la fiecare 6 ore. Tratează superior tiparele meteo europene. Datele ECMWF sunt parțial comerciale: rezoluția completă cere licență plătită, deși produsele cu rezoluție mai mică sunt disponibile liber. E și modelul global pe care ANM îl folosește pentru prognozele de până la zece zile.

**ICON (Icosahedral Nonhydrostatic)** — rulat de DWD (serviciul meteorologic german). Date deschise din 2023. Versiunea globală la circa 13 km, cu o grilă europeană imbricată (ICON-EU) la circa 6,5 km, care acoperă și România. Se descurcă bine cu tiparele din Europa Centrală și de Est, deci e direct relevant pentru un prosumator din țară.

## Modelele regionale rulate în România

Peste modelele globale se suprapun modele cu arie limitată, rulate local, care „coboară” prognoza la o grilă mai fină pe teritoriul țării.

Administrația Națională de Meteorologie (ANM) integrează operațional pe platforma proprie de calcul modele de acest tip. **ALARO** rulează la o rezoluție orizontală de circa 6,5 km, de patru ori pe zi (cu condiții inițiale la 00, 06, 12 și 18 UTC), cu orizonturi de aproximativ două-trei zile. **COSMO** rulează la aproximativ 7 km, iar o variantă la circa 2,8 km coboară și mai mult scara.

De ce contează asta pentru tine: relieful României — bariera Carpaților, câmpiile din sud, litoralul — creează efecte locale pe care o grilă globală de 13 km le netezește pur și simplu. Un model regional le poate prinde parțial. Revenim pe larg asupra acestui subiect într-un articol dedicat.

## Ce produc efectiv modelele NWP

Pentru prognoza fotovoltaică, ieșirile critice sunt:

**Nebulozitatea** — de obicei dată ca fracție totală de acoperire (0–100%), uneori împărțită pe straturi de nori înalți, medii și joși. E cea mai importantă variabilă pentru prognoza PV și, în același timp, cea mai greu de prezis corect.

**Temperatura** — temperatura aerului la 2 m, folosită pentru estimarea temperaturii celulei și pentru aplicarea reducerii de putere cu temperatura.

**Viteza și direcția vântului** — influențează temperatura celulei prin răcire convectivă. O zi cu vânt înseamnă panouri mai reci și un randament ușor mai bun.

**Radiația solară la suprafață** — unele modele produc direct iradianța globală orizontală (GHI) sau componentele ei. E variabila cea mai direct utilă, dar e calculată în interiorul modelului din aceleași date de nori și atmosferă, deci moștenește incertitudinile lor.

**Umiditatea și încărcarea cu aerosoli** — afectează transparența atmosferei și raportul dintre radiația directă și cea difuză.

## Problema rezoluției

Când spunem că GFS are „rezoluție de 13 km”, înseamnă că fiecare celulă a grilei acoperă aproximativ 13 km × 13 km. Modelul calculează un singur set de condiții atmosferice pentru toată suprafața aceea.

Instalația ta fotovoltaică ocupă poate 40 de metri pătrați.

Această nepotrivire de scară are consecințe reale. Un nor cumulus lat de 2 km îți poate umbri panourile 20 de minute, dar dacă stă într-o celulă altfel senină, modelul poate raporta 10% nebulozitate pentru toată celula — ceea ce se traduce într-o reducere blândă, mediată, a iradianței, nu în tiparul brusc de tip pornit-oprit pe care îl trăiești tu.

O rezoluție mai bună ajută. O grilă de 2,8 km începe să distingă celulele convective individuale. Dar și 2,8 km e enorm față de acoperișul tău.

De asta **toate prognozele solare au un prag de incertitudine** pe care niciun rafinament al modelării PV nu îl poate depăși. Modelul meteo pur și simplu nu poate vedea ce se întâmplă exact la locația ta cu precizia pe care o resimt panourile tale.

## Orizontul de prognoză și degradarea acurateței

Acuratețea NWP scade cu timpul, iar ritmul degradării diferă de la o variabilă la alta:

Prognozele de **temperatură** sunt relativ stabile. Pentru ziua următoare, eroarea e de regulă de 1–2 °C, iar chiar și prognozele la trei zile sunt rezonabile. Temperatura se schimbă lent și e bine constrânsă de tiparele atmosferice de mare scară.

**Nebulozitatea** se degradează mult mai repede. Prognozele de nori pentru ziua următoare sunt utile, dar deseori greșesc momentul și gradul de acoperire. Începând cu ziua a treia, predicțiile punctuale de nori sunt nesigure: modelul îți poate spune „parțial noros”, dar nu dacă norii vor fi deasupra acoperișului tău la ora 14.

**Iradianța solară** moștenește incertitudinea nebulozității. Totalurile zilnice prognozate cu o zi înainte pot avea o eroare medie de 15–20%. Valorile oră cu oră pot greși cu 50% sau mai mult în condiții de nebulozitate variabilă.

Acest tipar de degradare contează pentru felul în care folosești prognoza. Pentru ziua următoare: îți planifici consumul. La trei zile: doar planificare orientativă. La o săptămână: cel mult o tendință generală.

## Ciclurile de actualizare

Modelele globale NWP rulează de obicei la fiecare 6 ore (00, 06, 12 și 18 UTC). Fiecare rulare durează una-trei ore de calcul, deci în momentul în care datele devin disponibile ele au deja câteva ore vechime. O prognoză generată din rularea de la 00 UTC poate deveni disponibilă abia la 03–04 UTC.

Pentru prognoza fotovoltaică asta înseamnă că prognozele de dimineață pentru „azi” se bazează pe date atmosferice de acum câteva ore. Condițiile se pot schimba, mai ales în cazul norilor convectivi care se dezvoltă rapid în după-amiezile de primăvară și de vară.

Unele modele regionale rulează mai des (orar sau la fiecare trei ore) și oferă date mai proaspete, dar pe o arie geografică mai mică.

## De ce contează mai multe modele

Niciun model NWP nu e cel mai bun peste tot și mereu. GFS poate bate ECMWF pe o anumită traiectorie de furtună. ICON poate nimeri nebulozitatea din Europa Centrală și de Est acolo unde GFS o ratează. Performanța unui model variază cu anotimpul, cu regimul meteo și cu zona geografică.

Sistemele serioase de prognoză folosesc **ansambluri multi-model**: combină ieșirile mai multor modele NWP pentru a reduce abaterile sistematice. Unele rulează și **prognoze de ansamblu** în interiorul aceluiași model: perturbă ușor condițiile inițiale și rulează simularea de mai multe ori, ca să estimeze incertitudinea prognozei.

Pentru cine consumă o prognoză solară, concluzia practică e simplă: nu te încrede absolut într-o singură sursă meteo. Cea mai bună prognoză folosește cele mai bune date meteo disponibile pentru regiunea și orizontul tău de timp și, ideal, recunoaște incertitudinea din intrările ei meteo.

Faptul că înțelegi de unde vin datele meteo nu îți va face prognoza mai precisă — dar te va ajuta să înțelegi de ce în unele zile nimerește la fix, iar în altele ratează. Veriga slabă nu e modelul fotovoltaic. E atmosfera.
