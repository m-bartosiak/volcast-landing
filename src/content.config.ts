import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Michal'),
    tags: z.array(z.string()),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    lang: z.enum(['en', 'pl', 'de', 'it', 'fr', 'ro']),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
    // Klucz tematu do parowania hreflang między językami (spójny z topic_id paczki).
    // Opcjonalny — istniejące wpisy parują się przez src/data/translations.ts.
    translationKey: z.string().optional(),
    seo: z.object({
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
    relatedPosts: z.array(z.string()).optional(),
  }).refine(
    (data) => !data.series || data.seriesOrder !== undefined,
    { message: 'seriesOrder is required when series is set' }
  ),
});

// Kolekcja Q&A (long-tail, format „krótka odpowiedź na pytanie") pod
// /blog/{lang}/q/{slug}. `guide` linkuje do artykułu-huba, `category` grupuje w klaster.
const qa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/qa' }),
  schema: z.object({
    title: z.string(),          // pytanie = H1
    description: z.string(),    // meta description / krótka odpowiedź
    lang: z.enum(['en', 'pl', 'de', 'it', 'fr', 'ro']),
    category: z.string().optional(),   // k1–k6
    guide: z.string().optional(),      // slug artykułu-huba (interlinking)
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    translationKey: z.string().optional(),
    seo: z.object({
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = { blog, qa };
