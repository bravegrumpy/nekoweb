import { Geist, Geist_Mono, Alegreya_Sans_SC, Bree_Serif, Kode_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const geist = Geist({subsets:['latin'],variable:'--font-sans'});
export const alegreya = Alegreya_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"]
})

export const alegreyaSansSC = Alegreya_Sans_SC({
  variable: "--font-alegreya-sans-sc",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"]
});

export const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  subsets: ["latin"],
  weight: "400"
})

export const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  weight: ["400", "500", '600', "700"],
  subsets: ["latin", "latin-ext"]
})