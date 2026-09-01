import ReviewCard from "@/components/ReviewCard";
import { googleReviews } from "@/lib/reviews";

const topReviews = [googleReviews[2], googleReviews[4], googleReviews[3]];

export default function Testimonials() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-light-pink/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            Müşteri Yorumları
          </p>
          <h2 id="testimonials-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Müşterilerimiz <span className="text-pink">Ne Diyor?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {topReviews.map((t, i) => (
            <ReviewCard
              key={`${t.name}-${i}`}
              review={t}
              className="animate-scale-in"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
