import type { ReactNode } from "react";
import Reveal from "@/components/reveal";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  accent?: string;
  description?: string;
  watermark: string;
}

export default function PageHero({
  kicker,
  title,
  accent,
  description,
  watermark,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div className="bg-blueprint absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-[36rem] rounded-full bg-gold-500/15 blur-[130px]"
        aria-hidden
      />
      <div className="bg-grain absolute inset-0 opacity-[0.05]" aria-hidden />
      <span
        aria-hidden
        className="text-outline-light pointer-events-none absolute -bottom-8 right-0 select-none text-[19vw] font-extrabold leading-none opacity-50 lg:text-[15rem]"
      >
        {watermark}
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-gold-400" aria-hidden />
            <span className="text-paper/50">PT Senopati Mega Nusantara</span>
            <span className="text-gold-500">/</span>
            <span className="text-gold-300">{kicker}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {title}
            {accent && (
              <>
                {" "}
                <span className="font-serif font-normal italic text-gold-300">
                  {accent}
                </span>
              </>
            )}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-steel-300">
              {description}
            </p>
          </Reveal>
        )}
      </div>

      <div
        className="gold-hairline absolute bottom-0 left-0 h-px w-full"
        aria-hidden
      />
    </section>
  );
}
