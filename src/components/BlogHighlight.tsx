import Link from "next/link";
import Image from "next/image";

export default function BlogHighlight() {
  return (
    <section className="py-10 sm:py-14 bg-cream" aria-labelledby="blog-highlight-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog/butik-pasta-ne-demek"
          className="group max-w-4xl mx-auto flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-dark/5 shadow-sm hover:shadow-md transition-all"
        >
          <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto bg-cream overflow-hidden shrink-0">
            <Image
              src="/images/white-golden-cake.webp"
              alt="Beyaz ve altın detaylı butik pasta"
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-pink-dark font-inter text-xs font-semibold uppercase tracking-widest mb-2">
              Blogdan · Yeni Yazı
            </p>
            <h2
              id="blog-highlight-heading"
              className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-dark leading-snug group-hover:text-pink transition-colors"
            >
              Butik Pasta Ne Demek? Anlamı ve Pastaneden Farkı
            </h2>
            <p className="mt-3 text-dark/70 font-inter text-sm sm:text-base leading-relaxed">
              Bir pastayı &ldquo;butik&rdquo; yapan 5 özellik ve butik pasta, pastane pastası,
              ev yapımı pasta karşılaştırma tablosu.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 font-inter text-sm font-semibold text-pink-dark">
              Yazıyı Oku
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
