import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Brand & identity",
    desc: "A distinct visual language — logo, type, color, and voice — that makes your studio unmistakable before a single word is read.",
  },
  {
    n: "02",
    title: "Website design",
    desc: "Intentional, editorial layouts built around how your clients actually decide — every scroll designed to build trust and momentum.",
  },
  {
    n: "03",
    title: "Development",
    desc: "Fast, accessible, meticulously-built sites on modern frameworks. No bloat, no page-builder debt — just clean code that ships.",
  },
  {
    n: "04",
    title: "Growth engineering",
    desc: "Analytics, SEO foundations, and conversion-focused iteration after launch, so the site keeps compounding long after we ship it.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-28 text-cream md:py-36">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl leading-tight tracking-tightest md:text-6xl">
              What we do
            </h2>
            <p className="max-w-sm text-cream/60">
              Full-service design and development — from first sketch to a
              site that actively grows your pipeline.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-cream/15 border-t border-cream/15">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:items-center md:gap-8">
                <span className="font-display text-lg text-cream/40 md:col-span-1">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl md:col-span-4 md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-cream/60 md:col-span-6">{s.desc}</p>
                <span className="hidden text-2xl text-cream/30 transition-transform group-hover:translate-x-2 group-hover:text-clay md:col-span-1 md:block md:text-right">
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
