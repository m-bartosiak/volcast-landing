---
title: "Magazyn energii — kiedy ładować z sieci, a kiedy ze słońca"
description: "Arbitraż cenowy w domu: kiedy opłaca się ładować magazyn tanim prądem z sieci, a kiedy słońcem. Zasady, przykłady liczbowe i rola prognozy produkcji."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: false
translationKey: "battery"
seo:
  ogTitle: "Magazyn energii — kiedy ładować z sieci, kiedy z PV?"
---
Domyślna logika magazynu jest prosta: ładuj nadwyżką z PV, rozładowuj wieczorem. I przez większość roku to wystarcza. Ale z taryfą dynamiczną dochodzi druga gra — arbitraż cenowy: ładowanie taniego prądu z sieci i zużywanie go w drogich godzinach. Sztuka polega na tym, żeby wiedzieć, którą grę grać danego dnia. Odpowiedź zależy od dwóch prognoz: cen (znane dzień wcześniej) i produkcji (prognozowana).

## Zasada podstawowa: słońce ma pierwszeństwo

Energia z własnego dachu jest „darmowa" — każda kWh z PV zmagazynowana i zużyta wieczorem oszczędza pełną cenę zakupu. Dlatego jeśli prognoza mówi, że jutrzejsza nadwyżka wystarczy do naładowania magazynu — **nie ładuj nocą z sieci**. Zapełnisz magazyn tanim prądem, a południowa nadwyżka pójdzie do sieci za ułamek wartości. To najczęstszy błąd początkujących arbitrażystów.

## Kiedy ładować z sieci

**Scenariusz 1: pochmurne jutro + drogi wieczór.** Prognoza PV niska (magazyn się nie napełni słońcem), a ceny wieczorne wysokie — ładuj nocą w dolinie cenowej tyle, ile potrzeba na pokrycie wieczornego szczytu. Zysk = różnica cen minus straty sprawności (~10–15% w obie strony).

**Scenariusz 2: ujemne lub zerowe ceny w południe.** Zdarza się w słoneczne weekendy: ceny giełdowe schodzą do zera, a Twoja produkcja i tak nie pokrywa mocy ładowania — dobicie magazynu z sieci kosztuje grosze lub wręcz przynosi grosze.

**Scenariusz 3: mroźny szczyt cenowy zapowiedziany na jutro.** Zimą, przy zapowiadanych ekstremalnych cenach wieczornych, warto wejść w wieczór z pełnym magazynem niezależnie od źródła ładowania.

## Prosty algorytm decyzyjny na każdy wieczór

1. Sprawdź ceny godzinowe na jutro (publikowane po południu).
2. Sprawdź prognozę produkcji na jutro.
3. Jeśli prognozowana nadwyżka ≥ pojemność magazynu → nic nie rób, słońce załatwi temat.
4. Jeśli nie → policz deficyt i zaplanuj doładowanie w najtańszych godzinach nocy.
5. Wieczorny szczyt zawsze pokrywaj z magazynu, nie z sieci.

Ten algorytm da się wyklikać ręcznie w 2 minuty dziennie — a docelowo powinien robić się sam: to dokładnie zadanie dla domowego EMS, który łączy ceny, prognozę i sterowanie falownikiem w jedną automatyczną pętlę.

## O czym pamiętać przy arbitrażu

Straty konwersji zjadają ~10–15% każdej „obróconej" kWh — arbitraż opłaca się dopiero przy wyraźnej różnicy cen. Cykle życia baterii: dodatkowe pełne cykle mają swój koszt, choć przy LiFePO4 (kilka tysięcy cykli) jest on niższy, niż się powszechnie sądzi. I wreszcie moc ładowania: nocna dolina trwa kilka godzin — sprawdź, czy Twój falownik zdąży w niej naładować to, co zaplanowałeś.

## FAQ

**Czy ładowanie magazynu z sieci jest legalne dla prosumenta?**
Co do zasady tak, ale konfiguracja falownika i sposób rozliczeń mają znaczenie — sprawdź warunki swojego sprzedawcy i ustawienia trybu pracy magazynu.

**Jaka różnica cen czyni arbitraż opłacalnym?**
Po uwzględnieniu strat: realnie od ok. 25–30% różnicy między godziną ładowania a rozładowania. Typowa doba na taryfie dynamicznej daje znacznie więcej.

**Czy to wszystko trzeba robić ręcznie?**
Dziś w dużej mierze tak (lub półautomatycznie w Home Assistant). Automatyzacja tej pętli — ceny + prognoza + sterowanie — to rola systemów EMS, nad którą pracujemy w ramach kolejnego produktu Volcast EMS.
