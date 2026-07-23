---
title: "Dlaczego zwykła prognoza pogody nie mówi, ile wyprodukują panele"
description: "„Słonecznie\" nie znaczy „dużo prądu\". Czym różni się irradiancja od zachmurzenia i dlaczego panele potrzebują własnej prognozy — tłumaczymy prosto."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "weather-vs-output"
seo:
  ogTitle: "Prognoza pogody a produkcja PV — czemu to nie to samo"
---
„Jutro słonecznie, 22 stopnie" — i co z tego wynika dla Twojej instalacji? Zaskakująco niewiele. Prognoza pogody i prognoza produkcji PV odpowiadają na różne pytania, a przekładanie jednej na drugą „na oko" prowadzi do systematycznych pomyłek. Oto trzy powody, dla których panele potrzebują własnej prognozy.

## Powód 1: panele nie widzą „zachmurzenia", widzą irradiancję

Aplikacje pogodowe podają zachmurzenie w procentach. Panele reagują na irradiancję — moc promieniowania w watach na metr kwadratowy. Związek między jednym a drugim jest luźny: wysoka, cienka warstwa cirrusów przy „60% zachmurzenia" przepuszcza znacznie więcej energii niż niski stratus przy tych samych 60%. Do tego dochodzi światło rozproszone: w jasny, pochmurny dzień instalacja potrafi robić 20–30% mocy z samego dyfuzu, o czym „pochmurno" w aplikacji nic nie mówi.

## Powód 2: Twój dach zmienia wszystko

Ta sama irradiancja to zupełnie inne kWh zależnie od geometrii: azymut, kąt nachylenia, konfiguracja stringów, zacienienie od komina o 15:00. Instalacja wschód–zachód i południowa różnią się nie tylko sumą dzienną, ale całym kształtem krzywej produkcji. Żadna prognoza pogody nie zna Twojego dachu — a to on decyduje, kiedy naprawdę masz nadwyżkę.

## Powód 3: temperatura gra przeciwko intuicji

„Upał = dużo prądu" to najczęstszy mit. Panele tracą ok. 0,3–0,4% sprawności na każdy stopień powyżej 25°C temperatury ogniwa, która w lipcowe południe sięga 60–70°C. Dlatego rekordy padają w słoneczny, chłodny i wietrzny kwiecień, a nie w sierpniowy skwar — czego z prognozy „słonecznie, 33°C" nie wyczytasz.

## Mały słownik: GHI, DNI, DHI — trzy liczby, które widzą panele

Skoro nie zachmurzenie, to co? Irradiancję opisuje się trzema składowymi: **GHI** (Global Horizontal Irradiance) — całkowite promieniowanie padające na płaszczyznę poziomą; **DNI** (Direct Normal) — składowa bezpośrednia, ta, która rzuca cień; **DHI** (Diffuse Horizontal) — światło rozproszone przez chmury i atmosferę. W pełnym słońcu dominuje DNI, w pochmurny dzień pracujesz niemal wyłącznie na DHI — i właśnie dlatego panele produkują też „bez słońca". Model prognostyczny składa te trzy wartości w promieniowanie padające na *Twoją*, nachyloną i obróconą płaszczyznę.

Jak z tych składowych powstaje godzinowa prognoza kWh dla konkretnej instalacji — z kalibracją do rzeczywistych uzysków — opisuję krok po kroku w [przewodniku po prognozowaniu produkcji →](/blog/pl/prognoza-produkcji-fotowoltaiki). Tu wystarczy zapamiętać jedno: bez tych trzech liczb każda „prognoza dla PV" jest zgadywaniem.

## FAQ

**Czy da się „ręcznie" przeliczyć prognozę pogody na produkcję?**
Z grubsza — dla sumy dziennej w pełnym słońcu. Ale godzinowy rozkład, dni mieszane i sezonowe efekty zacienienia wymagają modelu; tu ręczne szacunki mylą się o dziesiątki procent.

**Czy „bezchmurnie" w aplikacji oznacza maksymalną produkcję?**
Nie zawsze — zamglenie, smog i wysokie chmury piętra Ci obniżają DNI mimo „0% zachmurzenia", a temperatura ogniwa robi resztę. Stąd różnice rzędu 10–20% między identycznie „bezchmurnymi" dniami.

**Skąd biorą się dane satelitarne?**
Z satelitów meteorologicznych, które mierzą odbicie promieniowania od chmur — na tej podstawie wyznacza się, ile energii dociera do powierzchni w danym punkcie siatki.
