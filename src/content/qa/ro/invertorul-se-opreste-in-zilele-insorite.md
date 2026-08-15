---
title: "De ce se oprește invertorul în zilele însorite?"
description: "Opririle de la prânz sunt aproape mereu supratensiune în rețea, peste 253 V, nu un defect. Cum recunoști tiparul în jurnal și cum rezolvi concret problema."
lang: ro
draft: false
updated: 2026-08-14
category: "k1"
guide: "prognoza-productiei-fotovoltaice"
translationKey: "qa-inverter-trips"
seo:
  ogTitle: "Invertorul se oprește în zilele cu soare — de ce se întâmplă"
---
În marea majoritate a cazurilor invertorul se oprește pentru că **tensiunea din rețea urcă peste limita admisă (de regulă 253 V, adică 230 V plus 10%)** — iar la depășire este obligat să se deconecteze. Nu e un defect al sistemului tău: e o rețea locală aglomerată, în care toată strada injectează în același timp.

## De ce se întâmplă

Orice sistem care injectează ridică puțin tensiunea în propriul punct de racordare. Când zece-douăzeci de case cu panouri atârnă de același post de transformare, tensiunea de la prânz într-o zi senină trece de limită. Fenomenul e tot mai frecvent în România, pentru că numărul prosumatorilor a crescut exploziv: la 30 iunie 2026 erau 359.378 de prosumatori racordați la rețelele de distribuție, cu peste 4.000 MW instalați, potrivit datelor ANRE — iar concentrarea pe anumite localități și plecări de joasă tensiune e mult mai mare decât arată media.

Invertorul monitorizează tensiunea continuu, se deconectează cu eroare de supratensiune, așteaptă, se reconectează — și ciclul se repetă, uneori de zeci de ori pe zi. Fiecare deconectare te costă kWh exact în orele cele mai productive.

Tiparul e inconfundabil: opriri în zilele senine, între 11:00 și 15:00, niciuna în zilele acoperite, plus coduri de tip „grid overvoltage" sau „OV" în jurnalul invertorului.

## Ce faci

1. **Exportă jurnalele invertorului** — dată, oră și tensiune măsurată pentru fiecare oprire. Asta e dovada ta.
2. **Măsoară tensiunea și seara** — dacă e peste normal când panourile nu produc, problema din rețea e și mai ușor de demonstrat.
3. **Reclamă la operatorul de distribuție** (DEER, Rețele Electrice România, Delgaz Grid, Distribuție Energie Oltenia — în funcție de zona ta), nu la furnizorul care îți trimite factura. Cum faci o sesizare care chiar produce efecte găsești în răspunsul despre tensiunea peste 253 V.
4. **Întreabă instalatorul de reglajul volt-watt** — invertorul poate reduce lin puterea în loc să se deconecteze brusc; detalii în răspunsul despre curba volt-watt.
5. **Pune o cifră pe pierderi** — comparând producția reală cu o prognoză pentru sistemul tău exact vezi câți kWh dispar prin opriri, iar o cifră concretă face reclamația mult mai greu de ignorat.
