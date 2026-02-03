/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly NEKOWEB_API_KEY: string;
    readonly NEKOWEB_TOKEN: string;
    readonly SITE_NAME: string;
    readonly DOMAIN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

/// <reference path="../.astro/types.d.ts" />