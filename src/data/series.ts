export const SERIES: Record<string, Record<string, { title: string; description: string }>> = {
  fundamentals: {
    en: { title: 'Solar Physics Fundamentals', description: 'The science behind solar energy production' },
    pl: { title: 'Podstawy Fizyki Solarnej', description: 'Nauka stojąca za produkcją energii słonecznej' },
  },
  'deep-dives': {
    en: { title: 'Forecasting Deep Dives', description: 'Technical deep dives into how physics-based solar forecasting works — from weather models to transposition to accuracy analysis.' },
    pl: { title: 'Prognozowanie — w głąb tematu', description: 'Techniczne zagłębienia w działanie prognozowania solarnego opartego na fizyce — od modeli pogodowych przez transpozycję po analizę trafności.' },
  },
  practical: {
    en: { title: 'Practical Solar', description: 'Hands-on guidance for getting the most out of your solar system — from summer heat and curtailment to timing your own consumption.' },
    pl: { title: 'Fotowoltaika w praktyce', description: 'Praktyczne porady, jak wycisnąć z instalacji PV najwięcej — od letniego upału i curtailmentu po dopasowanie własnego zużycia.' },
  },
  geographic: {
    en: { title: 'Solar Geography', description: 'How location, latitude and local climate shape your solar yield across Europe — from Madrid vs Warsaw to coastal fog and Saharan dust.' },
    pl: { title: 'Geografia solarna', description: 'Jak lokalizacja, szerokość geograficzna i lokalny klimat kształtują uzysk PV w Europie — od Madrytu vs Warszawy po mgły nadmorskie i pył saharyjski.' },
    de: { title: 'Solar-Geografie', description: 'Wie Standort, Breitengrad und lokales Klima deinen Solarertrag in Europa prägen — von Madrid vs. Warschau bis Küstennebel und Saharastaub.' },
  },
};
