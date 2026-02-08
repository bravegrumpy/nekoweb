// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",

  // site: `https://${process.env.DOMAIN}`
  site: "https://bravegrumpy.nekoweb.org",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()]
});