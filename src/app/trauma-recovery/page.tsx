import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Trauma recovery therapy",
  description:
    "Trauma-informed care with EMDR and TRM. Healing that works with how trauma is stored in your nervous system.",
};

export default function TraumaRecoveryPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">Trauma recovery therapy</h1>
      <div className="content-block mt-8">
        <p className="tagline">Your story. Your strength.</p>
        <p>
          Trauma doesn&apos;t define you, but it can shape how you move through the world. Healing
          isn&apos;t about erasing the past; it&apos;s about reclaiming your future.
        </p>
        <h2>Why work with a trauma specialist?</h2>
        <p>
          Trauma isn&apos;t just something that happened to you. It&apos;s something that continues to
          live in your body, your reactions, and the ways you protect yourself — sometimes without
          even realizing it. You may tell yourself it &quot;wasn&apos;t that bad,&quot; that you
          should &quot;be over it by now,&quot; or that others have had it worse. But trauma
          isn&apos;t measured by what happened. It&apos;s measured by its impact. That impact can show
          up as anxiety, panic, numbness, difficulty trusting, perfectionism, feeling stuck, or
          struggling in relationships. It can keep you from living the life you want — without you
          even realizing that trauma is at the root of it.
        </p>
        <p>
          Healing isn&apos;t about just talking through your experiences. It&apos;s about working
          with how trauma has been stored in your nervous system. As a specialist in somatic-based
          trauma therapies like EMDR and the Trauma Resiliency Model (TRM), I help people process and
          release trauma in ways that feel safe, effective, and lasting. Whether your trauma is
          from childhood, a single event, or years of accumulated stress, recovery is possible. You
          don&apos;t have to keep carrying it alone.
        </p>
        <p>
          Read more about{" "}
          <Link href="/treatment-modalities">how I work and treatment modalities</Link>, or{" "}
          <Link href="/contact">get in touch</Link> when you&apos;re ready.
        </p>
      </div>
    </PageShell>
  );
}
