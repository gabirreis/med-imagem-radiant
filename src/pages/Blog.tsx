import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import newsOutubraRosaImg from "@/assets/news-outubro-rosa.png";
import newsCicloSaberImg from "@/assets/news-ciclo-saber.png";
import newsJpr2025Img from "@/assets/news-jpr-2025.png";

const blogPosts = [
  {
    title: "Outubro Rosa Edição 2025 – Esse laço nunca fez tanto sentido!",
    excerpt: "Med Imagem, Clínica Salles e CEDIM se unem novamente para oferecer mamografias gratuitas a mulheres da região de São Mateus. Em 2024, mais de 10 mil mulheres foram atendidas e 1.001 exames realizados. O Dia D acontece em 4 de outubro no SESC São Mateus.",
    date: "24 de setembro de 2025",
    category: "Saúde",
    image: newsOutubraRosaImg,
    content: [
      "A Med Imagem, junto com a Clínica Salles e o CEDIM (Centro de Diagnóstico de Imagem), se unem mais uma vez para levar saúde e prevenção às mulheres do Norte Capixaba. O Outubro Rosa Edição 2025 traz uma ação de impacto: mamografias gratuitas para mulheres da região.",
      "A campanha tem crescido ano a ano. Em 2023, foram 4.200 mulheres atendidas e 732 mamografias realizadas. Em 2024, o número saltou para mais de 10 mil mulheres e 1.001 exames — um crescimento que reflete o compromisso das clínicas parceiras com a saúde feminina.",
      "O Dia D desta edição acontece em 4 de outubro de 2025, das 8h às 12h, no SESC São Mateus. Mulheres que se enquadram nos critérios de rastreamento podem comparecer e realizar o exame gratuitamente.",
      "A Med Imagem reafirma seu compromisso com a saúde da mulher e convida a comunidade a participar, divulgar e apoiar essa iniciativa. Esse laço nunca fez tanto sentido!",
    ],
    credit: "Foto: Welington Prado – Tc Digital",
  },
  {
    title: "Ciclo do Saber – Saúde Mental no Trabalho",
    excerpt: "A Med Imagem apoiou o evento realizado pelo Senac no SESC São Mateus sobre saúde mental no ambiente de trabalho. A programação abordou prevenção, intervenção e o papel da liderança frente ao bem-estar dos colaboradores.",
    date: "21 de agosto de 2025",
    category: "Evento",
    image: newsCicloSaberImg,
    content: [
      "Em 13 de agosto de 2025, o SESC São Mateus sediou mais uma edição do Ciclo do Saber, iniciativa do Senac voltada ao desenvolvimento humano e profissional. O tema desta edição foi \"Saúde Mental no Trabalho: Prevenção, Intervenção e o Papel da Liderança\".",
      "O evento contou com o apoio da Med Imagem, do CEDIM e da Clínica Salles — instituições que compartilham o compromisso com a saúde integral da população de São Mateus e região.",
      "A palestra abordou estratégias práticas para identificar sinais de adoecimento mental no ambiente corporativo, além de ressaltar a importância da liderança consciente e do cuidado preventivo com os colaboradores.",
      "A Med Imagem acredita que saúde vai além dos exames de imagem. Participar de eventos como o Ciclo do Saber reforça nosso propósito de contribuir com o bem-estar das pessoas em todas as dimensões da saúde.",
    ],
    credit: null,
  },
  {
    title: "Med Imagem marca presença na JPR 2025",
    excerpt: "A Med Imagem representou o Norte Capixaba na 55ª Jornada Paulista de Radiologia, maior evento de diagnóstico por imagem da América Latina, realizado no Transamerica Expo Center em São Paulo.",
    date: "5 de maio de 2025",
    category: "Evento",
    image: newsJpr2025Img,
    content: [
      "A 55ª Jornada Paulista de Radiologia (JPR 2025) reuniu os maiores nomes do diagnóstico por imagem da América Latina no Transamerica Expo Center, em São Paulo. E a Med Imagem estava lá.",
      "Representando a clínica e o Norte Capixaba, o diretor Wilson Tavares e o técnico Marcelo Soares Colombi participaram do evento, referência nacional em atualizações científicas, novas tecnologias e boas práticas em radiologia e diagnóstico por imagem.",
      "A participação na JPR faz parte do compromisso da Med Imagem com a educação continuada e a busca permanente por inovação. Estar presente nos maiores eventos da área é essencial para trazer ao Norte Capixaba o que há de mais atual em tecnologia e conhecimento médico.",
      "A Med Imagem segue investindo na capacitação de sua equipe e na atualização constante de seus processos, sempre com um objetivo: oferecer diagnósticos cada vez mais precisos e seguros para os nossos pacientes.",
    ],
    credit: null,
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Notícias</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Fique por dentro das novidades da Med Imagem e do mundo da saúde.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl space-y-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground leading-tight">{post.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 space-y-3 text-muted-foreground leading-relaxed text-sm border-t border-border pt-6">
                  {post.content.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                  {post.credit && (
                    <p className="text-xs text-muted-foreground/60 italic mt-4">{post.credit}</p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
