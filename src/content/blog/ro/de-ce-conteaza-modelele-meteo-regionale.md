---
title: "De ce o prognoză globală nu ajunge pentru fotovoltaic"
description: "Modelele globale netezesc tocmai norii care îți decid producția. De ce contează modelele meteo regionale pentru o prognoză fotovoltaică precisă."
date: 2026-07-28
author: "Michal"
tags: ["forecasting", "nwp", "weather-models", "accuracy"]
series: "geographic"
seriesOrder: 2
lang: ro
draft: false
seo:
  keywords: ["prognoza numerica a vremii", "model meteo regional", "ICON-EU AROME", "acuratete prognoza fotovoltaica", "model global vs regional"]
---

Orice prognoză de producție fotovoltaică pornește de la un model meteo, iar modelele nu îți văd cerul toate la fel. Distanța dintre un model global și unul regional de mare rezoluție e adesea distanța dintre o prognoză care prinde norii de după-amiază și una care îi ratează complet.

## Modelele globale: cadrul larg

Modelele globale, cum sunt IFS de la ECMWF sau GFS de la NOAA, acoperă toată planeta. Acoperirea asta se plătește în rezoluție. Lucrând pe o grilă de aproximativ 9–25 km, tratează ca uniform tot ce se află într-o singură celulă. Pentru configurațiile meteo de mare scală, cu câteva zile înainte, e perfect suficient. Pentru fotovoltaic, unde contează un singur cumulus care trece peste acoperișul tău, e o pată neclară.

Pune mental o celulă de 25 km peste țară și vezi imediat problema: aceeași celulă poate acoperi și creasta unui munte, și valea de la poalele lui, și o bucată de câmpie. Modelul le dă tuturor același cer.

## Modelele regionale: prim-planul

Aici își câștigă locul modelele regionale, de mare rezoluție. Serviciul german DWD rulează ICON-D2 la circa 2 km peste Europa Centrală, iar Météo-France rulează AROME la aproximativ 1,3 km. Peste România, veriga intermediară uzuală e ICON-EU, cu o grilă de ordinul kilometrilor, iar Administrația Națională de Meteorologie (ANM) rulează la rândul ei modele numerice regionale pentru teritoriul țării.

La rezoluțiile astea modelul începe să distingă linia țărmului, relieful și, esențial, norii convectivi care se ridică într-o după-amiază de vară. Adică exact detaliile care decid dacă la ora 15:00 ai 4 kW sau 1 kW pe invertor.

## Ce netezește o grilă globală în România

Relieful și poziția țării fac diferența vizibilă. Câteva situații pe care o celulă globală le rezolvă prost:

**Bariera Carpaților.** Lanțul montan blochează, canalizează și ridică masele de aer. Pe versantul de sub vânt apar situații de tip foehn, cu cer care se degajă rapid și o creștere bruscă a producției, în timp ce la câteva zeci de kilometri, pe versantul opus, plouă. O grilă grosieră face media între cele două și nu nimerește niciuna.

**Ceața radiativă din Câmpia Română și Bărăgan.** Iarna, nopțile senine și vântul slab lasă să se formeze un strat jos de ceață care poate ține până la prânz sau toată ziua. Fenomenul e local, subțire pe verticală și legat de umezeala solului. Un model de 25 km fie îl ignoră complet, fie îl întinde pe toată regiunea.

**Briza mării în Dobrogea și pe litoral.** Diferența de temperatură dintre apă și uscat pornește o circulație locală care mută norii spre interior în timpul zilei. Rezultatul: cerul de deasupra plajei rămâne adesea mai curat decât cel de la 30 km în interior, în aceleași ore.

**Depresiunile intramontane din Transilvania.** În Ciuc, în Țara Făgărașului sau în alte bazine închise, aerul rece se adună la fund și se formează inversiuni termice cu nori jos persistenți. Deasupra, la altitudine mai mare, e senin. Modelul global vede o singură valoare de nebulozitate pentru toată zona.

## Norii sunt tot jocul

Pentru fotovoltaic, momentul și locul norilor sunt totul, iar norul convectiv de vară e exact tipul cu care se chinuie un model global grosier. Un model de 2 km poate pune aglomerarea de nori de după-amiază deasupra văii potrivite, la ora aproximativ potrivită. Un model de 25 km îți poate spune doar că regiunea e „parțial noroasă".

Doar una dintre cele două informații e utilă când vrei să decizi la ce oră pornești boilerul, mașina de spălat sau încărcarea bateriei.

## Compromisul și răspunsul

Modelele regionale nu sunt un câștig gratuit. Acoperă orizonturi mai scurte, de la câteva ore la o zi-două, în timp ce modelele globale ajung la zece zile sau mai mult. Așa că răspunsul onest nu e să alegi unul dintre ele, ci să le combini: folosește modelul regional, mai fin, acolo unde e disponibil, pentru termenul scurt, și revino la modelul global pentru privirea pe termen lung.

Exact de asta un motor de prognoză bun se alimentează din mai multe modele simultan și alege cea mai bună sursă disponibilă pentru regiunea ta și pentru orizontul de prognoză cerut, în loc să aibă încredere într-un singur flux global valabil pentru toată planeta.

Cea mai bună prognoză pentru acoperișul tău nu e cea cu harta cea mai mare. E cea care știe în ce model să aibă încredere pentru bucata ta de cer — și când.
