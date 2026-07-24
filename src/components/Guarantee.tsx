import Reveal from "./Reveal";

const stats = [
  { value: "48+", label: "Studios & brands launched" },
  { value: "3.2×", label: "Average lift in qualified leads" },
  { value: "90 days", label: "Performance guarantee window" },
  { value: "4.9/5", label: "Average client rating" },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-cream py-24 md:py-32">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              The Forma guarantee
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tightest md:text-6xl">
              If it doesn&apos;t beat your old site in{" "}
              <span className="text-orange">90 days</span>, we keep working —
              free.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ink/60">
              Bold design is the baseline, not the finish line. Every engagement
              ends with a measurable lift in leads, bookings, or sales — or we
              stay on it until it does, at no extra cost.
            </p>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-orange hover:text-white"
            >
              See if you qualify
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>

          <div className="grid grid-cols-2 border-l border-t border-ink/15">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="h-full">
                <div className="h-full border-b border-r border-ink/15 p-8">
                  <div className="font-display text-4xl font-extrabold uppercase tracking-tightest text-orange md:text-5xl">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm text-ink/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
