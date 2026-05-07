"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            {...fadeInLeft(isMobile)}
            className="relative"
          >
            <div className="aspect-square sm:aspect-[4/5] rounded-2xl bg-gradient-to-br from-pink/20 via-light-pink to-gold/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl sm:text-8xl">🎂</span>
                  <p className="mt-4 text-dark/40 font-inter text-sm">
                    Pastane görseli eklenecek
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-pink/20 rounded-full blur-xl" />
          </motion.div>

          <div>
            <motion.div {...fadeInUp(isMobile)}>
              <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
                Hakkımızda
              </p>
              <h2 id="about-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                El Emeği,{" "}
                <span className="text-pink">Butik Üretim</span>
              </h2>
            </motion.div>

            <motion.div
              {...fadeInUp(isMobile)}
              className="mt-6 sm:mt-8 space-y-4 sm:space-y-6"
            >
              <p className="text-dark/75 font-inter text-base sm:text-lg leading-relaxed">
                Miss Butik Pasta olarak Gebze&apos;nin kalbinde, her pastayı bir
                sanat eseri olarak tasarlıyoruz. Aile tariflerinden ilham alarak,
                en kaliteli malzemelerle üretim yapıyoruz.
              </p>
              <p className="text-dark/75 font-inter text-base sm:text-lg leading-relaxed">
                Her sipariş özel bir hikaye. Doğum günü, nişan, düğün ya da
                sıradan bir gün... Her anı tatlandırmak için buradayız.
                Kişisel tasarımlarınız hayata geçiyoruz.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp(isMobile)}
              className="mt-8 grid grid-cols-2 gap-4 sm:gap-6"
            >
              {[
                { icon: "🌾", title: "Doğal Malzeme", desc: "Katkısız, taze içerikler" },
                { icon: "🎨", title: "Özel Tasarım", desc: "Hayalinizdeki pasta" },
                { icon: "🚗", title: "Teslimat", desc: "Gebze içi kapıda teslim" },
                { icon: "💝", title: "Sevgiyle", desc: "El yapımı üretim" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  {...scaleIn(isMobile)}
                  className="bg-white/50 rounded-xl p-4 sm:p-5"
                >
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <h3 className="mt-2 font-playfair font-semibold text-dark text-sm sm:text-base">{item.title}</h3>
                  <p className="text-dark/60 font-inter text-xs sm:text-sm mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
