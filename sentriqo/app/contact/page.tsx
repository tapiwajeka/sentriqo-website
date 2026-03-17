"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;
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
            {cp.badge}
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-white mb-4">
            {cp.heading}
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
            {cp.subheading}
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <ContactSection />

      {/* FAQ */}
      <section id="ops" className="section-pad bg-[#F4F7FC]">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#0A2540] mb-2">
              {cp.faqTitle}
            </h2>
            <p className="text-[#0A2540]/60 text-sm">
              {cp.faqSub}
            </p>
          </div>
          <div className="space-y-4">
            {cp.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-[#E8F1FB] shadow-sm">
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#0A2540] mb-2">
                  {faq.q}
                </h3>
                <p className="text-[#0A2540]/65 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
