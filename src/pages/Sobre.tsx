import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import clinicExterior from "@/assets/clinic-exterior.webp";
import sobrePrimeirosPassos from "@/assets/sobre-primeiros-passos.webp.asset.json";
import evolucaoConstante from "@/assets/evolucao-constante.webp.asset.json";
import sobreOQueNosMove from "@/assets/sobre-o-que-nos-move.webp.asset.json";
import sobreHoje from "@/assets/sobre-hoje.webp.asset.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Sobre a Med Imagem
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Celebrando 28 anos de inovação, cuidado e confiança.
          </p>
        </div>
      </section>

      {/* História principal */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={clinicExterior}
              alt="Clínica Med Imagem"
              className="rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Uma história construída com confiança, tecnologia e cuidado.
              </h2>
              <div className="h-1 w-16 bg-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                A Med Imagem nasceu com um propósito claro: levar à população do Norte Capixaba acesso a exames de imagem com qualidade, precisão e confiança. Desde o início, a clínica se destacou pelo pioneirismo e pela busca constante por inovação, contribuindo diretamente para a evolução da medicina diagnóstica na região.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo dos anos, investimos em tecnologia, ampliamos nossa estrutura e fortalecemos nossa equipe, sempre com um compromisso inegociável: cuidar das pessoas.
              </p>
              <div className="space-y-3">
                {[
                  "Equipamentos de última geração",
                  "Profissionais especializados",
                  "Atendimento humanizado",
                  "Resultados rápidos e confiáveis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Linha do tempo / Os primeiros passos */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {[
              {
                titulo: "Os primeiros passos",
                texto:
                  "Em 1998, os médicos Dr. José Luiz Silva Neves, neurocirurgião, e Dr. Jorge Silva, urologista, uniram conhecimento e visão para transformar a realidade da saúde na região. A proposta era ousada para a época: trazer tecnologia de ponta para São Mateus e oferecer diagnósticos mais assertivos, sem a necessidade de deslocamento para outros estados. Assim nasceu a Med Imagem — com uma visão clara de futuro e um compromisso inegociável com a qualidade.",
                imagem: sobrePrimeirosPassos,
                alt: "Fachada histórica de clínica médica",
              },
              {
                titulo: "Uma trajetória de evolução constante",
                texto:
                  "Desde os primeiros anos, a clínica se destacou pelo investimento contínuo em tecnologia e pela formação de uma equipe altamente qualificada. Ao longo dessa trajetória, a Med Imagem não apenas acompanhou a evolução da medicina diagnóstica, mas foi protagonista dela na região. Foram décadas de crescimento, desafios superados e de entrega de diagnósticos com alto nível de precisão, contribuindo diretamente para decisões médicas mais seguras e para a qualidade de vida de milhares de pessoas.",
                imagem: evolucaoConstante.url,
                alt: "Ressonância magnética Philips de alta tecnologia na Med Imagem",
              },
              {
                titulo: "O que nos move",
                texto:
                  "Mais do que tecnologia, o que sustenta a Med Imagem é o compromisso com o cuidado integral do paciente. A gestão administrativa, a diretoria médica e toda a equipe compartilham um mesmo propósito: fazer sempre melhor. A busca por capacitação contínua, o investimento em desenvolvimento humano e o foco no atendimento acolhedor fazem parte da essência da clínica. O atendimento humanizado não é apenas um diferencial — é uma escolha diária.",
                imagem: sobreOQueNosMove,
                alt: "Médica acolhendo paciente",
              },
              {
                titulo: "Med Imagem hoje",
                texto:
                  "Hoje, a Med Imagem é referência em diagnóstico por imagem, com um parque tecnológico moderno e uma equipe preparada para atender com excelência, precisão e sensibilidade. Cada exame realizado carrega uma responsabilidade. Cada paciente, uma história única. E é com esse entendimento que seguimos evoluindo.",
                imagem: sobreHoje.url,
                alt: "Recepcionista da Med Imagem pronta para atender",
              },
            ].map((item, i) => {
              const imageFirst = i % 2 === 0;
              return (
                <motion.div
                  key={item.titulo}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <img
                    src={item.imagem}
                    alt={item.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className={`rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                  />
                  <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{item.titulo}</h3>
                    <div className="mt-3 h-1 w-16 bg-primary rounded-full" />
                    <p className="mt-5 text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prontos para o futuro */}
      <section className="py-16 bg-primary">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Prontos para o futuro
            </h2>
            <div className="mt-4 h-1 w-16 bg-accent rounded-full mx-auto" />
            <p className="mt-6 text-primary-foreground/80 leading-relaxed text-lg">
              Após 28 anos de trajetória, a Med Imagem entra em um novo ciclo. Um ciclo em que a tecnologia avança, os processos evoluem e a medicina se transforma — mas o compromisso permanece o mesmo.
            </p>
            <div className="mt-8 space-y-2 text-primary-foreground/90 font-medium">
              <p>Cuidar com precisão.</p>
              <p>Acolher com humanidade.</p>
              <p>Evoluir com responsabilidade.</p>
            </div>
            <p className="mt-8 text-primary-foreground/60 text-sm italic">
              Med Imagem. 28 anos cuidando de histórias. Prontos para o futuro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                text: "Ser a resposta aos questionamentos de saúde dos nossos pacientes por meio do diagnóstico por imagem, oferecendo exames com precisão, segurança e responsabilidade.",
              },
              {
                title: "Visão",
                text: "Ser reconhecida por pacientes e profissionais da saúde como a clínica de diagnóstico por imagem mais eficiente e confiável do Norte do Espírito Santo até 2028.",
              },
              {
                title: "Valores",
                text: "Ética — fazer o que é certo, sempre. Qualidade do serviço, com equipe especializada e alto padrão em imagens e laudos. Atendimento humanizado, com acolhimento e escuta. Compromisso com a excelência e com cada história que atendemos.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 shadow-card text-center"
              >
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
