# Weryfikacja Q&A rynkowych (k6) — 2026-08-15

Dziewięć plików kategorii k6 to jedyna treść w paczce, która **nie jest tłumaczeniem** —
powstała od zera i stawia twierdzenia o prawie krajowym, więc żadna automatyczna brama
jej nie sprawdzała. Każdy plik przeszedł niezależną weryfikację adwersaryjną wobec źródeł
pierwotnych (GSE, ARERA, Legifrance, CRE, EDF OA, Enedis, ANRE).

**Wynik: 9 z 9 wymagało poprawek, 57 zamian naniesionych. Żaden plik nie wymagał
przepisania — rdzeń merytoryczny okazał się słuszny we wszystkich.**

Rumuńskie doszły w drugim przebiegu (pierwszy trafił na limit sesji). Wypadły najgorzej
ze wszystkich: po jednym twierdzeniu fałszywym i po dwa–trzy nieaktualne na plik — co jest
spodziewane, bo ich treść opiera się na ustawie 160/2026, obowiązującej od trzech tygodni
przed researchem. Weryfikator usunął m.in. konkretne stawki wzięte z jednej, już wygasłej
oferty jednego dostawcy.

**Zastrzeżenie do zdania niżej:** „żadna liczba nie okazała się przepisana ze źródła
wtórnego" dotyczy sześciu plików włoskich i francuskich. W rumuńskim taka liczba była
i została usunięta.

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

---

## ro/cat-valoreaza-un-kwh-injectat.md

**Werdykt:** wymaga-poprawek · twierdzeń: 12 (potwierdzone: 6, nieprecyzyjne: 2, nieaktualne: 3, falszywe: 1) · zamian: 4

Rdzen artykulu jest sluszny i dobrze udokumentowany — teza, ze kWh autokonsumowany jest wart wiecej niz wprowadzony do sieci, wytrzymuje probe obalenia w kazdym z trzech mozliwych rezimow prawnych, a mechanizm (kompensacja odzyskuje sama energie, taryfy sieciowe i VAT naliczane sa od energii pobranej) potwierdzilem doslownie w Ordinie ANRE 15/2022 art. 11 alin. (3) lit. a) i alin. (5). Rada praktyczna — policz wlasny mnoznik z wlasnej faktury — jest sensowna i odporna na zmiany prawa. Do publikacji brakuje jednak czterech poprawek, z ktorych dwie sa powazne.

Blad pierwszy, najciezszy: sekcja o nadwyzce otwiera sie slowami "Aici mecanismul e explicit. In metodologia ANRE in vigoare..." i opisuje potracanie kosztu niezbilansowania oraz marzy dostawy jako stan obecny. Legea nr. 160/2026, w mocy od 26.07.2026 (MO 603/23.07.2026), w art. 73^1 alin. (3) lit. c) nakazuje, by cena energii czynnej uzywana do rozliczenia z prosumentem NIE zawierala "costul cu dezechilibrele, componenta de furnizare si taxe" — czyli usuwa dokladnie te dwie odjete pozycje, na ktorych stoi caly akapit. Art. III stosuje ustawe takze do umow juz trwajacych, wiec nie jest to regula wylacznie dla nowych instalacji. Artykul wspomina o ustawie dopiero w nastepnym akapicie i zbywa ja slowami "poate arata altfel", co jest znaczaco za slabe. Uczciwosc wymaga dodania, ze opisana formula nadal figuruje w zywej ofercie Electrica Furnizare (spisanej 30.06.2026, obowiazujacej do 31.12.2026), bo metodologia wykonawcza ANRE jeszcze nie wyszla — to tranzycja, a nie stan ustalony.

