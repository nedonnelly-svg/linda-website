import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about therapy, sessions, fees, insurance, and getting started.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">
        Frequently asked questions
      </h1>
      <div className="content-block mt-8">
        <h2>I&apos;ve never been to therapy. What can I expect?</h2>
        <p>
          The therapeutic process varies depending on the personalities of the psychologist and
          client and the problems requiring attention. I use many{" "}
          <Link href="/treatment-modalities">different methods</Link> to deal with problems, but you
          can expect me to be active in sessions, offering my thoughts and perspectives, and inviting
          you to be curious about your own experiences as well. What follows is highly dependent on
          your goals and the type of therapy we&apos;re using, so the unfolding of the process will
          be as individual as you are.
        </p>
        <p>
          Practically speaking, you will log in to a HIPAA-compliant video conferencing platform, and
          sessions always begin with payment. Our first sessions together will include a
          comprehensive interview where I will collect relevant background information and learn
          about your goals for therapy. At the end of that process, I will make my treatment
          recommendations and review our next steps. If the initial interview reveals an area of
          attention that I am not trained to address, I may provide you with referrals to another
          therapist at that time.
        </p>

        <h2>How long are sessions and how often will we meet?</h2>
        <p>
          Psychotherapy sessions most commonly take place weekly and are 50 minutes in length (80
          minutes for EMDR). Under certain circumstances, the length and frequency of appointments
          may be increased or decreased. All new clients, however, will begin with weekly
          appointments.
        </p>

        <h2>What are your fees?</h2>
        <p>My standard rates are:</p>
        <ul>
          <li>80-minute, one-time intake session: $432</li>
          <li>50-minute psychotherapy or EMDR session: $270</li>
          <li>80-minute EMDR session: $432</li>
        </ul>
        <p>
          During your phone consultation, we will discuss your needs, treatment options, and
          options for budgeting services. I am sometimes able to offer a reduced fee for psychotherapy
          services in the case of financial hardship. If you would like to be considered for a
          reduced rate, please determine what you could reasonably afford to pay for a weekly
          session, and we will discuss this during the phone consultation. If we determine that I am
          not an affordable option for you, I will give you referrals to providers who can offer
          low-fee or reduced rate services.
        </p>
        <p>
          Current fees and forms are also available on the{" "}
          <a href="https://www.drlindahoffman.com/contact-260934.html">official contact page</a>.
        </p>

        <h2>Do you accept insurance?</h2>
        <p>
          I am out-of-network with all insurance panels. If you have out-of-network benefits through
          your health insurance plan, you may receive some reimbursement for sessions after meeting
          any plan deductibles.
        </p>

        <h2>How do I know what my insurance will cover?</h2>
        <p>
          To utilize your health insurance plan for psychotherapy sessions, contact your health
          insurance provider by calling the member services number on the back of your insurance
          card. Helpful questions to ask are:
        </p>
        <ol>
          <li>
            Are mental health / behavioral health services covered under my plan? Is telehealth
            covered for these services?
          </li>
          <li>Is any coverage provided for seeing an out-of-network provider?</li>
          <li>
            Do I have a deductible that must be met before the plan covers all or part of the
            session fees? How much of that deductible has been met already? Will the full billed
            amount be applied toward my deductible or will only &quot;customary and reasonable
            rate&quot; apply?
          </li>
          <li>
            What is considered the &quot;customary and reasonable rate&quot; (or the allowed amount)
            for a provider in the 90025 zip code who bills under the CPT codes 90791 (intake), 90832,
            90834, and 90837? How much of that rate will be reimbursed after meeting the deductible?
          </li>
        </ol>

        <h2>What forms of payment do you accept?</h2>
        <p>All sessions may be paid for using a credit card or debit card.</p>

        <h2>Do I need a diagnosis to be in therapy?</h2>
        <p>
          The honest answer is &quot;it depends.&quot; From a treatment perspective, psychotherapy
          is not simply about symptom reduction but can also be about health, wellness, and
          self-care. Plenty of people attend therapy without having a diagnosis because they want a
          safe, consistent place to give conscious attention to self-inquiries into how they&apos;re
          living their lives. In other words, you don&apos;t need a diagnosis to benefit from therapy.
          If, however, you need to use your health insurance to cover any portion of your therapy, a
          diagnosis is required to meet the medical necessity standard and for them to issue any
          reimbursement. That said, I will only give you a diagnosis if you meet criteria for one. If
          you don&apos;t need to use health insurance or would prefer that your carrier not be
          informed about your diagnosis, you can sign a form opting out of using your benefits and
          your diagnosis will only be shared with others with your express consent or in an
          emergency.
        </p>

        <h2>How do I get started?</h2>
        <p>
          Contact me by calling or filling out the phone consultation request form on the{" "}
          <Link href="/contact">contact page</Link>. If I&apos;m not currently accepting new clients,
          I&apos;ll send you some referrals. If I do have openings, I&apos;ll email you a link to
          schedule a time to talk, and if we decide to move forward, I will collect some information
          from you so that you can set up an account in my Patient Portal. There you will find all
          of the paperwork that you would usually complete in the waiting room before an initial
          in-person appointment. When your appointment day and time arrives, you&apos;ll simply log
          in to the video-conferencing platform, wait in the virtual waiting room for me to start
          your appointment, and then the journey begins!
        </p>
      </div>
    </PageShell>
  );
}
