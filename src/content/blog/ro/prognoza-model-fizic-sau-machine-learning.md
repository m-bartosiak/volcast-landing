---
title: "Prognoză fotovoltaică: model fizic sau machine learning?"
description: "Două abordări diferite pentru aceeași prognoză: una modelează fizica, cealaltă învață din date. Iată de ce distincția contează pentru sistemul tău."
date: 2026-04-14
tags: ["physics-model", "machine-learning", "forecasting", "methodology"]
series: "deep-dives"
seriesOrder: 1
lang: ro
draft: false
seo:
  ogTitle: "Prognoză solară: model fizic sau machine learning — care e mai precis?"
  keywords: ["prognoza fotovoltaica model fizic", "machine learning prognoza solara", "comparatie prognoze solare", "metode de prognoza productie PV"]
---

Dacă cauți „prognoză producție panouri fotovoltaice”, dai peste zeci de aplicații și servicii. Toate promit predicții precise. Sub capotă însă folosesc abordări fundamental diferite — iar abordarea determină când funcționează prognoza, când eșuează și ce îți cere ție.

Cele două tabere sunt **modelarea bazată pe fizică** și **machine learning (ML)**. Nu sunt doar unelte diferite pentru aceeași treabă. Gândesc problema altfel.

## Abordarea ML: învățarea din istoric

O prognoză bazată pe machine learning funcționează așa: îi dai modelului luni întregi de date istorice de producție din instalația ta, împreună cu datele meteo corespunzătoare. Modelul găsește tipare statistice — „când temperatura era X, nebulozitatea era Y și vântul Z, instalația asta producea W wați”.

Cu cât îi dai mai multe date, cu atât învață mai bine particularitățile instalației tale: tiparele specifice de umbrire, comportamentul invertorului, efectele murdăririi, pierderile pe cabluri. Cu suficient istoric, poate surprinde implicit efecte greu de modelat explicit.

Sună puternic, și chiar este — cu două rezerve critice.

**Rezerva unu: problema pornirii la rece.** O instalație nouă nu are istoric. Modelul nu poate învăța ce n-a văzut niciodată. Majoritatea prognozelor ML au nevoie de 2–6 luni de date până devin de încredere. Exact în perioada aceea — când ai cea mai mare nevoie de o prognoză, pentru că încă îți înțelegi sistemul — nu primești nimic util.

**Rezerva doi: schimbarea condițiilor.** Modelele ML presupun că viitorul seamănă cu trecutul. Când condițiile se schimbă în feluri pe care modelul nu le-a văzut, extrapolează prost. O ninsoare bizară de primăvară, o săptămână de iarnă neobișnuit de senină sau o clădire nouă care aruncă umbră după-amiaza — exact momentele în care vrei o prognoză corectă și exact cele în care ML e cel mai prost echipat să ți-o dea.

## Abordarea fizică: modelare din primele principii

O prognoză bazată pe fizică funcționează altfel. În loc să învețe corelații statistice, simulează procesul fizic prin care lumina devine electricitate.

Lanțul arată așa: pornești de la poziția soarelui (calculată astronomic), modelezi cum trece radiația solară prin atmosferă (împrăștiere, absorbție, atenuare de către nori), descompui rezultatul în componenta directă și cea difuză, le transpui pe suprafața înclinată a panourilor tale, calculezi temperatura celulei și aplici conversia fotovoltaică cu reducerea puterii în funcție de temperatură.

Fiecare pas folosește ecuații fizice bine stabilite. Modelul de transpoziție Perez sau Hay-Davies. Transmisia atmosferică Beer-Lambert. Modelul cu o diodă al celulei fotovoltaice. Nu sunt ghicituri sau aproximări comode — sunt aceleași ecuații pe care inginerii le folosesc când proiectează parcuri fotovoltaice.

Modelul are nevoie de doar trei date de la tine: unghiul de înclinare, azimutul și puterea instalată. Combinate cu locația (pentru traiectoria soarelui) și cu o prognoză meteo (pentru condițiile atmosferice), calculează producția așteptată de la zero.

## Unde strălucește fiecare abordare

**ML e mai bun când:**

Ai ani de date de producție curate și condiții stabile. Modelul a văzut deja fiecare tipar meteo pe care îl are locația ta. Nimic din instalație nu s-a schimbat. În scenariul ăsta, ML poate surprinde implicit micro-efecte (umbrire parțială la ora 15 în decembrie, limitarea la puterea invertorului în vârf) pe care un model fizic le-ar trata corect doar cu o configurare explicită.

