import Reveal from "./Reveal";

const steps = [
  {
    n: "Discover",
    desc: "We study your clients, your competitors, and your numbers before we open a design file.",
  },
  {
    n: "Design",
    desc: "Concepts with a clear point of view — refined with you until the answer feels inevitable.",
  },
  {
    n: "Build",
    desc: "Pixel-accurate, fast, accessible development, tested on every device your clients actually use.",
  },
  {
    n: "Grow",
    desc: "We watch what happens after launch and keep sharpening — a good site should keep earning.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-paper py-24 md:py-32">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <h2 className="border-b border-ink/15 pb-8 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tightest md:text-7xl">
            How we work
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-t-4 border-orange pt-6">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-headline">
                  {s.n}
                </h3>
                <p className="mt-3 text-ink/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
