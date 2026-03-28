import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: {
    default: "Dr. Linda Hoffman, PsyD | Trauma specialist",
    template: "%s | Dr. Linda Hoffman, PsyD",
  },
  description:
    "Clinical psychologist specializing in trauma recovery. Online therapy in California and New York. Above the Line Psychotherapy.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://linda-website-navy.vercel.app",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
