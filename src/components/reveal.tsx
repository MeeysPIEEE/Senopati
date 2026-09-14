"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.21, 0.6, 0.35, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  duration = 0.8,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export { EASE };
