import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { examsData } from "@/data/exams";

const Exames = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Nossos Exames</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Tecnologia que entrega precisão. Cuidado que gera confiança.
          </p>
        </div>
      </section>

      {/* Texto institucional */}
      <section className="py-12 bg-secondary">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground">Estrutura completa para o seu diagnóstico</h2>
              <div className="mt-3 h-1 w-12 bg-primary rounded-full" />
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A Med Imagem oferece uma estrutura completa para a realização de exames de diagnóstico por imagem, com equipamentos modernos e equipe especializada. Cada exame é conduzido com rigor técnico, atenção aos detalhes e respeito ao paciente.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Nosso compromisso é garantir resultados confiáveis, com agilidade e segurança, contribuindo diretamente para decisões médicas mais assertivas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-card border-l-4 border-primary"
            >
              <h3 className="text-lg font-bold text-primary">Mais do que exames, uma experiência de cuidado.</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Sabemos que realizar um exame pode gerar dúvidas e ansiedade. Por isso, nossa equipe está preparada para acolher, orientar e acompanhar cada paciente em todas as etapas do atendimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lista de exames */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeading
            title="Conheça nossos exames"
            subtitle="Cada procedimento realizado com rigor técnico e atenção ao paciente."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examsData.map((exam, i) => (
              <motion.div
                key={exam.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  to={`/${exam.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={exam.image} alt={exam.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{exam.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{exam.description}</p>
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
    </Layout>
  );
};

export default Exames;
