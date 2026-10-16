import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HoldingSchema from "../components/seo/HoldingSchema";

export const metadata: Metadata = {
  metadataBase: new URL('https://safiinternationalcapitalltd.site'),
  title: {
    default: "Safi International Capital LTD | Premier Global Technology & Investment Holding",
    template: "%s | Safi International Capital LTD"
  },
  description: "Safi International Capital LTD is a premier United Kingdom corporate holding company (CRN: 17063286) based in London, directing transformative ventures across Social Media (ZEV), AI, FinTech (SafiPay), Global Telecom (Safi TopUp), and Tech Education (Safi Academy). Founded by Shaheen Safi.",
  keywords: [
    "Safi Capital",
    "Safi International Capital LTD",
    "Safi Holding",
    "Shaheen Safi",
    "شاهین صافی",
    "ZEV App",
    "ZEV Social Network",
    "Safi AI",
    "SafiPay",
    "Safi TopUp",
    "SafiPro",
    "Safi Academy",
    "FinTech UK",
    "Global Holding",
    "London Holding Company",
    "Company No 17063286"
  ],
  authors: [
    { name: "Shaheen Safi", url: "https://safiinternationalcapitalltd.site/about/shaheen-safi" },
    { name: "Safi International Capital LTD", url: "https://safiinternationalcapitalltd.site" }
  ],
  creator: "Shaheen Safi",
  publisher: "Safi International Capital LTD",
  alternates: {
    canonical: "https://safiinternationalcapitalltd.site",
    languages: {
      'en-GB': 'https://safiinternationalcapitalltd.site',
      'fa': 'https://safiinternationalcapitalltd.site',
      'ps': 'https://safiinternationalcapitalltd.site',
      'x-default': 'https://safiinternationalcapitalltd.site'
    }
  },
  openGraph: {
    title: "Safi International Capital LTD | Global Holding & Ventures",
    description: "Stewarding transformative global ventures including ZEV Social Network, Safi AI, SafiPay, and Safi Academy. Registered in England & Wales #17063286. Founded by Shaheen Safi.",
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
  twitter: {
    card: "summary_large_image",
    title: "Safi International Capital LTD | Premier Global Technology & Investment Holding",
    description: "Official portal of Safi International Capital LTD (CRN: 17063286). Directing ZEV, Safi AI, SafiPay, Safi TopUp, and Safi Academy. Founder: Shaheen Safi (@shaheensafi011).",
    creator: "@shaheensafi011",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
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
      <head>
        <HoldingSchema />
      </head>
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