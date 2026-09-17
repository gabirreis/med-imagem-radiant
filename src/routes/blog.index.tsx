import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { seoHead } from "@/lib/seo-head";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seoHead({
      title: "Notícias – Med Imagem São Mateus",
      description:
        "Fique por dentro das novidades da Med Imagem e das ações de saúde e prevenção em São Mateus e no Norte do Espírito Santo.",
      path: "/blog",
    }),
  component: Blog,
});
