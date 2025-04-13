// @ts-check

import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		svg: true,
	},
	integrations: [react(), markdoc(), keystatic()],
	vite: {
		plugins: [tailwindcss()],
	},
});
