---
title: "De ce producția se aplatizează la prânz?"
description: "O curbă plafonată la prânz indică fenomenul de clipping sau limitarea injecției — o setare din proiectare, nu un defect. Cum îți dai seama care e."
lang: ro
draft: false
updated: 2026-08-14
category: "k1"
guide: "prognoza-productiei-fotovoltaice"
translationKey: "qa-clipping"
seo:
  ogTitle: "Producție plată la prânz — clipping și limitarea injecției"
---
Un platou în vârful curbei de producție înseamnă că puterea e **plafonată — fie de puterea nominală a invertorului (clipping), fie de o limitare a injecției în rețea** setată la racordare sau direct în invertor. Ambele taie vârful unei curbe care altfel ar avea formă de clopot, iar în majoritatea sistemelor sunt decizii de proiectare, nu defecte.

## De ce se întâmplă

**Limitarea (clipping) la invertor:** dacă panourile au putere mai mare decât invertorul — să zicem 6,5 kWp de panouri pe un invertor de 5 kW — în zilele perfecte partea de curent continuu poate livra mai mult decât reușește invertorul să convertească, așa că el ține producția plată la maximul lui. Supradimensionarea e practică standard și de obicei rentabilă, pentru că panourile ating oricum rar puterea nominală; detalii în răspunsul despre invertorul mai mic decât panourile.

**Limitarea injecției:** unele sisteme sunt configurate să nu injecteze deloc în rețea („zero export") sau să injecteze doar până la o valoare stabilită, fie pentru că așa cere operatorul de distribuție prin avizul tehnic de racordare, fie pentru că așa a setat instalatorul invertorul. În reglementare există chiar o categorie separată, „prosumator fără injecție în rețea". Invertorul reduce atunci puterea cât să țină contorul la limită, indiferent ce ar putea da panourile.

Cele două seamănă, dar se comportă diferit: clippingul plafonează producția totală la puterea invertorului, în timp ce limitarea injecției plafonează doar ce pleacă spre rețea. Dacă pornești mașina de spălat în timpul platoului și producția totală crește, ai o limitare de injecție; dacă nu se schimbă nimic, e clipping.

## Ce faci

1. **Compară înălțimea platoului cu puterea nominală AC a invertorului** — dacă se potrivesc, e clipping.
2. **Verifică avizul tehnic de racordare și setările invertorului** — un platou situat sub puterea invertorului înseamnă aproape sigur o limitare a injecției.
3. **Mută consumul în orele de platou** — cu limitare de injecție, fiecare kWh consumat la prânz e un kWh pe care plafonul l-ar fi aruncat oricum. Boiler, mașină de spălat, încărcarea mașinii electrice.
4. **Compară producția reală cu o prognoză pentru sistemul tău** — o prognoză bună modelează și curba tăiată, așa că un platou *sub* cel așteptat semnalează o problemă reală (umbrire, string defect), nu proiectarea.
