// @ts-check
import { defineConfig } from 'astro/config';
import nekoweb from "@indiefellas/astro-adapter-nekoweb"

// https://astro.build/config
export default defineConfig({
    adapter: nekoweb({
        apiKey: "cad9db4c5c8c3993411e5e9d30076702b076d83e41f7e9a5bacce53ddd6c56bc",
        cookie: "token: 70cb1cbb1556309404fdffed33455fe760e90dd03001616c2d5f00c9133b229b",
        siteName: "bravegrumpy",
        domain: "bravegrumpy.nekoweb.org"
    })
});
