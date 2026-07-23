import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  adapter: vercel(),
  site: 'https://volcast.app',
  integrations: [
    sitemap({
      // Strony tagów są noindex — nie umieszczaj ich w sitemapie (sprzeczny sygnał dla Google).
      filter: (page) => !page.includes('/tag/'),
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
