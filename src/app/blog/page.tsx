import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Miss Butik Pasta — Gebze Pasta & Tasarım Rehberi",
  description:
    "Gebze'de butik pasta, doğum günü pastası fikirleri, özel tasarım pasta sipariş rehberi ve daha fazlası. Miss Butik Pasta blogunda pastayla ilgili her şey.",
  openGraph: {
    title: "Blog | Miss Butik Pasta",
    description: "Gebze butik pasta rehberi — doğum günü pastası fikirleri ve tasarım ipuçları.",
  },
};

const posts = [
  {
    slug: "dogum-gunu-pastasi-fikirleri",
    title: "Gebze'de Doğum Günü Pastası: 2026'nın En Popüler Tasarım Fikirleri",
    excerpt:
      "Doğum günü pastası mı arıyorsunuz? 2026'da öne çıkan pasta tasarımları, butik pasta trendleri ve Gebze'de özel tasarım pasta siparişi hakkında her şey.",
    image: "/images/birthday-cake.webp",
    date: "18 Haziran 2026",
    readTime: "5 dk",
  },
  {
    slug: "ozel-tasarim-pasta-siparis-rehberi",
    title: "Özel Tasarım Pasta Nasıl Sipariş Edilir? Adım Adım Rehber",
    excerpt:
      "İlk kez özel tasarım pasta mı sipariş edeceksiniz? Hayalinizdeki pastayı anlatmak, doğru boyutu seçmek ve sipariş sürecini yönetmek için kapsamlı rehber.",
    image: "/images/pink-detailed-cake.webp",
    date: "18 Haziran 2026",
    readTime: "4 dk",
  },
  {
    slug: "cocuk-dogum-gunu-pastasi-fikirleri",
    title: "Çocuk Doğum Günü Pastası Fikirleri: En Sevilen Tema ve Karakterler",
    excerpt:
      "Çocuğunuzun doğum günü için en özel pasta fikirleri. Hayvan figürleri, çizgi film karakterleri, spor temalı ve daha birçok yaratıcı tasarım.",
    image: "/images/mini-bear-cake.webp",
    date: "18 Haziran 2026",
    readTime: "5 dk",
  },
  {
    slug: "butik-pasta-ile-pastane-arasindaki-farklar",
    title: "Butik Pasta ile Pastane Arasındaki Farklar: Hangisi Sizin İçin Doğru?",
    excerpt:
      "Butik pasta ile klasik pastane arasındaki temel farklar: üretim süreci, malzeme kalitesi, tasarım özgürlüğü, fiyatlandırma ve daha fazlası.",
    image: "/images/pink-detailed-cake.webp",
    date: "23 Haziran 2026",
    readTime: "8 dk",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-2">
            Miss Butik Pasta Blog
          </h1>
          <p className="text-dark/50 font-inter text-sm sm:text-base mb-10 max-w-2xl">
            Gebze'de butik pasta, özel tasarım pastalar ve tatlı dünyasından
            ilham verici fikirler, rehberler ve ipuçları.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-dark/5"
              >
                <div className="aspect-[4/3] relative bg-cream overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs font-inter text-dark/50 mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&middot;</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                  <h2 className="font-playfair font-semibold text-dark text-base sm:text-lg leading-snug group-hover:text-pink transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-dark/60 font-inter text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
