# Responsive Fixes

## Breakpoints Aplicados
- Desktop: `>= 1280px`
- Tablet: `768px - 1279px`
- Mobile: `<= 480px`

## Ajustes Implementados

### 1. Container e Grid
- Implementado padrão único:
  - `.layout-container { width: 100%; max-width: var(--layout-max); margin-inline: auto; padding-inline: var(--layout-padding); }`
- `--layout-padding` adaptativo:
  - Mobile: `16px`
  - Tablet: `20px`
  - Desktop: `24px–32px` via `clamp`

### 2. Páginas de Projetos
- `projects-content` migrado para `layout-container page-shell`
- `ProjectList.module.css` refeito com:
  - filtros com `flex-wrap` seguro
  - scroll horizontal controlado apenas em mobile para pills
  - grid com gaps tokenizados
- `ProjectCard.module.css` refeito com:
  - thumbnail com `aspect-ratio` consistente
  - stack tags com quebra segura (`overflow-wrap`/`max-width`)
  - expansão com transição estável sem empurrões bruscos

### 3. Página /system
- `SystemPage` migrada para `layout-container page-shell`
- `DeploymentNodesList` e `ProjectDeployment` reestruturados com:
  - header sem deslocamento lateral por hover
  - cards com grid interno estável
  - links de ação empilhando corretamente em mobile
  - thumbnail responsiva sem extrapolar viewport

### 4. Páginas de Placeholder (app/[locale])
- Removidos paddings inline (`2rem`) em páginas estáticas/dinâmicas de placeholder
- Padrão aplicado:
  - `main.layout-container.page-shell`
  - `section.page-placeholder`

### 5. Estabilidade Visual e Acessibilidade
- `overflow-x: clip` no `body` para prevenção de scroll lateral acidental
- foco global com `:focus-visible` padronizado
- cursor custom limitado a `pointer:fine` (desktop)

## Resultado por dispositivo
- **MacBook/Laptop (1280–1440):** alinhamento de cabeçalho, conteúdo e cards consistente
- **Tablet (768–1024):** grids sem quebra abrupta; ações e filtros preservados
- **Mobile (<= 480):** sem scroll lateral; cards, tags e botões dentro da viewport

## Itens preservados
- Dark/Light mode
- i18n (`pt-BR`/`en`)
- `/projects`
- `/system`
- assinatura global
- botão WhatsApp
- tracking/tags existentes
