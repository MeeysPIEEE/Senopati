import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import CtaBanner from "@/components/cta-banner";
import { BUSINESS_UNITS, CORE_VALUES } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil, Sejarah & Legalitas",
  description:
    "Profil PT Senopati Mega Nusantara: sejarah, filosofi nama, nilai inti perusahaan, legalitas badan hukum PT, dan struktur holding di Kendal, Jawa Tengah.",
};

const LEGAL_INFO = [
  { label: "Nama Perusahaan", value: "PT Senopati Mega Nusantara" },
  { label: "Bentuk Badan Hukum", value: "Perseroan Terbatas (PT)" },
  { label: "Domisili", value: "Kab. Kendal, Jawa Tengah, Indonesia" },
  {
    label: "Klasifikasi Usaha",
    value: "Perdagangan Besar, Industri Pengolahan, Aktivitas Keuangan & Holding (berbasis KBLI)",
  },
  { label: "Status Operasional", value: "Terdaftar & Beroperasi Aktif" },
];

const NAME_PHILOSOPHY = [
  {
    word: "Senopati",
    text: "Terinspirasi sosok pemimpin strategis Nusantara — melambangkan kepemimpinan, ketangguhan, dan ketajaman strategi dalam setiap langkah usaha.",
  },
  {
    word: "Mega",
    text: "Besar dan agung — ambisi membangun skala usaha yang kokoh, berdaya tahan, dan memberi dampak lintas generasi.",
  },
  {
    word: "Nusantara",
    text: "Jangkauan kepulauan Indonesia — komitmen menghubungkan Kendal dengan pasar dan mitra di seluruh negeri.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <PageHero
        kicker="Profil Perusahaan"
        title="Tentang"
        accent="Kami"
        watermark="TENTANG"
        description="Mengenal lebih dekat holding company di balik lima unit bisnis strategis — sejarah, nilai, dan tata kelola yang menjadi fondasi kepercayaan mitra kami."
      />

      {/* ===== Profil & Sejarah ===== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative lg:sticky lg:top-28">
              <div
                aria-hidden
                className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border-2 border-gold-400/40"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(10,29,51,0.25)]">
                <Image
                  src="/images/tentang-fasilitas.jpg"
                  alt="Kawasan fasilitas operasional PT Senopati Mega Nusantara di Kendal"
                  width={1200}
                  height={900}
                  className="h-[420px] w-full object-cover sm:h-[540px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 font-serif text-xl italic leading-snug text-paper sm:text-2xl">
                  “Berakar di Kendal, bertumbuh untuk Nusantara.”
                </p>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                kicker="Profil & Sejarah"
                title={
                  <>
                    Lahir dari Semangat{" "}
                    <em className="font-serif font-normal italic text-gold-500">
                      Kewirausahaan Kendal
                    </em>
                  </>
                }
              />
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-steel-500">
                  <p>
                    <strong className="font-bold text-navy-900">
                      PT Senopati Mega Nusantara
                    </strong>{" "}
                    lahir di Kendal — kawasan yang bertumbuh menjadi salah satu
                    koridor industri paling dinamis di Jawa Tengah. Berawal dari
                    aktivitas perdagangan material, perusahaan berkembang
                    menjadi holding yang menaungi lima lini bisnis strategis.
                  </p>
                  <p>
                    Kedekatan dengan jalur logistik utama Pantura dan kawasan
                    industri Kendal menempatkan kami pada posisi strategis untuk
                    melayani kebutuhan B2B — dari pengadaan suku cadang dan
                    pasokan bahan baku logam hingga komoditas olahan.
                  </p>
                  <p>
                    Kami percaya pertumbuhan bisnis harus sejalan dengan
                    pembangunan ekonomi regional: menyerap tenaga kerja lokal,
                    memberdayakan petani dan pengepul, serta menjalin kemitraan
                    jangka panjang dengan pelaku industri.
                  </p>
                </div>
              </Reveal>

              {/* Filosofi nama */}
              <Reveal delay={0.18}>
                <h3 className="mt-10 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600">
                  Filosofi Nama
                </h3>
              </Reveal>
              <div className="mt-5 space-y-4">
                {NAME_PHILOSOPHY.map((item, i) => (
                  <Reveal key={item.word} delay={0.2 + i * 0.08}>
                    <div className="group flex gap-5 rounded-2xl border border-steel-200/70 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_18px_44px_rgba(10,29,51,0.1)] sm:p-6">
                      <span className="font-serif text-2xl italic text-gold-500 sm:text-3xl">
                        0{i + 1}
                      </span>
                      <div>
                        <h4 className="font-serif text-xl italic text-navy-900 sm:text-[22px]">
                          {item.word}
                        </h4>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-steel-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Values ===== */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div
          aria-hidden
          className="text-outline-navy pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap text-[15rem] font-extrabold leading-none opacity-60"
        >
          NILAI KAMI
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            kicker="Nilai Inti"
            title={
              <>
                Empat Nilai yang{" "}
                <em className="font-serif font-normal italic text-gold-500">
                  Kami Pegang Teguh
                </em>
              </>
            }
            description="Nilai-nilai ini menjadi kompas perilaku setiap insan Senopati Mega Nusantara — dari gudang hingga ruang direksi."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.08} className="h-full">
                  <div className="group h-full rounded-2xl border border-steel-200/70 bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-navy-950 hover:shadow-[0_24px_60px_rgba(5,16,31,0.3)]">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-[17px] font-extrabold tracking-tight text-navy-900 transition-colors duration-500 group-hover:text-paper">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel-500 transition-colors duration-500 group-hover:text-steel-300">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Legalitas & Holding ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-32 right-[-8%] h-96 w-[34rem] rounded-full bg-gold-500/10 blur-[130px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              dark
              kicker="Legalitas & Tata Kelola"
              title={
                <>
                  Berdiri di Atas{" "}
                  <em className="font-serif font-normal italic text-gold-300">
                    Fondasi Hukum
                  </em>{" "}
                  yang Jelas
                </>
              }
              description="Transparansi legalitas adalah komitmen kami kepada mitra bisnis, perbankan, dan instansi pemerintah."
            />
            <Reveal delay={0.15}>
              <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {LEGAL_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-steel-400 sm:pt-1">
                      {item.label}
                    </dt>
                    <dd className="text-[14.5px] font-semibold leading-relaxed text-paper">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 text-[12.5px] leading-relaxed text-steel-400">
                Dokumen legal seperti NIB, akta pendirian, dan NPWP tersedia
                untuk proses verifikasi resmi. Hubungi kantor kami di{" "}
                <span className="text-gold-300">{SITE.email}</span> untuk
                permintaan dokumen perusahaan.
              </p>
            </Reveal>
          </div>

          {/* Struktur holding */}
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] border border-white/10 bg-navy-900/60 p-7 sm:p-9">
              <div className="rounded-2xl border border-gold-400/40 bg-navy-950 p-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400">
                  Holding Company
                </p>
                <p className="mt-2 text-lg font-extrabold tracking-tight text-paper">
                  PT Senopati Mega Nusantara
                </p>
              </div>
              <div className="mx-auto h-8 w-px bg-gradient-to-b from-gold-400/60 to-white/10" aria-hidden />
              <ul className="space-y-3">
                {BUSINESS_UNITS.map((unit, i) => {
                  const Icon = unit.icon;
                  return (
                    <li
                      key={unit.slug}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-navy-950/60 px-5 py-4 transition-all duration-300 hover:border-gold-400/40"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-500/12 text-gold-300 ring-1 ring-gold-400/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-bold text-paper">
                          {unit.title}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-steel-400">
                          Unit {unit.index} · {unit.tagline}
                        </p>
                      </div>
                      <span className="ml-auto font-serif text-lg italic text-steel-500 transition-colors group-hover:text-gold-300">
                        0{i + 1}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Bangun Kemitraan Jangka Panjang Bersama Kami"
        description="Dari pengadaan rutin hingga kolaborasi strategis lintas sektor — mari diskusikan bagaimana kami dapat mendukung pertumbuhan bisnis Anda."
        primaryLabel="Mulai Berdiskusi"
      />
    </>
  );
}
