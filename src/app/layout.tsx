import type { Metadata } from "next";
import { bebasNeue, syne, dmSans, ibmPlexMono } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UDBHAV'26 — 24-Hour Hackathon",
    template: "%s | UDBHAV'26",
  },
  description:
    "UDBHAV'26 is a 24-hour hackathon by Alta School of Technology at Sage University, Indore. 50 teams. 10 problems. ₹45,000 prize pool. 25–26 April 2026.",
  keywords: [
    "hackathon",
    "UDBHAV",
    "Sage University",
    "Indore",
    "coding competition",
    "Alta School of Technology",
  ],
  authors: [{ name: "Alta School of Technology" }],
  openGraph: {
    title: "UDBHAV'26 — 24-Hour Hackathon",
    description:
      "50 teams. 10 problems. 15 minutes to choose your battlefield. ₹45,000 prize pool.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = `${bebasNeue.variable} ${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable}`;

  return (
    <html lang="en" className={`${fontVars} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
