---
title: "Cum încălzesc apa automat cu surplusul fotovoltaic?"
description: "Boilerul este cel mai ieftin depozit de energie pe care îl ai deja. Temporizator, deviator de surplus sau automatizare după prognoză — comparate onest."
lang: ro
draft: false
category: "k5"
guide: "cand-pornesti-electrocasnicele-pe-soare"
translationKey: "qa-boiler-surplus"
seo:
  ogTitle: "Apă caldă din surplus fotovoltaic — trei variante, de la ceas la prognoză"
---
Boilerul este **cel mai ieftin depozit de energie pe care îl ai deja în casă** — 200 de litri țin în jur de 10 kWh sub formă de căldură. Există trei trepte prin care bagi surplusul în el: un temporizator simplu (gratuit, brutal), un deviator de surplus (precis, dar costă hardware) și automatizarea după prognoză printr-un releu inteligent (precisă *și* predictivă, cu cel mai ieftin hardware dacă rulezi deja Home Assistant).

## De ce asta e prima automatizare pe care o construiești

Încălzirea apei este un consum mare, complet mutabil în timp și cu depozit inclus: pe nimeni nu interesează *când* a fost încălzită apa, ci doar să fie caldă la ora dușului. Energia care altfel ar pleca în rețea rămâne în casă sub formă de apă caldă, iar asta se întâmplă zi de zi, toată vara — la același efort de configurare.

Treptele diferă prin ce știu. Un **temporizator** ghicește („la ora 11 e de obicei soare”) și încălzește din rețea în zilele gri. Un **deviator** (de tip Eddi sau iBoost, ori boilere cu pompă de căldură cu intrare SG Ready) măsoară injecția în timp real și modulează rezistența ca să consume exact surplusul — dar reacționează doar la momentul prezent. **Automatizarea după prognoză** adaugă viitorul: încălzește la prânz când prognoza promite surplus, mută încălzirea în fereastra ieftină de noapte când mâine arată gri și nu încălzește de două ori.

## Ce ai de făcut

1. **Verifică boilerul și rezistența electrică** — orice rezistență imersată merge; boilerele trifazate sau cele cu pompă de căldură au nevoie doar de releul potrivit sau de intrarea SG Ready.
2. **Începe azi cu temporizatorul prost** — un interval la prânz, vara; prinde surprinzător de mult din valoare, la cost zero.
3. **Urcă apoi la măsurare sau la prognoză** — fie un deviator, fie un releu inteligent plus o automatizare care compară surplusul prevăzut cu necesarul boilerului (răspunsul despre automatizările de autoconsum în Home Assistant arată schema).
4. **Adaugă regula pentru zilele gri** — dacă prognoza spune că nu ai surplus, încălzește în intervalul ieftin al tarifului tău, dacă ai unul diferențiat pe zone orare; regula asta singură este aproape tot ce un deviator comercial nu poate face.
