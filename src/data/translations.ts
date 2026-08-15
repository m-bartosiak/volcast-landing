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
  { en: 'how-solar-panels-convert-sunlight', pl: 'jak-panele-sloneczne-zamieniaja-swiatlo-w-prad', de: 'wie-solarmodule-licht-in-strom-wandeln', it: 'come-funzionano-i-pannelli-fotovoltaici', fr: 'comment-fonctionne-un-panneau-solaire' },
  { en: 'why-panels-produce-more-in-spring', pl: 'dlaczego-panele-produkuja-wiecej-wiosna', de: 'warum-module-im-fruehjahr-mehr-liefern', it: 'perche-i-pannelli-producono-di-piu-in-primavera', fr: 'pourquoi-plus-de-production-au-printemps' },
  { en: 'three-numbers-pv-setup', pl: 'trzy-liczby-instalacji-pv', de: 'die-drei-zahlen-deiner-pv-anlage', it: 'i-tre-numeri-del-tuo-impianto-fotovoltaico', fr: 'trois-chiffres-installation-photovoltaique' },
  { en: 'direct-vs-diffuse-sunlight', pl: 'swiatlo-bezposrednie-vs-rozproszone', de: 'direktes-vs-diffuses-licht', it: 'luce-diretta-e-luce-diffusa', fr: 'lumiere-directe-et-lumiere-diffuse' },
  { en: 'tilt-and-azimuth-explained', pl: 'nachylenie-i-azymut', de: 'neigung-und-azimut-erklaert', it: 'inclinazione-e-azimut-dei-pannelli', fr: 'inclinaison-et-azimut-des-panneaux' },
  { en: 'physics-vs-ml-solar-forecasting', pl: 'fizyka-vs-ml-prognozowanie-solarne', de: 'physik-vs-ml-solarprognose', it: 'previsioni-fotovoltaico-fisica-o-machine-learning', fr: 'prevision-solaire-physique-ou-machine-learning' },
  { en: 'where-weather-forecasts-come-from', pl: 'skad-sie-biora-prognozy-pogody', de: 'woher-wetterprognosen-kommen', it: 'da-dove-arrivano-le-previsioni-meteo', fr: 'origine-des-previsions-meteo' },
  { en: 'why-cloud-cover-hardest-variable', pl: 'dlaczego-zachmurzenie-najtrudniejsza-zmienna', de: 'warum-bewoelkung-die-schwierigste-variable-ist', it: 'perche-le-nuvole-sono-la-variabile-piu-difficile', fr: 'nebulosite-variable-la-plus-difficile' },
  { en: 'irradiance-journey-space-to-panel', pl: 'podroz-naslonecznienia-od-kosmosu-do-panelu', de: 'die-reise-der-einstrahlung-vom-all-zum-modul', it: 'viaggio-della-luce-dallo-spazio-al-pannello', fr: 'irradiance-du-soleil-au-panneau' },
  { en: 'transposition-models', pl: 'modele-transpozycji', de: 'transpositionsmodelle', it: 'modelli-di-trasposizione', fr: 'modeles-de-transposition' },
  { en: 'nowcasting-vs-day-ahead', pl: 'nowcasting-vs-prognoza-dniowa', de: 'nowcasting-vs-day-ahead-vs-woche', it: 'nowcasting-day-ahead-e-previsioni-settimanali', fr: 'nowcasting-day-ahead-et-semaine' },
  { en: 'why-no-training-data-needed', pl: 'dlaczego-nowe-instalacje-nie-potrzebuja-danych-treningowych', de: 'warum-keine-trainingsdaten-noetig', it: 'previsioni-senza-dati-storici', fr: 'prevision-sans-historique-de-production' },
  { en: 'why-solar-panels-produce-less-in-heat', pl: 'dlaczego-panele-produkuja-mniej-w-upale', de: 'warum-module-bei-hitze-weniger-liefern', it: 'perche-i-pannelli-producono-meno-con-il-caldo', fr: 'panneaux-produisent-moins-avec-la-chaleur' },
  { en: 'summer-solar-surplus-and-curtailment', pl: 'letnia-nadprodukcja-i-curtailment', de: 'sommer-ueberschuss-und-abregelung', it: 'eccedenze-estive-e-curtailment', fr: 'surplus-estival-et-ecretement' },
  { en: 'timing-appliances-to-your-solar-peak', pl: 'jak-ustawic-zuzycie-pod-szczyt-produkcji' },
  { en: 'same-system-different-cities-europe', pl: 'ta-sama-instalacja-rozne-miasta-europy', de: 'gleiche-anlage-verschiedene-staedte', it: 'stesso-impianto-citta-diverse', fr: 'meme-installation-villes-differentes' },
  { en: 'why-regional-weather-models-matter', pl: 'dlaczego-regionalne-modele-pogodowe-maja-znaczenie', de: 'warum-regionale-wettermodelle-zaehlen', it: 'perche-i-modelli-meteo-regionali-contano', fr: 'pourquoi-les-modeles-meteo-regionaux' },
  { en: 'coastal-vs-inland-solar-microclimate', pl: 'wybrzeze-vs-glab-ladu-mikroklimat', de: 'kueste-oder-binnenland-mikroklima', it: 'costa-o-entroterra-il-microclima-conta', fr: 'littoral-ou-interieur-le-microclimat' },
  { en: 'saharan-dust-southern-europe-solar', pl: 'pyl-saharyjski-poludniowa-europa', de: 'saharastaub-suedeuropa-pv', it: 'sabbia-del-sahara-e-resa-fotovoltaica', fr: 'sable-du-sahara-et-production-solaire' },
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
