import type { Metadata } from "next";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Butik pasta nedir? Normal pastadan farkı ne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Butik pasta, kişiye özel olarak tasarlanan, el yapımı pastalardır. Seri üretim pastanelerin aksine, her pasta siparişe özel hazırlanır. Miss Butik Pasta'da her pastayı sıfırdan, taze malzemelerle, sizin hayallerinize göre tasarlıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Özel tasarım pasta siparişi nasıl verilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Web sitemizdeki galeriden beğendiğiniz modeli seçin veya kendi tasarım fikrinizi belirleyin. Ardından WhatsApp üzerinden bizimle iletişime geçerek pasta boyutu, lezzeti, tasarım detayları ve teslim alma tarihini belirleyin."
      }
    },
    {
      "@type": "Question",
      "name": "Siparişimi ne kadar önceden vermeliyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Özel tasarım pastalarımız siparişe özel hazırlandığı için en az 2-3 gün önceden sipariş vermenizi öneririz. Yoğun dönemlerde daha erken iletişime geçmeniz faydalı olacaktır."
      }
    },
    {
      "@type": "Question",
      "name": "Özel tasarım pasta fiyatları nasıl belirleniyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fiyatlandırma; pasta boyutu, tasarımın detay ve karmaşıklığı, kullanılan malzemelerin kalitesi ve figür sayısına göre belirlenmektedir. En doğru fiyat bilgisi için pastanızın detaylarını WhatsApp üzerinden bizimle paylaşmanız yeterlidir."
      }
    },
    {
      "@type": "Question",
      "name": "En az kaç kişilik sipariş verebilirim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Butik pastalarımız minimum 8-10 kişiliktir. Daha küçük gruplar için maket kat ekleyerek görsel olarak büyük pasta görünümü elde edebiliriz. Katlı pastalar ise minimum 15 kişilik sipariş edilebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Pastalarınızda hangi malzemeler kullanılıyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pastalarımızda taze yumurta, süt, tereyağı ve birinci sınıf un gibi doğal malzemeler kullanıyoruz. Çikolatalı pastalarımızda Belçika çikolatası tercih ediyoruz. Tüm malzemelerimiz günlük olarak temin edilir."
      }
    },
    {
      "@type": "Question",
      "name": "Teslimat hizmetiniz var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teslimat hizmetimiz bulunmamaktadır. Siparişlerinizi Gebze Arapçeşme Mahallesi'ndeki atölyemizden belirlediğimiz saatte teslim alabilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Şeker hamurlu pasta sağlıklı mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pastalarımızda kullandığımız şeker hamuru, gıda güvenliği standartlarına uygun, kontrollü şekilde kullanılmaktadır. Dilerseniz şekersiz veya daha hafif alternatifler sunabiliyoruz. Alerjen bilgileri için sipariş sırasında bize bildirimde bulunmanız yeterlidir."
      }
    },
    {
      "@type": "Question",
      "name": "Siparişimde değişiklik veya iptal yapabilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tasarım ve hazırlık süreci başlamadan önce değişiklik yapılabilir. İptallerde ödemenin durumu siparişin hazırlık aşamasına göre değerlendirilir. Detaylı bilgi için WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Aynı gün sipariş verebilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stoklu üretim yapmadığımız ve her pastayı siparişe özel hazırladığımız için aynı gün sipariş kabul edemiyoruz. Acil durumlarda WhatsApp üzerinden bizimle iletişime geçerek müsaitlik durumunu sorgulayabilirsiniz."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Miss Butik Pasta",
  description: "Butik pasta, özel tasarım pasta siparişi, fiyatlar, malzemeler ve teslimat hakkında en sık sorulan soruların cevapları. Gebze butik pasta atölyesi.",
  keywords: [
    "butik pasta sık sorulan sorular",
    "özel tasarım pasta nasıl sipariş edilir",
    "butik pasta fiyatları",
    "gebze butik pasta",
    "pasta siparişi önceden verme",
    "şeker hamurlu pasta sağlıklı mı",
    "butik pasta kaç kişilik",
  ],
  openGraph: {
    title: "Sıkça Sorulan Sorular | Miss Butik Pasta",
    description: "Butik pasta ve özel tasarım pasta hakkında merak ettiğiniz her şey.",
  },
};

