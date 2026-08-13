// Centralny słownik i18n dla bloga. Zastępuje rozproszone ternary `lang === 'pl'`
// pojedynczym źródłem prawdy i domyka obsługę `de` (locale bloga dokładane
// razem z paczką treści). Fallback zawsze na `en`.

export const LANGS = ['en', 'pl', 'de'] as const;
export type BlogLang = (typeof LANGS)[number];

/** Locale dla toLocaleDateString. */
export const DATE_LOCALE: Record<BlogLang, string> = {
  en: 'en-US',
  pl: 'pl-PL',
  de: 'de-DE',
};

/** og:locale. */
export const OG_LOCALE: Record<BlogLang, string> = {
  en: 'en_US',
  pl: 'pl_PL',
  de: 'de_DE',
};

/** Słowa/minutę do szacowania czasu czytania. */
export const READING_WPM: Record<BlogLang, number> = {
  en: 200,
  pl: 180,
  de: 180,
};

/** Etykieta w przełączniku języka. */
export const LANG_LABEL: Record<BlogLang, string> = {
  en: 'EN',
  pl: 'PL',
  de: 'DE',
};

interface UIStrings {
  blogTitle: string;
  /** Tytuł wyłącznie do <title>. blogTitle ('Blog') zostaje jako widoczny <h1>, ale
   *  jako tytuł strony dawał we wszystkich językach to samo 'Blog — Volcast Blog' —
   *  Bing zgłaszał to i jako duplikat, i jako tytuł za krótki (19 znaków). */
  blogMetaTitle: string;
  blogName: string;
  blogDescription: string;
  blogSubtitle: string;
  latest: string;
  relatedPosts: string;
  backToBlog: string;
  postsTagged: string;
  articlesTagged: string;
  updated: string;
  readingSuffix: string;
  searchPlaceholder: string;
  getItOn: string;
  downloadOn: string;
  prev: string;
  next: string;
  qaFullGuide: string;
  qaRelated: string;
  qaIndexTitle: string;
  qaIndexSubtitle: string;
  commonQuestions: string;
}

export const UI: Record<BlogLang, UIStrings> = {
  en: {
    blogTitle: 'Blog',
    blogMetaTitle: 'Solar Forecasting and PV Production Guides',
    blogName: 'Volcast Blog',
    blogDescription: 'Technical articles on solar energy, PV production forecasting, and the physics behind accurate yield predictions for home installations.',
    blogSubtitle: 'Articles about solar energy, PV forecasting, and solar physics',
    latest: 'Latest',
    relatedPosts: 'Related posts',
    backToBlog: '← Back to blog',
    postsTagged: 'Posts tagged',
    articlesTagged: 'Articles tagged',
    updated: 'updated',
    readingSuffix: 'min read',
    searchPlaceholder: 'Search articles...',
    getItOn: 'Get it on',
    downloadOn: 'Download on',
    prev: '← Previous',
    next: 'Next →',
    qaFullGuide: 'Full guide',
    qaRelated: 'Related questions',
    qaIndexTitle: 'Questions & Answers',
    qaIndexSubtitle: 'Short, practical answers to common solar and PV questions',
    commonQuestions: 'Common questions',
  },
  pl: {
    blogTitle: 'Blog',
    blogMetaTitle: 'Prognozowanie PV i produkcja z fotowoltaiki',
    blogName: 'Blog Volcast',
    blogDescription: 'Artykuły techniczne o energii słonecznej, prognozowaniu produkcji PV i fizyce stojącej za dokładnymi prognozami uzysków z instalacji domowych.',
    blogSubtitle: 'Artykuły o energii słonecznej, prognozowaniu PV i fizyce solarnej',
    latest: 'Najnowszy',
    relatedPosts: 'Powiązane artykuły',
    backToBlog: '← Wróć do bloga',
    postsTagged: 'Posty z tagiem',
    articlesTagged: 'Artykuły z tagiem',
    updated: 'zaktualizowano',
    readingSuffix: 'min czytania',
    searchPlaceholder: 'Szukaj artykułów...',
    getItOn: 'Pobierz z',
    downloadOn: 'Pobierz z',
    prev: '← Poprzedni',
    next: 'Następny →',
    qaFullGuide: 'Pełny przewodnik',
    qaRelated: 'Powiązane pytania',
    qaIndexTitle: 'Pytania i odpowiedzi',
    qaIndexSubtitle: 'Krótkie, praktyczne odpowiedzi na częste pytania o fotowoltaikę',
    commonQuestions: 'Częste pytania',
  },
  de: {
    blogTitle: 'Blog',
    blogMetaTitle: 'PV-Ertragsprognosen und Solarenergie',
    blogName: 'Volcast Blog',
    blogDescription: 'Fachartikel über Solarenergie, PV-Ertragsprognosen und die Physik hinter präzisen Vorhersagen für private Solaranlagen und Speicher.',
    blogSubtitle: 'Artikel über Solarenergie, PV-Prognosen und Solarphysik',
    latest: 'Neu',
    relatedPosts: 'Ähnliche Artikel',
    backToBlog: '← Zurück zum Blog',
    postsTagged: 'Beiträge mit Tag',
    articlesTagged: 'Artikel mit Tag',
    updated: 'aktualisiert',
    readingSuffix: 'Min. Lesezeit',
    searchPlaceholder: 'Artikel suchen...',
    getItOn: 'Jetzt bei',
    downloadOn: 'Laden im',
    prev: '← Zurück',
    next: 'Weiter →',
    qaFullGuide: 'Vollständiger Leitfaden',
    qaRelated: 'Ähnliche Fragen',
    qaIndexTitle: 'Fragen & Antworten',
    qaIndexSubtitle: 'Kurze, praktische Antworten auf häufige Fragen rund um PV',
    commonQuestions: 'Häufige Fragen',
  },
};

/** Zwróć zestaw stringów UI dla języka (fallback en). */
export function t(lang: string): UIStrings {
  return UI[lang as BlogLang] ?? UI.en;
}

export function dateLocale(lang: string): string {
  return DATE_LOCALE[lang as BlogLang] ?? DATE_LOCALE.en;
}
