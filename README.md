# Portfolio — Matheus Siqueira

## Visão geral
Este projeto é um portfolio bilíngue (PT/EN) focado em dados, BI e engenharia de software. Ele apresenta cases, serviços, stack técnica e um fluxo de contato orientado a conversão, com ênfase em clareza de mensagem, credibilidade e experiência do usuário.

## Objetivos do produto
- Comunicar posicionamento profissional e diferenciais competitivos.
- Apresentar serviços, resultados e competência técnica de forma rápida.
- Gerar oportunidades por meio de CTAs, formulário de briefing e contato direto.
- Entregar uma experiência fluida, acessível e responsiva em múltiplos dispositivos.

## Arquitetura e decisões técnicas
- **Next.js App Router** para rotas modernas, SEO nativo e performance.
- **Conteúdo tipado** em `data/` para separar apresentação e copy, facilitando manutenção.
- **Design system por tokens** com CSS variables para consistência visual e theming.
- **Componentização por seções** para manter legibilidade e escalabilidade do layout.
- **Analytics e SEO centralizados** em `lib/` e componentes específicos para rastreamento.

## Stack e tecnologias
- Next.js 16 (App Router, Server Components, Route Handlers)
- React 19
- TypeScript 5
- Tailwind CSS 4 + CSS variables
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

## Experiência do usuário e design
- Hierarquia visual clara (títulos, métricas, resultados e CTAs)
- Design consistente com tokens de cor, tipografia e espaçamentos
- Componentes reutilizáveis para cards, botões e seções
- Acessibilidade com foco visível, contraste e suporte a redução de movimento
- Conteúdo responsivo e adaptado para telas menores

## Qualidade, performance e segurança
- SEO completo com JSON-LD, Open Graph, sitemap e robots
- Lazy loading em componentes e uso de `useDeferredValue` quando necessário
- Headers de segurança configurados no Next.js
- Monitoramento de erros com Sentry

## Instalação e execução
### Pré-requisitos
- Node.js 18+
- npm

### Passo a passo
1. Instale as dependências:
```bash
npm install
```

2. (Opcional) Configure `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

3. Execute em desenvolvimento:
```bash
npm run dev
```

4. Build e produção:
```bash
npm run build
npm run start
```

5. Validação completa:
```bash
npm run validate
```

## Boas práticas adotadas
- Separação clara entre Server e Client Components
- Conteúdo tipado e centralizado em `data/`
- Design system com tokens e componentes reutilizáveis
- Layouts responsivos com acessibilidade nativa
- Observabilidade básica via Sentry

## Possíveis melhorias futuras
- CMS/headless para gestão dinâmica de conteúdo
- Backend seguro para coleta de leads e automação do pipeline
- Testes de integração e visual regression
- Dashboard administrativo para métricas de engajamento

Autoria: Matheus Siqueira  
Website: https://www.matheussiqueira.dev/
