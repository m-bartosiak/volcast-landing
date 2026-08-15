---
title: "Cât de precisă e, de fapt, o prognoză fotovoltaică?"
description: "Măsurat pe 10.331 de zile de producție reală: eroarea mediană zilnică, de ce norii o măresc și cum calculezi cifra onestă pentru acoperișul tău."
date: 2026-09-22
author: "Michał Bartosiak"
tags: []
lang: ro
draft: true
translationKey: "forecast-accuracy"
seo:
  ogTitle: "Cât de precisă este prognoza producției fotovoltaice?"
---
Răspunsul scurt pentru un singur acoperiș, măsurat pe producția reală înregistrată de utilizatorii noștri: **eroarea mediană zilnică e în jur de 10% când cerul e senin și în jur de 18% când e complet acoperit**. E un singur număr pe zi, care compară prognoza acelei zile cu kilowații-oră pe care i-a produs efectiv invertorul — nu iradianța, nu media unei flote și nu cel mai bun caz.

Majoritatea cifrelor de acuratețe publicate în industrie nu se compară cu asta, iar motivul contează mai mult decât numerele în sine.

## Ce face eroarea pe măsură ce vin norii

![Eroarea mediană zilnică a prognozei pe categorii de nebulozitate, înainte și după calibrare, măsurată pe 10.331 de zile](/img/blog/forecast-error-by-cloud-ro.webp)

Cohorta cuprinde 137 de sisteme cu cel puțin 20 de zile de date și cel puțin cinci zile senine. Alte cincisprezece au rămas pe dinafară pentru că raportul dintre prognoză și producție în zilele senine ieșea din intervalul 0,75–1,33 — semnătura unei puteri introduse greșit, nu a unei erori de prognoză. Păstrarea lor ridica ponderea zilelor senine ratate cu peste 30% de la 8% la 14%.

Din graficul acesta merită citite două lucruri, iar al doilea aproape nimeni nu îl publică.

Primul: eroarea urcă constant cu nebulozitatea — 9,7% în categoria cea mai senină, 18,2% în cea mai acoperită. Fără prăpastie, fără surpriză, doar o pantă lină, pentru că nebulozitatea variabilă chiar e cel mai greu lucru de prezis din toată problema asta.

Al doilea: **abaterea mediană rămâne între 0,96 și 1,01 în fiecare categorie**. Abaterea e direcția; eroarea e mărimea. Un model care ar supraestima sistematic pe nori ar arăta un raport alunecând clar sub 1 — iar acesta nu o face. Așa că, atunci când prognoza ratează într-o zi acoperită, e cam la fel de probabil să fi fost prea mare cât să fi fost prea mică. Pe vreme rea prognoza nu devine pesimistă. Devine mai zgomotoasă.

Distincția e practică, nu academică. Eroarea aleatoare se mediază de-a lungul unei săptămâni — de asta planificarea săptămânală funcționează chiar și când o zi anume nu se potrivește. Eroarea sistematică nu se mediază niciodată, și doar pe aceea merită să o urmărești.

## De ce compararea cu cifrele furnizorilor e, în cea mai mare parte, o capcană

Prin industrie vei găsi afirmații de acuratețe în intervalul 5-15%. Cele mai multe măsoară ceva mai ușor decât acoperișul tău.

Prognozele de iradianță sunt mai simple decât prognozele de producție, pentru că se opresc înainte de partea complicată: unghiul panourilor tale, pragul de tăiere al invertorului, umbrirea, coeficientul de temperatură. Agregatele pe flotă sunt mai simple decât un singur amplasament, pentru că erorile de pe o sută de acoperișuri se anulează reciproc — pur și simplu așa funcționează media, și înfrumusețează serios cifra. Iar o acuratețe declarată doar pe zile cu cer senin e din nou cu totul altă afirmație.

A noastră e varianta grea a măsurătorii: un acoperiș, o zi, kilowați-oră reali. Când compari, singura întrebare care merită pusă e ce anume s-a măsurat, mai exact.

## Partea pe care o poți verifica singur

Nimic din ce e mai sus nu valorează mare lucru dacă nu poți verifica, așa că iată metoda — e aceeași pe care o folosim și noi intern.

1. **Ia cel puțin patru săptămâni de zile.** Mai puțin de atât și măsori vremea, nu acuratețea. O singură zi proastă nu demonstrează nimic, în niciun sens.
2. **Pentru fiecare zi, calculează |prognoză − real| ÷ real.** Asta e eroarea procentuală absolută zilnică. Ia mediana acestor valori, nu media — altfel o singură zi cu furtună domină tot rezultatul.
3. **Separă zilele senine de cele înnorate** înainte să calculezi orice medie. Amestecate, dau un număr care nu descrie niciuna dintre situații, și asta e cea mai frecventă greșeală din comparațiile de acest fel.
4. **Verifică direcția separat.** Fă media raportului prognoză ÷ real pe zilele tale senine. Aproape de 1,0 înseamnă că puterea sistemului e introdusă corect. Constant în jur de 0,8 sau de 1,2 înseamnă că nu e, și niciun model de prognoză nu îți va repara asta.

Pasul 4 e locul din care vin, de fapt, cele mai multe rezultate dezamăgitoare. Un decalaj constant e o problemă de configurare deghizată în problemă de prognoză, și merită eliminată înainte să judeci orice altceva.

## La ce să te aștepți de la calibrare

Barele indigo din grafic sunt modelul fizic brut; cele verzi sunt după ce bucla de calibrare a urmărit acoperișul tău vreo două săptămâni. Diferența e consecventă — cam două-trei puncte în fiecare categorie de vreme, adică un efect mai mare decât diferența dintre doi furnizori de prognoză concurenți.

De asta o acuratețe declarată din prima zi înseamnă puțin. Un model care nu a văzut niciodată instalația ta lucrează cu puterea, înclinarea și orientarea pe care le-ai declarat tu, iar acelea sunt aproximări ale unui acoperiș real, cu un coș de fum real pe el.

## Rezumatul onest

Pentru un singur acoperiș, pe kilowați-oră zilnici, pe toată gama de condiții meteo: **ziua mediană se încadrează în aproximativ 10-18%, în funcție de nori**, fără o înclinare sistematică într-o direcție sau alta, iar aproximativ 8% dintre zilele senine și 28% dintre zilele puternic înnorate ratează cu peste 30%.

E suficient de bine ca să programezi o mașină de spălat, o încărcare a mașinii electrice sau o repriză de pompă de căldură în fereastra de producție de mâine. Nu e suficient de bine ca să tranzacționezi energie pe cifra unei singure zile, iar cine îți spune altceva despre orice prognoză îți vinde ceva.
