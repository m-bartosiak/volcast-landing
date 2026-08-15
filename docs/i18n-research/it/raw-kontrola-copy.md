## 1. Obietnica powiadomienia o zmianie prognozy

**W nadesłanych tekstach: czysto.** Wszystkie 11 wersji `features.notifications.desc` opisuje wyłącznie trzy realne alerty; żaden nie zawiera „gdy prognoza się zmieni / ändert / cambia / muda / se schimbă / změní / змінюється".

**ALE — leftover w pliku (nie objęty batchem):** `screenshots.notificationsAlt` nadal obiecuje tę funkcję **we wszystkich 12 locale**, łącznie z wzorcem EN:
- `en`: "Volcast forecast **change** notification and panel configuration"
- `pl`: "Powiadomienie o **zmianie prognozy** Volcast oraz konfiguracja paneli"
- `de`: "Volcast Benachrichtigung über **Prognoseänderung**"
- `nl`: "melding van **gewijzigde** voorspelling" · `es`: "Notificación de **cambio** de pronóstico" · `fr`: "Notification Volcast de **changement** de prévision" · `uk`: "Сповіщення про **зміну** прогнозу" · `pt`: "**alteração** de previsão" · `pt-br`: "**mudança** de previsão" · `ro`: "Notificare **schimbare** prognoză" · `cs`: "Upozornění na **změnu** předpovědi" · `sk`: "Upozornenie na **zmenu** predpovede"

Waga: **niska dziś, wysoka jutro** — `scripts/landing/template.html:1294` ma alt zahardkodowany (`alt="Volcast notifications"`), więc klucz jest martwy i nie trafia do wydanego HTML. Jeśli ktoś kiedyś podepnie `{{t.screenshots.notificationsAlt}}`, fałszywa obietnica wraca w 12 językach naraz. Do usunięcia/przepisania razem z tym batchem.

## 2. Dane satelitarne

**Czysto — we wszystkich 11 nadesłanych tekstach zero wystąpień** rdzenia satellit/satelit/satéli/suputnik.

Zweryfikowałem dodatkowo pokrycie względem `C:\Users\yakon\Documents\volcast-landing\scripts\landing\translations.json`: po zastosowaniu patcha **nie zostaje ani jedno wystąpienie „satelity" w żadnym locale**. Klucze, które dziś je zawierają, to dokładnie te objęte batchem — plus trzy klucze wyłącznie po angielsku (`hero.desc`, `meta.ogDescription`, `trust.noCloudDesc`), które pokrywa wzorzec EN. Zlokalizowane wersje tych trzech kluczy są znacznie krótsze od angielskich i nigdy nie niosły tej frazy (np. `pl hero.desc` = „Zaawansowany silnik fizyczny.", `pl trust.noCloudDesc` = „Volcast nigdy nie łączy się z Twoim falownikiem ani żadnym sprzętem."). Brak roboty do zrobienia — ale to znaczy, że **parytet treści EN vs reszta się rozjeżdża jeszcze bardziej** (EN hero.desc 190 znaków vs 20-38 znaków w locale).

## 3. Zakres 85-95

**Czysto — żaden locale nie zachował zakresu.** Wszystkie podają jedną wartość: `pl` „około 85%", `de` „rund 85%", `nl` „ongeveer 85%", `es` „suele rondar el 85%", `fr` „environ 85 %", `uk` „близько 85%", `pt` „cerca de 85%", `pt-br` „cerca de 85%", `ro` „în jur de 85%", `cs` „kolem 85 %", `sk` „okolo 85 %".

Efekt uboczny: „85–95" było jedynym miejscem w całym pliku, gdzie występowała półpauza `–` (dokładnie 1× na locale). Po patchu znika z pliku całkowicie.

## 4. Rejestr

**Żaden locale nie złamał własnej deklaracji z registerNote.** Zweryfikowane markery: `pl` Twojej/Twojego (TY) · `de` Ihrer/Ihre/verpassen Sie · `nl` uw · `es` tu/tus/No te pierdas · `fr` votre/vos/Ne manquez plus · `uk` вашої/Не пропустіть · `pt` do seu/a sua/Nunca perca · `pt-br` seu/sua/seus · `ro` dumneavoastră/Nu ratați · `cs` vašeho/vám · `sk` vášho/Nezmeškajte. W plikach źródłowych zero markerów nieformalnych (`je/jouw`, `tu/teu`, `tvůj`, `dein`) w locale formalnych — spójne.

**Jedno odstępstwo:** `ro` / `meta.description` — „Volcast prezice **producția solară** oră cu oră […] din **configurația panourilor**". To jedyny nowy meta.description, który całkowicie porzuca zwrot do użytkownika (reszta zachowuje: es „tu producción", fr „votre production", pt „a sua produção", pt-br „sua geração"). Poprzednia wersja ro brzmiała „**Preziceți** producția solară…". Deklaracja mówi „zachowano rejestr formalny" — a formalności tu po prostu nie ma, bo nie ma adresata. Sugestia: „producția dumneavoastră solară" / „din configurația panourilor dumneavoastră".

