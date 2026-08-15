---
title: "Modele de transpoziție — radiația pe planul înclinat"
description: "Datele meteo spun ce ajunge pe o suprafață orizontală, dar panourile tale sunt înclinate. Puntea matematică dintre cele două se numește transpoziție."
date: 2026-05-12
tags: ["transposition", "perez-model", "irradiance", "panel-orientation", "forecasting"]
series: "deep-dives"
seriesOrder: 5
lang: ro
draft: false
seo:
  ogTitle: "Modele de transpoziție explicate — de la iradianța orizontală la panoul tău înclinat"
  keywords: ["model de transpozitie solara", "model Perez iradianta", "iradianta pe suprafata inclinata", "calcul iradianta POA"]
relatedPosts: ["inclinarea-si-azimutul-panourilor", "lumina-directa-si-lumina-difuza", "calatoria-radiatiei-din-spatiu-la-panou"]
---

Stațiile meteo și modelele NWP raportează radiația solară pe o suprafață orizontală. Panourile tale sunt înclinate la 30°, sau la 45°, sau montate pe un acoperiș în pantă. Pasul matematic care convertește iradianța orizontală în ce primește efectiv panoul tău înclinat se numește **transpoziție** — și e unul dintre locurile în care prognoza bazată pe fizică își merită banii.

## Problema

Iradianța globală orizontală (GHI) e măsurătoarea standard. E ce înregistrează piranometrele din stațiile meteo. E ce deduc estimările satelitare. E ce calculează modelele NWP.

Dar iradianța de pe panoul tău înclinat — numită iradianță **în planul panourilor (POA, plane of array)** — e diferită de GHI. Într-o zi senină de iarnă, un panou înclinat orientat spre sud poate primi semnificativ *mai multă* iradianță decât o suprafață orizontală, pentru că interceptează mai direct soarele jos de iarnă. Într-o zi de vară, când soarele e aproape la zenit, același panou înclinat poate primi puțin mai puțin decât suprafața orizontală, pentru că e înclinat în altă parte față de soarele de la prânz.

Relația dintre GHI și POA depinde de poziția soarelui (care se schimbă în fiecare minut), de înclinarea și azimutul panourilor tale și, crucial, de împărțirea între radiația directă și cea difuză.

## Pasul 1: Descompunerea

Înainte de transpoziție trebuie să separi GHI în componentele lui: iradianță directă normală (DNI) și iradianță difuză orizontală (DHI). „Normală” înseamnă aici perpendiculară pe razele soarelui, nu „obișnuită”. Dacă sursa meteo le oferă separat, perfect. Dacă oferă doar GHI (situație frecventă la multe surse de date), ai nevoie de un **model de descompunere** care să estimeze împărțirea.

Modelele de descompunere folosesc indicele de claritate (raportul dintre GHI la sol și iradianța extraterestră) ca intrare principală. Cerul senin are indice de claritate mare și fracție directă mare. Cerul acoperit are indice de claritate mic și fracție difuză mare. Modelele Erbs, Orgill-Hollands și BRL sunt abordări de descompunere folosite frecvent.

Pasul acesta introduce incertitudine: același GHI poate proveni din combinații diferite de directă și difuză. O ceață uscată, subțire și uniformă și un câmp de nori împrăștiați pot da un GHI asemănător, dar valori POA foarte diferite pe un panou înclinat.

## Pasul 2: Transpoziția radiației directe

Componenta directă e geometrie curată. DNI vine din direcția soarelui. Fracția interceptată de suprafața ta înclinată urmează **cosinusul unghiului de incidență** — unghiul dintre razele soarelui și normala la suprafața panoului.

Când soarele e exact în fața panoului (unghi de incidență 0°), captezi 100% din DNI. Pe măsură ce unghiul crește, captezi mai puțin, după o curbă cosinusoidală. La 60° unghi de incidență captezi doar 50%. La 90° (soarele paralel cu planul panoului) nu captezi nimic.

Unghiul de incidență depinde de înclinarea ta, de azimut și de poziția soarelui — toate calculabile cu precizie mare. Această componentă a transpoziției e practic exactă.

## Pasul 3: Transpoziția difuzei — aici se despart modelele

