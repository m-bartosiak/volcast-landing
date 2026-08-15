---
title: "Când pornești boilerul și mașina de spălat pe fotovoltaic"
description: "La ce oră pornești boilerul și electrocasnicele ca să folosești energia ta fotovoltaică: o regulă simplă, exemple pe ore și cum automatizezi tot."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "appliances"
seo:
  ogTitle: "Când pornești electrocasnicele pe soare — ghid practic"
---
Răspunsul scurt: **atunci când sistemul tău produce mai mult decât consumă casa** — de obicei undeva în intervalul 10:00–15:00, dar orele exacte depind de vreme, de sezon și de orientarea panourilor. Ghidul de față îți arată cum găsești fereastra aceea pentru sistemul tău, în loc să ghicești.

## De ce contează ora, de fapt

În România, compensarea cantitativă îți scade 1 kWh injectat din 1 kWh consumat ulterior, până la nivelul consumului tău, așa că prima reacție e firească: dacă oricum se compensează, de ce să mai mut consumul? Pentru că se compensează cantitatea de energie, nu întreaga factură.

Tarifele de distribuție și de transport, acciza și TVA rămân legate de energia pe care o consumi din rețea, iar surplusul care depășește consumul tău nu intră în compensare: el este cumpărat de furnizor la un preț sensibil mai mic decât cel pe care îl plătești. În metodologia ANRE în vigoare (Ordinul nr. 15/2022, cu modificările ulterioare) prețul de achiziție este cel al energiei active, minus marja de furnizare și costul estimat de dezechilibru. Concret, în oferta de serviciu universal pentru prosumatori casnici a Electrica Furnizare din trimestrul al doilea din 2026 asta însemna în jur de 0,45 lei/kWh, față de un preț final de circa 1,48–1,57 lei/kWh cu TVA. Numerele tale sunt în oferta furnizorului tău — merită căutate o dată.

Concluzia practică: un kilowatt-oră consumat direct de pe acoperiș este întotdeauna cel puțin la fel de bun ca unul injectat, iar peste pragul compensării este de două-trei ori mai bun.

Boilerul electric, mașina de spălat, mașina de spălat vase, uscătorul și stația de încărcare pentru mașină sunt cele mai ușor de mutat consumuri dintr-o casă. Doar o rezistență de 2–3 kW care merge 1,5–2 ore înseamnă 3–6 kWh pe zi: mutarea ei de seara la prânz se vede în factura de la sfârșitul lunii.

## Regula nr. 1: nu ora contează, ci surplusul

Sfatul popular „pornește tot între 11 și 14” funcționează doar așa și așa, pentru că:

- **În aprilie**, un sistem de 5 kWp orientat spre sud poate avea surplus încă de la ora 9.
- **În noiembrie**, în Câmpia Română cu ceață radiativă, același sistem poate să nu aibă deloc — iar încălzirea apei la prânz nu economisește nimic.
- **Sistemele est–vest** au două cocoașe de producție și o fereastră de surplus mai lungă, dar mai joasă.
- **În zilele variabile**, vârful se mută cu ore sau este pur și simplu prea mic pentru o rezistență de 3 kW.

Întrebarea corectă este alta: *cât va rămâne mâine după consumul de bază și în ce ore?* Exact la asta răspunde o prognoză de producție orară.

## Cum fac eu acasă (sistem de 5,2 kWp)

În fiecare seară, o privire pe prognoza pentru a doua zi. Trei scenarii:

**Zi senină, prognoză de peste 25 kWh.** Boilerul pornește la 10:30, mașina de spălat la prânz, mașina de spălat vase la 13:30 — totul intră în surplus și tot mai rămâne destul de injectat.

**Zi variabilă, 10–15 kWh.** Iau cele două ore mai puternice din prognoza orară (să zicem 12:00–14:00) și pun acolo doar boilerul. Rufele așteaptă o zi mai bună sau merg noaptea, dacă am o ofertă diferențiată pe zone orare.

**Zi acoperită, sub 6 kWh.** Nu are rost să te amăgești: apa caldă se face pur și simplu în ora cea mai ieftină din tariful tău.

