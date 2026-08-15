---
title: "Tarife dinamice la energie cu fotovoltaic — merită?"
description: "Preț orar, zone orare și fotovoltaic: cui i se potrivește un tarif dinamic în România, ce se găsește de fapt pe piață și cum arată o zi planificată."
date: 2026-07-23
updated: 2026-08-14
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "dynamic-tariff"
seo:
  ogTitle: "Tarif dinamic la energie și fotovoltaic: merită în România?"
---
La un tarif dinamic nu plătești energia la un preț fix stabilit în contract, ci la un preț legat de piața angro, plus tarifele de rețea, taxele și marja furnizorului. Pe piață prețul oscilează de câteva ori în aceeași zi: prânzurile senine sunt foarte ieftine sau chiar negative, serile de iarnă sunt scumpe. Pentru consumatorul mediu e o loterie; pentru cine are fotovoltaic, consumatori mutabili sau o baterie, e o unealtă. Scriu asta ca om care trăiește de ani buni cu un preț care se schimbă din oră în oră.

## Începe cu partea incomodă: în România nu prea ai de unde cumpăra

Asta e propoziția pe care majoritatea articolelor traduse din engleză o sar, și fără ea tot restul e o promisiune goală. Piața de furnizare pentru clienții casnici e complet liberalizată din 1 iulie 2025, când a expirat schema de plafonare a prețului la energie electrică — plafonarea acoperise doar perioada 1 aprilie – 30 iunie 2025 și nu a mai fost reintrodusă. Liberalizarea a adus concurență între oferte, dar nu a adus automat și prețuri orare pentru gospodării.

Ce găsești realist astăzi, în ordinea răspândirii:

- **Tarif nediferențiat.** Același preț la orice oră. E oferta implicită a majorității gospodăriilor din România. La el, mutarea consumului nu schimbă absolut nimic pe factură — schimbă doar cât iei din rețea, nu cât plătești pe kWh.
- **Tarif diferențiat pe zone orare.** Preț diferit pe intervale (tipic zi și noapte). Comparatorul de prețuri al ANRE distinge explicit cele două variante, „nediferențiat” și „diferențiat pe zone orare”, deci e un criteriu pe care îl poți filtra. Intervalele orare și diferența de preț depind însă de furnizor și de ofertă — citește-le în condițiile comerciale, nu le presupune.
- **Tarif cu preț orar, legat de piață.** Există, dar e o nișă. Electrica are un produs de acest tip pentru clienți casnici, condiționat de existența unui contor inteligent integrat în sistemul de măsurare inteligentă (SMI) în punctul tău de consum. Alte oferte apar și dispar; verifică-le în comparatorul ANRE, nu în topurile comerciale.

Condiția tehnică e aceeași peste tot: **contor inteligent**. Iar aici România e la jumătatea drumului. Ținta asumată prin PNRR și prin directiva europeană e acoperire completă până în 2028, dar în 2026 gradul de echipare diferă masiv de la o zonă la alta — sunt județe aproape complet acoperite și zone urbane mari unde abia se trece de jumătate. Practic: verifică întâi ce contor ai și dacă e citit la distanță, apoi discută despre tarife.

Concluzia onestă: dacă ai contor clasic și furnizor pe tarif nediferențiat, articolul ăsta e deocamdată despre viitorul tău apropiat, nu despre luna asta.

## Cum funcționează, acolo unde funcționează

Prețurile angro se formează pe Piața pentru Ziua Următoare (PZU), administrată de OPCOM, iar rezultatul se cunoaște **în după-amiaza zilei precedente**. Ăsta e miezul subevaluat al modelului: în fiecare seară poți planifica ziua următoare în întregime. Orele ieftine sunt de regulă noaptea și prânzurile senine; cele scumpe sunt rampele de dimineață și de seară, când toată lumea gătește, se spală și pornește aerul condiționat sau încălzirea.

Atenție la granularitate, pentru că e diferența dintre „pot muta consumul din oră în oră și se vede pe factură” și „pot muta doar dintr-un interval în altul”. O ofertă indexată la o medie lunară nu răsplătește mutarea unei mașini de spălat cu două ore. Înainte să semnezi, uită-te în condițiile comerciale ce indice se folosește și cu ce pas de timp.

