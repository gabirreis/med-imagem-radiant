import { createFileRoute } from "@tanstack/react-router";
import ArtigoPage from "@/pages/ArtigoPage";
import { seoHead } from "@/lib/seo-head";
import { SITE_NAME, SITE_URL } from "@/config/site";
import { getArticleBySlug } from "@/data/news";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => ({ slug: params.slug }),
  head: ({ loaderData }) => {
    const article = loaderData ? getArticleBySlug(loaderData.slug) : undefined;
    if (!article) {
      return seoHead({
        title: "Notícia não encontrada – Med Imagem",
        description: "A notícia que você procura não foi encontrada.",
        path: `/blog/${loaderData?.slug ?? ""}`,
      });
    }
    return seoHead({
      title: article.seoTitle || `${article.title} – Med Imagem`,
      description: article.seoDescription || article.excerpt,
      path: `/blog/${article.slug}`,
      image: article.image,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          description: article.seoDescription || article.excerpt,
          image: article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
          datePublished: article.dateISO,
          dateModified: article.dateISO,
          publisher: { "@type": "MedicalClinic", name: SITE_NAME },
          mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Notícias", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/blog/${article.slug}` },
          ],
        },
      ],
    });
  },
  component: ArtigoPage,
});
