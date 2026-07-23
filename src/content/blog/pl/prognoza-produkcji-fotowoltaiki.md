---
title: "Prognoza produkcji fotowoltaiki — jak dokładnie przewidzieć jutrzejszy uzysk z PV"
description: "Jak dokładnie przewidzieć, ile prądu wyprodukuje Twoja instalacja jutro? Model fizyczny, dane z modeli pogodowych (ensemble NWP) i kalibracja — wyjaśniamy krok po kroku."
date: 2026-07-23
author: "Michał Bartosiak"
tags: []
lang: pl
draft: true
translationKey: "forecast-hub"
seo:
  ogTitle: "Prognoza produkcji fotowoltaiki — jak przewidzieć uzysk PV"
---
Ile prądu wyprodukuje jutro Twoja instalacja? Większość właścicieli fotowoltaiki odpowiada „zależy od pogody" — i na tym kończy. Tymczasem produkcję PV da się prognozować z dokładnością rzędu 85% po kalibracji w słoneczne dni, godzina po godzinie. Wystarczy połączyć dane z modeli pogodowych (ensemble NWP) o nasłonecznieniu z fizycznym modelem konkretnej instalacji: jej azymutem, kątem nachylenia, mocą i zacienieniem.

W tym artykule wyjaśniam, jak działa profesjonalna prognoza produkcji, dlaczego zwykła prognoza pogody do tego nie wystarcza i jak wykorzystać prognozę w praktyce — żeby zużywać własny prąd wtedy, kiedy go masz, zamiast oddawać go do sieci za ułamek wartości.

## Dlaczego zwykła prognoza pogody nie wystarcza

„Jutro słonecznie" to za mało, żeby oszacować uzysk. Między prognozą pogody a liczbą kilowatogodzin z dachu stoi kilka warstw fizyki.

**Irradiancja to nie zachmurzenie.** Aplikacje pogodowe pokazują procent zachmurzenia, ale panele reagują na irradiancję — moc promieniowania słonecznego docierającego do powierzchni, mierzoną w W/m². Cienka warstwa cirrusów i niski, gęsty stratus mogą oznaczać to samo „zachmurzenie 60%", a różnić się produkcją dwukrotnie.

**Geometria Twojego dachu.** Ta sama irradiancja daje inny uzysk na dachu skierowanym na południe pod kątem 35° niż na instalacji wschód–zachód pod 15°. Do tego dochodzi konfiguracja stringów, panele bifacjalne i — najczęściej pomijane — profil zacienienia: komin, drzewo sąsiada albo góra, za którą słońce chowa się o 16:00.

**Temperatura działa na niekorzyść.** Panele tracą sprawność wraz ze wzrostem temperatury ogniwa (typowo ok. 0,3–0,4% na każdy stopień powyżej 25°C). Dlatego rekordowe dni produkcji to często słoneczny, chłodny kwiecień, a nie upalny lipiec.

Dobra prognoza produkcji musi więc przejść drogę: **dane z modeli pogodowych (ensemble NWP) o irradiancji → model pozycji słońca → geometria i parametry instalacji → korekty temperaturowe i spektralne → kWh na każdą godzinę**.

## Jak działa prognozowanie oparte na fizyce

Nowoczesne systemy prognozowania PV — od narzędzi dla farm słonecznych po aplikacje dla prosumentów — działają według tego samego schematu:

1. **Dane wejściowe:** prognozy irradiancji (GHI, DNI, DHI) z numerycznych modeli pogody (ensemble NWP), które dostarczają też temperaturę i wiatr.
2. **Model transpozycji:** przeliczenie irradiancji z płaszczyzny poziomej na płaszczyznę Twoich paneli, z uwzględnieniem pozycji słońca w każdej godzinie dnia.
3. **Model instalacji:** moc szczytowa, sprawność falownika, straty systemowe, zacienienie w funkcji pory dnia i roku.
4. **Wynik:** krzywa produkcji — dziś, jutro, na kolejne dni.

Taki model „z pudełka" osiąga przyzwoitą dokładność, ale każda instalacja ma swoje dziwactwa: lekko inne straty, niedoszacowane zacienienie, panele starzejące się w swoim tempie. Tu wchodzi drugi element.

## Kalibracja: prognoza, która uczy się Twojego dachu

