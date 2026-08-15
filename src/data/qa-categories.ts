// Nazwy kategorii Q&A (k1–k6) per język — przeniesione z build.py paczki.
// k6 celowo różni się rynkowo: EN = eksport/taryfy (UK/IE/AU), PL = net-billing, DE = Balkonkraftwerk.
import type { BlogLang } from './i18n';

// k6 jest celowo rynkowa i różni się per język: EN eksport i taryfy (UK/IE/AU),
// PL net-billing, DE Balkonkraftwerk, IT wygaszony scambio sul posto i ritiro
// dedicato, FR obligation d'achat i autoconsommation, RO status prosumatora.
// Nie tłumaczyć jej między językami — to jedyna kategoria, w której pytanie
// przetłumaczone dosłownie jest dla czytelnika bezużyteczne.
export const QA_CATEGORIES: Record<string, Record<BlogLang, string>> = {
  k1: {
    en: 'Grid and inverter', pl: 'Sieć i falownik', de: 'Netz und Wechselrichter',
    it: 'Rete e inverter', fr: 'Réseau et onduleur', ro: 'Rețea și invertor',
  },
  k2: {
    en: 'Production and yields', pl: 'Produkcja i uzyski', de: 'Produktion und Erträge',
    it: 'Produzione e resa', fr: 'Production et rendement', ro: 'Producție și randament',
  },
  k3: {
    en: 'Home battery', pl: 'Magazyn energii', de: 'Stromspeicher',
    it: 'Accumulo domestico', fr: 'Batterie domestique', ro: 'Baterie de acumulare',
  },
  k4: {
    en: 'Tariffs and bills', pl: 'Taryfy i rachunki', de: 'Tarife und Rechnungen',
    it: 'Tariffe e bollette', fr: 'Tarifs et factures', ro: 'Tarife și facturi',
  },
  k5: {
    en: 'Surplus automation', pl: 'Automatyzacja nadwyżki', de: 'Überschuss-Automatisierung',
    it: 'Automazione del surplus', fr: 'Automatisation du surplus', ro: 'Automatizarea surplusului',
  },
  k6: {
    en: 'Export and tariffs', pl: 'Net-billing i przepisy', de: 'Balkonkraftwerk',
    it: "Incentivi e ritiro dell'energia", fr: 'Revente et autoconsommation', ro: 'Prosumator și reglementări',
  },
};

/** Czytelna nazwa kategorii (fallback: en, potem surowy kod). */
export function categoryName(cat: string, lang: string): string {
  const c = QA_CATEGORIES[cat];
  return c ? (c[lang as BlogLang] ?? c.en) : cat;
}
