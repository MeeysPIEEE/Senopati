import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-gold-400" aria-hidden />
        <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-gold-500">
          {kicker}
        </span>
        {centered && <span className="h-px w-10 bg-gold-400" aria-hidden />}
      </div>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-paper" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[15.5px] leading-relaxed ${
            dark ? "text-steel-300" : "text-steel-500"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
