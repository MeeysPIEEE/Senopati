"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { BUSINESS_UNITS } from "@/lib/data";
import { EASE } from "@/components/reveal";

const SLIDES = [
  { src: "/images/hero-industri.jpg", label: "Industri & Manufaktur" },
  { src: "/images/hero-logistik.jpg", label: "Perdagangan & Logistik" },
  { src: "/images/hero-kopi.jpg", label: "Agribisnis Kopi" },
];

const HEADLINE: { text: string; italicWord?: string }[] = [
  { text: "Solusi Terintegrasi" },
  { text: "Industri, Trading, & Investasi", italicWord: "Investasi" },
  { text: "Perdagangan Nusantara.", italicWord: "Nusantara." },
];

const TICKER = [...BUSINESS_UNITS.map((u) => u.title), "Kendal · Jawa Tengah"];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % SLIDES.length),
      6500
    );
    return () => clearInterval(timer);
  }, [idx]);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-950">
      {/* Background slider */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence mode="sync">
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <Image
              src={SLIDES[idx].src}
              alt={SLIDES[idx].label}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-navy-950/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="bg-grain absolute inset-0 opacity-[0.06]" />
      </div>

      {/* Side rail */}
      <div
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-4 lg:flex lg:flex-col"
        aria-hidden
      >
        <span className="h-16 w-px bg-white/20" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-paper/40 [writing-mode:vertical-lr]">
          Kendal — Nusantara
        </span>
        <span className="h-16 w-px bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-28 pt-36 sm:px-8 lg:pl-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-gold-300">
              PT Senopati Mega Nusantara · Kendal, Jawa Tengah
            </span>
          </motion.div>

          <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-[4.4rem]">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1.5">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.14, ease: EASE }}
                >
                  {line.italicWord
                    ? line.text.split(line.italicWord).map((part, j, arr) => (
                        <span key={j}>
                          {part}
                          {j < arr.length - 1 && (
                            <em className="font-serif font-normal italic text-gold-300">
                              {line.italicWord}
                            </em>
                          )}
                        </span>
                      ))
                    : line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-steel-200"
          >
            Holding company serbaguna yang mengintegrasikan perdagangan suku
            cadang, logam & skrap, pemulihan material, pengolahan kopi, dan
            aktivitas keuangan — satu atap, satu standar mutu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/unit-bisnis"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 py-3.5 pl-7 pr-6 text-[15px] font-bold text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_10px_36px_rgba(196,136,43,0.45)]"
            >
              Jelajahi Unit Bisnis
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-paper transition-all duration-300 hover:border-gold-400/70 hover:text-gold-300"
            >
              Profil Perusahaan
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-24 right-5 z-20 hidden items-end gap-6 sm:right-8 md:flex"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIdx(i)}
            className="group flex flex-col items-start gap-2.5"
            aria-label={`Slide ${i + 1}: ${slide.label}`}
          >
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                i === idx ? "text-gold-300" : "text-paper/45 group-hover:text-paper/70"
              }`}
            >
              {slide.label}
            </span>
            <span className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold tracking-[0.18em] ${
                  i === idx ? "text-gold-300" : "text-paper/40"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === idx
                    ? "w-14 bg-gold-400"
                    : "w-7 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </span>
          </button>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-24 left-5 z-20 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-paper/45 sm:left-8 md:flex lg:left-28"
      >
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-gold-400" />
        Gulir ke bawah
      </motion.div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-white/10 bg-navy-950/55 py-4 backdrop-blur-md">
        <div className="flex overflow-hidden" aria-hidden>
          <div className="animate-marquee flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {TICKER.map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="flex items-center text-[12px] font-semibold uppercase tracking-[0.24em] text-paper/55"
                  >
                    <span className="px-7">{item}</span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
