import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const SITE_CONFIG = {
  title: "OA3 Lab - Testing Site",
  description: "Exploring the convergence of Web3 blockchain technology and artificial intelligence to create revolutionary applications.",
  url: "https://lab.oa3.io",
  ogImage: {
    url: "/og-image.jpg",
    alt: "OA3 Lab - Testing Site"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.title}`,
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    images: [
      {
        url: SITE_CONFIG.ogImage.url,
        alt: SITE_CONFIG.ogImage.alt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-gray-900 text-white`}>
      <body className="bg-gray-900">
        <section className="min-h-screen">
          <main>{children}</main>
          <footer className="bg-gray-800 border-gray-700 border-t">
            <div className="container mx-auto px-5">
              <div className="py-8 text-center">
                <p className="text-gray-500 text-sm">
                  © OA3, LLC
                </p>
              </div>
            </div>
          </footer>
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
