import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Handshake,
  MapPin,
} from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import Counter from "@/components/counter";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS_UNITS, STATS, STRENGTHS } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "PT Senopati Mega Nusantara — Holding Industri, Trading & Investasi Kendal",
  description:
    "Holding company serbaguna di Kendal, Jawa Tengah: perdagangan suku cadang mobil, produk logam & skrap, pemulihan material, pengolahan kopi, dan aktivitas keuangan.",
};

const OVERVIEW_POINTS = [
  "Berbadan hukum PT resmi & beroperasi sesuai KBLI",
  "Basis operasional strategis di Kendal, Jawa Tengah",
  "Portofolio lintas sektor: otomotif, logam, agrikomoditas, & keuangan",
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* ===== Company Overview ===== */}
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border-2 border-gold-400/40"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(10,29,51,0.25)]">
              <Image
                src="/images/tentang-fasilitas.jpg"
                alt="Kawasan fasilitas industri PT Senopati Mega Nusantara"
                width={1200}
                height={900}
                className="h-[400px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-9 -right-2 max-w-[250px] rounded-2xl bg-navy-950 p-6 shadow-[0_24px_60px_rgba(5,16,31,0.5)] sm:-right-8 sm:p-7">
              <div className="bg-grain absolute inset-0 rounded-2xl opacity-[0.07]" />
              <MapPin className="relative h-6 w-6 text-gold-400" />
              <p className="relative mt-4 text-[13px] font-bold uppercase tracking-[0.2em] text-paper">
                Kendal · Jawa Tengah
              </p>
              <p className="relative mt-2 text-[13px] leading-relaxed text-steel-300">
                Basis operasional, pergudangan, dan distribusi seluruh unit
                bisnis.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              kicker="01 — Tentang Kami"
              title={
                <>
                  Satu Holding,{" "}
                  <em className="font-serif font-normal italic text-gold-500">
                    Lima Lini Bisnis
                  </em>{" "}
                  yang Saling Menguatkan
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15.5px] leading-relaxed text-steel-500">
                <strong className="font-bold text-navy-900">
                  PT Senopati Mega Nusantara
                </strong>{" "}
                adalah holding company serbaguna yang berkedudukan di Kendal,
                Jawa Tengah. Kami menaungi unit-unit usaha strategis — dari
                perdagangan besar suku cadang dan produk logam, pemulihan
                material, pengolahan kopi, hingga aktivitas keuangan.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-steel-500">
                Diversifikasi ini dirancang untuk memberi ketahanan bisnis
                sekaligus nilai tambah bagi mitra: satu mitra korporat, banyak
                solusi industri.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3.5">
                {OVERVIEW_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-[14.5px] font-medium text-navy-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.26}>
              <Link
                href="/tentang-kami"
                className="group mt-9 inline-flex items-center gap-2.5 text-[14px] font-bold text-navy-900 transition-colors hover:text-gold-600"
              >
                <span className="border-b-2 border-gold-400 pb-1">
                  Kenali perusahaan kami
                </span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Business Units ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -top-32 left-[-8%] h-96 w-[34rem] rounded-full bg-gold-500/10 blur-[130px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              dark
              kicker="02 — Unit Bisnis"
              title={
                <>
                  Diversifikasi Usaha yang{" "}
                  <em className="font-serif font-normal italic text-gold-300">
                    Terintegrasi
                  </em>
                </>
              }
              description="Lima unit bisnis berbasis KBLI yang saling menopang — masing-masing dikelola dengan standar mutu dan tata kelola korporat yang sama."
            />
            <Reveal delay={0.15}>
              <Link
                href="/unit-bisnis"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 px-6 py-3 text-[13.5px] font-bold text-paper transition-all duration-300 hover:border-gold-400/70 hover:text-gold-300"
              >
                Lihat Semua Detail
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_UNITS.map((unit, i) => {
              const Icon = unit.icon;
              return (
                <Reveal key={unit.slug} delay={i * 0.07} className="h-full">
                  <Link
                    href={`/unit-bisnis#${unit.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-[0_24px_60px_rgba(5,16,31,0.5)]"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={unit.image}
                        alt={unit.imageAlt}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-950/20 to-transparent" />
                      <span
                        aria-hidden
                        className="text-outline-light absolute bottom-2 right-4 text-6xl font-extrabold"
                      >
                        {unit.index}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-500/12 text-gold-300 ring-1 ring-gold-400/20">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-steel-400">
                          {unit.tagline}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[17px] font-bold leading-snug text-paper transition-colors duration-300 group-hover:text-gold-200">
                        {unit.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-steel-300">
                        {unit.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-gold-300">
                        Lihat Selengkapnya
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            {/* Consultation card */}
            <Reveal delay={BUSINESS_UNITS.length * 0.07} className="h-full">
              <Link
                href="/kontak"
                className="group flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-gold-500 p-7 text-navy-950 transition-all duration-500 hover:-translate-y-1.5 hover:bg-gold-400 hover:shadow-[0_24px_60px_rgba(196,136,43,0.35)]"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-950/10 ring-1 ring-navy-950/15">
                    <Handshake className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-[22px] font-extrabold leading-tight tracking-tight">
                    Tidak menemukan kebutuhan Anda?
                  </h3>
                  <p className="mt-3 text-[13.5px] font-medium leading-relaxed text-navy-900/75">
                    Ceritakan rencana kerja sama Anda — tim kami siap merumuskan
                    solusi lintas unit bisnis.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2.5 text-[14px] font-extrabold">
                  Konsultasi Langsung
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Stats band */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-12 sm:px-12 lg:px-16">
              <div className="bg-blueprint absolute inset-0" aria-hidden />
              <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-[100px]"
                aria-hidden
              />
              <div className="gold-hairline absolute left-0 top-0 h-px w-full" aria-hidden />
              <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0"
                  >
                    <p className="text-5xl font-extrabold tracking-tight text-gold-400 lg:text-[3.4rem]">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-steel-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-20 lg:mt-24">
            <SectionHeading
              align="center"
              kicker="03 — Mengapa Kami"
              title={
                <>
                  Keunggulan yang Menjadi{" "}
                  <em className="font-serif font-normal italic text-gold-500">
                    Fondasi Kepercayaan
                  </em>
                </>
              }
              description="Empat pilar yang menjadikan PT Senopati Mega Nusantara mitra strategis bagi industri, pedagang grosir, dan lembaga keuangan."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STRENGTHS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08} className="h-full">
                    <div className="group h-full rounded-2xl border border-steel-200/70 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-[0_24px_60px_rgba(10,29,51,0.12)]">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                        <Icon className="h-5.5 w-5.5 h-6 w-6" />
                      </span>
                      <h3 className="mt-5 text-[17px] font-extrabold tracking-tight text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CtaBanner
        title="Siap Bermitra dengan PT Senopati Mega Nusantara?"
        description="Kirimkan kebutuhan material, volume pengadaan, atau rencana kerja sama Anda. Tim komersial kami merespons setiap inquiry dalam 1×24 jam kerja."
        primaryLabel="Ajukan Penawaran Harga"
      />
    </>
  );
}
