import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contato = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Contato</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Entre em contato conosco para agendar seu exame ou tirar suas dúvidas.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Phone, title: "Telefone", info: "(27) 3763-5000", sub: "Segunda a sexta, 7h às 18h" },
              { icon: MapPin, title: "Endereço", info: "São Mateus - ES", sub: "Centro" },
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

        </div>
      </section>
    </Layout>
  );
};

export default Contato;
