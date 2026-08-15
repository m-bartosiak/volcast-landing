---
title: "De ce norii sunt cea mai dificilă variabilă din prognoză"
description: "Temperatura e previzibilă, poziția soarelui se calculează exact. Norii însă sunt teoria haosului în acțiune și cea mai mare sursă de eroare din prognoză."
date: 2026-04-28
tags: ["clouds", "forecast-uncertainty", "irradiance", "weather", "forecasting"]
series: "deep-dives"
seriesOrder: 3
lang: ro
draft: false
seo:
  ogTitle: "De ce norii sunt partea cea mai grea din prognoza fotovoltaică"
  keywords: ["nebulozitate prognoza fotovoltaica", "incertitudine prognoza productie", "tipuri de nori productie fotovoltaica", "eroare prognoza nori"]
relatedPosts: ["de-unde-vin-prognozele-meteo", "lumina-directa-si-lumina-difuza", "nowcasting-day-ahead-si-saptamana"]
---

Dacă ai comparat vreodată o prognoză de producție cu ce a produs efectiv sistemul tău, probabil ai observat un tipar: zilele senine și zilele complet acoperite sunt prognozate bine. Zilele cu nebulozitate variabilă sunt un dezastru.

Nu e un defect al modelului de prognoză. E o proprietate fundamentală a norilor. Sunt, discutabil, cel mai greu lucru de prezis din toată știința atmosferei — și se întâmplă să fie exact variabila cea mai importantă pentru energia solară.

## De ce norii sunt altceva

Gândește-te la celelalte mărimi care contează pentru producția fotovoltaică. Poziția soarelui e astronomie pură: se calculează cu precizie de secundă de arc cu secole înainte. Temperatura aerului se schimbă gradual și e bine constrânsă de configurațiile meteo de scară mare; prognozele de temperatură pentru ziua următoare se încadrează de obicei în 1–2 °C.

Norii sparg acest tipar pentru că se află la intersecția mai multor procese fizice, fiecare acționând la altă scară. Dinamica atmosferică de scară mare decide dacă o regiune stă sub un dom de presiune ridicată (cer senin) sau sub un sistem frontal (acoperit). Procesele de mezoscară creează benzi de nori organizate și celule convective. Turbulența de microscară determină marginile exacte ale norilor, grosimea și proprietățile lor optice.

Modelele meteo se descurcă rezonabil cu scara mare. Se chinuie la mezoscară și la microscară — adică exact scara care contează pentru acoperișul tău.

## Nu toți norii sunt la fel

Tipurile de nori au efecte dramatic diferite asupra producției fotovoltaice și ridică probleme diferite de prognoză.

**Cirrus** (sus, subțiri, filamentoși) — reduc iradianța directă cu 10–30%, dar sunt relativ transparenți. Ușor de prognozat, pentru că sunt asociați cu structuri atmosferice de scară mare. Panourile tale produc în continuare bine sub cirrus.

**Stratus** (jos, uniformi, o pătură cenușie) — blochează cea mai mare parte a luminii directe și lasă să treacă mai ales radiație difuză. Reduc producția la 20–40% din valorile de cer senin. Relativ ușor de prognozat, pentru că stratusul se formează în condiții previzibile (inversiuni termice, fronturi calde) și persistă ore întregi.

**Cumulus** (pufoși, celule individuale) — aici se destramă prognoza. Norii cumuliformi sunt convectivi: se formează când suprafața se încălzește neuniform, creând bule de aer ascendent care condensează la altitudine. Sunt haotici prin natura lor — diferențe mici de încălzire a solului, de umezeală sau de forfecare a vântului produc câmpuri de nori complet diferite.

Un cumulus îți poate umbri panourile 5 minute, apoi trece și ai soare plin 15 minute până sosește următorul. Acest tipar de tip pornit-oprit generează oscilații rapide de putere pe care niciun model meteo cu rezoluție de peste 10 km nu le poate surprinde.

**Cumulonimbus** (nori de furtună, dezvoltați pe verticală) — reduc iradianța aproape la zero pe durata trecerii și sunt asociați cu fenomene severe. Furtunile în sine sunt oarecum previzibile (instabilitate atmosferică, umezeală, mecanism de ridicare), dar momentul și locul exact nu sunt.

