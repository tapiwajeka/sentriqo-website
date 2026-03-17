"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;
  const cf = c.fields;

  const fields = [
    { id: "name",    label: cf.name,    type: "text",  placeholder: cf.namePlaceholder },
    { id: "email",   label: cf.email,   type: "email", placeholder: cf.emailPlaceholder },
    { id: "phone",   label: cf.phone,   type: "tel",   placeholder: cf.phonePlaceholder },
    { id: "company", label: cf.company, type: "text",  placeholder: cf.companyPlaceholder },
  ];
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              {c.badge}
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540] mb-5">
              {c.title}
            </h2>
            <p className="text-[#0A2540]/60 leading-relaxed mb-8">
              {c.body}
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#00A3FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  ),
                  label: c.phoneLabel,
                  value: "+263 78 939 1111 · +263 71 444 560\n+263 71 895 8358 · +263 42 783 064",
                  href: "tel:+263789391111",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#00A3FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                  label: c.emailLabel,
                  value: "info@sentriqo.com",
                  href: "mailto:info@sentriqo.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#00A3FF]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  ),
                  label: c.addressLabel,
                  value: "150 Upper East Road, Mt Pleasant, Harare",
                  href: "https://maps.google.com/?q=150+Upper+East+Road+Mt+Pleasant+Harare",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#E8F1FB] hover:border-[#1F6FB2]/40 hover:bg-[#F4F7FC] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E8F1FB] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F3C7A]/60 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#0A2540] font-semibold text-sm group-hover:text-[#0F3C7A] transition-colors whitespace-pre-line leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#F4F7FC] rounded-2xl p-8 border border-[#E8F1FB]">
            <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#0A2540] mb-6">
              {c.formTitle}
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-[#0A2540]/70 mb-1.5">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F1FB] bg-white text-sm text-[#0A2540] placeholder-[#0A2540]/40 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]/50 focus:border-[#1F6FB2] transition-all"
                    />
                  </div>
                ))}
              </div>

              {/* Service select */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#0A2540]/70 mb-1.5">
                  {cf.service}
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8F1FB] bg-white text-sm text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]/50 focus:border-[#1F6FB2] transition-all"
                >
                  <option value="">{cf.serviceDefault}</option>
                  {c.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0A2540]/70 mb-1.5">
                  {cf.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={cf.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8F1FB] bg-white text-sm text-[#0A2540] placeholder-[#0A2540]/40 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]/50 focus:border-[#1F6FB2] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#0F3C7A] text-white font-semibold text-sm hover:bg-[#1F6FB2] transition-colors duration-200 shadow-lg shadow-[#0F3C7A]/20"
              >
                {cf.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
