import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-clay/15 blur-3xl"
      />
      <div className="container-px relative mx-auto max-w-8xl text-center">
        <Reveal>
          <span className="text-sm uppercase tracking-[0.2em] text-clay">
            Let&apos;s talk
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-tight tracking-tightest md:text-7xl">
            Let&apos;s build something that grows with you.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-ink/60">
            Tell us about your business and where you want it to go. We reply
            within one business day with next steps and availability.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@forma.studio"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-cream transition-transform hover:scale-[1.03]"
            >
              hello@forma.studio
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-ink/80 hover:border-ink hover:text-ink transition-colors"
            >
              View our work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
