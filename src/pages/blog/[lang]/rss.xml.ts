import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { LANGS, t, type BlogLang } from '../../../data/i18n';

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
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
