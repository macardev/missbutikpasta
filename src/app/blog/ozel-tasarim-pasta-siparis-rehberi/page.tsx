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
      "name": "İlk kez özel tasarım pasta siparişi veriyorum, nasıl başlamalıyım?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Galerimizdeki pastalara göz atarak beğendiğiniz tarzı belirleyin veya aklınızdaki tasarıma dair fikirlerinizi not alın. Ardından WhatsApp üzerinden bizimle iletişime geçerek pastanın boyutu, lezzeti ve teslim alma tarihini konuşalım.",
      },
    },
    {
      "@type": "Question",
      "name": "Özel tasarım pasta siparişi ne kadar önceden verilmeli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Özel tasarım pastalar siparişe özel sıfırdan hazırlandığı için en az 3-4 gün önceden sipariş vermeniz önerilir. Karmaşık tasarımlar ve katlı pastalar için daha fazla süre gerekebilir.",
      },
    },
    {
      "@type": "Question",
      "name": "Özel tasarım pasta fiyatı nasıl hesaplanıyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fiyatlandırma; pasta boyutu (kişi sayısı), tasarımın detay seviyesi, kullanılan malzemelerin kalitesi ve işçilik süresine göre belirlenmektedir. Her pasta benzersiz olduğu için size özel fiyat teklifi sunuyoruz.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Özel Tasarım Pasta Nasıl Sipariş Edilir? Adım Adım Rehber",
  "description": "İlk kez özel tasarım pasta siparişi verecekler için kapsamlı rehber: tasarım seçimi, boyut belirleme, lezzet seçenekleri ve sipariş süreci.",
  "author": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "publisher": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "datePublished": "2026-06-18",
  "dateModified": "2026-06-18",
  "image": "https://missbutikpasta.com/images/pink-detailed-cake.webp",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Özel Tasarım Pasta Nasıl Sipariş Edilir?",
  "description": "Miss Butik Pasta'dan özel tasarım pasta siparişi vermek için adım adım rehber.",
  "totalTime": "P4D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "İlham Alın",
      "text": "Galerimizdeki pasta modellerini inceleyin veya Pinterest, Instagram gibi platformlardan ilham alın.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Detayları Belirleyin",
      "text": "Pasta boyutu, kişi sayısı, tercih ettiğiniz lezzet ve renk paletini belirleyin.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Bizimle İletişime Geçin",
      "text": "WhatsApp üzerinden tüm detayları bizimle paylaşın, size özel fiyat teklifi ve teslim tarihi oluşturalım.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Pastanız Hazırlansın",
      "text": "En taze ve kaliteli malzemelerle pastanız özenle hazırlanır. Teslim günü size haber verilir.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Teslim Alın",
      "text": "Belirtilen saatte Gebze Arapçeşme'deki atölyemizden pastanızı teslim alın.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Özel Tasarım Pasta Nasıl Sipariş Edilir? Adım Adım Rehber | Miss Butik Pasta",
  description:
    "İlk kez özel tasarım pasta siparişi verecekler için kapsamlı rehber. Tasarım seçimi, boyut, lezzet ve sipariş süreci hakkında her şey.",
  keywords: [
    "özel tasarım pasta siparişi",
    "butik pasta nasıl sipariş edilir",
    "pasta sipariş rehberi",
    "gebze pasta siparişi",
    "kişiye özel pasta",
  ],
  openGraph: {
    title: "Özel Tasarım Pasta Nasıl Sipariş Edilir?",
    description: "Adım adım özel tasarım pasta sipariş rehberi. İlk kez sipariş verecekler için ipuçları.",
    images: [{ url: "https://missbutikpasta.com/images/pink-detailed-cake.webp", width: 1200, height: 630, alt: "Özel Tasarım Pasta Sipariş Rehberi" }],
  },
};

