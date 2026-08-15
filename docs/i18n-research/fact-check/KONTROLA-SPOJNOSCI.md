# Kontrola spójności — 9 plików Q&A k6 (it/fr/ro)

Root: `C:/Users/yakon/Documents/volcast-landing-it/src/content/qa/`
Stan repo: poprawki z weryfikacji **już naniesione** (commit `3f8c3e2`, drzewo czyste). Analiza poniżej dotyczy stanu PO poprawkach — plus faktu, którego nie było w przekazanych mi danych: **3 pliki rumuńskie nie zostały zweryfikowane w ogóle** (`docs/i18n-research/fact-check/PODSUMOWANIE.md:11-14` — przebieg trafił na limit sesji).

---

## 1. Sprzeczności między językami

Trio „ile warty jest 1 kWh oddany do sieci": `it/quanto-vale-1-kwh-immesso-in-rete.md`, `fr/combien-vaut-un-kwh-injecte.md`, `ro/cat-valoreaza-un-kwh-injectat.md`.

**Nie ma przenoszenia realiów sąsiedniego rynku.** Każdy plik opisuje własny mechanizm poprawnie co do typu: IT — RID + wciąż żywe SSP, FR — obligation d'achat bez jakiegokolwiek nettingu, RO — compensare cantitativă + odkup nadwyżki. Jedyna rzecz importowana między rynkami to **szablon narracyjny** („twój osobisty mnożnik"), nie fakt rynkowy — i to on niesie problem poniżej.

**Sprzeczność nośna: ta sama instrukcja rachunkowa, trzy różne odpowiedzi.** Część stała rachunku (abonament / quota fissa / quota potenza / canone RAI) istnieje we wszystkich trzech krajach, więc mechanizm jest tu identyczny — a teksty mówią co innego:

| plik | linia | brzmienie |
|---|---|---|
| it/quanto-vale | 23 | „dividi la spesa per i kWh prelevati **mettendo però da parte le quote fisse, la quota potenza e il canone televisivo**" — **poprawione** |
| fr/combien-vaut | 27 | „**montant total** de votre dernière facture divisé par les kWh soutirés : voilà votre prix réel du kWh" — **niepoprawione** |
| fr/vendre-son-surplus | 23 | „**divisez le montant total** par les kWh soutirés : c'est votre prix réel" — **niepoprawione** |
| ro/cat-valoreaza | 29 | „împarte **suma totală** la kWh extrași… acela este prețul tău real la kWh" — **niezweryfikowane** |

**Sprzeczność wewnątrz języka włoskiego, wprowadzona przez samą poprawkę.** Weryfikator IT użył argumentu „siostrzany plik mówi to poprawnie" — teraz relacja jest odwrócona i niepełna:

- `it/quanto-vale:23` — odejmij kwoty stałe
- `it/scambio-sul-posto-o-ritiro-dedicato.md:31` — „**spesa totale annua diviso kWh prelevati, non solo la voce energia**" (jawnie zaleca to, co obok zostało wykreślone)

**Kategoryczne „unikasz wszystkich pozycji" — poprawione tylko w IT:**

- it/quanto-vale:17 → „eviti **la parte a consumo**… restano le quote fisse e la quota potenza" ✅
- fr/combien-vaut:23 → „vous évitez **toutes ces lignes d'un coup**" ❌
- ro/cat-valoreaza:17 → „eviți **toate aceste poziții deodată**" ❌
- ro/cum-functioneaza-compensarea:17 → „evită **toate aceste componente**" ❌

**Asymetria hedgingu reżimu.** IT i FR po poprawkach nazywają kryterium („jaką masz konwencję" / „data DCR"). RO nie ma odpowiednika i prawdopodobnie **nie musi** — Legea 160/2026 stosuje się także do umów w toku, bez aktu dodatkowego (`ro/cum-functioneaza-compensarea:29`). To jest jedyne miejsce, gdzie brak rozróżnienia nowe/istniejące wygląda na poprawny — ale to twierdzenie prawne nikt nie sprawdził.

