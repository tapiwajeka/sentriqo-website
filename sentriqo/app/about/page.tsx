"use client";

import CTA from "@/components/CTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;
  return (
    <>
      {/* Page Hero */}
      <section className="gradient-hero pt-36 pb-20">
        <div className="container-xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium uppercase tracking-widest mb-5">
            {a.badge}
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-white mb-4">
            {a.heading}
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {a.subheading}
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
                {a.missionBadge}
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540] mb-5">
                {a.missionTitle}
              </h2>
              <p className="text-[#0A2540]/65 leading-relaxed mb-5">
                {a.missionBody1}
              </p>
              <p className="text-[#0A2540]/65 leading-relaxed">
                {a.missionBody2}
              </p>
            </div>

            {/* Stats visual */}
            <div className="grid grid-cols-2 gap-4">
              {a.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#F4F7FC] rounded-2xl p-6 border border-[#E8F1FB] text-center"
                >
                  <div className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-[#0F3C7A] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#0A2540]/55 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#F4F7FC]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              {a.valuesBadge}
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540]">
              {a.valuesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8F1FB] text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-[#0A2540] mb-2">
                  {v.title}
                </h3>
                <p className="text-[#0A2540]/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540] mb-3">
              {a.journeyTitle}
            </h2>
            <p className="text-[#0A2540]/60 max-w-xl mx-auto text-sm">
              {a.journeySub}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {a.milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Vertical line */}
                {i < a.milestones.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#E8F1FB]" />
                )}
                <div className="w-10 h-10 rounded-full bg-[#0F3C7A] text-white flex items-center justify-center flex-shrink-0 z-10 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
                </div>
                <div className="pt-1.5">
                  <div className="font-[family-name:var(--font-poppins)] text-[#00A3FF] font-bold text-sm mb-1">
                    {m.year}
                  </div>
                  <p className="text-[#0A2540]/75 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-pad bg-[#F4F7FC]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E8F1FB] text-[#0F3C7A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              {a.teamBadge}
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#0A2540]">
              {a.teamTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8F1FB] text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F3C7A] to-[#1F6FB2] flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-md">
                  {member.initials}
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-[#0A2540] mb-0.5">
                  {member.name}
                </h3>
                <div className="text-[#00A3FF] text-xs font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </div>
                <p className="text-[#0A2540]/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
