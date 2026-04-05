// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://bravegrumpy.nekoweb.org",
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
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
      name: "Inter",
      cssVariable: "--font-inter"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Source Serif 4",
      cssVariable: "--font-source-serif"
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrians-mono"
    },
    {
      provider: fontProviders.fontsource(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Lora",
      cssVariable: "--font-lora"
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Merriweather",
      cssVariable: "--font-merriweather"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Ubuntu Mono",
      cssVariable: "--font-ubuntu-mono"
    },
    {
      provider: fontProviders.google(),
      name: "Charmonman",
      cssVariable: "--font-charmonman"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Almendra",
      cssVariable: "--font-almendra"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Almendra",
      cssVariable: "--font-almendra"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Workbench",
      cssVariable: "--font-workbench"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Oxanium",
      cssVariable: "--font-oxanium"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Source Code Pro",
      cssVariable: "--font-source-code-pro"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Libre Baskerville",
      cssVariable: "--font-libre-baskerville"
    },
  ]
});