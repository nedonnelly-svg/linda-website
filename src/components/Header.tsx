"use client";

import Link from "next/link";
import { useState } from "react";

const aboutLinks = [
  { href: "/experience", label: "Credentials & background" },
  { href: "/faq", label: "FAQ & fees" },
];

function DropdownPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-full z-50 mt-2 hidden min-w-[14rem] flex-col rounded-lg border border-white/10 bg-surface p-2 shadow-xl group-hover:flex group-focus-within:flex">
      {children}
    </div>
  );
}

const navLinkClass = "text-sm text-muted hover:text-accent";
const navLinkAccent =
  "rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent hover:bg-accent/20";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:px-6">
        <Link href="/" className="text-sm font-semibold text-text hover:text-accent" onClick={closeAll}>
          Dr. Linda Hoffman · Trauma therapy
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

        <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 md:flex" aria-label="Main">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/trauma-recovery" className={`${navLinkClass} font-medium text-text`}>
            Trauma therapy
          </Link>
          <Link href="/treatment-modalities" className={navLinkClass}>
            EMDR &amp; approaches
          </Link>
          <Link href="/entertainment-industry-professionals" className={navLinkClass}>
            Creatives &amp; entertainment
          </Link>
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 ${navLinkClass}`}
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
          <Link href="/resources-notices" className={navLinkClass}>
            Resources
          </Link>
          <Link href="/contact" className={navLinkAccent}>
            Free consultation
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <nav
          id="site-navigation"
          className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden"
          aria-label="Main mobile"
        >
          <Link href="/" className="py-2 text-sm text-muted hover:text-accent" onClick={closeAll}>
            Home
          </Link>
          <Link href="/trauma-recovery" className="py-2 text-sm font-medium text-text" onClick={closeAll}>
            Trauma therapy
          </Link>
          <Link href="/treatment-modalities" className="py-2 text-sm text-muted hover:text-accent" onClick={closeAll}>
            EMDR &amp; approaches
          </Link>
          <Link
            href="/entertainment-industry-professionals"
            className="py-2 text-sm text-muted hover:text-accent"
            onClick={closeAll}
          >
            Creatives &amp; entertainment
          </Link>
          {aboutLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-muted hover:text-accent"
              onClick={closeAll}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/resources-notices" className="py-2 text-sm text-muted hover:text-accent" onClick={closeAll}>
            Resources
          </Link>
          <Link href="/contact" className="py-2 text-sm font-semibold text-accent" onClick={closeAll}>
            Free consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
