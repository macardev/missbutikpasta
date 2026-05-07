"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";
import { ADDRESS, PHONE, PHONE_LINK, WHATSAPP_LINK, OPENING_HOURS } from "@/lib/constants";

export default function Contact() {
  const isMobile = useIsMobile();

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp(isMobile)} className="text-center mb-12 sm:mb-16">
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            İletişim
          </p>
          <h2 id="contact-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Bize <span className="text-pink">Ulaşın</span>
          </h2>
          <p className="mt-4 text-dark/75 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sipariş ve sorularınız için WhatsApp&apos;tan bize yazın veya
            dükkânımızı ziyaret edin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div {...fadeInLeft(isMobile)} className="space-y-8">
            <div>
              <h3 className="font-playfair font-semibold text-dark text-xl mb-4">Adres</h3>
              <p className="text-dark/80 font-inter text-sm sm:text-base leading-relaxed">
                {ADDRESS}
              </p>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-dark text-xl mb-4">Telefon</h3>
              <a
                href={`tel:${PHONE_LINK}`}
                className="text-pink-dark hover:text-pink font-inter text-sm sm:text-base transition-colors"
              >
                {PHONE}
              </a>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-dark text-xl mb-4">WhatsApp</h3>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-inter text-sm font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Yazın
              </a>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-dark text-xl mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2">
                {OPENING_HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center font-inter text-sm">
                    <span className="text-dark/80">{item.day}</span>
                    <span className={`font-medium ${item.hours === "Kapalı" ? "text-red-400" : "text-dark"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInRight(isMobile)}>
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl bg-gradient-to-br from-gold/20 via-cream to-pink/20 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-dark/20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.183c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="mt-3 text-dark/40 font-inter text-sm">
                    Google Maps haritası eklenecek
                  </p>
                  <p className="mt-1 text-dark/30 font-inter text-xs">
                    Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:16 D:8
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
