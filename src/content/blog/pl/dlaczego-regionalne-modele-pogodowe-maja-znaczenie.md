---
title: "Dlaczego globalna prognoza nie wystarcza dla fotowoltaiki"
description: "Globalne modele pogodowe rozmywają chmury, które decydują o produkcji PV. Oto dlaczego modele regionalne są kluczowe dla dokładności."
date: 2026-07-28
author: "Michal"
tags: ["forecasting", "nwp", "weather-models", "accuracy"]
series: "geographic"
seriesOrder: 2
lang: pl
draft: true
seo:
  keywords: ["numeryczna prognoza pogody", "regionalny model pogodowy", "ICON-D2", "dokładność prognozy PV", "ECMWF model regionalny"]
---

Każda prognoza fotowoltaiczna zaczyna się od modelu pogodowego, a nie wszystkie modele widzą Twoje niebo tak samo. Przepaść między modelem globalnym a wysokorozdzielczym regionalnym to często przepaść między prognozą, która łapie dzisiejsze popołudniowe chmury, a taką, która przegapia je zupełnie.

## Modele globalne: ujęcie szerokokątne

Modele globalne, jak IFS z ECMWF czy GFS od NOAA, obejmują całą planetę. Ten zasięg ma swoją cenę: rozdzielczość. Pracując na siatce mniej więcej 9 do 25 kilometrów, traktują wszystko wewnątrz jednej komórki jako jednorodne. Do szerokich układów pogodowych z kilkudniowym wyprzedzeniem to wystarcza. Dla fotowoltaiki, gdzie liczy się pojedyncza chmura kłębiasta przepływająca nad dachem, to plama.

## Modele regionalne: zbliżenie

Tu swoje miejsce zarabiają regionalne, wysokorozdzielcze modele. Niemiecki DWD liczy ICON-D2 w rozdzielczości około 2 km nad Europą Środkową. Francja ma AROME w okolicy 1,3 km. Kraje nordyckie i Holandia dzielą system HARMONIE-AROME; Wielka Brytania ma UKV z Met Office; USA mają HRRR od NOAA; Australia ma ACCESS z tamtejszego biura meteo. Przy takich rozdzielczościach modele zaczynają odwzorowywać linie brzegowe, ukształtowanie terenu i, co kluczowe, chmury konwekcyjne, które wyskakują w letnie popołudnie.

## Chmury to cała gra

Dla fotowoltaiki moment i miejsce chmur to wszystko, a letnia chmura konwekcyjna to dokładnie ten typ, z którym gruboziarnisty model globalny się męczy. Model 2 km potrafi umieścić narastające popołudniowe zachmurzenie nad właściwą doliną mniej więcej o właściwej godzinie; model 25 km powie Ci tylko, że w regionie jest "częściowe zachmurzenie". Jedno z tego przydaje się do zaplanowania magazynu i pralki.

## Kompromis i odpowiedź

Modele regionalne nie są darmową wygraną. Obejmują krótsze horyzonty, od godzin do paru dni, podczas gdy globalne sięgają dziesięciu dni i dalej. Uczciwa odpowiedź nie brzmi więc: wybierz jeden; brzmi: łącz je. Korzystaj z ostrego modelu regionalnego tam, gdzie jest dostępny, dla najbliższych godzin, a na dłuższą perspektywę wróć do globalnego. Właśnie dlatego dobry silnik czerpie z wielu modeli naraz i dobiera najlepsze dostępne źródło dla Twojego regionu i horyzontu prognozy, zamiast ufać jednemu globalnemu źródłu dla wszystkich na Ziemi.

Najlepsza prognoza dla Twojego dachu to nie ta z największą mapą. To ta, która wie, któremu modelowi zaufać dla Twojego skrawka nieba, i kiedy.
