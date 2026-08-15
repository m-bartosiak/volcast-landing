---
title: "Cele trei numere care îți definesc sistemul fotovoltaic"
description: "Înclinare, azimut și putere instalată: unui model fizic îi ajung trei numere pentru a prognoza producția sistemului tău fotovoltaic, fără istoric."
date: 2026-03-24
tags: ["setup", "parameters", "getting-started", "pv-basics", "beginner"]
series: "fundamentals"
seriesOrder: 5
lang: ro
draft: false
seo:
  ogTitle: "Cele trei numere care îți definesc sistemul fotovoltaic (și de ce sunt de ajuns)"
  keywords: ["parametri sistem fotovoltaic", "configurare sistem fotovoltaic", "date pentru prognoza de producție", "configurare Volcast"]
relatedPosts: ["inclinarea-si-azimutul-panourilor", "cum-transforma-panourile-lumina-in-curent"]
---

Majoritatea instrumentelor de prognoză fotovoltaică îți cer o listă interminabilă de date sau pretind săptămâni de istoric de producție înainte să scoată ceva util. Volcast cere trei numere, plus locația ta (pe care telefonul o știe deja). Atât.

Nu e o limitare — e o alegere de proiectare care vine din felul în care funcționează modelarea fizică. Hai să vedem ce îi spune modelului fiecare număr și de ce trei sunt de ajuns.

## Numărul 1: unghiul de înclinare

**Ce este:** unghiul panourilor față de planul orizontal, în grade. 0° înseamnă culcat pe orizontală, 90° înseamnă vertical.

**Ce îi spune modelului:** cum să calculeze unghiul de incidență — unghiul dintre razele solare și suprafața panoului — în fiecare moment al zilei. Acesta determină direct cât din iradianța directă disponibilă interceptează efectiv panoul tău.

Unghiul de incidență intră și în calculul **reflexiei Fresnel**. La unghiuri de incidență mari (lumina lovește sticla aproape razant), o parte mai mare din lumină ricoșează de pe suprafață în loc să intre în celulă. E aceeași fizică din cauza căreia suprafața unui lac pare o oglindă la apus.

**Cum îl afli:** dacă panourile sunt pe un acoperiș în pantă, înclinarea e egală cu panta acoperișului. Valori uzuale în Europa: 15–45°. Dacă nu îți știi panta acoperișului, o aplicație de tip inclinometru de pe telefon, ținută pe panou, îți dă răspunsul în câteva secunde. La instalațiile pe acoperiș plat sau pe sol, înclinarea e unghiul la care e reglată structura de montaj.

**Sensibilitate:** așa cum am discutat în articolul anterior, producția anuală variază lent cu înclinarea. O eroare de 5° schimbă producția cu aproximativ 1–2%. Nu complica lucrurile — o estimare rezonabilă e suficientă.

## Numărul 2: azimutul (orientarea)

**Ce este:** direcția în care sunt orientate panourile, ca la busolă. 180° e sud curat (optimul în emisfera nordică), 90° e est, 270° e vest.

**Ce îi spune modelului:** când anume din zi primesc panourile tale cea mai multă lumină directă. Un panou orientat spre sud are vârful la amiaza solară. Unul orientat spre est are vârful dimineața. Asta dă forma întregii curbe zilnice de producție.

Azimutul influențează și cât din lumina reflectată de sol ajunge la panou (panourile orientate în direcția opusă unei suprafețe acoperite cu zăpadă pierd acea reflexie) și cum se distribuie radiația difuză a cerului în câmpul vizual al panoului.

**Cum îl afli:** o aplicație de busolă pe telefon, îndreptată în direcția panourilor, îți dă azimutul. Sau uită-te la acoperișul tău pe Google Maps — în emisfera nordică sudul e în jos. Dacă ai o instalație împărțită est-vest, poți configura în Volcast două stringuri separate.

**Sensibilitate:** ca și la înclinare, producția anuală variază blând. O abatere de 30° față de sud curat costă aproximativ 3–5%. Chiar și panourile orientate spre est sau vest captează 80–85% din maximul teoretic.

## Numărul 3: puterea instalată (kWp)

**Ce este:** puterea de catalog a instalației tale, în kilowați-vârf (kWp). E puterea totală livrată în condiții standard de testare (STC): iradianță de 1000 W/m², temperatura celulei de 25 °C, spectru solar AM1.5.

