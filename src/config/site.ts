export const SITE_URL = "https://medimagemsm.com.br";
export const SITE_NAME = "Med Imagem São Mateus";
export const SITE_DESCRIPTION =
  "Clínica de diagnóstico por imagem em São Mateus/ES. 28 anos de experiência em ressonância magnética, tomografia, ultrassonografia, raio X e mamografia.";
export const SITE_SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/YWLdKIsgvec7mdQT9Fmj3x1R4Eu2/social-images/social-1783515077631-IMAGEM_DE_COMPARTILHAMENTO_-_SITE_MEDIMAGEM.webp";

/** Dados estruturados (JSON-LD) da clínica — usados por buscadores e IAs. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinica`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: SITE_SOCIAL_IMAGE,
  telephone: "+55-27-3763-3366",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Ermelino Carneiro Sobrinho, 221 – Bairro Fátima",
    addressLocality: "São Mateus",
    addressRegion: "ES",
    postalCode: "29930-000",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "12:00",
    },
  ],
  medicalSpecialty: "Radiology",
  availableService: [
    "Ultrassonografia",
    "Ressonância Magnética",
    "Raio X - Digital",
    "Tomografia Computadorizada",
    "Mamografia Digital",
  ].map((name) => ({ "@type": "MedicalTest", name })),
  areaServed: "São Mateus e Norte do Espírito Santo",
  sameAs: [
    "https://www.instagram.com/medimagem.sm/",
    "https://www.facebook.com/medimagem.sm",
  ],
};
