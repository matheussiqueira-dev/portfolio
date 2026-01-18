This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Set these in Vercel or your local `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your_value_here
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_value_here
```

## Windows (EPERM/OneDrive) — solucao definitiva

Se voce estiver rodando o projeto dentro do OneDrive, e comum ver erros de
`EPERM` ou `lock` ao apagar a pasta `.next`.

Recomendado (melhor opcao):
- Mova o repositorio para `C:\\dev\\portfolio` (fora do OneDrive).
- Rode `npm install` e `npm run dev` normalmente.

Se nao puder mover agora, use a mitigacao abaixo:
1) Limpar caches antes de build/dev:
```
npm run clean
```

2) Encerrar processos presos nas portas 3000/3001:
```
Get-NetTCPConnection -LocalPort 3000,3001 |
  Select-Object -ExpandProperty OwningProcess |
  Sort-Object -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force }
```

3) Se o lock persistir, feche o OneDrive momentaneamente e tente novamente.

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


## Checklist de validacao (pre-deploy)
- ✅ build ok
- ✅ sitemap ok
- ✅ tags GA + verification ok (via env)
- ✅ PT padrao / EN funcional
- ✅ projects e cases funcionando

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
