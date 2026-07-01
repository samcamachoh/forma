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
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="font-display text-3xl">
              Forma<span className="text-clay">.</span>
            </a>
            <p className="mt-4 max-w-xs text-cream/50">
              A design studio building beautiful, intentional websites that
              win clients and grow businesses.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/40">
              Site
            </div>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-cream/70 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/40">
              Connect
            </div>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@forma.studio"
                  className="text-cream/70 hover:text-cream"
                >
                  hello@forma.studio
                </a>
              </li>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-cream/70 hover:text-cream">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-sm text-cream/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Forma Studio. All rights reserved.</span>
          <span>Designed &amp; built by Forma.</span>
        </div>
      </div>
    </footer>
  );
}
