import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Momos Magic - From Humble Stall to Culinary Legend",
  description: "Experience the magic of Sherghati's finest momos. Award-winning quality, 100% vegetarian, FSSAI certified. Featuring exclusive Kurkure Momos and Pizza Momos.",
  keywords: [
    "momos",
    "momos magic",
    "sherghati momos",
    "kurkure momos",
    "pizza momos",
    "vegetarian momos",
    "bihar food",
    "street food",
    "best momos",
    "fssai certified",
    "award winning momos",
  ],
  authors: [{ name: "Dhruv Gupta", url: "https://www.momomegics.com" }],
  creator: "Dhruv Gupta",
  publisher: "Momos Magic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.momomegics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Momos Magic - From Humble Stall to Culinary Legend",
    description: "Experience the magic of Sherghati's finest momos. Award-winning quality, 100% vegetarian, FSSAI certified.",
    url: "https://www.momomegics.com",
    siteName: "Momos Magic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Momos Magic - From Humble Stall to Culinary Legend",
    description: "Experience the magic of Sherghati's finest momos. Award-winning quality, 100% vegetarian, FSSAI certified.",
    creator: "@momomagic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Momos Magic" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
