// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { idiomas, idiomaPorDefecto } from './src/consts/locales';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: idiomas,
        defaultLocale: idiomaPorDefecto,
        routing: {
            prefixDefaultLocale: true,
        },
    },
    site: 'https://yarosprojects.vercel.app',
    base: '/',
    redirects: {
        '/': `/${idiomaPorDefecto}/`,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
