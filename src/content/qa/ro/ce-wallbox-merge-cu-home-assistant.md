---
title: "Ce wallbox se integrează cu Home Assistant?"
description: "Caută API local sau OCPP, curent de încărcare reglabil și zero dependență de cloud. Lista de verificare contează mai mult decât orice listă de mărci."
lang: ro
draft: false
category: "k5"
guide: "incarcarea-masinii-electrice-din-fotovoltaic"
translationKey: "qa-ev-charger-ha"
seo:
  ogTitle: "Stații de încărcare care merg bine cu Home Assistant — ce verifici"
---
Mai important decât numele mărcii este lista de verificare: **control local (API nativ, MQTT sau OCPP), curent de încărcare reglabil și nicio dependență de cloudul producătorului**. O stație care bifează cele trei poate urmări surplusul tău fotovoltaic amper cu amper din Home Assistant; una blocată în cloud rămâne la mila unei aplicații și a conexiunii la internet.

## De ce controlul local decide totul

Încărcarea „după soare” înseamnă ajustarea curentului la fiecare minut sau două, pe măsură ce trec norii. API-urile din cloud adaugă secunde de întârziere, limite de rată și risc de indisponibilitate — acceptabil pentru „pornește la ora 2 noaptea”, inutilizabil pentru urmărirea surplusului. Variantele solide sunt: stațiile cu **integrare bună în Home Assistant și API local** (nume întâlnite frecvent în comunitatea HA sunt Wallbox, go-e, Easee, openWB și Zaptec — verifică starea actuală a integrării înainte să cumperi), orice echipament care vorbește **OCPP** (standard deschis, cu o integrare HA solidă) sau proiectele **EVSE** de tip DIY, cu MQTT nativ.

Curentul reglabil este a doua poartă: încărcarea din surplus funcționează prin modulare între aproximativ 6 A și maximul stației, pe fază. Stațiile care doar pornesc și opresc pot face o încărcare solară grosieră, dar diferența de granularitate se vede direct în procentul tău de autoconsum. Contează și racordarea ta: la o alimentare monofazată de 230 V, plafonul practic al stației este mult mai jos decât la una trifazată, iar surplusul de la prânz trebuie modulat, nu setat la maximum.

## Ce ai de făcut

1. **Înainte să cumperi, caută pe forumul HA modelul plus cuvântul „integration”** — cinci minute de citit îți arată dacă controlul e local, prin cloud sau reconstituit prin inginerie inversă.
2. **Preferă suportul OCPP ca plasă de siguranță** — chiar dacă serviciul cloud al producătorului se strică sau dispare, calea protocolului deschis rămâne.
3. **Verifică reglarea dinamică a curentului chiar în integrare**, nu doar în fișa tehnică — unele integrări expun citiri, dar nu și comenzi.
4. **Verifică și tariful tău** — dacă furnizorul îți oferă un preț diferențiat pe zone orare, asigură-te că stația poate fi programată pe intervalul ieftin, nu doar pornită manual.
5. **Abia apoi construiește logica de surplus** — aceeași schemă de prognoză plus priorități ca la ceilalți consumatori, cu mașina de obicei după apa caldă, dar înaintea injecției în rețea.
