import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/reveal";
import { WA_DEFAULT } from "@/lib/site";

interface CtaBannerProps {
  kicker?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CtaBanner({
  kicker = "Mari Bermitra",
  title,
  description,
  primaryLabel = "Ajukan Penawaran",
  primaryHref = "/kontak",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/cta-gudang.jpg"
        alt="Koridor gudang industri PT Senopati Mega Nusantara"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-950/82" aria-hidden />
      <div className="bg-grain absolute inset-0 opacity-[0.06]" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28 lg:py-32">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-300">
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-steel-300">
              {description}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.26}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 py-3.5 pl-7 pr-6 text-[15px] font-bold text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_10px_36px_rgba(196,136,43,0.45)]"
            >
              {primaryLabel}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-paper transition-all duration-300 hover:border-gold-400/70 hover:text-gold-300"
            >
              <MessageCircle className="h-5 w-5" /> Chat WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
