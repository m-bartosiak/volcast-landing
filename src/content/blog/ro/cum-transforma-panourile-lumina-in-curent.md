---
title: "Cum transformă panourile lumina în electricitate"
description: "Explicație clară a efectului fotovoltaic: de la fotonii care lovesc siliciul până la curentul alternativ care îți alimentează casa, fără jargon inutil."
date: 2026-03-24
tags: ["solar-basics", "photovoltaic-effect", "pv-physics", "beginner"]
series: "fundamentals"
seriesOrder: 1
lang: ro
draft: false
seo:
  ogTitle: "Cum transformă panourile fotovoltaice lumina în electricitate"
  keywords: ["cum funcționează panourile fotovoltaice", "efectul fotovoltaic explicat", "fizica celulei fotovoltaice", "conversia energiei solare"]
relatedPosts: ["panourile-produc-mai-mult-primavara", "lumina-directa-si-lumina-difuza", "inclinarea-si-azimutul-panourilor"]
---

În fiecare secundă, suprafața Pământului primește de la Soare aproximativ 430 de miliarde de miliarde de jouli de energie. Panourile tale interceptează o felie minusculă din ea și o transformă în electricitate fără piese în mișcare, fără ardere și fără zgomot. Dar cum?

Răspunsul stă la intersecția dintre fizica cuantică și ingineria semiconductorilor. Stai liniștit: nu îți trebuie o diplomă în fizică. Hai să o luăm pas cu pas.

## Totul începe cu un foton

Lumina solară nu e un flux continuu de energie. Ea ajunge sub formă de pachete discrete numite **fotoni** — mănunchiuri minuscule de energie electromagnetică, fiecare purtând o cantitate anume, în funcție de lungimea de undă. Fotonii albaștri poartă mai multă energie decât cei roșii. Fotonii din infraroșu poartă mai puțină decât ambii.

Asta contează pentru că o celulă fotovoltaică poate folosi doar fotonii aflați peste un anumit prag de energie. Pentru siliciu — materialul din peste 95% dintre panourile fotovoltaice din lume — pragul e de aproximativ 1,1 electron-volți (eV), ceea ce corespunde luminii din apropierea infraroșului. Tot ce e sub prag trece prin celulă ca și cum aceasta nici nu ar exista.

## Sandvișul de semiconductor

O celulă fotovoltaică e, în esență, o plachetă subțire de siliciu „dopată” în mod deliberat — adică i s-au adăugat cantități infime din alte elemente, ca să i se schimbe proprietățile electrice.

Stratul de sus e dopat cu fosfor, care are cu un electron mai mult decât siliciul. Asta creează un surplus de electroni liberi — îl numim siliciu de **tip n** (n de la purtători de sarcină negativi).

Stratul de jos e dopat cu bor, care are cu un electron mai puțin. Astfel apar „goluri” — locuri în care ar putea sta un electron, dar nu stă. Acesta e siliciul de **tip p** (p de la purtători de sarcină pozitivi).

Acolo unde cele două straturi se întâlnesc se petrece ceva remarcabil. Electronii din partea n migrează dincolo, ca să umple golurile din partea p, și creează o zonă subțire cu un câmp electric propriu. Aceasta e **joncțiunea p-n** — motorul oricărei celule fotovoltaice.

## Efectul fotovoltaic

Când un foton cu energie suficientă lovește siliciul, smulge un electron din legătura lui atomică. Se formează astfel o pereche electron-gol: un electron liber și un loc rămas gol.

Aici e cheia: câmpul electric din joncțiunea p-n funcționează ca o poartă cu sens unic. Împinge electronul eliberat către partea n și golul către partea p. Această separare a sarcinilor e cea care creează tensiunea — presiunea electrică ce pune curentul în mișcare.

Leagă un fir de la partea de sus a celulei la cea de jos (prin instalația electrică a casei) și electronii încep să curgă — asta e electricitatea. Electronul ajunge în cele din urmă să umple un gol, energia fotonului a fost captată ca lucru util, iar ciclul continuă atât timp cât lumina tot vine.

Acesta e **efectul fotovoltaic**, observat prima dată de Edmond Becquerel în 1839 și valorificat practic abia în 1954, la Bell Labs.

## De la celulă la energie utilizabilă

O singură celulă de siliciu produce aproximativ 0,5–0,6 volți — prea puțin ca să fie utilă singură. Așa că celulele se leagă între ele în serie (ca să se adune tensiunile) și în paralel (ca să se adune curenții), formând un **modul** — ce vezi pe acoperiș.

Un modul rezidențial obișnuit conține 60 sau 72 de celule și produce 30–40 de volți în curent continuu (CC). Casa ta funcționează pe curent alternativ (CA) la 230 V, așa că un **invertor** transformă ieșirea în curent continuu a panourilor în curent alternativ compatibil cu rețeaua.

Traseul e: **foton → electron eliberat → curent continuu → invertor → curent alternativ → consumatorii tăi.**

## Ce se pierde pe drum

Nu toată lumina solară devine electricitate. De fapt, un panou standard din siliciu convertește doar aproximativ 18–22% din energia solară primită. Unde se duce restul?

**Fotonii de sub pragul benzii interzise** (circa 19% din lumina solară) nu au energie suficientă ca să elibereze electroni. Trec mai departe sau sunt absorbiți sub formă de căldură.

**Pierderile prin termalizare** (circa 33%) apar când fotonii de energie mare (albaștri, ultravioleți) eliberează un electron, dar le rămâne energie în plus față de cât era necesar. Acel surplus devine căldură în celulă.

**Recombinarea** are loc atunci când electronii eliberați recad în goluri înainte să ajungă în circuit. Calitatea de fabricație și proiectarea celulei o reduc la minimum, dar nu o pot elimina complet.

**Reflexia și umbrirea** mai iau câteva procente, deși straturile antireflex și suprafețele texturate ajută.

**Rezistența electrică** din contactele metalice ale celulei și din cablaj consumă o mică parte sub formă de căldură.

Randamentul maxim teoretic pentru o celulă de siliciu cu o singură joncțiune e de aproximativ 29,4% (limita Shockley-Queisser). Cele mai bune celule de laborator au ajuns la 26,8%. Panourile de pe acoperișul tău sunt remarcabil de aproape de ce permite fizica.

## De ce contează asta pentru prognoză

Înțelegerea acestui lanț — de la foton la electron și la putere — arată de ce prognoza de producție corectă e o problemă de fizică, nu doar una de statistică.

Cantitatea de electricitate produsă de panourile tale depinde de **câți fotoni utilizabili ajung la suprafața celulei** și de **cât de eficient îi convertește celula** la temperatura ei de moment. Ambele sunt guvernate de legi fizice care pot fi modelate.

Spectrul luminii care ajunge la sol se schimbă odată cu condițiile atmosferice. Randamentul celulei se modifică cu temperatura. Unghiul de incidență contează. Toate acestea se pot calcula dacă știi fizica din spate.

Exact asta face Volcast. În loc să ghicească producția viitoare din tipare istorice, simulează lanțul fizic — de la condițiile atmosferice, prin modelarea iradianței, până la comportamentul la nivel de celulă — pentru instalația ta anume.
