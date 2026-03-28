import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Resources & notices",
  description:
    "Emergency response information, privacy practices, and No Surprises Act / Good Faith Estimate notices.",
};

export default function ResourcesNoticesPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">Resources &amp; notices</h1>
      <div className="content-block mt-8">
        <h2>Emergency response plan</h2>
        <p>
          A mental health crisis is any situation in which your thoughts, feelings, or behaviors may
          lead you to hurt yourself, hurt others, and/or put you at risk of being unable to care
          for yourself in a healthy way. A crisis is a situation that requires immediate intervention
          by a professional. Since I may not be immediately available when a crisis occurs, seek
          emergency services first, then leave a message for me on my cell phone.
        </p>
        <p>If an emergency occurs between sessions, before you call me, you may:</p>
        <ul>
          <li>Contact a trusted family member or friend who can assist you with getting help.</li>
          <li>Text HOME to 741741 to reach the Crisis Textline (for any urgent / crisis situation).</li>
          <li>Dial 988 to reach the Suicide Prevention Lifeline.</li>
          <li>Visit a local urgent care office.</li>
          <li>Go to your nearest emergency room.</li>
          <li>Call 911.</li>
        </ul>
        <p>After obtaining emergency services:</p>
        <ul>
          <li>Call my cell phone.</li>
          <li>If I do not answer, leave a message, and I will return the call as soon as I am able.</li>
        </ul>
        <p>
          If a telehealth session is interrupted while you are experiencing an emergency, and we are
          unable to re-establish contact within two minutes, you should call 911 or go to your local
          emergency room. I will also contact emergency services and/or your emergency contact
          person.
        </p>

        <h2>Notice of privacy practices</h2>
        <p>
          The official{" "}
          <a
            href="https://www.drlindahoffman.com/uploads/1/3/0/4/130468975/npp.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Notice of Privacy Practices (PDF)
          </a>{" "}
          is hosted on drlindahoffman.com.
        </p>

        <h2>Good Faith Estimate &amp; No Surprises Act</h2>
        <p>
          You have the right to receive a &quot;Good Faith Estimate&quot; explaining how much your
          medical care will cost. Under the law, health care providers need to give patients who
          don&apos;t have insurance or who are not using insurance an estimate of the bill for medical
          items and services.
        </p>
        <ul>
          <li>
            You have the right to receive a Good Faith Estimate for the total expected cost of any
            non-emergency items or services. This includes related costs like medical tests,
            prescription drugs, equipment, and hospital fees.
          </li>
          <li>
            Make sure your health care provider gives you a Good Faith Estimate in writing at least 1
            business day before your medical service or item. You can also ask your health care
            provider, and any other provider you choose, for a Good Faith Estimate before you
            schedule an item or service.
          </li>
          <li>
            If you receive a bill that is at least $400 more than your Good Faith Estimate, you can
            dispute the bill.
          </li>
          <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
        </ul>
        <p>
          For questions or more information about your right to a Good Faith Estimate, visit{" "}
          <a href="https://www.cms.gov/nosurprises" rel="noopener noreferrer" target="_blank">
            www.cms.gov/nosurprises
          </a>{" "}
          or call <a href="tel:+12135374554">(213) 537-4554</a>.
        </p>

        <p>
          <Link href="/contact">Contact</Link> ·{" "}
          <a href="https://www.drlindahoffman.com/resources-notices.html">Official resources page ↗</a>
        </p>
      </div>
    </PageShell>
  );
}
