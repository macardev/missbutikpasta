import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Miss Butik Pasta",
  description: "Miss Butik Pasta olarak kişisel verilerinizin korunmasına önem veriyoruz. 6698 sayılı KVKK kapsamında aydınlatma metnimiz.",
  robots: { index: false, follow: false },
};

export default function KVKKPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-dark mb-2">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-dark/50 font-inter text-sm mb-10">
          Son güncelleme: Mayıs 2026
        </p>

        <div className="space-y-8 font-inter text-dark/80 text-base leading-relaxed">
          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              1. Veri Sorumlusu Kimliği
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, 
              kişisel verileriniz Miss Butik Pasta (Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:16 D:8, 
              Gebze/Kocaeli) tarafından veri sorumlusu sıfatıyla işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              2. İşlenen Kişisel Veriler ve Toplanma Yöntemi
            </h2>
            <p>
              Kişisel verileriniz, WhatsApp üzerinden iletişim kurmanız, telefonla aramanız, 
              e-posta göndermeniz veya web sitemizdeki iletişim formunu doldurmanız halinde 
              aşağıdaki kategorilerde toplanabilmektedir:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Kimlik bilgileri (ad, soyad)</li>
              <li>İletişim bilgileri (telefon numarası, e-posta adresi, adres)</li>
              <li>Müşteri işlem bilgileri (sipariş detayları, talep ve şikayetler)</li>
              <li>Web sitesi ziyaret bilgileri (çerezler aracılığıyla)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri
            </h2>
            <p>
              Kişisel verileriniz aşağıdaki amaçlarla KVKK&rsquo;nın 5. ve 6. maddelerinde 
              belirtilen kişisel veri işleme şartları dahilinde işlenmektedir:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sipariş ve taleplerinizin alınması, değerlendirilmesi ve iletişim kurulması</li>
              <li>Ürün ve hizmetlerimizin sunulması, teslimat süreçlerinin yürütülmesi</li>
              <li>Müşteri memnuniyetinin ölçülmesi ve hizmet kalitesinin artırılması</li>
              <li>Talep ve şikayetlerinizin takibi ve yanıtlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi kapsamında; 
              hukuki yükümlülüklerimizi yerine getirmek amacıyla resmi merciler ve yetkili 
              kamu kurumları ile KVKK&rsquo;nın 8. ve 9. maddelerinde belirtilen kişisel veri 
              işleme şartları çerçevesinde paylaşılabilir. Bunun dışında kişisel verileriniz 
              açık rızanız olmaksızın üçüncü kişilerle paylaşılmaz.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              5. Veri Güvenliği
            </h2>
            <p>
              Kişisel verilerinizin hukuka aykırı olarak işlenmesini, erişilmesini ve 
              muhafazasını önlemek amacıyla gerekli teknik ve idari tedbirler alınmaktadır. 
              Web sitemiz üzerinden herhangi bir ödeme işlemi gerçekleştirilmemekte olup, 
              finansal verileriniz tarafımızca talep edilmemektedir.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              6. KVKK Madde 11 Kapsamında Haklarınız
            </h2>
            <p className="mb-2">
              KVKK&rsquo;nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK&rsquo;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>Aktarıldığı üçüncü kişilere yukarıdaki düzeltme/silme işlemlerinin bildirilmesini isteme,</li>
              <li>Otomatik sistemlerle analiz edilmesi nedeniyle aleyhinize bir sonuç çıkmasına itiraz etme,</li>
              <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-dark mb-3">
              7. Haklarınızı Kullanma Yöntemi
            </h2>
            <p>
              Yukarıda belirtilen haklarınıza ilişkin taleplerinizi, kimlik tespiti yapılmak 
              kaydıyla aşağıdaki iletişim kanalları üzerinden bize iletebilirsiniz. Talebiniz, 
              niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak 
              sonuçlandırılacaktır.
            </p>
            <div className="mt-4 p-4 bg-white rounded-xl border border-dark/5">
              <p className="font-semibold text-dark">İletişim Bilgileri:</p>
              <p className="mt-1">WhatsApp: 0536 369 80 00</p>
              <p className="mt-1">Adres: Arapçeşme Mah. Mevlana Cad. 1012/2 Sk. No:16 D:8, Gebze/Kocaeli</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
