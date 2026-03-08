

## Plano: Criar seção de Notícias na Home

Adicionar uma seção de notícias na página Index, posicionada antes da seção de CTA de agendamento (final da página). A seção terá um design diferenciado da seção de Blog já existente, focando em notícias da clínica e da área de saúde.

### O que será feito

1. **Criar seção "Notícias" na Home (`src/pages/Index.tsx`)**
   - Adicionar array de notícias com campos: título, data, categoria, resumo e imagem placeholder
   - Categorias como "Clínica", "Saúde", "Tecnologia"
   - Layout em grid responsivo (1 notícia destaque grande + 2-3 menores ao lado)
   - A notícia principal terá imagem grande com overlay de texto
   - As secundárias serão cards compactos com data e categoria
   - Usar animações Framer Motion consistentes com o resto do site
   - Posicionar entre a seção "Sobre" e a seção "Blog" existente
   - Incluir botão "Ver todas as notícias" linkando para `/blog`

### Estilo visual
- Background `bg-background` para contrastar com seções adjacentes
- Cards com sombra suave, badges de categoria em verde institucional
- Datas formatadas em português
- Design tipo "jornal moderno" com destaque para a notícia principal

