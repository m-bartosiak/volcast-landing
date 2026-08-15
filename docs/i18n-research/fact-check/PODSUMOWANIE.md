# Weryfikacja Q&A rynkowych (k6) — 2026-08-15

Dziewięć plików kategorii k6 to jedyna treść w paczce, która **nie jest tłumaczeniem** —
powstała od zera i stawia twierdzenia o prawie krajowym, więc żadna automatyczna brama
jej nie sprawdzała. Każdy plik przeszedł niezależną weryfikację adwersaryjną wobec źródeł
pierwotnych (GSE, ARERA, Legifrance, CRE, EDF OA, Enedis, ANRE).

**Wynik: 6 z 6 sprawdzonych wymagało poprawek, 40 zamian naniesionych. Żaden plik nie
wymagał przepisania — rdzeń merytoryczny okazał się słuszny we wszystkich.**

Trzy pliki rumuńskie — `cat-valoreaza-un-kwh-injectat`, `cum-devin-prosumator-racordare-casa-verde`
i `cum-functioneaza-compensarea-cantitativa` — **nie zostały zweryfikowane**, bo przebieg
trafił na limit sesji. Do powtórzenia przed publikacją: ich treść opiera się na ustawie
160/2026, która weszła w życie trzy tygodnie przed researchem.

## Dominujący błąd

Ten sam we wszystkich sześciu plikach i dokładnie ten, przed którym ostrzegał research:
**mieszanie stanu dla instalacji nowych i istniejących.**

Najgroźniejszy przypadek to francuskie `vendre-son-surplus-ou-tout-autoconsommer`, gdzie
taryfa 1,1 c€/kWh była podana bezwarunkowo w meta-description, w wytłuszczonym leadzie
i w nagłówku sekcji — a stosuje się wyłącznie do instalacji, których kompletny wniosek
o przyłączenie złożono od 5 czerwca 2026. Kwalifikator, który w tekście był, używał
**błędnego kryterium**: daty przyłączenia zamiast daty wniosku. Między jednym a drugim
mija zwykle kilka miesięcy, więc grupa dotknięta tym błędem jest liczna właśnie teraz.

Konsekwencja była wymierna. Właściciel instalacji z 2023 roku odczytałby, że jego stawka
spadła o rząd wielkości, a instrukcja „podziel przez 0,011 €" dałaby mu mnożnik zawyżony
dziesięciokrotnie — czyli mogłaby skłonić do rezygnacji z opłacalnego kontraktu odkupu.
Decyzja finansowa odwrotna do zamierzonej przez autora tekstu.

