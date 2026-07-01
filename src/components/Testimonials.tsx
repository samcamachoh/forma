import Reveal from "./Reveal";

const quotes = [
  {
    quote:
      "Forma didn't just redesign our site — they rebuilt how people experience our brand. Inbound consultations nearly tripled in the first quarter.",
    name: "Elena Marsh",
    role: "Founder, Aurelia Skincare",
  },
  {
    quote:
      "Every page felt intentional. Nothing was there by accident, and it showed — clients started mentioning the site in first calls.",
    name: "Devon Okafor",
    role: "Principal, Meridian Architecture",
  },
  {
    quote:
      "They treated our growth targets like their own. The 90-day guarantee wasn't a slogan — they genuinely kept iterating until the numbers moved.",
    name: "Priya Nandan",
    role: "CMO, Northfield Capital",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="container-px mx-auto max-w-8xl">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tightest md:text-6xl">
            Kind words
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-8">
                <blockquote className="font-display text-xl leading-snug italic text-ink/90">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="font-medium text-ink">{q.name}</div>
                  <div className="text-ink/50">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
