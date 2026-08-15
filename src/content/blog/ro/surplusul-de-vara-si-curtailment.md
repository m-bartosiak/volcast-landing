---
title: "Prea mult soare? Surplusul de vară și curtailmentul"
description: "Clipping, limitarea injecției, prețuri aproape zero la prânz: ce se întâmplă cu surplusul tău de vară și cum îl transformi în economii reale."
date: 2026-06-16
updated: 2026-08-14
author: "Michal"
tags: ["curtailment", "dynamic-tariff", "self-consumption", "summer"]
series: "practical"
seriesOrder: 2
lang: ro
draft: false
seo:
  keywords: ["surplus fotovoltaic vara", "clipping invertor", "limitarea injectiei in retea", "preturi negative energie", "compensare cantitativa prosumator"]
---

Există o problemă pe care majoritatea prosumatorilor noi nu o văd venind: nu prea puțin soare, ci prea mult. Într-un prânz senin de iulie panourile tale trag la maximum, iar casa nu consumă aproape nimic — fără încălzire, luminile stinse, poate nu e nimeni acasă. Toată energia aia trebuie să se ducă undeva, iar uneori răspunsul e „nicăieri unde să folosească la ceva".

## Două feluri diferite de a „pierde" producție

Merită separate două fenomene care seamănă, dar nu sunt același lucru.

Primul e limitarea la puterea invertorului (clipping). Dacă puterea de vârf a panourilor e mai mare decât puterea nominală AC a invertorului — o alegere frecventă și absolut intenționată — invertorul pur și simplu ține ieșirea la limita lui atunci când panourile împing mai mult. Într-o zi senină vezi asta ca pe un platou perfect drept în vârful curbei de producție, exact la puterea invertorului. De regulă e prevăzut în proiect și nu e nimic de îngrijorat: supradimensionarea panourilor față de invertor (raport DC/AC uzual 1,1-1,3) îți aduce mai mult în zilele înnorate și în orele de dimineață și seară.

Al doilea e limitarea injecției în rețea, cea pe care engleza o numește curtailment, și aici lucrurile sunt mai puțin liniștitoare. Uneori rețeaua nu poate absorbi ce injectezi. Tensiunea pe circuitul tău de joasă tensiune urcă în timp ce toate acoperișurile din zonă împing în același moment, sau invertorul are setată o limitare locală, până la cazul extrem de zero export (funcționare fără injecție în rețea). Invertorul reduce cuminte puterea ca să țină tensiunea în limitele admise. Condițiile meteo erau perfecte, dar contorul spune altceva.

## Cum îți dai seama pe care dintre ele o vezi

Clippingul se vede ca o linie plată și curată exact la puterea nominală a invertorului, în zilele limpezi, de obicei în orele din jurul prânzului. Limitarea injecției arată altfel: producția stă sub ce ar justifica vremea, adesea în jurul prânzului în zile însorite și cu consum mic, uneori însoțită de o valoare anormal de mare a tensiunii de rețea citite de invertor.

Diferența contează, pentru că o limitare venită din afară e ușor confundată cu un sistem care nu randează, când de fapt sistemul e perfect sănătos și doar e frânat din exterior. Exact asta e menită să semnaleze funcția de detecție a limitărilor din Volcast, ca să nu umbli după o defecțiune care nu există.

## Problema tensiunii în rețelele rurale

În România povestea are un capitol propriu, pe care versiunile din alte țări nu-l au. Numărul prosumatorilor a explodat: potrivit datelor ANRE, la 30 iunie 2026 erau 359.378 de prosumatori racordați la rețelele de distribuție, cu 4.019 MW putere instalată. Creșterea nu s-a distribuit uniform — s-a concentrat în localități unde zeci de case de pe același circuit de joasă tensiune injectează simultan, la aceeași oră, în aceeași direcție.

Rezultatul practic: în orele de vârf de producție tensiunea pe linie urcă, iar invertoarele încep să-și reducă puterea ca să rămână în limite. E o cauză reală de producție „pierdută" care nu are nicio legătură cu panourile tale și pe care nicio prognoză meteo nu o poate anticipa. Tot din același motiv, în unele zone saturate obținerea avizului tehnic de racordare (ATR) durează mai mult sau vine cu condiționări. Dacă te interesează situația concretă din localitatea ta, singura sursă care contează e operatorul de distribuție din zona ta — nu forumurile.

## Prețuri mici și prețuri negative pe PZU

