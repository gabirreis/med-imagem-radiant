import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const convenios = [
  "Unimed", "Amil", "Bradesco Saúde", "SulAmérica", "Hapvida", "São Bernardo",
  "MedSênior", "Assim Saúde", "Cassi", "PASA", "Petrobras", "Vale",
  "Geap", "Postal Saúde", "Fundação Saúde Itaú", "Eletros", "Saúde Caixa", "Capesaúde",
];

const Convenios = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Convênios Atendidos</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Atendemos os principais convênios da região. Consulte a disponibilidade para o seu plano.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {convenios.map((conv, i) => (
              <motion.div
                key={conv}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="bg-card rounded-lg p-6 flex items-center justify-center h-24 shadow-card text-sm font-medium text-muted-foreground text-center"
              >
                {conv}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-accent rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">Não encontrou seu convênio?</h2>
            <p className="mt-2 text-muted-foreground">Entre em contato conosco para verificar a disponibilidade.</p>
            <Button className="mt-6" size="lg" asChild>
              <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" /> Falar conosco
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Convenios;
