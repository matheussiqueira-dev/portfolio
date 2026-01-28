# Lumina Design System (Portfolio)

Minimalismo brutalista elegante, editorial, escuro e tipografico. Este sistema define tokens, tipografia, layout e componentes base para uso no portfolio (Next.js App Router + Tailwind v4).

## 1) Tipografia
- Texto primario: Inter (`--font-inter`)
- Display/Headings: Unbounded (`--font-unbounded`)
- Mono: JetBrains Mono (`--font-jetbrains-mono`)

Escala (fluid, baseada em `clamp()`):
- `--step-5` = Display / H1 hero
- `--step-4` = H1
- `--step-3` = H2
- `--step-2` = H3
- `--step-1` = H4 / Lead
- `--step-0` = Body
- `--step--1` = Small
- `--step--2` = Caption / Eyebrow

Classes de tipografia:
- `.heading-display`, `.heading-1`, `.heading-2`, `.heading-3`, `.heading-4`
- `.text-lead`, `.text-body`, `.text-small`, `.text-caption`
- `.eyebrow` (uppercase apenas em headings/labels)

Regra: uppercase apenas em headings/eyebrows/labels. Corpo de texto sempre em sentence case.

## 2) Paleta de cores (dark-first)
Tokens em `app/globals.css`:
- `--background`: #0a0b0d
- `--foreground`: #f1f0ec
- `--muted`: #a5abb4
- `--surface`: #12141a
- `--surface-muted`: #171a22
- `--border`: #2b2f39
- `--accent`: #bdb4a5 (neutro, sem vibracao)
- `--accent-strong`: #e4dacb

## 3) Layout & Grid
- Largura maxima de conteudo: `--content-max: 72rem`
- Prosa: `--content-prose: 60rem`
- Padding de secao: `--section-padding` (fluid)
- Utilitarios: `.page-section`, `.page-hero`, `.section-inner`, `.section-prose`

Grids padrao:
- Hero: `.grid-hero`
- Projetos: `.grid-projects`
- Texto longo: `.grid-prose`

## 4) Componentes base (estilo Lumina)
- Headings: `.heading-*`
- Botoes: `.btn-primary`, `.btn-outline`, `.btn-ghost`
- Cards: `.card`, `.card-muted` (+ `.hover-lift` opcional)
- Links textuais: `.link-text`
- Separadores: `.separator`
- Chips: `.chip`

## 5) Utilitarios Tailwind
- `.mix-difference` (efeito pontual)
- `.hover-lift` (hover minimalista)
- `.content-auto` (renderizacao inteligente)
- `animate-fade-up`, `animate-fade-in`

Respeito a `prefers-reduced-motion` ja incluido no CSS global.

## 6) Regras de design
Faca:
- Priorize tipografia e espaco negativo
- Use contraste alto para headings e contraste medio para corpo
- Aplique `--accent` com parcimonia (links, destaques pequenos)
- Use cards apenas para separar blocos densos

Evite:
- Cores vibrantes dominantes
- Excessos de blur/gradientes chamativos
- Raio exagerado em elementos (evite pill everywhere)
- Animacao em conteudo longo

Animacao:
- Use apenas para entrada de secoes ou hover sutis
- Em texto longo, mantenha estatico

