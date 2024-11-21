import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adaptiveparse.com',
  integrations: [
    react({
      include: ['**/react/*', '**/components/*']
    }), 
    tailwind(),
    sitemap()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});