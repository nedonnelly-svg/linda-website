import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Treatment modalities",
  description:
    "AF-EMDR, TRM, CPT, brief and complex psychotherapy, and ongoing wellness-focused care.",
};

export default function TreatmentModalitiesPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">Treatment modalities</h1>
      <div className="content-block mt-8">
        <p>
          I offer a number of services to meet different needs. What follows is an overview; we can
          discuss which approach fits you during a consultation.
        </p>

        <h2>Trauma therapy</h2>
        <p>
          Traumatic experiences can reorganize your nervous system to be more sensitive to cues of
          danger and set off your natural alarm system when no danger is present. We commonly refer
          to this experience as &quot;being triggered.&quot; This effect happens outside of
          conscious awareness and control, which is why regular &quot;talk therapies&quot; are often
          ineffective in treating trauma. I may use one or a combination of the following approaches
          to help you: Attachment-Focused Eye Movement Desensitization and Reprocessing (AF-EMDR),
          the Trauma Resiliency Model (TRM), and Cognitive Processing Therapy (CPT). These
          approaches can be integrated into complex psychotherapy, be the sole focus of brief
          psychotherapy, or done as adjuncts to your work with another therapist.
        </p>

        <h2>Brief psychotherapy</h2>
        <p>
          In brief work, we usually focus on one issue within a limited time frame. The number of
          sessions will depend on the kind of issue that we choose to address, but brief therapy is
          commonly 8–12 sessions. These sessions focus on behavioral changes and are directive and
          solution-focused. Brief therapy rarely results in the deeper healing and self-discovery
          that complex therapy provides, but it can offer symptom relief and allow you to make real
          progress in stuck areas of your life.
        </p>

        <h2>Complex psychotherapy</h2>
        <p>
          Many people come to therapy with a constellation of issues that are interrelated and
          require time and patience to sort, but symptom relief is still the primary goal. In
          complex psychotherapy, there may or may not be a focus on specific diagnoses. The work is
          less predictable than brief psychotherapy as it involves a process of self-discovery where
          you lead and I follow. Personal growth and behavioral change will occur by deconstructing
          facades and identifying your values so that you may reconnect with and embrace your real
          self.
        </p>

        <h2>&quot;Life support&quot;</h2>
        <p>
          The medicalization of psychotherapy has led many to assume that psychotherapy is only
          about symptom reduction, but there is a long tradition of providing psychotherapy as a
          means of self-care and for sustaining health and wellness. You may prefer this approach if
          you desire a safe, confidential place to give conscious attention to questions about how
          you&apos;re living your life. This is also an approach that many who have successfully
          completed brief or complex psychotherapy choose to pursue. This type of therapy is most
          likely not covered by insurance.
        </p>

        <p>
          <Link href="/contact">Request your free phone consultation</Link> to discuss next steps.
        </p>
      </div>
    </PageShell>
  );
}
