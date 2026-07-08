## Objetivo
Na página `/convenios`, substituir os blocos textuais pelos logos dos parceiros enviados. Quando um convênio ainda não tiver logo, o bloco continua exibindo o nome.

## Logos enviados (9)
AMBEP, BANESCAIXA, BRADESCO, CARTÃO DE TODOS, CASSI, ECONOMIC, PETROBRAS, SAMP, SÃO BERNARDO.

Os 23 restantes (AMIL, BEST SENIOR, CAPE SAÚDE, CAPITAL PREV – CESAN, COMPARTILHE SAÚDE, EPHARMA, EXCELÊNCIA – MERIDIONAL SAÚDE, MAIS SAÚDE MONTANHA, MEDSEMPRE, NOVA SAÚDE, OAB – CAAES, PAX VIDA, POSTAL SAÚDE, RHMED, RIO DOCE SAÚDE, SAUDE CAIXA, SELECT OPERADORA, SEPACO, SIND EMPRESA, SINDICATO RURAL DE JAGUARE, SINDICATO RURAL DE SÃO MATEUS, TECNOSEG, UNIMED) permanecem com o nome como fallback.

## Passos

1. **Publicar 9 logos no CDN** via `lovable-assets create` a partir de `/mnt/user-uploads/`, salvando os ponteiros em `src/assets/convenios/`:
   - `ambep.png.asset.json`
   - `banescaixa.png.asset.json`
   - `bradesco.png.asset.json`
   - `cartao-de-todos.png.asset.json`
   - `cassi.png.asset.json`
   - `economic.png.asset.json`
   - `petrobras.png.asset.json`
   - `samp.png.asset.json`
   - `sao-bernardo.png.asset.json`

2. **Refatorar `src/pages/Convenios.tsx`**:
   - Transformar o array `convenios` em uma lista de objetos `{ nome: string; logo?: string }`.
   - Importar os 9 asset pointers e associar `logo: <import>.url` ao respectivo convênio; os 23 restantes ficam sem `logo`.
   - No `map`, renderizar `<img src={conv.logo} alt={conv.nome} className="max-h-16 max-w-full object-contain" />` quando existir logo; caso contrário, manter o texto atual.
   - Manter o mesmo grid, tamanho de card (h-24) e animações; apenas ajustar padding interno se necessário para caber a imagem.

3. **Validar** com `bun run build` e verificar visualmente `/convenios` no preview (logos nítidos, altura consistente, fallback textual OK).

## Detalhes técnicos

```tsx
type Convenio = { nome: string; logo?: string };
const convenios: Convenio[] = [
  { nome: "AMBEP", logo: ambepLogo.url },
  { nome: "AMIL" },
  // ...
];
```

Bloco no grid:
```tsx
<div className="bg-card rounded-lg p-4 flex items-center justify-center h-24 shadow-card">
  {conv.logo ? (
    <img src={conv.logo} alt={conv.nome} loading="lazy" className="max-h-16 max-w-full object-contain" />
  ) : (
    <span className="text-sm font-medium text-muted-foreground text-center">{conv.nome}</span>
  )}
</div>
```
