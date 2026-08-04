import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const faqItems = [
  {
    q: "Şeker hamurlu pasta çocuklar için güvenli mi?",
    a: "Evet, gıda sınıfı malzemeyle üretilmiş şeker hamuru çocuklar için güvenlidir. Yine de alerjik durum varsa sipariş öncesi bildirilmesi önemlidir.",
  },
  {
    q: "Şeker hamurunun tadı neden bazen kötü oluyor?",
    a: "Genellikle düşük kaliteli şeker/glikoz karışımından ya da kalın uygulamadan kaynaklanır. İnce ve dengeli bir katman, altındaki lezzetli kekle birleştiğinde bu sorun ortadan kalkar.",
  },
  {
    q: "Şekersiz pasta seçeneğiniz var mı?",
    a: "Evet, talep üzerine şekersiz veya daha hafif alternatifler hazırlayabiliyoruz. Sipariş sırasında belirtmeniz yeterli.",
  },
  {
    q: "Şeker hamurlu pasta kaç gün taze kalır?",
    a: "Doğru saklama koşullarında (serin ortam, kapalı kutu) 2-3 gün tazeliğini korur; en iyi lezzet deneyimi için teslim alındığı gün veya ertesi gün tüketilmesini öneririz.",
  },
  {
    q: "Katlı ve figürlü pastalarda içi de kuru olur mu?",
    a: "Doğru teknikle hazırlandığında hayır. Figür ağırlığını taşımak için ayrı destek sistemleri kullanmak, kek katmanının nemli kalmasını sağlar.",
  },
  {
    q: "Şeker hamurunu yemeden önce soymak gerekir mi?",
    a: "Zorunlu değil, gıda sınıfı şeker hamuru direkt tüketilebilir. Ancak tadını hafif bulanlar isterse dış kaplamayı soyup sadece iç kısmı tüketmeyi tercih edebilir; bu tamamen kişisel damak tercihidir.",
  },
  {
    q: "Sıcak havada şeker hamurlu pasta bozulur mu?",
    a: "Şeker hamurunun kendisi krema veya ganaja göre sıcağa karşı daha dayanıklıdır, ancak yine de doğrudan güneş ışığı ve yüksek nem yüzeyde terlemeye yol açabilir. Yaz aylarında teslimat sonrası pastayı mümkün olduğunca çabuk serin bir ortama almanızı öneririz.",
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
  "headline": "Şeker Hamurlu Pasta Sağlıklı mı, Lezzetli Olur mu?",
  "description":
    "Şeker hamurlu pasta sağlıklı mı, lezzetli olur mu? Gebze'nin butik pasta atölyesi Miss Butik Pasta'dan gerçek cevaplar ve karşılaştırma tablosu.",
  "author": { "@type": "Person", "name": "Emine Macar" },
  "publisher": {
    "@type": "Organization",
    "name": "Miss Butik Pasta",
    "logo": {
      "@type": "ImageObject",
      "url": "https://missbutikpasta.com/logo.svg",
    },
  },
  "mainEntityOfPage": "https://missbutikpasta.com/blog/seker-hamurlu-pasta-saglikli-mi",
  "datePublished": "2026-08-04",
  "dateModified": "2026-08-04",
  "image": "https://missbutikpasta.com/images/ozel-tasarim-pasta4.webp",
};

export const metadata: Metadata = {
  title: "Şeker Hamurlu Pasta Sağlıklı mı? | Miss Butik Pasta",
  description:
    "Şeker hamurlu pasta sağlıklı mı, lezzetli olur mu? Gebze'nin butik pasta atölyesi Miss Butik Pasta'dan gerçek cevaplar ve karşılaştırma tablosu.",
  keywords: [
    "şeker hamurlu pasta sağlıklı mı",
    "şeker hamurlu pasta lezzetli olur mu",
    "şeker hamuru zararlı mı",
    "şekersiz pasta alternatifi",
    "butik pasta Gebze",
    "şeker hamuru nedir",
    "fondan pasta",
    "çocuklar için şeker hamuru",
    "Gebze butik pasta",
  ],
  alternates: {
    canonical: "https://missbutikpasta.com/blog/seker-hamurlu-pasta-saglikli-mi",
  },
  openGraph: {
    title: "Şeker Hamurlu Pasta Sağlıklı mı, Lezzetli Olur mu?",
    description:
      "Şeker hamurlu pasta sağlıklı mı, lezzetli olur mu? Gebze butik pasta atölyesinden gerçek cevaplar.",
    images: [
      {
        url: "https://missbutikpasta.com/images/ozel-tasarim-pasta4.webp",
        width: 1200,
        height: 630,
        alt: "Şeker hamuru figürlü butik pasta",
      },
    ],
  },
};

const comparisonRows = [
  {
    criterion: "Görsel netlik ve figür detayı",
    fondant: "Çok yüksek — keskin hatlar, 3D figürler mümkün",
    cream: "Orta — daha organik, akışkan görünüm",
  },
  {
    criterion: "Ağızda bıraktığı his",
    fondant: "İnce uygulandığında hafif, kalın uygulandığında ağır",
    cream: "Genellikle daha hafif ve kremsi",
  },
  {
    criterion: "Sıcağa dayanıklılık",
    fondant: "Yüksek, açık havada uzun süre durabilir",
    cream: "Düşük-orta, sıcakta erime riski var",
  },
  {
    criterion: "İdeal kullanım alanı",
    fondant: "Tema pastalar, karakterli doğum günü pastaları, katlı pastalar",
    cream: "Yetişkin kutlamaları, doğal/rustik tasarımlar, damak tadı önceliği",
  },
  {
    criterion: "Hazırlık süresi",
    fondant: "Daha uzun (figür kurutma, kaplama, detaylandırma)",
    cream: "Nispeten daha kısa",
  },
  {
    criterion: "Miss Butik Pasta önerisi",
    fondant: "İnce katman + kaliteli iç dolgu ile dengeli kullanım",
    cream: "Belçika çikolatalı ganaj ile zengin lezzet",
  },
];

export default function SekerHamurluPastaPage() {
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
              Şeker Hamurlu Pasta Sağlıklı mı, Lezzetli Olur mu?
            </h1>
            <div className="flex items-center gap-3 mt-4 font-inter text-sm text-dark/50">
              <span>Miss Butik Pasta</span>
              <span>&middot;</span>
              <time dateTime="2026-08-04">4 Ağustos 2026</time>
              <span>&middot;</span>
              <span>11 dk okuma</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative bg-cream">
            <Image
              src="/images/ozel-tasarim-pasta4.webp"
              alt="Miss Butik Pasta şeker hamuru figürlü doğum günü pastası"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          {/* AI-extractable answer */}
          <section>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Kısa ve net cevap: Evet &mdash; doğru malzemeyle, doğru ellerde hazırlanan{" "}
              <strong>şeker hamurlu pasta</strong> hem güvenle yenir hem de leziz olur. Peki o
              zaman neden bu kadar çok kişi &ldquo;şeker hamurlu pasta sağlıklı mı, yoksa sadece
              görüntü için mi yapılıyor&rdquo; diye soruyor? Çünkü piyasada gerçekten de tadı
              ağızda kalan, mumsu, bazen de fazla tatlı gelen şeker hamurlu pastalarla karşılaşmış
              çoğumuz. Sorun şeker hamurunda değil, kullanılan malzemenin kalitesinde ve pastanın
              hazırlanma sürecinde gizli.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu yazıda hem &ldquo;sağlıklı mı&rdquo; sorusunun arkasındaki gerçek gıda güvenliği
              bilgilerini hem de &ldquo;neden bazı pastalar lezzetsiz çıkıyor&rdquo; sorusunun
              cevabını, Gebze&apos;de iki yıldır butik pasta üreten bir atölyenin mutfağından
              anlatıyoruz. Bu soruyu bize en çok WhatsApp&apos;tan yazan müşterilerimiz soruyor:
              &ldquo;Çocuğumun doğum günü pastası şeker hamurlu olacak ama tadı güzel olur mu,
              zararı var mı?&rdquo; Cevabı hem teknik hem pratik olarak aşağıda bulacaksınız.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              1. Şeker Hamuru Nedir, Pastanın Neresinde Kullanılır?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Şeker hamuru (fondan), şeker, su, jelatin veya glikoz bazlı karışımların yoğrularak
              hamur kıvamına getirilmesiyle elde edilen, açılıp şekillendirilebilen bir kaplama
              malzemesidir. Butik pastacılıkta iki şekilde kullanılır:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Kaplama olarak:</strong> Pastanın dış yüzeyini pürüzsüz, mat ya da
                    parlak bir görünüme kavuşturmak için.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Figür ve dekor olarak:</strong> Karakterler, çiçekler, yazılar, üç
                    boyutlu şekiller gibi tasarım detaylarını oluşturmak için.
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Yani şeker hamuru pastanın &ldquo;içi&rdquo; değil, &ldquo;kıyafeti&rdquo;dir
              diyebiliriz. Asıl lezzet, altındaki pandispanya, kremalar ve iç dolgulardan gelir.
              Bu ayrım aslında sorunun cevabının da anahtarı: şeker hamurunun kendisi sağlıklı mı
              sorusuyla, pastanın bütünü lezzetli mi sorusu birbirinden farklı iki konudur.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Şeker hamurunun butik pastacılıkta bu kadar tercih edilmesinin bir sebebi de
              dayanıklılığı. Krema ya da ganaj kaplamaya göre daha uzun süre şeklini koruduğu,
              sıcaktan daha az etkilendiği ve üzerine ince fırça darbeleriyle detaylı desenler,
              yazılar, gölgelendirmeler yapılabildiği için özellikle tema pastalarında ve katlı
              pastalarda vazgeçilmez bir malzeme haline geliyor. Bir doğum günü pastasında sevilen
              bir çizgi film karakterini ya da bir nişan pastasında ismi tam istenen fontta
              yazabilmek, büyük ölçüde şeker hamurunun bu esnekliği sayesinde mümkün oluyor.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              2. Şeker Hamurlu Pasta Sağlıklı mı?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Gıda güvenliği açısından bakıldığında, kontrollü koşullarda ve gıda sınıfı (food
              grade) malzemelerle üretilmiş <strong>şeker hamuru sağlığa zararlı değildir</strong>.
              Dikkat edilmesi gereken üç nokta şudur:
            </p>
            <div className="mt-4 space-y-4">
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  1. Renklendiriciler gıda onaylı olmalı
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Tekstil boyası ya da onaysız renklendirici kullanımı &mdash; ki bu maalesef kayıt
                  dışı üretim yapan bazı yerlerde görülüyor &mdash; asıl risk buradan doğar. Miss
                  Butik Pasta&apos;da kullandığımız tüm renklendiriciler gıda sınıfıdır ve hijyen
                  kurallarına göre günlük olarak temin edilir.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  2. Şeker oranı ve alerjenler
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Şeker hamuru yüksek oranda şeker içerir; diyabeti olan ya da şeker kısıtlaması
                  yapan kişiler için standart şeker hamuru uygun değildir. Bu durumda şekersiz veya
                  daha hafif alternatifler tercih edilmelidir.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
                <h3 className="font-playfair text-lg font-semibold text-pink mb-2">
                  3. Saklama koşulları
                </h3>
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  Oda sıcaklığında uzun süre bekletilen ya da nem alan şeker hamuru yüzeyi
                  bozulabilir; bu bir sağlık sorunundan çok bir tazelik ve görünüm sorunudur.
                </p>
              </div>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-6">
              Özetle: sorun &ldquo;şeker hamuru&rdquo; kavramında değil, o hamurun{" "}
              <strong>nerede, hangi malzemeyle ve hangi hijyen standardında</strong> üretildiğinde
              saklıdır. Bu yüzden butik pasta siparişi verirken atölyenin malzeme kaynağını
              sorabilmeniz, güvenilir bir üreticiyle çalışmanız çok önemlidir.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bir de sık karıştırılan bir konu var: &ldquo;el yapımı şeker hamuru&rdquo; ile
              &ldquo;hazır (endüstriyel) şeker hamuru&rdquo; arasındaki fark. Hazır paketlenmiş
              şeker hamurları genellikle raf ömrünü uzatmak için katkı maddesi oranı daha yüksek
              tutulur; el yapımı hazırlanan şeker hamurunda ise bu oran atölyenin inisiyatifine
              bağlıdır ve genellikle daha sadedir. Miss Butik Pasta&apos;da kullandığımız şeker
              hamurunu kendi mutfağımızda, taze partiler halinde hazırlıyoruz &mdash; yani
              &ldquo;aylar önce üretilip depoda bekleyen&rdquo; bir malzemeden bahsetmiyoruz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bir diğer merak edilen konu da çocuklar için güvenlik. Küçük yaş grubundaki çocuklar
              genellikle pastanın üzerindeki figürleri hemen yemek ister; bu noktada figürlerin
              içine tel, kürdan ya da plastik destek gizlenip gizlenmediği önemlidir. Biz görünür ya
              da yenmemesi gereken destek malzemesi kullandığımız her pastada bunu teslimat
              sırasında sözlü olarak da müşterimize hatırlatıyoruz. Küçük bir detay gibi görünse de
              aile güvenliği açısından atlanmaması gereken bir nokta.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              3. Butik Pasta Atölyesi Seçerken Nelere Dikkat Etmelisiniz?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              &ldquo;Şeker hamurlu pasta sağlıklı mı&rdquo; sorusunun cevabı büyük ölçüde hangi
              atölyeyle çalıştığınıza bağlı olduğu için, sipariş vermeden önce sorabileceğiniz
              birkaç soru işinize yarayacaktır:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Malzemeleriniz günlük mü temin ediliyor, yoksa stoklu mu çalışıyorsunuz?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Kullandığınız çikolata ve renklendiriciler gıda sınıfı mı?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Alerjik durumlarda içerik uyarlaması yapabiliyor musunuz?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Pastanın hazırlanma süreci ne kadar sürüyor, siparişi kaç gün önceden vermem
                    gerekiyor?
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>Daha önceki müşterilerinizin geri bildirimlerini görebilir miyim?</span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu soruların cevabı net ve şeffafsa, o atölyeyle çalışmak konusunda içiniz rahat
              olabilir. Miss Butik Pasta&apos;da bu sorulara verdiğimiz cevaplar zaten{" "}
              <a
                href="/sikca-sorulan-sorular"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                SSS sayfamızda
              </a>{" "}
              ve bu yazının ilerleyen bölümlerinde detaylı şekilde yer alıyor.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              4. Peki Neden Bazı Şeker Hamurlu Pastalar Lezzetsiz ve Ağır Oluyor?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Bu, sektörün en çok konuşulan şikâyeti ve haklı bir şikâyet. Sosyal medyada ve pasta
              forumlarında sıkça karşılaşılan yakınma şu: dıştan muhteşem görünen bir pasta
              kesildiğinde içindeki kek kurumuş, sert; üzerindeki ganaj parmak kalınlığında ve
              ağır; şeker hamurunun tadı ise ağızda mumsu bir tat bırakıyor. Bunun teknik sebepleri
              var:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-red-600 shrink-0">&#10007;</span>
                  <span>
                    <strong>Figürleri taşımak için sertleştirilmiş pandispanya.</strong> Bazı
                    üreticiler, üzerine oturtulan ağır şeker hamuru figürlerin çökmemesi için keki
                    fazla pişirir ya da kurutur. Sonuç: göze hoş ama damakta hayal kırıklığı
                    yaratan bir pasta.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 shrink-0">&#10007;</span>
                  <span>
                    <strong>Kalın ve ucuz ganaj katmanı.</strong> Şeker hamurunun düzgün oturması
                    için altına kalın bir ganaj ya da krema tabakası sürülür. Kalitesiz çikolata ile
                    yapılan ganaj hem ağırlaşır hem de tatsızlaşır.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 shrink-0">&#10007;</span>
                  <span>
                    <strong>Hazır karışım kullanımı.</strong> Zamana karşı yarışan bazı üretimlerde
                    hazır pasta karışımları tercih edilir; bu da doğal tat profilini ortadan
                    kaldırır.
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu üç noktanın hiçbiri &ldquo;şeker hamuru kötüdür&rdquo; anlamına gelmez &mdash;
              sadece &ldquo;işçilik ve malzeme kalitesi düşükse sonuç kötü olur&rdquo; anlamına
              gelir. Doğru yapıldığında şeker hamurlu bir pasta, hem Instagram&apos;da hem tabakta
              başarılı olabilir.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              5. Miss Butik Pasta&apos;da Süreç Nasıl İşliyor?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Gebze Arapçeşme&apos;deki atölyemizde iki yıldır 200&apos;den fazla özel pasta
              tasarladık ve bu şikâyetleri en aza indirmek için sürecimizi baştan kurduk:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Malzemeler günlük temin edilir.</strong> Taze yumurta, süt, tereyağı ve
                    birinci sınıf un kullanıyoruz; hazır karışımlara kesinlikle yer vermiyoruz.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Çikolata seçimi.</strong> Çikolatalı pastalarımızda ve ganajlarımızda
                    birinci kalite Belçika çikolatası tercih ediyoruz &mdash; bu, hem lezzeti hem de
                    ganajın dokusunu doğrudan etkiliyor.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>İnce ve dengeli kaplama.</strong> Şeker hamurunu, pastanın tadını
                    bastırmayacak kalınlıkta, dengeli bir katman olarak uyguluyoruz. Amacımız
                    pastanın hem gözle hem damakla sevilmesi.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>Sipariş bazlı üretim.</strong> Stoklu üretim yapmıyoruz; her pasta,
                    sipariş anında belirlenen tasarıma göre sıfırdan hazırlanıyor. Bu yüzden
                    siparişinizi en az 2-3 gün önceden vermenizi öneriyoruz &mdash; özellikle hafta
                    sonu ve özel gün yoğunluklarında bu süre pastanızın hakkını verebilmemiz için
                    değerli.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#10003;</span>
                  <span>
                    <strong>İç dolgu çeşitliliği.</strong> Vanilyalı krema, çikolatalı ganaj,
                    mevsimine göre taze meyveler (çilek, frambuaz, muz) gibi seçeneklerle hem
                    lezzeti hem hafifliği dengeliyoruz.
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu yaklaşımın temelinde şu felsefe var: bir pasta önce lezzetli olmalı, sonra güzel
              görünmeli. Tasarım ne kadar iddialı olursa olsun, dilim ağza gittiğinde hayal
              kırıklığı yaratıyorsa o pasta amacına ulaşmamış demektir.
            </p>
          </section>

          {/* Section 6 - Comparison table */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              6. Şeker Hamuru ile Krema/Ganaj Kaplama Karşılaştırması
            </h2>
            <p className="font-inter text-dark/70 text-sm sm:text-base mb-6">
              Sipariş verirken hangi kaplamanın sizin için doğru olduğuna karar vermenizi
              kolaylaştırmak için hazırladığımız karşılaştırma:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-dark/5">
              <table className="w-full text-left font-inter text-sm">
                <thead className="bg-pink text-white">
                  <tr>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Özellik</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Şeker Hamuru Kaplama</th>
                    <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">Krema / Ganaj Kaplama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark/5">
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion} className="even:bg-light-pink odd:bg-white">
                      <td className="px-4 sm:px-5 py-3 sm:py-4 font-medium text-dark">
                        {row.criterion}
                      </td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">{row.fondant}</td>
                      <td className="px-4 sm:px-5 py-3 sm:py-4 text-dark/80">{row.cream}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-6">
              Aslında bu iki seçenek birbirinin rakibi değil, birbirini tamamlayan seçenekler. Biz
              çoğu siparişte ikisini bir arada kullanıyoruz: alt yapıda krema/ganaj ile lezzeti
              sağlarken, üstte ince bir şeker hamuru katmanıyla tasarımı hayata geçiriyoruz.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Sipariş verirken kararsız kalırsanız, bize sadece kutlamanın tarzını anlatmanız
              yeterli. Örneğin küçük bir çocuğun karakterli doğum günü pastası için şeker hamuru
              ağırlıklı bir tasarım önerirken, yetişkinler için düzenlenen sade bir kutlamada krema
              ağırlıklı, üzerinde sadece ince bir yazı ya da birkaç detay bulunan bir tasarımı
              tavsiye ediyoruz. Bu tercih, hem bütçenizi hem de misafirlerinizin damak zevkini en
              iyi şekilde karşılamanıza yardımcı oluyor.
            </p>
          </section>

          {/* Section 7 - Case study */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              7. Gerçek Bir Sipariş Hikayesi: Beklenti ile Sonuç Ne Kadar Örtüştü?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Vaka analizini soyut bir örnekle değil, gerçek bir müşteri deneyimiyle anlatalım.
              Atölyemizden iki ayrı özel gün için art arda pasta sipariş eden bir aile, ilk
              siparişlerinde hem görsel tasarımdan hem lezzetten memnun kaldıklarını belirtip kısa
              süre sonra ikinci bir kutlama için tekrar bize ulaştı. Onlarla yaptığımız görüşmede
              en çok merak ettikleri şey, ilk pastadaki figürlerin ağırlığının kek kısmını nasıl
              etkileyeceğiydi &mdash; çünkü daha önce başka bir yerden aldıkları şeker hamurlu bir
              pastada kek kısmının kuru kaldığını deneyimlemişlerdi.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Biz bu siparişte pandispanyayı sertleştirmek yerine, figürleri hafif strafor destekli
              ayrı bir zeminde hazırlayıp pastanın üzerine son aşamada yerleştirdik. Böylece kek
              katmanı doğal nem oranını korudu, figürler de düşme riski olmadan yerini aldı. Sonuç:
              hem tasarım hem lezzet beklentisi aynı anda karşılandı ve aile, ikinci kutlamada da
              &ldquo;geçen sefer hem görüntü hem tat güzeldi, bu sefer de aynı dengeyi
              istiyoruz&rdquo; diyerek bize geri döndü.
            </p>
            <div className="mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed italic">
                &ldquo;İki ayrı kutlama için iki defa pasta sipariş verdik. İki pastayı da ailecek
                çok beğendik, teşekkür ederiz. Tasarım işçiliği kadar tadı da çok lezzetliydi.&rdquo;
              </p>
              <p className="mt-3 font-inter font-semibold text-dark text-sm">
                &mdash; Fatih Yılmaz, Google Yorumları
              </p>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-6">
              Benzer bir geri bildirimi, tasarımı fotoğrafla anlatan müşterilerimizden de sık
              alıyoruz. Yakın tarihli bir siparişimizde müşterimiz bize referans bir fotoğraf
              göndermişti; teslimat sonrası yorumu şuydu:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed italic">
                &ldquo;Attığım fotoğraftan daha güzel bir pasta, elinize emeğinize sağlık.&rdquo;
              </p>
              <p className="mt-3 font-inter font-semibold text-dark text-sm">
                &mdash; Ercan Erol, Google Yorumları
              </p>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-6">
              Bu örnekler aslında sektördeki genel bir yanılgıyı da çürütüyor: &ldquo;şeker hamurlu
              pasta = lezzetsiz pasta&rdquo; formülü zorunlu bir denklem değil, doğru teknik
              tercihlerin sonucu değişebilen bir denklem. Bir pastanın gerçek başarısı, teslimat
              anındaki ilk izlenimden değil, kutlama bittikten günler sonra &ldquo;o pasta gerçekten
              güzeldi&rdquo; denip denmediğinden anlaşılıyor.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu noktada şunu da eklemek isteriz: butik pastacılıkta &ldquo;vitrin güzelliği&rdquo;
              ile &ldquo;damak testi&rdquo; arasındaki fark, aslında işin ustalık kısmını
              oluşturuyor. Sıradan bir üretimde bu iki unsuru aynı anda yakalamak zor olabilir;
              çünkü figür ağırlığı arttıkça kek yapısını sağlamlaştırma isteği doğar, bu da lezzeti
              riske atar. Biz bu dengeyi, figürlerin büyük bir kısmını pastadan bağımsız ayrı bir
              zeminde hazırlayıp son aşamada birleştirerek koruyoruz.
            </p>
          </section>

          {/* Section 8 - Allergies */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              8. Alerji, Hassasiyet ve Şekersiz Alternatifler
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Her damak tadı ve her sağlık durumu aynı değil. Bu yüzden sipariş sürecinde şu
              bilgileri paylaşmanızı öneriyoruz:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#8226;</span>
                  <span>Gluten hassasiyeti varsa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#8226;</span>
                  <span>Yumurta, süt veya fındık/fıstık alerjisi varsa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#8226;</span>
                  <span>Şeker kısıtlaması (diyabet, düşük şekerli beslenme) varsa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink shrink-0">&#8226;</span>
                  <span>Dini veya kişisel nedenlerle içerik tercihleriniz varsa</span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu bilgileri sipariş sırasında WhatsApp üzerinden bize ilettiğinizde, içeriği ona göre
              şekersiz ya da daha hafif bir alternatifle uyarlayabiliyoruz. Amacımız herkesin,
              endişesiz bir şekilde kendi pastasının tadını çıkarabilmesi.
            </p>
          </section>

          {/* Section 9 - Storage */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              9. Şeker Hamurlu Pastayı Nasıl Saklamalı, Ne Zaman Kesmeli?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Sağlıklı ve lezzetli bir deneyim için pastayı doğru saklamak da en az malzeme kalitesi
              kadar önemli:
            </p>
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-dark/5">
              <ul className="space-y-3 font-inter text-dark/75 text-sm sm:text-base">
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Pastanızı teslim aldıktan sonra doğrudan güneş ışığı almayan, serin bir ortamda
                    bekletin.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Buzdolabında saklarken pastanın kapağını tam kapatmayın; yoğunlaşan nem şeker
                    hamurunun yüzeyinde lekelenmeye yol açabilir.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Kesim öncesi pastayı oda sıcaklığına yaklaşık 20-30 dakika önce çıkarmak, hem
                    kekin kıvamını hem de kaplamanın bıçak altında düzgün kesilmesini kolaylaştırır.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Kutlama gününden önceki gün teslim aldıysanız, pastayı kutusundan çıkarmadan
                    buzdolabında bekletmeniz en güvenli seçenektir.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Pastayı taşırken düz bir zeminde, sarsıntısız taşımaya özen gösterin; özellikle
                    katlı pastalarda ani frenleme ya da kasisler figürlerin yerinden oynamasına
                    neden olabilir.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 shrink-0">&#10003;</span>
                  <span>
                    Artan pasta dilimlerini bir sonraki gün tüketmeyi planlıyorsanız, hava almayan
                    bir kapta saklamak hem kek nemini korur hem de şeker hamurunun buzdolabı kokusu
                    almasını engeller.
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu öneriler küçük ayrıntılar gibi görünse de, aslında &ldquo;pasta neden ilk gün güzel
              ikinci gün kötü oldu&rdquo; şikâyetlerinin büyük kısmının cevabını oluşturuyor. Doğru
              saklama, doğru malzeme kadar lezzeti etkileyen bir faktör.
            </p>
          </section>

          {/* Section 10 - Trends */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              10. 2026&apos;da Şeker Hamurlu Pasta Trendleri Nasıl Değişti?
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              Son dönemde Gebze ve çevresinde aldığımız siparişlere baktığımızda net bir eğilim
              görüyoruz: müşteriler artık pastanın tamamen şeker hamuru kaplı, &ldquo;ağır&rdquo;
              görünümünden uzaklaşıp; daha ince kaplamalı, doğal renk tonlarında, sadece belirli bir
              bölgede figür kullanılan tasarımlara yöneliyor. Örneğin bir doğum günü pastasında
              pastanın tamamını şeker hamuruyla kaplamak yerine, krema tabanlı bir gövdenin üzerine
              sadece isim yazısı ve birkaç küçük figürü şeker hamurundan hazırlamak gibi. Bu
              yaklaşım hem daha hafif bir yeme deneyimi sunuyor hem de görsel olarak daha
              &ldquo;doğal&rdquo; bir estetik yaratıyor.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu değişim aslında sektördeki genel bir olgunlaşmanın işareti. Birkaç yıl önce
              &ldquo;ne kadar çok figür, o kadar etkileyici pasta&rdquo; anlayışı hakimken, şimdi
              müşteriler hem gözle hem damakla tatmin olmak istiyor. Gebze&apos;de{" "}
              <a
                href="/blog/dogum-gunu-pastasi-fikirleri"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                özel gün pastası
              </a>{" "}
              arayan ailelerle yaptığımız görüşmelerde de bu talebi sürekli duyuyoruz: &ldquo;güzel
              görünsün ama içi de gerçekten lezzetli olsun.&rdquo;
            </p>
          </section>

          {/* Section 11 - FAQ */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-6">
              11. Sıkça Sorulan Sorular
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
            <p className="font-inter text-dark/70 text-sm sm:text-base leading-relaxed mt-6">
              Daha fazla soru için{" "}
              <a
                href="/sikca-sorulan-sorular"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Sıkça Sorulan Sorular
              </a>{" "}
              sayfamızı inceleyebilir, farklı kaplama ve üretim yaklaşımlarını karşılaştırmak için{" "}
              <a
                href="/blog/butik-pasta-ile-pastane-arasindaki-farklar"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Butik Pasta ile Pastane Arasındaki Farklar
              </a>{" "}
              yazımızı okuyabilirsiniz. İlk kez sipariş verecekseniz{" "}
              <a
                href="/blog/ozel-tasarim-pasta-siparis-rehberi"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Özel Tasarım Pasta Nasıl Sipariş Edilir?
              </a>{" "}
              rehberimiz süreci adım adım anlatıyor.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mt-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-dark mb-4">
              Sonuç: Doğru Soru &ldquo;Sağlıklı mı&rdquo; Değil, &ldquo;Nerede Yapıldı&rdquo; Olmalı
            </h2>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed">
              <strong>Şeker hamurlu pasta sağlıklı mı</strong> sorusunun cevabı, malzemenin ve
              üretimin kalitesine bağlı &mdash; genel olarak evet, güvenle tüketilebilir. Lezzetli
              olup olmayacağı sorusunun cevabı ise tamamen işçilikte gizli: ince kaplama, kaliteli
              iç dolgu ve taze malzeme bir araya geldiğinde şeker hamurlu pasta hem göze hem damağa
              hitap eder.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Bu yazıda anlattığımız her detay &mdash; malzeme seçimi, kaplama kalınlığı, figür
              destek teknikleri, saklama koşulları &mdash; aslında tek bir amaca hizmet ediyor:
              sipariş verdiğiniz pastanın kutudan çıktığı an değil, misafirleriniz dilimi yediği an
              başarılı sayılması. Butik pasta dünyasında görsellik elbette önemli, ama bizim için
              asıl ölçüt her zaman tabakta kalan tat oldu.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Atölyemiz Gebze Arapçeşme Mahallesi&apos;nde yer alıyor ve teslimatlarımızı buradan,
              kararlaştırılan saatte yüz yüze gerçekleştiriyoruz.{" "}
              <a
                href="/gebze-butik-pasta"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Gebze
              </a>
              &apos;nin yanı sıra{" "}
              <a
                href="/darica-butik-pasta"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Darıca
              </a>
              ,{" "}
              <a
                href="/cayirova-butik-pasta"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Çayırova
              </a>
              ,{" "}
              <a
                href="/tuzla-butik-pasta"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Tuzla
              </a>{" "}
              ve{" "}
              <a
                href="/pendik-butik-pasta"
                className="text-pink-dark font-medium underline underline-offset-4 hover:text-pink transition-colors"
              >
                Pendik
              </a>
              &apos;ten gelen müşterilerimiz de atölyemizi ziyaret ederek pastalarını teslim
              alabiliyor; bu sayede pastanızın son halini görme ve varsa küçük rötuşları bizzat
              onaylama fırsatınız da oluyor.
            </p>
            <p className="font-inter text-dark/80 text-base sm:text-lg leading-relaxed mt-4">
              Kargo veya adrese teslimat yerine yüz yüze teslimatı tercih etmemizin sebebi de
              aslında bu yazının konusuyla birebir bağlantılı: özellikle sıcak havada veya uzun
              mesafede taşınan şeker hamurlu pastalarda figür kayması, yüzey terlemesi gibi riskler
              artıyor. Atölyeden elden teslim, pastanızın atölyeden çıktığı haliyle sofranıza
              ulaşmasını garanti ediyor.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-light-pink to-cream rounded-2xl border border-pink/20 text-center">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark">
              Hem Güzel Hem Lezzetli Bir Pasta İster misiniz?
            </h2>
            <p className="mt-2 font-inter text-dark/70 text-sm sm:text-base">
              Gebze&apos;de özel tasarım bir pasta düşünüyorsanız, hem tasarımın hem lezzetin bir
              arada olduğu bir deneyim için WhatsApp üzerinden bize ulaşabilir, hayalinizdeki
              pastayı birlikte planlayabiliriz.
            </p>
            <a
              href="https://wa.me/905345687783"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-blue hover:bg-blue/85 text-white px-8 py-3 rounded-full font-inter text-sm font-semibold transition-all hover:shadow-lg"
            >
              WhatsApp ile Sipariş Ver
            </a>
          </section>

          <div className="mt-8 pt-6 border-t border-dark/10">
            <p className="font-inter text-dark/40 text-xs">
              Bu içerik Miss Butik Pasta tarafından hazırlanmıştır. Gebze&apos;nin önde gelen butik
              pasta atölyesi olarak, tüm pasta siparişlerinizde el emeği ve kaliteyi ön planda
              tutuyoruz. Son güncelleme: Ağustos 2026.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
