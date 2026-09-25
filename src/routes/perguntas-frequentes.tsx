import { createFileRoute } from "@tanstack/react-router";
import PerguntasFrequentes from "@/pages/PerguntasFrequentes";
import { seoHead } from "@/lib/seo-head";
import { SITE_URL } from "@/config/site";
import { faqCategories } from "@/data/faq";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () =>
    seoHead({
      title: "Perguntas Frequentes – Med Imagem São Mateus",
      description:
        "Tire suas dúvidas sobre agendamento, preparo, convênios, exames e resultados na Med Imagem São Mateus. Perguntas frequentes de diagnóstico por imagem.",
      path: "/perguntas-frequentes",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((c) =>
            c.items.map((i) => ({
              "@type": "Question",
              name: i.question,
              acceptedAnswer: { "@type": "Answer", text: i.answer },
            })),
          ),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Perguntas Frequentes", item: `${SITE_URL}/perguntas-frequentes` },
          ],
        },
      ],
    }),
  component: PerguntasFrequentes,
});
