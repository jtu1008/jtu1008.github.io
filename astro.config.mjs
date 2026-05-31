// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jtu1008.github.io',
  // User page repo (jtu1008.github.io) serves from root, so no `base` needed.
  vite: {
    plugins: [tailwindcss()],
  },
});
