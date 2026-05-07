"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const testimonials = [
  {
    name: "Ayşe Y.",
    text: "Doğum günü pastamızı buradan sipariş ettik, hem görseli hem de lezzeti harikaydı! Kesinlikle tavsiye ediyorum.",
    rating: 5,
  },
  {
    name: "Mehmet K.",
    text: "Nişan pastamız tam hayal ettiğimiz gibi oldu. İlgili ekip ve mükemmel sonuç. Teşekkürler Miss Butik Pasta!",
    rating: 5,
  },
  {
    name: "Zeynep A.",
    text: "Çikolatalı pastaları efsane! Her seferinde sipariş veriyorum ve her seferinde aynı kalitede. Gebze&apos;de en iyisi!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} yıldız`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-light-pink/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp(isMobile)} className="text-center mb-12 sm:mb-16">
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            Müşteri Yorumları
          </p>
          <h2 id="testimonials-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Müşterilerimiz <span className="text-pink">Ne Diyor?</span>
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer(isMobile)}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              {...scaleIn(isMobile)}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-dark/80 font-inter text-sm sm:text-base leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink/20 flex items-center justify-center">
                  <span className="text-pink-dark font-playfair font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter font-semibold text-dark text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
