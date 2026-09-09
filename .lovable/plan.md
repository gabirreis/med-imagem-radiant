# Fase 5 — Otimização para buscas de IA (GEO/AEO)

A descrição está correta. Abaixo o que será feito, com dois ajustes de realidade.

## O que muda no site

1. **Título e descrição próprios por página** — cada página (Home, Exames, cada exame, Convênios, Sobre, Contato, Notícias) passa a ter seu próprio título e resumo, em vez do texto único de hoje.
2. **Ficha de dados para Google e IAs** — informações da clínica (nome, endereço, telefones, horários, responsável técnica, redes) em formato que buscadores leem direto, na Home e no Contato; e ficha de notícia em cada matéria.
3. **Página individual para cada notícia** — hoje as notícias abrem em sanfona dentro de /blog e não têm endereço próprio. Cada uma ganha um link fixo (ex.: /noticias/outubro-rosa-2026), pré-requisito para aparecer isolada no Google e ser citada por IAs. A lista continua em /blog.
4. **Arquivo /llms.txt** — resumo do site pensado para ChatGPT, Claude e Perplexity.
5. **robots.txt** — liberação explícita dos robôs de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, entre outros).
6. **Sitemap** — inclusão das páginas de exame e de cada notícia.
7. **Marcação semântica** — uso correto de artigo, data e hierarquia de títulos nas notícias.

## Os dois pontos honestos

- **A limitação do JavaScript está certa.** Robôs que não executam JavaScript (incluindo os de pré-visualização de link do WhatsApp, LinkedIn e Facebook) veem apenas o título e a descrição fixos do site, não os de cada página. O Google executa JavaScript e enxerga o conteúdo normalmente.
- **A solução definitiva existe e é compatível com o Lovable**, ao contrário do que o texto sugere: o app pode ser migrado para o template mais recente com renderização no servidor — basta digitar "/" no chat e escolher "Migrate to TanStack Start", ou pedir aqui. [o que a migração traz](https://lovable.dev/blog/building-apps-using-tanstack-start). É uma mudança maior e não é obrigatória; a Fase 5 já entrega a maior parte do ganho.

Sugestão: fazer a Fase 5 agora e avaliar a migração depois, como fase separada.

## Detalhes técnicos

- Instalar `react-helmet-async`; `HelmetProvider` em `src/main.tsx`; `<Helmet>` por rota.
- JSON-LD: `MedicalClinic` (Home/Contato), `NewsArticle` (notícias), `BreadcrumbList` onde couber.
- Extrair `blogPosts` de `src/pages/Blog.tsx` para `src/data/news.ts`; nova rota `/noticias/:slug` em `src/App.tsx` (antes da rota curinga `/:slug`), com redirecionamento das âncoras atuais.
- Remover o canonical fixo do `index.html` ao adotar Helmet; manter as og:* estáticas como fallback.
- `public/llms.txt` novo; `public/robots.txt` e `public/sitemap.xml` atualizados (sem `lastmod` inventado).
- As alterações de metadados só valem no domínio após uma nova publicação.
