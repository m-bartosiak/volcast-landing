import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { LANGS, t, type BlogLang } from '../../../data/i18n';

// Tylko języki z treścią — pusty kanał RSS jest technicznie poprawny, ale nie
// ma powodu go publikować ani reklamować autodiscovery z <head>.
export async function getStaticPaths() {
  const all = await getCollection('blog', ({ data }) => !data.draft);
  return LANGS
    .filter((lang) => all.some((p) => p.data.lang === lang))
    .map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as BlogLang;
  const posts = await getCollection('blog', ({ data }) =>
    !data.draft && data.lang === lang
  );
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `Volcast Blog (${lang.toUpperCase()})`,
    description: t(lang).blogDescription,
    site: context.site!,
    customData: `<language>${lang}</language>`,
    items: posts.map(post => {
      const slug = post.id.split('/').pop()!;
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${lang}/${slug}/`,
      };
    }),
  });
}
