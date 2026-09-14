import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import InquiryForm from "@/components/inquiry-form";
import { SITE, WA_DEFAULT } from "@/lib/site";
import { BUSINESS_UNITS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak — Alamat, Telepon & Formulir Inquiry",
  description:
    "Hubungi PT Senopati Mega Nusantara: Jl. Soekarno Hatta No. 377, Langenharjo, Kendal, Jawa Tengah 51314. Telepon/WA 0813-3299-3706. Kirim inquiry bisnis Anda melalui formulir kami.",
};

const INFO_BLOCKS = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    lines: [SITE.address],
    href: SITE.mapsLink,
    hrefLabel: "Buka rute di Google Maps",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    lines: [SITE.phoneDisplay],
    href: `tel:${SITE.phoneIntl}`,
    hrefLabel: "Hubungi sekarang",
  },
  {
    icon: Mail,
    title: "Email Resmi",
    lines: [SITE.email],
    href: `mailto:${SITE.email}`,
    hrefLabel: "Kirim email",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    lines: SITE.hours as unknown as string[],
  },
];

export default async function KontakPage({
  searchParams,
}: {
  searchParams: Promise<{ unit?: string }>;
}) {
  const { unit } = await searchParams;
  const initialSubject = BUSINESS_UNITS.find((u) => u.slug === unit)?.title;

  return (
    <>
      <PageHero
        kicker="Hubungi Kami"
        title="Kontak &"
        accent="Lokasi"
        watermark="KONTAK"
        description="Tim kami siap menerima penawaran, konsultasi kebutuhan material, dan rencana kemitraan Anda — melalui formulir, telepon, atau kunjungan langsung."
      />

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-14">
          {/* Info column */}
          <div className="space-y-4 lg:col-span-2">
            {INFO_BLOCKS.map((block, i) => {
              const Icon = block.icon;
              return (
                <Reveal key={block.title} delay={i * 0.07}>
                  <div className="group rounded-2xl border border-steel-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_18px_44px_rgba(10,29,51,0.1)]">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <h2 className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-navy-900">
                          {block.title}
                        </h2>
                        {block.lines.map((line) => (
                          <p
                            key={line}
                            className="mt-1.5 text-[13.5px] leading-relaxed text-steel-500"
                          >
                            {line}
                          </p>
                        ))}
                        {block.href && (
                          <a
                            href={block.href}
                            target={block.href.startsWith("http") ? "_blank" : undefined}
                            rel={block.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="mt-2 inline-block text-[12.5px] font-bold text-gold-600 underline-offset-4 transition hover:underline"
                          >
                            {block.hrefLabel} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="relative overflow-hidden rounded-2xl bg-navy-950 p-7">
                <div className="bg-grain absolute inset-0 opacity-[0.06]" aria-hidden />
                <p className="relative text-[13px] font-bold uppercase tracking-[0.2em] text-gold-300">
                  Jalur Cepat
                </p>
                <p className="relative mt-3 text-[13.5px] leading-relaxed text-steel-300">
                  Untuk respons tercepat, sertakan spesifikasi material dan
                  estimasi volume kebutuhan Anda.
                </p>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25d366] py-3.5 text-[14px] font-bold text-navy-950 transition hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" /> Chat WhatsApp Sekarang
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-[2rem] border border-steel-200/70 bg-white p-6 shadow-[0_30px_80px_rgba(10,29,51,0.12)] sm:p-9 lg:p-11">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold-400" aria-hidden />
                <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-gold-500">
                  Formulir Inquiry
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                Kirim Pesan atau{" "}
                <em className="font-serif font-normal italic text-gold-500">
                  Permintaan Penawaran
                </em>
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-steel-500">
                Lengkapi data berikut — pesan Anda tersimpan langsung ke sistem
                kami dan diteruskan ke tim yang relevan.
              </p>
              <div className="mt-8">
                <InquiryForm source="kontak" initialSubject={initialSubject} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-steel-200/80 shadow-[0_30px_80px_rgba(10,29,51,0.15)]">
              <iframe
                src={SITE.mapsEmbed}
                title="Peta lokasi kantor PT Senopati Mega Nusantara — Jl. Soekarno Hatta No. 377, Kendal"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full sm:h-[480px]"
              />
              <div className="pointer-events-none absolute left-4 top-4 max-w-[300px] rounded-2xl bg-navy-950/92 p-6 shadow-2xl backdrop-blur-md sm:left-6 sm:top-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-300">
                  Kantor Operasional
                </p>
                <p className="mt-2.5 text-[13px] font-semibold leading-relaxed text-paper">
                  {SITE.addressShort}
                </p>
                <a
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-[12px] font-bold text-navy-950 transition hover:bg-gold-400"
                >
                  <MapPin className="h-4 w-4" /> Buka di Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
