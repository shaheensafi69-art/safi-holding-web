import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://safiinternationalcapitalltd.site'),
  title: "Safi International Capital LTD | Premier Global Technology & Investment Holding",
  description: "Safi International Capital LTD is a premier global technology and financial holding company registered in England & Wales (#17063286). Stewarding transformative ventures across Social Media (ZEV), AI, FinTech, Global Telecom, and Tech Education.",
  keywords: [
    "Safi Capital",
    "Safi International Capital LTD",
    "ZEV App",
    "ZEV Social Network",
    "Safi AI",
    "SafiPay",
    "Safi TopUp",
    "SafiPro",
    "Safi Academy",
    "Shaheen Safi",
    "Global Holding",
    "FinTech UK"
  ],
  authors: [{ name: "Safi International Capital LTD" }],
  openGraph: {
    title: "Safi International Capital LTD | Global Holding & Ventures",
    description: "Stewarding transformative global ventures including ZEV Social Network, Safi AI, SafiPay, and Safi Academy. Registered in England & Wales #17063286.",
    url: "https://safiinternationalcapitalltd.site",
    siteName: "Safi International Capital LTD",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Safi International Capital LTD Logo"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030305] text-[#F0F0F5] min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        <Header />
        
        <main className="flex-1 w-full pt-[90px] md:pt-[105px] overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}