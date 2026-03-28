import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Linda Hoffman, PsyD · Trauma specialist
      </p>
      <h1 className="mt-3 font-serif text-4xl italic leading-tight text-text md:text-5xl">
        Trauma therapy &amp; care for creative professionals
      </h1>
      <p className="mt-6 max-w-prose text-lg text-muted">
        Clinical psychologist specializing in trauma recovery — including somatic-based approaches
        such as EMDR and the Trauma Resiliency Model (TRM). Online therapy in{" "}
        <strong className="font-semibold text-text">California</strong> and{" "}
        <strong className="font-semibold text-text">New York</strong>.
      </p>

      <section className="mt-10 rounded-xl border border-white/10 bg-surface p-6 md:p-8">
        <h2 className="font-serif text-2xl italic text-text">Welcome</h2>
        <p className="mt-4 text-muted">
          I&apos;m Dr. Linda Hoffman (she/her), a clinical psychologist specializing in trauma
          recovery. I provide online therapy in California and New York. This website is here to
          help you get to know me, my approach, and how I can support you in moving past the
          challenges that are keeping you from living the life you want and doing what you love.
          Take some time to browse the site. When you&apos;re ready to get started, use the contact
          page.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:brightness-110"
        >
          Get started
        </Link>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/trauma-recovery"
          className="rounded-xl border border-white/10 bg-surface/80 p-5 transition-colors hover:border-accent/30"
        >
          <h3 className="font-semibold text-text">Trauma recovery</h3>
          <p className="mt-2 text-sm text-muted">Your story. Your strength.</p>
        </Link>
        <Link
          href="/entertainment-industry-professionals"
          className="rounded-xl border border-white/10 bg-surface/80 p-5 transition-colors hover:border-accent/30"
        >
          <h3 className="font-semibold text-text">Entertainment industry</h3>
          <p className="mt-2 text-sm text-muted">Creative people. Creative solutions.</p>
        </Link>
        <Link
          href="/treatment-modalities"
          className="rounded-xl border border-white/10 bg-surface/80 p-5 transition-colors hover:border-accent/30"
        >
          <h3 className="font-semibold text-text">Treatment modalities</h3>
          <p className="mt-2 text-sm text-muted">Approaches tailored to your needs.</p>
        </Link>
        <Link
          href="/faq"
          className="rounded-xl border border-white/10 bg-surface/80 p-5 transition-colors hover:border-accent/30"
        >
          <h3 className="font-semibold text-text">FAQ</h3>
          <p className="mt-2 text-sm text-muted">Fees, insurance, sessions, and more.</p>
        </Link>
      </section>
    </PageShell>
  );
}
