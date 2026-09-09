import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { getArticleBySlug, newsArticles } from "@/data/news";
import { SITE_URL, SITE_NAME, SITE_SOCIAL_IMAGE } from "@/config/site";

const ArtigoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <Layout>
        <Seo title="Notícia não encontrada – Med Imagem" description="A notícia que você procura não foi encontrada." path={`/blog/${slug || ""}`} />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Notícia não encontrada</h1>
          <Button className="mt-6" asChild>
            <Link to="/blog">Ver todas as notícias</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const outras = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const absImage = article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [absImage],
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    articleSection: article.category,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: SITE_SOCIAL_IMAGE },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${article.slug}` },
  };

  return (
    <Layout>
      <Seo
        title={article.seoTitle || `${article.title} – Med Imagem`}
        description={article.seoDescription || article.excerpt}
        path={`/blog/${article.slug}`}
        image={article.image}
        type="article"
        jsonLd={jsonLd}
      />

      <article className="py-12 md:py-16 bg-background">
        <div className="container max-w-5xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Voltar para notícias
          </Link>

          {/* Hero: título + imagem em destaque */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <time dateTime={article.dateISO}>{article.date}</time>
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{article.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-first lg:order-last"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full rounded-2xl shadow-elevated object-cover max-h-[460px]"
              />
              {article.credit && (
                <p className="mt-2 text-xs text-muted-foreground/60 text-center italic">{article.credit}</p>
              )}
            </motion.div>
          </div>

          {/* Corpo do artigo (com formatação) */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic">
              {article.content.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>

            {article.highlight && (
              <div className="my-8 bg-accent border-l-4 border-primary rounded-lg p-6">
                <h2 className="flex items-center gap-2 text-base font-bold text-primary mb-3">
                  <CalendarCheck className="w-5 h-5" /> {article.highlight.title}
                </h2>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {article.highlight.items.map((item) => (
                    <li key={item.label}>
                      <span className="font-semibold">{item.label}:</span>{" "}
                      <span className={item.italic ? "italic" : ""}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 bg-primary rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-primary-foreground">Agende seu exame</h2>
              <p className="mt-2 text-sm text-primary-foreground/80">Cuide da sua saúde com a Med Imagem.</p>
              <Button size="lg" className="mt-5 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold" asChild>
                <a href="https://wa.me/5527998684980" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" /> Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Outras notícias */}
          {outras.length > 0 && (
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="text-2xl font-bold text-foreground mb-6">Outras notícias</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {outras.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/blog/${n.slug}`}
                    className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-primary">{n.category}</span>
                      <h3 className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{n.title}</h3>
                      <span className="mt-2 block text-xs text-muted-foreground">{n.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default ArtigoPage;
