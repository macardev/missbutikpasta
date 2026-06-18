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
      "name": "Çocuk doğum günü pastası nasıl olmalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çocuk doğum günü pastası, görsel olarak eğlenceli ve çocuğun ilgi alanlarına hitap eden temalarla hazırlanmalıdır. Renkli figürler, sevilen karakterler ve interaktif detaylar çocuk pastalarının vazgeçilmezlerindendir.",
      },
    },
    {
      "@type": "Question",
      "name": "Çocuk pastalarında hangi malzemeler kullanılmalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çocuk pastalarında taze ve doğal malzemeler tercih edilmelidir. Miss Butik Pasta'da çocuk pastalarında taze yumurta, süt, tereyağı kullanıyor; renklendiricilerde gıda sınıfı ürünler tercih ediyoruz. Alerjen bilgileri için sipariş sırasında bildirimde bulunmanız yeterlidir.",
      },
    },
    {
      "@type": "Question",
      "name": "Çocuk doğum günü pastası kaç kişilik olmalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çocuk doğum günü pastalarımız minimum 8-10 kişiliktir. Katılımcı sayısına göre daha büyük boyut veya katlı pasta seçeneklerimiz mevcuttur. Dilerseniz pastanın yanına cupcake veya kurabiye ekleyerek ikramları zenginleştirebilirsiniz.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Çocuk Doğum Günü Pastası Fikirleri: En Sevilen Tema ve Karakterler",
  "description": "Çocuğunuzun doğum günü için en özel pasta fikirleri. Hayvan figürleri, çizgi film karakterleri, spor temalı ve daha birçok yaratıcı tasarım.",
  "author": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "datePublished": "2026-06-18",
  "dateModified": "2026-06-18",
  "image": "https://missbutikpasta.com/images/mini-bear-cake.webp",
};

const themeIdeas = [
  {
    name: "Hayvan Figürlü Pastalar",
    desc: "Ayıcık, tavşan, kedi ve köpek figürleriyle süslenen bu pastalar özellikle küçük yaş gruplarının favorisidir. Sevimli hayvan detayları pastaya hem görsel hem de eğlenceli bir boyut katar.",
    image: "/images/mini-bear-cake.webp",
  },
  {
    name: "Spor Temalı Pastalar",
    desc: "Futbol, basketbol veya yüzme gibi spor dallarına ilgi duyan çocuklar için özel olarak tasarlanan bu pastalar, spor sahası figürleri ve temalı süslemelerle hazırlanır.",
    image: "/images/soccer-cake.webp",
  },
  {
    name: "Masal ve Fantastik Temalar",
    desc: "Prenses, unicorn, ejderha ve kahraman temalı pastalar. Çocuğun en sevdiği masal karakterleri pastada hayat bularak doğum gününü unutulmaz kılar.",
    image: "/images/purple-cake.webp",
  },
  {
    name: "Renkli & Çok Katlı Pastalar",
    desc: "Canlı renklerde, çok katlı ve gösterişli pastalar. Özellikle büyük kutlamalar ve kalabalık doğum günü partileri için idealdir.",
    image: "/images/white-golden-cake.webp",
  },
];

export const metadata: Metadata = {
  title: "Çocuk Doğum Günü Pastası Fikirleri: En Sevilen Tema ve Karakterler | Miss Butik Pasta",
  description:
    "Çocuğunuzun doğum günü için en özel pasta fikirleri. Hayvan figürleri, çizgi film karakterleri, spor temalı pastalar ve daha fazlası. Gebze'de çocuk doğum günü pastası siparişi.",
  keywords: [
    "çocuk doğum günü pastası",
    "çocuk pastası fikirleri",
    "hayvan figürlü pasta",
    "spor temalı pasta",
    "gebze çocuk pastası",
    "doğum günü pastası çocuk",
  ],
  openGraph: {
    title: "Çocuk Doğum Günü Pastası Fikirleri",
    description: "Çocuğunuzun doğum günü için en özel pasta fikirleri ve temalar.",
    images: [{ url: "https://missbutikpasta.com/images/mini-bear-cake.webp", width: 1200, height: 630, alt: "Çocuk Doğum Günü Pastası Fikirleri" }],
  },
};

