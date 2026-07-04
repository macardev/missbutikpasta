export const services = [
  {
    name: "Doğum Günü Pastası",
    desc: "Kişiye özel temalı doğum günü pastaları. Taze malzemelerle el yapımı, butik üretim.",
  },
  {
    name: "Nişan Pastası",
    desc: "Özel nişan törenleri için zarif tasarım pastalar.",
  },
  {
    name: "Düğün Pastası",
    desc: "Katlı ve figürlü düğün pastaları. Hayalinizdeki konsepte uygun tasarımlar.",
  },
  {
    name: "Özel Tasarım Pasta",
    desc: "Tamamen size özel, sıfırdan hazırlanan butik pastalar.",
  },
  {
    name: "Yıl Dönümü Pastası",
    desc: "Kutlamalar için özel pasta tasarımları.",
  },
  {
    name: "Baby Shower Pastası",
    desc: "Baby shower organizasyonları için özel tasarım pastalar.",
  },
  {
    name: "Cinsiyet Açıklama Pastası",
    desc: "Cinsiyet açıklama partileri için sürpriz tasarım pastalar.",
  },
  {
    name: "Evlilik Teklifi Pastası",
    desc: "Unutulmaz bir evlilik teklifi için romantik tasarım pastalar.",
  },
  {
    name: "Sevgililer Günü Pastası",
    desc: "Sevgililer Günü'ne özel romantik ve kişiye özel pasta tasarımları.",
  },
];

export interface CityData {
  slug: string;
  city: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  distance: string;
  travelTime: string;
  definition: string;
  orderIntro: string;
  faqs: { q: string; a: string }[];
}

