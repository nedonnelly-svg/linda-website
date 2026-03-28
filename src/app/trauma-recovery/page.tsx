import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SiteFigure } from "@/components/SiteFigure";

export const metadata: Metadata = {
  title: "Trauma Therapy & EMDR — Online in California & New York",
  description:
    "What trauma therapy is, how EMDR and somatic approaches differ from general counseling, and how to start with Dr. Linda Hoffman, PsyD. Telehealth for CA & NY.",
  alternates: { canonical: "/trauma-recovery" },
  openGraph: {
    title: "Trauma Therapy & EMDR | Dr. Linda Hoffman, PsyD",
    description:
      "Online trauma therapy for adults in California and New York. EMDR, TRM, and nervous-system-informed psychotherapy.",
  },
};

export default function TraumaRecoveryPage() {
  return (
    <PageShell>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start md:gap-10">
        <div>
          <h1 className="font-serif text-[1.75rem] italic leading-tight text-text sm:text-4xl md:text-[2.65rem]">
            Trauma therapy that updates your nervous system — not just your vocabulary
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Most people who reach out aren&apos;t chasing a diagnosis label. They want relief from
            patterns that won&apos;t budge: hypervigilance, shutdown, relationship friction, shame
            spirals, or feeling &quot;fine&quot; on the outside while running on fumes inside.
            That&apos;s the territory <strong className="text-text">trauma therapy</strong> is built
            for.
          </p>
        </div>
        <SiteFigure
          src="/images/telehealth-cozy.jpg"
          alt="Comfortable home setting with a warm drink — suggesting private online therapy from your own space"
          frameClassName="aspect-[4/5] min-h-[200px]"
          sizes="(max-width: 768px) 100vw, 36vw"
          caption="Stock photo — not a depiction of a specific client or session."
        />
      </div>

      <div className="content-block mt-10">
        <h2>What &quot;trauma therapy&quot; means in my practice</h2>
        <p>
          Trauma isn&apos;t defined by a single checklist of events. It&apos;s defined by how your
          mind and body learned to survive — sometimes brilliantly — and how those survival strategies
          may no longer match your present life. Trauma therapy helps your system recognize{" "}
          <em>now</em> from <em>then</em>, so you can respond instead of react.
        </p>
        <p>
          Because trauma often lives below conscious storytelling, insight alone usually isn&apos;t
          enough. That&apos;s why I emphasize approaches that work with arousal, memory processing, and
          body-based regulation — alongside thoughtful conversation.
        </p>

        <h2>Who tends to do well with this work</h2>
        <ul>
          <li>Adults in <strong>California or New York</strong> who want <strong>online therapy</strong> with a licensed psychologist.</li>
          <li>
            People who suspect (or know) past experiences are shaping anxiety, depression, dissociation,
            relationship patterns, or performance under pressure.
          </li>
          <li>
            Anyone who has done &quot;talk therapy&quot; before and wants a trauma specialist for the next
            phase — including EMDR or somatically informed work.
          </li>
        </ul>

        <h2>EMDR, TRM, and why method matters</h2>
        <p>
          I&apos;m trained in trauma-focused methods including{" "}
          <strong>Attachment-Focused EMDR</strong> and the{" "}
          <strong>Trauma Resiliency Model (TRM)</strong>, and I integrate other evidence-based tools
          when they fit your goals. You don&apos;t need to pick a modality before we meet — that&apos;s
          part of collaborative treatment planning.
        </p>
        <p>
          Details on session structure, length (including extended EMDR sessions when appropriate), and
          other options are on the{" "}
          <Link href="/treatment-modalities">EMDR &amp; therapy approaches</Link> page.
        </p>

        <h2>Telehealth trauma therapy: practical and private</h2>
        <p>
          I provide secure video sessions so geography within CA or NY doesn&apos;t become another
          barrier. Many clients prefer telehealth because it fits demanding schedules and reduces the
          stress of commuting after heavy sessions.
        </p>

        <h2>What happens first</h2>
        <p>
          We begin with a <strong>free phone consultation</strong> so you can ask questions, hear how I
          work, and decide if scheduling an intake makes sense. If we move forward, early sessions
          focus on safety, goals, and a plan — paced to your readiness, not a one-size-fits-all
          timeline.
        </p>
        <p>
          Ready to talk?{" "}
          <Link href="/contact" className="font-semibold">
            Request your consultation →
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
