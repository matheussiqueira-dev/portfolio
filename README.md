# Portfolio — Matheus Siqueira

## Visão geral
Portfolio bilíngue (PT/EN) focado em Dados, BI e Engenharia de Software. O projeto apresenta cases completos, demos interativas e uma narrativa clara sobre a atuação profissional, com experiência otimizada para performance, SEO e acessibilidade.

## Tecnologias utilizadas
- Next.js 16 (App Router, Server Components)
- React 19
- TypeScript 5
- Tailwind CSS 4
- next-intl (i18n)
- Sentry (monitoramento de erros)
- Vercel Speed Insights
- ESLint e Prettier

## Funcionalidades principais
- Interface totalmente responsiva com tema claro/escuro
- Seção de serviços com processo de entrega
- Projetos com filtros e busca em tempo real
- Modal de detalhes dos projetos
- Dados e conteúdos tipados em arquivos estáticos
- SEO completo com JSON-LD, Open Graph, sitemap e robots
- Analytics e eventos de navegação
- Ações de contato com copiar/colar rápido
- API interna com cache para estrelas do GitHub

## Instalação e uso
### Pré-requisitos
- Node.js 18+
- npm

### Passo a passo
1. Instale as dependências:
```
npm install
```

2. Crie o arquivo `.env.local` (opcional, para analytics):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

3. Execute em desenvolvimento:
```
npm run dev
```

4. Build e produção:
```
npm run build
npm run start
```

## Estrutura do projeto
```
app/                 # Rotas, layouts e APIs
components/          # UI, seções e layout
data/                # Conteúdos estáticos tipados (PT/EN)
lib/                 # Utilitários (SEO, analytics, i18n)
messages/            # Traduções do next-intl
public/              # Mídias, OG image e assets
src/                 # Demos e registry de projetos
```

## Boas práticas adotadas
- Separação clara entre Server e Client Components
- Conteúdo tipado e centralizado em `data/`
- Importações diretas para reduzir bundle
- Cache e paralelização em integrações externas
- Acessibilidade com foco em navegação e leitura

## Possíveis melhorias futuras
- Painel CMS para gestão de conteúdo
- Testes unitários e de integração ampliados
- Pipeline de CI com qualidade e Lighthouse
- Formulário de contato com backend seguro

Autoria: Matheus Siqueira
Website: https://www.matheussiqueira.dev/
