import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SiteFigure } from "@/components/SiteFigure";

export const metadata: Metadata = {
  title: "EMDR, TRM & Trauma-Focused Therapy Methods",
  description:
    "How AF-EMDR, Trauma Resiliency Model (TRM), CPT, and broader psychotherapy fit together in trauma treatment with Dr. Linda Hoffman, PsyD.",
  alternates: { canonical: "/treatment-modalities" },
  keywords: [
    "EMDR therapy online",
    "AF-EMDR",
    "Trauma Resiliency Model",
    "CPT therapy",
    "trauma-focused CBT",
  ],
};

export default function TreatmentModalitiesPage() {
  return (
    <PageShell>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] md:items-start md:gap-10">
        <div>
          <h1 className="font-serif text-3xl italic text-text md:text-[2.65rem]">
            How we might work together
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            There isn&apos;t one &quot;magic&quot; protocol for every person. There <em>are</em>{" "}
            evidence-based trauma therapies that tend to work better than generic talk therapy when the
            body is stuck in survival mode. Below is a plain-language map; we choose specifics together.
          </p>
        </div>
        <SiteFigure
          src="/images/hero-calm-interior.jpg"
          alt="Soft daylight in a calm, minimal room — a steady setting for focused therapeutic work"
          frameClassName="aspect-[4/5] min-h-[220px]"
          sizes="(max-width: 768px) 100vw, 38vw"
          caption="Stock photo — not the provider&apos;s office."
        />
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
        <div className="relative aspect-[21/9] min-h-[160px] w-full md:min-h-[200px]">
          <Image
            src="/images/banner-mountains.jpg"
            alt="Layered mountains in soft haze — breadth and perspective, like mapping your own treatment plan"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-bg/75 via-transparent to-bg/40"
            aria-hidden
          />
        </div>
      </div>

      <div className="content-block mt-12">
        <h2>Trauma-focused methods (often central to care)</h2>
        <p>
          After trauma, the nervous system can misread safe situations as dangerous — the classic
          &quot;triggered&quot; experience that logic alone can&apos;t talk you out of. I draw on
          methods designed for that, including{" "}
          <strong>Attachment-Focused EMDR (AF-EMDR)</strong>, the{" "}
          <strong>Trauma Resiliency Model (TRM)</strong>, and{" "}
          <strong>Cognitive Processing Therapy (CPT)</strong>, alone or in combination.
        </p>
        <p>
          EMDR sessions may run longer than standard therapy hours when clinically appropriate; we
          discuss pacing and what to expect up front.
        </p>

        <div className="my-10 max-w-3xl">
          <SiteFigure
            src="/images/telehealth-cozy.jpg"
            alt="Comfortable home setting — many clients do EMDR and trauma work securely from a private space they already trust"
            frameClassName="aspect-[16/10] min-h-[200px]"
            sizes="(max-width: 768px) 100vw, 48rem"
            caption="Stock photo — online sessions use a HIPAA-compliant video platform."
          />
        </div>

        <div className="my-12 grid items-start gap-8 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-10">
          <SiteFigure
            src="/images/accent-plants.jpg"
            alt="Green foliage in soft light — growth happens in phases, including in structured brief or longer-term work"
            frameClassName="aspect-[4/5] min-h-[220px]"
            sizes="(max-width: 768px) 100vw, 38vw"
            caption="Stock photo — decorative."
          />
          <div>
            <h2 className="!mt-0">Brief, focused psychotherapy</h2>
            <p>
              Sometimes one clearly defined problem needs a time-limited, structured plan — often on the
              order of several months. Brief work targets relief and behavior change; it&apos;s not the
              same as deeper trauma processing, and we&apos;ll be honest if your goals call for something
              broader.
            </p>

            <h2>Longer-term / complex psychotherapy</h2>
            <p>
              When several life areas overlap — relationships, self-worth, mood, identity, recurring
              crises — therapy may unfold more gradually. You set direction; I bring trauma training and
              clinical judgment. The process is less predictable week to week, but the aim is durable
              change, not a quick patch.
            </p>
          </div>
        </div>

        <h2>Ongoing &quot;life support&quot; therapy</h2>
        <p>
          Some clients want a steady, confidential space for maintenance and depth after acute
          symptoms improve — similar to how people invest in physical wellness long-term. This model
          may not align with insurance expectations; we cover that transparently before you commit.
        </p>

        <p>
          Questions about fit?{" "}
          <Link href="/faq" className="font-semibold">
            Read the FAQ
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold">
            schedule a consultation
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
