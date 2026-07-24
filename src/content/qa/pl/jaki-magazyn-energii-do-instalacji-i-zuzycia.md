---
title: "Jaki magazyn energii dobrać do instalacji i zużycia?"
description: "Pojemność magazynu dobiera się do wieczorno-nocnego zużycia, nie do mocy paneli. Prosty wzór, dwa przykłady i błąd, który popełnia większość kupujących."
lang: pl
draft: false
category: "k3"
guide: "magazyn-energii-kiedy-ladowac"
translationKey: "qa-battery-size"
seo:
  ogTitle: "Jaki magazyn energii do instalacji PV? Prosty dobór"
---
Magazyn dobiera się **do zużycia wieczorno-nocnego, nie do mocy paneli**. Prosty wzór: średnie dobowe zużycie od zachodu do wschodu słońca + 20% zapasu. Dla typowego domu (zużycie roczne 3500–5000 kWh) wychodzi zwykle **5–10 kWh**; magazyn 15–20 kWh przy takim zużyciu przez pół roku wozi powietrze.

## Dlaczego moc paneli to zły punkt wyjścia

Zadaniem magazynu jest przenieść południową nadwyżkę na wieczór i noc — więc jego sensowna pojemność to tyle, ile wieczorem i nocą zużywasz. Wszystko powyżej pracuje tylko wtedy, gdy masz i ogromną nadwyżkę, i ogromne nocne zużycie naraz — czyli rzadko. Sprzedawcy chętnie skalują magazyn do paneli („10 kWp to i 15 kWh"), bo marża rośnie z pojemnością; Twój zwrot z inwestycji — niekoniecznie. Wyjątki, w których większy magazyn się broni: pompa ciepła (duże zimowe zużycie nocne), ładowanie EV nocą z arbitrażu na taryfie dynamicznej, planowana rozbudowa zużycia.

## Co zrobić

1. **Zmierz swój wieczór:** z licznika lub HA odczytaj zużycie 18:00–7:00 przez 2–3 tygodnie w różnych porach roku. To jest Twoja pojemność bazowa.
2. **Sprawdź, ile eksportujesz:** magazyn napełni tylko to, co dziś oddajesz — jeśli eksport dzienny bywa mniejszy niż wieczorne zużycie, większy magazyn i tak się nie naładuje (poza siecią).
3. **Dodaj 20% zapasu** na degradację i głębokość rozładowania; przy pompie ciepła lub EV — policz ich udział osobno.
4. **Zweryfikuj moc, nie tylko pojemność:** falownik hybrydowy musi zdążyć naładować magazyn w oknie nadwyżki lub taniej taryfy (odpowiedź: ładować nocą czy słońcem).
5. **Dopiero potem porównuj oferty** — z liczbą kWh wynikającą z pomiarów, nie z ulotki.
