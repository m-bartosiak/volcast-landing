---
title: "Cum fac automatizări de autoconsum în Home Assistant?"
description: "Structura recomandată: prognoză de producție, măsurare în timp real și o listă de priorități a consumatorilor, ca automatizările să nu se suprapună."
lang: ro
draft: false
category: "k5"
guide: "prognoza-fotovoltaica-in-home-assistant"
translationKey: "qa-ha-self-consumption"
seo:
  ogTitle: "Automatizări de autoconsum în Home Assistant — schema"
---
Schema care funcționează este **prognoză + măsurare în timp real + listă de priorități**: prognoza de producție decide planul zilei (ce consumatori primesc soare azi), citirile live de la invertor sau de la contor decid momentul (surplusul curge acum), iar ordinea de prioritate împiedică dispozitivele să se bată pe aceiași wați. Automatizările construite doar pe citiri live aleargă după nori, cele construite doar pe prognoză ignoră realitatea. Împreună sunt calme și precise.

## De ce structura bate automatizarea izolată

Abordarea naivă — „dacă injecția depășește 1.500 W, pornește mașina de spălat” — merge până la primul cumulus: puterea scade, automatizările pendulează, dispozitivele pornesc și se opresc în buclă. Structura robustă separă trei sarcini. **Planificarea** se face dimineața: prognoza spune dacă ziua aduce surplus suficient pentru apă caldă, pentru o încărcare a mașinii sau pentru niciuna, și armează niște helpere booleene. **Declanșarea** se face live: un senzor de injecție filtrat (medie pe 5–10 minute, cu histerezis) pornește consumatorul armat cu prioritatea cea mai mare. **Arbitrajul** este lista de priorități: întâi boilerul, apoi mașina electrică, apoi pompa de piscină, un consumator mare o dată.

Home Assistant are deja toate piesele: integrările de prognoză alimentează Energy Dashboard și template-urile (vezi răspunsul despre Energy Dashboard), utility meter urmărește cât a luat fiecare consumator din soare, iar helperele țin planul zilei. Fără cod scris de tine — doar automatizări care citesc planul.

## Ce ai de făcut

1. **Instalează o integrare de prognoză** (din HACS) și expune senzorii de producție oră cu oră; verifică-i pe o zi reală înainte să automatizezi ceva.
2. **Creează un senzor de surplus filtrat** — statistics sau filter peste energia injectată în rețea, fereastră de 5–10 minute, cu praguri de pornire și de oprire suficient de depărtate cât să nu pendulezi.
3. **Scrie planificatorul de dimineață** — o singură automatizare pe la ora 6 care compară kWh prevăzuți cu necesarul fiecărui consumator și armează helperele.
4. **Scrie câte o automatizare de declanșare pentru fiecare consumator**, condiționată de helperul propriu și de prioritățile de deasupra — asta împiedică boilerul și wallboxul să împartă surplusul și să rămână amândouă la jumătate.
5. **Urmărește o săptămână, apoi reglează pragurile** — cardurile de utility meter îți vor arăta autoconsumul crescând; corectează pragurile din planificator, nu declanșatoarele live.
