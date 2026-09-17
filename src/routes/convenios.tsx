import { createFileRoute } from "@tanstack/react-router";
import Convenios from "@/pages/Convenios";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/convenios")({
  head: () =>
    seoHead({
      title: "Convênios atendidos – Med Imagem São Mateus",
      description:
        "Conheça os convênios atendidos pela Med Imagem em São Mateus/ES: Unimed, Bradesco, Amil, Petrobras, CASSI e mais de 30 planos. Consulte a disponibilidade para o seu.",
      path: "/convenios",
    }),
  component: Convenios,
});
