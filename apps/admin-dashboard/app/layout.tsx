import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const SITE_CONFIG = {
  title: "OA3 Lab Admin Dashboard",
  description: "Administrative interface for managing OA3 Lab applications and content.",
  url: "https://lab.oa3.io/admin",
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
    index: false, // Don't index admin pages
    follow: false,
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
        <div className="flex h-screen">
          {/* Sidebar */}
          <nav className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
            <div className="p-6 border-b border-gray-700">
              <Link href="/" className="text-xl font-bold" style={{ color: '#12e732' }}>
                OA3 Admin
              </Link>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/admin-dashboard" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    📊 Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/admin-dashboard/content" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    📝 Content Management
                  </Link>
                </li>
                <li>
                  <Link href="/admin-dashboard/analytics" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    📈 Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/admin-dashboard/settings" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    ⚙️ Settings
                  </Link>
                </li>
                <li className="border-t border-gray-700 pt-4 mt-4">
                  <Link href="/" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    🏠 Back to Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                    📖 Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 