"use client";

import { motion } from "framer-motion";
import LogoField from "./LogoField";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-cream pb-24 pt-36 md:pb-28 md:pt-40"
    >
      <LogoField />

      <div className="container-px relative mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-ink/50"
        >
          <span className="h-2 w-2 rounded-full bg-orange" />
          Forma Design Studio — est. 2016
        </motion.div>

        <h1 className="mt-8 max-w-6xl font-display text-[15vw] font-extrabold uppercase leading-[0.86] tracking-tightest md:text-[8.5rem]">
          <MaskLine delay={0.05}>Design</MaskLine>
          <MaskLine delay={0.15}>
            <span className="text-orange">with</span> weight.
          </MaskLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-12 flex flex-col gap-10 border-t border-ink/15 pt-8 md:flex-row md:items-start md:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-ink/70">
            We build brands and websites with a point of view — bold form,
            ruthless clarity, and engineering that holds up long after launch.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-orange px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-ink"
            >
              Start a project
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 border border-ink/25 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              See the work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
