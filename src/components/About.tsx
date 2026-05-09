import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative animate-fade-in-left">
            <div className="aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/pink-lotus-cake.webp"
                alt="Pembe Lotus Pastası"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gold/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-pink/20 rounded-full blur-xl" />
          </div>

          <div>
            <div className="animate-fade-in-up">
              <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
                Hakkımızda
              </p>
              <h2 id="about-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                El Emeği,{" "}
                <span className="text-pink">Butik Üretim</span>
              </h2>
            </div>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <p className="text-dark/75 font-inter text-base sm:text-lg leading-relaxed">
                Miss Butik Pasta olarak Gebze&apos;nin kalbinde, her pastayı bir
                sanat eseri olarak tasarlıyoruz. Aile tariflerinden ilham alarak,
                en kaliteli malzemelerle üretim yapıyoruz.
              </p>
              <p className="text-dark/75 font-inter text-base sm:text-lg leading-relaxed">
                Her sipariş özel bir hikaye. Doğum günü, nişan, düğün ya da
                sıradan bir gün... Her anı tatlandırmak için buradayız.
                Kişisel tasarımlarınız hayata geçiyoruz.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: "🌾", title: "Doğal Malzeme", desc: "Katkısız, taze içerikler" },
                { icon: "🎨", title: "Özel Tasarım", desc: "Hayalinizdeki pasta" },
                { icon: "💝", title: "Sevgiyle", desc: "El yapımı üretim" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white/50 rounded-xl p-4 sm:p-5 animate-scale-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <h3 className="mt-2 font-playfair font-semibold text-dark text-sm sm:text-base">{item.title}</h3>
                  <p className="text-dark/60 font-inter text-xs sm:text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
