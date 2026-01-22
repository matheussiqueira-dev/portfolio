# Portfolio - Matheus Siqueira

Portfolio profissional com foco em Dados, BI e Desenvolvimento Web.
Projeto em Next.js (App Router) com conteudo bilingue (PT/EN), projetos com estudos de caso,
certificados locais e paginas otimizadas para SEO.

## Visao geral
- Home com CTA para projetos, curriculo e contato.
- Paginas de projetos com cases e galeria de midia.
- Certificados com PDFs locais.
- Curriculo completo em /resume e /en/resume.
- SEO com JSON-LD, sitemap.xml e robots.txt.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel Speed Insights

## Estrutura do projeto
- `app/` rotas e paginas (App Router)
- `components/` UI e secao de conteudo
- `data/` conteudo estatico (projetos, certificados, textos)
- `lib/` utilitarios (i18n, analytics, SEO)
- `public/` imagens, PDFs e midias

## Como rodar
Instalar dependencias:

```bash
npm install
```

Desenvolvimento:

```bash
npm run dev
```

Build de producao:

```bash
npm run build
```

Servidor de producao:

```bash
npm run start
```

## Scripts
- `npm run dev` inicia o dev server
- `npm run build` build de producao
- `npm run start` serve o build
- `npm run lint` lint
- `npm run format` formatacao
- `npm run validate` lint + format + build
- `npm run clean` limpa `.next` e caches

## Variaveis de ambiente
Defina em `.env.local` ou no Vercel:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

## Conteudo

### Projetos
Os dados ficam em:
- `data/projects.ts` (PT)
- `data/projects.en.ts` (EN)

Midias devem ficar em `public/projects/<slug>/`.

Para adicionar um video:
1. Coloque o arquivo em `public/projects/<slug>/demo.mp4`.
2. No objeto do projeto, adicione um item em `screenshots`:

```ts
{
  src: "/projects/<slug>/demo.mp4",
  alt: "Demo do projeto <slug>",
  type: "video",
}
```

### Certificados
Dados:
- `data/certificates.pt.ts`
- `data/certificates.en.ts`

PDFs:
- `public/certificates/<provider>/arquivo.pdf`

A pagina `/academico` tambem lista certificados a partir do filesystem.

### SEO
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- JSON-LD: paginas em `app/*/page.tsx`
- Base URL: `lib/seo.ts`

## Deploy
Deploy recomendado no Vercel, apontando para a branch `main`.
O build usa `npm run build`.

## Windows (EPERM/OneDrive)
Se o projeto estiver dentro do OneDrive, pode haver erro de lock ao apagar `.next`.

Recomendado:
- Mova o repo para `C:\\dev\\portfolio` (fora do OneDrive).

Mitigacao rapida:

```bash
npm run clean
```

Encerrar processos presos nas portas 3000/3001:

```powershell
Get-NetTCPConnection -LocalPort 3000,3001 |
  Select-Object -ExpandProperty OwningProcess |
  Sort-Object -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force }
```

## Lighthouse (Core Web Vitals)
Rodar localmente no PowerShell:

```powershell
npm run build; npm run start -- -p 3002
```

Em outro terminal:

```powershell
npx lighthouse http://localhost:3002/ --preset=mobile --only-categories=performance --output=json --output-path=REPORT.cwv.mobile.json --quiet
npx lighthouse http://localhost:3002/ --preset=desktop --only-categories=performance --output=json --output-path=REPORT.cwv.desktop.json --quiet
```
