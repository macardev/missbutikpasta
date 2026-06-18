import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Doğum günü pastası fiyatı ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doğum günü pastası fiyatı, pasta boyutu, tasarım detayları ve kullanılan malzemelere göre değişiklik gösterir. En doğru fiyat bilgisi için WhatsApp üzerinden pastanızın detaylarını paylaşarak size özel fiyat teklifi alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      "name": "Doğum günü pastası kaç gün önceden sipariş edilmeli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Özel tasarım doğum günü pastaları siparişe özel hazırlandığı için en az 2-3 gün önceden sipariş vermeniz önerilir. Yoğun dönemlerde daha erken iletişime geçmeniz faydalı olacaktır.",
      },
    },
    {
      "@type": "Question",
      "name": "Doğum günü pastasında hangi malzemeler kullanılıyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Miss Butik Pasta'da doğum günü pastaları taze yumurta, süt, tereyağı ve birinci sınıf un gibi doğal malzemelerle hazırlanır. Çikolatalı pastalarda Belçika çikolatası kullanılır. Mevsim meyveleri ile zenginleştirilmiş seçenekler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Gebze'de doğum günü pastası nereden sipariş edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gebze'de butik doğum günü pastası siparişi için Miss Butik Pasta, Arapçeşme Mahallesi'ndeki atölyesinde hizmet vermektedir. WhatsApp üzerinden sipariş verebilir, atölyeden teslim alabilirsiniz.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Gebze'de Doğum Günü Pastası: 2026'nın En Popüler Tasarım Fikirleri | Miss Butik Pasta",
  description:
    "2026'da öne çıkan doğum günü pastası tasarımları, butik pasta trendleri ve Gebze'de özel doğum günü pastası siparişi hakkında kapsamlı rehber. 200+ özel pasta deneyimi.",
  keywords: [
    "doğum günü pastası",
    "gebze doğum günü pastası",
    "özel tasarım doğum günü pastası",
    "butik doğum günü pastası",
    "gebze pasta",
    "doğum günü pastası fikirleri",
    "2026 pasta trendleri",
  ],
  openGraph: {
    title: "Gebze'de Doğum Günü Pastası: 2026 Tasarım Fikirleri",
    description:
      "Doğum günü pastası fikirleri, butik pasta trendleri ve Gebze'de özel tasarım pasta sipariş rehberi.",
    images: [{ url: "https://missbutikpasta.com/images/birthday-cake.webp", width: 1200, height: 630, alt: "Doğum Günü Pastası Tasarım Fikirleri" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gebze'de Doğum Günü Pastası: 2026'nın En Popüler Tasarım Fikirleri",
  "description": "2026'da öne çıkan doğum günü pastası tasarımları, butik pasta trendleri ve Gebze'de özel tasarım pasta siparişi hakkında kapsamlı rehber.",
  "author": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "datePublished": "2026-06-18",
  "dateModified": "2026-06-18",
  "image": "https://missbutikpasta.com/images/birthday-cake.webp",
};

const designs = [
  {
    name: "Zarif Çiçek Tasarımları",
    desc: "Pembe lotus, beyaz-altın kombinasyonu ve pastel tonlarda çiçek detaylı pastalar. Anneler, eşler ve romantik ruhlu doğum günü sahipleri için ideal.",
    image: "/images/pink-lotus-cake.webp",
  },
  {
    name: "Karakter & Figürlü Pastalar",
    desc: "Sevilen çizgi film karakterleri, hayvan figürleri (ayıcık, tavşan) ve kişiye özel maketlerle süslenmiş eğlenceli pastalar. Özellikle çocuk doğum günlerinde favori.",
    image: "/images/mini-bear-cake.webp",
  },
  {
    name: "Modern Geometrik Tasarımlar",
    desc: "Pixel art, mozaik ve geometrik desenlerle hazırlanan çağdaş pastalar. Genç yetişkinler ve modern estetik sevenler için popüler bir seçenek.",
    image: "/images/pixel-art-cake.webp",
  },
  {
    name: "Tema Bazlı Konsept Pastalar",
    desc: "Futbol, müzik, seyahat, meslek temalı pastalar. Doğum günü sahibinin ilgi alanlarına göre kişiselleştirilmiş tasarımlar.",
    image: "/images/soccer-cake.webp",
  },
];

export default function DogumGunuPastasiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
              Doğum Günü Pastası
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Gebze&apos;de Doğum Günü Pastası: 2026&apos;nın En Popüler Tasarım Fikirleri
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-06-18">18 Haziran 2026</time>
              <span>&middot;</span>
              <span>5 dk okuma</span>
            </div>
          </header>

          {/* Featured image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative bg-cream">
            <Image
              src="/images/birthday-cake.webp"
              alt="Doğum Günü Pastası"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Intro - AI extractable definition block */}
          <section className="prose-base">
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Doğum günü pastası</strong>, kişiye özel olarak tasarlanan ve doğum günü
              kutlamalarının merkezinde yer alan özel bir pastadır. Miss Butik Pasta olarak
              Gebze Arapçeşme&apos;de 2024&apos;ten bu yana 200&apos;den fazla özel doğum günü
              pastası hazırladık. Her pastayı sıfırdan, taze malzemelerle, hayal edilen tasarıma
              uygun şekilde üretiyoruz.
            </p>
          </section>

          {/* Statistics block */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Doğum Günü Pastası Hakkında Bilmeniz Gerekenler
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { number: "200+", label: "Özel Pasta Tasarımı", desc: "Bugüne kadar ürettiğimiz toplam özel pasta sayısı" },
                { number: "2 Yıl", label: "Deneyim", desc: "Gebze'de butik pasta atölyesi olarak hizmet süremiz" },
                { number: "%100", label: "El Yapımı", desc: "Hazır karışım kullanmadan, tamamen doğal malzemelerle üretim" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-light-pink rounded-xl">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-pink">{stat.number}</p>
                  <p className="font-inter font-semibold text-dark text-sm mt-1">{stat.label}</p>
                  <p className="font-inter text-dark/60 text-xs mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Content sections with AI-optimized structure */}
          <section className="mt-10 space-y-4">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark">
              2026 Doğum Günü Pastası Trendleri
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              2026 yılında doğum günü pastası tasarımlarında doğallık, kişiselleştirme ve
              işçilik ön plana çıkıyor. Hazır pasta kalıpları yerine butik pastalar, el
              yapımı detaylar ve kişiye özel hikayeler anlatan tasarımlar tercih ediliyor.
              Gebze&apos;de doğum günü pastası arayanlar için 2026&apos;nın en popüler
              tasarım akımlarını derledik.
            </p>
          </section>

          {/* Design ideas - each is a self-contained block for AI extraction */}
          <section className="mt-10 space-y-8">
            {designs.map((design) => (
              <div key={design.name} className="bg-white rounded-2xl overflow-hidden border border-dark/5">
                <div className="aspect-video relative bg-cream">
                  <Image
                    src={design.image}
                    alt={design.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-dark">
                    {design.name}
                  </h3>
                  <p className="mt-2 font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                    {design.desc}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Quote block for AI extraction */}
          <section className="mt-10 p-6 sm:p-8 bg-white rounded-2xl border border-dark/5 italic">
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Her doğum günü pastası, doğum günü sahibinin kişiliğini yansıtan
              benzersiz bir sanat eseridir. Miss Butik Pasta&apos;da her siparişe özel
              tasarım süreciyle, sadece o ana özel bir pasta hazırlıyoruz.&rdquo;
            </p>
            <p className="mt-4 font-inter text-sm text-dark/50 not-italic">
              — Miss Butik Pasta, Gebze Butik Pasta Atölyesi
            </p>
          </section>

          {/* How to order - step block */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              Doğum Günü Pastası Nasıl Sipariş Edilir?
            </h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Tasarım Fikrinizi Belirleyin", desc: "Galerimizdeki modellerden ilham alın veya kendi fikrinizi oluşturun." },
                { step: "2", title: "Bizimle İletişime Geçin", desc: "WhatsApp üzerinden pasta boyutu, lezzet ve teslim alma tarihini belirleyin." },
                { step: "3", title: "Pastanız Hazırlansın", desc: "En taze malzemelerle, el emeğiyle pastanız özenle hazırlanır." },
                { step: "4", title: "Teslim Alın", desc: "Belirlenen saatte Gebze Arapçeşme'deki atölyemizden pastanızı teslim alın." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 border border-dark/5">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-pink/10 text-pink-dark font-playfair font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-playfair font-semibold text-dark text-base">{item.title}</h3>
                    <p className="font-inter text-dark/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ section for AI extraction */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {[
                { q: "Doğum günü pastası ne kadar önceden sipariş edilmeli?", a: "En az 2-3 gün önceden sipariş vermenizi öneririz. Yoğun dönemlerde daha erken iletişime geçmeniz faydalı olacaktır." },
                { q: "Doğum günü pastasında hangi lezzetler var?", a: "Vanilyalı krema, çikolatalı ganaj, mevsim meyveli (çilek, frambuaz, muz) ve özel tariflerimiz arasından seçim yapabilirsiniz." },
                { q: "En az kaç kişilik doğum günü pastası sipariş edebilirim?", a: "Butik pastalarımız minimum 8-10 kişiliktir. Daha küçük gruplar için maket kat ekleyerek görsel olarak büyük pasta görünümü elde edebiliriz." },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-dark/5 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer list-none font-inter font-medium text-dark text-sm sm:text-base">
                    <span>{faq.q}</span>
                    <svg className="w-5 h-5 shrink-0 text-pink transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 sm:px-6 pb-4">
                    <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Hayalinizdeki Doğum Günü Pastasını Sipariş Edin
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Bizimle iletişime geçin, pastanızı birlikte tasarlayalım.
            </p>
            <a
              href="https://wa.me/905345687783"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-pink-btn hover:bg-pink text-white px-8 py-3 rounded-full font-inter text-sm font-semibold transition-all hover:shadow-lg"
            >
              WhatsApp ile Sipariş Ver
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
