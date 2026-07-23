---
title: "Co to jest krzywa P(U) / Volt-Watt i czy ją włączyć?"
description: "Krzywa P(U) każe falownikowi łagodnie redukować moc przy rosnącym napięciu zamiast twardo się wyłączać. Kiedy ją włączyć i czego dopilnować u instalatora."
lang: pl
draft: true
category: "k1"
guide: "prognoza-produkcji-fotowoltaiki"
translationKey: "qa-volt-watt"
seo:
  ogTitle: "Krzywa P(U) / Volt-Watt — co to jest i czy włączyć?"
---
Krzywa P(U), zwana też Volt-Watt, to funkcja falownika, która **stopniowo redukuje oddawaną moc, gdy napięcie sieci rośnie** — np. od 250 V w dół, tak aby nie dobić do 253 V i twardego wyłączenia. Jeśli falownik wyłącza się od przepięć, jej aktywacja to zwykle różnica między utratą kilku procent produkcji a utratą kilkudziesięciu.

## Dlaczego to działa

Twarde wyłączenie to zero produkcji przez kilkadziesiąt sekund do kilku minut, wielokrotnie dziennie — a po powrocie napięcie znów rośnie i cykl się powtarza. Redukcja liniowa działa inaczej: falownik oddaje np. 85–95% mocy, napięcie stabilizuje się tuż pod progiem i produkcja trwa. Oddajesz trochę mniej w szczycie, ale nie tracisz całych okien produkcji. Krzywe P(U) i Q(U) są przewidziane w wymaganiach sieciowych (NC RfG / normy przyłączeniowe) — to standardowa, legalna funkcja, nie „kombinowanie".

## Co zrobić

1. **Sprawdź w logach, czy problemem są przepięcia** (kody OV / grid overvoltage w słoneczne południa). Krzywa P(U) leczy ten konkretny problem — nie pomoże na inne usterki.
2. **Poproś instalatora o aktywację P(U)** zgodnie z wymaganiami Twojego operatora — parametry progów bywają narzucone w warunkach przyłączenia. Jeśli instalator odmawia „bo tak", poproś o pisemne uzasadnienie; zwykle wtedy znajduje ustawienia.
3. **Nie ustawiaj progów na oko samodzielnie** — zbyt niska wartość początkowa redukcji to oddawanie mocy bez potrzeby przez cały sezon.
4. **Zgłoszenie do operatora i tak złóż** — krzywa ogranicza straty, ale przyczyną pozostaje sieć; bez zgłoszeń operator nie ma formalnego powodu jej modernizować.
5. **Obserwuj efekt w danych:** po aktywacji porównaj tygodnie przed/po — liczba wyłączeń powinna spaść niemal do zera, a dzienna produkcja wzrosnąć.
