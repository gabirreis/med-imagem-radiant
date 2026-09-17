# Migração para TanStack Start (renderização no servidor)

Você acionou a migração do site para o template mais recente do Lovable, com renderização no servidor. É exatamente a "solução definitiva" citada na Fase 5.

## O que isso resolve

- Título e descrição próprios de cada página passam a existir **antes** do site carregar no navegador. Ou seja: prévias de link no WhatsApp, LinkedIn e Facebook passam a mostrar o conteúdo certo de cada exame e de cada notícia.
- Robôs de IA que não executam JavaScript (parte dos usados por ChatGPT, Perplexity e afins) passam a ler o conteúdo completo das páginas.
- Páginas carregam com conteúdo já pronto, o que tende a melhorar a percepção de velocidade.

## O que muda para você

- O endereço do site, o visual, os textos, as imagens e todas as páginas continuam iguais.
- Nada vai ao ar sozinho: o site publicado continua exibindo a versão atual até você clicar em Publicar.
- Se algo não ficar bom, dá para desfazer revertendo esta etapa pelo histórico do chat.

## Como será feito (parte técnica)

1. Verificação inicial: o projeto precisa compilar sem erros antes de começar.
2. Troca da base do projeto (Vite + React Router → TanStack Start), mantendo o tema, as cores e as fontes atuais.
3. Cada rota atual (`/`, `/exames`, `/convenios`, `/sobre`, `/contato`, `/blog`, `/blog/:slug`, páginas legais, `/:slug` de exames e a página de erro) vira um arquivo de rota próprio.
4. O componente `Seo` atual (que escreve as tags via JavaScript) passa a alimentar o `head` de cada rota, que é gerado no servidor.
5. Provedores atuais (React Query, Tooltip, Toaster) e o comportamento de rolar ao topo migram para a raiz do app.
6. Sitemap, `robots.txt` e `llms.txt` seguem funcionando como estão.
7. Ao final: build limpo, verificação de tipos, e teste de que todas as rotas respondem corretamente no servidor.

## Observações honestas

- O projeto não usa login nem banco de dados, então não há áreas protegidas ou funções de servidor para migrar — a migração é mais simples que a média.
- A migração consome créditos e leva alguns minutos.
- Depois de concluída, é preciso revisar o site na pré-visualização e então publicar para que o ganho valha no domínio.
