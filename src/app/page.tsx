import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CommentStrip from "@/components/CommentStrip";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import { googleReviews } from "@/lib/reviews";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Miss Butik Pasta",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "ratingCount": String(googleReviews.length),
  },
  "review": googleReviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewBody": r.text,
    "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating) },
  })),
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
        <CommentStrip review={googleReviews[0]} bgLight />
        <About />
        <CommentStrip review={googleReviews[1]} />
        <Gallery />
        <CommentStrip review={googleReviews[2]} bgLight />
        <HowItWorks />
        <CommentStrip review={googleReviews[3]} />
        <Testimonials />
        <CommentStrip review={googleReviews[4]} bgLight />
        <CommentStrip review={googleReviews[5]} />
        <CommentStrip review={googleReviews[6]} bgLight />
        <CommentStrip review={googleReviews[7]} />
        <CommentStrip review={googleReviews[8]} bgLight />
        <CommentStrip review={googleReviews[9]} />
        <CommentStrip review={googleReviews[10]} bgLight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
