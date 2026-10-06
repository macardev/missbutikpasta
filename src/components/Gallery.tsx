"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

const slides = [
  { id: 1, alt: "Pembe gül süslemeli mini pasta ve cupcake hediye kutusu", image: "/images/mini-pasta-cupcake-gullu-set.webp" },
  { id: 2, alt: "Pembe kurdeleli 'Bride' yazılı vintage gelin pastası", image: "/images/bride-pembe-kurdeleli-pasta.webp" },
  { id: 3, alt: "Lacivert ve altın yıldızlı 'Welcome to the 20's club' doğum günü pastası", image: "/images/lacivert-yildizli-dogum-gunu-pastasi.webp" },
  { id: 4, alt: "'İyi ki doğdun Prenses' kırmızı mini pasta ve cupcake seti", image: "/images/prenses-mini-pasta-cupcake-set.webp" },
  { id: 5, alt: "Pembe krema gülleriyle kaplı doğum günü pastası", image: "/images/pembe-gullu-pasta.webp" },
  { id: 6, alt: "Turkuaz kalp şeklinde fiyonklu 20 yaş pastası", image: "/images/turkuaz-kalp-pasta.webp" },
  { id: 7, alt: "'Hello 21' yazılı mini pasta ve çiçekli cupcake kutusu", image: "/images/hello-21-mini-pasta-cupcake-set.webp" },
  { id: 8, alt: "Mavi dev çiçek süslemeli butik pasta", image: "/images/mavi-cicekli-butik-pasta.webp" },
  { id: 9, alt: "Pembe yıldız şeklinde 22 yaş pastası", image: "/images/pembe-yildiz-22-yas-pastasi.webp" },
  { id: 10, alt: "'I love you' yazılı mini pasta ve kalpli cupcake seti", image: "/images/i-love-you-mini-pasta-cupcake-set.webp" },
  { id: 11, alt: "Siyah fiyonklu ve taçlı 'Love you' kalp pasta", image: "/images/siyah-fiyonklu-kalp-pasta.webp" },
  { id: 12, alt: "Kırmızı beyaz çizgili sirk temalı 2 yaş pastası", image: "/images/sirk-temali-2-yas-pastasi.webp" },
  { id: 13, alt: "Mini pasta ve çiçek desenli cupcake kutu seti", image: "/images/mini-pasta-cupcake-cicekli-set.webp" },
  { id: 14, alt: "Pembe zambak süslemeli beyaz vintage pasta", image: "/images/zambakli-vintage-pasta.webp" },
  { id: 15, alt: "Sarı fiyonklu vintage butik pasta", image: "/images/sari-fiyonklu-vintage-pasta.webp" },
  { id: 16, alt: "'Bride to be' pembe çiçekli gelin pastası", image: "/images/bride-to-be-cicekli-pasta.webp" },
  { id: 17, alt: "Beyaz mini pasta ve altın detaylı cupcake kutusu", image: "/images/mini-pasta-cupcake-beyaz-set.webp" },
  { id: 18, alt: "Kırmızı kalp şeklinde taçlı 28 yaş pastası", image: "/images/kirmizi-kalp-tacli-pasta.webp" },
  { id: 19, alt: "Pembe ve yeşil krema çiçekleriyle kaplı doğum günü pastası", image: "/images/krema-cicekli-dogum-gunu-pastasi.webp" },
  { id: 20, alt: "'Son bekar yaşımız' yazılı beyaz vintage pasta", image: "/images/son-bekar-yasimiz-pastasi.webp" },
  { id: 21, alt: "Krem rengi yıldız şeklinde butik pasta", image: "/images/krem-yildiz-pasta.webp" },
  { id: 22, alt: "Çilek süslemeli kırmızı akıtmalı yaş pastası", image: "/images/cilekli-akitmali-yas-pastasi.webp" },
  { id: 23, alt: "'Bride to be' beyaz vintage gelin pastası", image: "/images/bride-to-be-beyaz-pasta.webp" },
  { id: 24, alt: "Renkli puantiyeli 1 yaş pastası", image: "/images/puantiyeli-1-yas-pastasi.webp" },
  { id: 25, alt: "Pembe Detaylı Pasta", image: "/images/pink-detailed-cake.webp" },
  { id: 26, alt: "Yeşil Pasta", image: "/images/green-cake.webp" },
  { id: 27, alt: "Mini Ayıcıklı Pasta", image: "/images/mini-bear-cake.webp" },
  { id: 28, alt: "Beyaz & Altın Pasta", image: "/images/white-golden-cake.webp" },
  { id: 29, alt: "Mor Pasta", image: "/images/purple-cake.webp" },
  { id: 30, alt: "Ayı Balonlu Pasta", image: "/images/bear-with-baloon.webp" },
  { id: 31, alt: "Bebek Ayaklı Pasta", image: "/images/baby-feet-cake.webp" },
  { id: 32, alt: "Futbol Temalı Pasta", image: "/images/soccer-cake.webp" },
  { id: 33, alt: "Doğum Günü Pastası", image: "/images/birthday-cake.webp" },
  { id: 34, alt: "Tavşanlı Pasta", image: "/images/sweet-rabbit-cake.webp" },
  { id: 35, alt: "Pembe Lotus Pastası", image: "/images/pink-lotus-cake.webp" },
  { id: 36, alt: "Fami Sezer Pastası", image: "/images/fami-sezer-cake.webp" },
  { id: 37, alt: "Öncesi Sonrası Pastası", image: "/images/before-after-cake.webp" },
  { id: 38, alt: "Pixel Art Pasta", image: "/images/pixel-art-cake.webp" },
  { id: 39, alt: "Çilekli Pasta", image: "/images/strawberry-cake.webp" },
  { id: 40, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 1", image: "/images/ozel-tasarim-pasta1.webp" },
  { id: 41, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 2", image: "/images/ozel-tasarim-pasta2.webp" },
  { id: 42, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 3", image: "/images/ozel-tasarim-pasta3.webp" },
  { id: 43, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 4", image: "/images/ozel-tasarim-pasta4.webp" },
  { id: 44, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 5", image: "/images/ozel-tasarim-pasta5.webp" },
  { id: 45, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 6", image: "/images/ozel-tasarim-pasta6.webp" },
  { id: 46, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 7", image: "/images/ozel-tasarim-pasta7.webp" },
  { id: 47, alt: "Miss Butik Pasta Özel Tasarım Pasta - Gebze Butik Pasta 8", image: "/images/ozel-tasarim-pasta8.webp" },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.9,
    rotateY: dir > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.9,
    rotateY: dir > 0 ? -15 : 15,
  }),
};

export default function Gallery() {
  const [[current, direction], setSlideState] = useState([0, 0]);
  const isMobile = useIsMobile();
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const paginate = useCallback((dir: number) => {
    setSlideState(([curr]) => {
      let next = curr + dir;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return [next, dir];
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => paginate(1), 4500);
    return () => clearInterval(intervalRef.current);
  }, [paginate]);

  const pause = () => clearInterval(intervalRef.current);

  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1), 4500);
  };

  const slide = slides[current];

  // Too many slides for one dot each — show a position counter instead.
  const renderCounter = () => (
    <div
      className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 bg-dark/60 text-white font-inter text-xs sm:text-sm font-medium px-3 py-1 rounded-full tabular-nums">
      {current + 1} / {slides.length}
    </div>
  );

  const renderArrows = (isDesktop: boolean) => {
    const size = isDesktop ? "w-12 h-12" : "w-10 h-10";
    const iconSize = isDesktop ? "w-6 h-6" : "w-5 h-5";

    return (
      <>
        <button
          onClick={() => paginate(-1)}
          className={`absolute top-1/2 -translate-y-1/2 ${size} rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all z-10 left-3 sm:left-4`}
          aria-label="Önceki"
        >
          <svg className={`${iconSize} text-dark`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className={`absolute top-1/2 -translate-y-1/2 ${size} rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all z-10 right-3 sm:right-4`}
          aria-label="Sonraki"
        >
          <svg className={`${iconSize} text-dark`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </>
    );
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 lg:py-32 bg-light-pink/30"
      aria-labelledby="gallery-heading"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: isMobile ? 0.3 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            Ürünlerimiz
          </p>
          <h2
            id="gallery-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark"
          >
            Size <span className="text-pink">Özel Tasarım Pasta</span>
          </h2>
          <p className="mt-4 text-dark/75 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Her biri el yapımı, özenle hazırlanmış ürünlerimizden size en uygun
            olanı seçin.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {isMobile ? (
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((s) => (
                  <div
                    key={s.id}
                    className="min-w-full aspect-square relative bg-cream"
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {renderArrows(false)}
              {renderCounter()}
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl shadow-sm" style={{ perspective: 1200 }}>
              <div className="aspect-square relative bg-cream">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 200, damping: 26, mass: 1 },
                      opacity: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                      scale: { type: "spring", stiffness: 200, damping: 26, mass: 1 },
                      rotateY: { type: "spring", stiffness: 200, damping: 26, mass: 1 },
                    }}
                    className="absolute inset-0"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {renderArrows(true)}
              {renderCounter()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
