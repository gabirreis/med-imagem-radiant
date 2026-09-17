import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo-head";
import { SITE_DESCRIPTION, organizationJsonLd } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Med Imagem São Mateus – Diagnóstico por Imagem",
      description: SITE_DESCRIPTION,
      path: "",
      jsonLd: organizationJsonLd,
    }),
  component: Index,
});
