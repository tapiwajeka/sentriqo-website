"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();
  const c = t.cta;
  return (
    <section className="section-pad gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {c.badge}
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl font-bold text-white mb-5">
            {c.title}
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {c.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-md bg-white text-[#0F3C7A] font-bold text-sm shadow-xl hover:bg-[#E8F1FB] transition-colors duration-200"
            >
              {c.btnQuote}
            </Link>
            <a
              href="tel:0800SENTRIQO"
              className="px-8 py-4 rounded-md border-2 border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {c.btnCall}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
