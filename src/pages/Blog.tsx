import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import newsOutubroRosa2026Img from "@/assets/news-outubro-rosa-2026.webp";
import newsOutubraRosaImg from "@/assets/news-outubro-rosa.png";
import newsCicloSaberImg from "@/assets/news-ciclo-saber.png";
import newsJpr2025Img from "@/assets/news-jpr-2025.png";

const blogPosts = [
  {
    slug: "outubro-rosa-2026",
    title: "Outubro Rosa São Mateus lança campanha 2026",
    excerpt: "Com o conceito “Você faz parte dessa história”, o movimento chega ao quarto ano reunindo empresas, instituições, profissionais, imprensa e comunidade em uma grande rede de cuidado. O Dia D será realizado em 10 de outubro, no SESC São Mateus.",
    date: "8 de setembro de 2026",
    category: "Saúde",
    image: newsOutubroRosa2026Img,
    content: [
      "O Outubro Rosa São Mateus lançou oficialmente sua campanha 2026 durante uma coletiva de imprensa que reuniu parceiros, profissionais de comunicação, embaixadoras e representantes de instituições que integram o movimento. Neste ano, a campanha traz como conceito “Você faz parte dessa história” e celebra uma trajetória construída coletivamente ao longo de quatro anos de mobilização pela prevenção e pelo cuidado.",
      "Mais do que apresentar a programação deste ano, o encontro foi também um momento de olhar para a trajetória do Outubro Rosa São Mateus e reconhecer todas as pessoas e organizações que ajudaram a transformar a iniciativa em uma mobilização que hoje envolve diferentes setores da cidade.",
      "Durante a coletiva, imagens e registros das edições anteriores mostraram ações, bastidores, participação da comunidade e momentos que marcaram a história da campanha. A imprensa também recebeu um agradecimento especial pelo papel desempenhado na ampliação das informações sobre prevenção e na aproximação da campanha com a população.",
      "A proposta para 2026 é continuar ampliando não apenas o número de participantes, mas principalmente o alcance da informação, a conscientização e o envolvimento da sociedade. Ao longo dos meses de setembro e outubro, diferentes ações de mobilização serão realizadas com a participação de empresas, instituições, profissionais, parceiros e comunidade.",
      "O principal encontro da programação já tem data marcada: o Dia D do Outubro Rosa São Mateus 2026 será realizado no dia 10 de outubro, no SESC, reunindo em um mesmo espaço ações voltadas à prevenção, informação, cuidado e acolhimento.",
      "Outro momento especial do lançamento foi a apresentação das Embaixadoras do Outubro Rosa São Mateus 2026 — mulheres que passam a integrar a mobilização ajudando a ampliar a voz da campanha, aproximar a mensagem de diferentes públicos e fortalecer a rede de cuidado que vem sendo construída na cidade.",
      "Depois de quatro anos, o Outubro Rosa São Mateus reforça que a campanha já não é construída por uma única empresa ou instituição. É uma história construída pela cidade. E, em 2026, o convite se renova: você faz parte dessa história.",
    ],
    credit: null,
  },
  {
    slug: "outubro-rosa-2025",
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
    slug: "ciclo-do-saber-2025",
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
    slug: "jpr-2025",
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
  const { hash } = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const slug = hash.replace("#", "");
    if (slug) {
      setExpanded(slug);
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [hash]);

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
        <div className="container max-w-3xl divide-y divide-border">
          {blogPosts.map((post, i) => {
            const isOpen = expanded === post.slug;
            return (
              <motion.article
                key={post.slug}
                id={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="py-8"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : post.slug)}
                  className="flex gap-5 items-start w-full text-left group"
                >
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
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-base font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      {isOpen ? "Fechar" : "Ler mais"}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pl-0 md:pl-[152px] space-y-3 text-sm text-muted-foreground leading-relaxed border-t border-border pt-5">
                        {post.content.map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
                        {post.credit && (
                          <p className="text-xs text-muted-foreground/50 italic mt-3">{post.credit}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
