"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const categories = ["Tümü", "Pastalar", "Kurabiyeler", "Özel Günler"];

const products = [
  {
    title: "Doğum Günü Pastası",
    category: "Pastalar",
    description: "Kişisel tasarımlı, lezzetli doğum günü pastaları",
    gradient: "from-pink/30 to-pink/10",
  },
  {
    title: "Çilekli Pasta",
    category: "Pastalar",
    description: "Taze çileklerle hazırlanmış özel pasta",
    gradient: "from-red-200/30 to-red-100/10",
  },
  {
    title: "Çikolatalı Pasta",
    category: "Pastalar",
    description: "Belçika çikolatasıyla zengin çikolatalı pasta",
    gradient: "from-amber-200/30 to-amber-100/10",
  },
  {
    title: "Tuzlu Kurabiye",
    category: "Kurabiyeler",
    description: "El yapımı, taze pişmiş tuzlu kurabiyeler",
    gradient: "from-gold/20 to-gold-light/10",
  },
  {
    title: "Kurabiye Seti",
    category: "Kurabiyeler",
    description: "Özel günler için dekoratif kurabiye setleri",
    gradient: "from-pink/20 to-cream",
  },
  {
    title: "Nişan Pastası",
    category: "Özel Günler",
    description: "Zarif tasarımlı, çok katlı nişan pastaları",
    gradient: "from-gold/20 to-light-pink",
  },
  {
    title: "Düğün Pastası",
    category: "Özel Günler",
    description: "Hayalinizdeki düğün pastası özel tasarım",
    gradient: "from-light-pink to-gold/20",
  },
  {
    title: "Bebek Şekerleri",
    category: "Özel Günler",
    description: "Baby shower için özel tasarım şekerler",
    gradient: "from-blue-100/30 to-pink/10",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const isMobile = useIsMobile();

  const filtered = activeCategory === "Tümü"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 lg:py-32 bg-light-pink/30"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp(isMobile)}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            Ürünlerimiz
          </p>
          <h2 id="gallery-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Tatlı <span className="text-pink">Koleksiyonumuz</span>
          </h2>
          <p className="mt-4 text-dark/75 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Her biri el yapımı, özenle hazırlanmış ürünlerimizden size en uygun
            olanı seçin.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp(isMobile)}
          className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-inter text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-pink text-white shadow-md shadow-pink/25"
                  : "bg-white/70 text-dark/60 hover:bg-white hover:text-dark"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          {...staggerContainer(isMobile)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {filtered.map((product) => (
            <motion.div
              key={product.title}
              {...scaleIn(isMobile)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`aspect-square bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl">🧁</span>
                </div>
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-playfair font-semibold text-dark text-base sm:text-lg">{product.title}</h3>
                <p className="mt-1 text-dark/60 font-inter text-sm leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
