import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const TermosDeUso = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <SectionHeading
            title="Termos de Uso"
            subtitle="Última atualização: março de 2026"
          />

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 mt-10">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar o site da Med Imagem São Mateus, você concorda com estes Termos de Uso. Caso não concorde com alguma disposição, recomendamos que não utilize o site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">2. Descrição dos serviços</h2>
              <p>
                O site tem caráter informativo e disponibiliza informações sobre os serviços de diagnóstico por imagem oferecidos pela clínica, incluindo tipos de exames, preparo, convênios aceitos e canais de contato.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">3. Uso adequado</h2>
              <p>O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Utilizar o site de forma lícita e respeitosa;</li>
                <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização;</li>
                <li>Não utilizar mecanismos automatizados para acessar o site de forma abusiva;</li>
                <li>Fornecer informações verdadeiras ao entrar em contato ou agendar exames.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">4. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo do site — textos, imagens, logotipos, layout e design — é de propriedade da Med Imagem São Mateus ou de seus licenciadores, sendo protegido pela legislação de direitos autorais e propriedade intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">5. Limitação de responsabilidade</h2>
              <p>
                As informações disponíveis no site têm caráter meramente informativo e não substituem consulta médica ou diagnóstico profissional. A Med Imagem não se responsabiliza por decisões tomadas com base exclusivamente no conteúdo do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">6. Links externos</h2>
              <p>
                O site pode conter links para sites de terceiros. A Med Imagem não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">7. Alterações nos termos</h2>
              <p>
                Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">8. Foro</h2>
              <p>
                Fica eleito o foro da Comarca de São Mateus, Estado do Espírito Santo, para dirimir quaisquer questões decorrentes destes Termos de Uso.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">9. Contato</h2>
              <p>
                Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail{" "}
                <a href="mailto:contato@medimagemsm.com.br" className="text-primary hover:underline">
                  contato@medimagemsm.com.br
                </a>{" "}
                ou pelo telefone (27) 3763-5000.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermosDeUso;