**Błędy w samych registerNote (nie w tekstach), do sprostowania, bo wprowadzą w błąd następną osobę:**
- `pl`, `ro`, `sk` deklarują, że locale nie używa em dash — plik używa go 8-9× na locale (`pl meta.ogDescription`: „godzina po godzinie **—** dla każdej instalacji").
- `uk` deklaruje „bez form typu Ви z wielkiej litery" — plik ma dwie: `faq.a5` („**Ви** вводите фактичну генерацію") i `faq.a6` („**Ви** отримаєте підтримку Energy Dashboard").
- `pt-br` pisze „zostawiłem em dash tylko tam, gdzie brzmi naturalnie" — w nadesłanych tekstach pt-BR nie ma ani jednego em dash.

## 5. Długości meta.description (limit 120-155)

Wszystkie **w normie**:

| locale | znaków | status |
|---|---|---|
| en (wzorzec) | 148 | OK |
| es | 134 | OK |
| fr | 151 | OK |
| pt | 152 | OK |
| pt-br | 151 | OK |
| ro | 147 | OK |

Sześć locale nie dostało nowego meta.description (`pl` 144, `de` 143, `nl` 141, `uk` 144, `cs` 136, `sk` 141 — wartości obecne w pliku, wszystkie w normie). Pominięcie jest **poprawne** — te sześć nigdy nie wspominało o satelicie. Ale konsekwencja: po patchu 6 locale ma starą konstrukcję („Przewiduj uzyski… dla każdej instalacji"), a 5 nową („Volcast prevê… Sem login no inversor"). Jeśli to celowe — ok; jeśli nie, brakuje 6 tekstów.

## 6. Em dash

**Nie zaimportowano em dash do języka, który go nie używa.** Em dash występuje tylko w dwóch nowych tekstach:
- `de` / `faq.a1`: „schwerer vorherzusagen **—** Volcast bleibt dabei…"
- `pt` / `meta.description`: „sete dias de antecedência **—** dos seus painéis"

Oba locale już go stosują w pliku (de 9×, pt 9×), więc to kontynuacja house style, nie import. Uwaga niemiecka: normatywnie DE używa półpauzy z odstępami (`–`), nie `—`; to dług typograficzny całego pliku, nie tego batcha — jeśli będziesz to prostować, prostuj hurtem.

Efekt uboczny do świadomej decyzji: `es`, `fr`, `ro`, `pt-br` zamieniły em dash na przecinki **tylko w edytowanych kluczach**, więc na tej samej stronie `meta.description` będzie bez pauzy, a `meta.ogDescription` (nietknięty) dalej z pauzą — np. `fr`: „heure par heure, à partir de vos panneaux" vs „heure par heure **—** pour toute installation".

## 7. Trzy alerty w features.notifications.desc

**Komplet we wszystkich 11 wersjach** (wieczorna prognoza / śnieg / okno produkcji): pl „Wieczorna prognoza… gdy śnieg może pokryć panele… energochłonne urządzenia" · de „Abends die Prognose… Schneewarnung… Großgeräte" · nl „avondvoorspelling… sneeuwwaarschuwing… zware apparaten" · es „pronóstico vespertino… aviso de nieve… electrodomésticos pesados" · fr „Une prévision le soir… alerte neige… gros appareils" · uk „Вечірній прогноз… про сніг… потужні прилади" · pt „previsão ao fim do dia… aviso de neve… aparelhos pesados" · pt-br „previsão à noite… aviso de neve… aparelhos pesados" · ro „Prognoza de seară… zăpadă… aparatele electrocasnice mari" · cs „Večerní předpověď… sněhem… náročné spotřebiče" · sk „Večerná predpoveď… sneh… náročné spotrebiče".

Jedna nieścisłość: `pt` „Uma previsão **ao fim do dia**" = „pod koniec dnia", nie „wieczorem" — reszta locale trzyma się „wieczoru". Kosmetyka.

## Dodatkowo — poza zadanymi 7 punktami

- `es` / `meta.description`: „siete días **vista**" — idiom wymaga przyimka: „**a** siete días vista". Dodatkowo „**desde** tus paneles" jest przestrzenne; naturalniej „a partir de tus paneles".
- `fr` / `meta.description`: „**Sans onduleur.**" znaczy „bez falownika", a nie „bez logowania do falownika" — czyta się jak twierdzenie, że instalacja nie potrzebuje falownika. Powinno być np. „Sans connexion à l'onduleur." To zmiana sensu, nie stylu.
- `pt` / `meta.description`: „sete dias de antecedência **— dos seus painéis**" — elipsa po pauzie jest niegramatyczna; brakuje „a partir dos seus painéis".
- `ro` / `meta.description`: „din configurația panourilor **și modele meteo multiple**" — po „din" wymagane powtórzenie przyimka: „și din mai multe modele meteo" („modele meteo multiple" to kalka).
- `de` / `faq.a1`: „Volcast bleibt dabei aber **deutlich** besser als allgemeine Wetter-Apps" — wzmacniacz „deutlich" nie ma odpowiednika w źródle („still outperforms"). To podbita obietnica marketingowa, której nie masz czym poprzeć; usunąć.
- `pt-br`: niespójność rodzajnika w obrębie locale — „**Volcast** combina" (howItWorks.step2.desc) vs „**O Volcast** usa" (faq.a1). Ujednolicić na „O Volcast". Dodatkowo „apps de tempo genéricos" → naturalniej „aplicativos de previsão do tempo".