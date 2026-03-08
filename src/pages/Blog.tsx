import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const blogPosts = [
  {
    title: "Preparo para ressonância magnética",
    excerpt: "Saiba tudo o que você precisa fazer antes de realizar uma ressonância magnética. Orientações completas para garantir a qualidade do seu exame.",
    date: "15 de fevereiro de 2026",
    category: "Preparo",
  },
  {
    title: "Quando fazer mamografia?",
    excerpt: "Entenda a importância da mamografia e a idade recomendada para começar o rastreamento do câncer de mama.",
    date: "10 de fevereiro de 2026",
    category: "Prevenção",
  },
  {
    title: "Diferença entre tomografia e ressonância",
    excerpt: "Descubra quando cada exame é indicado e quais são as principais diferenças entre tomografia computadorizada e ressonância magnética.",
    date: "5 de fevereiro de 2026",
    category: "Informativo",
  },
  {
    title: "A importância do diagnóstico por imagem",
    excerpt: "Entenda como os exames de imagem são fundamentais para o diagnóstico precoce e acompanhamento de diversas doenças.",
    date: "28 de janeiro de 2026",
    category: "Saúde",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Blog</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Conteúdos informativos sobre saúde, exames e cuidados preventivos.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground">{post.title}</h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary cursor-pointer hover:underline">
                Ler mais <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
