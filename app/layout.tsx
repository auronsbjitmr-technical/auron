import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalModals from "@/components/GlobalModals";
import GlobalScrollManager from "@/components/GlobalScrollManager";
import InitialLoaderWrapper from "@/components/InitialLoaderWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getGlobalSchema } from "@/utils/schema";

const cinzel = localFont({
  src: [
    { path: "../public/fonts/cinzel-medium.ttf", weight: "500" },
    { path: "../public/fonts/cinzel-bold.ttf", weight: "700" },
    { path: "../public/fonts/cinzel-extrabold.ttf", weight: "800" },
  ],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: [
    { path: "../public/fonts/pjs-light.ttf", weight: "300" },
    { path: "../public/fonts/pjs-regular.ttf", weight: "400" },
    { path: "../public/fonts/pjs-medium.ttf", weight: "500" },
    { path: "../public/fonts/pjs-semibold.ttf", weight: "600" },
    { path: "../public/fonts/pjs-bold.ttf", weight: "700" },
    { path: "../public/fonts/pjs-extrabold.ttf", weight: "800" },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auron-iota.vercel.app"),
  title: "AURON Forum | SBJITMR Technical Community Nagpur",
  description: "AURON Forum is the official AI-ML and IT technical community at SBJITMR Nagpur. Explore events, hackathons, certificates, and student innovation.",
  keywords: [
    "AURON",
    "AURON Forum",
    "Aaron Forum",
    "Auron SBJIT",
    "SBJITMR tech community",
    "Nagpur engineering club",
    "AI ML student forum"
  ],
  authors: [{ name: "AURON Forum Committee" }],
  creator: "AURON Technical Forum",
  publisher: "AURON Technical Forum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://auron-iota.vercel.app",
  },
  openGraph: {
    title: "AURON Forum",
    description: "Official technical forum of SBJITMR Nagpur",
    url: "https://auron-iota.vercel.app",
    siteName: "AURON Forum",
    images: [
      {
        url: "/logo/auron.png",
        width: 1200,
        height: 630,
        alt: "AURON Technical Forum Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURON Forum",
    description: "Official technical forum of SBJITMR Nagpur",
    images: ["/logo/auron.png"],
  },
  verification: {
    google: "C1OkZoicnix0pXK9hUnVqBsASQL2EZaPFDJ2T0HHO7I",
  },
};

const globalSchema = getGlobalSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://auron-iota.vercel.app" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var t=localStorage.getItem('theme');
              if(t!=='dark'){document.documentElement.setAttribute('data-theme','light');}
              
              var hasLoaded = sessionStorage.getItem('auron_session_loaded');
              if (!hasLoaded) {
                var isRoot = window.location.pathname === '/' || window.location.pathname === '';
                if (isRoot) {
                  document.documentElement.classList.add('global-loading');
                } else {
                  sessionStorage.setItem('auron_session_loaded', 'true');
                }
              }
              document.documentElement.classList.add('js-enabled');
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="antialiased">
        <div className="background-grain" />

        {/* Initial page loader (session-based) */}
        <InitialLoaderWrapper />

        {/* Global smooth scrolling & reveal triggers manager */}
        <GlobalScrollManager />

        {/* Global custom magnetic cursors and modal layers */}
        <GlobalModals />

        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
