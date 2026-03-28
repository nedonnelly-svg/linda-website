import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const siteDescription =
  "Licensed trauma therapist offering online trauma therapy in California and New York. EMDR, TRM, and nervous-system-informed care with Dr. Linda Hoffman, PsyD. Request a free phone consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Online Trauma Therapy in California & New York | Dr. Linda Hoffman, PsyD",
    template: "%s | Trauma Therapy — Dr. Linda Hoffman",
  },
  description: siteDescription,
  keywords: [
    "trauma therapy",
    "online trauma therapy",
    "trauma therapist California",
    "trauma therapist New York",
    "EMDR therapist",
    "telehealth trauma therapy",
    "PTSD therapy online",
    "somatic trauma therapy",
    "TRM therapy",
    "trauma-informed therapy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dr. Linda Hoffman — Trauma Therapy",
    title: "Online Trauma Therapy in California & New York | Dr. Linda Hoffman, PsyD",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Trauma Therapy | Dr. Linda Hoffman, PsyD",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SeoJsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
