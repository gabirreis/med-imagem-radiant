import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const Contato = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Estamos prontos para cuidar de você.
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Seja para agendar um exame, tirar dúvidas ou obter mais informações, nossa equipe está pronta para te atender. Entre em contato e conte com a Med Imagem para cuidar da sua saúde com tecnologia, segurança e atenção.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Phone, title: "Telefone", info: "(27) 3763-3366 / (27) 99868-4980", sub: "Segunda a sexta, 7h às 18h" },
              { icon: MapPin, title: "Endereço", info: "Rua Ermelino Carneiro Sobrinho, 221", sub: "Bairro Fátima, São Mateus/ES" },
              { icon: Mail, title: "E-mail", info: "contato@medimagemsm.com.br", sub: "Respondemos em até 24h" },
              { icon: Clock, title: "Horário", info: "Seg a Sex: 7h às 18h", sub: "Sáb: 7h às 12h" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-8 shadow-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 bg-primary rounded-2xl p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-primary-foreground">Agende agora pelo WhatsApp</h2>
            <p className="mt-3 text-primary-foreground/80">
              Atendimento rápido e prático. Clique abaixo e fale diretamente com nossa equipe.
            </p>
            <a
              href="https://wa.me/5527998684980"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
