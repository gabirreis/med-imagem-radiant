import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Stethoscope, Zap, Heart, ArrowRight, FileText, Star, Cpu, HeartHandshake, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { examsData } from "@/data/exams";
import heroBg from "@/assets/hero-bg.webp";
import clinicExterior from "@/assets/clinic-exterior.webp";
import humanizacaoImg from "@/assets/humanizacao.jpg";
import newsOutubraRosaImg from "@/assets/news-outubro-rosa.png";
import newsCicloSaberImg from "@/assets/news-ciclo-saber.png";
import newsJpr2025Img from "@/assets/news-jpr-2025.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const trustBadges = [
    "28 anos de confiança",
    "Tecnologia avançada",
    "Equipe especializada",
  ];

  const diferenciais = [
    { icon: Zap, title: "Tecnologia de última geração", desc: "Equipamentos modernos que garantem mais precisão e segurança nos diagnósticos." },
    { icon: Heart, title: "Atendimento humanizado", desc: "Aqui, cada paciente é acolhido com atenção, respeito e cuidado." },
    { icon: Stethoscope, title: "Equipe qualificada", desc: "Profissionais experientes e comprometidos com a excelência." },
    { icon: Star, title: "Confiança construída ao longo do tempo", desc: "28 anos sendo referência em diagnóstico por imagem na região." },
  ];

  const newsItems = [
    { title: "Outubro Rosa Edição 2025", date: "24 Set 2025", category: "Saúde", summary: "Med Imagem, Clínica Salles e CEDIM se unem mais uma vez para levar mamografias gratuitas a mulheres da região. O Dia D acontece em 4 de outubro no SESC São Mateus.", image: newsOutubraRosaImg },
    { title: "Ciclo do Saber – Saúde Mental no Trabalho", date: "21 Ago 2025", category: "Evento", summary: "Med Imagem e parceiros apoiam evento do Senac sobre saúde mental realizado no SESC São Mateus com foco em prevenção e liderança.", image: newsCicloSaberImg },
    { title: "Med Imagem na JPR 2025", date: "05 Mai 2025", category: "Evento", summary: "A clínica marcou presença na 55ª Jornada Paulista de Radiologia, maior evento de diagnóstico por imagem da América Latina, no Transamerica Expo Center em São Paulo.", image: newsJpr2025Img },
  ];

  const blogPosts = [
    { title: "Preparo para ressonância magnética", slug: "preparo-ressonancia", excerpt: "Saiba tudo o que você precisa fazer antes de realizar uma ressonância magnética." },
    { title: "Quando fazer mamografia?", slug: "quando-fazer-mamografia", excerpt: "Entenda a importância da mamografia e a idade recomendada para começar." },
    { title: "Diferença entre tomografia e ressonância", slug: "diferenca-tomografia-ressonancia", excerpt: "Descubra quando cada exame é indicado e suas principais diferenças." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Equipamento de diagnóstico por imagem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight"
            >
              <span className="text-accent">Prontos para o futuro</span>{" "}
              da saúde.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Tecnologia de ponta, cuidado humanizado e 28 anos de confiança cuidando de histórias no Norte Capixaba.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base text-primary-foreground/75 leading-relaxed"
            >
              Na Med Imagem, cada exame é mais do que um resultado. É parte de uma história, de um diagnóstico, de uma decisão que transforma vidas. Estamos prontos para o futuro, sem nunca deixar de cuidar do que mais importa: você.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8" asChild>
                <a href="https://wa.me/5527998684980" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar exame
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base px-8" asChild>
                <a href="https://web.clinux.com.br/portal/medimagemsm/resultados" target="_blank" rel="noopener noreferrer">
                  Resultados de exames
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground"
              >
                O futuro da medicina diagnóstica começa aqui.
              </motion.h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-muted-foreground leading-relaxed text-lg"
              >
                Ao longo de quase três décadas, a Med Imagem construiu uma trajetória baseada em precisão, confiança e evolução constante. Hoje, entramos em um novo ciclo.
              </motion.p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Cpu, text: "Um ciclo em que a tecnologia avança, mas o cuidado permanece no centro." },
                { icon: HeartHandshake, text: "Um ciclo em que inovação e humanização caminham juntas." },
                { icon: Rocket, text: "Um ciclo em que estamos, mais do que nunca, prontos para o futuro." },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card rounded-lg p-8 text-center shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-base text-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading title="Por que escolher a Med Imagem" subtitle="Compromisso com excelência em cada detalhe do seu atendimento." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-8 text-center shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exames Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading title="Exames com precisão e confiança" subtitle="Oferecemos uma estrutura completa para a realização de exames de imagem com qualidade, agilidade e segurança." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examsData.map((exam, i) => (
              <motion.div
                key={exam.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={`/${exam.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={exam.image} alt={exam.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{exam.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{exam.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/exames">Conheça nossos exames</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Humanização */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-1"
            >
              <img
                src={humanizacaoImg}
                alt="Profissional da Med Imagem acolhendo paciente em sala de exame"
                className="rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Cuidar é mais do que diagnosticar.
              </h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto lg:mx-0" />
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Acreditamos que tecnologia sem cuidado não é suficiente. Por isso, nosso compromisso vai além dos exames. Está no olhar atento, na escuta, no acolhimento e na forma como cada paciente é tratado. Porque, para nós, cada história importa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-1"
            >
              <img
                src={clinicExterior}
                alt="Clínica Med Imagem São Mateus"
                className="rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre a Med Imagem</h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto lg:mx-0" />
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                A Med Imagem nasceu com um propósito claro: levar à população do Norte Capixaba acesso a exames de imagem com qualidade, precisão e confiança. Ao longo de 28 anos, a clínica se destacou pelo pioneirismo e pela busca constante por inovação, contribuindo diretamente para a evolução da medicina diagnóstica na região.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                Hoje, a Med Imagem vive um novo momento — em que a experiência do paciente, a excelência técnica e a inovação caminham juntas. Estamos prontos para o futuro, e seguimos cuidando de cada história como se fosse única.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link to="/sobre">Conheça nossa história</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading title="Notícias" subtitle="Fique por dentro das novidades da Med Imagem e do mundo da saúde." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <Link to="/blog" className="group block relative rounded-xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-elevated transition-shadow">
                <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">{newsItems[0].category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{newsItems[0].title}</h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-2">{newsItems[0].summary}</p>
                  <span className="mt-3 inline-block text-xs text-white/60">{newsItems[0].date}</span>
                </div>
              </Link>
            </motion.div>
            <div className="flex flex-col gap-4">
              {newsItems.slice(1).map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link to="/blog" className="group flex gap-4 bg-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-shadow">
                    <div className="w-28 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-primary">{item.category}</span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{item.title}</h4>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">Ver todas as notícias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading title="Conteúdos para sua saúde" subtitle="Informações úteis sobre exames e cuidados com a saúde." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-shadow"
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Artigo</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Agendamento */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Agende seu exame</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Entre em contato conosco e agende seu exame com praticidade. Atendemos particular e convênios.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8" asChild>
                <a href="https://wa.me/5527998684980" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar exame
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
