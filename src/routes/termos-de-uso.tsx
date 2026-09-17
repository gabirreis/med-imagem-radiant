import { createFileRoute } from "@tanstack/react-router";
import TermosDeUso from "@/pages/TermosDeUso";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/termos-de-uso")({
  head: () =>
    seoHead({
      title: "Termos de Uso – Med Imagem São Mateus",
      description: "Termos e condições de uso do site da Med Imagem São Mateus.",
      path: "/termos-de-uso",
    }),
  component: TermosDeUso,
});
