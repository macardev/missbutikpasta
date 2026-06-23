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
      "name": "Butik pasta siparişini kaç gün öncesinden vermem gerekir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tasarımın karmaşıklığına göre değişmekle birlikte, en az 5-7 gün öncesinden sipariş vermenizi öneririz. Düğün veya nişan gibi büyük organizasyonlar için 2-4 hafta öncesinden irtibata geçmek en iyi sonucu almanızı sağlar.",
      },
    },
    {
      "@type": "Question",
      "name": "Butik pastalar gerçekten lezzetli mi, yoksa sadece görsel mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İyi bir butik pasta atölyesinde görsellik ve lezzet aynı önemi taşır. Taze, kaliteli malzemelerin kullanılması pastanın hem gözlere hem de damağa hitap etmesini sağlar. Miss Butik Pasta'da görselliğin yanı sıra lezzet hiçbir zaman ikinci plana atılmaz.",
      },
    },
    {
      "@type": "Question",
      "name": "Tasarım pasta klasik pastaneden kaç kat daha pahalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tasarımın detayına ve pastanın büyüklüğüne göre değişir. Genel olarak kişiselleştirme arttıkça el işçiliği de artar ve bu fiyata yansır. Tam bir fiyat bilgisi için sipariş detaylarınızı paylaşmanız yeterlidir.",
      },
    },
    {
      "@type": "Question",
      "name": "Vegan veya glutensiz butik pasta yaptırabilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Butik pasta üretiminin en önemli avantajlarından biri budur: özel diyet gereksinimlerinize göre formülasyon yapılabilir. Talep ettiğiniz içerik kısıtlamalarını sipariş aşamasında belirtmeniz yeterlidir.",
      },
    },
    {
      "@type": "Question",
      "name": "Pastane yerine butik pasta tercih etmenin en büyük avantajı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En büyük avantaj, o günü hatırlayacağınız, fotoğraflarına yıllarca bakacağınız bir pasta sahibi olmaktır. Standart bir pastane ürünü ikramı yerine geçer; butik pasta ise o anın bir parçası olur.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Butik Pasta ile Pastane Arasındaki Farklar: Hangisi Sizin İçin Doğru?",
  "description": "Butik pasta ile klasik pastane arasındaki temel farklar nelerdir? Tasarım pasta neden farklıdır? Üretim süreci, malzeme kalitesi, tasarım özgürlüğü ve fiyatlandırma karşılaştırması.",
  "author": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "publisher": { "@type": "Organization", "name": "Miss Butik Pasta" },
  "datePublished": "2026-06-23",
  "dateModified": "2026-06-23",
  "image": "https://missbutikpasta.com/images/pink-detailed-cake.webp",
};

export const metadata: Metadata = {
  title: "Butik Pasta ile Pastane Arasındaki Farklar | Miss Butik Pasta",
  description:
    "Butik pasta ile klasik pastane arasındaki temel farklar: üretim süreci, malzeme kalitesi, tasarım özgürlüğü, fiyatlandırma ve daha fazlası. Gebze butik pasta atölyesi Miss Butik Pasta.",
  keywords: [
    "butik pasta",
    "tasarım pasta",
    "butik pasta ile pastane farkı",
    "özel pasta",
    "kişiye özel pasta",
    "Gebze butik pasta",
    "butik pasta fiyat",
  ],
  openGraph: {
    title: "Butik Pasta ile Pastane Arasındaki Farklar",
    description:
      "Butik pasta ile klasik pastane arasındaki temel farklar. Hangisi sizin için doğru?",
    images: [{ url: "https://missbutikpasta.com/images/pink-detailed-cake.webp", width: 1200, height: 630, alt: "Butik Pasta" }],
  },
};

