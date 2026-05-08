import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => null,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => null,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => null,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
