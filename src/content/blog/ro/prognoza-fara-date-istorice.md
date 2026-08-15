---
title: "De ce un sistem nou nu are nevoie de date istorice"
description: "Majoritatea aplicațiilor de prognoză cer luni întregi de istoric. Un model fizic funcționează din prima zi: cum este posibil și ce înseamnă pentru tine."
date: 2026-05-26
updated: 2026-08-14
tags: ["cold-start", "new-installation", "physics-model", "onboarding", "forecasting"]
series: "deep-dives"
seriesOrder: 7
lang: ro
draft: false
seo:
  ogTitle: "Fără date istorice — de ce o prognoză bazată pe fizică merge din prima zi"
  keywords: ["prognoza productie sistem nou", "prognoza fotovoltaica fara date istorice", "cold start prognoza solara", "model fizic prognoza fotovoltaica"]
relatedPosts: ["prognoza-model-fizic-sau-machine-learning", "cele-trei-numere-ale-sistemului-tau", "modele-de-transpozitie"]
---

Tocmai ți-au montat panourile. Invertorul merge, aplicația producătorului îți arată producția în timp real și ești nerăbdător. Vrei să știi un singur lucru: cât produc panourile mele mâine? Pot să-mi programez consumul după prognoză?

Dacă folosești o aplicație de prognoză bazată pe machine learning, răspunsul e: mai așteaptă. Revino peste două-trei luni, când vom avea destule date ca să învățăm comportamentul instalației tale.

Dacă folosești o aplicație bazată pe fizică, cum e Volcast, răspunsul e: chiar acum. Uite curba orară de producție pentru mâine.

Acest avantaj de pornire — „cold start", adică startul fără niciun fel de date acumulate — nu e un slogan de marketing. E o consecință directă a felului în care funcționează cele două abordări.

Pentru România întrebarea e cu atât mai practică: valul de instalații rezidențiale din ultimii ani, împins și de programul Casa Verde Fotovoltaice, a dus numărul prosumatorilor racordați la rețelele de distribuție la 359.378 la 30 iunie 2026, potrivit datelor ANRE. O bună parte dintre ei au sub un an de funcționare, deci zero istoric de producție. Exact ei sunt cititorii acestui articol.

## De ce machine learning-ul are nevoie de date

Un model de machine learning e, în esență, un detector de tipare. Învață relația dintre intrări (condițiile meteo) și ieșiri (producția ta) observând multe exemple. Fără exemple, nu are cu ce să compare.

Gândește-te ce trebuie să învețe pentru instalația ta specifică: câtă putere produci pe cer senin în diferite perioade ale anului (informație care înglobează orientarea panourilor, înclinarea și eventualele umbriri fixe); cum îți afectează temperatura modulele tale (depinde de coeficientul de temperatură, de tipul de montaj și de ventilație); cum se traduce nebulozitatea în scădere de producție (depinde de orientarea panourilor și de regimul de nori tipic al locului tău).

Fiecare dintre aceste lucruri cere date din condiții diferite. Ca să învețe variația sezonieră, modelul are nevoie în mod ideal de un an întreg. Ca să învețe comportamentul pe nori, îi trebuie zeci de zile acoperite. Ca să caracterizeze efectele termice, îi trebuie și zile calde, și zile reci, cu iradianță similară.

În practică, majoritatea modelelor de machine learning devin „utilizabile" după două-trei luni și „bune" după 6-12 luni. Până atunci, ori nu sunt disponibile deloc, ori fac presupuneri educate pe baza unor instalații asemănătoare din zonă — ceea ce e, la rândul său, o formă de aproximare fizică, doar că una grosolană.

## De ce fizica nu are nevoie de istoric

Un model bazat pe fizică nu învață comportamentul instalației tale din observație. Îl *calculează* din principii de bază.

Dacă îi dai unghiul de înclinare, știe exact cum cad razele soarelui pe panourile tale în fiecare moment al fiecărei zile din an. E geometrie, nu statistică.

Dacă îi dai azimutul (orientarea), știe când panourile tale privesc soarele cel mai direct, ceea ce dă forma curbei zilnice de producție. Trigonometrie curată.

Dacă îi dai puterea instalată, știe factorul de scalare dintre iradianță și puterea electrică livrată. Un singur număr care încapsulează eficiența modulelor și suprafața lor.

Dacă îi dai locația, calculează traiectoria soarelui (astronomie), alege punctul de grilă potrivit din modelul meteo și aplică modele atmosferice calibrate pe decenii de măsurători — nu pe datele tale, ci pe fizica atmosferei, aceeași peste tot pe Pământ.

