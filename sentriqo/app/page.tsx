"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { useLanguage } from "@/contexts/LanguageContext";

const whyIcons = [
  <svg key="0" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
  </svg>,
];

export default function HomePage() {
  const { t } = useLanguage();
  const trust = t.trust;
  const why = t.why;
  const testimonials = t.testimonials;
  return (
    <>
      <Hero />

      {/* ── Trust Strip ── */}
      <div className="bg-[#0F3C7A] py-8">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-x divide-white/10">
            {trust.map((item) => (
              <div key={item.label} className="text-center px-4 first:pl-0 last:pr-0">
                <div className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#00A3FF]">
                  {item.value}
                </div>
                <div className="text-white/60 text-xs mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services preview ── */}
      <Services preview />

      {/* ── Why Sentriqo ── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F3C7A] to-[#0A2540] p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#00A3FF]/10 -translate-y-1/2 translate-x-1/3" />
              <h3 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-white mb-3 relative z-10">
                {why.cardHeading}
              </h3>
              <p className="text-white/60 leading-relaxed relative z-10 mb-8">
                {why.cardBody}
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  ["PSIRA Registered", "All officers certified"],
                  ["Insured & Bonded", "Full liability cover"],
                  ["24/7 Control Room", "Constant oversight"],
                  ["ISO 9001", "Quality management"],
                ].map(([title, sub]) => (
                  <div key={title} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-white font-semibold text-sm">{title}</div>
                    <div className="text-white/50 text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Why items */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
                {why.badge}
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540] mb-4">
                {why.title}
              </h2>
              <p className="text-[#0A2540]/60 leading-relaxed mb-8">
                {why.body}
              </p>
              <div className="space-y-5">
                {why.items.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8F1FB] text-[#0F3C7A] flex items-center justify-center flex-shrink-0">
                      {whyIcons[i]}
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[#0A2540] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#0A2540]/60 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-pad bg-[#F4F7FC]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#0A2540] mb-3">
              {testimonials.title}
            </h2>
            <p className="text-[#0A2540]/60 max-w-xl mx-auto text-sm">
              {testimonials.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.items.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8F1FB]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0A2540]/70 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-[#0A2540] text-sm">{testimonial.name}</div>
                  <div className="text-[#0A2540]/50 text-xs mt-0.5">{testimonial.role}</div>
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
