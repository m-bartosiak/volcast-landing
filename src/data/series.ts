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
};
