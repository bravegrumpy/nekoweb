// @ts-check
import { defineConfig } from 'astro/config';
import nekoweb from "@indiefellas/astro-adapter-nekoweb"

// https://astro.build/config
export default defineConfig({
    adapter: nekoweb({
        apiKey: process.env.NEKOWEB_API_KEY || '',
        cookie: `token: ${process.env.NEKOWEB_TOKEN}`,
        siteName: process.env.SITE_NAME || '',
        domain: process.env.DOMAIN || ''
    })
});
