// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://vertoo.de',
  integrations: [
    icon(),
    sitemap({
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
