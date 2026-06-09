import { getSiteUrl } from "@/lib/site-url";

export function SeoJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: "Dr. Linda Hoffman — Trauma Therapy",
      description:
        "Online trauma therapy in California and New York. EMDR, TRM, and trauma-informed psychotherapy with Dr. Linda Hoffman, PsyD.",
      publisher: { "@id": `${base}/#provider` },
      inLanguage: "en-US",
    },
    {
      "@type": "Psychologist",
      "@id": `${base}/#provider`,
      name: "Linda J. Hoffman",
      honorificPrefix: "Dr.",
      alternateName: "Dr. Linda Hoffman",
      credential: "PsyD",
      jobTitle: "Clinical Psychologist",
      description:
        "Licensed clinical psychologist specializing in trauma therapy, EMDR, and somatic trauma-informed care via telehealth.",
      url: base,
      // sameAs ties this site to verified profiles of the same person/practice, which helps
      // search engines disambiguate the entity. TODO: confirm each URL is correct before launch.
      sameAs: [
        "https://www.drlindahoffman.com/",
        "https://www.psychologytoday.com/us/therapists/above-the-line-psychotherapy-dr-linda-hoffman-west-los-angeles-ca/150035",
        "https://zencare.co/provider/therapist/linda-hoffman",
        "https://www.healthgrades.com/providers/linda-hoffman-xylpdk4",
        "https://www.linkedin.com/in/linda-j-hoffman-psy-d-3b43805/",
      ],
      medicalSpecialty: "Psychiatric",
      priceRange: "$$$",
      availableLanguage: "English",
      knowsAbout: [
        "Trauma therapy",
        "EMDR therapy",
        "Post-traumatic stress",
        "Somatic therapy",
        "Trauma Resiliency Model (TRM)",
        "Therapy for entertainment industry professionals",
        "Online mental health counseling",
      ],
      areaServed: [
        { "@type": "State", name: "California" },
        { "@type": "State", name: "New York" },
      ],
      // TODO (NAP): add `telephone` + `address` once the canonical phone number is confirmed.
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