Najskuteczniejsze podejście to porównywanie prognozy z rzeczywistą produkcją i systematyczne korygowanie modelu. W Volcast robimy to filtrem Kalmana — algorytmem znanym z nawigacji satelitarnej, który przy każdym nowym pomiarze aktualizuje parametry modelu dokładnie o tyle, na ile pomiar jest wiarygodny.

W praktyce: wpisujesz faktyczny dzienny uzysk, a model po kilkunastu dniach „wie" o Twojej instalacji rzeczy, których nie było w żadnej specyfikacji — realny wpływ zacienienia jesienią, rzeczywiste straty falownika, degradację paneli. Na mojej własnej instalacji 5,2 kWp po kalibracji prognoza dnia następnego myli się w słoneczne dni o mniej niż 10%.

> [MIEJSCE NA WYKRES: prognoza vs rzeczywista produkcja z instalacji założyciela, 14 dni — unikalna grafika, warta osobnego udostępnienia na grupach]

## Co realnie daje Ci prognoza produkcji

Prognoza jest narzędziem, nie ciekawostką. Trzy najczęstsze zastosowania:

**Planowanie zużycia.** W net-billingu każda kilowatogodzina zużyta na bieżąco jest warta znacznie więcej niż oddana do sieci. Jeśli wiesz, że jutro między 11:00 a 14:00 będzie nadwyżka, to wtedy grzejesz wodę w bojlerze, uruchamiasz pralkę i zmywarkę, ładujesz auto. Szczegółowo opisuję to w artykule [Kiedy włączyć bojler, pralkę i zmywarkę przy fotowoltaice →](/blog/pl/kiedy-wlaczyc-bojler-pralke-fotowoltaika).

**Automatyzacja domu.** Prognozę można wpiąć w Home Assistant i sterować urządzeniami automatycznie: bojler grzeje się tylko przy przewidywanej nadwyżce, pompa ciepła przesuwa cykle CWU na godziny szczytu produkcji.

**Kontrola stanu instalacji.** Jeśli rzeczywista produkcja systematycznie odstaje od skalibrowanej prognozy, coś jest nie tak — brudne panele, cień z rosnącego drzewa, gasnący string. Prognoza działa jak punkt odniesienia, którego aplikacja falownika (pokazująca tylko przeszłość) nie daje.

## Jak zacząć — w 5 minut

1. Pobierz aplikację z prognozą opartą na modelu fizycznym — [Volcast](https://volcast.app/pl/) jest darmowy na start (2 dni prognozy) i działa z **każdą** instalacją: bez logowania do falownika, bez kluczy API, bez podpinania sprzętu.
2. Wpisz parametry: azymut, kąt nachylenia, moc, ewentualnie konfigurację stringów i profil zacienienia.
3. Od pierwszego dnia dostajesz prognozę godzinową; zapisując rzeczywistą produkcję, uruchamiasz autokalibrację, która z tygodnia na tydzień dociera model do Twojego dachu.

## FAQ

**Jak dokładna może być prognoza produkcji fotowoltaiki?**
Po kalibracji typowa dokładność jest rzędu 85% w dni słoneczne. Najtrudniejsze są dni z szybko przemieszczającym się, kłębiastym zachmurzeniem — tam nawet najlepsze modele mają większy rozrzut, choć suma dzienna pozostaje zwykle trafna.

**Czy potrzebuję dostępu do falownika, żeby prognozować produkcję?**
Nie. Prognoza opiera się na danych z modeli pogodowych (ensemble NWP) i parametrach instalacji. Dostęp do falownika bywa przydatny tylko do automatycznego zapisywania rzeczywistej produkcji na potrzeby kalibracji — ale można ją też wpisywać ręcznie raz dziennie.

**Czym różni się prognoza produkcji od prognozy nasłonecznienia?**
Prognoza nasłonecznienia (irradiancji) mówi, ile energii słonecznej dotrze do powierzchni. Prognoza produkcji przelicza ją przez geometrię i parametry konkretnej instalacji na kilowatogodziny z Twojego dachu.

**Czy prognoza działa zimą?**
Tak, choć zimą większy udział mają dni pochmurne, w których względny błąd prognozy jest wyższy. Paradoksalnie to zimą prognoza bywa najcenniejsza — pozwala wyłapać te kilka słonecznych dni, w których warto przesunąć zużycie.
