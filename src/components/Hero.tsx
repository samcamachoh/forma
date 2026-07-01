"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <motion.div
        style={{ y: blobOneY }}
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-clay/20 blur-3xl"
      />
      <motion.div
        style={{ y: blobTwoY }}
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-moss/15 blur-3xl"
      />

      <div className="container-px relative mx-auto max-w-8xl">
        <h1 className="max-w-5xl font-display text-[13vw] leading-[0.95] tracking-tightest md:text-[6.5rem]">
          <MaskLine delay={0}>We design</MaskLine>
          <MaskLine delay={0.1}>
            <span className="relative inline-block italic text-clay">
              beautiful
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9, ease }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-clay/50 md:-bottom-2"
              />
            </span>{" "}
            sites that
          </MaskLine>
          <MaskLine delay={0.2}>win you clients.</MaskLine>
        </h1>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg text-ink/70">
            Forma is a boutique studio building intentional, high-conversion
            websites for ambitious brands — engineered to turn attention into
            growth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-cream transition-transform hover:scale-[1.03]"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-ink/80 hover:border-ink hover:text-ink transition-colors"
            >
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
