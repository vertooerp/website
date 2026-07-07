// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://vertoo.de',
  // Mehrsprachigkeit: Deutsch (default, ohne Präfix) + Englisch unter /en/.
  // Weitere Sprachen (fr, it …) später einfach hier ergänzen.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    icon(),
    sitemap({
      // hreflang wird pro Seite im <head> ausgegeben (localizePath, lokalisierte
      // Slugs). Die Sitemap-i18n-Option kann lokalisierte Slugs nicht paaren
      // (sie ersetzt nur das Sprach-Präfix), daher bewusst nicht gesetzt.
      filter: (page) =>
        !page.includes('/impressum') &&
        !page.includes('/datenschutz') &&
        !page.includes('/barrierefreiheit') &&
        !page.includes('/konto'),
      // lastmod auf den Build-Zeitpunkt setzen (Seite wird als Ganzes deployed)
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
