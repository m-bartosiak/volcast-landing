---
title: "Prognoza producției fotovoltaice — cât produci mâine"
description: "Cât va produce mâine sistemul tău? Model fizic, date din modelele meteo și calibrare: cum funcționează cu adevărat o prognoză de producție precisă."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "forecast-hub"
seo:
  ogTitle: "Prognoza producției fotovoltaice — cât produci mâine"
---
Cât va produce sistemul tău mâine? Majoritatea celor care au panouri răspund „depinde de vreme" și se opresc acolo. În realitate, după calibrare, producția se poate prognoza cu o acuratețe de circa 85% în zilele senine, oră de oră. E suficient să combini datele de iradianță din modelele meteo (ansamblu NWP) cu un model fizic al sistemului tău concret: azimut, înclinare, putere instalată și umbrire.

În articolul ăsta îți explic cum funcționează o prognoză profesionistă de producție, de ce nu e suficientă o aplicație meteo obișnuită și cum folosești prognoza în practică — ca să consumi propria energie atunci când o ai, în loc să o injectezi în rețea la o fracțiune din valoarea ei.

## De ce nu e suficientă o aplicație meteo

„Mâine e senin" nu îți spune aproape nimic despre producție. Între buletinul meteo și kilowatt-orele care ies de pe acoperișul tău stau mai multe straturi de fizică.

**Iradianța nu e nebulozitate.** Aplicațiile meteo arată gradul de acoperire cu nori, în procente, dar panourile răspund la iradianță — puterea radiației solare care ajunge pe o suprafață, măsurată în W/m². Un văl subțire de cirrus și o pătură joasă și compactă de stratus pot însemna amândouă „60% nori" și pot diferi la producție de două ori.

**Geometria acoperișului tău.** Aceeași iradianță dă un rezultat diferit pe o pantă orientată spre sud, înclinată la 35°, față de un sistem est-vest la 15°. Adaugă configurația stringurilor, panourile bifaciale și — factorul cel mai des ignorat — profilul de orizont: coșul de fum, copacul vecinului sau dealul după care dispare soarele la ora 16.

**Temperatura lucrează împotriva ta.** Panourile pierd randament pe măsură ce crește temperatura celulei (tipic 0,3–0,4% pentru fiecare grad peste 25 °C). De aceea recordurile de producție vin mai des într-o zi senină și răcoroasă de primăvară decât în toiul verii.

O prognoză bună de producție trebuie deci să parcurgă tot lanțul: **date de iradianță din modelele meteo (ansamblu NWP) → model al poziției soarelui → geometria și parametrii sistemului tău → corecții de temperatură și spectrale → kWh pentru fiecare oră**.

## Cum funcționează o prognoză bazată pe fizică

Sistemele moderne de prognoză fotovoltaică — de la instrumentele pentru parcurile mari până la aplicațiile pentru prosumatori — urmează aceeași schemă:

1. **Date de intrare:** prognoze de iradianță (GHI, DNI, DHI) dintr-un ansamblu de modele meteo, plus modelele numerice care furnizează temperatura și vântul.
2. **Model de transpoziție:** conversia iradianței din plan orizontal în planul panourilor tale, pentru poziția soarelui la fiecare oră.
3. **Modelul sistemului:** puterea instalată, randamentul invertorului, pierderile de sistem, umbrirea în funcție de oră și de anotimp.
4. **Rezultat:** curba de producție — azi, mâine și în zilele următoare.

Un model „de serie" ca ăsta e deja decent. Dar fiecare instalație are particularitățile ei: pierderi puțin diferite, umbrire subestimată, panouri care îmbătrânesc în ritmul lor. Aici intră în joc a doua piesă.

## Calibrarea: o prognoză care învață acoperișul tău

Abordarea cea mai eficientă e să compari prognoza cu producția reală și să corectezi modelul sistematic. La Volcast facem asta cu un filtru Kalman — un algoritm cunoscut din navigația prin satelit, care la fiecare măsurătoare nouă actualizează parametrii modelului exact atât cât merită încredere acea măsurătoare.