Drugi powtarzalny wzorzec: **twierdzenia kategoryczne** („jedyne", „każdy", „wszystkie
instalacje") w miejscach, gdzie istnieją wyjątki — najczęściej właśnie dla instalacji
istniejących.

## Co się obroniło

Warto odnotować, bo to zmienia ocenę pipeline'u: **żadna liczba nie okazała się przepisana
ze źródła wtórnego.** Wszystkie stawki, daty i odwołania do aktów prawnych zweryfikowały
się w źródłach pierwotnych. Francuski tekst wygrał nawet spór, w którym łatwo było polec:
część serwisów komercyjnych zawęża taryfę 1,1 c€/kWh do instalacji do 9 kWc w trybie
sprzedaży nadwyżki, podczas gdy artykuł 8 rozporządzenia nie różnicuje stawki ani wg mocy,
ani wg trybu. Materiał faktograficzny z werdyktami sceptyków zadziałał.

Błąd był konsekwentnie na poziomie **ramowania**, nie faktu.

## it/conviene-entrare-in-una-comunita-energetica.md

**Werdykt:** wymaga-poprawek · twierdzeń: 14 (falszywe: 2, potwierdzone: 5, nieprecyzyjne: 6, nieweryfikowalne: 1) · zamian: 6

Tekst jest nietypowo bezpieczny jak na ten projekt — nie ma w nim ani jednej liczby, stawki, progu mocy ani daty granicznej, wiec typowe wektory bledu (liczba przepisana z serwisu komercyjnego, stawka wygasajaca za kwartal) po prostu nie wystepuja. Opis mechaniki jest merytorycznie trafny i potwierdzony w zrodlach pierwotnych: wirtualnosc podzialu, zachowanie wlasnego kontraktu i wlasnego rachunku, godzinowa regula minimum, perymetr cabina primaria niepokrywajacy sie z granica gminy, podzial korzysci wedlug regulaminu wewnetrznego. Zdanie o poludniu bez odbioru w konfiguracji jest poprawnym wnioskiem z TIAD i jednoczesnie najlepszym mostem do produktu. Sprawdzilem tez, czy godzinowa granulacja nie stala sie nieaktualna — liczniki 2G raportuja co 15 minut i czesc portali komercyjnych pisze juz o 'kwadransie', ale GSE nadal agreguje 'su base oraria', wiec 'ora per ora' jest poprawne.

Problem jest gdzie indziej i jest to dokladnie ten blad, ktory w tym projekcie sie powtarza: tekst w ogole nie rozroznia instalacji NOWYCH i ISTNIEJACYCH, a adresuje wlasciciela instalacji istniejacej. Wedlug GSE tariffa premio przysluguje wylacznie instalacjom o dacie entrata in esercizio od 16 grudnia 2021, nowym albo bedacym potenziamento, do 1 MW. Instalacja starsza moze wejsc do konfiguracji i jej energia liczy sie do energii condivisa, ale dostaje tylko contributo di valorizzazione — rzad wielkosci nizej — a w CER laczna moc takich instalacji jest ograniczona udzialem w mocy calej konfiguracji. Do tego czynna konwencja scambio sul posto wyklucza punkt poboru z konfiguracji (ritiro dedicato nie wyklucza). Czytelnik z dachem z 2019 roku i wciaz trwajacym SSP wychodzi z tego tekstu z wnioskiem dokladnie odwrotnym do stanu faktycznego — to sytuacja, w ktorej blad jest natychmiast widoczny dla kazdego, kto zna rynek.

Poza tym trzy mniejsze rzeczy. Pole `description` mowi o nadwyzce, ktora czytelnik 'regala alla rete' — to falszywe dla wiekszosci, bo ritiro dedicato jest w 2026 czynny i nie ma dolnego progu mocy; oddawanie za darmo dotyczy instalacji <800 W zgloszonych przez Comunicazione Unica. Zdanie 'sono l'unica fonte che resta valida nel tempo' jest twierdzeniem kategorycznym i nieprawdziwym w obu czlonach — Regole Operative nie sa jedynym zrodlem i wlasnie w marcu 2026 zostaly czesciowo uchylone przez Regole Operative Facility CACER. Wreszcie sformulowanie o energii 'immessa da un membro e prelevata da un altro membro' sugeruje parowanie uczestnikow, podczas gdy rozliczenie jest zbiorcze na poziomie konfiguracji.

Odnotowuje tez ustalenie proceduralne: material zrodlowy FAKTY-REGULACYJNE.md nie zawiera zadnej sekcji o CER, a jedyna wzmianka (luka L-11) mowi wprost, ze Regole Operative CACER nie zostaly sprawdzone. Twierdzenia cer-05 i cer-08 w raw-regulacje-2.json dotycza wartosci kontrybutu i terminow PNRR, ktorych ten tekst nie uzywa. Tekst powstal wiec faktycznie poza materialem zrodlowym — co dobrze tlumaczy, dlaczego brakuje w nim akurat rozroznienia nowe/istniejace.

Werdykt: wymaga-poprawek, nie przepisania. Zadne zdanie w korpusie tekstu nie jest falszywe, rdzen mechaniki jest sluszny, a szesc zaproponowanych zamian (w tym jeden dodany akapit przed sekcja 'Cosa fare') domyka luke bez naruszania struktury i bez wprowadzania liczb o krotkiej trwalosci. Progi 1 MW i 30% celowo oddalem jakosciowo — sa potwierdzone, ale ich brzmienie zalezy od decreto, a lista i tak odsyla do GSE. Data przegladu tego Q&A: zamkniecie okna tariffa premio (kontyngent 5 GW albo 31 grudnia 2027, cokolwiek nastapi pierwsze).

---

## it/quanto-vale-1-kwh-immesso-in-rete.md

**Werdykt:** wymaga-poprawek · twierdzeń: 13 (nieprecyzyjne: 7, falszywe: 1, potwierdzone: 5) · zamian: 5

Rdzen tekstu jest sluszny i dobrze uzasadniony: przy ritiro dedicato GSE placi cene strefowa godzinowa MGP (potwierdzone u ARERA), a kWh autokonsumowany oszczedza znacznie wiecej niz kWh sprzedany. Tekst nie zawiera ANI JEDNEJ liczby, co eliminuje najczestsze zrodlo bledow — to duzy plus. Sa jednak trzy problemy nosne. (1) NAJPOWAZNIEJSZY — tekst opisuje wylacznie stan dla instalacji NOWYCH i nigdzie nie odroznia ich od ISTNIEJACYCH. Scambio sul posto zostal zamkniety dla nowych dopiero 26.09.2025 (instalacje w eksploatacji do 29.05.2025), a istniejace konwencje trwaja do naturalnego wygasniecia / 15 lat. Dla tej ogromnej bazy zdanie "Quando immetti, non ne recuperi nessuna [voce]" jest FALSZYWE: TISP (Allegato A do delibery ARERA 570/2012, art. 6.4 i 7.1) definiuje CS = min(OE; CEi) + CUSf * ES, gdzie CUSf = CUSfreti + CUSfogs, czyli SSP zwraca czesc oplat sieciowych I oneri generali di sistema. To dokladnie ten typ bledu, ktory powtarzal sie w projekcie. Siostrzany plik scambio-sul-posto-o-ritiro-dedicato.md w tej samej kategorii k6 mowi to poprawnie — ten plik sam sobie przeczy. (2) "Quando eviti un prelievo, eviti tutte quelle voci insieme" jest twierdzeniem kategorycznym z wyjatkami: wg przewodnika ARERA po pozycjach bolletty trasporto ma quota fissa (euro/rok) I quota potenza (euro/kW/rok), materia energia ma quota fissa, oneri maja quota fissa (poza residenza anagrafica). Autokonsumpcja unika tylko czesci zmiennej (quota energia + accisa + IVA na niej). (3) Wynikajaca z tego instrukcja "dividi la spesa totale per i kWh prelevati... quello che l'autoconsumo ti fa risparmiare" systematycznie ZAWYZA oszczednosc, bo spesa totale zawiera kwoty stale, quota potenza i canone RAI. Dodatkowo pominieto PMG jako podloge dla instalacji uprawnionych oraz fakt, ze przejscie SSP -> RID nie jest automatyczne (bez wniosku energia oddana jest nieoplacana) — to informacja, ktorej brak kosztuje czytelnika pieniadze. Zadna liczba w tekscie nie jest bledna, bo liczb nie ma; wszystkie poprawki to doprecyzowania jakosciowe, bez wprowadzania nowych liczb.

---

## it/scambio-sul-posto-o-ritiro-dedicato.md

**Werdykt:** wymaga-poprawek · twierdzeń: 11 (potwierdzone: 7, nieprecyzyjne: 4) · zamian: 3

Rdzen tekstu jest sluszny i — co rzadkie w tym projekcie — autor uniknal trzech z czterech typowych pulapek. Rozroznienie instalacji NOWYCH i ISTNIEJACYCH jest zrobione swiadomie i poprawnie. Nie ma opisu stanu sprzed zmiany prawa jako obecnego: zamkniecie SSP jest podane jako fakt dokonany, a delibera 7/2026/R/efr, ktora mogla wygladac na zmiane, dotyczy zupelnie innej materii (certyfikaty zielone). Nie ma tez ani jednej liczby przepisanej z serwisow komercyjnych — autor pominal PMG 2026 (47,5 EUR/MWh), poziomy cen strefowych i wszystkie stawki podatkowe, czyli dokladnie te wartosci, ktore w materiale zrodlowym maja niska pewnosc i wygasaja w styczniu 2027. Dzieki temu tekst ma niskie ryzyko dezaktualizacji.

Zweryfikowalem niezaleznie w zrodlach pierwotnych: daty 29.05.2025 (ostatnia entrata in esercizio) i 26.09.2025 (ostatni wniosek) potwierdzone w komunikacie GSE i delibera ARERA 78/2025/R/efr, potwierdzonej delibera 213/2025/R/efr z 27.05.2025 — brak prorogi na sierpien 2026. Opis contributo in conto scambio zgodny z TISP (delibera 570/2012): quota servizi = Es x CUsf zwraca czesc skladnikow sieciowych i oneri, wiec sformulowanie "una parte degli oneri" jest wlasciwie zahedgowane. Opis RID zgodny z ARERA i GSE: cena strefowa godzinowa z PMG jako minimum gwarantowane, z conguaglio w roku nastepnym, przy czym zastrzezenie "per gli impianti che ne hanno diritto" jest konieczne i zostalo postawione.

Trzy rzeczy wymagaja poprawki. Najwazniejsza: akapit o istniejacych konwencjach odsyla do GSE zamiast odpowiedziec, mimo ze dwa fakty nosne sa potwierdzone zrodlem pierwotnym — nieodnawialnosc konwencji po 15 latach od pierwszego podpisania (DL 181/2023 konwertowany ustawa 11/2024, delibera ARERA 457/2024/R/efr) oraz automatyczna aktywacja RID d'ufficio przez GSE. Pominiecie tego drugiego jest ryzykowne w druga strone niz zwykle: czesc wloskich serwisow bledenie twierdzi, ze przejscie wymaga wniosku wlasciciela, a nasz tekst tego nie prostuje, choc to jest glowne pytanie czytelnika z aktywna konwencja. Druga: "la scelta non c'è" jest kategoryczne tam, gdzie sa wyjatki — poza RID pozostaje sprzedaz traderowi na rynku wolnym i waloryzacja w CER. Trzecia: lista "Cosa fare" nie mowi wlascicielowi nowej instalacji, jak uruchomic RID (Modello Unico do 200 kW albo wniosek w Area Clienti GSE w ciagu 60 dni od entrata in esercizio) — bez tego kroku energia idzie do sieci bez wynagrodzenia.

Zadne twierdzenie nie jest falszywe ani nieaktualne, wiec przepisywanie nie jest potrzebne. Po trzech zamianach z proposedEdits tekst jest publikowalny.

---

## fr/combien-vaut-un-kwh-injecte.md

**Werdykt:** wymaga-poprawek · twierdzeń: 15 (potwierdzone: 9, falszywe: 3, nieprecyzyjne: 3) · zamian: 6

Rdzen tekstu jest solidny, a wszystkie liczby zweryfikowalem w zrodlach pierwotnych i sie broniA: 1,1 c€/kWh HT, indeksacja 2%/rok w rocznice prise d'effet, 20 lat od mise en service oraz limit 1600 h/kWc pochodza wprost z art. 5, 8 i 9 arrete du 1er juin 2026 (JORFTEXT000054190669); sciezka 1,12 / 1,31 / 1,60 c€ przeliczona niezaleznie zgadza sie co do zaokraglen i konczy sie na ~16 €/MWh, ktore rzad podaje w odpowiedzi senackiej z 2.07.2026; poprzednia stawka 4,0 c€/kWh i prime 0,08 €/Wc znalazlem w art. 8 arrete du 26 mars 2025 (JORFTEXT000051380903). Zaden z tych numerow nie jest przepisany z serwisu komercyjnego i zadnego nie trzeba usuwac.

Tekst ma natomiast jeden blad nosny, i jest to dokladnie ten failure mode, ktory powtarzal sie w projekcie: nigdzie nie odroznia instalacji NOWYCH od ISTNIEJACYCH. Lead mowi „depuis le 5 juin 2026, pour toute installation jusqu'a 100 kWc\", podczas gdy arrete stosuje sie wylacznie do instalacji, ktorych kompletny wniosek o przylaczenie zlozono od 5 czerwca 2026 — reforma nie dziala wstecz, a umowy wczesniejsze zachowuja taryfe ze swojej siatki kwartalnej przez pelne 20 lat. Dla wlasciciela instalacji z lat 2021-2024 roznica to jeden rzad wielkosci. Blad jest powielony w opisie SEO (czyli trafi do wynikow wyszukiwania) i — co najgorsze — w kroku 2 instrukcji, gdzie czytelnik ma dzielic cene detaliczna przez 0,011 €; posiadacz starszej umowy zawyzy w ten sposob swoj mnoznik nawet dziesieciokrotnie i przeniesie ten blad do kroku 5, do wyceny baterii. To bedzie natychmiast widoczne dla kazdego francuskiego czytelnika z dzialajaca instalacja.

Poza tym: „avant cette reforme... 4,0 c€\" wymaga ograniczenia do okresu 28.03.2025-04.06.2026 (wczesniejsze umowy maja duzo wyzsze stawki); zdanie „tous les calculs de rentabilite... sont faux, parfois d'un facteur trois\" jest kategoryczne i nieweryfikowalne co do skali, a przy tym nietrafne dla obecnych wlascicieli, ktorych rachunek sie nie zmienil; tekst pomija zniesienie prime a l'investissement, czyli drugi co do wagi czynnik dla nowego inwestora; „vous soutirez le soir, quand l'electricite est la plus chere\" nie jest prawda dla odbiorcow na opcji Base. Sprawdzilem tez ryzyko dezaktualizacji: po czerwcu 2026 nie ma nowszego arrete ani zawieszenia przez Conseil d'Etat, termin na recours uplynal ok. 4 sierpnia 2026, a poprawka Enerplan podnoszaca taryfy dla 9-100 kWc nie weszla do tekstu koncowego (rzad na nie) — warta jednak monitorowania.

Szesc zamian from/to ponizej naprawia wszystkie te punkty bez usuwania ani jednej liczby, bo zadna liczba nie okazala sie bledna — bledny byl wylacznie ich zakres podmiotowy. Do publikacji dopiero po ich naniesieniu.

---

## fr/prime-autoconsommation-qui-y-a-droit.md

**Werdykt:** wymaga-poprawek · twierdzeń: 24 (potwierdzone: 14, nieprecyzyjne: 7, falszywe: 2, nieaktualne: 1) · zamian: 10

Rdzeń tekstu jest solidny i — co rzadkie w tym projekcie — poprawnie rozgranicza instalacje nowe i istniejące w warstwie samej primy: arrêté z 1.06.2026 (JORF 4.06.2026, DCR od 5.06.2026), 0,08 €/Wc = 80 €/kWc dla ≤9 kWc, zamrożenie degresji dla tego segmentu, 0,19/0,10 €/Wc dla wyższych tranch z degresją — wszystko potwierdzone w Legifrance, CRE i photovoltaique.info (Hespul). Nie znalazłem dowodu na zawieszenie lub uchylenie arrêté przez Conseil d'État na 15.08.2026.

Do publikacji nie nadaje się jednak w obecnym brzmieniu z powodu jednego twierdzenia falszywego w skutku i jednego falszywego wprost:

1. BATERIE (zdanie nośne dla budżetu czytelnika). "les batteries restent au taux normal de 20 %" sugeruje ventilation stawek na jednej fakturze — 5,5% na PV, 20% tylko na baterię. BOFiP BOI-TVA-LIQ-30-20-97 (wersja od 10.06.2026, Exemple 2 i 3) stanowi odwrotnie: bateria nie jest akcesorium, a gdy wchodzi w jedną niepodzielną gospodarczo operację, "cette prestation unique doit donc être soumise au taux normal de 20 %" — CAŁY devis, z panelami i falownikiem włącznie. Ten sam BOFiP zakazuje sztucznego dzielenia operacji. Różnica dla czytelnika: tysiące euro. Uwaga metodyczna: photovoltaique.info opisuje tu "ventilation tarifaire" — rozstrzygnąłem na korzyść źródła pierwotnego (BOFiP).

2. AIDES LOCALES. "qui ne sont recensés nulle part au niveau national" jest nieprawdą — France Rénov' prowadzi krajowy wykaz aides locales (mesaides.france-renov.gouv.fr/locales, plus strona "Les aides des collectivités locales"). Typowe kategoryczne "brak", które czytelnik łatwo obali jednym kliknięciem.

3. MIESZANIE NOWE/ISTNIEJĄCE przy taryfie. Sekcja "Ce qui reste comme soutien en 2026" podaje "1,1 c€/kWh HT" bez kwalifikatora daty DCR. Właściciel instalacji z 2023 r. — a to on najczęściej trafia na taki artykuł — odczyta, że jego własna stawka spadła do 1,1 c€. W rzeczywistości zachowuje taryfę swojej siatki przez 20 lat (4 c€/kWh dla ≤9 kWc z DCR 28.03.2025–4.06.2026, znacznie więcej dla starszych umów). Artykuł zrobił to rozróżnienie poprawnie dla primy, ale zgubił je dla taryfy.

4. KATEGORYCZNE "Deux dispositifs au niveau national" pomija trzecie, wciąż obowiązujące wsparcie krajowe: zwolnienie z IR i z CSG/CRDS dla instalacji ≤3 kWc (art. 35 ter CGI).

5. RYZYKO DEZAKTUALIZACJI W 17 DNI. Zdanie o kwalifikowalności solaire thermique i hybryd do MaPrimeRénov' jest dziś prawdziwe, ale projekt décret + arrêté (przedstawiony CNH 2.07.2026, opinia negatywna, na 15.08.2026 nieopublikowany w JO) usuwa te gesty z parcours par geste w metropolii od 1 września 2026. Bez adnotacji tekst staje się nieaktualny dwa tygodnie po publikacji.

Dodatkowo trzy nieprecyzyjności: próg śladu węglowego to "inférieure à 530" (ściśle mniejsza), nie "au plus égale à"; EMS musi sterować "de façon continue" i autonomicznie, bez interwencji człowieka (co wyklucza zwykły programator godzinowy) — "en temps réel" gubi ten punkt; segment ≤9 kWc był zamrożony od 28 marca 2025, nie od kwietnia (kwiecień to etykieta siatki T2 2025). Wartości 0,19 i 0,10 €/Wc warto zakotwiczyć w kwartale T2 2025, bo do T1 2026 spadły do ok. 0,14 i 0,07.

Po dziesięciu zamianach z proposedEdits tekst jest moim zdaniem publikowalny.

---

## fr/vendre-son-surplus-ou-tout-autoconsommer.md

**Werdykt:** wymaga-poprawek · twierdzeń: 16 (nieprecyzyjne: 9, potwierdzone: 6, nieweryfikowalne: 1) · zamian: 10

WERDYKT: wymaga-poprawek. Wszystkie liczby, daty i odwolania prawne w tekscie sa POPRAWNE i potwierdzone w zrodlach pierwotnych — nic nie zostalo przepisane z serwisu komercyjnego. Zweryfikowalem na Legifrance (JORFTEXT000054190669) doslownie: taryfe 1,1 c€/kWh HT (\"Le montant de ce tarif d'achat TPa est égal à 1,1c€/kWh hors TVA\"), indeksacje 2% w rocznice kontraktu, plafon \"produit de la puissance installée par une durée de 1 600 heures\", 20 lat od Mise en Service oraz wylaczenie ≤9 kWc z vente en totalité. Sciezka 1,12 / 1,31 / 1,60 zgadza sie zarowno z rachunkiem, jak i z brzmieniem photovoltaique.info (Hespul, ost. modyfikacja 17.06.2026). Data 28 marca 2025 dla utraty vente totale przez ≤9 kWc jest poprawnie przypisana do arrete du 26 mars 2025, a nie do reformy z 2026 — tekst NIE popelnia bledu opisywania stanu sprzed zmiany prawa jako obecnego. Tekst wygral tez spor zrodlowy, w ktorym latwo bylo polec: czesc serwisow komercyjnych (m.in. Hellio) zawezila taryfe 1,1 c€/kWh do ≤9 kWc w trybie surplus, podczas gdy art. 8 arrete nie roznicuje stawki wg mocy ani trybu.

BLAD NOSNY jest jeden, ale wystepuje w piaciu miejscach i jest dokladnie tym powtarzajacym sie w projekcie failure mode: mieszanie stanu dla instalacji NOWYCH i ISTNIEJACYCH. Arrete stosuje sie wylacznie do instalacji, ktorych kompletny wniosek o przylaczenie (demande complète de raccordement) zlozono od 5 czerwca 2026 — a tekst podaje nowa taryfe bezwarunkowo w meta-description, w wytluszczonym leadzie i w naglowku sekcji. Kwalifikator pojawia sie dopiero w drugim akapicie sekcji 2 i jest tam sformulowany z BLEDNYM KRYTERIUM: \"si votre installation a été raccordée avant cette réforme\". Liczy sie data DCR, nie data raccordement. Wlasciciel, ktory zlozyl wniosek 3 czerwca 2026 i zostal przylaczony we wrzesniu, zachowuje stara siatke — czytajac ten tekst wyciagnie wniosek odwrotny, a miedzy DCR a raccordement mija zwykle kilka miesiecy, wiec ta grupa jest liczna wlasnie teraz, w sierpniu 2026. Konsekwencja jest wymierna: stara taryfa surplus dla ≤9 kWc wynosila 4,0 c€/kWh po marcu 2025 i kilkanascie c€/kWh dla umow wczesniejszych. Instrukcja \"divisez par 0,011 €\" zastosowana do takiej umowy daje mnoznik zawyzony o rzad wielkosci i moze sklonic czytelnika do rezygnacji z oplacalnego kontraktu odkupu — czyli do decyzji finansowej odwrotnej do zamierzonej przez autora.

Drugorzedne: (1) plafon 1 600 h dotyczy energii WTLOCZONEJ, nie produkcji, i jest praktycznie nieosiagalny w metropolii, a tekst przedstawia go jako realne ograniczenie; (2) CACSI dotyczy instalacji ≤36 kVA i wymaga certyfikowanego urzadzenia zapobiegajacego wtlaczaniu — realny koszt decyzji \"tout autoconsommer\"; (3) \"tout calcul antérieur à juin 2026 est périmé\" to twierdzenie kategoryczne falszywe dla umow juz zawartych; (4) \"l'appoint reste positif\" zaniza wartosc starych kontraktow.

Ryzyko dezaktualizacji oceniam jako NISKIE: reforma zniosla kwartalne siatki dla ≤100 kWc, wiec nie ma juz mechanizmu cyklicznej zmiany stawki, i nie znalazlem zadnego pozniejszego arrete ani sladu zawieszenia przez Conseil d'Etat. Zastrzezenie: termin na recours pour exces de pouvoir uplynal ok. 4 sierpnia 2026 — brak dowodu nie jest dowodem braku, warto sprawdzic strone \"arrêté tarifaire en vigueur\" na photovoltaique.info tuz przed publikacja.

Po naniesieniu dziesieciu zamian z proposedEdits tekst uznaje za publikowalny — rdzen merytoryczny i teza artykulu (autokonsumpcja przed odsprzedaza) sa sluszne i dobrze udokumentowane.
