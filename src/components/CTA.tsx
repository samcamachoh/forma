import Logo from "./Logo";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-orange py-24 text-white md:py-32"
    >
      <div className="container-px relative mx-auto max-w-8xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Let&apos;s talk
          </span>
          <h2 className="mt-6 max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-tightest md:text-8xl">
            Let&apos;s build something with weight.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-white/80">
            Tell us about your business and where you want it to go. We reply
            within one business day with next steps and availability.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@forma.studio"
              className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-orange transition-colors hover:bg-ink hover:text-white"
            >
              hello@forma.studio
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 border border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View the work
            </a>
          </div>
        </Reveal>

        <Logo className="pointer-events-none absolute -bottom-20 right-6 hidden w-[34rem] text-white/15 md:right-12 lg:block xl:right-20" />
      </div>
    </section>
  );
}
