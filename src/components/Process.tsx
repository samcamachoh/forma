import Reveal from "./Reveal";

const steps = [
  {
    n: "Discover",
    desc: "We study your clients, your competitors, and your business goals before we open a design file.",
  },
  {
    n: "Design",
    desc: "Concepts rooted in a clear point of view — refined with you until it feels inevitable, not generic.",
  },
  {
    n: "Build",
    desc: "Pixel-accurate, fast, accessible development — tested across every device your clients actually use.",
  },
  {
    n: "Grow",
    desc: "We watch what happens after launch and keep refining — because a beautiful site should keep earning.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tightest md:text-6xl">
            How we work
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative pl-8 md:pl-0">
                <div className="mb-6 flex items-center gap-4 md:block">
                  <span className="font-display text-5xl text-clay/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl">{s.n}</h3>
                <p className="mt-3 text-ink/60">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="mt-8 hidden h-px w-full bg-ink/10 md:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
