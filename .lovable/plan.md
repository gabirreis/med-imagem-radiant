Plano para substituir a imagem da seção "Uma trajetória de evolução constante" na página Sobre.

## Contexto
- A seção "Uma trajetória de evolução constante" em `src/pages/Sobre.tsx` usa atualmente `src/assets/sobre-evolucao.jpg`.
- A nova imagem enviada (`EVOLUCAOCONSTANTE.webp`) mostra um equipamento de ressonância magnética Philips em ambiente clínico moderno, alinhada ao tema de evolução tecnológica.

## Passos

1. **Publicar novo asset no CDN**
   - Executar `lovable-assets create` a partir de `/mnt/user-uploads/EVOLUCAOCONSTANTE.webp`.
   - Salvar o ponteiro em `src/assets/evolucao-constante.webp.asset.json`.

2. **Atualizar `src/pages/Sobre.tsx`**
   - Remover o import `import sobreEvolucao from "@/assets/sobre-evolucao.jpg"`.
   - Adicionar `import evolucaoConstante from "@/assets/evolucao-constante.webp.asset.json"`.
   - No item "Uma trajetória de evolução constante" do array da linha do tempo, trocar `imagem: sobreEvolucao` para `imagem: evolucaoConstante.url`.
   - Atualizar o `alt` para algo descritivo, ex.: "Ressonância magnética Philips de alta tecnologia na Med Imagem".

3. **Remover asset antigo do repositório**
   - Deletar `src/assets/sobre-evolucao.jpg`, pois não possui outras referências no projeto.

4. **Validar**
   - Rodar `bun run build` para garantir que imports e tipagens estão corretos.
   - Verificar visualmente a seção no preview.

## Resumo

Substituir a imagem estática `sobre-evolucao.jpg` pela imagem real enviada do equipamento de ressonância magnética, publicada via CDN como `evolucao-constante.webp`, e atualizar a referência na página `/sobre`.
