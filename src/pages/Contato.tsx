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
              { icon: Mail, title: "E-mail", info: "contato@medimagemsm.com.br", sub: "" },
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
                  {item.sub && <p className="text-sm text-muted-foreground">{item.sub}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Onde estamos</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <iframe
                title="Localização da Med Imagem São Mateus no Google Maps"
                src="https://www.google.com/maps?q=Rua%20Ermelino%20Carneiro%20Sobrinho%2C%20221%2C%20Bairro%20F%C3%A1tima%2C%20S%C3%A3o%20Mateus%20-%20ES&output=embed"
                className="w-full h-[350px] md:h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua%20Ermelino%20Carneiro%20Sobrinho%2C%20221%2C%20Bairro%20F%C3%A1tima%2C%20S%C3%A3o%20Mateus%20-%20ES"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <MapPin className="w-4 h-4" /> Como chegar
              </a>
            </div>
          </motion.div>

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
