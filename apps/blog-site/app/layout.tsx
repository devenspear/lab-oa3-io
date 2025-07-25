import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const SITE_CONFIG = {
  title: "OA3 Lab Blog - Web3 & AI Insights",
  description: "Expert insights on Web3 blockchain technology, AI development, and the future of decentralized applications.",
  url: "https://lab.oa3.io/blog",
};

export const metadata: Metadata = {
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
    locale: 'en_US',
    type: 'website',
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
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold" style={{ color: '#12e732' }}>
              OA3 Lab Blog
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/admin-dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-800 border-gray-700 border-t">
          <div className="container mx-auto px-5">
            <div className="py-8 text-center">
              <p className="text-gray-500 text-sm">
                © OA3, LLC - Exploring Web3 & AI Innovation
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 