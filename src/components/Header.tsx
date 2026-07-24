"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#guarantee", label: "Guarantee" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-8xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="w-16 text-orange" title="Forma Design Studio" />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-ink/60 sm:block">
            Forma Design Studio
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-ink/60 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-orange after:transition-all hover:text-ink hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center bg-orange px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-ink md:inline-flex"
        >
          Start a project
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t border-ink/10 bg-cream px-6 py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-extrabold uppercase tracking-headline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center bg-orange px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
