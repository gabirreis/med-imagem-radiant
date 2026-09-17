import { createFileRoute } from "@tanstack/react-router";
import ExamePage from "@/pages/ExamePage";
import { seoHead } from "@/lib/seo-head";
import { getExamBySlug } from "@/data/exams";
import { SITE_NAME } from "@/config/site";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => ({ slug: params.slug }),
  head: ({ loaderData }) => {
    const exam = loaderData ? getExamBySlug(loaderData.slug) : undefined;
    if (!exam) {
      return seoHead({
        title: "Exame não encontrado – Med Imagem São Mateus",
        description: "O exame que você procura não foi encontrado.",
        path: `/${loaderData?.slug ?? ""}`,
      });
    }
    return seoHead({
      title: `${exam.name} – Med Imagem São Mateus`,
      description: `${exam.name} em São Mateus/ES na Med Imagem. ${exam.description}`,
      path: `/${exam.slug}`,
      image: exam.image,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "MedicalTest",
        name: exam.name,
        description: exam.description,
        usedToDiagnose: exam.purpose,
        provider: { "@type": "MedicalClinic", name: SITE_NAME },
      },
    });
  },
  component: ExamePage,
});
