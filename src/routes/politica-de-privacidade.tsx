import { createFileRoute } from "@tanstack/react-router";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    seoHead({
      title: "Política de Privacidade – Med Imagem São Mateus",
      description:
        "Saiba como a Med Imagem São Mateus coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
      path: "/politica-de-privacidade",
    }),
  component: PoliticaPrivacidade,
});
