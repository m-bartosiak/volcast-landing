---
title: "Încărcarea mașinii electrice din surplus fotovoltaic"
description: "Cum încarci mașina electrică din surplusul fotovoltaic: praguri de putere, moduri de încărcare și planificarea sesiunilor cu o prognoză orară."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "ev-charging"
seo:
  ogTitle: "Încărcarea mașinii electrice din surplus fotovoltaic"
---
Mașina electrică este cel mai mare consumator dintr-o gospodărie — o singură sesiune de încărcare (20–60 kWh) poate depăși consumul zilnic al tuturor celorlalte aparate la un loc. Tocmai de aceea este și cea mai mare oportunitate: fiecare kilowatt-oră luat de pe acoperiș în loc de rețea îți aduce toată diferența dintre ce plătești și ce ți se recunoaște pe energia injectată. Problema e că o mașină electrică nu sorbește energie, ci înghite — și de aici începe planificarea.

## Problema pragului

Încărcarea monofazată pornește de pe la 1,4 kW (6 A), setarea uzuală este 3,7 kW, iar trifazat se ajunge la 11 kW. Un sistem de 5 kWp într-o amiază de aprilie dă poate 4 kW, din care casa ia 0,5–1 kW consum de bază. Surplusul real este adesea 2,5–3,5 kW: suficient ca să încarci, dar numai dacă nimerești fereastra. Bagi în priză orbește la ora 17:00 și încarci, de fapt, energie din rețea.

În România se adaugă o limită foarte concretă: puterea aprobată la locul de consum. Multe case au racordare monofazată, iar acolo o stație de încărcare de perete lucrează realist la 3,7 kW, pentru că peste consumul de bază al casei nu mai rămâne loc. Cu racordare trifazată ajungi la 7,4 kW sau 11 kW, dar tot puterea aprobată din certificatul de racordare decide, nu eticheta wallbox-ului. Verific-o înainte să cumperi stația — o stație reglabilă care poate coborî la 6 A este mai utilă decât una fixă de 11 kW pe care nu o poți alimenta.

Merită spus și de ce subiectul crește: parcul de mașini electrice din România se mărește mai ales prin programul Rabla Plus, iar concentrarea este vizibilă în București și în Cluj, unde încărcarea la domiciliu se lovește cel mai des de racordări vechi.

## Trei strategii

**„Sâmbăta însorită”.** Cea mai simplă: mașina stă acasă în weekend, prognoza arată peste 25 kWh — o bagi în priză în intervalul de vârf, cu curentul reglat pe surplusul așteptat (de exemplu 3,7 kW timp de 4–5 ore). Nu are nevoie de nimic în plus față de o stație cu putere reglabilă.

**Strategia mixtă.** În timpul săptămânii mașina se încarcă noaptea doar „până la raza de navetă”, iar completarea așteaptă următoarea zi bună cu soare. O privire de seară pe prognoza de mâine decide cât loc liber lași în baterie pentru soare. Dacă ai o ofertă diferențiată pe zone orare, încărcarea de noapte intră oricum în intervalul ieftin; dacă ai tarif monom, singurul lucru care contează este cât din sesiune prinzi pe surplus.

**Încărcarea automată din surplus.** Nivelul final: o stație în mod PV (nativ sau condusă din Home Assistant ori EVCC) modulează continuu curentul de încărcare după surplusul de moment. Aici se vede rezoluția prognozei: API-ul Volcast (Premium) livrează 288 de puncte de câte cinci minute pe zi, așa că automatizarea știe dacă norul de peste 20 de minute este o umbră trecătoare sau sfârșitul ferestrei — și nu întrerupe sesiunea degeaba.

## Calculul

Cât valorează concret? Depinde unde cad kilowatt-orele față de pragul compensării. Cât timp injecția ta rămâne sub consumul anual, compensarea cantitativă îți recuperează kWh la schimb, iar câștigul din încărcarea pe soare vine din componentele care nu se compensează: distribuție, transport, acciză și TVA pe energia consumată din rețea. Peste acel prag, câștigul este toată diferența dintre prețul pe care îl plătești și prețul mult mai mic la care furnizorul îți cumpără surplusul.

Ca ordin de mărime, la prețurile de consum de circa 1,4 lei/kWh cu TVA și la o valoare a surplusului în jur de 0,45 lei/kWh (fără TVA) din oferta de serviciu universal a Electrica Furnizare pentru trimestrul al doilea din 2026, 10 kWh încărcați pe soare în loc de rețea înseamnă între câțiva lei și aproximativ 10 lei economisiți, în funcție de partea în care cazi. La 1.000 km pe lună (aproximativ 170 kWh) cu jumătate din încărcare din surplus, se adună o sumă lunară care se simte — plus partea care nu se măsoară în bani: faci naveta pe energie recoltată de tine.

## FAQ

**Pot încărca din surplus de la o priză obișnuită?**
Da. Cablul de urgență (2,3 kW) se potrivește surprinzător de bine cu surplusuri moderate. E lent, dar pentru o mașină parcată acasă toată ziua este adesea cel mai eficient mod de a absorbi cocoașa de la prânz.

**Încarc întâi mașina sau bateria casei?**
Dacă mașina trebuie oricum încărcată, mașina. Eviți dubla conversie și cicluri consumate din bateria casei. Bateria casei câștigă atunci când mașina nu e acasă în orele de producție.

**Cât surplus îmi rămâne pentru încărcare?**
Surplus egal producția de moment minus consumul casei. Îl vezi pe contorul bidirecțional sau în Energy Dashboard, iar prognoza orară îți spune cum va arăta mâine.
