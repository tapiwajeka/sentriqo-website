"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A2540]">

      {/* ── Layer 1: Full-bleed background photo ── */}
      <Image
        src="/images/sentriqo-bg.webp"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* ── Layer 2: Cinematic colour grade — deep blue tint ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(130deg, rgba(10,37,64,0.82) 0%, rgba(15,60,122,0.70) 45%, rgba(0,163,255,0.18) 100%)",
        }}
      />

      {/* ── Layer 3: Vignette — edges darken to anchor the subject ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(10,37,64,0.65) 100%)",
        }}
      />

      {/* ── Layer 4: Bottom fade — bleeds into the trust strip (#0F3C7A) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0F3C7A 100%)",
        }}
      />

      {/* ── Layer 5: Subtle noise/grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Layer 6: Accent radial glow (left-copy side) ── */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00A3FF]/8 blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
              <span className="text-white/90 text-xs font-medium tracking-widest uppercase">
                {h.badge}
              </span>
            </div>

            <h1
              className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              {h.heading1}{" "}
              <span className="text-[#00A3FF]">{h.heading2}</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
              {h.body}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {[
                { value: h.stat1Value, label: h.stat1Label },
                { value: h.stat2Value, label: h.stat2Label },
                { value: h.stat3Value, label: h.stat3Label },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[#00A3FF] font-[family-name:var(--font-poppins)] text-2xl font-bold">
                    {s.value}
                  </div>
                  <div className="text-white/50 text-xs font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-md bg-[#00A3FF] text-white font-semibold text-sm shadow-lg shadow-[#00A3FF]/30 hover:bg-[#1F6FB2] transition-all duration-200 hover:shadow-xl"
              >
                {h.ctaQuote}
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
              >
                {h.ctaServices}
              </Link>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#00A3FF]/20 border border-[#00A3FF]/40 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#00A3FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold font-[family-name:var(--font-poppins)]">
                      {h.cardTitle}
                    </div>
                    <div className="text-white/50 text-sm">{h.cardSubtitle}</div>
                  </div>
                  <div className="ml-auto w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse" />
                </div>

                {/* Service list */}
                {h.services.map((service) => (
                  <div key={service} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
                    <div className="w-5 h-5 rounded-full bg-[#00A3FF]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#00A3FF] rounded-xl px-4 py-3 shadow-xl">
                <div className="text-white text-xs font-semibold">{h.cardCallLabel}</div>
                <div className="text-white font-[family-name:var(--font-poppins)] font-bold text-sm leading-snug">
                  +263 78 939 1111
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
