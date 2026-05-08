"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

const navLinks = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Ürünler", href: "#gallery" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between" aria-label="Ana navigasyon">
        <Link href="/" className="flex items-center" aria-label="Miss Butik Pasta Ana Sayfa">
          <img
            src="/logo.svg"
            alt="Miss Butik Pasta"
            className="h-7 sm:h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark/80 hover:text-pink-dark transition-colors font-inter text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-btn hover:bg-pink text-white px-5 py-2.5 rounded-full font-inter text-sm font-semibold transition-colors"
          >
            WhatsApp ile Sipariş
          </a>
        </div>

        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-cream/95 backdrop-blur-md border-t border-dark/5`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-dark/80 hover:text-pink-dark font-inter text-base font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="bg-pink-btn hover:bg-pink text-white px-5 py-3 rounded-full font-inter text-sm font-semibold text-center transition-colors mt-2"
          >
            WhatsApp ile Sipariş
          </a>
        </div>
      </div>
    </header>
  );
}
