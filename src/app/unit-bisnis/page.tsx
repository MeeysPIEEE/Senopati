import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import InquiryForm from "@/components/inquiry-form";
import { BUSINESS_UNITS } from "@/lib/data";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unit Bisnis — Suku Cadang, Logam, Material, Kopi & Keuangan",
  description:
    "Lima unit bisnis PT Senopati Mega Nusantara: perdagangan suku cadang & aksesori mobil, produk logam & skrap, pemulihan material logam, pengolahan kopi, dan aktivitas keuangan holding.",
};

export default async function UnitBisnisPage({
  searchParams,
}: {
  searchParams: Promise<{ unit?: string }>;
}) {
  const { unit } = await searchParams;
  const initialSubject = BUSINESS_UNITS.find((u) => u.slug === unit)?.title;

  return (
    <>
      <PageHero
        kicker="Unit Bisnis"
        title="Lima Unit Bisnis"
        accent="Strategis"
        watermark="BISNIS"
        description="Kategori usaha berbasis KBLI yang dikelola terintegrasi di bawah satu holding — masing-masing dengan standar mutu, legalitas, dan tata kelola yang sama."
      />

      {/* Quick anchor nav */}
      <div className="sticky top-[76px] z-40 border-b border-steel-200/60 bg-paper/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3.5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BUSINESS_UNITS.map((u) => (
            <a
              key={u.slug}
              href={`#${u.slug}`}
              className="shrink-0 rounded-full border border-steel-200 bg-white px-4 py-2 text-[12px] font-bold text-navy-800 transition-all duration-300 hover:border-gold-400 hover:text-gold-600"
            >
              <span className="mr-1.5 font-serif italic text-gold-500">
                {u.index}
              </span>
              {u.tagline}
            </a>
          ))}
        </div>
      </div>

      {/* Editorial unit sections */}
      {BUSINESS_UNITS.map((unit, i) => {
        const Icon = unit.icon;
        const flipped = i % 2 === 1;
        return (
          <section
            key={unit.slug}
            id={unit.slug}
            className={`scroll-mt-36 py-20 sm:py-24 lg:py-28 ${
              flipped ? "bg-white" : "bg-paper"
            }`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative ${flipped ? "lg:order-2" : ""}`}>
                <div
                  aria-hidden
                  className={`absolute -top-5 h-full w-full rounded-[2rem] border-2 border-gold-400/40 ${
                    flipped ? "-right-5" : "-left-5"
                  }`}
                />
                <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(10,29,51,0.22)]">
                  <Image
                    src={unit.image}
                    alt={unit.imageAlt}
                    width={1000}
                    height={1300}
                    className="h-[380px] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 sm:h-[460px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/10" />
                  <span
                    aria-hidden
                    className="text-outline-light absolute right-5 top-2 text-7xl font-extrabold"
                  >
                    {unit.index}
                  </span>
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-navy-950/70 py-2.5 pl-3 pr-5 backdrop-blur-md">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500 text-navy-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-paper">
                      {unit.tagline}
                    </span>
                  </div>
                </div>
              </Reveal>

              <div className={flipped ? "lg:order-1" : ""}>
                <SectionHeading
                  kicker={`Unit ${unit.index} — ${unit.tagline}`}
                  title={unit.title}
                />
                <Reveal delay={0.1}>
                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel-500">
                    {unit.paragraphs.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.18}>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {unit.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                        <span className="text-[13.5px] font-medium leading-snug text-navy-800">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.26}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/kontak?unit=${unit.slug}`}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-navy-950 py-3.5 pl-6 pr-5 text-[14px] font-bold text-paper transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_10px_32px_rgba(10,29,51,0.35)]"
                    >
                      Minta Penawaran Harga
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href={waLink(
                        `Halo PT Senopati Mega Nusantara, saya ingin inquiry terkait ${unit.title}. Mohon informasi penawaran harganya.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-full border border-navy-900/15 px-6 py-3.5 text-[14px] font-bold text-navy-900 transition-all duration-300 hover:border-gold-500 hover:text-gold-600"
                    >
                      <MessageCircle className="h-5 w-5" /> Inquiry via WhatsApp
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Shared inquiry form */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-32 top-0 h-96 w-[30rem] rounded-full bg-gold-500/10 blur-[130px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              dark
              kicker="Formulir Inquiry"
              title={
                <>
                  Sampaikan Kebutuhan{" "}
                  <em className="font-serif font-normal italic text-gold-300">
                    Anda Hari Ini
                  </em>
                </>
              }
              description="Isi formulir dan pilih unit bisnis tujuan — inquiry Anda masuk langsung ke tim komersial kami dan direspons maksimal 1×24 jam kerja."
            />
            <Reveal delay={0.2}>
              <div className="mt-9 space-y-4 text-[14px] text-steel-300">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                  <a
                    href={`tel:${SITE.phoneIntl}`}
                    className="font-semibold transition-colors hover:text-gold-300"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
                <p className="text-[12.5px] leading-relaxed text-steel-400">
                  Untuk kebutuhan mendesak seperti ketersediaan stok dan jadwal
                  pengiriman, hubungi kami langsung melalui telepon atau
                  WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-[2rem] bg-paper p-6 shadow-[0_30px_80px_rgba(5,16,31,0.5)] sm:p-9">
              <InquiryForm
                source="unit-bisnis"
                initialSubject={initialSubject}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
