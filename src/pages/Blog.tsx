import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { newsArticles } from "@/data/news";
import { SITE_URL } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Notícias – Med Imagem São Mateus",
  url: `${SITE_URL}/blog`,
  hasPart: newsArticles.map((a) => ({
    "@type": "NewsArticle",
    headline: a.title,
    datePublished: a.dateISO,
    url: `${SITE_URL}/blog/${a.slug}`,
  })),
};

const Blog = () => {
  return (
    <Layout>
      <Seo
        title="Notícias – Med Imagem São Mateus"
        description="Fique por dentro das novidades da Med Imagem e das ações de saúde e prevenção em São Mateus e no Norte do Espírito Santo."
        path="/blog"
        jsonLd={jsonLd}
      />
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Notícias</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Fique por dentro das novidades da Med Imagem e do mundo da saúde.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-3xl divide-y divide-border">
          {newsArticles.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="py-8 first:pt-0"
            >
              <Link to={`/blog/${post.slug}`} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 rounded-lg overflow-hidden" style={{ width: "128px", height: "88px" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-accent px-2.5 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.dateISO}>{post.date}</time>
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Ler notícia <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
