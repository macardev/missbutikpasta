import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Bakery",
    "name": "Miss Butik Pasta",
  },
  "ratingValue": "5",
  "bestRating": "5",
  "ratingCount": "3",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ayşe Y." },
      "reviewBody":
        "Doğum günü pastamızı buradan sipariş ettik, hem görseli hem de lezzeti harikaydı! Kesinlikle tavsiye ediyorum.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mehmet K." },
      "reviewBody":
        "Nişan pastamız tam hayal ettiğimiz gibi oldu. İlgili ekip ve mükemmel sonuç. Teşekkürler Miss Butik Pasta!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Zeynep A." },
      "reviewBody":
        "Çikolatalı pastaları efsane! Her seferinde sipariş veriyorum ve her seferinde aynı kalitede. Gebze'de en iyisi!",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
  ],
};

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => null,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => null,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => null,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
