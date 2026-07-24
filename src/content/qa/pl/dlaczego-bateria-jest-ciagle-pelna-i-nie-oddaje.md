---
title: "Dlaczego bateria jest ciągle pełna i nie oddaje energii do sieci?"
description: "Pełna bateria w słoneczne dni to zwykle poprawnie działający priorytet pracy, limit eksportu albo tryb backup — nie usterka. Jak to rozpoznać w 5 minut."
lang: pl
draft: false
category: "k3"
guide: "magazyn-energii-kiedy-ladowac"
translationKey: "qa-battery-full"
seo:
  ogTitle: "Bateria ciągle pełna i nie oddaje do sieci — dlaczego?"
---
Najczęściej dlatego, że **system działa dokładnie tak, jak go ustawiono**: w trybie autokonsumpcji bateria z definicji stoi pełna w słoneczne tygodnie (rozładowuje się dopiero wieczorem), a „nieoddawanie do sieci" to zwykle ustawiony limit/blokada eksportu albo tryb rezerwy (backup), który trzyma wysoki minimalny poziom naładowania. Usterką bywa to rzadko.

## Dlaczego tak się dzieje

Falownik hybrydowy realizuje priorytety: najpierw bieżące zużycie domu, potem ładowanie baterii, na końcu eksport. Latem bateria napełnia się przed południem i do wieczora nie ma powodu jej ruszać — stąd wrażenie „stoi pełna cały czas". Jeśli dodatkowo nie widzisz eksportu, sprawdź trzy ustawienia: **limit eksportu** (Export Control — bywa ustawiony na 0 przy instalacjach „bez oddawania" albo omyłkowo), **rezerwę backup** (np. min. 80% SoC „na wypadek blackoutu" — bateria wtedy prawie nie pracuje) oraz **tryb pracy** (backup/UPS zamiast self-consumption). Każde z nich wygląda z zewnątrz identycznie: pełna bateria, zero eksportu.

## Co zrobić

1. **Otwórz wykres przepływów w aplikacji falownika** i sprawdź, dokąd idzie nadwyżka po napełnieniu baterii: jeśli produkcja spada do poziomu zużycia domu — masz blokadę eksportu; jeśli eksport płynie — wszystko gra, po prostu jest lato.
2. **Sprawdź tryb pracy i SoC minimalne:** self-consumption + rezerwa 10–20% to typowe zdrowe ustawienie; rezerwa 80–100% zamienia magazyn w drogi UPS.
3. **Limit eksportu skonfrontuj z warunkami przyłączenia** — jeśli operator nie wymaga zera, a jest zero, poproś instalatora o korektę.
4. **Zostaw baterii oddech:** cykliczne pełne naładowanie nie szkodzi LiFePO4, ale jeśli chcesz, by pracowała (arbitraż na taryfie dynamicznej), przejdź do odpowiedzi „ładować nocą czy słońcem".
