// @ts-check
import { defineConfig } from 'astro/config';
import nekoweb from "@indiefellas/astro-adapter-nekoweb";

// https://astro.build/config
export default defineConfig({
    site: 'https://bravegrumpy.nekoweb.org',
    output: 'static',
    adapter: nekoweb({
        apiKey: import.meta.env.NEKOWEB_API_KEY,
        cookie: import.meta.env.NEKOWEB_TOKEN,
        siteName: import.meta.env.SITE_NAME,
        domain: import.meta.env.DOMAIN
    }),
});