**Ce îi spune modelului:** factorul de scară pentru tot calculul. Motorul fizic calculează ce fracțiune din iradianța STC ajunge pe suprafața ta înclinată într-un moment dat, aplică reducerea de putere dată de temperatură și pierderile optice, apoi înmulțește cu puterea ta instalată ca să obțină producția așteptată, în wați.

Într-un model fizic, kWp e practic puntea dintre modelul de iradianță (care scoate W/m² de energie utilizabilă) și producția electrică (care e ce te interesează). Rezumă într-un singur număr eficiența panoului, suprafața totală și caracteristicile celulelor.

**Cum îl afli:** e trecut în contractul de instalare, pe afișajul invertorului sau pe eticheta panourilor. Valori rezidențiale tipice: 3–15 kWp. Un sistem de 10 panouri a câte 400 W înseamnă 4,0 kWp.

**Sensibilitate:** ăsta e numărul pe care chiar trebuie să îl nimerești. O eroare de 10% în puterea instalată înseamnă o eroare de 10% în prognoză — relația e liniară. Dar e și cel mai ușor număr de știut exact, pentru că e scris în actele tale.

## Dar locația?

Locația e, tehnic vorbind, a patra intrare, doar că Volcast o preia automat din GPS-ul telefonului sau te lasă să o fixezi pe hartă. Din coordonatele tale, modelul deduce tot ce îi trebuie despre traiectoria soarelui: declinația solară, unghiurile orare, orele de răsărit și apus, elevația și azimutul soarelui în fiecare moment al anului.

Locația mai și selectează punctul potrivit din grila de prognoză meteo. Datele modelelor meteo vin pe o grilă geografică (tipic 0,1–0,25° pas la modelele regionale), iar locația ta determină ce celule ale grilei se folosesc și cum se interpolează între ele.

## De ce nu mai mulți parametri?

Te-ai putea întreba: nu ar trebui modelul să știe și marca panourilor tale, randamentul invertorului, pierderile pe cabluri sau tiparele de umbrire?

Uite care e problema — pentru o **prognoză**, parametrii suplimentari aduc câștiguri tot mai mici:

**Marca și modelul panoului** influențează în principal puterea instalată (pe care deja o dai) și coeficientul de temperatură. Coeficienții de temperatură ai panourilor din siliciu se înghesuie strâns între −0,35% și −0,45% pe °C. Folosirea mediei introduce poate 1–2% eroare în zilele fierbinți. Pentru o prognoză, asta e zgomot în comparație cu incertitudinea meteo.

**Randamentul invertorului**, de 96–98% la invertoarele moderne, înseamnă pierderi de 2–4%. Variația între mărci e minusculă — poate 1% diferență între un invertor bun și unul foarte bun. Din nou, sub zgomotul prognozei meteo.

**Pierderile pe cabluri** sunt tipic de 1–3% și destul de constante. Scalează totul uniform, fără să schimbe forma prognozei.

**Umbrirea** e singurul parametru care contează cu adevărat și nu e surprins de cele trei numere. Dacă ai umbriri importante (copaci, coșuri de fum, clădiri vecine), producția ta reală va fi sistematic mai mică decât prognoza. E o limitare cunoscută — Volcast îți spune maximul teoretic pentru orientarea ta, iar tu poți ajusta mental pentru umbrirea pe care o știi. Versiunile viitoare ar putea adăuga modelarea umbririi.

Filozofia e: **surprinde fizica cea mai importantă cu cele mai puține date de intrare**. Înclinarea, azimutul și puterea te duc la o acuratețe de 90–95%. Restul de 5–10% vine din factori care fie sunt greu de măsurat exact (umbrire, murdărire), fie variază atât de puțin de la o instalație la alta încât media e suficientă (coeficienți de temperatură, randamentul invertorului).

## Comparația cu machine learning

Simplitatea asta e un avantaj direct față de abordările cu învățare automată. Un model de machine learning are nevoie de săptămâni sau luni de date istorice de producție ca să învețe ce face instalația ta anume în diverse condiții. Până când are datele, nu poate prognoza. Iar dacă se schimbă condițiile (o umbrire nouă de la un copac care crește, degradarea panourilor, panouri adăugate), modelul are nevoie de timp ca să reînvețe.

Fizica nu are perioadă de învățare. Cu trei numere și o prognoză meteo, calculează producția așteptată din principii de bază — aceleași principii care guvernau energia solară înainte ca panourile tale să fi fost măcar fabricate.

Asta e puterea modelării fizicii în locul potrivirii pe date.