## Problema zilelor parțial înnorate

Scenariul cel mai prost pentru prognoza fotovoltaică nu e ziua complet acoperită, ci ziua parțial înnorată. Și e tocmai condiția cea mai frecventă în multe climate, inclusiv în România.

Într-o zi cu nebulozitate variabilă, iradianța la tine acasă fluctuează sălbatic. Într-un minut ai 900 W/m² de radiație directă. Două minute mai târziu trece un nor și ești la 200 W/m² doar din difuză. Încă două minute și poți atinge 1.100 W/m² prin efect de intensificare la marginea norilor — un vârf scurt peste valoarea de cer senin, când lumina directă se combină cu lumina reflectată de marginile norilor din apropiere.

Un model meteo vede ziua asta ca „nebulozitate 50%, iradianță medie 600 W/m²”. Media e aproximativ corectă pentru un total orar, dar realitatea instantanee nu seamănă deloc cu un 600 W/m² neted.

Pentru gestionarea bateriei, pentru încărcarea mașinii electrice sau pentru orice aplicație căreia îi pasă de puterea dintr-un moment anume, nu de energia pe o oră întreagă, această mediere e o limitare serioasă.

## De ce se chinuie modelele

Modelele NWP reprezintă norii prin **scheme de parametrizare** — rețete matematice simplificate care estimează proprietățile norilor pornind de la variabile de scară mai mare, pe care modelul le poate rezolva. Modelul cunoaște temperatura, umiditatea și mișcarea verticală în fiecare punct de grilă. Parametrizarea le transformă în fracție de nori, conținut de apă lichidă și grosime optică.

Aceste parametrizări sunt aproximări. Funcționează statistic: mediate pe multe celule de grilă și pe multe zile, proprietățile norilor ies aproximativ corect. Dar pentru o celulă anume, într-o oră anume, norul parametrizat poate fi semnificativ greșit.

Provocarea de fond e **scara**: norii convectivi se formează la scări de sute de metri până la câțiva kilometri, în timp ce modelele globale au celule de grilă de 10–25 km. Modelul nu poate simula ce nu poate rezolva. Modelele regionale de înaltă rezoluție (grilă de 2–3 km) încep să poată reprezenta celule convective individuale, dar sunt disponibile doar pentru zone și orizonturi de timp limitate.

## Ce înseamnă asta pentru prognoza ta

Implicațiile practice sunt următoarele.

**Totalurile zilnice de energie** sunt prognozate rezonabil de bine. Chiar dacă modelul greșește momentul în care apar norii, fracția totală de nori pe o zi întreagă e de obicei aproximativ corectă. Prognozele de producție zilnică pentru ziua următoare se încadrează tipic în 15–25% față de realitate.

**Profilurile orare de putere** sunt mult mai greu de nimerit. Prognoza poate pune vârful de producție la ora 13, când în realitate el vine la ora 11, pentru că sistemul noros a ajuns mai devreme decât în model. Energia totală poate fi asemănătoare, dar sincronizarea e greșită.

**Variațiile de sub o oră** sunt practic imprevizibile peste 30–60 de minute. Acesta e domeniul prognozei imediate (nowcasting) — urmărirea norilor în timp real cu imagini satelitare, senzori la sol sau camere de cer, în loc să te bazezi pe predicțiile NWP.

**Zilele senine și cele complet acoperite** sunt prognozate bine, pentru că reprezintă stări atmosferice stabile. Modelul prinde configurația de scară mare care produce aceste condiții. Condițiile de tranziție, mixte, sunt cele care îl înving.

Volcast tratează asta onest. Modelul fizic produce cea mai bună estimare posibilă pornind de la datele meteo primite, dar nu se preface că poate prezice oscilații de putere de 5 minute într-o după-amiază cu nori împrăștiați. Pentru asta ar trebui un instrument complet diferit — unul care privește cerul în timp real, în loc să îl simuleze din modele meteo.

Scopul e să îți dea o estimare utilă de producție pentru ziua următoare și o formă corectă a curbei orare — și să fie transparent cu privire la locul unde stă incertitudinea. Ghici unde: în nori.
