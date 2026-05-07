## Plano: Adicionar imagem à seção "Cuidar é mais do que diagnosticar"

### 1. Asset
- Copiar `user-uploads://image.png` para `src/assets/humanizacao.jpg` (renomeando para refletir o contexto: acolhimento/humanização).
- Importar no `src/pages/Index.tsx`.

### 2. Layout proposto: split 2 colunas (imagem + texto)

Substituir o layout atual centralizado por um grid `lg:grid-cols-2` com gap generoso:

- **Coluna esquerda (imagem)**: foto em `rounded-2xl shadow-elevated`, `aspect-[4/5]` ou altura natural, com leve animação `slide-in` da esquerda.
- **Coluna direita (texto)**: título "Cuidar é mais do que diagnosticar.", barra accent, e o parágrafo — alinhados à esquerda, com animação `slide-in` da direita.

No mobile (`<lg`): a imagem aparece acima do texto, ambos centralizados.

### 3. Detalhes visuais
- Manter `bg-background` da seção e padding `py-20`.
- Container interno `max-w-6xl mx-auto`.
- Imagem com `object-cover` para enquadrar bem o abraço.
- Alt descritivo: "Mãe e filha em momento de carinho — atendimento humanizado Med Imagem".

### Por que esse layout
A seção atual é puramente textual e curta. Trazer uma imagem emocional ao lado do texto reforça visualmente o conceito de "cuidado humanizado", cria ritmo na página (quebra a sequência de seções centralizadas) e evita repetir o padrão da seção "Sobre" (que também usa split, mas com foto da clínica — aqui o foco é pessoa/emoção, não estrutura).