Ideea e că decizia durează 30 de secunde seara, în loc să stai dimineața la fereastră interpretând norii. Eu folosesc [Volcast](https://volcast.app/ro/) pentru asta: aplicația arată prognoza orară pentru sistemul meu concret (orientare, înclinare, umbrire), iar notificarea de seară cu prognoza de mâine mă salvează când se schimbă vremea.

![Curba orară de producție fotovoltaică într-o zi senină, cu fereastra de surplus de la prânz evidențiată](/img/blog/hourly-surplus-ro.webp)

## Și tarifele pe zone orare?

Aici e diferența principală față de un sfat generic luat de pe un blog străin. În România, cele mai multe gospodării au tarif monom: același preț la orice oră din zi. Ofertele „diferențiat pe zone orare” (zi/noapte) există — comparatorul de prețuri al ANRE distinge explicit între varianta nediferențiată și cea diferențiată pe zone orare — dar sunt un produs comercial al furnizorului pe piața concurențială, nu un tarif reglementat general. Ai nevoie și de contor inteligent pentru ele. Există și oferte cu preț dinamic pentru clienți casnici, tot condiționate de contor inteligent integrat în sistemul de măsurare inteligentă, însă sunt încă rare.

Contează și momentul: plafonarea prețului la energie electrică pentru gospodării a expirat pe 30 iunie 2025 și nu a fost reintrodusă, iar de la 1 iulie 2025 piața de furnizare este complet liberalizată. De atunci ofertele diferă mult de la un furnizor la altul, așa că nu există un „interval ieftin” valabil pentru toată lumea. Deschide comparatorul ANRE și uită-te ce ai tu în contract.

Relația dintre tarif și fotovoltaic se citește apoi în doi timpi:

- **În orele în care produci**, tariful nu mai contează aproape deloc. Energia autoconsumată nu o plătești, iar peste pragul compensării economia e și mai mare decât orice diferență între zi și noapte. Soarele bate tariful.
- **În orele în care nu produci**, comandă tariful. Zile acoperite, seri de iarnă, consumuri care nu încap în fereastra de surplus: acolo, dacă ai ofertă diferențiată, locul rufelor este în intervalul ieftin de noapte. Dacă ai tarif monom, ora nu schimbă nimic și singurul lucru care contează rămâne surplusul.

## Nivelul următor: automatizează în loc să ții minte

Cu Home Assistant, totul se descurcă singur: prognoza intră în sistem ca senzor, iar o automatizare pornește rezistența printr-o priză inteligentă sau un contactor atunci când producția prevăzută pentru ora următoare depășește pragul. Rezultatul: apa se încălzește cu soare fără să atingi nimic, iar în zilele acoperite automatizarea se retrage spre orele ieftine.

Volcast are o integrare oficială pentru Home Assistant (se instalează din HACS din trei clicuri și necesită Premium): senzorii cu energia de azi, energia de mâine, puterea de acum și indicatorul de vârf de producție apar direct în Energy Dashboard.

Nu folosești Home Assistant? Notificările aplicației plus o priză cu temporizator setată seara te duc aproape la același rezultat.

## Tabel de referință

| Aparat | Putere | Când îl pornești |
|---|---|---|
| Boiler electric / rezistență | 2–3 kW | La mijlocul ferestrei de surplus; prioritatea nr. 1, cel mai mare și mai flexibil consum |
| Mașină de spălat | 0,5–2 kW | La începutul ferestrei; program la temperatură mai mică înseamnă vârf de putere mai mic |
| Mașină de spălat vase | 1–2 kW | După mașina de spălat, tot în interiorul ferestrei; programul eco durează mai mult, dar e mai plat |
| Uscător | 1,5–3 kW | Doar în zilele cu surplus mare |
| Încărcarea mașinii electrice | 3,7–11 kW | Capitol separat: cere cel mai mare surplus și o putere aprobată pe măsură |

## FAQ

**Chiar valorează mai mult energia autoconsumată decât cea injectată?**
Până la nivelul consumului tău, compensarea cantitativă le apropie foarte mult. Peste acel prag, nu e nici pe departe egal: surplusul se cumpără la un preț mult sub cel pe care îl plătești. Iar componentele necompensate din factură — distribuție, transport, acciză, TVA — înclină balanța spre autoconsum în ambele cazuri.

**La ce oră produce cel mai mult un sistem fotovoltaic?**
Sistemele orientate spre sud au de obicei vârful între 11:00 și 14:00 (ora de vară); cele est–vest au două vârfuri, aproximativ 09:00–11:00 și 14:00–16:00. Vârful real al zilei ți-l spune prognoza orară: norii îl pot muta serios.

**Are sens să pornesc tot la prânz?**
Doar dacă suma consumurilor încape în surplus. Dacă boilerul plus mașina de spălat plus mașina de vase depășesc producția de moment, diferența vine din rețea la preț întreg. Mai bine treci aparatele unul după altul prin fereastra de surplus.
