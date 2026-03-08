import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Clock, FileText, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { getExamBySlug, examsData } from "@/data/exams";

const ExamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const exam = getExamBySlug(slug || "");

  if (!exam) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Exame não encontrado</h1>
          <Button className="mt-6" asChild>
            <Link to="/exames">Ver todos os exames</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const otherExams = examsData.filter(e => e.slug !== exam.slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 bg-primary">
        <div className="container">
          <Link to="/exames" className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para exames
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">{exam.name}</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">{exam.description}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <img src={exam.image} alt={exam.name} className="w-full rounded-xl shadow-card aspect-video object-cover" />
              </motion.div>

              {[
                { title: "O que é o exame", content: exam.whatIs },
                { title: "Para que serve", content: exam.purpose },
                { title: "Quando é indicado", content: exam.indications },
                { title: "Como é realizado", content: exam.howItsDone },
              ].map((section, i) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{section.content}</p>
                </motion.div>
              ))}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Tempo de duração</h2>
                </div>
                <p className="text-muted-foreground">{exam.duration}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Orientações de preparo</h2>
                </div>
                <ul className="space-y-2">
                  {exam.preparation.map((prep) => (
                    <li key={prep} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-8 text-center sticky top-24">
                <h3 className="text-xl font-bold text-primary-foreground">Agende seu exame</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">Entre em contato para agendar sua {exam.shortName}.</p>
                <div className="mt-6 space-y-3">
                  <Button size="lg" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold" asChild>
                    <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-5 h-5 mr-2" /> Agendar exame
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-primary-foreground/60">(27) 3763-5000</p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-4">Outros exames</h4>
                <ul className="space-y-3">
                  {otherExams.map((e) => (
                    <li key={e.slug}>
                      <Link to={`/${e.slug}`} className="text-sm text-primary hover:underline">{e.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExamePage;
