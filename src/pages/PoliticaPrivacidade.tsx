import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <SectionHeading
            title="Política de Privacidade"
            subtitle="Última atualização: março de 2026"
          />

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 mt-10">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">1. Introdução</h2>
              <p>
                A Med Imagem São Mateus ("nós", "nosso" ou "clínica") está comprometida com a proteção da privacidade e dos dados pessoais de seus pacientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">2. Dados coletados</h2>
              <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome completo, CPF, data de nascimento e gênero;</li>
                <li>Endereço, telefone e e-mail;</li>
                <li>Dados de saúde e resultados de exames;</li>
                <li>Informações de convênio e dados de pagamento;</li>
                <li>Dados de navegação no site (cookies, endereço IP, páginas visitadas).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">3. Finalidade do tratamento</h2>
              <p>Os dados pessoais são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Agendamento e realização de exames;</li>
                <li>Envio de resultados e laudos;</li>
                <li>Comunicação sobre preparo de exames e informações clínicas;</li>
                <li>Faturamento e cobrança junto a convênios;</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>Melhoria dos nossos serviços e experiência do usuário no site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">4. Compartilhamento de dados</h2>
              <p>
                Seus dados podem ser compartilhados com médicos solicitantes, operadoras de planos de saúde, laboratórios parceiros e órgãos reguladores, sempre dentro das finalidades descritas e respeitando a legislação vigente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">5. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar a navegação no site, analisar o tráfego e personalizar conteúdos. Você pode gerenciar as preferências de cookies nas configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">6. Segurança dos dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">7. Direitos do titular</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmar a existência de tratamento de dados;</li>
                <li>Acessar, corrigir ou excluir seus dados;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Solicitar a portabilidade dos dados.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:contato@medimagemsm.com.br" className="text-primary hover:underline">
                  contato@medimagemsm.com.br
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground">8. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, entre em contato com nosso encarregado de proteção de dados (DPO) pelo e-mail{" "}
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

export default PoliticaPrivacidade;
