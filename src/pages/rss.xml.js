import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'VertooERP Blog',
    description:
      'Fachartikel zu ERP, Self-Hosting, Buchhaltung, GoBD und Digitalisierung für kleine und mittlere Unternehmen.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>de-de</language>',
  });
}
