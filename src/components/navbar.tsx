"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

function LogoMark() {
  return (
    <span className="relative grid h-10 w-10 shrink-0 place-items-center">
      <span className="absolute inset-[3px] rotate-45 rounded-[5px] border-2 border-gold-400" />
      <span className="font-serif text-lg italic leading-none text-paper">S</span>
    </span>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span className="block text-[13px] font-extrabold tracking-[0.2em] text-paper">
          PT SENOPATI
        </span>
        <span className="mt-1.5 block text-[10px] font-semibold tracking-[0.34em] text-gold-300">
          MEGA NUSANTARA
        </span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-navy-950/90 shadow-[0_10px_40px_rgba(5,16,31,0.45)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label={SITE.name} className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-300 ${
                    active ? "text-gold-300" : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-[2px] left-1/2 h-[2.5px] -translate-x-1/2 rounded-full bg-gold-400 transition-all duration-300 ${
                      active ? "w-6" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/kontak"
              className="group hidden items-center gap-2 rounded-full bg-gold-500 py-2.5 pl-5 pr-4 text-[13.5px] font-bold text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_8px_28px_rgba(196,136,43,0.4)] md:inline-flex"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition hover:border-gold-400/60 hover:text-gold-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] flex flex-col bg-navy-950 lg:hidden"
          >
            <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.05]" />
            <div className="flex h-[76px] items-center justify-between px-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition hover:border-gold-400/60 hover:text-gold-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Menu mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-baseline gap-4 border-b border-white/5 py-4 text-[26px] font-bold tracking-tight transition-colors ${
                      pathname === link.href ? "text-gold-300" : "text-paper hover:text-gold-200"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-[0.3em] text-gold-500">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2 px-8 pb-10 text-sm text-steel-300"
            >
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-400" /> {SITE.phoneDisplay}
              </p>
              <p className="flex items-center gap-2.5 break-all">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" /> {SITE.email}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