Peste toate astea se adaugă o răsucire economică. În zilele care sunt și însorite, și cu vânt, cu cerere mică, prețurile angro ale energiei se prăbușesc în orele centrale, iar în unele intervale au coborât până la zero sau sub zero. A început ca o știre germană și e azi un fenomen recurent în bună parte din Europa, România inclusă: rezultatele orare ale Pieței pentru Ziua Următoare (PZU) sunt publicate de OPCOM, iar Transelectrica echilibrează sistemul în timp real.

Pentru un prosumator casnic din România, efectul e deocamdată indirect. Ofertele cu preț indexat orar există — Electrica are un produs de acest tip pentru clienții casnici cu contor inteligent — dar sunt încă rare, iar majoritatea gospodăriilor au un tarif nediferențiat, cu același preț în fiecare oră. Dacă ești pe un astfel de tarif, prețurile mici de la prânz nu ajung la tine direct. Raționamentul despre *când* să consumi rămâne însă identic, pentru că ceea ce contează pentru tine e altceva: cât valorează un kWh consumat pe loc față de unul injectat.

## Cât valorează de fapt un kWh injectat

Aici e miezul, și e specific României. Pentru instalațiile de până la 200 kW pe loc de consum se aplică în continuare compensarea cantitativă: un kWh injectat se scade dintr-un kWh consumat ulterior, cantitativ, unu la unu. Legea 160/2026, publicată în Monitorul Oficial nr. 603 din 23 iulie 2026, menține acest mecanism până la 31 decembrie 2030. Rețeaua funcționează, în limita consumului tău, ca un depozit sezonier.

Două nuanțe schimbă totuși calculul.

Prima: compensarea se aplică doar până la nivelul energiei pe care o consumi. Ce injectezi în plus, peste consum, nu se compensează — e cumpărat de furnizor la un preț sensibil mai mic decât cel la care cumperi tu energie. În oferta de serviciu universal a Electrica Furnizare pentru prosumatorii casnici valabilă în trimestrul al doilea din 2026, prețul energiei active era 0,75570 lei/kWh fără TVA, din care se scădeau costul estimat de dezechilibru și componenta de furnizare — rezultând în jur de 0,45 lei/kWh pentru surplus. Cu alte cuvinte, surplusul care depășește consumul valorează cam 60% din energia pe care o cumperi.

A doua: modul exact în care se face decontarea e stabilit prin metodologia ANRE (Ordinul ANRE nr. 15/2022), pe care Legea 160/2026 obligă ANRE să o modifice. La data acestui articol proiectul de metodologie actualizată nu era încă publicat. Până apare, verifică pe factura ta și în oferta furnizorului tău cum sunt tratate componentele de rețea, acciza și TVA — nu te lua după exemple numerice găsite pe internet, inclusiv al meu, care descriu o ofertă cu perioadă de valabilitate expirată.

Concluzia practică nu se schimbă indiferent de detalii: kilowattul-oră consumat în momentul în care îl produci valorează mai mult decât cel injectat. Iar la finalul anului, dacă ai injectat mai mult decât ai consumat, diferența nu ți se plătește la prețul de raft.

## Transformă surplusul în ceva util

Trucul e să nu mai lași energia de la prânz să se scurgă în rețea la valoare mică și să începi să o absorbi în casă. Încarcă bateria. Încălzește apa din boiler. Răcește casa în avans, înainte de orele de seară, sau pornește aerul condiționat exact în intervalul de producție maximă — o potrivire aproape perfectă în verile din Câmpia Română și din Dobrogea. Încarcă mașina electrică. Pornește pompa de piscină, mașina de spălat vase, mașina de spălat rufe. Tot ce e flexibil, mută-l în fereastra de surplus.

Bateria merită menționată separat, pentru că în România a devenit deja normă: tot din datele ANRE, la 30 iunie 2026 erau 127.084 de prosumatori cu sisteme de stocare instalate, adică peste o treime din total. Motivul principal nu e arbitrajul de preț, ci consumul de seară și rezistența la penele de curent.

## Planifică, nu reacționa

Partea bună e că nimic din toate astea nu trebuie ghicit. Fereastra de surplus de mâine e previzibilă, iar o prognoză pe mai multe zile îți lasă să-ți organizezi toată săptămâna: concentrează consumurile mari și flexibile în zilele cu mult surplus și lasă-le mai moale în cele înnorate. Prea mult soare încetează să fie o problemă și devine cea mai ieftină energie pe care o cumperi tot anul.
