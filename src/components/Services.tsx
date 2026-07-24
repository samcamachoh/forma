import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Brand & identity",
    desc: "Marks, type systems, color, and voice built to hold their weight at any size — from a favicon to a building.",
  },
  {
    n: "02",
    title: "Website design",
    desc: "Editorial, deliberate layouts built around how your clients actually decide. Every scroll earns the next one.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Fast, accessible, meticulously built sites on modern frameworks. No bloat, no page-builder debt.",
  },
  {
    n: "04",
    title: "Growth engineering",
    desc: "Analytics, SEO foundations, and conversion work after launch, so the site keeps compounding.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-cream md:py-32">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-cream/15 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tightest md:text-7xl">
              What
              <br />
              we do
            </h2>
            <p className="max-w-sm text-cream/60">
              Full-service design and development — from the first sketch to a
              site that actively grows your pipeline.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-cream/15">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-4 py-10 transition-colors md:grid-cols-12 md:items-center md:gap-8">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-orange md:col-span-1">
                  {s.n}
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase tracking-headline transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-4xl">
                  {s.title}
                </h3>
                <p className="text-cream/60 md:col-span-6">{s.desc}</p>
                <span className="hidden text-2xl text-cream/25 transition-all group-hover:translate-x-2 group-hover:text-orange md:col-span-1 md:block md:text-right">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
