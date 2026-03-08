import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Stethoscope, Zap, Clock, Heart, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { examsData } from "@/data/exams";
import heroBg from "@/assets/hero-bg.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

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
    "Mais de 25 anos de experiência",
    "Tecnologia avançada",
    "Equipe especializada",
  ];

  const diferenciais = [
    { icon: Zap, title: "Tecnologia moderna", desc: "Equipamentos de última geração para diagnósticos precisos." },
    { icon: Stethoscope, title: "Equipe especializada", desc: "Profissionais qualificados e em constante atualização." },
    { icon: Clock, title: "Resultados rápidos", desc: "Laudos ágeis para que você tenha seu diagnóstico com rapidez." },
    { icon: Heart, title: "Atendimento humanizado", desc: "Cuidado e acolhimento em cada etapa do seu exame." },
  ];

  const newsItems = [
    { title: "Med Imagem investe em novo equipamento de ressonância magnética 3T", date: "05 Mar 2026", category: "Clínica", summary: "A clínica acaba de adquirir um aparelho de última geração que oferece imagens com altíssima definição e maior conforto ao paciente." },
    { title: "Campanha de mamografia gratuita em março", date: "01 Mar 2026", category: "Saúde", summary: "Ação social para mulheres acima de 40 anos da região de São Mateus." },
    { title: "Inteligência artificial no diagnóstico por imagem", date: "22 Fev 2026", category: "Tecnologia", summary: "Como a IA está auxiliando radiologistas a detectar doenças com maior precisão." },
    { title: "Novo horário de atendimento aos sábados", date: "15 Fev 2026", category: "Clínica", summary: "Agora a Med Imagem funciona também aos sábados pela manhã para sua comodidade." },
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
              Diagnóstico por imagem com{" "}
              <span className="text-accent">precisão e tecnologia</span> em São Mateus
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Ressonância magnética, tomografia, ultrassonografia e raio-x com equipamentos modernos e equipe especializada.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8" asChild>
                <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar exame
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
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

      {/* Exames Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading title="Nossos exames" subtitle="Diagnósticos precisos com equipamentos de última geração e profissionais qualificados." />
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
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-secondary">
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

      {/* Preparo */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-accent rounded-2xl p-10 md:p-16 text-center">
            <SectionHeading title="Orientações importantes antes do exame" subtitle="O preparo adequado é fundamental para a qualidade do seu exame. Confira as orientações específicas para cada procedimento." />
            <Button size="lg" asChild>
              <Link to="/preparo">
                <FileText className="w-5 h-5 mr-2" />
                Ver orientações de preparo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading title="Convênios atendidos" subtitle="Trabalhamos com os principais convênios da região para facilitar o seu atendimento." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Unimed", "Amil", "Bradesco Saúde", "SulAmérica", "Hapvida", "São Bernardo", "MedSênior", "Assim Saúde", "Cassi", "PASA", "Petrobras", "Vale"].map((conv, i) => (
              <motion.div
                key={conv}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-4 flex items-center justify-center h-20 shadow-card text-sm font-medium text-muted-foreground"
              >
                {conv}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/convenios">Ver lista completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={clinicExterior} alt="Clínica Med Imagem São Mateus" className="rounded-2xl shadow-elevated w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre a Med Imagem</h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A Med Imagem atua há mais de duas décadas oferecendo exames de diagnóstico por imagem com qualidade, precisão e atendimento humanizado. Localizada em São Mateus – ES, contamos com equipamentos de última geração e uma equipe de profissionais altamente qualificados.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nossa missão é proporcionar diagnósticos precisos com o melhor atendimento, contribuindo para a saúde e bem-estar da nossa comunidade.
              </p>
              <Button className="mt-8" size="lg" asChild>
                <Link to="/sobre">Conheça nossa história</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading title="Notícias" subtitle="Fique por dentro das novidades da Med Imagem e do mundo da saúde." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Destaque */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <Link to="/blog" className="group block relative rounded-xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-elevated transition-shadow">
                <img src={heroBg} alt={newsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">{newsItems[0].category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{newsItems[0].title}</h3>
                  <p className="mt-2 text-sm text-white/80 line-clamp-2">{newsItems[0].summary}</p>
                  <span className="mt-3 inline-block text-xs text-white/60">{newsItems[0].date}</span>
                </div>
              </Link>
            </motion.div>

            {/* Cards secundários */}
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
                      <img src={clinicExterior} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
      <section className="py-20 bg-secondary">
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
                <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar exame
                </a>
              </Button>
            </div>
            <p className="mt-6 text-primary-foreground/60 text-sm">(27) 3763-5000 | (27) 99999-9999</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
