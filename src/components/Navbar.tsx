"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

const navLinks = [
  { label: "Hakkımızda", href: "/#about" },
  { label: "Ürünler", href: "/#gallery" },
  { label: "Nasıl Çalışır", href: "/#how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sikca-sorulan-sorular" },
  { label: "İletişim", href: "/#contact" },
];

const cityLinks = [
  { label: "Gebze", href: "/gebze-butik-pasta" },
  { label: "Darıca", href: "/darica-butik-pasta" },
  { label: "Çayırova", href: "/cayirova-butik-pasta" },
  { label: "Tuzla", href: "/tuzla-butik-pasta" },
  { label: "Pendik", href: "/pendik-butik-pasta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 250);
  };

  const handleDropdownClick = () => setDropdownOpen(false);

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
          <Image
            src="/logo.svg"
            alt="Miss Butik Pasta"
            width={280}
            height={44}
            priority
            unoptimized
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
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(prev => !prev)}
              onMouseEnter={handleMouseEnter}
              className="flex items-center gap-1 text-dark/80 hover:text-pink-dark transition-colors font-inter text-sm font-medium cursor-pointer"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Bölgeler
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-dark/5 py-2 animate-fade-in"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {cityLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={handleDropdownClick}
                    className="block px-5 py-2.5 font-inter text-sm text-dark/80 hover:text-pink-dark hover:bg-light-pink/50 transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-full font-inter text-sm font-semibold transition-colors"
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
          mobileOpen ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
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
          <div className="pt-2 pb-1">
            <p className="text-pink-dark font-inter text-xs font-semibold uppercase tracking-widest mb-2 px-1">
              Bölgeler
            </p>
            <div className="flex flex-col gap-1 pl-3">
              {cityLinks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={handleNavClick}
                  className="text-dark/60 hover:text-pink-dark font-inter text-sm py-1.5 transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-3 rounded-full font-inter text-sm font-semibold text-center transition-colors mt-2"
          >
            WhatsApp ile Sipariş
          </a>
        </div>
      </div>
    </header>
  );
}
