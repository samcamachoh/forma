const names = [
  "Aurelia",
  "Northfield",
  "Kin & Co.",
  "Meridian",
  "Stonewell",
  "Lumen",
  "Arbor House",
  "Castello",
];

export default function Marquee() {
  const items = [...names, ...names];
  return (
    <section className="border-y border-ink/10 bg-paper py-8">
      <div className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-ink/40">
        Trusted by ambitious brands
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {items.map((n, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-ink/30 whitespace-nowrap"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