export default function CocukDogumGunuPage() {
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
          <header className="mb-10">
            <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
              Çocuk Pastaları
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Çocuk Doğum Günü Pastası Fikirleri: En Sevilen Tema ve Karakterler
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-06-18">18 Haziran 2026</time>
              <span>&middot;</span>
              <span>5 dk okuma</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative bg-cream">
            <Image
              src="/images/mini-bear-cake.webp"
              alt="Çocuk Doğum Günü Pastası"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* AI-extractable definition */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Çocuk doğum günü pastası</strong>, çocuğun yaşına, ilgi alanlarına ve
              kişiliğine göre özel olarak tasarlanan butik pastalardır. Miss Butik Pasta
              olarak Gebze&apos;de her yaş grubundan çocuk için yüzlerce özel pasta
              hazırladık. Renkli figürler, sevilen karakterler ve yaratıcı temalarla
              çocukların hayal dünyasını pastaya yansıtıyoruz.
            </p>
          </section>

          {/* Stats */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Çocuk Pastalarında Trendler
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { number: "%40", label: "Hayvan Figürlü", desc: "En çok tercih edilen çocuk pasta teması" },
                { number: "%30", label: "Çizgi Film Karakteri", desc: "Popüler kültür temalı pasta talebi" },
                { number: "%20", label: "Spor Temalı", desc: "Futbol ve spor konseptli pastalar" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-light-pink rounded-xl">
                  <p className="font-playfair text-2xl sm:text-3xl font-bold text-pink">{stat.number}</p>
                  <p className="font-inter font-semibold text-dark text-sm mt-1">{stat.label}</p>
                  <p className="font-inter text-dark/60 text-xs mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Theme ideas */}
          <section className="mt-10 space-y-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark">
              Popüler Çocuk Pasta Temaları
            </h2>
            {themeIdeas.map((theme) => (
              <div key={theme.name} className="bg-white rounded-2xl overflow-hidden border border-dark/5">
                <div className="aspect-video relative bg-cream">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-dark">{theme.name}</h3>
                  <p className="mt-2 font-inter text-dark/75 text-sm sm:text-base leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Extra service block */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Pasta Yanında Ek Hizmetler
            </h2>
            <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
              Doğum günü pastanızın yanına eklemek için cupcake, kurabiye ve özel
              tasarım pasta süsleri de hazırlayabiliyoruz. Böylece pastanızla uyumlu
              bir konsept oluşturarak kutlamaları daha da özel kılabilirsiniz.
            </p>
          </section>

          {/* Tips list */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Çocuk Pastası Siparişinde İpuçları
            </h2>
            <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Çocuğunuzun en sevdiği karakteri veya rengi sipariş sırasında belirtin.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Alerjen durumu varsa mutlaka önceden bildirin.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Parti temanız varsa pastayı tema ile uyumlu seçin.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Yoğun dönemlerde siparişinizi mümkün olduğunca erken verin.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {[
                { q: "Çocuk pastası siparişi ne kadar önceden verilmeli?", a: "En az 2-3 gün önceden sipariş vermenizi öneririz. Özellikle figürlü ve detaylı tasarımlar için daha fazla süre gerekebilir." },
                { q: "Çocuk pastalarında şeker hamuru kullanılıyor mu?", a: "Evet, pastalarımızda gıda güvenliği standartlarına uygun şeker hamuru kullanıyoruz. Dilerseniz şekersiz veya daha hafif alternatifler de sunabiliyoruz." },
                { q: "Pastanın yanına ek ürün eklenebilir mi?", a: "Evet, cupcake, kurabiye ve özel pasta süsleri gibi ek ürünler hazırlayabiliyoruz. Sipariş sırasında talebinizi belirtmeniz yeterlidir." },
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

          <section className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Çocuğunuzun Hayalindeki Pastayı Sipariş Edin
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Sevimli figürler ve renkli tasarımlarla unutulmaz bir doğum günü hazırlayalım.
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
