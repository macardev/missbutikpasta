import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Miss Butik Pasta",
  description: "Miss Butik Pasta web sitesinde kullanılan çerezler hakkında bilgilendirme.",
  robots: { index: false, follow: false },
};

export default function CerezPolitikasiPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-dark mb-2">
          Çerez Politikası
        </h1>
        <p className="text-dark/50 font-inter text-sm mb-10">
          Son güncelleme: Mayıs 2026
        </p>

        <div className="space-y-8 font-inter text-dark/80 text-base leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              1. Çerez Nedir?
            </h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla 
              cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin 
              daha verimli çalışmasını sağlar ve size daha iyi bir kullanıcı deneyimi sunar.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              2. Kullandığımız Çerez Türleri
            </h2>

            <h3 className="font-playfair text-lg font-semibold text-dark mt-4 mb-2">
              Zorunlu Çerezler
            </h3>
            <p>
              Bu çerezler, web sitemizin düzgün çalışması için gereklidir. Site üzerinde 
              gezinmenizi ve güvenli alanlara erişmenizi sağlar. Bu çerezler olmadan 
              sitemizin bazı bölümleri düzgün çalışmayabilir.
            </p>

            <h3 className="font-playfair text-lg font-semibold text-dark mt-5 mb-2">
              Performans ve Analitik Çerezler
            </h3>
            <p>
              Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığına dair anonim 
              istatistikler toplar (hangi sayfaların ziyaret edildiği, sitede geçirilen 
              süre vb.). Bu bilgiler, sitemizi iyileştirmek ve kullanıcı deneyimini 
              geliştirmek için kullanılır.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              3. Çerezlerin Yönetimi
            </h2>
            <p>
              Çerez tercihlerinizi tarayıcı ayarlarınızdan dilediğiniz zaman 
              değiştirebilirsiniz. Çoğu tarayıcı, çerezleri otomatik olarak kabul eder, 
              ancak ayarlarınızı değiştirerek çerezleri reddedebilir veya 
              uyarı alabilirsiniz.
            </p>
            <p className="mt-3">
              Çerezleri devre dışı bırakmak için tarayıcınızın yardım menüsünde yer alan 
              talimatları izleyebilir veya aşağıdaki bağlantıları kullanabilirsiniz:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-pink-dark underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-pink-dark underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-pink-dark underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-tarayicisinda-cerezleri-silme-639d4740-1b1c-4e2e-87a7-1b3f5d20e0f1" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-pink-dark underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              4. İletişim
            </h2>
            <p>
              Çerez politikamız hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
            </p>
            <div className="mt-4 p-4 bg-white rounded-xl border border-dark/5">
              <p className="font-semibold text-dark">Miss Butik Pasta</p>
              <p className="mt-1">WhatsApp: 0534 568 77 83</p>
              <p className="mt-1">Adres: Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:7 Kat:4 D:8, Gebze/Kocaeli</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
