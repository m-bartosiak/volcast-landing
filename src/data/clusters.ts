// Relacje hub-and-spoke między postami klastra, zgodne z planem paczki (E01→E02…).
// Klucze i wartości to `translationKey` (język-agnostyczne). BlogPost rozwiązuje je
// do slugów w TYM SAMYM języku i pomija tematy, których dany język nie ma
// (np. DE nie ma `self-consumption`/`weather-vs-output`, ma `balkonkraftwerk`/`shading`).
//
// Linkowanie Q&A→hub renderuje się automatycznie z pola `guide` (patrz BlogPost/QAPost),
// więc tu opisujemy tylko relacje blog↔blog.

export const CLUSTER_LINKS: Record<string, string[]> = {
  // Klaster: prognoza produkcji
  'forecast-hub': ['ha-comparison', 'appliances', 'best-app', 'weather-vs-output'],
  'ha-comparison': ['forecast-hub', 'appliances', 'best-app'],
  'best-app': ['forecast-hub', 'ha-comparison'],
  'brand-comparison': ['forecast-hub', 'ha-comparison'],
  'weather-vs-output': ['forecast-hub'],
  // Klaster: autokonsumpcja
  'self-consumption': ['forecast-hub', 'appliances', 'ev-charging', 'heat-pump'],
  'appliances': ['forecast-hub', 'ha-comparison', 'ev-charging', 'heat-pump'],
  'ev-charging': ['forecast-hub', 'self-consumption', 'appliances'],
  'heat-pump': ['forecast-hub', 'self-consumption', 'appliances'],
  'winter': ['forecast-hub', 'self-consumption'],
  // Klaster: sezon i rynek
  'dynamic-tariff': ['negative-prices', 'battery'],
  'negative-prices': ['dynamic-tariff', 'battery'],
  'battery': ['dynamic-tariff', 'negative-prices'],
  'pme-ems': ['battery', 'dynamic-tariff'],
  // Tematy specyficzne dla DE
  'balkonkraftwerk': ['forecast-hub', 'appliances'],
  'shading': ['forecast-hub'],
};
