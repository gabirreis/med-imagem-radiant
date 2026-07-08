import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ambepLogo from "@/assets/convenios/ambep.png.asset.json";
import amilLogo from "@/assets/convenios/amil.png.asset.json";
import banescaixaLogo from "@/assets/convenios/banescaixa.png.asset.json";
import bradescoLogo from "@/assets/convenios/bradesco.png.asset.json";
import capeSaudeLogo from "@/assets/convenios/cape-saude.png.asset.json";
import cartaoDeTodosLogo from "@/assets/convenios/cartao-de-todos.png.asset.json";
import cassiLogo from "@/assets/convenios/cassi.png.asset.json";
import economicLogo from "@/assets/convenios/economic.png.asset.json";
import paxVidaLogo from "@/assets/convenios/pax-vida.png.asset.json";
import petrobrasLogo from "@/assets/convenios/petrobras.png.asset.json";
import sampLogo from "@/assets/convenios/samp.png.asset.json";
import saoBernardoLogo from "@/assets/convenios/sao-bernardo.png.asset.json";
import unimedLogo from "@/assets/convenios/unimed.png.asset.json";

type Convenio = { nome: string; logo?: string };

const convenios: Convenio[] = [
  { nome: "AMBEP", logo: ambepLogo.url },
  { nome: "AMIL" },
  { nome: "BANESCAIXA", logo: banescaixaLogo.url },
  { nome: "BEST SENIOR" },
  { nome: "BRADESCO", logo: bradescoLogo.url },
  { nome: "CAPE SAÚDE" },
  { nome: "CAPITAL PREV – CESAN" },
  { nome: "CARTÃO DE TODOS", logo: cartaoDeTodosLogo.url },
  { nome: "CASSI", logo: cassiLogo.url },
  { nome: "COMPARTILHE SAÚDE" },
  { nome: "ECONOMIC", logo: economicLogo.url },
  { nome: "EPHARMA" },
  { nome: "EXCELÊNCIA – MERIDIONAL SAÚDE" },
  { nome: "MAIS SAÚDE MONTANHA" },
  { nome: "MEDSEMPRE" },
  { nome: "NOVA SAÚDE" },
  { nome: "OAB – CAAES" },
  { nome: "PAX VIDA" },
  { nome: "PETROBRAS", logo: petrobrasLogo.url },
  { nome: "POSTAL SAÚDE" },
  { nome: "RHMED" },
  { nome: "RIO DOCE SAÚDE" },
  { nome: "SAMP", logo: sampLogo.url },
  { nome: "SÃO BERNARDO", logo: saoBernardoLogo.url },
  { nome: "SAUDE CAIXA" },
  { nome: "SELECT OPERADORA" },
  { nome: "SEPACO" },
  { nome: "SIND EMPRESA" },
  { nome: "SINDICATO RURAL DE JAGUARE" },
  { nome: "SINDICATO RURAL DE SÃO MATEUS" },
  { nome: "TECNOSEG" },
  { nome: "UNIMED" },
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
                key={conv.nome}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="bg-card rounded-lg p-4 flex items-center justify-center h-24 shadow-card"
              >
                {conv.logo ? (
                  <img
                    src={conv.logo}
                    alt={`Logo ${conv.nome}`}
                    loading="lazy"
                    className="max-h-16 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-muted-foreground text-center">
                    {conv.nome}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-accent rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">Não encontrou seu convênio?</h2>
            <p className="mt-2 text-muted-foreground">Entre em contato conosco para verificar a disponibilidade.</p>
            <Button className="mt-6" size="lg" asChild>
              <a href="https://wa.me/5527998684980" target="_blank" rel="noopener noreferrer">
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
