import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leblonclinique.com"),
  title: "Leblon Clinique | Medicina Estética Avanzada",
  description:
    "Clínica especializada en medicina estética, rejuvenecimiento facial y tratamientos de última generación.",
  openGraph: {
    title: "Leblon Clinique | Medicina Estética Avanzada",
    description:
      "Clínica especializada en medicina estética, rejuvenecimiento facial y tratamientos de última generación.",
    url: "https://www.leblonclinique.com",
    siteName: "Leblon Clinique",
    type: "website",
    images: [
      {
        url: "https://www.leblonclinique.com/leblon-og.jpg",
        width: 1200,
        height: 630,
        alt: "Leblon Clinique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leblon Clinique | Medicina Estética Avanzada",
    description:
      "Clínica especializada en medicina estética, rejuvenecimiento facial y tratamientos de última generación.",
    images: ["https://www.leblonclinique.com/leblon-og.jpg"],
  },
  other: {
    "facebook-domain-verification": "areo1m5smal9k891kw5rwu60e6igfg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