## Cui i se potrivește

**Merită dacă cel puțin una e adevărată:** ai fotovoltaic (producția ta acoperă oricum orele de la mijlocul zilei), poți muta consumatori mari (apă caldă, mașină de spălat, mașină electrică), ai o baterie (arbitraj: încarci ieftin, descarci scump) sau încălzești cu o pompă de căldură cu acumulare.

**Nu merită dacă:** consumul tău stă nemișcat în orele de vârf, preferi o factură previzibilă în locul optimizării, un minut de planificare pe zi te enervează, sau oferta ta e indexată la o medie lunară și deci nu premiază mutarea orară.

## O zi reală pe tarif dinamic

Zi cu soare: noaptea, în intervalul ieftin, se încarcă tot ce trebuie să fie gata dimineața; ziua, casa trăiește din producția proprie, cu apa caldă, mașina de spălat vase și încărcarea mașinii în vârful de producție; în rampa scumpă de seară nu pornește aproape nimic, pentru că tot ce conta s-a făcut deja. Zi acoperită: planul se răstoarnă și consumatorii mari se mută în orele cele mai ieftine, de regulă noaptea.

Datele decisive nu sunt una, ci două puse împreună: **prețurile de mâine** (cunoscute) și **producția de mâine** (prognozată). Doar împreună răspund la întrebarea dacă apa se încălzește cu soare la ora 13 sau cu energie luată din rețea la 3 dimineața. Automatizarea exact a acestei bucle e meseria sistemelor de management energetic al locuinței (EMS); eu o fac deocamdată semiautomat în Home Assistant, cu senzorii de prognoză Volcast (integrarea necesită Premium).

## Riscurile, spuse pe față

Prețurile pot și să sară în sus: o seară rece și fără vânt valorează de câteva ori prețul mediu. Fără flexibilitate, un tarif dinamic poate ieși *mai scump* decât unul fix. Regulă practică: treci pe dinamic doar când reușești să muți cel puțin 30–40% din consum, sau când o baterie aplatizează vârfurile în locul tău.

Un al doilea risc, foarte românesc: puterea aprobată la branșament. Cu un branșament monofazat obișnuit nu poți porni simultan boilerul, cuptorul și încărcarea mașinii ca să prinzi o oră ieftină, așa că planul zilei se face în serie, nu în paralel.

## Și energia pe care o injectezi în rețea?

Sunt două relații separate: prețul la care cumperi energia din rețea, cu furnizorul tău, și modul în care ți se valorifică energia injectată, ca prosumator. Schimbarea tarifului de furnizare nu atinge a doua parte.

Pentru instalațiile casnice, care practic mereu se încadrează sub 200 kW, se aplică în continuare compensarea cantitativă: kWh injectați se scad, unu la unu, din kWh consumați, iar cadrul legal actual prevede menținerea acestui mecanism până la 31 decembrie 2030. Ce depășește consumul tău se cumpără de furnizor la un preț mai mic decât cel la care cumperi, iar metodologia ANRE care stabilește exact cum se calculează e în curs de actualizare după intrarea în vigoare a noii legi. Verifică regulile la zi pe site-ul ANRE și în oferta furnizorului tău, nu într-un articol de blog — inclusiv în acesta.

## Întrebări frecvente

**Pot să injectez în rețea și pe un tarif dinamic?**
Da. Statutul de prosumator și compensarea cantitativă nu depind de tipul de tarif la care cumperi energia; tariful dinamic schimbă mai ales cât plătești pentru ce iei din rețea.

**Unde văd prețurile de mâine?**
În aplicația furnizorului, dacă oferta ta e cu preț orar, sau în rezultatele publice ale Pieței pentru Ziua Următoare: prețurile pentru ziua următoare se cunosc din după-amiaza precedentă.

**Ce se întâmplă când prețurile scad sub zero?**
A consuma din rețea devine practic răsplătit: e ora ideală pentru încărcarea bateriei și pentru consumatorii mari. Detalii aici: [prețuri negative la energie →](/blog/ro/preturi-negative-la-energie).
