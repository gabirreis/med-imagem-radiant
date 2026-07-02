# Substituir imagem do bloco "Med Imagem hoje" na página Sobre

## Contexto
Na página `/sobre`, o bloco **"Med Imagem hoje"** (linha 107-112 de `src/pages/Sobre.tsx`) exibe atualmente `src/assets/sobre-hoje.jpg`, com alt text "Recepção moderna da Med Imagem". O usuário enviou a foto real da recepcionista da clínica (`CUIDAR_É_MAIS_QUE_DIAGNOSTICAR.webp`) para substituir essa imagem.

## O que será feito

### 1. Publicar a nova imagem como asset
Usar o CLI `lovable-assets` a partir do upload em `/mnt/user-uploads/`:
- Origem: `CUIDAR_É_MAIS_QUE_DIAGNOSTICAR.webp`
- Destino do pointer: `src/assets/sobre-hoje.webp.asset.json`
- Manter o filename original `sobre-hoje.webp` no CDN para consistência com o contexto da página.

### 2. Atualizar `src/pages/Sobre.tsx`
- Substituir o import `sobreHoje from "@/assets/sobre-hoje.jpg"` por import do pointer `.asset.json`.
- No item do array `Med Imagem hoje`, usar `sobreHoje.url` no campo `imagem`.
- Ajustar o `alt` para descrever a nova imagem (ex.: "Recepcionista da Med Imagem pronta para atender").
- Manter classes, dimensões (`aspect-[4/3]`, `max-w-md`) e efeitos de animação inalterados.

### 3. Limpar asset antigo
- Remover `src/assets/sobre-hoje.jpg` do repositório, pois deixará de ser referenciado.

## Resultado esperado
A seção "Med Imagem hoje" passa a exibir a foto real da recepcionista no balcão da clínica, com carregamento otimizado via CDN e sem duplicar assets binários no repo.