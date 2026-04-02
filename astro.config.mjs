// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Coming Soon",
      cssVariable: "--font-coming-soon",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Alegreya Sans SC",
      cssVariable: "--font-alegrya"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Patrick Hand",
      cssVariable: "--font-patrick-hand"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Indie Flower",
      cssVariable: "--font-indie-flower"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Bree Serif",
      cssVariable: "--font-bree-serif"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Kode Mono",
      cssVariable: "--font-kode-mono"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Capriola",
      cssVariable: "--font-capriola"
    },
    {
      provider: fontProviders.fontsource(),
      name: "BioRhyme",
      cssVariable: "--font-bio-rhyme"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Martian Mono",
      cssVariable: "--font-martian-mono"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Numans",
      cssVariable: "--font-numans"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cormorant Upright",
      cssVariable: "--font-cormorant-upright"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Space Mono",
      cssVariable: "--font-space-mono"
    }
  ],

  integrations: [react()]
});