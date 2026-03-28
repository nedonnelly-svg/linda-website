import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: {
    absolute:
      "Online Trauma Therapy in California & New York | Dr. Linda Hoffman, PsyD — EMDR & Trauma Specialist",
  },
  description:
    "Ready to feel like yourself again? Licensed trauma therapist Dr. Linda Hoffman offers online trauma therapy, EMDR, and TRM for adults in CA & NY. Free phone consultation.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-accent/20 bg-gradient-to-b from-surface to-bg p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Telehealth · California &amp; New York
        </p>
        <h1 className="mt-4 font-serif text-[1.65rem] italic leading-tight text-text sm:text-4xl md:text-[2.35rem]">
          Online trauma therapy when you&apos;re tired of white-knuckling through the day
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          I&apos;m <strong className="font-semibold text-text">Dr. Linda Hoffman</strong> (she/her),
          PsyD — a licensed clinical psychologist who focuses on{" "}
          <strong className="font-semibold text-text">trauma therapy</strong>, including{" "}
          <strong className="font-semibold text-text">EMDR</strong> and somatic approaches that work
          with how trauma lives in your <em>nervous system</em>, not just the story you tell about it.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-bg hover:brightness-110"
          >
            Request a free phone consultation
          </Link>
          <Link
            href="/trauma-recovery"
            className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-text hover:border-accent/40 hover:text-accent"
          >
            How trauma therapy helps
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted/90">
          No pressure to &quot;have it all figured out&quot; before we talk — that&apos;s what the
          call is for.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="signs-heading">
        <h2 id="signs-heading" className="font-serif text-2xl italic text-text md:text-3xl">
          Maybe it&apos;s trauma if…
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          People find me when coping strategies stop working, or when they finally have the bandwidth
          to address something they&apos;ve minimized for years. None of this means you&apos;re
          broken — it often means your system is doing exactly what it was trained to do after
          overwhelming experiences.
        </p>
        <ul className="mt-6 space-y-3 text-text">
          {[
            "You're on edge, shut down, or swinging between both — and you can't fully explain why.",
            "Relationships, work, or creativity feel harder than they \"should,\" even when things look fine on paper.",
            "You've tried talk therapy and gained insight, but your body still hijacks you.",
            "You minimize what happened (\"others had it worse\") while still feeling its weight.",
            "You want change that lasts — not another temporary fix.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          If several of these resonate,{" "}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            reaching out
          </Link>{" "}
          is a practical next step — not a commitment to start therapy on the spot.
        </p>
      </section>

      <section className="mt-14 rounded-xl border border-white/10 bg-surface/60 p-6 md:p-8" aria-labelledby="why-heading">
        <h2 id="why-heading" className="text-sm font-bold uppercase tracking-wider text-muted">
          Why trauma-focused therapy — and why now?
        </h2>
        <p className="mt-4 text-muted">
          Trauma isn&apos;t only &quot;big T&quot; events. Chronic stress, emotional neglect, unsafe dynamics, or a
          single overwhelming moment can leave the body braced long after the danger passes. When the
          alarm system stays on, you might experience anxiety, panic, numbness, irritability,
          sleep issues, or feeling disconnected from yourself or others.
        </p>
        <p className="mt-4 text-muted">
          My job isn’t to re-traumatize you by forcing you to retell every detail. It’s to help you
          process what&apos;s stuck so your system can update its sense of safety — using approaches
          grounded in trauma research, including{" "}
          <Link href="/treatment-modalities" className="font-semibold text-accent hover:underline">
            EMDR, TRM, and related methods
          </Link>
          , matched to your goals and pace.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3" aria-labelledby="pillars-heading">
        <h2 id="pillars-heading" className="sr-only">
          What you can expect
        </h2>
        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Clarity first</h3>
          <p className="mt-3 text-sm text-muted">
            We start with what you want to be different in your life — work, relationships, sleep,
            confidence — and build treatment around outcomes, not jargon.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Nervous-system care</h3>
          <p className="mt-3 text-sm text-muted">
            Trauma therapy here means working with how survival responses show up today — not only
            analyzing the past from the neck up.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Secure telehealth</h3>
          <p className="mt-3 text-sm text-muted">
            Sessions are online on a HIPAA-compliant platform — consistent care whether you&apos;re in
            CA or NY, without adding a commute to your day.
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-white/10 pt-12" aria-labelledby="credentials-heading">
        <h2 id="credentials-heading" className="font-serif text-2xl italic text-text">
          Training you can verify
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          I hold a PsyD in clinical psychology and advanced training in trauma modalities (including
          EMDR and TRM). I&apos;ve worked in university counseling centers, community clinics, and
          private practice — plus years inside the entertainment industry, which shapes how I work
          with high-pressure careers. Full history on{" "}
          <Link href="/experience" className="font-semibold text-accent hover:underline">
            credentials &amp; experience
          </Link>
          .
        </p>
      </section>

      <section
        className="mt-10 rounded-xl border border-white/10 bg-bg p-6 md:p-8"
        aria-labelledby="creatives-heading"
      >
        <h2 id="creatives-heading" className="text-lg font-semibold text-text">
          Work in film, TV, or media?
        </h2>
        <p className="mt-3 text-sm text-muted">
          Many of my clients are creatives and executives whose careers amplify stress — often on top
          of older trauma. That&apos;s a specialty lane for me, but{" "}
          <strong className="text-text">trauma therapy is the through-line</strong> for everyone I
          see.{" "}
          <Link
            href="/entertainment-industry-professionals"
            className="font-semibold text-accent hover:underline"
          >
            Read more about therapy for entertainment professionals →
          </Link>
        </p>
      </section>

      <section
        className="mt-14 rounded-2xl border border-accent/25 bg-accent/5 p-8 text-center md:p-10"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="font-serif text-2xl italic text-text md:text-3xl">
          You don&apos;t have to carry this alone anymore
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Tell me a bit about what you&apos;re dealing with. If I&apos;m not the right fit, I&apos;ll
          point you toward options that are.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-bg hover:brightness-110"
        >
          Book your free phone consultation
        </Link>
        <p className="mt-4 text-xs text-muted">
          Fees, insurance (out-of-network), and session length →{" "}
          <Link href="/faq" className="text-accent hover:underline">
            FAQ
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
