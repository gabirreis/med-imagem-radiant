O logo já aponta para `/`, mas se o usuário já estiver na home (ou navegar via `Link` sem rolagem), a página não vai para o topo automaticamente.

**Correção em `src/components/Header.tsx`**: adicionar `onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}` no `<Link to="/">` do logo. Isso garante que qualquer clique no logo leve à home no topo, com scroll suave.