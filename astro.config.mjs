// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jingxuantu.com',
  // User page repo serves from root, so no `base` needed.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
