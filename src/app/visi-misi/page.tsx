import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import CtaBanner from "@/components/cta-banner";
import { MISSIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Visi & Misi Perusahaan",
  description:
    "Visi dan misi PT Senopati Mega Nusantara: menjadi holding company terpercaya yang menggerakkan industri, perdagangan, dan investasi berkelanjutan dari Kendal untuk Nusantara.",
};

export default function VisiMisiPage() {
  return (
    <>
      <PageHero
        kicker="Visi & Misi"
        title="Arah &"
        accent="Komitmen"
        watermark="VISI"
        description="Kompas jangka panjang yang menuntun setiap keputusan strategis dan operasional PT Senopati Mega Nusantara."
      />

      {/* ===== Visi ===== */}
      <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32 lg:py-36">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
        <span
          aria-hidden
          className="text-outline-light pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[34vw] font-extrabold leading-none opacity-40 lg:text-[22rem]"
        >
          VISI
        </span>
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[130px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-300">
              Visi Perusahaan
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              aria-hidden
              className="mx-auto -mb-6 mt-6 font-serif text-[7rem] leading-none text-gold-500/30"
            >
              “
            </p>
            <blockquote className="text-[26px] font-extrabold leading-[1.35] tracking-tight text-paper sm:text-4xl lg:text-[2.9rem]">
              Menjadi{" "}
              <em className="font-serif font-normal italic text-gold-300">
                holding company terpercaya
              </em>{" "}
              yang menggerakkan roda industri, perdagangan, dan investasi
              berkelanjutan —{" "}
              <em className="font-serif font-normal italic text-gold-300">
                dari Kendal, untuk Nusantara.
              </em>
            </blockquote>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
              {["Industri", "Perdagangan", "Investasi", "Keberlanjutan"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-steel-300"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Misi ===== */}
      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
        <div
          aria-hidden
          className="text-outline-navy pointer-events-none absolute -top-8 right-0 select-none text-[13rem] font-extrabold leading-none opacity-60"
        >
          MISI
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Misi Strategis"
            title={
              <>
                Lima Langkah Nyata{" "}
                <em className="font-serif font-normal italic text-gold-500">
                  Menuju Visi
                </em>
              </>
            }
            description="Setiap misi diterjemahkan menjadi target operasional terukur di masing-masing unit bisnis."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MISSIONS.map((mission, i) => {
              const Icon = mission.icon;
              const wide = i === MISSIONS.length - 1;
              return (
                <Reveal
                  key={mission.title}
                  delay={i * 0.07}
                  className={`h-full ${wide ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-steel-200/70 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-[0_24px_60px_rgba(10,29,51,0.12)] sm:p-8">
                    <span
                      aria-hidden
                      className="text-outline-navy absolute -right-2 -top-5 select-none text-[6.5rem] font-extrabold leading-none"
                    >
                      0{i + 1}
                    </span>
                    <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="relative mt-6 text-[17px] font-extrabold tracking-tight text-navy-900">
                      {mission.title}
                    </h3>
                    <p className="relative mt-2.5 text-[13.5px] leading-relaxed text-steel-500">
                      {mission.text}
                    </p>
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 w-0 bg-gold-500 transition-all duration-500 group-hover:w-full"
                    />
                  </div>
                </Reveal>
              );
            })}

            {/* Closing statement card */}
            <Reveal delay={MISSIONS.length * 0.07} className="h-full">
              <div className="relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-navy-950 p-8">
                <div className="bg-grain absolute inset-0 opacity-[0.06]" aria-hidden />
                <p className="relative font-serif text-xl italic leading-snug text-gold-300 sm:text-2xl">
                  “Satu visi, lima misi, satu standar: kepercayaan.”
                </p>
                <p className="relative mt-8 text-[11px] font-bold uppercase tracking-[0.28em] text-steel-400">
                  — Manajemen PT Senopati Mega Nusantara
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Sejalan dengan Visi Kami?"
        description="Kami membuka pintu bagi mitra yang berbagi nilai keberlanjutan dan integritas. Diskusikan peluang kolaborasi strategis Anda hari ini."
        primaryLabel="Ajukan Kerja Sama"
      />
    </>
  );
}
