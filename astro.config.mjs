import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const NOT_A_DESTINATION = [
  /\/tag\//,
  /\/series\//,
  // Kod języka nie jest tu wyliczany celowo. Zaszyta lista (en|pl|de) przepuściła
  // do sitemapy każdy nowy język, mimo że listingi są noindex — czyli dokładnie
  // ten sprzeczny sygnał, który reszta tego filtra usuwa. Wzorzec ogólny działa
  // też dla języka, którego jeszcze nie ma.
  /\/blog\/[a-z]{2}(-[a-z]{2})?\/$/,
  /\/blog\/[a-z]{2}(-[a-z]{2})?\/q\/$/,
  /\/blog\/$/,
];

// ---------------------------------------------------------------------------
// <lastmod> — mapa „ścieżka → data", czytana z frontmatteru NA DYSKU.
//
// getCollection() tutaj nie zadziała: `astro:content` to wirtualny moduł
// runtime'u, a ten plik ładuje się, zanim on powstanie. serialize() dostaje
// wyłącznie { url, links, lastmod, priority, changefreq } — bez dostępu do
// kolekcji. Mapa musi więc istnieć PRZED wywołaniem sitemap().
//
// Reguła „katalog = język, nazwa pliku = slug" jest tu przepisana, ale nie
// zgadywana: [slug].astro rzuca błędem budowania, gdy `lang` z frontmatteru nie
// zgadza się z katalogiem, więc rozjazd wysadza build, zanim dotrze do sitemapy.
// ---------------------------------------------------------------------------
const CONTENT_DIR = fileURLToPath(new URL('./src/content', import.meta.url));

const frontmatter = (file) => {
  // BOM przed "---" pokonałby kotwicę i po cichu wyrzucił plik z mapy, mimo że
  // Astro zbudowałoby go bez mrugnięcia. Cichy rozjazd między tym, co widzi
  // Astro, a tym, co widzi sitemapa, jest tu najdroższą klasą błędu.
  const raw = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  const found = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  return found ? found[1] : '';
};

const field = (block, key) => {
  const found = new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(block);
  if (!found) return null;
  return found[1]
    .replace(/\s+#.*$/, '')            // komentarz YAML na końcu linii
    .trim()
    .replace(/^["']|["']$/g, '');
};

function collectLastmod() {
  // Q&A leży w src/content/qa/{lang}/, ale serwowane jest pod /blog/{lang}/q/ —
  // mapowanie nie jest zwykłym sklejeniem ścieżki i musi być jawne.
  const collections = [
    ['blog', (lang, slug) => `/blog/${lang}/${slug}/`],
    ['qa', (lang, slug) => `/blog/${lang}/q/${slug}/`],
  ];
  const map = new Map();
  let newest = null;

  for (const [collection, toPathname] of collections) {
    const root = path.join(CONTENT_DIR, collection);
    if (!fs.existsSync(root)) continue;
    for (const lang of fs.readdirSync(root)) {
      const dir = path.join(root, lang);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const name of fs.readdirSync(dir)) {
        if (!name.endsWith('.md')) continue;
        const block = frontmatter(path.join(dir, name));
        if (field(block, 'draft') === 'true') continue;   // draftu nie ma w sitemapie
        // `updated` bije `date`: sitemapa opisuje ostatnią modyfikację, nie premierę.
        const raw = field(block, 'updated') ?? field(block, 'date');
        if (!raw) continue;
        const when = new Date(raw);
        // Zła data w JEDNYM pliku wysadziłaby zapis całej sitemapy („Invalid
        // lastmod"). Wpis bez daty jest tańszy niż zerwany deploy bloga.
        if (Number.isNaN(when.valueOf())) continue;
        const slug = name.slice(0, -3);
        // Klucz mapy budujemy z nazwy pliku, a Astro buduje adres ze sluga
        // wyliczonego z tej samej nazwy. Dopóki nazwy są kebab-case ASCII, oba
        // są identyczne. Wielka litera, kropka albo znak spoza ASCII rozjechałyby
        // je po cichu — plik zbudowałby się, tylko wypadłby z lastmod. Lepiej
        // zerwać build i dowiedzieć się od razu.
        if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
          throw new Error(
            `Nazwa pliku "${collection}/${lang}/${name}" nie jest kebab-case ASCII — ` +
            'slug w adresie rozjedzie się z kluczem mapy lastmod. Zmień nazwę pliku.'
          );
        }
        map.set(toPathname(lang, slug), when.toISOString());
        if (!newest || when > newest) newest = when;
      }
    }
  }
  return { map, newest };
}

const { map: LASTMOD, newest: NEWEST_CONTENT } = collectLastmod();

export default defineConfig({
  adapter: vercel(),
  site: 'https://volcast.app',
  integrations: [
    sitemap({
      // Sitemapa jest listą stron DOCELOWYCH. Wszystko poniżej albo prosi o
      // niezaindeksowanie (noindex, patrz BaseLayout), albo w ogóle nie jest
      // stroną — trzymanie tego w sitemapie to sygnał sprzeczny z tagiem robots
      // i marnowanie budżetu crawlowania, które Bing już raz nam wypomniał.
      //
      //   /tag/, /series/       — archiwa
      //   /blog/{lang}/         — indeks bloga
      //   /blog/{lang}/q/       — indeks Q&A
      //   /blog/                — przekierowanie 302 na wersję językową, nie strona
      //
      // Pojedyncze wpisy i pytania Q&A zostają — to one są celem.
      filter: (page) => !NOT_A_DESTINATION.some((re) => re.test(page)),

      // Data najnowszej treści, NIE moment builda. Trafia wyłącznie do
      // sitemap-index.xml — czyli tam, gdzie Google decyduje, czy w ogóle
      // pobrać podsitemapę ponownie. Moment builda rósłby przy każdym deployu
      // i twierdził, że zmienił się cały blog; to wzorzec, po którym Google
      // przestaje ufać polu.
      lastmod: NEWEST_CONTENT ?? undefined,

      // Uwaga na kontrakt: generateSitemap() stempluje `lastmod` z opcji na
      // KAŻDY z 331 URL-i, więc serialize musi go nadpisać albo usunąć. Zwrócenie
      // wartości falsy USUNĘŁOBY URL z sitemapy — stąd zawsze zwracamy obiekt.
      //
      // Wpisy bez daty wychodzą bez <lastmod> i tak ma być: 95 z 144 Q&A nie ma
      // żadnego pola daty (`date` jest w schemacie opcjonalne). Data zmyślona
      // byłaby gorsza niż jej brak, a brak jest dozwolony specyfikacją.
      serialize: (item) => {
        const pathname = new URL(item.url).pathname.replace(/\/?$/, '/');
        const lastmod = LASTMOD.get(pathname);
        if (lastmod) return { ...item, lastmod };
        const { lastmod: _unknown, ...rest } = item;
        return rest;
      },

      customSitemaps: [
        'https://volcast.app/sitemap-landing.xml',
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
