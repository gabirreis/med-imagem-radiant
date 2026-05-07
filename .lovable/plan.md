**Diagnóstico:** O `Button variant="outline"` tem `bg-background` (branco) embutido. Sobre o fundo verde do Hero, isso faz o botão ficar com fundo branco e texto branco (`text-primary-foreground`) — praticamente ilegível.

**Correção em `src/pages/Index.tsx`** (CTA "Resultados de exames" do Hero):

Trocar `variant="outline"` por um botão transparente sobre o hero. Adicionar `bg-transparent` para anular o fundo da variante outline e manter borda/hover já existentes:

```
className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base px-8"
```

Isso entrega o padrão de "ghost button outline sobre hero": transparente, borda branca espessa, e no hover inverte para fundo branco/texto verde — alinhado ao design system (usa apenas tokens `primary` / `primary-foreground`).