# Portfolio - Matheus Siqueira

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Portfolio profissional bilíngue (PT/EN) com foco em Dados, BI e Desenvolvimento Web. Construído com Next.js 16 (App Router), apresenta estudos de caso detalhados, certificados locais e otimização completa para SEO.

## ✨ Características

- 🌐 **Bilíngue** - Suporte completo para Português e Inglês
- 📱 **Responsivo** - Design mobile-first com breakpoints otimizados
- 🚀 **Performance** - Core Web Vitals otimizados, Score 95+ no Lighthouse
- 🎨 **Design System** - Componentes reutilizáveis com Tailwind CSS v4
- 📊 **Analytics** - Integração com Google Analytics e Vercel Insights
- 🔍 **SEO Otimizado** - JSON-LD, sitemap, robots.txt, Open Graph
- 🛡️ **Error Handling** - Error boundaries e tratamento gracioso de erros
- 📦 **Type-Safe** - TypeScript strict mode com validação completa
- 🧪 **Testável** - Estrutura de testes com guias de implementação

## 📸 Demonstração

Visite: [matheussiqueira.dev](https://www.matheussiqueira.dev)

## 🛠️ Stack Tecnológica

### Core
- **Next.js 16** - App Router com Server Components
- **React 19** - Última versão com melhorias de performance
- **TypeScript 5** - Strict mode habilitado
- **Tailwind CSS 4** - Última versão com melhorias de performance

### Ferramentas
- **Sentry** - Error tracking e monitoring
- **Google Analytics** - Análise de comportamento
- **Vercel Speed Insights** - Métricas de performance em produção
- **ESLint** - Linting com regras customizadas
- **Prettier** - Formatação de código consistente

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                    # Next.js App Router
│   ├── (locale)/          # Rotas em Português (default)
│   ├── en/                # Rotas em Inglês
│   ├── api/               # API routes
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── analytics/         # Tracking components
│   ├── demos/             # Demo components
│   ├── layout/            # Layout components (Header, Nav)
│   ├── projects/          # Project-specific components
│   ├── sections/          # Page sections (Hero, About, etc)
│   ├── seo/               # SEO components (Breadcrumbs, JsonLd)
│   └── ui/                # Reusable UI components
├── data/                  # Conteúdo estático
│   ├── projects.ts        # Projetos (PT)
│   ├── projects.en.ts     # Projetos (EN)
│   ├── certificates.pt.ts # Certificados (PT)
│   └── certificates.en.ts # Certificados (EN)
├── src/                   # Registry e demos interativas
│   ├── components/        # DemoShell e componentes de demo
│   │   ├── demo/           # DemoShell, DemoLauncher, SafeImage
│   │   └── projects/       # Card e grid baseados no registry
│   ├── data/              # Registry único de projetos
│   │   └── projects.ts
│   └── demos/             # Demos inline (client-only)
│       ├── registry.ts
│       ├── chatbot-ia-api/
│       └── library-api-advanced/
├── lib/                   # Utilitários
│   ├── analytics.ts       # Google Analytics helpers
│   ├── constants.ts       # Constantes globais
│   ├── i18n.ts           # Internacionalização
│   ├── media.ts          # Detecção de tipo de mídia
│   ├── seo.ts            # SEO utilities
│   ├── utils.ts          # String/validation utilities
│   └── hooks/            # Custom React hooks
│       ├── useLocale.ts
│       └── useMediaQuery.ts
├── public/               # Arquivos estáticos
│   ├── projects/         # Imagens e vídeos de projetos
│   └── certificates/     # PDFs de certificados
└── __tests__/           # Testes unitários
    └── lib/             # Testes dos utilitários
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/matheussiqueira-dev/portfolio.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure variáveis de ambiente**
Crie um arquivo `.env.local` na raiz:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm run start
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Serve build de produção |
| `npm run lint` | Executa ESLint |
| `npm run lint:fix` | Corrige problemas de linting automaticamente |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação sem alterar arquivos |
| `npm run validate` | Executa lint + format check + build |
| `npm run clean` | Remove `.next`, caches e build artifacts |
| `npm run rebuild` | Limpa e reconstrói o projeto |

## Variaveis de ambiente
Defina em `.env.local` ou no Vercel:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

## 📝 Gerenciamento de Conteúdo

### Projetos

Os projetos são definidos em arquivos TypeScript estáticos:
- `data/projects.ts` (Português)
- `data/projects.en.ts` (Inglês)
- `src/data/projects.ts` (registry único para demos e rotas /projects)

#### Adicionar Novo Projeto

1. **Adicione as mídias** em `public/projects/<slug>/`
   ```
   public/projects/meu-projeto/
   ├── cover.png        # Imagem de capa (obrigatória)
   ├── screenshot1.jpg  # Screenshots adicionais
   ├── screenshot2.jpg
   └── demo.mp4        # Vídeo demo (opcional)
   ```

2. **Adicione o projeto** em `data/projects.ts` e `data/projects.en.ts`:
   ```typescript
   {
     slug: "meu-projeto",
     title: "Meu Projeto",
     tagline: "Breve descrição do projeto",
     stack: ["React", "TypeScript", "Next.js"],
     screenshots: [
       { src: "/projects/meu-projeto/cover.png", alt: "Capa", type: "image" },
       { src: "/projects/meu-projeto/demo.mp4", alt: "Demo", type: "video" },
     ],
     intro: {
       title: "Visão Geral",
       paragraphs: ["Descrição detalhada..."],
     },
     // ... outros campos
   }
   ```

3. **Tipos disponíveis**:
   - `type: "image"` - Para imagens estáticas
   - `type: "video"` - Para vídeos (mp4, webm)

### Demos interativas (DemoShell)

As demos executáveis usam o registry em `src/data/projects.ts` e o `DemoShell`.
Elas só carregam após clique no botão **Executar Demo**, mantendo performance.

#### 1) Adicionar projeto no registry

Edite `src/data/projects.ts` e adicione um item seguindo o formato:

```ts
{
  id: "meu-projeto",
  title: "Meu Projeto",
  shortDescription: "Resumo rápido do projeto.",
  tags: ["React", "Node.js"],
  coverImage: "/images/projects/meu-projeto.webp",
  isInteractive: true,
  links: { repo: "https://github.com/..." },
  demo: { mode: "video", videoUrl: "/projects/meu-projeto/demo.mp4" }
}
```

Use `isInteractive` para habilitar o selo **Interativo** e garantir o botão **Executar Demo**
(obrigatório para os 8 projetos interativos).

#### 2) Demo inline (client-only)

1. Crie a demo em `src/demos/<id>/index.tsx` como Client Component.
2. Registre a importação em `src/demos/registry.ts`.
3. Configure no registry:

```ts
demo: { mode: "inline", inlineId: "meu-projeto" }
```

#### 3) Demo iframe

Para projetos já publicados em um deploy:

```ts
links: { live: "https://..." },
demo: { mode: "iframe", iframeUrl: "https://..." }
```

O iframe é sandboxed por padrão (scripts + same-origin + forms + popups).

#### 4) Demo em vídeo

```ts
demo: { mode: "video", videoUrl: "/projects/meu-projeto/demo.mp4" }
```

Suporta MP4 local e URLs do YouTube (embed).

#### Boas práticas

- Demos inline devem ser leves e rodar apenas no client (lazy-loaded).
- Sempre use `SafeImage` para capas de projeto (fallback automático).
- Capas devem existir em `public/projects/<slug>/` ou `public/images/projects/`.
- O fallback padrão está em `/projects/placeholder.webp`.
- Não carregue demos na Home; só após clique.

### Certificados

Certificados ficam em:
- `data/certificates.pt.ts` (dados em PT)
- `data/certificates.en.ts` (dados em EN)
- `public/certificates/<provider>/` (PDFs)

#### Adicionar Certificado

1. **Adicione o PDF** em `public/certificates/<provider>/arquivo.pdf`

2. **Atualize os dados**:
   ```typescript
   {
     title: "Nome do Certificado",
     provider: "Nome da Instituição",
     date: "2024-01",
     category: "web" | "data" | "other",
     pdfUrl: "/certificates/provider/arquivo.pdf",
     skills: ["Skill 1", "Skill 2"],
   }
   ```

### Textos da Interface

Textos de UI ficam em:
- `data/site.pt.ts` (Português)
- `data/site.en.ts` (Inglês)

Organize por seção (hero, about, projects, etc.).

## 🔧 Desenvolvimento

### Padrões de Código

- **TypeScript Strict Mode** - Todas as regras estritas habilitadas
- **ESLint** - Configuração customizada com regras do Next.js
- **Prettier** - Formatação automática configurada
- **Conventional Commits** - Mensagens de commit semânticas

### Estrutura de Componentes

```tsx
// Componentes cliente devem ter "use client" no topo
"use client";

import { useLocale } from "@/lib/hooks/useLocale";

export default function MyComponent() {
  const { locale, isEn, localize } = useLocale();
  
  // Lógica do componente
}
```

### Hooks Customizados

O projeto inclui hooks reutilizáveis em `lib/hooks/`:

#### `useLocale()`
```tsx
const { locale, isEn, localize } = useLocale();
// locale: 'pt' | 'en'
// isEn: boolean
// localize: (href: string) => string
```

#### `useMediaQuery()`
```tsx
const isMobile = useIsMobile();
const isTablet = useIsTablet();
const isDesktop = useIsDesktop();
const prefersReducedMotion = usePrefersReducedMotion();
```

### Utilitários Disponíveis

#### String & Validação (`lib/utils.ts`)
- `slugify()` - Converte string para slug URL-friendly
- `truncate()` - Trunca texto com ellipsis
- `capitalize()` - Capitaliza primeira letra
- `isValidEmail()` - Valida formato de email
- `isValidSlug()` - Valida formato de slug
- `getFileExtension()` - Extrai extensão de arquivo
- `isExternalUrl()` - Detecta URLs externos

#### Mídia (`lib/media.ts`)
- `getMediaType()` - Detecta tipo de mídia (image/video/gif)
- `isVideo()`, `isImage()`, `isGif()` - Checagem de tipo
- `getCoverImage()` - Encontra imagem de capa de projeto
- `filterScreenshotsByType()` - Filtra screenshots por tipo

#### Analytics (`lib/analytics.ts`)
- `trackEvent()` - Rastreia eventos customizados
- `trackPageView()` - Rastreia visualizações de página
- `trackDownload()` - Rastreia downloads
- `trackOutboundLink()` - Rastreia links externos

### Internacionalização (i18n)

O projeto usa um sistema customizado de i18n baseado em rotas:

**Rotas PT (padrão):**
- `/` - Home
- `/projetos` - Projetos
- `/resume` - Currículo

**Rotas EN:**
- `/en` - Home
- `/en/projects` - Projects
- `/en/resume` ou `/resume/en` - Resume

**Funções úteis:**
```typescript
import { getLocaleFromPath, localizeHref } from '@/lib/i18n';

const locale = getLocaleFromPath(pathname); // 'pt' | 'en'
const localizedHref = localizeHref('/projetos', 'en'); // '/en/projects'
```

## 🔍 SEO & Performance

### Otimizações de SEO

- ✅ **Sitemap XML** - Gerado dinamicamente em `app/sitemap.ts`
- ✅ **Robots.txt** - Configurado em `app/robots.ts`
- ✅ **JSON-LD** - Schema.org markup em todas as páginas
- ✅ **Open Graph** - Metadados sociais completos
- ✅ **Meta Tags** - Títulos, descrições otimizados
- ✅ **Canonical URLs** - URLs canônicas para evitar duplicação
- ✅ **Breadcrumbs** - Navegação estruturada
- ✅ **Alt Text** - Todas as imagens com texto alternativo

### Core Web Vitals

Execute auditorias Lighthouse localmente:

```powershell
# Terminal 1: Build e serve produção
npm run build
npm run start -- -p 3002

# Terminal 2: Execute Lighthouse
npx lighthouse http://localhost:3002/ --preset=mobile --only-categories=performance --output=json --output-path=REPORT.cwv.mobile.json
npx lighthouse http://localhost:3002/ --preset=desktop --only-categories=performance --output=json --output-path=REPORT.cwv.desktop.json
```

**Métricas Alvo:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Score: 90+

### Otimizações Implementadas

- ⚡ Next.js Image optimization
- ⚡ Server Components para conteúdo estático
- ⚡ Dynamic imports para modais/components pesados
- ⚡ Lazy loading de imagens e vídeos
- ⚡ Minificação automática de CSS/JS
- ⚡ Compressão de imagens (WebP, AVIF)
- ⚡ Edge caching no Vercel

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte o repositório** no [Vercel Dashboard](https://vercel.com)
2. **Configure as variáveis de ambiente**:
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GSC_VERIFICATION`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
3. **Deploy automático** - Push para `main` dispara deploy

### Outros Provedores

**Requisitos:**
- Node.js 18+
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

**Variáveis de ambiente necessárias:**
- Todas as `NEXT_PUBLIC_*` listadas acima

## 🧪 Testes

O projeto inclui estrutura de testes em `__tests__/`. Para mais detalhes, veja [`__tests__/README.md`](__tests__/README.md).

### Testes Disponíveis

- ✅ `lib/utils.test.ts` - Utilitários de string e validação
- ✅ `lib/i18n.test.ts` - Internacionalização
- ✅ `lib/media.test.ts` - Detecção de tipo de mídia

### Implementação Futura

Para adicionar testes automatizados:

```bash
# Instalar Vitest
npm install -D vitest @vitejs/plugin-react

# Executar testes
npm run test
```

Veja o guia completo em [`__tests__/README.md`](__tests__/README.md).

## ⚠️ Troubleshooting

### Windows + OneDrive

Se o projeto está no OneDrive, você pode encontrar erros EPERM ao deletar `.next`:

**Solução permanente:**
```bash
# Mova para fora do OneDrive
Move-Item "OneDrive\...\portfolio" "C:\dev\portfolio"
```

**Solução temporária:**
```bash
npm run clean
```

### Porta em Uso

Se as portas 3000/3001 estiverem em uso:

```powershell
# Encerrar processos nas portas
Get-NetTCPConnection -LocalPort 3000,3001 |
  Select-Object -ExpandProperty OwningProcess |
  Sort-Object -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force }
```

### Erro de Build

```bash
# Limpar e rebuildar
npm run rebuild

# Se persistir, reinstale dependências
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json -Force
npm install
npm run build
```

### TypeScript Errors

```bash
# Verificar configuração
npx tsc --noEmit

# Verificar versão
npx tsc --version
```

## 📚 Recursos e Referências

### Documentação Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Guias do Projeto
- [Copilot Instructions](.github/copilot-instructions.md) - Guia completo do projeto
- [Testing Guide](__tests__/README.md) - Como testar o código
- [Screenshots Guide](docs/SCREENSHOTS.md) - Gerenciamento de mídia

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estas diretrizes:

1. **Fork** o repositório
2. **Crie uma branch** (`git checkout -b feature/nova-funcionalidade`)
3. **Siga os padrões** de código (ESLint + Prettier)
4. **Escreva testes** para novas funcionalidades
5. **Commit** com mensagens semânticas (`feat:`, `fix:`, `docs:`, etc)
6. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
7. **Abra um Pull Request**

### Conventional Commits

```
feat: adiciona nova funcionalidade
fix: corrige bug X
docs: atualiza documentação
style: formatação de código
refactor: refatora função Y
test: adiciona testes
chore: atualiza dependências
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Matheus Siqueira**

- Website: [matheussiqueira.dev](https://www.matheussiqueira.dev)
- LinkedIn: [@matheussiqueira-dev](https://linkedin.com/in/matheussiqueira-dev)
- GitHub: [@matheussiqueira-dev](https://github.com/matheussiqueira-dev)

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**