const comparisonRows = [
  {
    criterion: "Üretim Türü",
    butik: "Sipariş bazlı, el yapımı, küçük parti üretim",
    pastane: "Seri üretim, standart ürünler hazır stokta",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
  {
    criterion: "Tasarım Esnekliği",
    butik: "Sınırsız; hayalinizdeki tasarım uygulanır",
    pastane: "Sınırlı katalog içinden seçim",
    butikIcon: "check",
    pastaneIcon: "partial",
  },
  {
    criterion: "Kişiselleştirme",
    butik: "Tam kişiselleştirme (tema, renk, harf, figür)",
    pastane: "Yalnızca yazı veya küçük eklemeler",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
  {
    criterion: "Malzeme Kalitesi",
    butik: "Seçilmiş, taze, katkısız malzeme",
    pastane: "Değişken; büyük ölçekli tedarik",
    butikIcon: "check",
    pastaneIcon: "partial",
  },
  {
    criterion: "Sanat & El İşçiliği",
    butik: "Her pasta bir sanat eseri gibi işlenir",
    pastane: "Standart süsleme, minimal el işçiliği",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
  {
    criterion: "Sipariş Süreci",
    butik: "Ön sipariş ve planlama gerektirir",
    pastane: "Anlık, hazır ürün satışı",
    butikIcon: "partial",
    pastaneIcon: "check",
  },
  {
    criterion: "Adet Esnekliği",
    butik: "Tek pasta siparişine özel üretim",
    pastane: "Minimum adet koşulu olabilir",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
  {
    criterion: "Fiyat",
    butik: "Daha yüksek; işçilik ve kalite yansır",
    pastane: "Genellikle daha uygun fiyatlı",
    butikIcon: "partial",
    pastaneIcon: "check",
  },
  {
    criterion: "Lezzet Tutarlılığı",
    butik: "Her sipariş taze üretildiği için yüksek",
    pastane: "Değişken; stok yaşına bağlı",
    butikIcon: "check",
    pastaneIcon: "partial",
  },
  {
    criterion: "Özel Günler İçin Uygunluk",
    butik: "Doğum günü, nişan, düğün, kurumsal etkinlik",
    pastane: "Standart kutlamalar için yeterli",
    butikIcon: "check",
    pastaneIcon: "partial",
  },
  {
    criterion: "İletişim & Danışmanlık",
    butik: "Bire bir tasarım danışmanlığı",
    pastane: "Satış odaklı, kısa etkileşim",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
  {
    criterion: "Diyet Seçenekleri (vegan, glutensiz vb.)",
    butik: "Talebe göre özel formülasyon",
    pastane: "Sınırlı veya yok",
    butikIcon: "check",
    pastaneIcon: "cross",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "check") return <span className="text-green-600 font-bold">&#10003;</span>;
  if (type === "cross") return <span className="text-red-600 font-bold">&#10007;</span>;
  return <span className="text-amber-600 font-bold">~</span>;
}

export default function ButikPastaFarkPage() {
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
              Butik Pasta ile Pastane Arasındaki Farklar: Hangisi Sizin İçin Doğru?
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-06-23">23 Haziran 2026</time>
              <span>&middot;</span>
              <span>8 dk okuma</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative bg-cream">
            <Image
              src="/images/pink-detailed-cake.webp"
              alt="Butik Pasta"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* AI-extractable definition */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Butik pasta ile klasik pastane</strong> arasındaki en temel fark,
              kişiselleştirme ve el yapımı üretim anlayışıdır. Bir butik pasta atölyesi, her
              siparişi sıfırdan ve yalnızca size özel tasarlar; standart ürünler yerine
              hayalinizdeki pastayı üretir. <strong>Tasarım pasta</strong> denildiğinde akla
              gelen şey de tam olarak budur: fabrikasyon değil, sanat.
            </p>
          </section>

          <section className="mt-10">
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Butik pasta&rdquo; ve &ldquo;pastane&rdquo; kelimeleri çoğu zaman birbirinin
              yerine kullanılsa da aslında birbirinden çok farklı iki üretim ve hizmet anlayışını
              temsil eder. Doğum günü pastanızı, nişan pastanızı ya da düğün pastanızı nereden
              sipariş edeceğinize karar verirken bu farkları bilmek, hem bütçenizi hem de
              beklentilerinizi doğru yönetmenizi sağlar.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu yazıda butik pasta atölyesi ile geleneksel pastane arasındaki farkları tüm
              boyutlarıyla ele alacağız: üretim süreci, malzeme kalitesi, tasarım özgürlüğü,
              fiyatlandırma, teslimat anlayışı ve daha fazlası. Sonunda hangisinin ihtiyacınıza
              daha uygun olduğunu net bir şekilde anlayacaksınız.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Butik Pasta ve Pastane: Karşılaştırma Tablosu
            </h2>
            <p className="font-inter text-dark/70 text-sm sm:text-base mb-6">
              Aşağıdaki tablo, iki hizmet anlayışı arasındaki temel farkları özetlemektedir.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-dark/5">
              <table className="w-full text-left font-inter text-sm">
                <thead className="bg-pink text-white">
                  <tr>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Kriter</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Butik Pasta Atölyesi</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Klasik Pastane</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion} className="even:bg-light-pink odd:bg-white">
                      <td className="px-4 sm:px-5 py-3 sm:py-4 font-medium text-dark">{row.criterion}</td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">
                        <Icon type={row.butikIcon} /> {row.butik}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">
                        <Icon type={row.pastaneIcon} /> {row.pastane}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              1. Üretim Anlayışı: Seri mi, El Yapımı mı?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Geleneksel bir pastane, gün içinde çok sayıda müşteriye ulaşabilmek için
              pastalarını önceden ve toplu olarak üretir. Bu modelde verimlilik esastır;
              hamurlar sabahın erken saatlerinde hazırlanır, fırından çıkan ürünler vitrine
              dizilir ve müşteri gelip beğendiğini seçer. Hız ve erişilebilirlik açısından bu
              yaklaşımın güçlü yanları vardır; ancak kişiselleştirme neredeyse imkânsızdır.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bir <strong>butik pasta</strong> atölyesi ise tam tersine çalışır. Her sipariş
              ayrı bir süreç başlatır: müşteriyle önce fikir alışverişi yapılır, tema belirlenir,
              ölçü ve katman sayısı kararlaştırılır, ardından üretim başlar. Pasta yalnızca o
              sipariş için, o müşteriye özel olarak hazırlanır. Miss Butik Pasta&apos;da da tam
              bu yaklaşımı benimsiyoruz: WhatsApp üzerinden sizinle bire bir görüşerek
              hayalinizdeki <strong>tasarım pasta</strong>yı birlikte şekillendiriyoruz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              El yapımı üretimin somut bir avantajı daha vardır: taze. Seri üretim pastaları
              vitrinlerde beklerken, butik pastalar teslim tarihine göre planlanır ve taze olarak
              ulaşır. Bu fark özellikle kremalar, taze meyveler ve özel dolgular söz konusu
              olduğunda doğrudan lezzete yansır.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              2. Tasarım Özgürlüğü: Katalogdan Seçmek mi, Hayal Etmek mi?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Klasik bir pastanede genellikle birkaç düzine hazır tasarım arasından tercih
              yaparsınız. Belki pasta üzerine yazılacak ismi değiştirebilir, bazen renk tercihini
              belirtebilirsiniz; ancak bu kadarla kalır. Vitrinde gördüğünüz pasta büyük ölçüde
              teslim alacağınız pastayla aynıdır.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              <strong>Butik pasta</strong> anlayışında ise tasarım sınırsızdır. Çocuğunuzun en
              sevdiği çizgi film karakterini, evlenme teklifi anınızı sembolize eden detayları,
              kurumsal logonuzu ya da kişisel bir anıyı pastaya yansıtmak mümkündür. Fondanla el
              işçiliği yapılan figürler, akrilik baskılı plakalar, taze çiçek süslemeleri, metalik
              boyalar, ayna yüzeyler ve daha onlarca teknik butik pasta atölyelerinin araç
              kutusundadır.
            </p>
            <div className="mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5 italic">
              <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
                &ldquo;Gerçek hayat örneği: Bir müşterimiz, nişan pastası için sevgilisiyle ilk
                tanıştıkları şehrin minyatür silüetinin pasta üzerine işlenmesini istedi. Bu
                istek, bir pastanede karşılanamaz; ancak butik üretimde saatler süren el emeğiyle
                hayata geçirildi. İşte <strong>tasarım pasta</strong>nın farkı budur.&rdquo;
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              3. Malzeme Kalitesi: Seçilmiş mi, Standart mı?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Büyük ölçekte üretim yapan pastaneler, maliyet kontrolü için standart ve çoğunlukla
              toplu tedarik edilen malzemeler kullanır. Bu, lezzetin sabit kalması için gereklidir;
              ancak en yüksek kalite ingrediyentlere ulaşmayı güçleştirir. Örneğin kuvertür
              çikolata yerine bileşik çikolata, taze süt kreması yerine bitkisel krem şanti
              kullanımı seri üretimde yaygındır.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Butik pasta atölyelerinin küçük ölçekte çalışması ise bir avantaja dönüşür: her
              sipariş için en kaliteli malzemeyi seçme esnekliği. Miss Butik Pasta&apos;da tazelik
              ve kalite konusunda taviz vermiyoruz. Katkısız, özenle seçilmiş malzemelerle
              hazırlanan pastalarımızda hem tat hem de görsel tutarlılık en üst düzeyde
              tutulmaktadır.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Diyet kısıtlamaları olan misafirleriniz için de bu esneklik geçerlidir. Glutensiz,
              vegan veya şeker ilavesiz pasta taleplerini butik atölyeler özel formülasyonla
              karşılayabilirken, klasik pastanelerde bu seçenekler genellikle bulunmaz.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              4. Sipariş Süreci: Planlama mı, Anlık Alım mı?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Klasik pastanelerin en güçlü olduğu alan burası: anlık satış. Bugün doğum günü
              olduğunu hatırladınız ve akşama pasta lazım? Pastane vitrine gidip seçim
              yapabileceğiniz en pratik çözümdür.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Buna karşılık, bir <strong>butik pasta</strong> siparişi önceden planlamayı
              gerektirir. Neden? Çünkü tasarımın netleşmesi, malzemelerin tedarik edilmesi ve el
              işçiliğinin tamamlanması zaman alır. Bu süre pastanın karmaşıklığına göre birkaç
              günden bir haftaya kadar uzayabilir. Özel bir etkinlik planlıyorsanız, siparişinizi
              en az 5-7 gün öncesinden vermeniz önerilir.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu, bir dezavantaj gibi görünse de aslında tasarım kalitesinin garantisidir.
              Aceleyle üretilmiş bir pasta, ne kadar yetenekli ellerde olursa olsun ayrıntıları
              yansıtamaz. Miss Butik Pasta&apos;da sipariş takvimini müşterilerimizle birlikte
              planlıyoruz; böylece özel gününüzde tam zamanında, kusursuz pastanıza kavuşuyorsunuz.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              5. Fiyat: Gerçekten Daha Mı Pahalı?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Evet, butik pastalar genellikle klasik pastane ürünlerinden daha yüksek fiyatlıdır.
              Ancak bu farkı anlamak için neyin fiyatlandırıldığına bakmak gerekir.
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <p className="font-inter font-semibold text-dark mb-3">
                Bir tasarım pastanın fiyatı şu unsurları yansıtır:
              </p>
              <ul className="space-y-2 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span><strong>El işçiliği:</strong> Fondandan şekillendirilen bir çiçek ya da figür, bazen saatlerce çalışma gerektirir.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span><strong>Premium malzeme:</strong> Seçilmiş çikolata, organik tereyağı, taze meyve kullanımı maliyeti artırır.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span><strong>Sipariş bazlı üretim:</strong> Seri üretimin sağladığı maliyet avantajı yoktur; her pasta ayrı bir proje gibi ele alınır.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span><strong>Tasarım danışmanlığı:</strong> Müşteriyle yapılan görüşmeler, eskizler ve revizyon süreci de değerinin bir parçasıdır.</span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu perspektiften bakıldığında, butik pasta fiyatı &ldquo;daha pahalı&rdquo; değil,
              &ldquo;daha fazlasını içeren&rdquo; bir fiyattır. Özel günlerinizde hatırlayacağınız,
              fotoğraflarını yıllarca saklayacağınız bir pasta için bu fark çoğu müşterimize son
              derece mantıklı gelmektedir.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              6. Hangi Tür Pasta Hangi Etkinliğe Uygun?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-3">
                  Butik Pasta Tercih Edin
                </h3>
                <ul className="space-y-2 font-inter text-dark/75 text-sm sm:text-base">
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Anlamlı yaş dönümleri (1., 18., 30., 50. yaş)</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Nişan ve düğün törenleri</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Bebek duşu ve cinsiyet açıklama partileri</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Kurumsal etkinlikler, ödül törenleri</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Mezuniyet partileri</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Yıl dönümlerinde kişisel dokunuşlar</li>
                  <li className="flex gap-2"><span className="text-pink shrink-0">&#10003;</span> Sürpriz organizasyonlar</li>
                </ul>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-dark mb-3">
                  Klasik Pastane Tercih Edebilirsiniz
                </h3>
                <ul className="space-y-2 font-inter text-dark/75 text-sm sm:text-base">
                  <li className="flex gap-2"><span className="text-dark/40 shrink-0">&#8226;</span> Anlık, plansız kutlamalar</li>
                  <li className="flex gap-2"><span className="text-dark/40 shrink-0">&#8226;</span> Kalabalık topluluğa standart ikram</li>
                  <li className="flex gap-2"><span className="text-dark/40 shrink-0">&#8226;</span> Fiyat öncelikli, tasarım ikincil olduğunda</li>
                  <li className="flex gap-2"><span className="text-dark/40 shrink-0">&#8226;</span> Günlük tüketim veya ofis ikramı</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              7. Butik Pasta ve Tasarım Pasta Kavramları Arasındaki İnce Çizgi
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Butik pasta&rdquo; ve &ldquo;tasarım pasta&rdquo; kavramları birbiriyle iç
              içe geçse de aslında hafif bir nüans taşır. <strong>Butik pasta</strong>, üretim
              modelini tanımlar: küçük ölçekli, el yapımı, sipariş bazlı. <strong>Tasarım
              pasta</strong> ise özellikle estetik ve görsel ağırlıklı üretimi vurgular; yani
              sanatsal bir anlayışla şekillendirilen, görünümü lezzeti kadar önem taşıyan pastayı.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Pratikte iki kavram çoğunlukla örtüşür: bir butik pasta atölyesi aynı zamanda
              tasarım pasta üretir. Ancak bazı pastaneler &ldquo;tasarım pasta&rdquo; etiketini
              katalogdaki birkaç süslemeli ürün için kullanabilir; bu, gerçek anlamda
              kişiselleştirilmiş bir tasarım pasta değildir.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Gerçek anlamda bir tasarım pasta; müşteriyle fikir alışverişi yapılan, eskize
              dökülen, renk paleti belirlenen, el işçiliğiyle hayata geçirilen ve teslimata kadar
              özenle saklanan bir pastadır. Miss Butik Pasta&apos;da her sipariş bu süreçten geçer.
            </p>
          </section>

          {/* Section 8 - FAQ */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              8. Sık Sorulan Sorular
            </h2>
            <div className="space-y-3">
              {[
                { q: "Butik pasta siparişini kaç gün öncesinden vermem gerekir?", a: "Tasarımın karmaşıklığına göre değişmekle birlikte, en az 5-7 gün öncesinden sipariş vermenizi öneririz. Düğün veya nişan gibi büyük organizasyonlar için 2-4 hafta öncesinden irtibata geçmek, en iyi sonucu almanızı sağlar." },
                { q: "Butik pastalar gerçekten lezzetli mi, yoksa sadece görsel mi?", a: "Bu en çok sorulan sorulardan biridir. İyi bir butik pasta atölyesinde görsellik ve lezzet aynı önemi taşır. Taze, kaliteli malzemelerin kullanılması, pastanın hem gözlere hem de damağa hitap etmesini sağlar. Miss Butik Pasta'da görselliğin yanı sıra lezzet hiçbir zaman ikinci plana atılmaz." },
                { q: "Farklı şehirlerden sipariş verebilir miyim?", a: "Gebze ve çevresindeki ilçelere teslimat yapılmaktadır. Farklı lokasyonlar için WhatsApp üzerinden bizimle iletişime geçerek seçenekleri değerlendirebilirsiniz." },
                { q: "Tasarım pasta klasik pastaneden kaç kat daha pahalı?", a: "Tasarımın detayına ve pastanın büyüklüğüne göre değişir. Genel olarak kişiselleştirme arttıkça el işçiliği de artar ve bu fiyata yansır. Tam bir fiyat bilgisi için sipariş detaylarınızı paylaşmanız yeterlidir." },
                { q: "Vegan veya glutensiz butik pasta yaptırabilir miyim?", a: "Evet. Butik pasta üretiminin en önemli avantajlarından biri budur: özel diyet gereksinimlerinize göre formülasyon yapılabilir. Talep ettiğiniz içerik kısıtlamalarını sipariş aşamasında belirtmeniz yeterlidir." },
                { q: "Pastane yerine butik pasta tercih etmenin en büyük avantajı nedir?", a: "En büyük avantaj, o günü hatırlayacak, fotoğraflarına yıllarca bakacağınız bir pasta sahibi olmaktır. Standart bir pastane ürünü ikramı yerine geçer; butik pasta ise o anın bir parçası olur. Doğum günü, nişan ya da düğün fotoğraflarında pastanın da yer alacağını düşünürseniz, bu farkın ne kadar önemli olduğu netleşir." },
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

          {/* Section 9 - Checklist */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              9. Doğru Seçim İçin Kontrol Listesi
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mb-4">
              Hangisinin size uygun olduğunu belirlemek için şu soruları kendinize sorun:
            </p>
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Etkinliğiniz fotoğraflarında pastanın öne çıkmasını ister misiniz?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Pastanın rengi, teması veya üzerindeki detaylar sizin için önemli mi?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Sipariş için en az 5-7 gününüz var mı?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Pastayı sadece tüketmek değil, bir hatıra olarak taşımak ister misiniz?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Diyet kısıtlamaları olan misafirleriniz var mı?</span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu soruların çoğuna &ldquo;evet&rdquo; yanıtı verdiyseniz, <strong>butik pasta</strong> sizin
              için doğru seçimdir. Yalnızca anlık alım ihtiyacınız varsa, klasik pastane de işinizi
              görebilir.
            </p>
          </section>

          {/* Section 10 - About */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              10. Miss Butik Pasta: Gebze&apos;nin Butik Pasta Atölyesi
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Gebze Arapçeşme&apos;de hizmet veren Miss Butik Pasta olarak 2024&apos;ten bu yana
              200&apos;den fazla özel <strong>tasarım pasta</strong> hazırladık. Her siparişi bir
              sanat projesi gibi ele alıyor, müşterilerimizle bire bir iletişim kurarak
              hayallerindeki pastayı gerçeğe dönüştürüyoruz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Doğum günü pastası, nişan pastası, düğün pastası, bebek duşu pastası veya kurumsal
              etkinlik pastası arıyorsanız; ister tek katlı sade bir tasarım olsun, ister çok katlı
              görkemli bir şaheser &mdash; her boyut ve karmaşıklık düzeyinde hizmet veriyoruz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Siparişlerinizi WhatsApp üzerinden iletebilir, tasarım sürecini bizimle birlikte
              şekillendirebilirsiniz. Adresimiz: Arapçeşme Mah. Namık Kemal Caddesi No:102 Kat:3,
              Gebze/Kocaeli.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Hayalinizdeki Pastayı Birlikte Tasarlayalım
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Özel gününüz için kişiselleştirilmiş butik pasta siparişi vermek sadece bir mesaj
              kadar uzakta. WhatsApp üzerinden bize ulaşın, tasarım sürecine birlikte başlayalım.
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

          <div className="mt-8 pt-6 border-t border-dark/10">
            <p className="font-inter text-dark/40 text-xs">
              Bu içerik Miss Butik Pasta tarafından hazırlanmıştır. Gebze&apos;nin önde gelen
              butik pasta atölyesi olarak, tüm pasta siparişlerinizde el emeği ve kaliteyi ön
              planda tutuyoruz. Son güncelleme: Haziran 2026.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
