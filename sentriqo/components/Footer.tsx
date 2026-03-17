"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="container-xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/sentriqo-security-logo.png"
                alt="Sentriqo Security"
                width={140}
                height={42}
                className="h-10 w-auto object-contain brightness-[10] saturate-0"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {f.tagline}
            </p>
            {/* Emergency contact */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <div className="text-[#00A3FF] text-xs font-semibold uppercase tracking-widest">
                {f.callLabel}
              </div>
              {[
                ["+263 78 939 1111", "+263789391111"],
                ["+263 71 444 560",  "+26371444560"],
                ["+263 71 895 8358", "+263718958358"],
                ["+263 42 783 064",  "+26342783064"],
              ].map(([label, tel]) => (
                <a key={tel} href={`tel:${tel}`} className="block text-white/80 text-sm font-medium hover:text-[#00A3FF] transition-colors">
                  {label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 text-white/50 text-xs">
                {f.address}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(f.columns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-sm uppercase tracking-widest text-white/60 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} {f.copyright}</span>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">{f.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{f.terms}</Link>
            <span className="hidden md:block text-white/20">|</span>
            <span>
              {f.developedBy}{" "}
              <a
                href="https://www.dataage.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A3FF]/70 hover:text-[#00A3FF] transition-colors"
              >
                Data Age Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