export const cities: CityData[] = [
  {
    slug: "gebze-butik-pasta",
    city: "Gebze",
    title: "Gebze'de Butik Pasta | Özel Tasarım Pasta Atölyesi | Miss Butik Pasta",
    h1: "Gebze'de Butik Pasta: Özel Tasarım Pastalar",
    metaDescription:
      "Gebze Arapçeşme'de butik pasta atölyesi. Doğum günü, nişan, düğün, baby shower pastaları ve özel tasarım tatlılar. 200+ özel pasta, %100 el yapımı.",
    keywords: [
      "gebze butik pasta",
      "gebze özel tasarım pasta",
      "gebze doğum günü pastası",
      "gebze pasta atölyesi",
      "gebze nişan pastası",
      "gebze düğün pastası",
      "gebze baby shower pastası",
    ],
    distance: "merkezde",
    travelTime: "–",
    definition:
      "Miss Butik Pasta, Gebze Arapçeşme Mahallesi'nde hizmet veren butik pasta atölyesidir. Doğum günü pastası, nişan pastası, düğün pastası, baby shower pastası ve özel tasarım pastalar olmak üzere her türlü kutlama için el yapımı, kişiye özel pastalar üretiyoruz. 2024'ten bu yana 200'den fazla özel pasta hazırladık.",
    orderIntro:
      "Gebze Arapçeşme'deki atölyemize gelerek pastanızı teslim alabilir veya randevu oluşturabilirsiniz.",
    faqs: [
      {
        q: "Gebze'de butik pasta siparişi nasıl verilir?",
        a: "WhatsApp hattımızdan bize ulaşarak pasta boyutu, lezzet ve tasarım detaylarını belirleyebilirsiniz. Gebze Arapçeşme'deki atölyemizden teslim almak üzere siparişinizi oluşturalım.",
      },
      {
        q: "Gebze'de doğum günü pastası ne kadar önceden sipariş edilmeli?",
        a: "En az 2-3 gün önceden sipariş vermenizi öneririz. Hafta sonları ve özel günlerde yoğunluk arttığı için mümkün olduğunca erken iletişime geçmeniz faydalı olacaktır.",
      },
      {
        q: "Gebze'de özel tasarım pasta fiyatları ne kadar?",
        a: "Fiyatlandırma pasta boyutu, tasarım detayları ve kullanılan malzemelere göre değişir. En doğru fiyat bilgisi için pastanızın detaylarını WhatsApp üzerinden bizimle paylaşmanız yeterlidir.",
      },
      {
        q: "Miss Butik Pasta Gebze'de nerede?",
        a: "Arapçeşme Mahallesi, Namık Kemal Caddesi No:102 Kat:3, Gebze/Kocaeli adresindeyiz. Google Maps üzerinden konumumuza ulaşabilirsiniz.",
      },
      {
        q: "Gebze'de butik pastayla pastane pastası arasındaki fark nedir?",
        a: "Butik pastalar siparişe özel, el yapımı ve kişiselleştirilmiş ürünlerdir. Pastanelerde hazır satılan seri üretim pastaların aksine, her pastayı sıfırdan, sizin hayalinizdeki tasarıma göre hazırlıyoruz.",
      },
      {
        q: "Gebze'den pasta siparişi verirken hangi lezzetleri seçebilirim?",
        a: "Vanilyalı krema, çikolatalı ganaj (Belçika çikolatası), mevsim meyveli ve karamelli seçeneklerimiz bulunur. Dilerseniz özel diyet gereksinimlerinize göre de formülasyon yapabiliyoruz.",
      },
    ],
  },
  {
    slug: "darica-butik-pasta",
    city: "Darıca",
    title: "Darıca İçin Butik Pasta | Miss Butik Pasta Gebze",
    h1: "Darıca İçin Butik Pasta — Miss Butik Pasta Gebze",
    metaDescription:
      "Darıca'dan butik pasta siparişi vermek için Miss Butik Pasta Gebze. Doğum günü, nişan, düğün, baby shower pastaları. Darıca'ya 10 km, 15 dakika.",
    keywords: [
      "darıca butik pasta",
      "darıca doğum günü pastası",
      "darıca özel tasarım pasta",
      "darıca pasta siparişi",
      "darıca nişan pastası",
      "gebze butik pasta darıca",
    ],
    distance: "10 km",
    travelTime: "15 dakika",
    definition:
      "Darıca'dan butik pasta siparişi vermek mi istiyorsunuz? Miss Butik Pasta, Gebze Arapçeşme'deki atölyesinde sizler için özel tasarım pastalar hazırlıyor. Darıca'ya yalnızca 10 km mesafedeki atölyemizde doğum günü pastası, nişan pastası, düğün pastası, baby shower pastası ve daha birçok özel tasarımı el yapımı olarak üretiyoruz.",
    orderIntro:
      "Darıca'dan Gebze Arapçeşme'deki atölyemize yaklaşık 15 dakikada ulaşabilirsiniz. Siparişiniz hazır olduğunda size en uygun saatte teslim almak üzere bekliyoruz.",
    faqs: [
      {
        q: "Darıca'dan butik pasta siparişi nasıl verilir?",
        a: "WhatsApp üzerinden bizimle iletişime geçerek pasta boyutu, lezzet ve tasarım detaylarını belirleyin. Pastanız hazır olduğunda Darıca'dan Gebze Arapçeşme'deki atölyemize gelerek teslim alabilirsiniz.",
      },
      {
        q: "Darıca'dan Gebze'deki atölyenize ulaşım ne kadar sürer?",
        a: "Darıca merkezden atölyemize araçla yaklaşık 15 dakikada ulaşabilirsiniz. D-100 karayolu üzerinden Gebze Arapçeşme Mahallesi'ne kolayca gelebilirsiniz.",
      },
      {
        q: "Teslimat Darıca'ya yapılıyor mu?",
        a: "Teslimat hizmetimiz bulunmamaktadır. Siparişlerinizi Gebze Arapçeşme'deki atölyemizden teslim almanız gerekmektedir. Darıca'dan gelirken önceden haber vererek pastanızın hazır olmasını sağlayabiliriz.",
      },
      {
        q: "Darıca'da özel tasarım pasta yaptırmak için Gebze'ye gitmeye değer mi?",
        a: "Kesinlikle. 15 dakikalık yolculukla, seri üretim pastanelerde bulamayacağınız kişiye özel, el yapımı pastalara sahip olabilirsiniz. 200'den fazla özel pasta deneyimimizle hayalinizdeki tasarımı gerçeğe dönüştürüyoruz.",
      },
      {
        q: "Darıca'dan sipariş verirken nelere dikkat etmeliyim?",
        a: "Siparişinizi en az 2-3 gün önceden vermenizi öneririz. Teslim alma saatini atölyemize gelmeden önce WhatsApp üzerinden teyit ederek pastanızın taze bir şekilde hazır olmasını sağlayabilirsiniz.",
      },
      {
        q: "Darıca'da doğum günü pastası çeşitleriniz neler?",
        a: "Çiçek temalı zarif pastalardan çocuklar için karakter figürlü pastalara, modern geometrik tasarımlardan spor temalı pastalara kadar her zevke uygun seçenek sunuyoruz. Dilerseniz tamamen size özel bir tasarım da oluşturabiliriz.",
      },
    ],
  },
  {
    slug: "cayirova-butik-pasta",
    city: "Çayırova",
    title: "Çayırova İçin Butik Pasta | Miss Butik Pasta Gebze",
    h1: "Çayırova İçin Butik Pasta — Miss Butik Pasta Gebze",
    metaDescription:
      "Çayırova'dan butik pasta siparişi için Miss Butik Pasta Gebze. Doğum günü, nişan, düğün, baby shower pastaları. Çayırova'ya 8 km, 12 dakika.",
    keywords: [
      "çayırova butik pasta",
      "çayırova doğum günü pastası",
      "çayırova özel tasarım pasta",
      "çayırova pasta siparişi",
      "gebze butik pasta çayırova",
    ],
    distance: "8 km",
    travelTime: "12 dakika",
    definition:
      "Çayırova'dan butik pasta siparişi vermek için Miss Butik Pasta'nın Gebze Arapçeşme'deki atölyesine bekliyoruz. Çayırova'ya yalnızca 8 km mesafedeki atölyemizde doğum günü pastası, nişan pastası, düğün pastası ve baby shower pastası gibi tüm özel tasarım pastaları el yapımı olarak üretiyoruz. 2024'ten bu yana 200'den fazla özel pasta hazırladık.",
    orderIntro:
      "Çayırova'dan atölyemize yaklaşık 12 dakikada ulaşabilirsiniz. Siparişinizi WhatsApp üzerinden oluşturun, pastanız hazır olduğunda gelip teslim alın.",
    faqs: [
      {
        q: "Çayırova'dan butik pasta siparişi nasıl verilir?",
        a: "WhatsApp hattımızdan bize yazın, pasta boyutu ve tasarım detaylarını konuşalım. Pastanız hazır olduğunda Çayırova'dan Gebze Arapçeşme'deki atölyemize gelerek teslim alabilirsiniz.",
      },
      {
        q: "Çayırova'dan Gebze'deki atölyenize ulaşım ne kadar sürer?",
        a: "Çayırova merkezden Gebze Arapçeşme Mahallesi'ne araçla yaklaşık 12 dakikada ulaşabilirsiniz. D-100 karayolu üzerinden oldukça kolay bir güzergahtır.",
      },
      {
        q: "Çayırova'ya teslimat yapıyor musunuz?",
        a: "Teslimat hizmetimiz bulunmamaktadır. Tüm siparişler Gebze Arapçeşme'deki atölyemizden teslim alınmaktadır. Çayırova'ya olan yakınlığımız sayesinde kısa sürede gelip pastanızı alabilirsiniz.",
      },
      {
        q: "Çayırova'dan sipariş vermek için ne kadar önceden iletişime geçmeliyim?",
        a: "En az 2-3 gün önceden sipariş vermenizi öneririz. Özel tasarımlar ve figürlü pastalar için daha fazla süre gerekebilir. Yoğun dönemlerde mümkün olduğunca erken iletişime geçmeniz faydalı olacaktır.",
      },
      {
        q: "Çayırova'da çocuk doğum günü pastası yaptırmak istiyorum, seçenekleriniz neler?",
        a: "Hayvan figürlü, çizgi film karakterli, spor temalı ve masal kahramanlı pastalar çocuk doğum günlerinde en çok tercih edilen seçeneklerimizdir. Çocuğunuzun ilgi alanlarına göre tamamen kişiselleştirilmiş tasarımlar hazırlıyoruz.",
      },
    ],
  },
  {
    slug: "tuzla-butik-pasta",
    city: "Tuzla",
    title: "Tuzla İçin Butik Pasta | Miss Butik Pasta Gebze",
    h1: "Tuzla İçin Butik Pasta — Miss Butik Pasta Gebze",
    metaDescription:
      "Tuzla'dan butik pasta siparişi için Miss Butik Pasta Gebze. Doğum günü, nişan, düğün, baby shower pastaları. Tuzla'ya 15 km, yaklaşık 20 dakika.",
    keywords: [
      "tuzla butik pasta",
      "tuzla doğum günü pastası",
      "tuzla özel tasarım pasta",
      "tuzla pasta siparişi",
      "tuzla nişan pastası",
      "gebze butik pasta tuzla",
    ],
    distance: "15 km",
    travelTime: "20 dakika",
    definition:
      "Tuzla'dan butik pasta siparişi vermek için Miss Butik Pasta'nın Gebze Arapçeşme'deki atölyesi ideal bir seçenek. Tuzla'ya yaklaşık 15 km mesafedeki atölyemizde doğum günü pastası, nişan pastası, düğün pastası, baby shower pastası ve özel tasarım pastalar olmak üzere her türlü kutlama için el yapımı, kişiye özel üretim yapıyoruz. İstanbul Anadolu Yakası'ndan da rahatça ulaşılabilir konumdayız.",
    orderIntro:
      "Tuzla'dan atölyemize araçla yaklaşık 20 dakikada ulaşabilirsiniz. Siparişinizi WhatsApp üzerinden oluşturun, pastanız hazır olduğunda gelip teslim alın.",
    faqs: [
      {
        q: "Tuzla'dan butik pasta siparişi nasıl verilir?",
        a: "WhatsApp hattımızdan bize ulaşarak pasta boyutu, lezzet ve tasarım detaylarını belirleyin. Pastanız hazır olduğunda Tuzla'dan Gebze Arapçeşme'deki atölyemize gelerek teslim alabilirsiniz.",
      },
      {
        q: "Tuzla'dan Gebze'deki atölyenize ulaşım ne kadar sürer?",
        a: "Tuzla merkezden atölyemize araçla yaklaşık 20 dakikada ulaşabilirsiniz. E-5 karayolunu kullanarak Gebze Arapçeşme'ye kolayca gelebilirsiniz.",
      },
      {
        q: "İstanbul Tuzla'dan pasta siparişi vermek mantıklı mı?",
        a: "Kesinlikle. Tuzla, Gebze'ye en yakın İstanbul ilçelerinden biridir ve 20 dakikalık yolculukla butik pasta kalitesine ulaşabilirsiniz. Seri üretim pastanelere göre çok daha özel ve kişiselleştirilmiş pastalar hazırlıyoruz.",
      },
      {
        q: "Tuzla'dan siparişimi ne zaman teslim alabilirim?",
        a: "Siparişinizin hazır olacağı gün ve saati WhatsApp üzerinden size bildiriyoruz. Teslim alma saatini size uygun şekilde planlayabiliriz.",
      },
      {
        q: "Tuzla'da bebek duşu (baby shower) pastası yaptırabilir miyim?",
        a: "Evet, baby shower pastaları en çok tercih edilen ürünlerimiz arasındadır. Pembe-mavi cinsiyet temalı, bebek figürlü ve zarif çiçek detaylı tasarımlarımızla Tuzla'dan gelen müşterilerimize hizmet veriyoruz.",
      },
      {
        q: "Tuzla çevresinde butik pasta arayanlar için öneriniz nedir?",
        a: "Gebze'deki atölyemiz Tuzla'ya yalnızca 20 dakika mesafededir. Doğum günü, nişan, düğün gibi özel günleriniz için pastanızı önceden sipariş edip belirlediğiniz saatte teslim alabilirsiniz. 200'den fazla özel pasta deneyimimizle hayalinizdeki tasarımı gerçeğe dönüştürüyoruz.",
      },
    ],
  },
  {
    slug: "pendik-butik-pasta",
    city: "Pendik",
    title: "Pendik İçin Butik Pasta | Miss Butik Pasta Gebze",
    h1: "Pendik İçin Butik Pasta — Miss Butik Pasta Gebze",
    metaDescription:
      "Pendik'ten butik pasta siparişi için Miss Butik Pasta Gebze. Doğum günü, nişan, düğün, baby shower pastaları. Pendik'e 25 km, yaklaşık 30 dakika.",
    keywords: [
      "pendik butik pasta",
      "pendik doğum günü pastası",
      "pendik özel tasarım pasta",
      "pendik pasta siparişi",
      "pendik nişan pastası",
      "gebze butik pasta pendik",
    ],
    distance: "25 km",
    travelTime: "30 dakika",
    definition:
      "Pendik'ten butik pasta siparişi vermek isteyenler için Miss Butik Pasta, Gebze Arapçeşme'de hizmet veriyor. Pendik'e yaklaşık 25 km mesafedeki atölyemizde doğum günü pastası, nişan pastası, düğün pastası, baby shower pastası ve özel tasarım pastalar üretiyoruz. İstanbul Anadolu Yakası'ndan gelen müşterilerimiz için kolay ulaşılabilir konumdayız.",
    orderIntro:
      "Pendik'ten atölyemize araçla yaklaşık 30 dakikada ulaşabilirsiniz. Siparişinizi WhatsApp üzerinden oluşturun, pastanız hazır olduğunda gelip teslim alın.",
    faqs: [
      {
        q: "Pendik'ten butik pasta siparişi nasıl verilir?",
        a: "WhatsApp hattımızdan bize yazın, pasta boyutu ve tasarım detaylarını konuşalım. Pastanız hazır olduğunda Pendik'ten Gebze Arapçeşme'deki atölyemize gelerek teslim alabilirsiniz.",
      },
      {
        q: "Pendik'ten Gebze'deki atölyenize ulaşım ne kadar sürer?",
        a: "Pendik merkezden atölyemize araçla yaklaşık 30 dakikada ulaşabilirsiniz. E-5 veya TEM otoyolunu kullanarak Gebze'ye rahatça gelebilirsiniz.",
      },
      {
        q: "İstanbul Pendik'ten pasta siparişi vermek mantıklı mı?",
        a: "Evet, Pendik'ten 30 dakikalık yolculukla seri üretim pastanelerde bulamayacağınız kişiye özel, el yapımı pastalara sahip olabilirsiniz. Özellikle nişan, düğün ve baby shower gibi özel organizasyonlar için butik pasta tercih etmek fark yaratır.",
      },
      {
        q: "Pendik'ten sipariş verirken teslim alma saatini planlayabilir miyiz?",
        a: "Kesinlikle. Sipariş oluştururken teslim almak istediğiniz gün ve saat aralığını belirtebilirsiniz. Pastanız hazır olduğunda WhatsApp üzerinden size haber veriyoruz.",
      },
      {
        q: "Pendik'te nişan pastası arayanlar için öneriniz nedir?",
        a: "Nişan pastaları özel tasarım konusunda en çok tercih edilen ürünlerimizdendir. Zarif çiçek detayları, çift isimli plakalar ve özel temalarla hazırladığımız nişan pastaları için Pendik'ten Gebze'deki atölyemize bekliyoruz.",
      },
      {
        q: "Pendik'ten pasta siparişi için ne kadar önceden iletişime geçmeliyim?",
        a: "En az 3-4 gün önceden sipariş vermenizi öneririz. Düğün ve nişan gibi büyük organizasyonlar için 1-2 hafta öncesinden iletişime geçmek, hayalinizdeki pastanın kusursuz hazırlanması için idealdir.",
      },
    ],
  },
];
