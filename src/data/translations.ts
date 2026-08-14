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
  it?: string;
  fr?: string;
  ro?: string;
}

export const TRANSLATION_CLUSTERS: TranslationCluster[] = [
  { en: 'how-solar-panels-convert-sunlight', pl: 'jak-panele-sloneczne-zamieniaja-swiatlo-w-prad', de: 'wie-solarmodule-licht-in-strom-wandeln' },
  { en: 'why-panels-produce-more-in-spring', pl: 'dlaczego-panele-produkuja-wiecej-wiosna', de: 'warum-module-im-fruehjahr-mehr-liefern' },
  { en: 'three-numbers-pv-setup', pl: 'trzy-liczby-instalacji-pv', de: 'die-drei-zahlen-deiner-pv-anlage' },
  { en: 'direct-vs-diffuse-sunlight', pl: 'swiatlo-bezposrednie-vs-rozproszone', de: 'direktes-vs-diffuses-licht' },
  { en: 'tilt-and-azimuth-explained', pl: 'nachylenie-i-azymut', de: 'neigung-und-azimut-erklaert' },
  { en: 'physics-vs-ml-solar-forecasting', pl: 'fizyka-vs-ml-prognozowanie-solarne', de: 'physik-vs-ml-solarprognose' },
  { en: 'where-weather-forecasts-come-from', pl: 'skad-sie-biora-prognozy-pogody', de: 'woher-wetterprognosen-kommen' },
  { en: 'why-cloud-cover-hardest-variable', pl: 'dlaczego-zachmurzenie-najtrudniejsza-zmienna', de: 'warum-bewoelkung-die-schwierigste-variable-ist' },
  { en: 'irradiance-journey-space-to-panel', pl: 'podroz-naslonecznienia-od-kosmosu-do-panelu', de: 'die-reise-der-einstrahlung-vom-all-zum-modul' },
  { en: 'transposition-models', pl: 'modele-transpozycji', de: 'transpositionsmodelle' },
  { en: 'nowcasting-vs-day-ahead', pl: 'nowcasting-vs-prognoza-dniowa', de: 'nowcasting-vs-day-ahead-vs-woche' },
  { en: 'why-no-training-data-needed', pl: 'dlaczego-nowe-instalacje-nie-potrzebuja-danych-treningowych', de: 'warum-keine-trainingsdaten-noetig' },
  { en: 'why-solar-panels-produce-less-in-heat', pl: 'dlaczego-panele-produkuja-mniej-w-upale', de: 'warum-module-bei-hitze-weniger-liefern' },
  { en: 'summer-solar-surplus-and-curtailment', pl: 'letnia-nadprodukcja-i-curtailment', de: 'sommer-ueberschuss-und-abregelung' },
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
