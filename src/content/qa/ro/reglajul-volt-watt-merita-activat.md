---
title: "Ce e reglajul volt-watt și merită activat?"
description: "Volt-watt reduce lin puterea invertorului când crește tensiunea, în loc de deconectare bruscă. Când îți salvează energie și la ce trebuie să fii atent."
lang: ro
draft: false
updated: 2026-08-14
category: "k1"
guide: "prognoza-productiei-fotovoltaice"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "Volt-watt (curba P(U)) — ce este și când merită activat"
---
Volt-watt, numit și curba P(U), face invertorul să **reducă treptat puterea pe măsură ce tensiunea din rețea crește, în loc să se deconecteze de tot** când limita e depășită. Dacă invertorul tău se oprește pe supratensiune, activarea funcției recuperează de obicei energie: pierzi 20–30% din putere pentru câteva minute în loc să pierzi 100% pentru zece.

## De ce ajută

O deconectare pe supratensiune e totul-sau-nimic: invertorul iese din funcțiune, așteaptă, se reconectează și de multe ori se oprește iar peste câteva minute. Volt-watt înlocuiește prăpastia cu o pantă — pe măsură ce tensiunea se apropie de limită, puterea e redusă exact cât să țină conexiunea vie. Majoritatea invertoarelor moderne vândute în România (Huawei SUN2000, Growatt, Solis, Sofar, Deye, Fronius, SolarEdge) au funcția, dar instalatorii o lasă frecvent dezactivată.

Compromisul, spus onest: cu volt-watt limitezi permanent puțină energie în zilele cu tensiune mare, ca să nu pierzi mult. În plus, maschează problema de fond din rețea — de aceea funcționează cel mai bine împreună cu o sesizare formală la operatorul de distribuție, nu în locul ei.

## Ce faci

1. **Verifică întâi dacă invertorul chiar se oprește** — caută coduri de supratensiune în jurnal. Dacă nu ai opriri, nu schimba nimic.
2. **Cere instalatorului să activeze volt-watt** cu parametri conformi condițiilor din avizul tehnic de racordare — e o configurare care ține de interfața cu rețeaua, de obicei protejată de parolă de instalator, iar o setare greșită poate încălca condițiile tale de racordare.
3. **Continuă să reclami supratensiunea la operatorul de distribuție** — volt-watt e calmantul, reparația din rețea e tratamentul.
4. **Urmărește efectul în datele de producție** — comparând producția cu o prognoză pentru sistemul tău vezi dacă limitarea rămâne la câteva procente (în regulă) sau crește (semn că e timpul să escaladezi reclamația).