Blad drugi: wszystkie liczby pochodza z oferty Electrica, ktora wygasla 30.06.2026, podczas gdy nastepczyni tego samego dostawcy jest opublikowana i obowiazuje do konca roku. Pobralem oba PDF-y i zweryfikowalem: Q2 2026 dawalo 0,75570 / 0,27903 / 0,02200 → 0,45467 lei/kWh (arytmetyka artykulu sie zgadza) przy cenie koncowej 1,48021-1,56554; aktualna oferta daje 0,79545 / 0,18572 / 0,01700 → 0,59273 lei/kWh przy cenie koncowej 1,52940-1,61472. To zmienia mnoznik, ktory jest calym sensem tekstu, z ok. 3,3x na ok. 2,6x. Autor sam oznaczyl te cyfry jako przeterminowane — ale skoro nowsze sa dwa klikniecia dalej na tej samej stronie dostawcy, adnotacja nie ratuje sytuacji, tylko obniza zaufanie do reszty.

Blad trzeci: "cat timp injectia ANUALA ramane sub consum". Rumunska compensare cantitativa nigdy nie byla roczna — Ordinul 15/2022 art. 12 rozlicza ja w okresie rozliczeniowym, z reportowaniem nadwyzki i granica 24 miesiecy, a Legea 160/2026 nakazuje rytm miesieczny. Slowo "anuala" jest bledne w obu rezimach naraz i zle ustawia czytelnikowi cala decyzje o przesuwaniu zuzycia.

Blad czwarty, drobny: lista skladnikow ceny pomija CfD (0,07402 lei/kWh), czyli pozycje piec razy wieksza od wymienionych certyfikatow zielonych i dziesiec razy wieksza od wymienionej akcyzy.

Co jeszcze warto dodac, choc nie jest bledem: prog 200 kW i data 31 grudnia 2030 (art. 73^1 alin. (9)), do ktorej kompensacja ilosciowa jest gwarantowana — artykul kaze sprawdzac "plafonul compensarii", nigdzie go nie definiujac. Ujalem to w poprawce nr 4.

Potwierdzone bez zastrzezen: data i publikacja Legii 160/2026, oznaczenie Ordinului 15/2022, brak opublikowanej metodologii ANRE (sprawdzone bezposrednio na anre.ro — najnowszy projekt dla prosumentow pochodzi z 19.09.2023), stawka VAT 21%, oraz to, ze taryfy sieciowe naliczane sa od poboru brutto, nie od salda.

Uwaga o trwalosci tekstu: zdanie o nieopublikowanej metodologii ANRE ma termin waznosci — art. II daje regulatorowi 60 dni od wejscia ustawy w zycie, czyli okolo 24 wrzesnia 2026. Dopisalem te date w poprawce nr 2, zeby czytelnik wiedzial, kiedy sprawdzic ponownie, i zeby tekst przeterminowywal sie jawnie, a nie po cichu. Niezaleznie od tego artykul warto przejrzec ponownie na przelomie wrzesnia i pazdziernika 2026 — i wtedy tez sprawdzic, czy Electrica wydala oferte na 2027 r.

Po naniesieniu czterech poprawek tekst uwazam za publikowalny. Warto tez zaktualizowac pole `updated` we frontmatterze na date faktycznej korekty.

---

## ro/cum-devin-prosumator-racordare-casa-verde.md

**Werdykt:** wymaga-poprawek · twierdzeń: 17 (potwierdzone: 9, nieprecyzyjne: 5, falszywe: 1, nieaktualne: 2) · zamian: 7

Rdzen artykulu — traseu racordarii przez OSD i terminy z Ordinul ANRE 19/2022 — jest solidny. Pobralem pierwotny dokument ANRE (schemat 18 etapow, akt. luty 2023) i potwierdzil KAZDY termin co do dnia: 5 zl. weryfikacja, 15 zl. ATR, 3 zl. projekt umowy, 3 zl. certyfikat, 5 zl. licznik, 2 zl. zalaczenie, oraz zwrot bransamentu wg Ordinului 18/2022. Statystyki ANRE tez zgadzaja sie co do cyfry: 359.378 prosumentow, 4.019,17 MW, 324.535 osob fizycznych na 30.06.2026 (pobrany PDF DPSRC). Sciezka uproszczona przez notificare istnieje i dziala tak, jak opisano.

