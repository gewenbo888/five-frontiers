import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://five-frontiers.psyverse.fun"),
  title: "Five Frontiers · 五大前沿 — A table of the technologies that change civilization",
  description:
    "Five frontiers of human progress: Energy, Information, Spacetime, Matter, Biology. The tools we are building under each, and the civilizational goal each unlocks.",
  keywords: [
    "Five Frontiers",
    "五大前沿",
    "civilizational technology",
    "energy transition",
    "artificial intelligence",
    "space exploration",
    "nanotechnology",
    "biotechnology",
    "Gewenbo",
    "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Five Frontiers · 五大前沿" }],
    title: "Five Frontiers · 五大前沿",
    description:
      "Energy · Information · Spacetime · Matter · Biology. The five frontiers of human progress, side by side.",
    url: "https://five-frontiers.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Five Frontiers · 五大前沿",
    description:
      "Energy · Information · Spacetime · Matter · Biology — the technologies that change civilization.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#08080c" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Five Frontiers · 五大前沿",
  description:
    "A bilingual atlas of the five frontiers of human progress: Energy, Information, Spacetime, Matter, Biology.",
  url: "https://five-frontiers.psyverse.fun/",
  inLanguage: ["en", "zh-CN"],
  author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
  publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
