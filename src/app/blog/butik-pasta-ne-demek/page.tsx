import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_LINK } from "@/lib/constants";
import Image from "next/image";

const faqItems = [
  {
    q: "Butik pasta neden daha pahalı?",
    a: "Çünkü seri üretimin maliyet avantajı yoktur. Her pasta saatler süren el işçiliği, günlük alınan taze malzeme ve kişiye özel tasarım gerektirir; fiyat bu emeği yansıtır.",
  },
  {
    q: "Butik pasta kaç gün önceden sipariş edilmeli?",
    a: "En az 2-3 gün önceden. Katlı ve çok figürlü tasarımlar ile düğün, nişan gibi büyük organizasyonlar için 1-2 hafta öncesinden iletişime geçmek daha güvenlidir.",
  },
  {
    q: "Butik pastanın içi nasıl olur?",
    a: "İç kısım da dış tasarım kadar kişiye özeldir. Pandispanya çeşidi, vanilyalı krema, çikolatalı ganaj ya da çilek, frambuaz, muz gibi mevsim meyveleri sipariş sırasında birlikte seçilir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Butik Pasta Ne Demek? Anlamı, Özellikleri ve Pastaneden Farkı",
  "description":
    "Butik pasta ne demek? Sipariş üzerine, kişiye özel tasarlanıp el işçiliğiyle az sayıda hazırlanan pastadır. Anlamı, 5 temel özelliği ve karşılaştırma tablosu.",
  "author": { "@type": "Person", "name": "Emine Macar" },
  "publisher": {
    "@type": "Organization",
    "name": "Miss Butik Pasta",
    "logo": {
      "@type": "ImageObject",
      "url": "https://missbutikpasta.com/logo.svg",
    },
  },
  "mainEntityOfPage": "https://missbutikpasta.com/blog/butik-pasta-ne-demek",
  "datePublished": "2026-10-07",
  "dateModified": "2026-10-07",
  "image": "https://missbutikpasta.com/images/white-golden-cake.webp",
};

export const metadata: Metadata = {
  title: "Butik Pasta Ne Demek? Anlamı ve Pastaneden Farkı | Miss Butik Pasta",
  description:
    "Butik pasta ne demek? Sipariş üzerine, kişiye özel tasarlanıp el işçiliğiyle az sayıda hazırlanan pastadır. Anlamı, 5 temel özelliği ve karşılaştırma tablosu.",
  keywords: [
    "butik pasta ne demek",
    "butik pasta nedir",
    "butik pasta anlamı",
    "tasarım pasta nedir",
    "butik pasta ile normal pasta farkı",
    "butik pasta neden pahalı",
    "kişiye özel pasta",
    "Gebze butik pasta",
  ],
  alternates: {
    canonical: "https://missbutikpasta.com/blog/butik-pasta-ne-demek",
  },
  openGraph: {
    title: "Butik Pasta Ne Demek? Anlamı, Özellikleri ve Pastaneden Farkı",
    description:
      "Butik pasta; sipariş üzerine, kişiye özel tasarlanıp el işçiliğiyle hazırlanan pastadır. Anlamı ve pastane pastasıyla karşılaştırması.",
    images: [
      {
        url: "https://missbutikpasta.com/images/white-golden-cake.webp",
        width: 1200,
        height: 630,
        alt: "Beyaz ve altın detaylı butik pasta",
      },
    ],
  },
};

const comparisonRows = [
  {
    criterion: "Üretim şekli",
    butik: "Sipariş üzerine, az sayıda",
    pastane: "Seri üretim, stoklu",
    ev: "Tek seferlik, amatör",
  },
  {
    criterion: "Tasarım",
    butik: "Tamamen kişiye özel",
    pastane: "Katalogdaki modellerle sınırlı",
    ev: "Ev imkânlarıyla sınırlı",
  },
  {
    criterion: "Malzeme",
    butik: "Taze, seçilmiş, günlük temin",
    pastane: "Raf ömrüne göre seçilir",
    ev: "Yapan kişinin tercihine bağlı",
  },
  {
    criterion: "Hazırlık süresi",
    butik: "En az 2-3 gün önceden sipariş",
    pastane: "Hemen alınabilir",
    ev: "Birkaç saat ile bir gün",
  },
  {
    criterion: "Fiyat",
    butik: "Tasarım ve kişi sayısına göre özel teklif",
    pastane: "Sabit etiket fiyatı",
    ev: "En düşük maliyet",
  },
  {
    criterion: "Alerji / diyet uyarlaması",
    butik: "Tarif uyarlanabilir",
    pastane: "Genellikle mümkün değil",
    ev: "Mümkün, deneyime bağlı",
  },
  {
    criterion: "En uygun olduğu durum",
    butik: "Doğum günü, nişan, düğün, baby shower gibi anlamlı kutlamalar",
    pastane: "Son dakika ihtiyaçları, günlük ikram",
    ev: "Küçük, samimi aile buluşmaları",
  },
];

const linkClass =
  "text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors";

export default function ButikPastaNeDemekPage() {
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
              Butik Pasta Rehberi
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Butik Pasta Ne Demek? Anlamı, Özellikleri ve Pastaneden Farkı
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-10-07">7 Ekim 2026</time>
              <span>&middot;</span>
              <span>5 dk okuma</span>
            </div>
          </header>

          {/* AI-extractable answer */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Butik pasta</strong>, vitrinde hazır bekleyen seri üretim pastaların aksine,
              sipariş üzerine kişiye özel tasarlanan ve el işçiliğiyle sıfırdan hazırlanan pastadır.
              Kısacası butik pasta ne demek sorusunun cevabı şu: sizin kutlamanız, sizin temanız ve
              sizin kişi sayınız için bir kez yapılan, tek olan pasta. Az sayıda üretildiği için
              malzeme taze seçilir, tasarım müşteriyle birlikte netleşir ve her detay elle işlenir.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu yazıda kelimenin nereden geldiğini, bir pastayı neyin &ldquo;butik&rdquo;
              yaptığını ve pastane pastasıyla farkını bir karşılaştırma tablosuyla anlatıyoruz.
            </p>
          </section>

          <div className="aspect-video rounded-2xl overflow-hidden mt-10 relative bg-cream">
            <Image
              src="/images/white-golden-cake.webp"
              alt="Miss Butik Pasta'nın kişiye özel hazırladığı beyaz ve altın detaylı butik pasta"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* Section 1 - Definition */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Butik Pasta Ne Demek? Kelimenin Kökeni ve Pastacılıktaki Anlamı
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Butik&rdquo; kelimesi Fransızca <em>boutique</em> sözcüğünden gelir ve aslen
              küçük, seçkin ürünler satan dükkân anlamına gelir. Türkçede zamanla &ldquo;az sayıda,
              özenle ve kişiye özel üretilen&rdquo; her şey için kullanılmaya başlandı: butik otel,
              butik kafe, butik pasta.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Pastacılıkta bu kelime bir boyut ya da fiyat etiketi değil, bir üretim biçimini
              anlatır. Bir pastanın butik olması için büyük ya da katlı olması gerekmez; 8 kişilik
              sade bir doğum günü pastası da sipariş üzerine, size özel tasarlanıp elde
              hazırlanıyorsa butik pastadır. Tersine, ne kadar gösterişli olursa olsun, kalıptan
              çıkıp vitrinde bekleyen bir pasta butik sayılmaz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Günlük dilde butik pasta yerine &ldquo;tasarım pasta&rdquo;, &ldquo;özel tasarım
              pasta&rdquo; ya da &ldquo;kişiye özel pasta&rdquo; da denir. Hepsi aşağı yukarı aynı
              şeyi anlatır; ince fark, &ldquo;butik&rdquo; kelimesinin tasarımın yanında üretim
              ölçeğine, yani az ve özenli üretime de vurgu yapmasıdır.
            </p>
          </section>

          {/* Section 2 - Features */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Bir Pastayı Butik Yapan 5 Temel Özellik
            </h2>
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ol className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink font-semibold shrink-0">1.</span>
                  <span>
                    <strong>Sipariş üzerine üretim:</strong> Stok yoktur; pasta sizin teslim
                    tarihinize göre planlanır ve o gün için hazırlanır.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink font-semibold shrink-0">2.</span>
                  <span>
                    <strong>Kişiye özel tasarım:</strong> Tema, renk paleti, isim, figür ve kat
                    sayısı kutlamaya göre belirlenir. Bir referans fotoğraf da olabilir, sıfırdan
                    kurgulanan bir konsept de.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink font-semibold shrink-0">3.</span>
                  <span>
                    <strong>El işçiliği:</strong>{" "}
                    <a href="/blog/seker-hamurlu-pasta-saglikli-mi" className={linkClass}>
                      Şeker hamuru figürler
                    </a>
                    , krema dokuları, boyamalar ve yazılar elle yapılır. Bu yüzden iki butik pasta
                    asla birebir aynı olmaz.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink font-semibold shrink-0">4.</span>
                  <span>
                    <strong>Taze ve seçilmiş malzeme:</strong> Az sayıda üretim, malzemenin günlük
                    alınmasına imkân tanır. Atölyemizde taze yumurta, süt, tereyağı ve çikolatalı
                    tariflerde Belçika çikolatası kullanıyoruz; hazır karışım kullanmıyoruz.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink font-semibold shrink-0">5.</span>
                  <span>
                    <strong>Üreticiyle doğrudan iletişim:</strong> Siparişi, pastayı yapacak
                    kişiyle konuşursunuz. Alerji, şeker kısıtlaması ya da kişi sayısı gibi
                    detaylar aracısız mutfağa ulaşır.
                  </span>
                </li>
              </ol>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu beş özellikten biri eksikse pasta güzel olabilir ama tam anlamıyla butik değildir.
              Örneğin hazır bir pastanın üzerine sonradan isim yazdırmak bir kişiselleştirmedir,
              butik üretim değildir.
            </p>
          </section>

          {/* Section 3 - Comparison table */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Butik Pasta, Pastane Pastası ve Ev Yapımı Pasta Karşılaştırması
            </h2>
            <p className="font-inter text-dark/70 text-sm sm:text-base mb-6">
              Butik pastayı en iyi anlatan şey, onu alternatifleriyle yan yana koymaktır:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-dark/5">
              <table className="w-full min-w-[36rem] text-left font-inter text-sm">
                <thead className="bg-pink text-white">
                  <tr>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Kriter</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Butik Pasta</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Pastane Pastası</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Ev Yapımı Pasta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion} className="even:bg-light-pink odd:bg-white">
                      <td className="px-4 sm:px-5 py-3 sm:py-4 font-medium text-dark">
                        {row.criterion}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">{row.butik}</td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">{row.pastane}</td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">{row.ev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-6">
              Tablodan da görüldüğü gibi butik pasta her durumda en iyi seçenek değildir; hız ve
              bütçe öncelikse pastane pastası mantıklıdır. Ama kutlamanın fotoğraflarına yıllar
              sonra da bakacaksanız, pastanın o güne ait olması fark yaratır. Üretim ve
              fiyatlandırma farklarını daha ayrıntılı merak ediyorsanız{" "}
              <a href="/blog/butik-pasta-ile-pastane-arasindaki-farklar" className={linkClass}>
                Butik Pasta ile Pastane Arasındaki Farklar
              </a>{" "}
              yazımıza göz atabilirsiniz.
            </p>
          </section>

          {/* Section 4 - Who is it for */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Butik Pasta Kimler İçin Doğru Seçim?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Atölyemize gelen siparişlerin büyük kısmı üç ihtiyaçtan doğuyor:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Temalı kutlamalar:</strong> Çocuğun sevdiği karakter, bir hobi, bir
                    meslek ya da ortak bir anı pastaya yansısın isteniyorsa. İlham için{" "}
                    <a href="/blog/cocuk-dogum-gunu-pastasi-fikirleri" className={linkClass}>
                      çocuk doğum günü pastası fikirlerimize
                    </a>{" "}
                    bakabilirsiniz.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Hayatta bir kez yaşanan anlar:</strong> Nişan, düğün, cinsiyet
                    açıklama, evlilik teklifi.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Özel beslenme ihtiyacı:</strong> Şeker kısıtlaması, alerji ya da içerik
                    hassasiyeti olan misafirler.
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Buna karşılık, aynı gün pastaya ihtiyacınız varsa butik pasta size uygun değildir;
              her pasta sıfırdan hazırlandığı için aynı gün sipariş kabul etmiyoruz. Butik
              pastalarımız minimum 8-10 kişilik, katlı pastalarımız minimum 15 kişiliktir. Daha
              küçük kutlamalarda maket kat ekleyerek pastayı görsel olarak büyütebiliyoruz.
            </p>
          </section>

          {/* Section 5 - Process */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Butik Pasta Siparişi Nasıl İlerler?
            </h2>
            <div className="space-y-4">
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  1. Fikrinizi paylaşın
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Tema, tarih, kişi sayısı ve varsa referans fotoğrafı WhatsApp&apos;tan
                  gönderin.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  2. Size özel teklifi alın
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Tasarımın detayına, figür sayısına ve kişi sayısına göre fiyat çıkarıyoruz. Her
                  pasta farklı işçilik gerektirdiği için sabit fiyat listesi yerine teklif usulü
                  çalışıyoruz.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  3. Onaylayın, teslim alın
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Detaylar netleşince üretim başlar; pastanızı Gebze Arapçeşme&apos;deki
                  atölyemizden kararlaştırılan saatte elden teslim alırsınız.
                </p>
              </div>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Süreci adım adım görmek isterseniz{" "}
              <a href="/blog/ozel-tasarim-pasta-siparis-rehberi" className={linkClass}>
                Özel Tasarım Pasta Nasıl Sipariş Edilir?
              </a>{" "}
              rehberimizi okuyabilirsiniz.
            </p>
          </section>

          {/* Section 6 - FAQ */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {faqItems.map((faq) => (
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

          {/* Conclusion */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Sonuç: Butik Pasta Bir Üretim Anlayışıdır
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Özetle butik pasta; sipariş üzerine, kişiye özel tasarlanan, taze malzemeyle ve el
              işçiliğiyle az sayıda üretilen pastadır. Onu butik yapan şey boyutu ya da fiyatı
              değil, sizin için bir kez yapılmış olmasıdır.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Atölyemiz Gebze Arapçeşme Mahallesi&apos;nde.{" "}
              <a href="/gebze-butik-pasta" className={linkClass}>
                Gebze
              </a>
              ,{" "}
              <a href="/darica-butik-pasta" className={linkClass}>
                Darıca
              </a>
              ,{" "}
              <a href="/cayirova-butik-pasta" className={linkClass}>
                Çayırova
              </a>
              ,{" "}
              <a href="/tuzla-butik-pasta" className={linkClass}>
                Tuzla
              </a>{" "}
              ve{" "}
              <a href="/pendik-butik-pasta" className={linkClass}>
                Pendik
              </a>
              &apos;ten gelen müşterilerimiz pastalarını buradan teslim alıyor ve son halini
              kendi gözleriyle onaylıyor.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Aklınızdaki Pastayı Birlikte Tasarlayalım
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Temanızı, tarihinizi ve kişi sayınızı WhatsApp&apos;tan yazın; size özel tasarım
              önerisini ve fiyat teklifini birlikte hazırlayalım.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-3 rounded-full font-inter text-sm font-semibold transition-all hover:shadow-lg"
            >
              WhatsApp&apos;tan Teklif Al
            </a>
          </section>

          <div className="mt-8 pt-6 border-t border-dark/10">
            <p className="font-inter text-dark/40 text-xs">
              Bu içerik Miss Butik Pasta tarafından hazırlanmıştır. Son güncelleme: Ekim 2026.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
