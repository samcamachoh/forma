"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-clay/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-moss/15 blur-3xl"
      />

      <div className="container-px relative mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-sm text-ink/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          Design &amp; development studio — est. 2018
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display text-[13vw] leading-[0.95] tracking-tightest md:text-[6.5rem]"
        >
          We design
          <br />
          <span className="italic text-clay">beautiful</span> sites that
          <br />
          win you clients.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
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
