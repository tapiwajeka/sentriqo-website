"use client";

import Image from "next/image";
import CTA from "@/components/CTA";
import { useLanguage } from "@/contexts/LanguageContext";

// Map service IDs to their showcase images
const serviceImages: Record<string, string> = {
  cctv: "/images/CCTV1.webp",
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const sp = t.servicesPage;
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <Image
          src="/images/sentriqo-bg2.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#0A2540]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/40 via-transparent to-[#0A2540]/60" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,37,64,0.55) 100%)" }} />

        <div className="container-xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium uppercase tracking-widest mb-5">
            {sp.badge}
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-white mb-4">
            {sp.heading}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {sp.subheading}
          </p>
        </div>
      </section>

      {/* Detailed service breakdown */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="space-y-20">
            {sp.details.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`rounded-2xl overflow-hidden shadow-2xl ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  {serviceImages[service.id] ? (
                    /* Photo-based visual for CCTV etc. */
                    <div className="relative h-full min-h-[380px] bg-[#0A2540]">
                      <Image
                        src={serviceImages[service.id]}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/80 via-[#0A2540]/30 to-transparent" />
                      {/* HUD corners */}
                      <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#00A3FF]/70 rounded-tl" />
                      <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-[#00A3FF]/70 rounded-tr" />
                      <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-[#00A3FF]/70 rounded-bl" />
                      <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-[#00A3FF]/70 rounded-br" />
                      {/* Top bar */}
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 bg-[#0A2540]/60 backdrop-blur-sm border-b border-white/10">
                        <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">CAM-HD · {service.title}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
                          <span className="text-[#00A3FF] text-[10px] font-bold uppercase tracking-widest">LIVE</span>
                        </div>
                      </div>
                      {/* Scan-line overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)" }}
                      />
                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-[#0A2540]/70 backdrop-blur-sm border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {["4K UHD", "AI Motion", "Night Vision"].map((tag) => (
                              <span key={tag} className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/10">{tag}</span>
                            ))}
                          </div>
                          <span className="text-white/30 font-mono text-[10px]">● REC</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Default gradient visual */
                    <div className={`bg-gradient-to-br from-[#0F3C7A] to-[#1F6FB2] p-10 h-full`}>
                      <div className="w-14 h-14 rounded-xl bg-[#00A3FF]/20 border border-[#00A3FF]/40 flex items-center justify-center mb-6">
                        <svg className="w-7 h-7 text-[#00A3FF]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                        </svg>
                      </div>
                      <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#0A2540] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#0A2540]/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-[#0F3C7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#0A2540]/80 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