const faqs = [
  {
    question: "Butik pasta nedir? Normal pastadan farkı ne?",
    answer: "Butik pasta, kişiye özel olarak tasarlanan, tamamen el yapımı pastalardır. Seri üretim pastanelerin vitrinlerinde hazır bekleyen pastaların aksine, her butik pasta siparişe özel olarak sıfırdan hazırlanır. Miss Butik Pasta'da her pastayı taze malzemelerle, sizin hayalinizdeki tasarıma göre özenle üretiyoruz. Böylece hem görsel hem de lezzet açısından benzersiz bir sonuç elde ediyorsunuz."
  },
  {
    question: "Özel tasarım pasta siparişi nasıl verilir?",
    answer: "Sipariş vermek oldukça kolay! Öncelikle web sitemizdeki galerimizi inceleyerek beğendiğiniz modelden ilham alabilir veya tamamen kendi tasarım fikrinizi bizimle paylaşabilirsiniz. Ardından WhatsApp hattımızdan bize ulaşarak pasta boyutunu, istediğiniz lezzeti, tasarım detaylarını ve teslim alma tarihinizi belirlemeniz yeterli. Sizinle birlikte tüm detayları netleştirdikten sonra pastanızı özenle hazırlamaya başlıyoruz."
  },
  {
    question: "Siparişimi ne kadar önceden vermeliyim?",
    answer: "Özel tasarım pastalarımız siparişe özel hazırlandığı için en az 2-3 gün önceden sipariş vermenizi öneririz. Hafta sonları, bayramlar ve özel günler gibi yoğun dönemlerde taleplere yetişebilmek adına mümkün olduğunca erken iletişime geçmeniz, istediğiniz tasarımın hazırlanabilmesi açısından faydalı olacaktır. Acil siparişleriniz için WhatsApp üzerinden bizimle iletişime geçerek müsaitlik durumunu sorgulayabilirsiniz."
  },
  {
    question: "Özel tasarım pasta fiyatları nasıl belirleniyor?",
    answer: "Fiyatlandırmamız birden fazla faktöre göre şekillenmektedir: pasta boyutu (kişi sayısı), tasarımın detay seviyesi ve karmaşıklığı, kullanılan malzemelerin kalitesi, figür sayısı ve işçilik süresi. Her pasta benzersiz olduğu için standart bir fiyat listesi yerine, sipariş detaylarınıza göre size özel fiyatlandırma sunuyoruz. En doğru fiyat bilgisi için pastanızın konseptini WhatsApp üzerinden bizimle paylaşmanız yeterlidir."
  },
  {
    question: "En az kaç kişilik sipariş verebilirim?",
    answer: "Butik pastalarımız minimum 8-10 kişiliktir. Daha küçük gruplar için endişelenmeyin — maket kat ekleyerek pastanızın görsel olarak daha büyük ve etkileyici görünmesini sağlayabiliyoruz. Katlı pastalarımız ise minimum 15 kişilik olarak sipariş edilebilir. Dilerseniz pastanızın yanına cupcake, kurabiye gibi ek ürünler de ekleyerek sevdiklerinize unutulmaz bir sunum hazırlayabilirsiniz."
  },
  {
    question: "Pastalarınızda hangi malzemeler kullanılıyor?",
    answer: "Pastalarımızda taze yumurta, süt, tereyağı ve birinci sınıf un gibi doğal malzemeler kullanıyor, hazır karışımlardan kesinlikle uzak duruyoruz. Çikolatalı pastalarımızda birinci kalite Belçika çikolatası tercih ediyoruz. İç dolgu seçeneklerimiz arasında vanilyalı krema, çikolatalı ganaj, mevsimine göre taze meyveler (çilek, frambuaz, muz) ve özel tariflerimiz bulunur. Tüm malzemelerimizi günlük olarak temin ediyor, hijyen kurallarına azami özen gösteriyoruz."
  },
  {
    question: "Teslimat hizmetiniz var mı?",
    answer: "Teslimat hizmetimiz bulunmamaktadır. Siparişlerinizi Gebze Arapçeşme Mahallesi'ndeki atölyemizden, kararlaştırdığımız saatte teslim alabilirsiniz. Atölyemizden pastanızı teslim alırken son halini görme ve varsa son rötuşları bizzat onaylama fırsatınız da olur."
  },
  {
    question: "Şeker hamurlu pasta sağlıklı mı?",
    answer: "Pastalarımızda kullandığımız şeker hamuru, gıda güvenliği standartlarına tamamen uygun, kontrollü koşullarda üretilmiş malzemelerdir. Renklendiriciler gıda sınıfı olup sağlığa zararlı değildir. Dilerseniz sizin için şekersiz veya daha hafif alternatifler hazırlayabiliyoruz. Ayrıca herhangi bir alerjiniz varsa lütfen sipariş sırasında bize bildirin — içeriği buna göre düzenleyelim."
  },
  {
    question: "Siparişimde değişiklik veya iptal yapabilir miyim?",
    answer: "Siparişinizde değişiklik yapmak isterseniz, tasarım ve hazırlık süreci başlamadan önce bizimle iletişime geçmeniz gerekmektedir. Figürler hazırlandıktan sonra tasarım değişikliği mümkün olmayabilir. İptallerde ise, yapılan ödemenin durumu siparişin hazırlık aşamasına göre değerlendirilir. Detaylı bilgi ve talepleriniz için WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Aynı gün sipariş verebilir miyim?",
    answer: "Stoklu üretim yapmadığımız ve her pastayı siparişe özel olarak sıfırdan hazırladığımız için maalesef aynı gün sipariş kabul edemiyoruz. Ancak acil bir durumunuz varsa WhatsApp üzerinden bizimle iletişime geçerek müsaitlik durumumuzu sorgulayabilirsiniz. Yoğunluğumuza bağlı olarak size yardımcı olmaya çalışırız."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-dark mb-2">
          Sıkça Sorulan Sorular
        </h1>
        <p className="text-dark/50 font-inter text-sm mb-10">
          Butik pasta ve özel tasarım pastalar hakkında merak ettikleriniz.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-dark/5 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 cursor-pointer list-none font-inter font-medium text-dark text-sm sm:text-base leading-snug">
                <span>{faq.question}</span>
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
              <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                <p className="font-inter text-dark/75 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 p-5 sm:p-6 bg-white rounded-xl border border-dark/5 text-center">
          <p className="font-inter text-dark/75 text-sm sm:text-base">
            Başka bir sorunuz mu var?{" "}
            <a
              href="https://wa.me/905345687783"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink hover:text-pink-dark font-semibold underline underline-offset-2 transition-colors"
            >
              WhatsApp&apos;tan bize ulaşın
            </a>
            , size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
      </div>
    </main>
  );
}
