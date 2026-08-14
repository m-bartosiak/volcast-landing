// Nazwy serii per język.
//
// UWAGA na cichą dziurę: typ jest luźny (klucz `string`, nie `BlogLang`), więc
// brak języka NIE wywoła błędu TypeScriptu. Strona serii po prostu zdegraduje
// tytuł do surowego sluga — `/blog/de/series/fundamentals/` przez długi czas
// renderowało `<title>fundamentals</title>` i angielski opis, indeksowalne.
// Dlatego każdy język obecny w LANGS musi mieć tu komplet czterech serii.
export const SERIES: Record<string, Record<string, { title: string; description: string }>> = {
  fundamentals: {
    en: { title: 'Solar Physics Fundamentals', description: 'The science behind solar energy production' },
    pl: { title: 'Podstawy Fizyki Solarnej', description: 'Nauka stojąca za produkcją energii słonecznej' },
    de: { title: 'Grundlagen der Solarphysik', description: 'Die Wissenschaft hinter der Solarstromproduktion' },
    it: { title: 'Fondamenti di fisica solare', description: 'La scienza dietro la produzione di energia solare' },
    fr: { title: 'Fondamentaux de la physique solaire', description: "La science derrière la production d'énergie solaire" },
    ro: { title: 'Bazele fizicii solare', description: 'Știința din spatele producției de energie solară' },
  },
  'deep-dives': {
    en: { title: 'Forecasting Deep Dives', description: 'Technical deep dives into how physics-based solar forecasting works — from weather models to transposition to accuracy analysis.' },
    pl: { title: 'Prognozowanie — w głąb tematu', description: 'Techniczne zagłębienia w działanie prognozowania solarnego opartego na fizyce — od modeli pogodowych przez transpozycję po analizę trafności.' },
    de: { title: 'Prognose im Detail', description: 'Technische Tiefenblicke in physikbasierte Solarprognosen — von Wettermodellen über Transposition bis zur Genauigkeitsanalyse.' },
    it: { title: 'Previsioni in profondità', description: 'Approfondimenti tecnici sul funzionamento delle previsioni fotovoltaiche basate sulla fisica: dai modelli meteo alla trasposizione fino all’analisi dell’accuratezza.' },
    fr: { title: 'Prévisions en profondeur', description: 'Analyses techniques du fonctionnement des prévisions photovoltaïques fondées sur la physique : des modèles météo à la transposition et à la précision.' },
    ro: { title: 'Prognoze în detaliu', description: 'Analize tehnice despre modul în care funcționează prognozele fotovoltaice bazate pe fizică: de la modele meteo la transpoziție și analiza preciziei.' },
  },
  practical: {
    en: { title: 'Practical Solar', description: 'Hands-on guidance for getting the most out of your solar system — from summer heat and curtailment to timing your own consumption.' },
    pl: { title: 'Fotowoltaika w praktyce', description: 'Praktyczne porady, jak wycisnąć z instalacji PV najwięcej — od letniego upału i curtailmentu po dopasowanie własnego zużycia.' },
    de: { title: 'PV in der Praxis', description: 'Praktische Hinweise, wie du aus deiner Anlage das Meiste holst — von Sommerhitze und Abregelung bis zur Steuerung des eigenen Verbrauchs.' },
    it: { title: 'Fotovoltaico in pratica', description: 'Consigli pratici per sfruttare al massimo il tuo impianto: dal caldo estivo e dalle limitazioni fino a come spostare i consumi.' },
    fr: { title: 'Photovoltaïque en pratique', description: 'Conseils concrets pour tirer le meilleur de votre installation : de la chaleur estivale et de l’écrêtage au décalage de votre consommation.' },
    ro: { title: 'Fotovoltaic în practică', description: 'Sfaturi practice pentru a obține maximul din instalația ta: de la căldura verii și limitarea producției până la mutarea consumului.' },
  },
  geographic: {
    en: { title: 'Solar Geography', description: 'How location, latitude and local climate shape your solar yield across Europe — from Madrid vs Warsaw to coastal fog and Saharan dust.' },
    pl: { title: 'Geografia solarna', description: 'Jak lokalizacja, szerokość geograficzna i lokalny klimat kształtują uzysk PV w Europie — od Madrytu vs Warszawy po mgły nadmorskie i pył saharyjski.' },
    de: { title: 'Solar-Geografie', description: 'Wie Standort, Breitengrad und lokales Klima deinen Solarertrag in Europa prägen — von Madrid vs. Warschau bis Küstennebel und Saharastaub.' },
    it: { title: 'Geografia solare', description: 'Come posizione, latitudine e clima locale determinano la resa fotovoltaica in Europa: da Milano a Palermo, dalla nebbia padana alla sabbia del Sahara.' },
    fr: { title: 'Géographie solaire', description: 'Comment la localisation, la latitude et le climat local façonnent votre rendement solaire en Europe : de Lille à Marseille, du brouillard côtier au sable du Sahara.' },
    ro: { title: 'Geografie solară', description: 'Cum determină locația, latitudinea și clima locală randamentul fotovoltaic în Europa: de la Cluj la Constanța, de la ceața de iarnă la praful saharian.' },
  },
};
