

## Plano: Remover botão "Falar no WhatsApp" do CTA

Remover o botão "Falar no WhatsApp" em 3 locais:

1. **Hero da Home (`src/pages/Index.tsx`, linhas 86-91)** — Remover o botão outline "Falar no WhatsApp", manter apenas "Agendar exame"
2. **Seção Agendamento da Home (`src/pages/Index.tsx`, linhas 354-358)** — Remover o botão outline "Falar no WhatsApp", manter apenas "Agendar exame"
3. **Página Contato (`src/pages/Contato.tsx`, linhas 48-52)** — Remover o botão "Falar no WhatsApp" da seção de destaque

O botão flutuante de WhatsApp (`WhatsAppButton.tsx`) será mantido, pois é um elemento fixo de UX diferente de um CTA explícito.