Aici e partea grea. Radiația difuză vine din tot cerul — dar nu uniform. Cerul din jurul soarelui e mai luminos decât cerul din partea opusă. Orizontul e, în anumite condiții, mai luminos decât zenitul. Norii creează pete luminoase și pete întunecate.

Un panou înclinat vede doar o parte din bolta cerească. Un panou înclinat la 35° față de orizontală „vede” mai puțin din cerul din spatele lui (sub linia de orizont a panoului) și mai mult din cerul din față. Cât de multă radiație difuză primește depinde de felul în care e distribuită strălucirea cerului.

Modelele de transpoziție fac ipoteze diferite despre această distribuție.

**Modelul izotrop** — cel mai simplu. Presupune că radiația difuză e uniformă pe toată bolta cerească. Suprafața înclinată primește o fracție proporțională cu factorul ei de vedere a cerului: (1 + cos(înclinare)) / 2. Un panou orizontal (înclinare 0°) vede tot cerul; un panou vertical vede jumătate.

Modelul e trivial de calculat, dar sistematic greșit. Cerul real nu e uniform — e mai luminos lângă soare și lângă orizont.

**Modelul Hay-Davies** — adaugă o componentă circumsolară. Tratează o parte din radiația difuză ca venind din direcția soarelui (ca radiația directă), iar restul ca izotropă. Mai precis decât modelul izotrop, mai ales pe cer senin și parțial senin, unde strălucirea circumsolară e semnificativă.

**Modelul Perez** — cel mai folosit în industria fotovoltaică. Descompune radiația difuză în trei componente: fond izotrop, strălucire circumsolară (zona din jurul soarelui) și strălucire de orizont (o bandă luminoasă de-a lungul orizontului, vizibilă mai ales pe cer senin). Folosește coeficienți empirici obținuți din campanii ample de măsurători.

Modelul Perez obține tipic o acuratețe cu 5–10% mai bună decât cel izotrop pentru suprafețe înclinate, iar diferența e cea mai mare la înclinări abrupte și pe cer senin. Pentru panouri orizontale sau pe cer complet acoperit, toate modelele converg, pentru că cerul chiar e aproximativ uniform.

## Pasul 4: Componenta reflectată de sol

Lumina care se reflectă de la sol și lovește panoul de dedesubt adaugă o a treia contribuție. Se calculează ca: GHI × albedo × (1 − cos(înclinare)) / 2.

Reflectanța solului (albedo) variază: zăpadă proaspătă 0,6–0,8, iarbă verde 0,2, sol închis la culoare 0,1, beton 0,3. Un unghi de înclinare mai mare captează mai multă reflexie de la sol.

La majoritatea instalațiilor, reflexia de la sol contribuie cu 2–5% din iradianța POA totală. În medii cu strat de zăpadă și panouri înclinate abrupt poate ajunge la 10–15% — un bonus care se simte.

## Punem totul cap la cap

Iradianța POA totală = radiația directă transpusă + radiația difuză transpusă + componenta reflectată de sol.

Acest singur număr, calculat pentru fiecare oră (sau fiecare 15 minute) din perioada de prognoză, intră în modelul celulei fotovoltaice pentru a calcula puterea electrică. Pasul de transpoziție e locul unde înclinarea și azimutul introduse de tine devin critice — ele modelează întreaga curbă zilnică de producție.

Un panou orientat spre sud, la 35°, montat în București, are un vârf ascuțit în jurul prânzului solar. Un panou orientat spre est are vârful între 09:00 și 10:00. Un panou orizontal are o curbă largă și mai joasă. Aceste forme îți spun direct când să programezi consumurile mari, când să încarci mașina electrică sau când să te aștepți la surplus injectat în rețea.

Volcast implementează modelul de transpoziție Perez. Pentru fiecare oră de prognoză, descompune iradianța din modelul meteo în componentă directă și difuză, calculează poziția soarelui, calculează unghiul de incidență pe panoul tău înclinat, aplică modelul difuz Perez cu componentele lui circumsolară și de orizont, adaugă reflexia de la sol și ajunge la iradianța POA care intră în pasul de conversie fotovoltaică.

E mai multă matematică decât un tabel de căutare. Dar de asta prognoza prinde corect forma curbei tale zilnice de producție, nu doar totalul.
