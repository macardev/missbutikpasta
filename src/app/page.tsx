import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CommentStrip from "@/components/CommentStrip";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import { googleReviews } from "@/lib/reviews";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Bakery",
    "name": "Miss Butik Pasta",
  },
  "ratingValue": "5",
  "bestRating": "5",
  "ratingCount": "5",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sıla Dönder" },
      "reviewBody":
        "iyi ki sizden sipariş vermişim. Pasta beklediğimden bile daha güzel olmuştu. Hem görüntüsüyle hem lezzetiyle herkes bayıldı. Süreç boyunca ilginiz, samimiyetiniz ve emeğiniz gerçekten çok güzeldi.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Fatih Yılmaz" },
      "reviewBody":
        "İki ayrı kutlama için iki defa pasta sipariş verdik. İki pastayı da ailecek çok beğendik, teşekkür ederiz. Tasarım işçiliği kadar tadı da çok lezzetliydi.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Zeynep" },
      "reviewBody":
        "Mükemmel, herkese tavsiye ederim. En az beş pasta yaptırdım hepsi de mükemmeldi",
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
        <CommentStrip name={googleReviews[0].name} text={googleReviews[0].text} bgLight />
        <About />
        <CommentStrip name={googleReviews[1].name} text={googleReviews[1].text} />
        <Gallery />
        <CommentStrip name={googleReviews[2].name} text={googleReviews[2].text} bgLight />
        <HowItWorks />
        <CommentStrip name={googleReviews[3].name} text={googleReviews[3].text} />
        <Testimonials />
        <CommentStrip name={googleReviews[4].name} text={googleReviews[4].text} bgLight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
