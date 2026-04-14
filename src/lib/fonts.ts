import { Bebas_Neue, Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const syne = Syne({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});
