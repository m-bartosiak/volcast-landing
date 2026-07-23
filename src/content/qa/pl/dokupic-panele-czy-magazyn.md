---
title: "Dokupić panele czy magazyn energii?"
description: "Jedna liczba rozstrzyga: ile energii kupujesz z sieci w godzinach produkcji, a ile wieczorem. Test z rachunku i dwie sytuacje, w których odpowiedź się odwraca."
lang: pl
draft: true
category: "k3"
guide: "jak-zwiekszyc-autokonsumpcje-fotowoltaika"
translationKey: "qa-panels-or-battery"
seo:
  ogTitle: "Dokupić panele czy magazyn energii? Prosty test"
---
Rozstrzyga jedna obserwacja: **kiedy kupujesz prąd z sieci.** Jeśli dokupujesz go głównie wieczorem i nocą, a w dzień masz nadwyżki — brakuje Ci magazynu, nie paneli. Jeśli nawet w słoneczne dni import trwa również w południe — najpierw panele. Przy zdrowej proporcji dzisiejszej instalacji magazyn wygrywa częściej, bo problemem typowego domu nie jest za mało produkcji, tylko produkcja nie wtedy, kiedy trzeba.

## Dlaczego tak to działa

Dodatkowe panele zwiększają nadwyżkę w godzinach, w których już masz nadwyżkę — a ta w net-billingu jest warta 2–3× mniej niż energia zużyta. Magazyn nie produkuje nic, ale przenosi istniejącą nadwyżkę na drogie godziny — podnosi wartość każdej kWh, którą już masz. Dlatego dokładanie paneli bez zagospodarowania obecnego eksportu to skalowanie najsłabiej opłacalnej części systemu. Odwrotnie, panele wygrywają gdy: instalacja jest mała względem zużycia (import nawet w słoneczne południa), planujesz pompę ciepła/EV (skokowy wzrost zużycia), masz tanią wolną powierzchnię dachu, a falownik i przyłącze mają zapas.

## Co zrobić

1. **Wyciągnij z falownika/HA dwie liczby za ostatnie 2–3 miesiące:** energia oddana do sieci oraz energia kupiona w podziale dzień/wieczór (jeśli licznik nie daje podziału, wystarczy obserwacja tygodnia w aplikacji).
2. **Duży eksport + zakup wieczorem → magazyn.** Pojemność dobierz do wieczornego zużycia (osobna odpowiedź o doborze).
3. **Zakup także w dzień → panele,** pilnując stosunku DC/AC falownika (~do 1,3) i zgody operatora przy zwiększaniu mocy.
4. **Wariant pośredni za darmo:** zanim wydasz cokolwiek, przesuń zużycie w godziny produkcji (bojler, AGD wg prognozy) — bywa, że „brakujący magazyn" okazuje się kwestią godziny prania.
