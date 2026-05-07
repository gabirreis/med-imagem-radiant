## Plano: Substituir imagem da seção "Cuidar é mais do que diagnosticar"

A imagem atual (`src/assets/humanizacao.jpg`) mostra uma mãe e filha em casa — emocional, mas não conecta com o contexto clínico.

### Ação
Gerar nova imagem via IA mantendo a **mesma linha visual** (humana, acolhedora, luz suave, paleta neutra/clara) mas adequada ao site de clínica de diagnóstico por imagem.

### Conceito da nova imagem
Cena de acolhimento clínico: uma profissional de saúde (jaleco branco/verde claro) em interação calorosa com um paciente — sorriso genuíno, mão no ombro ou recepcionando. Ambiente clínico moderno e claro, fora de foco no fundo. Luz natural suave, paleta neutra com toques de verde institucional. Estilo fotográfico realista, editorial, sem estética de banco de imagens datado.

### Especificações técnicas
- Modelo: `imagegen--generate_image` (standard)
- Aspecto: vertical `4:5` (igual ao layout atual `aspect-[4/5]`)
- Dimensões: 1024x1280
- Salvar em: `src/assets/humanizacao.jpg` (sobrescrevendo)
- Atualizar o `alt` em `src/pages/Index.tsx` para descrever a nova cena
- Nenhuma alteração de layout necessária