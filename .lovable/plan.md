## Plano: Reestruturar seção "O futuro da medicina diagnóstica começa aqui"

Em `src/pages/Index.tsx`, na seção "Posicionamento":

### 1. Substituir o parágrafo atual por dois parágrafos

- **Parágrafo 1:** "Ao longo de quase três décadas, a Med Imagem construiu uma trajetória baseada em precisão, confiança e evolução constante."
- **Parágrafo 2 (destacado):** "Hoje, entramos em um novo ciclo."

### 2. Adicionar 3 blocos em grid (md:grid-cols-3) abaixo dos parágrafos

Cada bloco terá um ícone do `lucide-react` em círculo (estilo similar ao da seção "Diferenciais"), com o texto correspondente:

| Ícone | Texto |
|---|---|
| `Cpu` | Um ciclo em que a tecnologia avança, mas o cuidado permanece no centro. |
| `HeartHandshake` | Um ciclo em que inovação e humanização caminham juntas. |
| `Rocket` | Um ciclo em que estamos, mais do que nunca, prontos para o futuro. |

### Detalhes técnicos

- Importar `Cpu`, `HeartHandshake`, `Rocket` de `lucide-react`.
- Manter fundo `bg-secondary` da seção.
- Cards com `bg-card`, `rounded-lg`, `shadow-card`, ícone em círculo `bg-accent` com `text-primary` (consistente com a seção "Por que escolher a Med Imagem").
- Animação `fadeUp` com stagger nos 3 blocos.
- Ampliar `max-w-3xl` para `max-w-5xl` no container interno para acomodar o grid.
