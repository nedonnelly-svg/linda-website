import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SiteFigure } from "@/components/SiteFigure";

export const metadata: Metadata = {
  title: "Therapy for Entertainment Professionals — Trauma-Informed",
  description:
    "Trauma therapy for people in film, TV, and media: high stakes, public identity, and old survival patterns. Dr. Linda Hoffman, PsyD — online in CA & NY.",
  alternates: { canonical: "/entertainment-industry-professionals" },
};

export default function EntertainmentPage() {
  return (
    <PageShell>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] md:items-start md:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Specialty focus · Same core: trauma therapy
          </p>
          <h1 className="mt-3 font-serif text-3xl italic leading-tight text-text md:text-[2.65rem]">
            When your career amplifies everything underneath
          </h1>
          <p className="mt-6 text-muted">
            This page isn&apos;t a separate &quot;brand&quot; of therapy — it&apos;s for people whose work
            in <strong className="text-text">entertainment and media</strong> adds a specific kind of
            pressure on top of what they&apos;re already carrying. My practice is still anchored in{" "}
            <Link href="/trauma-recovery" className="font-semibold text-accent hover:underline">
              trauma therapy
            </Link>
            , EMDR-informed care, and nervous-system work.
          </p>
        </div>
        <SiteFigure
          src="/images/entertainment-film-desk.jpg"
          alt="Editing desk with film equipment and monitors — creative production work, stock image"
          frameClassName="aspect-[4/5] min-h-[220px]"
          sizes="(max-width: 768px) 100vw, 38vw"
          caption="Stock photo — not a client workspace or session."
        />
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
        <div className="relative aspect-[21/9] min-h-[160px] w-full md:min-h-[220px]">
          <Image
            src="/images/entertainment-stage-lights.jpg"
            alt="Theater stage lights glowing in the dark — performance, visibility, and high-stakes environments"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/20 to-transparent"
            aria-hidden
          />
        </div>
      </div>

      <div className="content-block mt-12">
        <h2>Why industry experience changes the conversation</h2>
        <p>
          I spent years in film and television development before becoming a psychologist. I don&apos;t
          need a long explanation of pitch rooms, unstable schedules, power dynamics, or what it feels
          like when your livelihood and identity blur. That context means we spend less time
          translating your world — and more time doing the actual therapeutic work.
        </p>

        <h2>What clients here are often sorting out</h2>
        <ul>
          <li>High visibility or high-stakes environments that keep the nervous system on high alert.</li>
          <li>
            Old trauma patterns resurfacing through conflict, rejection sensitivity, perfectionism, or
            burnout.
          </li>
          <li>Relationship strain at work or at home when stress has nowhere safe to land.</li>
          <li>
            A sense that you &quot;should&quot; be grateful — while still feeling depleted or disconnected.
          </li>
        </ul>

        <div className="my-10 max-w-xl">
          <SiteFigure
            src="/images/telehealth-cozy.jpg"
            alt="Person at home with a warm drink — private space for online therapy after long work days"
            frameClassName="aspect-[16/10] min-h-[180px]"
            sizes="(max-width: 768px) 100vw, 36rem"
            caption="Stock photo — telehealth lets you debrief without a cross-town drive."
          />
        </div>

        <h2>Next step</h2>
        <p>
          If this resonates, start with the same pathway as every client: a{" "}
          <Link href="/contact" className="font-semibold">
            free phone consultation
          </Link>
          . We&apos;ll see if trauma-focused therapy is the right fit for what you&apos;re facing right
          now.
        </p>
        <p>
          <Link href="/trauma-recovery">← Back to trauma therapy overview</Link>
        </p>
      </div>
    </PageShell>
  );
}
