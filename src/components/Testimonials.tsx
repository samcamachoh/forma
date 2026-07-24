import Reveal from "./Reveal";

const quotes = [
  {
    quote:
      "Forma didn't just redesign our site — they rebuilt how people experience the brand. Inbound consultations nearly tripled in the first quarter.",
    name: "Elena Marsh",
    role: "Founder, Aurelia Skincare",
  },
  {
    quote:
      "Every page felt intentional. Nothing was there by accident, and it showed — clients started mentioning the site on first calls.",
    name: "Devon Okafor",
    role: "Principal, Meridian Architecture",
  },
  {
    quote:
      "They treated our growth targets like their own. The 90-day guarantee wasn't a slogan — they kept iterating until the numbers moved.",
    name: "Priya Nandan",
    role: "CMO, Northfield Capital",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <h2 className="border-b border-ink/15 pb-8 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tightest md:text-7xl">
            Kind words
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col justify-between border border-ink/15 bg-cream p-8">
                <span aria-hidden className="font-display text-5xl font-extrabold leading-none text-orange">
                  &ldquo;
                </span>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink/80">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/15 pt-5 text-sm">
                  <div className="font-display font-bold uppercase tracking-[0.14em] text-ink">
                    {q.name}
                  </div>
                  <div className="mt-1 text-ink/50">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