Dwa problemy wymagaja poprawki przed publikacja.

(1) BLAD RZECZOWY — mylenie dwoch umow o podobnych nazwach. Artykul pisze, ze licznik montuje sie w 5 dni roboczych "de la încheierea contractului de vânzare". Zrodlo pierwotne (etap 16) mowi wyraznie "de la data încheierii contractului de FURNIZARE". To nie jest synonim: contract de furnizare to umowa na dostawe (pobor), contract de vânzare-cumpărare to umowa sprzedazy nadwyzki, ktora artykul sam wymienia jako ostatni, osmy krok. W obecnym brzmieniu czytelnik czeka na licznik po umowie, ktorej jeszcze nie moze podpisac — kolejnosc sie zapetla. Ten sam etap 17 warunkuje zalaczenie napiecia umowa de furnizare i zamontowanym licznikiem, czego artykul nie podaje.

(2) SEKCJA CASA VERDE — prawdziwa w literze, mylaca w skutku. Zdania "nie ma otwartej sesji" i "ghid na 2026 nie zostal opublikowany" sa oba prawdziwe, ale pomijaja rzecz najwazniejsza dla adresata tego tekstu: Casa Verde Fotovoltaice, czyli komponent dla NOWYCH instalacji u osob fizycznych, zostal w ogole wykreslony z budzetu AFM na 2026 (HG z 21.05.2026; budzet 3,15 mld lei na piec kierunkow, bez fotowoltaiki). Jedynym programem dla gospodarstw jest Casa Verde Baterii (400 mln lei) — adresowany WYLACZNIE do prosumentow, ktorzy juz maja dzialajacy system PV. Artykul uzywa golej nazwy "Casa Verde", ktora rumunski czytelnik odczyta jako program fotowoltaiczny, i sugeruje, ze sesja jedynie czeka na ghid. Caly artykul jest adresowany do osoby, ktora prosumentem jeszcze NIE jest — czyli do kogos, kto do programu bateryjnego sie nie kwalifikuje, a na fotowoltaiczny w 2026 nie ma co czekac. Punkt 5 listy "Ce ai de făcut" pogleria to, radzac wstrzymac decyzje o dimensionare do czasu sprawdzenia Casa Verde. To dokladnie ten failure mode, ktory byl w zadaniu: opisanie stanu sprzed zmiany jako obecnego, plus zlepienie dwoch instytucji o podobnych nazwach w jedna.

Trzy drobniejsze nieprecyzyjnosci: warunek sciezki uproszczonej to "modificarea soluției de racordare", nie "modificări ale rețelei" (wezsze i szersze to nie to samo — wzrost mocy zatwierdzonej dyskwalifikuje, choc siec sama nie wymaga przebudowy); termin 3 dni na projekt umowy biegnie od rejestracji WNIOSKU O ZAWARCIE UMOWY, nie od wniosku o przylaczenie; prog 400 kW dotyczy w Ordinul 19/2022 podmiotow przylaczonych do niskiego napiecia.

Sprawdzilem tez zarzut o Legea 160/2026 (MO 603, w mocy od 26.07.2026): nie dotyka strony technicznej racordarii — ATR, certyfikat i PIF pozostaja bez zmian, ustawa zmienia strone handlowa (decontare). Brak wzmianki o niej nie jest wiec bledem, ale przy dacie 14.08.2026 warto dodac jedno zdanie rozgraniczajace, zeby czytelnik nie przenosil starych zasad rozliczenia na swoja przyszla umowe. Uwaga metodyczna: pierwsze streszczenie PDF-u ANRE przez WebFetch podalo bledne liczby (30 dni kalendarzowych na ATR, prog 6 kW) — odczyt bezposredni dokumentu je obalil, wiec zadnego terminu nie opieram na streszczeniu.

---

## ro/cum-functioneaza-compensarea-cantitativa.md

