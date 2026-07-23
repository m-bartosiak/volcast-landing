// Nazwy kategorii Q&A (k1–k6) per język — przeniesione z build.py paczki.
// k6 celowo różni się rynkowo: EN = eksport/taryfy (UK/IE/AU), PL = net-billing, DE = Balkonkraftwerk.
import type { BlogLang } from './i18n';

export const QA_CATEGORIES: Record<string, Record<BlogLang, string>> = {
  k1: { en: 'Grid and inverter', pl: 'Sieć i falownik', de: 'Netz und Wechselrichter' },
  k2: { en: 'Production and yields', pl: 'Produkcja i uzyski', de: 'Produktion und Erträge' },
  k3: { en: 'Home battery', pl: 'Magazyn energii', de: 'Stromspeicher' },
  k4: { en: 'Tariffs and bills', pl: 'Taryfy i rachunki', de: 'Tarife und Rechnungen' },
  k5: { en: 'Surplus automation', pl: 'Automatyzacja nadwyżki', de: 'Überschuss-Automatisierung' },
  k6: { en: 'Export and tariffs', pl: 'Net-billing i przepisy', de: 'Balkonkraftwerk' },
};

/** Czytelna nazwa kategorii (fallback: en, potem surowy kod). */
export function categoryName(cat: string, lang: string): string {
  const c = QA_CATEGORIES[cat];
  return c ? (c[lang as BlogLang] ?? c.en) : cat;
}
