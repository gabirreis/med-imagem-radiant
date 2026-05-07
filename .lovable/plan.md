## Mudanças

1. **Link Resultados de exames** — atualizar URL nos 3 locais (`Header.tsx` linhas 45 e 87, `Footer.tsx` linha 36) de `https://medimagemsm.com.br/resultados` para `https://web.clinux.com.br/portal/medimagemsm/resultados`.

2. **Cor de fundo das seções** — Em `src/pages/Index.tsx`, "Cuidar é mais do que diagnosticar." e "Sobre a Med Imagem" estão ambas com `bg-background`. Alterar a seção **Sobre** para `bg-secondary`, criando alternância visual coerente com o restante da página (Hero → secondary → background → secondary → background → **secondary** → secondary[notícias] …). Para evitar dois `bg-secondary` consecutivos (Sobre + Notícias), inverter: deixar **Humanização** com `bg-secondary` e **Sobre** com `bg-background`, mantendo alternância. Definição final do ritmo:
   - Posicionamento: secondary
   - Diferenciais: background
   - Exames: secondary
   - Humanização: background (mantém)
   - Sobre: **secondary** (mudança)
   - Notícias: background (mudança, atualmente secondary)
   - Blog: background (mantém)
   - CTA: primary

   Isso restaura a alternância sem duas seções iguais lado a lado.

3. **Remover botão "Fale com a equipe"** do Hero em `Index.tsx`.

4. **Imagem da seção Sobre** — adequar ao mesmo padrão da imagem de Humanização: `rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover`.