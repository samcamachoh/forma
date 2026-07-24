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
    <section className="overflow-hidden bg-orange py-5 text-white">
      <div className="flex w-max animate-marquee items-center">
        {items.map((n, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display text-lg font-extrabold uppercase tracking-[0.12em] md:text-xl">
              {n}
            </span>
            <span
              aria-hidden
              className="mx-8 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50 md:mx-10"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
