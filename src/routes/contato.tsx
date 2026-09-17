import { createFileRoute } from "@tanstack/react-router";
import Contato from "@/pages/Contato";
import { seoHead } from "@/lib/seo-head";
import { organizationJsonLd } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () =>
    seoHead({
      title: "Contato – Med Imagem São Mateus",
      description:
        "Fale com a Med Imagem: Rua Ermelino Carneiro Sobrinho, 221 – Bairro Fátima, São Mateus/ES. Telefone (27) 3763-3366 e WhatsApp (27) 99868-4980.",
      path: "/contato",
      jsonLd: organizationJsonLd,
    }),
  component: Contato,
});
