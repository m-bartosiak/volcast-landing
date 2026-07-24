// Mapa tłumaczeń wpisów bloga: klucz tematu → slug w każdym języku.
//
// Slugi są przetłumaczone per język (np. "three-numbers-pv-setup" ↔
// "trzy-liczby-instalacji-pv"), więc pary językowe NIE dają się sparować po
// identycznym slugu. Ta mapa jest źródłem prawdy dla:
//   - alternatów hreflang (SEO — łączy wersje językowe tej samej treści),
//   - przełącznika języka na stronie wpisu.
//
// Rozszerzalne o kolejne języki (np. `de`) — dodaj slug do istniejącego wpisu
// klastra. Przy imporcie paczki blogowej `topic_id` z frontmattera mapuje się
// 1:1 na te klastry.

import { LANGS, type BlogLang } from './i18n';

export interface TranslationCluster {
  en?: string;
  pl?: string;
  de?: string;
}

export const TRANSLATION_CLUSTERS: TranslationCluster[] = [
  { en: 'how-solar-panels-convert-sunlight', pl: 'jak-panele-sloneczne-zamieniaja-swiatlo-w-prad' },
  { en: 'why-panels-produce-more-in-spring', pl: 'dlaczego-panele-produkuja-wiecej-wiosna' },
  { en: 'three-numbers-pv-setup', pl: 'trzy-liczby-instalacji-pv' },
  { en: 'direct-vs-diffuse-sunlight', pl: 'swiatlo-bezposrednie-vs-rozproszone' },
  { en: 'tilt-and-azimuth-explained', pl: 'nachylenie-i-azymut' },
  { en: 'physics-vs-ml-solar-forecasting', pl: 'fizyka-vs-ml-prognozowanie-solarne' },
  { en: 'where-weather-forecasts-come-from', pl: 'skad-sie-biora-prognozy-pogody' },
  { en: 'why-cloud-cover-hardest-variable', pl: 'dlaczego-zachmurzenie-najtrudniejsza-zmienna' },
  { en: 'irradiance-journey-space-to-panel', pl: 'podroz-naslonecznienia-od-kosmosu-do-panelu' },
  { en: 'transposition-models', pl: 'modele-transpozycji' },
  { en: 'nowcasting-vs-day-ahead', pl: 'nowcasting-vs-prognoza-dniowa' },
  { en: 'why-no-training-data-needed', pl: 'dlaczego-nowe-instalacje-nie-potrzebuja-danych-treningowych' },
  { en: 'why-solar-panels-produce-less-in-heat', pl: 'dlaczego-panele-produkuja-mniej-w-upale' },
  { en: 'summer-solar-surplus-and-curtailment', pl: 'letnia-nadprodukcja-i-curtailment' },
  { en: 'timing-appliances-to-your-solar-peak', pl: 'jak-ustawic-zuzycie-pod-szczyt-produkcji' },
  { en: 'same-system-different-cities-europe', pl: 'ta-sama-instalacja-rozne-miasta-europy', de: 'gleiche-anlage-verschiedene-staedte' },
  { en: 'why-regional-weather-models-matter', pl: 'dlaczego-regionalne-modele-pogodowe-maja-znaczenie', de: 'warum-regionale-wettermodelle-zaehlen' },
  { en: 'coastal-vs-inland-solar-microclimate', pl: 'wybrzeze-vs-glab-ladu-mikroklimat', de: 'kueste-oder-binnenland-mikroklima' },
  { en: 'saharan-dust-southern-europe-solar', pl: 'pyl-saharyjski-poludniowa-europa', de: 'saharastaub-suedeuropa-pv' },
];

/** Znajdź klaster tłumaczeń, do którego należy dany (język, slug). */
export function findCluster(lang: string, slug: string): TranslationCluster | undefined {
  return TRANSLATION_CLUSTERS.find((c) => c[lang as BlogLang] === slug);
}

/** Zwróć slug odpowiednika w konkretnym innym języku (lub undefined). */
export function getTranslatedSlug(
  lang: string,
  slug: string,
  otherLang: string,
): string | undefined {
  const cluster = findCluster(lang, slug);
  return cluster?.[otherLang as BlogLang];
}

/**
 * Zwróć slugi odpowiedników we WSZYSTKICH pozostałych językach obecnych w
 * klastrze (do budowy alternatów hreflang dla ≥3 języków). Weryfikację
 * istnienia wpisu robi warstwa strony (kolekcja).
 */
export function getClusterSlugs(
  lang: string,
  slug: string,
): { lang: BlogLang; slug: string }[] {
  const cluster = findCluster(lang, slug);
  if (!cluster) return [];
  const out: { lang: BlogLang; slug: string }[] = [];
  for (const l of LANGS) {
    if (l !== lang && cluster[l]) out.push({ lang: l, slug: cluster[l]! });
  }
  return out;
}