---

## 2. Wspólne wzorce błędu

**W1 — mieszanie stanu dla instalacji nowych i istniejących.** 6/6 zweryfikowanych plików, 2 języki, w tym w `description` (SEO) i w krokach instrukcji. Najgorszy przypadek: `fr/vendre-son-surplus` używał kwalifikatora z **błędnym kryterium** (data przyłączenia zamiast daty DCR). To nie jest błąd autora — w `it/conviene-entrare` tekst powstał wręcz **poza materiałem źródłowym** (FAKTY-REGULACYJNE.md nie ma sekcji o CER, luka L-11 mówi wprost, że Regole Operative CACER nie sprawdzono). Wzorzec siedzi w outlinie/instrukcji, nie w researchu.

**W2 — twierdzenia kategoryczne** („l'unica fonte", „la scelta non c'è", „deux dispositifs", „nulle part", „toate aceste poziții"). Wszystkie trzy języki, w tym rumuński — którego nikt nie sprawdzał. To najsilniejszy dowód, że wzorzec jest szablonowy.

**W3 — szablon „podziel cały rachunek → mnożnik".** 4 wystąpienia, 3 języki, naprawione 1. Zasięg sprawdziłem grepem: **wyłącznie k6** — de/en/pl i non-k6 it/fr/ro mają 0 trafień. Szablon nie zanieczyścił reszty paczki.

**Wniosek dla pozostałych plików:** pełny re-audyt nie jest uzasadniony (24 pliki × 6 języków, z czego regulacyjnych jest tylko 9). Uzasadniony jest **wąski screening trzech wzorców**: (a) każde miejsce z liczbą/stawką/progiem prawnym, (b) każde „wszystkie / jedyne / każdy / zawsze", (c) każda instrukcja rachunkowa na rachunku. Konkretni kandydaci non-k6 z grepa (≥3 trafienia regulacyjne):

- `it/quale-tariffa-luce-con-fotovoltaico-e-batteria.md`, `it/comprare-di-notte-e-vendere-di-giorno-conviene.md`, `it/curva-volt-watt-conviene-attivarla.md`
- `ro/cumpar-ieftin-noaptea-si-vand-ziua.md`, `ro/reglajul-volt-watt-merita-activat.md`
- fr non-k6: 0 trafień — do pominięcia

**Poprawka do PODSUMOWANIE.md:** zdanie „żadna liczba nie okazała się przepisana ze źródła wtórnego" (linia 39-40) jest prawdziwe dla sześciu, ale czyta się jak certyfikat dla dziewięciu. `ro/cat-valoreaza:23` podaje 0,75570 / 0,27903 / 0,02200 lei/kWh i 1,48–1,57 lei/kWh z **jednej wygasłej oferty Electrica Furnizare** — dokładnie ta klasa liczby. Zawęzić zakres zdania.

---

## 3. Ryzyko czasowe (do ~15.02.2027)

