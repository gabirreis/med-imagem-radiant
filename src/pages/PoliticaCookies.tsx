import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const PoliticaCookies = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <SectionHeading
            title="Política de Cookies"
            subtitle="Última atualização: julho de 2026"
          />

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 mt-10">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">1. O que são cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou smartphone) quando você acessa um site. Eles permitem que o site reconheça seu dispositivo nas visitas seguintes, melhore sua experiência de navegação e colete informações sobre como você utiliza o site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">2. Como utilizamos cookies</h2>
              <p>
                O site da Med Imagem utiliza cookies para melhorar a sua experiência de navegação, analisar o tráfego e entender como nossos visitantes interagem com o conteúdo. Nenhum cookie é utilizado para coletar informações de saúde ou dados sensíveis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">3. Tipos de cookies utilizados</h2>

              <div className="mt-4 space-y-4">
                <div className="bg-secondary rounded-lg p-5">
                  <h3 className="font-semibold text-foreground">🔒 Cookies essenciais (necessários)</h3>
                  <p className="mt-1 text-sm">
                    Indispensáveis para o funcionamento básico do site. Sem eles, funcionalidades como navegação entre páginas e acesso a áreas seguras não funcionam corretamente. Estes cookies não podem ser desativados.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-5">
                  <h3 className="font-semibold text-foreground">📊 Cookies analíticos (desempenho)</h3>
                  <p className="mt-1 text-sm">
                    Nos ajudam a entender como os visitantes interagem com o site — quais páginas são mais acessadas, de onde vêm os usuários e quais conteúdos geram mais interesse. As informações coletadas são agregadas e anônimas.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-5">
                  <h3 className="font-semibold text-foreground">🎯 Cookies de funcionalidade</h3>
                  <p className="mt-1 text-sm">
                    Permitem que o site lembre suas preferências (como idioma e configurações) para oferecer uma experiência mais personalizada nas visitas seguintes.
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-5">
                  <h3 className="font-semibold text-foreground">📣 Cookies de marketing</h3>
                  <p className="mt-1 text-sm">
                    Utilizados para exibir conteúdos e anúncios relevantes com base nos seus interesses. Podem ser definidos por nós ou por parceiros de publicidade. Você pode recusar estes cookies na central de preferências.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">4. Gerenciamento de consentimento</h2>
              <p>
                Utilizamos a plataforma <strong>Adopt</strong> para gerenciar suas preferências de cookies de forma transparente e em conformidade com a LGPD. Ao acessar nosso site pela primeira vez, você verá um aviso solicitando seu consentimento para o uso de cookies não essenciais.
              </p>
              <p className="mt-3">
                Você pode revisar ou alterar suas preferências a qualquer momento clicando no ícone de configurações de cookies disponível no rodapé do site ou diretamente no banner exibido na sua primeira visita.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">5. Cookies de terceiros</h2>
              <p>
                Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas, como ferramentas de análise (Google Analytics) e plataformas de publicidade. Esses terceiros têm suas próprias políticas de privacidade e uso de cookies, sobre as quais não temos controle.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">6. Como desativar cookies pelo navegador</h2>
              <p>
                Além da central de preferências do nosso site, você pode configurar seu navegador para bloquear ou excluir cookies. Consulte as instruções específicas do seu navegador:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Google Chrome: Configurações → Privacidade e segurança → Cookies</li>
                <li>Mozilla Firefox: Preferências → Privacidade e segurança</li>
                <li>Safari: Preferências → Privacidade</li>
                <li>Microsoft Edge: Configurações → Privacidade, pesquisa e serviços</li>
              </ul>
              <p className="mt-3">
                Atenção: desativar todos os cookies pode afetar o funcionamento de partes do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">7. Base legal (LGPD)</h2>
              <p>
                O uso de cookies no nosso site está fundamentado no <strong>consentimento do usuário</strong> (art. 7º, inciso I da Lei nº 13.709/2018 — LGPD), exceto para cookies estritamente necessários, cujo tratamento se justifica pelo <strong>legítimo interesse</strong> na operação do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">8. Relação com a Política de Privacidade</h2>
              <p>
                Esta Política de Cookies é parte integrante da nossa{" "}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>
                , onde você encontra informações completas sobre o tratamento de dados pessoais realizado pela Med Imagem.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">9. Contato</h2>
              <p>
                Dúvidas sobre o uso de cookies ou sobre esta política? Entre em contato com nosso encarregado de proteção de dados (DPO):
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li>
                  E-mail:{" "}
                  <a href="mailto:contato@medimagemsm.com.br" className="text-primary hover:underline">
                    contato@medimagemsm.com.br
                  </a>
                </li>
                <li>Telefone: (27) 3763-3366</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaCookies;
