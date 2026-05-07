import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Miss Butik Pasta | Gebze Özel Tasarım Pasta & Tatlı",
  description: "Kocaeli Gebze'de butik pasta, doğum günü pastası, nişan pastası ve özel tasarım tatlılar. El yapımı, butik üretim. Arapçeşme Mahallesi'nde hizmetinizdeyiz.",
  keywords: [
    "gebze butik pasta",
    "gebze doğum günü pastası",
    "gebze özel tasarım pasta",
    "gebze pasta siparişi",
    "gebze nişan pastası",
    "gebze düğün pastası",
    "kocaeli butik pasta",
    "miss butik pasta",
    "gebze tatlı",
    "gebze kurabiye",
  ],
  authors: [{ name: "Miss Butik Pasta" }],
  creator: "Miss Butik Pasta",
  publisher: "Miss Butik Pasta",
  metadataBase: new URL("https://missbutikpasta.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://missbutikpasta.com",
    title: "Miss Butik Pasta | Gebze Özel Tasarım Pasta & Tatlı",
    description: "Kocaeli Gebze'de butik pasta, doğum günü pastası, nişan pastası ve özel tasarım tatlılar. El yapımı, butik üretim.",
    siteName: "Miss Butik Pasta",
    images: [
      {
        url: "https://missbutikpasta.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Miss Butik Pasta - Gebze'nin En Tatlı Atölyesi",
      },
    ],
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
    google: "google-site-verification-code-here",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Miss Butik Pasta",
  description: "Gebze'de butik pasta, doğum günü pastası, nişan pastası ve özel tasarım tatlılar. El yapımı, butik üretim.",
  image: "https://missbutikpasta.com/images/og-image.webp",
  url: "https://missbutikpasta.com",
  telephone: "+905363698000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:16 D:8",
    addressLocality: "Gebze",
    addressRegion: "Kocaeli",
    postalCode: "41400",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7869,
    longitude: 29.4244,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  servesCuisine: ["Turkish", "Desserts", "Bakery"],
  areaServed: {
    "@type": "City",
    name: "Gebze",
  },
  sameAs: ["https://www.instagram.com/miss.butikpasta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