| Plik | Twierdzenie z datą ważności | Zdarzenie | Review |
|---|---|---|---|
| `fr/prime-autoconsommation-qui-y-a-droit.md` | kwalifikowalność solaire thermique / hybryd do MaPrimeRénov' | projekt décret+arrêté (CNH 2.07.2026, opinia negatywna, na 15.08 poza JO) usuwa gesty z parcours par geste od **1.09.2026** | **2026-09-01 — 17 dni** |
| `ro/cum-functioneaza-compensarea-cantitativa.md`, `ro/cat-valoreaza-un-kwh-injectat.md` | cena odkupu nadwyżki = energia aktywna − marża − dezechilibru (Ordin ANRE 15/2022) | ustawa nakazuje ANRE zmienić metodologię w 60 dni → **~24.09.2026**; to jest twierdzenie nośne obu plików | **2026-09-25** |
| `ro/cat-valoreaza-un-kwh-injectat.md` | liczby Electrica Q2 2026 | oferty kwartalne — liczby były wygasłe już w dniu pisania | **2026-10-01, potem co kwartał** |
| `ro/cum-devin-prosumator-racordare-casa-verde.md` | „Casa Verde nu avea o sesiune deschisă", ghid 2026 niepublikowany; statystyka ANRE na 30.06.2026 | AFM może otworzyć sesję w dowolnym tygodniu — snapshot z jedną datą w tytule sekcji | **2026-09-15, potem miesięcznie** |
| `it/scambio-sul-posto-o-ritiro-dedicato.md`, `it/quanto-vale-1-kwh-immesso-in-rete.md` | mechanika RID/SSP (RID d'ufficio, 15 lat) | zapowiedziane provvedimento ARERA „graduale superamento SSP e semplificazione RID" — jeszcze nie wydane; PMG aktualizowane w styczniu | **2027-01-31 + monitoring** |
| `it/conviene-entrare-in-una-comunita-energetica.md` | dostępność tariffa premio | okno zamyka kontyngent 5 GW albo 31.12.2027 (co pierwsze); Regole Operative CACER nowelizowane w III.2026 | **2027-02-28** |
| `fr/combien-vaut-un-kwh-injecte.md`, `fr/vendre-son-surplus-ou-tout-autoconsommer.md` | 1,1 c€/kWh + ścieżka indeksacji | niskie — siatki kwartalne zniesione, termin recours minął ~4.08.2026; monitorować poprawkę Enerplan dla 9–100 kWc | **2027-02-15** |

**Rekomendacja strukturalna:** dodać do frontmatter k6 pole `review: YYYY-MM-DD` — `updated` tej informacji nie niesie, a **4 z 9 plików mają zdarzenie wygaszające w ciągu sześciu tygodni**.

---

## 4. Rekomendacja merge

**GO — 6 plików zweryfikowanych, po jednej poprawce parytetowej (10 minut):**

Przed merge zamienić instrukcję rachunkową w trzech miejscach na wersję z `it/quanto-vale:23` (odejmij kwoty stałe / abonament / quota potenza):
- `it/scambio-sul-posto-o-ritiro-dedicato.md:31`
- `fr/combien-vaut-un-kwh-injecte.md:27`
- `fr/vendre-son-surplus-ou-tout-autoconsommer.md:23` (+ kategoryczne „toutes ces lignes d'un coup" w `fr/combien-vaut:23`)

Bez tego publikujemy sprzeczność wewnątrz jednego języka (IT) i znaną, opisaną klasę błędu w drugim (FR) — po tym, jak ta sama klasa została w tej samej paczce nazwana i naprawiona. Dodatkowo do `fr/prime-autoconsommation` dopisać adnotację o zmianie MaPrimeRénov' od 1.09.2026.

**HOLD — 3 pliki rumuńskie:** `cat-valoreaza-un-kwh-injectat.md`, `cum-functioneaza-compensarea-cantitativa.md`, `cum-devin-prosumator-racordare-casa-verde.md`.

Powód nie jest „znaleziono błędy", tylko **„nikt nie sprawdzał"** — a to najgorszy moment na taki stan: treść opiera się na ustawie obowiązującej od trzech tygodni przed researchem, kluczowe twierdzenie o cenie odkupu opiera się na metodologii, którą ta ustawa nakazała przepisać w 60 dni, a liczby pochodzą z jednej wygasłej oferty jednego dostawcy. Do tego dwa pliki niosą wprost te wzorce błędu (W2 i W3), które w IT/FR wykryto i naprawiono — czyli statystyka „6/6 wymagało poprawek" ma niezerową siłę predykcyjną dla RO.

**Kompromis, jeśli jest presja na wypuszczenie RO:** `cum-devin-prosumator` jest najbezpieczniejszy (proceduralny, terminy z Ordinu 19/2022, sam hedguje Casa Verde) — nadaje się do publikacji po zweryfikowaniu samych terminów i kwoty restytucji branșamentu. Dwa pozostałe i tak wymagają rewizji po ~24.09.2026, więc naturalne jest wypuścić je dopiero z metodologią ANRE w ręku.