---
title: "Încarc bateria noaptea sau las loc producției solare?"
description: "Răspunsul corect se schimbă zilnic, odată cu prognoza de mâine. Regula prin care eviți să plătești din rețea energia pe care soarele ți-o dă gratuit."
lang: ro
draft: false
updated: 2026-08-14
category: "k3"
guide: "baterie-incarcare-din-retea-sau-soare"
translationKey: "qa-night-vs-solar"
seo:
  ogTitle: "Încarci bateria noaptea sau aștepți soarele de mâine?"
---
Depinde de o singură întrebare: **va umple soarele de mâine bateria oricum?** Dacă prognoza spune da, încărcarea de noapte doar înlocuiește energie solară gratuită cu energie plătită din rețea. Dacă mâine se anunță gri, umplerea în intervalul ieftin e curat câștig. Răspunsul corect chiar se schimbă de la o zi la alta — de aceea o setare fixă lasă mereu bani pe masă.

## De ce o strategie fixă pierde

Încarci în fiecare noapte și, în zilele cu soare, bateria întâmpină dimineața deja plină: surplusul zilei nu mai are unde să se ducă. Nu încarci niciodată noaptea și, în zilele gri de iarnă, cumperi seara la preț de vârf energia pe care un interval ieftin ar fi acoperit-o. Fiecare politică are dreptate cam jumătate de an și greșește cealaltă jumătate.

Variabilele se pot ști dinainte: producția de mâine (o prognoză calculată pe sistemul tău), consumul de mâine (propriul tău tipar) și diferența de preț dintre noapte și seară. Logica încape într-o propoziție: încarcă noaptea doar cât nu-ți va da soarele.

Un avertisment pentru România: diferența de preț pe care se sprijină toată strategia nu e garantată. Tarifarea pe zone orare există, dar ca ofertă comercială a furnizorului pe piața concurențială, nu ca tarif reglementat valabil pentru toată lumea — comparatorul de prețuri al ANRE distinge explicit între oferte „nediferențiat” și „diferențiat pe zone orare”. Ofertele cu preț legat de piață, de tipul Electrica Dinamic, cer în plus un contor inteligent integrat în sistemul de măsurare al operatorului. Verifică întâi ce scrie în contractul tău.

## Ce ai de făcut

1. **Vezi dacă ai chiar un interval ieftin** — contractul tău și comparatorul ANRE îți spun dacă oferta e nediferențiată sau diferențiată pe zone orare; fără această diferență, întrebarea nici nu se pune.
2. **Uită-te la prognoză în fiecare seară** — kWh așteptați mâine față de capacitatea bateriei; o privire de zece secunde acoperă varianta manuală.
3. **Setează o țintă, nu un comutator** — majoritatea invertoarelor hibride acceptă „încarcă până la X% până la ora 06:00”; scalează X invers față de prognoza de mâine (zi gri → mare, zi cu soare → mic sau zero).
4. **Automatizează** — Home Assistant poate citi o prognoză de producție și seta automat ținta de noapte; răspunsul despre automatizările de autoconsum descrie tiparul.
