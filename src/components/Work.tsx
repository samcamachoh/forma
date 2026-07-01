import Reveal from "./Reveal";

const projects = [
  {
    name: "Aurelia Skincare",
    category: "E-commerce · Brand",
    result: "+142% inquiries",
    gradient: "from-[#e7c9b3] via-[#d99a76] to-[#a8492f]",
  },
  {
    name: "Northfield Capital",
    category: "Finance · Web platform",
    result: "3.1x qualified leads",
    gradient: "from-[#cdd6c4] via-[#8fa07f] to-[#3f4d34]",
  },
  {
    name: "Kin & Co. Studio",
    category: "Hospitality · Website",
    result: "+68% bookings",
    gradient: "from-[#f0e2c8] via-[#dcb772] to-[#8a5a2b]",
  },
  {
    name: "Meridian Architecture",
    category: "Architecture · Portfolio",
    result: "+210% project requests",
    gradient: "from-[#d9d3ce] via-[#a89c92] to-[#4a4038]",
  },
  {
    name: "Stonewell Legal",
    category: "Professional services",
    result: "+87% consult bookings",
    gradient: "from-[#cfd7db] via-[#7f97a1] to-[#2e3f47]",
  },
  {
    name: "Arbor House",
    category: "Real estate · Website",
    result: "2.4x average time on site",
    gradient: "from-[#e8ddc7] via-[#c7a97a] to-[#6b4a2e]",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl leading-tight tracking-tightest md:text-6xl">
              Selected work
            </h2>
            <p className="max-w-sm text-ink/60">
              A handful of the brands we&apos;ve helped design, build, and
              grow — each one measured against a single question: did it
              move the business forward?
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a
                href="#contact"
                className="group block overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-shadow hover:shadow-xl hover:shadow-ink/5"
              >
                <div
                  className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-xs text-ink">
                    {p.result}
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-ink/50">{p.category}</p>
                  </div>
                  <span className="translate-x-0 text-xl text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-ink">
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
