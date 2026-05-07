Em `src/pages/Index.tsx` (seção Sobre), aplicar o mesmo padrão da seção "Cuidar é mais do que diagnosticar":

- Wrapper interno com `max-w-6xl mx-auto` no grid.
- `motion.div` da imagem com `className="order-1 lg:order-1"`.
- `motion.div` do texto com `className="order-2 lg:order-2 text-center lg:text-left"`.
- Título mantém `text-3xl md:text-4xl font-bold text-foreground`.
- Barra: `mt-4 h-1 w-16 bg-primary rounded-full mx-auto lg:mx-0`.
- Parágrafo: `mt-6 text-muted-foreground leading-relaxed text-lg`.
- Manter os 2 parágrafos atuais e o botão "Conheça nossa história" (centralizado no mobile via `mx-auto lg:mx-0` no botão wrapper, ou usando flex). Para garantir alinhamento do botão, envolver em `<div className="flex justify-center lg:justify-start">`.