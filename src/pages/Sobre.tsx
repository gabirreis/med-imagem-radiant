import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const Sobre = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Sobre a Med Imagem</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Conheça nossa história, missão e compromisso com a saúde em São Mateus.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={clinicExterior}
              alt="Clínica Med Imagem"
              className="rounded-2xl shadow-elevated w-full"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Mais de 25 anos cuidando da saúde</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Med Imagem atua há mais de duas décadas oferecendo exames de diagnóstico por imagem com qualidade, precisão e atendimento humanizado. Localizada em São Mateus – ES, somos referência na região em exames como ressonância magnética, tomografia computadorizada, ultrassonografia, raio-x e mamografia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Contamos com equipamentos de última geração e uma equipe de profissionais altamente qualificados, comprometidos em oferecer o melhor diagnóstico para cada paciente.
              </p>
              <div className="space-y-3">
                {["Equipamentos de última geração", "Profissionais especializados", "Atendimento humanizado", "Resultados rápidos e confiáveis"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Missão", text: "Oferecer exames de diagnóstico por imagem com excelência, contribuindo para a saúde e bem-estar da comunidade." },
              { title: "Visão", text: "Ser a clínica de diagnóstico por imagem mais respeitada e confiável da região norte do Espírito Santo." },
              { title: "Valores", text: "Ética, humanização, qualidade, inovação tecnológica e compromisso com o paciente." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-8 shadow-card text-center"
              >
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
