import { Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCategories } from "@/data/faq";

const PerguntasFrequentes = () => (
  <Layout>
    <section className="py-16 bg-primary">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">Perguntas Frequentes</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
          Sabemos que realizar um exame pode trazer dúvidas. Reunimos aqui as perguntas mais frequentes para tornar sua experiência na Med Imagem mais tranquila, segura e acolhedora.
        </p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container max-w-3xl space-y-12">
        {faqCategories.map((cat, ci) => (
          <div key={cat.category}>
            <h2 className="text-2xl font-bold text-foreground mb-4">{cat.category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {cat.items.map((item, i) => (
                <AccordionItem key={item.question} value={`${ci}-${i}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        <div className="rounded-2xl bg-secondary p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Ainda tem dúvidas?</h2>
          <p className="mt-2 text-muted-foreground">Fale com nossa equipe.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-foreground font-medium">
            <span>WhatsApp: (27) 99868-4980</span>
            <span className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-primary" />Telefone: (27) 3763-3366</span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PerguntasFrequentes;
