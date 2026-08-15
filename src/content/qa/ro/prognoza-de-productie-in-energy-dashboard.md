---
title: "Cum adaug prognoza de producție în Energy Dashboard?"
description: "Energy Dashboard poate suprapune o prognoză peste graficul de producție. Cum o conectezi printr-o integrare din HACS și ce îți spune linia punctată."
lang: ro
draft: false
category: "k5"
guide: "prognoza-fotovoltaica-in-home-assistant"
translationKey: "qa-ha-energy-dashboard"
seo:
  ogTitle: "Prognoză solară în HA Energy Dashboard: configurare și capcane"
---
Energy Dashboard are suport nativ pentru prognoze: instalezi o integrare de prognoză, apoi din **Settings → Dashboards → Energy** editezi sursa de producție solară și bifezi opțiunea de prognoză oferită de acea integrare. Linia punctată se suprapune peste producția reală și transformă tabloul de bord dintr-o oglindă retrovizoare într-un plan pentru ziua care urmează.

## De ce contează linia punctată

Fără prognoză, Energy Dashboard îți spune doar ce s-a întâmplat deja. Cu ea apar două utilizări noi. Prima, **planificarea**: o privire dimineața îți arată dacă azi e zi de rufe și de încărcat mașina sau una acoperită, iar orice automatizare poate citi exact aceiași senzori pe care îi folosește tabloul de bord. A doua, **monitorizarea stării de sănătate**: producția reală care urmează îndeaproape prognoza înseamnă că sistemul e în regulă, iar una care rămâne constant sub ea e cel mai devreme semn vizibil de umbrire, murdărire sau defect.

Calitatea prognozei decide cât te poți baza pe amândouă. Modelele simple estimează doar din locație și din geometria panourilor; serviciile bazate pe fizică adaugă iradianța din modelele meteo (ansamblu NWP) și se calibrează pe istoricul real al sistemului tău, ceea ce strânge eroarea suficient cât un minus de 15% să fie un semnal, nu zgomot. Ghidul comparativ trece prin opțiunile disponibile ca integrări pentru Home Assistant.

## Ce ai de făcut

1. **Instalează integrarea din HACS**, configurează instalația (locație, orientare, înclinare, kWp) și verifică apariția senzorilor noi (energia de azi, cea rămasă, ora următoare).
2. **Adaugă prognoza în Energy Dashboard** — editezi sursa solară și activezi prognoza integrării; linia punctată apare pe graficul de producție în decurs de o oră.
3. **Verifică rezultatul câteva zile** — o prognoză mult greșită pe vreme senină înseamnă de obicei o înclinare sau o orientare introdusă greșit, de reparat înainte ca vreo automatizare să se bazeze pe ea.
4. **Refolosește senzorii dincolo de tabloul de bord** — aceleași entități alimentează automatizarea de planificare a zilei și ținta de încărcare a bateriei; tabloul de bord e doar partea vizibilă.
