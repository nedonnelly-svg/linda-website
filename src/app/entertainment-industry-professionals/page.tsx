import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Therapy for entertainment industry professionals",
  description:
    "Trauma therapy with insider understanding of film and television — tailored support for creative professionals.",
};

export default function EntertainmentPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">
        Therapy for entertainment industry professionals
      </h1>
      <div className="content-block mt-8">
        <p className="tagline">Creative people. Creative solutions.</p>
        <p>
          You&apos;re not generic. Your therapy shouldn&apos;t be either. Every problem is as unique
          as the person experiencing it, so the solutions need to be individualized, personally
          relevant, and guided by who you are.
        </p>
        <h2>Why I work with entertainment industry professionals</h2>
        <p>
          I understand firsthand the unique pressures of working in Hollywood after spending many
          years in film and television development myself. While the excitement of contributing
          creatively to influential projects can be deeply rewarding, it also comes with intense
          demands, relentless expectations, and challenging interpersonal dynamics. For many in
          entertainment, your work isn&apos;t merely a job — it&apos;s a core part of your identity.
        </p>
        <p>
          Unfortunately, the high-stakes environment of Hollywood often resonates strongly with
          unresolved past traumas. Without realizing it, you may find yourself repeating patterns from
          earlier life experiences, leaving you feeling stuck, overwhelmed, or disconnected. My
          specialized training in trauma therapy, combined with my insider understanding of the
          entertainment industry, allows me to provide tailored support that addresses the unique
          ways trauma impacts your life and career.
        </p>
        <p>
          Whether you sense something is off in how you respond to stressors, or you&apos;re
          clearly aware that unresolved trauma is affecting your professional or personal life,
          I&apos;m here to help you move beyond your past experiences, reclaim clarity, and reconnect
          with a life you truly love.
        </p>
        <p>
          Explore <Link href="/trauma-recovery">trauma recovery</Link>,{" "}
          <Link href="/treatment-modalities">treatment modalities</Link>, or{" "}
          <Link href="/contact">request a consultation</Link>.
        </p>
      </div>
    </PageShell>
  );
}
