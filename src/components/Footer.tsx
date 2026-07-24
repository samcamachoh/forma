import Logo from "./Logo";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Guarantee", href: "#guarantee" },
];

const social = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-cream">
      <div className="container-px mx-auto max-w-8xl pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="inline-block">
              <Logo className="w-32 text-orange" title="Forma Design Studio" />
            </a>
            <p className="mt-6 max-w-xs text-cream/50">
              A design studio building bold, considered brands and websites for
              companies that would rather be remembered than blend in.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/40">
              Site
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-cream/70 transition-colors hover:text-orange"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/40">
              Connect
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:hello@forma.studio"
                  className="text-cream/70 transition-colors hover:text-orange"
                >
                  hello@forma.studio
                </a>
              </li>
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-cream/70 transition-colors hover:text-orange"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 py-8 text-sm text-cream/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Forma Design Studio. All rights
            reserved.
          </span>
          <span>Designed &amp; built in-house.</span>
        </div>
      </div>

      {/* Oversized signature mark closing out the page. */}
      <div className="container-px mx-auto max-w-8xl pb-12">
        <Logo className="w-[62%] text-cream/[0.09]" />
      </div>
    </footer>
  );
}
