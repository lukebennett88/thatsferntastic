// @ts-check

import markdoc from '@astrojs/markdoc';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),
	build: { format: 'file' },
	integrations: [keystatic(), markdoc(), react(), sitemap()],
	output: 'static',
	server: { host: true },
	site: 'https://links.thatsferntastic.com.au',
	trailingSlash: 'never',
	vite: { plugins: [tailwindcss()] },
});
