# Layout Audit

## Escopo
- Rotas: `/`, `/projects`, `/system`, páginas estáticas e dinâmicas em `app/[locale]/*`
- Componentes globais: header, footer, mobile menu, cards de projeto, cards de deployment
- Modos: dark (legacy) e light (ares)

## Problemas Encontrados e Correções

| Problema | Local | Impacto visual | Correção aplicada |
|---|---|---|---|
| Containers com larguras e paddings divergentes por página | `app/[locale]/*`, `system/projects/*.module.css`, `app/globals.css` | Cabeçalhos e conteúdo desalinhados horizontalmente entre rotas | Tokenização de layout com `--layout-max`, `--layout-padding` e classe `.layout-container` aplicada globalmente |
| Páginas com `style={{ padding: "2rem" }}` sem padrão responsivo | Várias páginas "em construção" (`resume`, `hire`, `academic`, etc.) | Quebra de consistência vertical e lateral em mobile/tablet | Substituição por `layout-container page-shell` + bloco `.page-placeholder` |
| Escala de espaçamento inconsistente | `globals.css`, módulos de `projects` e `system` | Gaps e margens irregulares entre componentes | Criação de escala (`--space-xs` a `--space-4xl`) e normalização nos módulos principais |
| Duplicidade de tokens de tema em arquivos diferentes | `app/globals.css` e `app/refined-theme.css` | Inconsistência de cor entre telas e risco de override inesperado | Remoção dos blocos duplicados em `refined-theme.css` e centralização dos tokens em `globals.css` |
| Tokens usados sem definição (`--text-primary`, `--bg-secondary`, etc.) | `system/projects/*.module.css` | Cores quebradas/fallbacks não intencionais | Definição oficial de tokens base (`--bg-primary`, `--bg-secondary`, `--bg-layer`, `--text-primary`, `--text-secondary`, `--border-subtle`, `--accent`, `--accent-soft`, `--shadow`) |
| Hover com deslocamento de layout em cards | `ProjectDeployment.module.css`, filtros e botões | Sensação de “saltos” visuais | Troca para `transform` e transições de cor/sombra sem alterar fluxo do layout |
| Hierarquia tipográfica comprimida em alguns blocos | `globals.css` e módulos de cards | Leitura cansativa e pouca distinção entre níveis | Ajuste de `line-height` global (headings 1.2, textos 1.6-1.7) |
| /system sem heading principal semântico | `DeploymentNodesList.tsx` | Hierarquia de página incompleta | Título principal alterado para `h1` |
| Falta de padrão de foco entre componentes | Global | Navegação por teclado inconsistente visualmente | Padronização com `:focus-visible` global e reforço em botões/links críticos |
| Cursor custom afetando todos os dispositivos | `globals.css` | Experiência irregular em touch devices | Restrição do cursor custom para `hover:fine` e ocultação em `pointer:coarse` |

## Resultado
- Grid horizontal unificado entre páginas
- Espaçamento e ritmo vertical consistentes
- Sistema de cores centralizado e previsível
- Melhor legibilidade e estabilidade visual em interações
