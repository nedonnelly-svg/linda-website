import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Education, certifications, clinical experience, and professional background for Dr. Linda Hoffman, PsyD.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl italic text-text md:text-[2.75rem]">Experience</h1>
      <div className="content-block mt-8">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Doctor of Psychology (PsyD), Master of Arts (MA): Clinical Psychology</strong> —
            Multicultural and Community Psychology Emphasis — Alliant International University /
            California School of Professional Psychology (CSPP)
          </li>
          <li>
            <strong>Bachelor of Arts (BA): Political Science</strong>, minor in Business
            Administration — University of Southern California
          </li>
        </ul>

        <h2>Certifications, certificate programs, &amp; advanced trainings</h2>
        <ul>
          <li>Trauma Resiliency Model (TRM) Certified Practitioner</li>
          <li>Attachment Focused EMDR (Trained) — Parnell Institute</li>
          <li>Exposure &amp; Response Prevention for OCD (Trained) — Cognitive Behavior Institute</li>
          <li>Intuitive Eating Pro: Certified Intuitive Eating Counselor</li>
          <li>TeleMental Health &amp; Digital Ethics: Certificate Program (26 training hours)</li>
        </ul>

        <h2>Clinical experience</h2>
        <ul>
          <li>University of California, Los Angeles (UCLA): Counseling Psychologist II</li>
          <li>California State Polytechnic University, Pomona: Clinical Psychologist</li>
          <li>
            Florida International University: University Counselor; Psychometrician; Postdoctoral
            Fellow
          </li>
          <li>California Institute of Technology: Predoctoral Intern</li>
          <li>Los Angeles Valley College: Learning Disability Examiner</li>
          <li>Southern California Counseling Center: Predoctoral Intern</li>
          <li>L.A. Gay &amp; Lesbian Center: Practicum Trainee</li>
        </ul>

        <h2>Other relevant experience</h2>
        <ul>
          <li>Play All Day Productions: Partner / Producer</li>
          <li>Weed Road Pictures: Development Executive; First Assistant to Principal</li>
          <li>
            USA Cable: Assistant to Directors of Series Programming; Assistant to Vice President of
            Alternative Programming
          </li>
        </ul>

        <h2>Teaching experience</h2>
        <ul>
          <li>University of Southern California: Part-Time Master Lecturer</li>
          <li>Florida International University: Adjunct Professor</li>
          <li>Miami-Dade College: Adjunct Professor</li>
          <li>Los Angeles Valley College: Adjunct Professor</li>
          <li>Alliant International University / CSPP: Teaching Assistant</li>
        </ul>

        <h2>Scholarships &amp; awards</h2>
        <ul>
          <li>Outstanding Faculty Award, Nominee, USC Rossier Student Organization</li>
          <li>Graduate Scholarship, Alliant International University / CSPP</li>
          <li>Order of the Laurel and Palm, University of Southern California</li>
          <li>Political Science Department Service Award, University of Southern California</li>
          <li>Dean&apos;s Scholarship, University of Southern California</li>
        </ul>

        <h2>Professional affiliations</h2>
        <ul>
          <li>American Psychological Association (APA), Member</li>
          <li>L.A. County Psychological Association (LACPA), Member</li>
        </ul>

        <h2>Other professional activities</h2>
        <ul>
          <li>
            Former Co-Chair / Founder, Trauma &amp; Trauma Therapy Special Interest Group, L.A.
            County Psychological Association
          </li>
          <li>
            Former Chair / Co-Chair / Member, Part-Time Faculty Affairs Committee, USC Academic
            Senate
          </li>
          <li>Former Member, Part-Time Committee, USC Rossier School of Education</li>
          <li>
            Former Member, Joint Senate-Provost Committee on Finance &amp; Enrollment, USC
          </li>
          <li>Former Member, Nominating Committee, USC Academic Senate</li>
          <li>
            Former Subject Matter Expert, California Board of Psychology, California Psychology Laws
            &amp; Ethics Examination Item Writing Workshop
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
