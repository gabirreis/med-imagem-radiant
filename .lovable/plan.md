

## Plano: Refinar design system

### 1. Acessibilidade — `src/index.css`

**Light mode (`:root`):**
- Linha 10: `--foreground: 0 0% 27%` → `0 0% 20%`
- Linha 13: `--card-foreground: 0 0% 27%` → `0 0% 20%`
- Linha 16: `--popover-foreground: 0 0% 27%` → `0 0% 20%`
- Linha 24: `--secondary-foreground: 0 0% 27%` → `0 0% 20%`
- Linha 27: `--muted-foreground: 0 0% 47%` → `0 0% 38%`
- Linha 46: `--sidebar-accent-foreground: 0 0% 27%` → `0 0% 20%`

**Dark mode (`.dark`):** ajuste proporcional
- Linha 70: `--muted-foreground: 140 10% 60%` → `140 10% 65%` (aumentar luminosidade para melhor contraste em fundo escuro)

### 2. Bug do `--hero-overlay`

A variável está definida mas **nunca é usada** em nenhum componente — o hero já usa classes Tailwind (`bg-gradient-to-r`). Ação: **remover** a linha `--hero-overlay` do `:root` para evitar confusão futura e eliminar o risco de uso incorreto via `hsl()`.

### 3. Dark mode — `tailwind.config.ts`

- Linha 5: alterar `darkMode: ["class"]` para `darkMode: "media"`

### 4. Tipografia — verificação

A configuração atual já está correta:
- `body` aplica `font-body` (Inter) via `@layer base`
- `h1–h6` aplicam `font-heading` (Poppins) via `@layer base`
- Google Fonts importadas no topo do `index.css`

Nenhuma alteração necessária neste item — já está implementado corretamente.

### Arquivos alterados

| Arquivo | Alteração |
|---|---|
| `src/index.css` | Ajustar tokens de foreground/muted-foreground, remover `--hero-overlay` |
| `tailwind.config.ts` | `darkMode: "media"` |

