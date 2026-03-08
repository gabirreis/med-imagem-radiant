import { motion } from "framer-motion";
import { FileText, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { examsData } from "@/data/exams";

const Preparo = () => {
  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Preparo de Exames</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Confira as orientações de preparo para cada exame e garanta resultados precisos.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container max-w-3xl space-y-8">
          {examsData.map((exam, i) => (
            <motion.div
              key={exam.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{exam.name}</h2>
              </div>
              <ul className="space-y-2">
                {exam.preparation.map((prep) => (
                  <li key={prep} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Preparo;
