"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";

/**
 * The tiled monogram field that sits behind the hero: rows of the FDS mark
 * laid out on a rotated brick grid, each row drifting at its own speed so the
 * pattern never quite repeats. Tonal by design — it should read as texture,
 * not as content.
 */

type Row = {
  /** seconds for one full pass */
  duration: number;
  /** drift direction */
  reverse?: boolean;
  /** starting offset, in rem, to break the grid into a brick pattern */
  offset: number;
  /** every nth mark is tinted orange instead of sand */
  accentAt?: number;
};

const ROWS: Row[] = [
  { duration: 74, offset: -8, accentAt: 5 },
  { duration: 96, reverse: true, offset: -22 },
  { duration: 62, offset: -3, accentAt: 7 },
  { duration: 88, reverse: true, offset: -16 },
  { duration: 70, offset: -11, accentAt: 6 },
  { duration: 104, reverse: true, offset: -26 },
  { duration: 80, offset: -19, accentAt: 4 },
  { duration: 92, reverse: true, offset: -6 },
  { duration: 68, offset: -13, accentAt: 8 },
];

const PER_ROW = 8;

function MarkRow({ row }: { row: Row }) {
  const marks = Array.from({ length: PER_ROW * 2 }, (_, i) => i);

  return (
    <div
      className="flex w-max"
      style={{ transform: `translateX(${row.offset}rem)` }}
    >
      <div
        className="animate-drift flex w-max items-center gap-[12vw] pr-[12vw] motion-reduce:animate-none md:gap-[5vw] md:pr-[5vw]"
        style={{
          animationDuration: `${row.duration}s`,
          animationDirection: row.reverse ? "reverse" : "normal",
        }}
      >
        {marks.map((i) => (
          <Logo
            key={i}
            className={`w-[46vw] shrink-0 md:w-[19vw] ${
              row.accentAt && i % row.accentAt === 0
                ? "text-orange/[0.10]"
                : "text-ink/[0.055]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LogoField() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0">
        {/* Static wrapper owns the layout transform — framer writes its own
            inline transform on the element it animates, which would otherwise
            clobber the Tailwind translate/rotate utilities. */}
        <div className="absolute left-1/2 top-1/2 w-[200vw] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg]">
          <motion.div
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="logo-field flex flex-col gap-[6.3vw] md:gap-[2.6vw]"
          >
            {ROWS.map((row, i) => (
              <MarkRow key={i} row={row} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
