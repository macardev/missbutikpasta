import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_LINK } from "@/lib/constants";
import Link from "next/link";
import type { CityData } from "@/lib/city-data";
import { services, cities } from "@/lib/city-data";

const articleSchema = (data: CityData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: data.h1,
  description: data.metaDescription,
  author: { "@type": "Person", name: "Emine Macar" },
  publisher: { "@type": "Organization", name: "Miss Butik Pasta" },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://missbutikpasta.com/${data.slug}`,
  },
});

const faqSchema = (data: CityData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export default function CityPage({ data }: { data: CityData }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(data)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data)) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
              {data.city} Butik Pasta
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              {data.h1}
            </h1>
            {data.distance !== "merkezde" && (
              <div className="flex items-center gap-4 mt-4 font-inter text-sm text-dark/50">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {data.distance} mesafe
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ~{data.travelTime}
                </span>
              </div>
            )}
          </header>

          {/* Definition block */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>{data.city} için butik pasta</strong> — {data.definition}
            </p>
          </section>

          {/* Stats */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Neden Miss Butik Pasta?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { number: "200+", label: "Özel Pasta Tasarımı", desc: "Bugüne kadar ürettiğimiz toplam özel pasta sayısı" },
                { number: "2+ Yıl", label: "Deneyim", desc: "Gebze'de butik pasta atölyesi olarak hizmet süremiz" },
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

          {/* Services table */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              {data.city}&apos;de Sunduğumuz Pasta Çeşitleri
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-dark/5">
              <table className="w-full text-left font-inter text-sm">
                <thead className="bg-pink text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Pasta Türü</th>
                    <th className="px-5 py-4 font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {services.map((s) => (
                    <tr key={s.name} className="even:bg-light-pink odd:bg-white">
                      <td className="px-5 py-4 font-medium text-dark">{s.name}</td>
                      <td className="px-5 py-4 text-dark/70">{s.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to order */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              {data.city}&apos;den Butik Pasta Nasıl Sipariş Edilir?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mb-6">
              {data.orderIntro}
            </p>
            <div className="space-y-4">
              {[
                { step: "1", title: "Tasarım Fikrinizi Belirleyin", desc: "Galerimizdeki modellerden ilham alın veya kendi fikrinizi oluşturun." },
                { step: "2", title: "WhatsApp'tan Bize Ulaşın", desc: "Pasta boyutu, lezzet ve teslim alma tarihini belirleyelim." },
                { step: "3", title: "Pastanız Hazırlansın", desc: "En taze malzemelerle, el emeğiyle pastanız özenle hazırlanır." },
                { step: "4", title: "Gebze'den Teslim Alın", desc: `Belirlenen saatte Gebze Arapçeşme'deki atölyemizden pastanızı teslim alın.` },
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

          {/* FAQ */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              {data.city} İçin Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {data.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-dark/5 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 cursor-pointer list-none font-inter font-medium text-dark text-sm sm:text-base">
                    <span>{faq.q}</span>
                    <svg
                      className="w-5 h-5 shrink-0 text-pink transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 sm:px-6 pb-4">
                    <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Other cities */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              Diğer Hizmet Bölgelerimiz
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cities
                .filter((c) => c.slug !== data.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="block p-3 bg-light-pink rounded-xl hover:bg-pink/20 transition-colors font-inter text-sm font-medium text-dark"
                  >
                    {c.city}&apos;de Butik Pasta &rarr;
                  </Link>
                ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Hayalinizdeki Pastayı Sipariş Edin
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Bizimle iletişime geçin, pastanızı birlikte tasarlayalım.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-3 rounded-full font-inter text-sm font-semibold transition-all hover:shadow-lg"
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
