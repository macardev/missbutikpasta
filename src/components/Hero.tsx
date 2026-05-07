"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useIsMobile } from "@/lib/hooks";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      className="relative min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden"
      aria-label="Ana giriş"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-light-pink via-cream to-gold-light opacity-60" />

      <motion.div
        className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-pink/20 blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: isMobile ? 4 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gold/20 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: isMobile ? 5 : 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
        >
          <p className="text-pink-dark font-inter text-sm sm:text-base font-semibold uppercase tracking-widest mb-4">
            Gebze&apos;nin En Tatlı Atölyesi
          </p>

          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight">
            Her Dilim{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-pink-dark">
              Bir Hikaye
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-dark/75 font-inter max-w-2xl mx-auto leading-relaxed">
            El emeği, butik üretim pastalarımızla özel günlerinizi unutulmaz
            kılıyoruz. Her pastayı sevgiyle, özenle tasarlıyoruz.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink hover:bg-pink-dark text-white px-8 py-4 rounded-full font-inter text-base font-semibold transition-all hover:shadow-lg hover:shadow-pink/25 w-full sm:w-auto"
            >
              WhatsApp ile Sipariş Ver
            </a>
            <Link
              href="#gallery"
              className="border-2 border-dark/20 hover:border-pink text-dark hover:text-pink-dark px-8 py-4 rounded-full font-inter text-base font-semibold transition-all w-full sm:w-auto"
            >
              Ürünlerimizi Keşfet
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isMobile ? 0.5 : 1, duration: isMobile ? 0.3 : 0.6 }}
          className="mt-10 sm:mt-20"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-dark/60">
            <div className="text-center">
              <p className="font-playfair text-2xl sm:text-3xl font-bold text-pink">100+</p>
              <p className="text-xs sm:text-sm font-inter mt-1">Mutlu Müşteri</p>
            </div>
            <div className="w-px h-10 bg-dark/10 hidden sm:block" />
            <div className="text-center">
              <p className="font-playfair text-2xl sm:text-3xl font-bold text-pink">100%</p>
              <p className="text-xs sm:text-sm font-inter mt-1">El Yapımı</p>
            </div>
            <div className="w-px h-10 bg-dark/10 hidden sm:block" />
            <div className="text-center">
              <p className="font-playfair text-2xl sm:text-3xl font-bold text-pink">Gebze</p>
              <p className="text-xs sm:text-sm font-inter mt-1">Lokal Üretim</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isMobile ? 0.8 : 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-dark/20 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-dark/40 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
