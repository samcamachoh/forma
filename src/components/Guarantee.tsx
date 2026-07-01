import Reveal from "./Reveal";

const stats = [
  { value: "48+", label: "Studios & brands launched" },
  { value: "3.2×", label: "Average lift in qualified leads" },
  { value: "90 days", label: "Performance guarantee window" },
  { value: "4.9 / 5", label: "Average client rating" },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="text-sm uppercase tracking-[0.2em] text-clay">
              The Forma guarantee
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tightest md:text-5xl">
              If your new site doesn&apos;t outperform your old one in{" "}
              <span className="italic text-clay">90 days</span>, we keep
              working — free.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ink/60">
              Beautiful design is the baseline, not the finish line. Every
              engagement ends with a measurable lift in leads, bookings, or
              sales — or we stay on it until it does, at no extra cost.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-cream transition-transform hover:scale-[1.03]"
            >
              See if you qualify
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/10 bg-paper p-8">
                  <div className="font-display text-4xl text-ink md:text-5xl">
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
