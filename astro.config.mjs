import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/spinoza-cafe/',
  output: 'static',
  site: 'https://spinoza-cafe.example',
  integrations: [tailwind()],
});