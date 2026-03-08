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
            Conheça os exames de diagnóstico por imagem disponíveis na Med Imagem São Mateus.
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container">
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