export default function SiparisRehberiPage() {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
              Sipariş Rehberi
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Özel Tasarım Pasta Nasıl Sipariş Edilir? Adım Adım Rehber
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-06-18">18 Haziran 2026</time>
              <span>&middot;</span>
              <span>4 dk okuma</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative bg-cream">
            <Image
              src="/images/pink-detailed-cake.webp"
              alt="Özel Tasarım Pasta"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* AI-extractable definition */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Özel tasarım pasta</strong>, bir kişiye veya özel bir anıya ithafen
              sıfırdan tasarlanan, tamamen el yapımı butik pastalardır. Seri üretim
              pastanelerin vitrin pastalarının aksine, her detayı siparişe göre
              şekillenir. Miss Butik Pasta olarak Gebze&apos;de 200&apos;den fazla özel
              tasarım pasta hazırladık. Bu rehberde, ilk kez sipariş verecekler için
              süreci adım adım anlatıyoruz.
            </p>
          </section>

          {/* Steps */}
          <section className="mt-10 space-y-6">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark">
              Sipariş Süreci
            </h2>
            {[
              { step: "01", title: "İlham Alın ve Fikir Oluşturun", body: "Galerimizdeki 20+ farklı tasarımı inceleyin. Beğendiğiniz bir modelden yola çıkabilir veya tamamen kendi fikrinizi geliştirebilirsiniz. Renk paleti, tema ve konsept hakkında kabaca bir fikir oluşturmak süreci hızlandırır." },
              { step: "02", title: "Pasta Boyutu ve Lezzeti Belirleyin", body: "Kaç kişilik bir pasta istediğinize karar verin. Butik pastalarımız minimum 8-10 kişiliktir. Ardından vanilyalı krema, çikolatalı ganaj veya meyveli seçenekler arasından lezzetinizi seçin." },
              { step: "03", title: "WhatsApp'tan Bize Ulaşın", body: "0534 568 77 83 numaralı WhatsApp hattımızdan bize yazın. Tasarım fikrinizi, pasta boyutunu, istediğiniz lezzeti ve teslim alma tarihinizi paylaşın. Size özel fiyat teklifinizi oluşturalım." },
              { step: "04", title: "Pastanız Hazırlanıyor", body: "Tüm detayları netleştirdikten sonra pastanızı hazırlamaya başlıyoruz. Taze yumurta, süt, tereyağı ve birinci sınıf malzemelerle, el emeğiyle özenle üretiyoruz." },
              { step: "05", title: "Teslim Alın", body: "Pastanız hazır olduğunda size haber veriyoruz. Gebze Arapçeşme Mahallesi'ndeki atölyemizden kararlaştırdığımız saatte teslim alabilirsiniz." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-dark/5">
                <span className="font-playfair text-pink text-lg font-bold">{item.step}</span>
                <h3 className="font-playfair font-semibold text-dark text-lg sm:text-xl mt-1">{item.title}</h3>
                <p className="font-inter text-dark/70 text-sm sm:text-base mt-3 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </section>

          {/* Flavor comparison table - AI loves tables */}
          <section className="mt-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              Lezzet Seçenekleri
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-dark/5">
              <table className="w-full text-left font-inter text-sm">
                <thead className="bg-pink/10">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-dark">Lezzet</th>
                    <th className="px-5 py-4 font-semibold text-dark">İçindekiler</th>
                    <th className="px-5 py-4 font-semibold text-dark">En Uygun Olduğu Tema</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {[
                    { name: "Vanilyalı Krema", ingredients: "Taze süt, tereyağı, vanilya çubuğu", theme: "Klasik ve zarif tasarımlar" },
                    { name: "Çikolatalı Ganaj", ingredients: "Belçika çikolatası, krema, tereyağı", theme: "Modern ve lüks pastalar" },
                    { name: "Meyveli", ingredients: "Mevsim meyveleri (çilek, frambuaz, muz)", theme: "Yaz pastaları, doğal temalar" },
                    { name: "Karamelli", ingredients: "Ev yapımı karamel, tuzlu karamel kreması", theme: "Sonbahar ve kış tasarımları" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-cream/50 transition-colors">
                      <td className="px-5 py-4 font-medium text-dark">{row.name}</td>
                      <td className="px-5 py-4 text-dark/70">{row.ingredients}</td>
                      <td className="px-5 py-4 text-dark/70">{row.theme}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pro tips block */}
          <section className="mt-10 p-6 bg-white rounded-2xl border border-dark/5">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-4">
              İpuçları
            </h2>
            <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Referans fotoğraflar göndermek, hayalinizdeki tasarımı anlatmanın en kolay yoludur.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Siparişi ne kadar erken verirseniz, size en uygun zamanı ayarlama şansımız o kadar artar.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Alerjenleriniz varsa sipariş sırasında mutlaka belirtin.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink shrink-0">&#10003;</span>
                <span>Daha küçük gruplar için maket kat ekleyerek pastanızı görsel olarak büyütebiliriz.</span>
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
                { q: "Özel tasarım pasta fiyatı ne kadar?", a: "Fiyatlandırma; pasta boyutu, tasarım detayları, kullanılan malzemeler ve işçilik süresine göre değişir. En doğru bilgi için WhatsApp üzerinden bizimle iletişime geçin." },
                { q: "Tasarımda değişiklik yapabilir miyim?", a: "Evet, hazırlık süreci başlamadan önce tasarımda değişiklik yapabilirsiniz. Figürler hazırlandıktan sonra büyük değişiklikler mümkün olmayabilir." },
                { q: "Teslimat hizmetiniz var mı?", a: "Teslimat hizmetimiz bulunmamaktadır. Siparişlerinizi Gebze Arapçeşme'deki atölyemizden teslim alabilirsiniz." },
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
              Siparişinizi Şimdi Oluşturun
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Hayalinizdeki pastayı birlikte tasarlayalım.
            </p>
            <a
              href="https://wa.me/905345687783"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-pink-btn hover:bg-pink text-white px-8 py-3 rounded-full font-inter text-sm font-semibold transition-all hover:shadow-lg"
            >
              WhatsApp ile Yazın
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