Coeficientul de temperatură? Panourile pe siliciu cristalin se grupează strâns între −0,35 și −0,45 %/°C. Folosirea valorii tipice de −0,4 %/°C introduce cel mult o eroare de 1-2% în zilele cu temperaturi extreme. E sub incertitudinea prognozei meteo.

Randamentul invertorului? Invertoarele moderne lucrează la 96-98% pe cea mai mare parte a domeniului lor de putere. Valoarea de 97% e suficient de exactă pentru scopuri de prognoză.

Pierderile pe cabluri? De regulă 1-3%, aproximativ constante. Scalează uniform producția, fără să schimbe forma curbei.

Niciunul dintre aceste lucruri nu cere să-ți observi instalația. Sunt proprietăți fizice care pot fi estimate din cunoștințe generale, cu o acuratețe acceptabilă pentru o prognoză.

## Cum arată prima zi

Iată ce se întâmplă când îți configurezi Volcast în prima zi cu panouri:

Introduci trei numere: înclinare, azimut, putere instalată. Telefonul dă locația. În câteva secunde, modelul rulează simularea fizică completă pentru prognoza de mâine: calculul poziției soarelui, preluarea datelor din modelul meteo, modelarea radiației atmosferice, descompunerea iradianței în componenta directă și cea difuză, transpoziția Perez pe suprafața ta înclinată, reducerea puterii cu temperatura și estimarea producției electrice.

Vezi o curbă orară de producție pentru mâine. Îți arată urcarea de dimineață care începe la răsărit, vârful din jurul prânzului solar (deplasat de azimutul tău), scăderea de după-amiază și totalul zilnic estimat.

E perfectă prognoza asta? Nu. Poartă cu ea toată incertitudinea prognozei meteo de la bază — în primul rând incertitudinea privind norii. Dar are fundament fizic. Forma curbei e corectă, pentru că geometria nu minte. Nivelul e calibrat pe puterea ta instalată. Efectele termice sunt modelate din termodinamică.

Compară asta cu „te rugăm să aștepți trei luni". Pentru cineva care tocmai și-a montat panourile și abia așteaptă să-și înțeleagă sistemul, așteptarea aia e o eternitate.

## Când ajută totuși istoricul

Asta nu înseamnă că datele istorice sunt inutile. Dacă folosești Volcast de șase luni și observi că prognoza îți dă constant cu 8% mai mult decât produci, informația aia îți spune ceva — poate ai o umbrire de care nu s-a ținut cont, poate panourile sunt ușor abătute de la azimutul declarat, poate invertorul intră în limitare mai devreme decât presupune modelul.

Modelul fizic dă linia de bază. Comparația cu istoricul dă calibrarea. Împreună sunt mai exacte decât oricare dintre ele luată separat.

Versiunile viitoare de Volcast pot integra această autocalibrare — folosind producția ta reală (dacă alegi să o împărtășești) pentru a ajusta fin parametrii modelului fizic. Dar cuvântul-cheie e „fin". Fizica te duce 90-95% din drum încă din prima zi. Calibrarea lustruiește ultimele procente.

## Implicația mai largă

Avantajul de pornire nu ține doar de comoditate. Are consecințe pentru tot ecosistemul prognozei fotovoltaice.

**Accesibilitate:** o prognoză care funcționează imediat e o prognoză care funcționează pentru toată lumea, inclusiv pentru cei care tocmai și-au montat panouri, pentru cei care au schimbat platforma invertorului sau pentru cei care pur și simplu nu vor să se încurce cu exportul și încărcarea datelor.

**Confidențialitate:** o prognoză bazată pe fizică nu are nevoie de istoricul tău de producție. Parametrii instalației (înclinare, azimut, putere) nu sunt date sensibile — se văd dintr-o fotografie din satelit a acoperișului tău. Primești o prognoză fără să dai la schimb tiparul consumului tău de energie.

**Reziliență:** când se schimbă ceva — adaugi panouri, crește un copac, îți schimbi invertorul — un model fizic se ajustează imediat, cu parametrii actualizați. Un model de machine learning trebuie să reînvețe, eventual de la zero.

**Scalabilitate:** un model fizic poate genera o prognoză pentru orice loc de pe Pământ, pornind de la trei date de intrare. Nu trebuie acumulate date de antrenare pentru fiecare instalație, regiune sau țară nouă.

De asta a ales Volcast abordarea „fizica întâi". Legile termodinamicii, ale opticii și ale fizicii semiconductorilor nu au nevoie de perioadă de antrenare. Funcționează din prima zi, peste tot, pentru orice instalație.

Trei numere. Zero istoric. Exactă de la prima prognoză.
