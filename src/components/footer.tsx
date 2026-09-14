import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/navbar";
import { NAV_LINKS, SITE, WA_DEFAULT } from "@/lib/site";
import { BUSINESS_UNITS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-paper">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-steel-300">
              Holding company serbaguna yang mengintegrasikan perdagangan,
              industri pengolahan, dan aktivitas keuangan — berakar di Kendal,
              menjangkau Nusantara.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Badan Hukum PT", "Berbasis KBLI", "Kendal · Jawa Tengah"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-steel-300"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-steel-300 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business units */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
              Unit Bisnis
            </h3>
            <ul className="mt-5 space-y-3">
              {BUSINESS_UNITS.map((unit) => (
                <li key={unit.slug}>
                  <Link
                    href={`/unit-bisnis#${unit.slug}`}
                    className="text-[14px] leading-snug text-steel-300 transition-colors hover:text-gold-300"
                  >
                    {unit.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">
              Kantor Operasional
            </h3>
            <ul className="mt-5 space-y-4 text-[14px] leading-relaxed text-steel-300">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                {SITE.addressShort}
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                <a
                  href={`tel:${SITE.phoneIntl}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 break-all">
                <Mail className="h-5 w-5 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 text-[13px] font-bold text-navy-950 transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[13px] font-semibold text-paper transition hover:border-gold-400/60 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[12.5px] text-steel-400 sm:flex-row">
          <p>
            © {year} {SITE.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="tracking-wide">
            Industri · Trading · Investasi —{" "}
            <span className="font-serif italic text-gold-300">Nusantara</span>
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative select-none overflow-hidden text-center"
      >
        <span className="block translate-y-[28%] text-[17.5vw] font-extrabold leading-none tracking-tight text-white/[0.035]">
          SENOPATI
        </span>
      </div>
    </footer>
  );
}
