const DEFAULT_ORIGIN = "https://linda-website-navy.vercel.app";

export function SeoJsonLd() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_ORIGIN).replace(/\/$/, "");

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
      sameAs: ["https://www.drlindahoffman.com/"],
      knowsAbout: [
        "Trauma therapy",
        "EMDR therapy",
        "Post-traumatic stress",
        "Somatic therapy",
        "Online mental health counseling",
      ],
      areaServed: [
        { "@type": "State", name: "California" },
        { "@type": "State", name: "New York" },
      ],
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
