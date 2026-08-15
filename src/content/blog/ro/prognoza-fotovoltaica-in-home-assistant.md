---
title: "Prognoză fotovoltaică în Home Assistant — comparație"
description: "Forecast.Solar, Solcast sau Volcast? Acuratețe, limite de API și instalarea prognozei fotovoltaice în Home Assistant, comparate onest, pas cu pas."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: ro
draft: false
translationKey: "ha-comparison"
seo:
  ogTitle: "Prognoză fotovoltaică în Home Assistant — comparație"
---
Prognoza de producție e fundamentul automatizărilor energetice din Home Assistant: fără ea, boilerul, pompa de căldură și wallboxul reacționează la ce *este*, nu la ce *urmează*. Trei surse de prognoză domină scena: Forecast.Solar, Solcast și Volcast. Iată o comparație onestă — le-am folosit pe toate trei înainte să ne construim propriul motor.

## Comparație rapidă

| | Forecast.Solar | Solcast | Volcast |
|---|---|---|---|
| Model | statistic, simplificat | pe date satelitare, de foarte bună calitate | fizică + calibrare automată (filtru Kalman) |
| Calibrare pe sistemul tău | nu există | limitată (tuning) | automată, continuă |
| Variantă gratuită | API public cu limite de cereri | cont de hobby cu plafon zilnic strâns | prognoză pe 2 zile în aplicație |
| Prognoză completă + API | planuri plătite | planuri comerciale | Premium 4,49 $/lună |
| Rezoluție | orară | orară/30 min | orară + 5 minute |
| Instalare în HA | integrare inclusă | integrare din comunitate | integrare oficială HACS |
| Profil de orizont | nu | nu | da, modelat |
| Aplicație mobilă cu notificări | nu | nu | da (iOS/Android) |

*Situația din iulie 2026 — limitele și prețurile concurenței se schimbă; verifică termenii actuali înainte să decizi.*

## Forecast.Solar — punct de plecare foarte bun, dar cu un plafon de acuratețe

Cel mai mare atu al ei e lipsa totală de frecare: integrarea vine odată cu Home Assistant, completezi cinci câmpuri și gata. E un mod perfect legitim de a începe.

Limitele se văd în timp: modelul e simplificat și nu învață niciodată sistemul tău. Cu o umbrire neobișnuită, cu o dispunere est-vest sau după câțiva ani de degradare, distanța dintre prognoză și realitate crește — și e *sistematică*. O automatizare alimentată de o prognoză constant optimistă îți va încălzi apa constant din rețea.

## Solcast — date excelente, ușă gratuită îngustă

La calitatea datelor satelitare, Solcast joacă în propria ligă — deservește centrale de mari dimensiuni și traderi de energie. Problema celui care se joacă acasă e alta: contul gratuit are un plafon zilnic strâns de apeluri API, ceea ce transformă programarea actualizărilor într-un puzzle, iar înregistrarea și configurarea sunt vizibil mai tehnice. O sursă foarte puternică dacă te încadrezi în limite și nu ai nevoie de calibrare pe acoperișul tău.

## Volcast — fizică plus un model care îți învață acoperișul

Abordarea noastră combină un model fizic complet (transpoziția iradianței, corecții spectrale și de temperatură, profil de orizont) cu calibrarea automată: un filtru Kalman compară prognozele cu producția reală și ajustează parametrii modelului. După două-trei săptămâni prognoza îți cunoaște acoperișul, inclusiv umbra coșului de fum de la ora 15. Pe sistemul meu de 5,2 kWp, eroarea pentru ziua următoare coboară sub 10% în zilele senine.

În Home Assistant primești din start: `sensor.volcast_energy_today`, `sensor.volcast_energy_tomorrow`, puterea în timp real, un indicator de vârf de producție și integrare cu Energy Dashboard. Plus 288 de puncte la 5 minute pe zi prin API-ul REST — utile pentru încărcarea mașinii din surplus. Ca să fim corecți: API-ul cere Premium (4,49 $/lună); varianta gratuită e prognoza pe 2 zile din aplicația mobilă.

## Instalarea Volcast în HA — 5 pași

1. Deschide **HACS** → meniul ⋮ → *Custom repositories*.
2. Adaugă `https://github.com/volter-labs/volcast-ha-integration` ca integrare.
3. Apasă *Install* și repornește Home Assistant.
4. Generează o cheie API în aplicația Volcast (Premium) — `vk_...`.
5. *Settings → Devices & Services → Add integration* → „Volcast" → lipești cheia. Senzorii apar automat.

![Prognoza Volcast afișată direct în Energy Dashboard din Home Assistant, suprapusă peste producția reală GoodWe](/img/blog/ha-energy-dashboard-en.webp)

## Care pentru cine

**Forecast.Solar** — vrei *o* prognoză în 5 minute și nu atârni de ea automatizări care contează la factură. **Solcast** — ai nevoie de date satelitare de top și te încadrezi în limitele gratuite. **Volcast** — automatizezi bani reali (apă caldă, pompă de căldură, încărcarea mașinii electrice) și vrei o prognoză calibrată pe propriul acoperiș, plus o notificare pe telefon când se schimbă ziua de mâine.

## FAQ

**Pot rula două surse de prognoză în paralel?**
Da — e chiar un mod popular de a începe: le pui pe amândouă față în față cu producția reală în Energy Dashboard timp de două săptămâni și o păstrezi pe cea care greșește mai puțin pe sistemul *tău*.

**Se conectează Volcast la invertorul meu?**
Nu — prognoza se construiește din datele de iradianță ale modelelor meteo (ansamblu NWP) și din parametrii sistemului tău. Producția reală pentru calibrare poate fi notată manual sau preluată automat dintr-un senzor de energie din HA.

**Trimite integrarea date despre casa mea?**
În afara parametrilor sistemului, integrarea trimite doar valorile tale reale de producție — și doar dacă alegi să activezi calibrarea. Nimic altceva, fără urmărire.