**Werdykt:** wymaga-poprawek · twierdzeń: 16 (potwierdzone: 10, nieaktualne: 2, nieprecyzyjne: 2, falszywe: 1, nieweryfikowalne: 1) · zamian: 6

Rdzen tekstu jest solidny i lepiej udokumentowany niz wiekszosc rumunskich tresci komercyjnych na ten temat: definicja kompensacji ilosciowej, prog 200 kW, data 31.12.2030, prog 400 kW dla statusu prosumenta, stosowanie ustawy do umow w toku, 60-dniowy termin dla ANRE i zweryfikowany brak projektu metodologii — wszystko potwierdzone w tekscie Legii 160/2026 i w art. 73¹ Legii 123/2012. Szczegolnie mocny jest akapit o tym, co zostaje na fakturze: taryfy sieciowe, akcyza i TVA rzeczywiscie licza sie od energii pobranej, a nie od roznicy netto (potwierdza to baza wiedzy Electrica Furnizare oraz Metodologia z Ordinul 15/2022); tekst stoi tu po wlasciwej stronie sporu, bo czesc serwisow SEO twierdzi odwrotnie. Tekst poprawnie odrzuca tez rozpowszechniony w kilku serwisach blad, jakoby Legea 160/2026 podniosla prog kompensacji do 400 kW.

Publikacja bez poprawek jest jednak wykluczona z powodu dwoch wad. Pierwsza: tekst opisuje stan sprzed zmiany prawa jako obowiazujacy. Twierdzi, ze cena za nadwyzke to cena energii czynnej pomniejszona o marze i koszt dezechilibru, a w podsumowaniu stwierdza kategorycznie, ze „decontarea practică se face după regulile vechi” do czasu publikacji nowej metodologii ANRE. Tymczasem art. 73¹ alin. (3) lit. c) w brzmieniu nadanym Legea 160/2026, obowiazujacy od 26 lipca 2026 i stosowany do umow juz trwajacych, wprost zakazuje wliczania do ceny rozliczeniowej kosztu dezechilibru, komponentu dostawy i podatkow. Autor sam oznacza to zdanie jako „partea importantă și rar spusă”, wiec czytelnik potraktuje je jako sedno — i wyniesie z tekstu przekonanie, ze dostawca moze mu nadal legalnie potracac dezechilibru.

Druga: tekst mowi gospodarstwu domowemu, ze istotnym dla niego progiem jest 200 kW. Po Legii 160/2026 to nieprawda — ustawa stworzyla osobna kategorie osob fizycznych do 27 kW na loc de consum, w ktorej miesci sie kazda typowa instalacja domowa, i to wlasnie tej kategorii przyznala nowe uprawnienia (kompensacja miedzy wlasnymi punktami poboru u tego samego dostawcy, zaliczanie sum z kompensacji na faktury za gaz ziemny). Tekst przemilcza jedyna zmiane, ktora czytelnik moze realnie wykorzystac.

Wady drugorzedne: przypisanie Legii 160/2026 zasady zakupu po cenie PZU dla przedzialu 200-400 kW, ktora obowiazuje od O.U.G. nr. 143/2021; brak informacji, ze miesieczne rozliczenie zastapilo 24-miesieczny report nadwyzki, przez co czytelnik z istniejaca instalacja nie polaczy opisu z tym, co widzi na fakturze; oraz niepotwierdzone uogolnienie, ze oferty aktualizuja sie kwartalnie (to rytm ofert Serviciu Universal jednego dostawcy, nie regula rynkowa — plafonowanie energii elektrycznej wygaslo 30.06.2025).

Ryzyko dezaktualizacji: ANRE ma opublikowac zmieniona metodologie do okolo 24 wrzesnia 2026, czyli okolo szesciu tygodni po dacie tekstu. Cala sekcja o nadwyzce wymaga wtedy ponownego przegladu; proponowane zamiany wpisuja te date do tekstu, zeby czytelnik wiedzial, kiedy sprawdzic ponownie. Szesc podanych zamian usuwa wszystkie powyzsze wady bez naruszania konstrukcji tekstu.
