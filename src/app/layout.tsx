import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappFloat from "@/components/whatsapp-float";
import { SITE } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default:
      "PT Senopati Mega Nusantara — Holding Industri, Trading & Investasi Kendal",
    template: "%s | PT Senopati Mega Nusantara",
  },
  description: SITE.description,
  keywords: [
    "Trading Logam Kendal",
    "Pengolahan Kopi Kendal",
    "PT Senopati Mega Nusantara",
    "Perdagangan Suku Cadang Kendal",
    "Pemulihan Material Logam",
    "Holding Company Kendal Jawa Tengah",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE.name,
    title: "PT Senopati Mega Nusantara — Holding Industri, Trading & Investasi",
    description: SITE.description,
    images: [{ url: "/images/hero-industri.jpg", width: 1600, height: 900 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body
        className={`${jakarta.variable} ${instrument.variable} bg-paper font-sans text-navy-900 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