În practică: îți notezi producția zilnică reală, iar după două-trei săptămâni modelul „știe" despre sistemul tău lucruri pe care nu le conține nicio fișă tehnică — efectul real al umbririi de toamnă, pierderile efective ale invertorului, degradarea panourilor. Pe sistemul meu de 5,2 kWp, prognoza calibrată pentru ziua următoare greșește cu mai puțin de 10% în zilele senine.

![Prognoză și producție reală comparate pe 14 zile, sistem de 5,2 kWp: calibrarea Kalman coboară eroarea sub 10%](/img/blog/forecast-vs-actual-14d-en.webp)

## La ce îți folosește de fapt o prognoză de producție

**Planificarea consumului.** În România, energia pe care o injectezi în rețea se compensează cantitativ, kilowatt-oră la kilowatt-oră, până la nivelul consumului tău — dar compensarea acoperă doar componenta de energie. Tarifele de distribuție și de transport, acciza și TVA le plătești oricum pentru fiecare kWh extras din rețea, iar surplusul care depășește consumul îți este cumpărat de furnizor la un preț sensibil mai mic decât cel la care cumperi tu energie. Concluzia practică e aceeași ca peste tot: kilowatt-ora consumată direct în casă valorează mai mult decât aceeași kilowatt-oră care face un ocol prin rețea. Dacă știi că mâine surplusul apare între 11:00 și 14:00, exact în fereastra aceea trebuie să pornească boilerul, mașina de spălat, mașina de spălat vase și încărcarea mașinii electrice. Detalii aici: [Când pornești boilerul și mașina de spălat pe soare →](/blog/ro/cand-pornesti-electrocasnicele-pe-soare).

**Automatizarea casei.** Prognoza poate intra în Home Assistant și poate comanda automat consumatorii: rezistența boilerului pornește doar dacă e prevăzut surplus, iar pompa de căldură mută ciclurile de apă caldă în vârful de producție.

**Urmărirea stării sistemului.** Dacă producția reală se abate sistematic de la prognoza calibrată, ceva nu e în regulă — panouri murdare, un copac care a crescut, un string care cedează. Prognoza e reperul pe care aplicația invertorului, care arată doar trecutul, nu ți-l dă niciodată.

## Pornești în 5 minute

1. Instalează o aplicație cu prognoză bazată pe fizică — [Volcast](https://volcast.app/ro/) e gratuită la început (prognoză pe 2 zile) și funcționează cu **orice** sistem: fără login la invertor, fără chei API, fără conexiune cloud la echipamentul tău.
2. Introdu parametrii: azimut, înclinare, putere instalată și, opțional, dispunerea stringurilor și profilul de orizont.
3. Din prima zi ai o prognoză orară; dacă îți notezi producția reală, pornește calibrarea automată, care adaptează modelul la acoperișul tău săptămână de săptămână.

## FAQ

**Cât de precisă poate fi o prognoză de producție fotovoltaică?**
După calibrare, tipic în jur de 85% în zilele senine. Cele mai grele sunt zilele cu cumulus care se mișcă repede — acolo dispersează mai mult chiar și cele mai bune modele, deși totalul zilnic rămâne de obicei de încredere.

**Am nevoie de acces la invertor ca să prognozez producția?**
Nu. Prognoza se construiește din datele modelelor meteo (ansamblu NWP) și din parametrii sistemului tău. Accesul la invertor ajută doar la notarea automată a producției reale pentru calibrare — dacă o introduci manual o dată pe zi, funcționează la fel de bine.

**Care e diferența dintre o prognoză de iradianță și una de producție?**
Prognoza de iradianță îți spune câtă energie solară va ajunge. Prognoza de producție o trece prin geometria și parametrii sistemului tău concret și îți dă kilowatt-orele care ies de pe acoperișul tău.

**Funcționează prognoza și iarna?**
Da — iarna sunt mai multe zile acoperite, cu eroare relativă mai mare, dar exact atunci prognoza valorează cel mai mult: îți semnalează puținele zile senine pe care merită să îți muți consumul.
