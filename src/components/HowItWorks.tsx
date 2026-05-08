const steps = [
  {
    number: "01",
    icon: "🎨",
    title: "Tasarım",
    description:
      "WhatsApp üzerinden bizimle iletişime geçin. Hayalinizdeki pastayı anlatın, birlikte tasarlayalım.",
  },
  {
    number: "02",
    icon: "👩‍🍳",
    title: "Üretim",
    description:
      "En taze ve kaliteli malzemelerle, el emeğiyle pastanızı özenle hazırlıyoruz.",
  },
  {
    number: "03",
    icon: "🚗",
    title: "Teslimat",
    description:
      "Gebze içinde kapıda teslim veya dükkanımızdan alın. Özel gününüzde yanınızdayız.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-32 bg-cream"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <p className="text-pink-dark font-inter text-sm font-semibold uppercase tracking-widest mb-3">
            Süreç
          </p>
          <h2 id="how-it-works-heading" className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            Nasıl <span className="text-pink">Sipariş Verilir?</span>
          </h2>
          <p className="mt-4 text-dark/75 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sadece 3 kolay adımda hayalinizdeki pastaya kavuşun.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative" style={{ animationDelay: `${index * 0.15}s` }}>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-pink/40 to-transparent z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow animate-scale-in">
                <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink/10 text-pink-dark font-playfair font-bold text-lg sm:text-xl">
                  {step.number}
                </span>
                <div className="text-4xl sm:text-5xl mt-4">{step.icon}</div>
                <h3 className="mt-4 font-playfair font-semibold text-dark text-xl sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-dark/75 font-inter text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
