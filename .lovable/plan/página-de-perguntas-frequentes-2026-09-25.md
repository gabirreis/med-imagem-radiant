# Página de Perguntas Frequentes

## O que será feito
1. **Nova página `/perguntas-frequentes`** no padrão das páginas internas: faixa verde com título "Perguntas Frequentes" e o subtítulo informado.
2. **Perguntas em accordion** (abrir/fechar), agrupadas nas 5 categorias, com os textos exatamente como enviados.
3. **Bloco de contato no final** com WhatsApp (27) 99868-4980 e Telefone (27) 3763-3366, exibidos como informação (com ícones). Para respeitar a regra do site de não ter botões de WhatsApp extras, o WhatsApp aparece como texto; o contato por WhatsApp continua pelo botão flutuante.
4. **Rodapé**: link "Perguntas Frequentes" na coluna "Links úteis".
5. **Sitemap**: nova URL com changefreq monthly e priority 0.6.
6. **SEO**: título, descrição e dados estruturados FAQPage + BreadcrumbList na nova página.
7. **Breadcrumbs nas páginas existentes**: notícias (Início > Notícias > título) e exames (Início > Exames > nome do exame).

## Detalhes técnicos
- `src/data/faq.ts`: categorias e perguntas em um só lugar; usado tanto no accordion quanto no JSON-LD FAQPage (garante texto idêntico).
- `src/pages/PerguntasFrequentes.tsx`: usa `Layout`, hero igual às outras páginas internas e o `Accordion` do shadcn.
- `src/routes/perguntas-frequentes.tsx`: `head()` com `seoHead` e `jsonLd: [faqPage, breadcrumb]`.
- `src/routes/blog.$slug.tsx` e `src/routes/$slug.tsx`: `jsonLd` vira array com o bloco existente + BreadcrumbList (URLs absolutas com `SITE_URL`).
- `src/components/Footer.tsx` e `public/sitemap.xml` atualizados.
