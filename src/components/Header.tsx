"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/trauma-recovery", label: "Trauma recovery" },
  { href: "/entertainment-industry-professionals", label: "Entertainment industry" },
  { href: "/treatment-modalities", label: "Treatment modalities" },
];

const aboutLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/faq", label: "FAQ" },
];

function DropdownPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-full z-50 mt-2 hidden min-w-[14rem] flex-col rounded-lg border border-white/10 bg-surface p-2 shadow-xl group-hover:flex group-focus-within:flex">
      {children}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<string | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setMobilePanel(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-6">
        <Link href="/" className="text-sm font-semibold text-text hover:text-accent" onClick={closeAll}>
          Above the Line Psychotherapy
        </Link>

        <button
          type="button"
          className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-muted md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="site-navigation"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main"
        >
          <Link href="/" className="text-sm text-muted hover:text-accent">
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-muted hover:text-accent"
              aria-haspopup="true"
            >
              Services
            </button>
            <DropdownPanel>
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-text hover:bg-white/5 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </DropdownPanel>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-muted hover:text-accent"
              aria-haspopup="true"
            >
              About
            </button>
            <DropdownPanel>
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-text hover:bg-white/5 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </DropdownPanel>
          </div>

          <Link href="/resources-notices" className="text-sm text-muted hover:text-accent">
            Resources
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/15 bg-surface px-4 py-1.5 text-sm font-medium text-text hover:border-accent/40 hover:text-accent"
          >
            Contact
          </Link>

          <a
            href="https://www.drlindahoffman.com/"
            className="text-sm text-muted/80 hover:text-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            Official site ↗
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="site-navigation"
          className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden"
          aria-label="Main mobile"
        >
          <Link href="/" className="py-2 text-sm text-muted hover:text-accent" onClick={closeAll}>
            Home
          </Link>
          <button
            type="button"
            className="flex w-full items-center justify-between py-2 text-left text-sm text-muted"
            onClick={() => setMobilePanel((p) => (p === "svc" ? null : "svc"))}
          >
            Services
            <span>{mobilePanel === "svc" ? "−" : "+"}</span>
          </button>
          {mobilePanel === "svc" &&
            services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-l border-white/10 py-2 pl-4 text-sm text-text hover:text-accent"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
          <button
            type="button"
            className="flex w-full items-center justify-between py-2 text-left text-sm text-muted"
            onClick={() => setMobilePanel((p) => (p === "ab" ? null : "ab"))}
          >
            About
            <span>{mobilePanel === "ab" ? "−" : "+"}</span>
          </button>
          {mobilePanel === "ab" &&
            aboutLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-l border-white/10 py-2 pl-4 text-sm text-text hover:text-accent"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/resources-notices"
            className="py-2 text-sm text-muted hover:text-accent"
            onClick={closeAll}
          >
            Resources
          </Link>
          <Link href="/contact" className="py-2 text-sm font-medium text-accent" onClick={closeAll}>
            Contact
          </Link>
          <a
            href="https://www.drlindahoffman.com/"
            className="py-2 text-sm text-muted/80"
            rel="noopener noreferrer"
            target="_blank"
          >
            Official site ↗
          </a>
        </nav>
      )}
    </header>
  );
}
