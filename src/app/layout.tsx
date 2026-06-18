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
  description: "Gebze'de butik pasta, doğum günü pastası, nişan pastası, düğün pastası ve özel tasarım pastalar. 2 yıldır hizmet veriyoruz, 200+ özel pasta ürettik. El yapımı, butik üretim.",
  foundingDate: "2024",
  image: "https://missbutikpasta.com/images/og-image.webp",
  url: "https://missbutikpasta.com",
  telephone: "+905345687783",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:7 Kat:4 D:8",
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
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doğum Günü Pastası" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nişan Pastası" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Düğün Pastası" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Özel Tasarım Pasta" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yıl Dönümü Pastası" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Özel Gün Pastası" } },
  ],
  sameAs: ["https://www.instagram.com/miss.butikpasta"],
};

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Miss Butik Pasta Özel Tasarım Pasta Galerisi",
  "description": "Gebze özel tasarım pasta, doğum günü pastası ve butik tatlı galerisi - Miss Butik Pasta",
  "url": "https://missbutikpasta.com/#gallery",
  "image": [
    "https://missbutikpasta.com/images/ozel-tasarim-pasta1.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta2.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta3.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta4.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta5.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta6.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta7.webp",
    "https://missbutikpasta.com/images/ozel-tasarim-pasta8.webp",
  ],
};



const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Miss Butik Pasta Hizmetleri",
  "description": "Miss Butik Pasta'nın özel tasarım pasta ve tatlı hizmetleri.",
  "url": "https://missbutikpasta.com",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Doğum Günü Pastası",
        "description":
          "Kişiye özel temalı doğum günü pastaları. Taze malzemelerle el yapımı, butik üretim.",
      },
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Nişan Pastası",
        "description": "Özel nişan törenleri için zarif tasarım pastalar.",
      },
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Düğün Pastası",
        "description": "Katlı ve figürlü düğün pastaları. Hayalinizdeki konsepte uygun tasarımlar.",
      },
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Özel Tasarım Pasta",
        "description": "Tamamen size özel, sıfırdan hazırlanan butik pastalar.",
      },
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Yıl Dönümü Pastası",
        "description": "Kutlamalar için özel pasta tasarımları.",
      },
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Özel Gün Pastası",
        "description": "Her türlü özel gün için kişiye özel tasarım pastalar.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Özel Tasarım Pasta Nasıl Sipariş Edilir?",
  "description":
    "Miss Butik Pasta'dan özel tasarım pasta siparişi vermek için 2 basit adım.",
  "totalTime": "P2D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Tasarım",
      "text":
        "WhatsApp üzerinden bizimle iletişime geçin. Hayalinizdeki pastayı anlatın, birlikte tasarlayalım.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Üretim",
      "text":
        "En taze ve kaliteli malzemelerle, el emeğiyle pastanızı özenle hazırlıyoruz.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://missbutikpasta.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sıkça Sorulan Sorular",
      "item": "https://missbutikpasta.com/sikca-sorulan-sorular",
    },
  ],
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DSVWWVV5HQ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DSVWWVV5HQ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
