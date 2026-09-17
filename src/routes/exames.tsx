import { createFileRoute } from "@tanstack/react-router";
import Exames from "@/pages/Exames";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/exames")({
  head: () =>
    seoHead({
      title: "Exames de diagnóstico por imagem – Med Imagem São Mateus",
      description:
        "Ultrassonografia, ressonância magnética, tomografia computadorizada, raio X digital e mamografia digital em São Mateus/ES, com tecnologia avançada e precisão.",
      path: "/exames",
    }),
  component: Exames,
});
