## Página Sobre — ajustes

### 1. Imagem principal
Padronizar a imagem da seção "História principal" com o mesmo padrão da home: `rounded-2xl shadow-elevated w-full max-w-md mx-auto aspect-[4/3] object-cover`.

### 2. Reorganizar os 4 tópicos da timeline com imagens
A seção "Linha do tempo" hoje renderiza 4 cards apenas com texto. Vou transformar em um layout alternado (imagem/texto, texto/imagem, imagem/texto, texto/imagem) — padrão "zig-zag" — onde cada um dos 4 tópicos terá uma imagem ilustrativa ao lado.

**Imagens a gerar** (4 novas, salvas em `src/assets/`):
- `sobre-primeiros-passos.jpg` — fachada antiga / estabelecimento dos médicos fundadores, tom histórico
- `sobre-evolucao.jpg` — equipamento moderno de diagnóstico, simbolizando evolução tecnológica
- `sobre-o-que-nos-move.jpg` — equipe médica acolhendo paciente, atendimento humanizado
- `sobre-hoje.jpg` — recepção/interior moderno da clínica, ambiente atual

**Layout de cada tópico**: grid 2 colunas em `lg`, com imagem `rounded-2xl shadow-elevated aspect-[4/3] object-cover w-full max-w-md`, alternando ordem com `lg:order-1` / `lg:order-2`. Manter título em destaque (primary) + texto + barra accent. Animação `fadeUp` mantida.