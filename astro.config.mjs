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
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
