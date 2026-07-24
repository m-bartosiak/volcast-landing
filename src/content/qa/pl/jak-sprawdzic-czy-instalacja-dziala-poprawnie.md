---
title: "Jak sprawdzić, czy instalacja fotowoltaiczna działa poprawnie?"
description: "Sąsiad i ulotka to złe benchmarki. Uczciwy test instalacji w 4 krokach: kształt krzywej, chłodny słoneczny dzień, porównanie z kalibrowaną prognozą."
lang: pl
draft: false
category: "k2"
guide: "prognoza-produkcji-fotowoltaiki"
translationKey: "qa-system-check"
seo:
  ogTitle: "Jak sprawdzić, czy instalacja PV działa poprawnie?"
---
Najkrócej: **porównaj rzeczywistą produkcję z prognozą policzoną dla Twojej konkretnej instalacji** (orientacja, kąt, moc, zacienienie) przez 1–2 tygodnie. Stała zgodność w granicach ±10–15% = instalacja zdrowa. Systematyczne odchylenie w dół lub powtarzalne „dziury" o tych samych godzinach = jest co diagnozować. Porównania z sąsiadem, ulotką czy „instalacją szwagra" nie są testem — każdy dach to inna geometria.

## Dlaczego to jedyny uczciwy test

Produkcja zależy od pogody i konfiguracji naraz, więc bez modelu nie odróżnisz „mało, bo pochmurno" od „mało, bo coś nie działa". Prognoza fizyczna liczy, ile *Twoja* konfiguracja powinna dać przy *tej* pogodzie — a wersja skalibrowana (ucząca się z Twoich rzeczywistych danych) uwzględnia nawet indywidualne straty i zacienienie. Wtedy odchylenie od prognozy przestaje być szumem, a staje się sygnałem diagnostycznym. Dokładnie w ten sposób wychwytuje się przymykane falowniki, uszkodzone optymalizatory czy rosnące drzewo sąsiada — zanim zobaczysz to na rachunku.

## Co zrobić

1. **Obejrzyj kształt dziennej krzywej** w aplikacji falownika: gładki łuk = OK; powtarzalne wcięcia o stałej porze = zacienienie; płaski stolik = ścinanie; chaotyczne zapady w słoneczny dzień = do zbadania.
2. **Zrób test szczytu:** chłodny, bezchmurny dzień, południe — moc chwilowa powinna sięgać ~75–90% mocy nominalnej (dlaczego nie 100% — osobna odpowiedź).
3. **Włącz porównanie prognoza vs produkcja** na 2 tygodnie (Volcast robi to automatycznie po podaniu konfiguracji; kalibracja zacieśnia widełki z każdym tygodniem).
4. **Dopiero z danymi dzwoń do instalatora:** „produkcja 18% poniżej skalibrowanej prognozy od 10 dni, wcięcie codziennie 14:00–15:30" to zgłoszenie, którego nie da się zbyć tekstem „taka pogoda".
