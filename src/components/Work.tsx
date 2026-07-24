import Reveal from "./Reveal";

const projects = [
  {
    name: "Aurelia Skincare",
    initials: "AS",
    category: "E-commerce · Brand",
    result: "+142% inquiries",
    panel: "bg-orange text-white",
    chip: "bg-white text-ink",
  },
  {
    name: "Northfield Capital",
    initials: "NC",
    category: "Finance · Web platform",
    result: "3.1× qualified leads",
    panel: "bg-ink text-cream",
    chip: "bg-orange text-white",
  },
  {
    name: "Kin & Co. Studio",
    initials: "KC",
    category: "Hospitality · Website",
    result: "+68% bookings",
    panel: "bg-sand text-ink",
    chip: "bg-ink text-cream",
  },
  {
    name: "Meridian Architecture",
    initials: "MA",
    category: "Architecture · Portfolio",
    result: "+210% project requests",
    panel: "bg-ink text-orange",
    chip: "bg-cream text-ink",
  },
  {
    name: "Stonewell Legal",
    initials: "SL",
    category: "Professional services",
    result: "+87% consult bookings",
    panel: "bg-orange text-ink",
    chip: "bg-ink text-cream",
  },
  {
    name: "Arbor House",
    initials: "AH",
    category: "Real estate · Website",
    result: "2.4× time on site",
    panel: "bg-paper text-orange",
    chip: "bg-orange text-white",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-cream py-24 md:py-32">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tightest md:text-7xl">
              Selected
              <br />
              work
            </h2>
            <p className="max-w-sm text-ink/60">
              Six of the brands we&apos;ve shaped, built, and shipped — each one
              measured against one question: did it move the business forward?
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a href="#contact" className="group block">
                <div
                  className={`relative flex h-72 items-end overflow-hidden p-6 ${p.panel}`}
                >
                  <span className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[11rem] font-extrabold uppercase leading-none tracking-tightest opacity-20 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-2">
                    {p.initials}
                  </span>
                  <span
                    className={`relative px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${p.chip}`}
                  >
                    {p.result}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 border-x border-b border-ink/15 bg-paper p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-headline">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink/50">{p.category}</p>
                  </div>
                  <span className="text-xl text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-orange">
                    →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
