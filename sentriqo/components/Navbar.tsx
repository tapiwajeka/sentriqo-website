"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, t, setLocale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/",        label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about",   label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md shadow-black/8"
          : "bg-[#0A2540]/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/sentriqo-security-logo.png"
              alt="Sentriqo Security"
              width={240}
              height={72}
              className={`h-[4.5rem] w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? pathname === href
                      ? "text-[#0F3C7A]"
                      : "text-[#0A2540]/70 hover:text-[#0F3C7A]"
                    : pathname === href
                    ? "text-[#00A3FF]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Language switcher */}
            <LanguageSwitcher scrolled={scrolled} locale={locale} setLocale={setLocale} />

            <Link
              href="/contact"
              className={`ml-2 px-5 py-2.5 rounded-md text-sm font-semibold shadow-sm transition-colors duration-200 ${
                scrolled
                  ? "bg-[#0F3C7A] text-white hover:bg-[#1F6FB2]"
                  : "bg-[#00A3FF] text-white hover:bg-[#1F6FB2]"
              }`}
            >
              {t.nav.requestQuote}
            </Link>
          </nav>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher scrolled={scrolled} locale={locale} setLocale={setLocale} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? "text-[#0A2540]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className={`md:hidden py-4 border-t ${
              scrolled ? "border-gray-100 bg-white" : "border-white/10"
            }`}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? pathname === href
                        ? "bg-[#E8F1FB] text-[#0F3C7A]"
                        : "text-[#0A2540]/70 hover:bg-[#F4F7FC] hover:text-[#0F3C7A]"
                      : pathname === href
                      ? "bg-white/10 text-[#00A3FF]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 mx-4 px-5 py-3 rounded-md bg-[#0F3C7A] text-white text-sm font-semibold text-center hover:bg-[#1F6FB2] transition-colors"
              >
                {t.nav.requestQuote}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function LanguageSwitcher({
  scrolled,
  locale,
  setLocale,
}: {
  scrolled: boolean;
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div
      className={`flex items-center rounded-full border text-xs font-semibold overflow-hidden transition-colors duration-300 ${
        scrolled ? "border-[#0F3C7A]/20" : "border-white/25"
      }`}
    >
      {(["en", "zh"] as Locale[]).map((lang, i) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-3 py-1.5 transition-colors duration-200 ${
            i === 0 ? "" : "border-l"
          } ${
            scrolled ? "border-[#0F3C7A]/20" : "border-white/25"
          } ${
            locale === lang
              ? scrolled
                ? "bg-[#0F3C7A] text-white"
                : "bg-white/20 text-white"
              : scrolled
              ? "text-[#0A2540]/70 hover:bg-[#F4F7FC]"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
          aria-label={lang === "en" ? "Switch to English" : "切换到中文"}
        >
          {lang === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}


