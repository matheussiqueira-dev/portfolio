# Portfolio — Matheus Siqueira

## Visão geral
Portfolio bilíngue (PT/EN) focado em Dados, BI e Engenharia de Software. O frontend foi redesenhado para reforçar hierarquia visual, performance e conversão, com seções orientadas a credibilidade, disponibilidade e captação de briefing rápido.

## Stack e tecnologias
- Next.js 16 (App Router, Server Components, Route Handlers)
- React 19
- TypeScript 5
- Tailwind CSS 4 + design tokens em CSS variables
- next-intl (i18n)
- Sentry (monitoramento de erros)
- Vercel Speed Insights
- ESLint e Prettier

## Estrutura do projeto
- `app/` Rotas, layouts, handlers de API e páginas
- `components/` Componentes de UI, seções e layout
- `data/` Conteúdo estático tipado (PT/EN)
- `lib/` Utilitários (SEO, analytics, i18n)
- `messages/` Traduções do next-intl
- `public/` Assets, mídias e OG images
- `src/` Demos e registry de projetos

## Setup e build
### Pré-requisitos
- Node.js 18+
- npm

### Passo a passo
1. Instale as dependências
```bash
npm install
```

2. (Opcional) Configure `.env.local`
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

3. Execute em desenvolvimento
```bash
npm run dev
```

4. Build e produção
```bash
npm run build
npm run start
```

5. Validação completa
```bash
npm run validate
```

## Boas práticas adotadas
- Separação clara entre Server e Client Components
- Conteúdo tipado e centralizado em `data/`
- Design system com tokens e componentes reutilizáveis
- Otimizações de renderização (lazy modal, busca com `useDeferredValue`)
- SEO completo com JSON-LD, Open Graph, sitemap e robots
- Acessibilidade com skip-link, foco visível e suporte a redução de movimento
- Headers de segurança configurados no Next.js

## Melhorias futuras
- CMS/headless para gestão de conteúdo
- Formulário de contato com backend seguro e storage de leads
- Testes de integração e visual regression
- Documentação expandida do design system

Autoria: Matheus Siqueira
Website: https://www.matheussiqueira.dev/
