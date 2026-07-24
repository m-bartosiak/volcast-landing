---
title: "Dlaczego produkcja ścina się na płasko w południe?"
description: "Płaski „stolik\" na wykresie produkcji zamiast szczytu to clipping albo limit eksportu. Jak odróżnić jedno od drugiego i ile kWh naprawdę tracisz."
lang: pl
draft: false
category: "k1"
guide: "prognoza-produkcji-fotowoltaiki"
translationKey: "qa-clipping"
seo:
  ogTitle: "Produkcja PV ścina się na płasko w południe — dlaczego?"
---
Płaski „stolik" na wykresie produkcji zamiast łuku ze szczytem oznacza, że **coś ogranicza moc od góry**: najczęściej falownik o mocy mniejszej niż panele (clipping), ustawiony limit eksportu do sieci albo limit mocy zapisany w warunkach przyłączenia. To zachowanie skonfigurowane, nie awaria — ale warto wiedzieć, ile kosztuje.

## Dlaczego tak się dzieje

Trzy typowe przyczyny, po kolei najczęstsze: **(1) Clipping AC** — panele o mocy np. 8 kWp na falowniku 6 kW: w okolicach południa panele mogłyby dać więcej, niż falownik umie przetworzyć, więc wykres ścina się dokładnie na mocy znamionowej falownika. **(2) Limit eksportu** — falownik ma ustawioną maksymalną moc oddawaną do sieci (bywa wymagane przez operatora albo ustawione przy instalacji „na zapas"); wykres ścina się na wartości limitu plus bieżące zużycie domu. **(3) Redukcja napięciowa** — aktywna krzywa P(U) w przeciążonej sieci ścina nierówno i tylko w niektóre dni.

Rozpoznasz po wysokości ścięcia: równo na mocy falownika = clipping; na „okrągłej" wartości poniżej (np. 3 kW, 70% mocy) = limit eksportu; ścięcie ruchome, skorelowane z napięciem = P(U).

## Co zrobić

1. **Odczytaj wartość ścięcia** z wykresu dziennego i porównaj z mocą falownika oraz warunkami przyłączenia.
2. **Clipping:** zwykle nic — umiarkowany clipping (DC/AC do ~1,25) jest zaprojektowany i opłacalny; szczegóły w odpowiedzi o falowniku słabszym niż panele.
3. **Limit eksportu:** sprawdź w ustawieniach falownika (Export Control / Active Power Limit), czy wartość zgadza się z warunkami przyłączenia — zdarzają się limity ustawione omyłkowo lub „na wszelki wypadek". Zmiany tylko zgodnie z umową z operatorem.
4. **Policz stratę:** porównanie prognozy (ile instalacja mogła wyprodukować) z rzeczywistą produkcją pokazuje dzienne kWh „zostawione na stole" — to podstawa decyzji, czy walczyć o zmianę limitu.
5. **Wykorzystuj ścięte godziny:** w oknie ścinania każdy włączony odbiornik (bojler, ładowanie) to energia uratowana — limit dotyczy eksportu, nie Twojego zużycia.
