"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const hrefs = [
  "/services#armed",
  "/services#cctv",
  "/services#vip",
  "/services#events",
  "/services#k9",
  "/services#patrol",
];

const icons = [
  <svg key="armed" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>,
  <svg key="cctv" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
  </svg>,
  <svg key="vip" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>,
  <svg key="events" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>,
  <svg key="k9" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>,
  <svg key="patrol" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 17.93V18a1 1 0 00-2 0v1.93A8.001 8.001 0 014.07 13H6a1 1 0 000-2H4.07A8.001 8.001 0 0111 4.07V6a1 1 0 002 0V4.07A8.001 8.001 0 0119.93 11H18a1 1 0 000 2h1.93A8.001 8.001 0 0113 19.93zM12 9a3 3 0 100 6 3 3 0 000-6z" />
  </svg>,
];


export default function Services({ preview = false }: { preview?: boolean }) {
  const { t } = useLanguage();
  const s = t.services;
  const displayed = preview ? s.items.slice(0, 3) : s.items;

  return (
    <section id="services" className="section-pad bg-[#F4F7FC]">
      <div className="container-xl">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              {s.sectionBadge}
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540] mb-4">
              {s.sectionTitle}
            </h2>
            <p className="text-[#0A2540]/60 text-base leading-relaxed">
              {s.sectionBody}
            </p>
          </div>

          {/* Right — live-feed camera showcase */}
          <div className="relative">
            {/* Monitor frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0A2540] shadow-2xl border border-[#1F6FB2]/30">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#06192d] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
                </div>
                <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">CAM-02 · PERIMETER</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse" />
                  <span className="text-[#00A3FF] text-[10px] font-bold uppercase tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Camera image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/Wireless-Security-Camera-cctv.webp"
                  alt="CCTV Surveillance Camera"
                  fill
                  className="object-cover object-center scale-105"
                />
                {/* Scan-line overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
                  }}
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent pointer-events-none" />
                {/* Corner HUD brackets */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#00A3FF]/70 rounded-tl" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#00A3FF]/70 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#00A3FF]/70 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#00A3FF]/70 rounded-br" />
                {/* Timestamp */}
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/50 tracking-wider">
                  {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })} · 24/7
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#06192d] border-t border-white/10">
                <div className="flex items-center gap-3">
                  {["Motion Det.", "AI Analytics", "Cloud Backup"].map((label) => (
                    <div key={label} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-white/40 text-[10px] font-mono">{label}</span>
                    </div>
                  ))}
                </div>
                <span className="text-white/30 text-[10px] font-mono">REC ●</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0F3C7A] border border-[#1F6FB2]/40 rounded-xl px-4 py-3 shadow-xl">
              <div className="text-[#00A3FF] font-bold text-sm font-[family-name:var(--font-poppins)]">24 / 7</div>
              <div className="text-white/60 text-[10px] uppercase tracking-widest">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, i) => (
            <Link
              key={service.title}
              href={hrefs[i] ?? "/services"}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E8F1FB] hover:shadow-xl hover:border-[#1F6FB2]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8F1FB] text-[#0F3C7A] flex items-center justify-center mb-5 group-hover:bg-[#0F3C7A] group-hover:text-white transition-colors duration-300">
                {icons[i]}
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#0A2540] mb-2">
                {service.title}
              </h3>
              <p className="text-[#0A2540]/60 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-1 text-[#00A3FF] text-sm font-medium">
                {s.learnMore}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#0F3C7A] text-white font-semibold text-sm hover:bg-[#1F6FB2] transition-colors duration-200"
            >
              {s.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
