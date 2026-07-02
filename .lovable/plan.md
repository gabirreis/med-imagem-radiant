# Atualizar imagens de Mamografia e Tomografia

Substituir as imagens dos exames de **Mamografia** e **Tomografia Computadorizada** pelas fotos reais dos equipamentos da clínica (uploads do usuário).

## Passos

1. Publicar as duas imagens via `lovable-assets` a partir do mount `/mnt/user-uploads/`:
   - `MAMOGRAFIA.webp` → `src/assets/exam-mamografia.webp.asset.json`
   - `TOMOGRAFIA.webp` → `src/assets/exam-tomografia.webp.asset.json`
2. Atualizar `src/data/exams.ts`:
   - Trocar os imports antigos (`exam-mamografia.jpg`, `exam-tomografia.jpg`) pelos novos pointers `.asset.json`
   - Usar `.url` do pointer no campo `image` de cada exame
3. Manter todos os outros campos (nome, descrição, preparo) inalterados

As imagens antigas continuam nos assets do projeto, mas deixam de ser referenciadas — sem impacto no bundle.

## Onde aparece automaticamente
- Home (grid de exames)
- Página `/exames`
- Páginas individuais `/mamografia` e `/tomografia`
- Sidebar "Outros exames"
