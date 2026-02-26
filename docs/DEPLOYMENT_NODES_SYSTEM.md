# Deployment Nodes System

Sistema de cards expansíveis para exibir projetos como "nós de deployment" com detalhes completos de arquitetura, desafios e métricas.

## 📁 Estrutura

```
system/projects/
├── ProjectDeployment.module.tsx
├── ProjectDeployment.module.css
├── DeploymentNodesList.tsx
├── DeploymentNodesList.module.css

data/
├── deployment.types.ts
├── deployment-nodes.pt.ts
├── deployment-nodes.en.ts

messages/
├── deployment.pt.ts
├── deployment.en.ts

public/thumbnails/
├── pt/
│   ├── invisabilidade-digital.png
│   ├── dashboard-analytics.png
├── en/
│   ├── invisabilidade-digital.png
│   ├── dashboard-analytics.png
```

## 🎯 Componentes

### `ProjectDeployment.module.tsx`
Componente individual expansível com:
- **Header Clicável**: Thumbnail, NodeID, Título, Descrição curta, Status Badge
- **Seção Expandida**: Descrição completa, Grid 2x2 com Stack, Arquitetura, Desafios, Métricas
- **Links**: GitHub, Demo, Live
- **Responsividade**: Full mobile-first

**Props:**
```typescript
{
  project: DeploymentNode
  locale: "pt-BR" | "en"
  dictionary: ProjectDictionary
}
```

### `DeploymentNodesList.tsx`
Container que renderiza todos os nós em grid com:
- Título e subtítulo bilíngues
- Detecção automática de locale
- Loading dos dados certos (PT/EN)
- Grid responsiva

## 🎨 Estrutura de Dados

```typescript
interface DeploymentNode {
  slug: string                    // "invisabilidade-digital"
  nodeId: string                  // "NODE-001"
  title: { pt: string; en: string }
  shortDescription: { pt: string; en: string }
  fullDescription: { pt: string; en: string }
  stack: string[]                 // ["React", "TypeScript", ...]
  architecture: string[]          // Componentes de arquitetura
  challenges: string[]            // Desafios enfrentados
  metrics: {
    performance: string           // "98%"
    lighthouse: string            // "95"
  }
  status: "STABLE" | "ACTIVE" | "ARCHIVED"
  thumbnail: {
    pt: string                     // "/thumbnails/pt/slug.png"
    en: string                     // "/thumbnails/en/slug.png"
  }
  links?: {
    github?: string
    demo?: string
    live?: string
  }
}
```

## 🎨 Cores de Status

- **STABLE**: `#00ff9c` (Verde neon - Produção estável)
- **ACTIVE**: `#ffaa00` (Laranja - Em desenvolvimento)
- **ARCHIVED**: Cinza com `0.5` opacidade (Descontinuado)

## 🚀 Como Usar

### 1. Adicionar um novo projeto

```typescript
// data/deployment-nodes.pt.ts
export const deploymentNodesPt: DeploymentNode[] = [
  {
    slug: "novo-projeto",
    nodeId: "NODE-003",
    title: {
      pt: "Meu Novo Projeto",
      en: "My New Project"
    },
    // ... resto dos campos
  }
]
```

### 2. Adicionar thumbnail

```bash
# Português
public/thumbnails/pt/novo-projeto.png

# Inglês
public/thumbnails/en/novo-projeto.png
```

### 3. Referência nas pages

```typescript
// app/[locale]/projects/page.tsx
import DeploymentNodesList from "@/system/projects/DeploymentNodesList"

export default function ProjectsPage() {
  return (
    <main>
      <DeploymentNodesList />
    </main>
  )
}
```

## 💅 CSS Classes

### Card Container
- `.deploymentCard` - Container principal
- `.deploymentCard.expanded` - Estado expandido com glow

### Header (Sempre visível)
- `.deploymentHeader` - Botão clicável com flexbox
- `.thumbnailWrapper` - Container da imagem (300x180px)
- `.deploymentInfo` - Seção de info (nodeId, title, desc)
- `.nodeId` - ID em uppercase, 12px, spacing 2px
- `.title` - 20px bold
- `.shortDesc` - 14px, max-width 400px
- `.status` - Badge com cores de status

### Expanded (Animado, max-height)
- `.deploymentExpanded` - Container com overflow hidden
- `.deploymentExpanded.open` - Estado aberto
- `.expandedContent` - Padding, flex, gap 24px
- `.gridDetails` - CSS Grid auto-fit 250px minmax
- `.detailBlock` - Cada seção (stack, arch, challenges, metrics)
- `.badgesContainer` - Flex wrap dos badges
- `.badge` - Inline tech tags

## ⏱️ Animações

```css
/* Header */
- Hover: Scale 1.05 na imagem
- Expand Icon: Rotate 180deg da header em aberto

/* Expanded Content */
- Max-height: 0 → 3000px (500ms, cubic-bezier(0.16, 1, 0.3, 1))
- Opacity: 0 → 1 (300ms ease)
- Border glow no card expandido

/* Badges */
- Hover: Transição border color + text color
```

## 📱 Responsividade

### Desktop (>768px)
- Header com thumbnail 300x180px à esquerda
- Info/status à direita
- Grid 2x2 na seção expanded

### Tablet (481px-768px)
- Mesma estrutura mas gap reduzido

### Mobile (<480px)
- Header em coluna
- Thumbnail 100% width, 160px height
- Seção expanded com padding reduzido
- Grid 1 coluna
- Links em coluna

## 🔗 Integração com o Portfolio

Este sistema se integra com:
- **next-intl**: Para detectar locale (`useLocale()`)
- **Next.js Image**: Para otimização automática
- **CSS Modules**: Para scoping de estilos
- **Analytics** (futuro): Para rastrear expandir/contraiu

## 📊 Exemplos de Preenchimento

Ver em `data/deployment-nodes.pt.ts` e `data/deployment-nodes.en.ts`

## 🐛 Troubleshooting

**Imagem não aparece**: Verificar path em `public/thumbnails/{locale}/`
**Texto cortado**: Aumentar max-height em `.deploymentExpanded.open`
**Mobile ruim**: Revisar media queries em `ProjectDeployment.module.css`
**Locale errado**: Confirmar `useLocale()` retorna "pt" ou "en"
