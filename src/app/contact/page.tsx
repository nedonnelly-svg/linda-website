import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free phone consultation. Telehealth in California and New York. Phone, fax, and forms.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">Contact</h1>
      <div className="content-block mt-8">
        <p>
          To request your free phone consultation, you may contact me at the number below or submit
          a form on the official site. After I receive your information, I will contact you to
          schedule a consultation.
        </p>

        <h2>Online &amp; downloadable forms</h2>
        <p>
          The live <strong>online request form</strong> and any updated downloadable materials are on
          the official website:
        </p>
        <p>
          <a
            href="https://www.drlindahoffman.com/contact-260934.html"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex rounded-full border border-accent/40 bg-surface px-4 py-2 text-sm font-semibold text-accent hover:bg-white/5"
          >
            Open contact &amp; forms on drlindahoffman.com ↗
          </a>
        </p>
        <p>
          Downloadable{" "}
          <a
            href="https://www.drlindahoffman.com/uploads/1/3/0/4/130468975/phone_consultation_request_2023.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Phone Consultation Request (PDF)
          </a>
          . Fax to <a href="tel:+12132602320">(213) 260-2320</a>.
        </p>

        <h2>Telehealth · California &amp; New York</h2>
        <ul className="!text-text">
          <li>
            Phone:{" "}
            <a href="tel:+12135374554" className="font-semibold">
              (213) 537-4554
            </a>
          </li>
          <li>
            Fax:{" "}
            <a href="tel:+12132602320" className="font-semibold">
              (213) 260-2320
            </a>
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