ML excelează și la prognoza pe termen foarte scurt (de la minute la câteva ore), folosind ca intrare producția în timp real. Dacă panourile tale produc acum 3,2 kW și cerul e senin, un model ML poate extrapola destul de bine ora următoare fără să înțeleagă de ce.

**Fizica e mai bună când:**

Ai o instalație nouă. Ai schimbat ceva (ai adăugat panouri, a apărut o umbrire). Condițiile sunt neobișnuite. Ai nevoie de prognoză într-o locație sau într-o climă pe care modelul nu le-a văzut niciodată. Vrei forma curbei oră cu oră, nu doar totalul zilnic. Nu vrei să dai luni întregi de date de producție unei firme terțe.

Modelele fizice sunt și mai transparente. Când prognoza greșește, poți diagnostica de ce: a fost greșită prognoza meteo? A fost imprecis modelul de temperatură? A fost greșită descompunerea iradianței? La ML, erorile sunt opace: modelul a greșit pentru că modelul a greșit.

## Varianta hibridă

Cea mai puternică abordare le combină pe amândouă. Folosești fizica drept fundație — ea îți dă înțelegerea structurală a modului în care lumina devine curent. Apoi folosești ML pentru calibrare: dacă modelul fizic supraestimează constant cu 5% pentru instalația ta, un strat subțire de ML poate învăța corecția.

Așa obții avantajul de pornire la rece al fizicii (funcționează din prima zi) împreună cu capacitatea ML de a se adapta în timp la particularitățile instalației.

Volcast pornește de la fizică. Încă de la prima prognoză, modelul rulează întregul lanț de simulare fizică. Nu are nevoie să vadă ce au făcut panourile tale luna trecută ca să prezică ce vor face mâine. Legile fizicii nu au perioadă de antrenare.

## Întrebarea cu acuratețea

Lumea întreabă frecvent: „care e mai precis?”. Răspunsul onest e că depinde de orizontul de timp și de ce înțelegi prin acuratețe.

Pentru **prognoza pentru ziua următoare**, ambele abordări sunt limitate în primul rând de incertitudinea prognozei meteo, nu de modelul fotovoltaic. Fie că folosești fizică sau ML, dacă meteo spune „senin” și plouă, prognoza ta de producție va fi greșită. Abordarea de modelare PV contează mai puțin decât calitatea intrării meteo.

Pentru **forma curbei oră cu oră**, fizica tinde să câștige. Modelează corect urcarea de dimineață, vârful de la amiaza solară și declinul de seară, pe baza geometriei. ML poate învăța forma asta, dar are nevoie să vadă suficiente zile ca să prindă variația sezonieră.

Pentru **estimarea producției pe termen lung**, fizica e mai robustă, pentru că nu se suprapotrivește pe tiparele meteo ale unei perioade anume.

Pentru **prognoza imediată (nowcasting)**, adică următoarele 15–60 de minute, ML cu date de intrare în timp real tinde să câștige, pentru că reacționează la condițiile curente mai repede decât un model fizic care rulează pe actualizări meteo la fiecare 6 ore.

Întrebarea reală nu e „care e mai precis”, ci „care îmi dă o prognoză utilă cu ce am acum”. Dacă ai ani de date și o instalație stabilă, ML poate fi excelent. Dacă abia ai pornit sau vrei transparență, fizica e fundația potrivită.

## De ce contează pentru tine

Ca proprietar de sistem fotovoltaic, abordarea folosită de aplicația ta de prognoză îți afectează experiența în moduri foarte concrete.

Cu o unealtă bazată pe fizică, ai o prognoză funcțională din prima zi. Nu trebuie să aștepți. Nu trebuie să exporți date din portalul invertorului. Nu trebuie să dai unui terț istoricul tău de producție.

Primești și o prognoză pe care o poți judeca. Dacă prognoza spune 25 kWh mâine și obții doar 18 kWh, poți verifica: a fost vremea diferită de prognoză? A apărut o umbrire neașteptată? Modelul fizic îți dă un cadru în care să înțelegi diferența.

Asta e genul de prognoză pe care îl oferă Volcast — iar în articolele următoare intrăm mai adânc în fiecare pas al lanțului de simulare fizică.
