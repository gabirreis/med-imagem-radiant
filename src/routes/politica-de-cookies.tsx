import { createFileRoute } from "@tanstack/react-router";
import PoliticaCookies from "@/pages/PoliticaCookies";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    seoHead({
      title: "Política de Cookies – Med Imagem São Mateus",
      description:
        "Entenda como o site da Med Imagem São Mateus utiliza cookies e como gerenciar suas preferências de consentimento.",
      path: "/politica-de-cookies",
    }),
  component: PoliticaCookies,
});
