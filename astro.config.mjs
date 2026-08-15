import { defineConfig } from 'astro/config';
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
