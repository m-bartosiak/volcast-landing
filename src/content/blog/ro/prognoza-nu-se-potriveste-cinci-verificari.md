---
title: "Prognoza nu se potrivește: 5 verificări, în ordine"
description: "Înainte să dai vina pe model, elimină cele patru lucruri care seamănă cu o eroare de prognoză și nu sunt. Apoi un test îți spune dacă a fost vremea."
date: 2026-09-15
author: "Michał Bartosiak"
tags: []
lang: ro
draft: true
translationKey: "forecast-troubleshooting"
seo:
  ogTitle: "Prognoza fotovoltaică nu se potrivește? Verifică aceste 5 lucruri"
---
Când producția și prognoza nu se potrivesc, modelul e suspectul evident și, de obicei, cel greșit. Patru dintre cele cinci cauze frecvente sunt lucruri despre instalația ta pe care prognoza nu le-a aflat niciodată, iar fiecare lasă o amprentă diferită de cea a unei rateuri meteo autentice. Ia-le în ordinea de mai jos — întâi cele ieftine și probabile — iar al cincilea pas îți va spune dacă ce rămâne chiar ține de cer.

## 1. Puterea pe care ai introdus-o

Începe de aici, pentru că e cea mai frecventă cauză și îți ia cinci minute. O prognoză modelează lumina pe care o strâng panourile, deci are nevoie de puterea de vârf a panourilor, nu de puterea invertorului. Douăsprezece panouri de 510 W înseamnă un câmp de 6,12 kWp, chiar dacă pe perete atârnă un invertor de 5 kW.

Amprenta e un **raport constant**: fiecare zi senină cade cam la aceeași fracțiune din prognoză, pentru că o putere greșită e un multiplicator fix pe fiecare oră. Dacă zilele tale senine se adună în jur de 0,8 sau în jur de 1,2, oprește-te din citit și corectează numărul — până atunci, tot ce urmează e zgomot. Metoda completă e în [cum afli puterea reală a sistemului tău](/blog/ro/q/care-este-puterea-reala-a-sistemului-meu/).

## 2. Tăierea la invertor

Dacă diferența apare doar în jurul prânzului, în zilele cele mai însorite, iar curba ta de producție are un vârf plat în loc de un vârf ascuțit, nu te uiți la o eroare de prognoză. Te uiți la invertor făcându-și treaba: un câmp de panouri mai mare decât invertorul e proiectare standard și taie câteva ore pe an.

Două răspunsuri intră în detaliu — [de ce producția se aplatizează la prânz](/blog/ro/q/productia-se-aplatizeaza-la-pranz/) și [dacă un invertor mai mic decât panourile e o greșeală](/blog/ro/q/invertor-mai-mic-decat-panourile/). Pe scurt: vârful plat e o decizie de proiectare, nu o defecțiune, iar prognoza îl poate lua în calcul doar dacă știe limita invertorului.

## 3. Umbrirea pe care modelul nu o vede

O prognoză știe unde e soarele. Nu știe de coșul de fum al vecinului, de nucul din curte sau de lucarna aflată la trei metri spre vest. Umbrirea apropiată e invizibilă pentru orice model căruia nu i s-a spus explicit despre ea.

Amprenta e aici alta decât la primele două: eroarea **nu e constantă, dar se repetă la aceeași oră din zi**. Dimineața se potrivește cu prognoza, după-amiaza rămâne în urmă, și se întâmplă la fel în fiecare zi senină din același sezon. Ia cinci zile senine și compară oră cu oră, nu totaluri zilnice — forma o dă de gol, pentru că o sumă pe zi ascunde exact lucrul pe care îl cauți.

Partea enervantă e că forma se schimbă de-a lungul anului, pentru că se schimbă înălțimea soarelui. O umbră care nu te costă nimic în iunie îți poate mânca toată după-amiaza în octombrie.

## 4. Murdărire, zăpadă și lucrurile care se adună încet

Murdărirea are cea mai distinctivă semnătură dintre toate: **o derivă lentă, într-o singură direcție**. Nu o zi proastă, nu o săptămână proastă — un raport care era 1,0 în aprilie și e 0,92 în iulie, fără niciun eveniment de care să te agăți. Polen, praf după o perioadă secetoasă, sare pe litoral, găinaț pe un singur string.

Zăpada e opusul: totală, evidentă și se rezolvă singură. Merită menționată doar pentru că un câmp acoperit parțial poate produce atât de puțin încât lumea presupune o defecțiune.

Testul e simplu. Notează-ți cea mai bună zi senină din fiecare lună. Curba asta personală de referință face deriva vizibilă într-un fel în care comparația de la o zi la alta nu o va face niciodată, și prinde și degradarea reală, de la an la an.

## 5. Acum, a fost vremea?

Dacă cele patru de mai sus au fost eliminate, poți în sfârșit să pui întrebarea corect — iar răspunsul onest e că prognozele chiar sunt mai slabe pe nori.

Măsurat pe producția reală a utilizatorilor noștri: în zilele cu cer senin eroarea mediană e în jur de **10%**, iar în zilele complet acoperite se apropie de **18%**. În zilele cu nebulozitate mare, aproximativ **28%** dintre zile ratează cu peste **30%** într-o direcție sau alta, față de **8%** dintre zilele senine. Important e că mediana abaterii rămâne aproape de zero în orice categorie de vreme — pe nori prognoza nu supraestimează și nu subestimează sistematic, doar devine mai zgomotoasă.

Distincția asta e tot rostul pasului de față. **Împrăștierea înseamnă vreme. O abatere constantă înseamnă configurare.** Dacă erorile tale sunt mari, dar cad de ambele părți de-a lungul multor zile, ai găsit răspunsul și nu ai ce repara. Dacă înclină constant într-o singură parte, întoarce-te la pasul 1.

Două observații despre comparația cu cifrele publicate de furnizori. Majoritatea afirmațiilor de acuratețe din industrie măsoară iradianța sau producția agregată a unei flote întregi — ambele mult mai ușor de prognozat decât kilowații-oră zilnici ai unui singur acoperiș. Iar o singură zi nu demonstrează nimic, în niciun sens; ai nevoie de săptămâni de zile înainte ca o medie să însemne ceva.

## Ce ai de făcut

1. **Corectează întâi puterea.** Numărul de panouri înmulțit cu puterea nominală, pe fiecare orientare. Nimic altceva nu merită măsurat până nu e corect.
2. **Separă zilele senine de cele înnorate** înainte să calculezi orice medie. Amestecate, dau un număr care nu descrie niciuna dintre situații.
3. **Compară oră cu oră când totalul zilnic pare în regulă.** Și umbrirea, și tăierea la invertor se ascund într-o sumă zilnică ce arată corect.
4. **Notează-ți cea mai bună zi senină din fiecare lună.** E cel mai ieftin instrument pe care îl ai pentru a prinde deriva lentă.
5. **Judecă pe săptămâni, nu pe zile.** Iar dacă vrei fondul problemei, începe cu [cum verifici dacă sistemul funcționează bine](/blog/ro/q/cum-verific-daca-sistemul-functioneaza-bine/) și [de ce panourile nu ating niciodată puterea nominală](/blog/ro/q/panourile-nu-ating-puterea-nominala/).
