// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tungtung-tutor.com', // TODO: replace with the real Cloudflare Pages domain
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});