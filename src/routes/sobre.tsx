import { createFileRoute } from "@tanstack/react-router";
import Sobre from "@/pages/Sobre";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/sobre")({
  head: () =>
    seoHead({
      title: "Sobre a Med Imagem – 28 anos em São Mateus/ES",
      description:
        "Conheça a história da Med Imagem São Mateus: 28 anos de pioneirismo em diagnóstico por imagem no Norte Capixaba, com missão, visão e valores focados no cuidado ao paciente.",
      path: "/sobre",
    }),
  component: Sobre,
});
