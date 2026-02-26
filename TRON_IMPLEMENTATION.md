# 🎬 Implementação Tema TRON - Guia Rápido

## ✅ O que foi adicionado

1. **Componente `Reveal.tsx`** - Animação de scroll com Intersection Observer
2. **Variáveis CSS Tron** - Adicionadas ao `:root` do `globals.css`
3. **Classes Tron** - Estilos opcionais sem quebrar o tema atual

---

## 🚀 Uso Imediato

### 1. Componente Reveal (Scroll Animation)

```tsx
import Reveal from "@/components/Reveal"

export default function Page() {
  return (
    <main>
      <Reveal>
        <h2>Seção que aparece com scroll</h2>
      </Reveal>

      <Reveal delay={100}>
        <p>Aparece 100ms depois</p>
      </Reveal>

      <Reveal delay={200}>
        <div className="tron-card">Card revelado em cascata</div>
      </Reveal>
    </main>
  )
}
```

### 2. Classes Tron para Hero

```tsx
<section className="tron-hero">
  <h1 className="tron-hero-title">Matheus Siqueira</h1>
  <div className="tron-divider" />
  <p>Desenvolvedor & Designer</p>
  <button className="tron-btn tron-btn-cta">Ver Projetos</button>
</section>
```

### 3. Cards Tron

```tsx
<div className="tron-card">
  <h3>Título do Projeto</h3>
  <p>Descrição energizada do projeto</p>
</div>
```

### 4. Nav com Efeito Tron

```tsx
<nav className="tron-nav">
  <a href="/about">Sobre</a>
  <a href="/projects">Projetos</a>
  <a href="/contact">Contato</a>
</nav>
```

### 5. Divider de Seção

```tsx
<div className="tron-section-divider" />
```

---

## 🎨 Paleta de Cores Disponível

Use diretamente em CSS com variáveis:

```css
/* Fundo escuro */
var(--tron-bg-dark)     /* #05070D */
var(--tron-bg-deep)     /* #0A0F1F */

/* Cores principais */
var(--tron-blue)        /* #00F0FF - Ciano brilhante */
var(--tron-blue-soft)   /* rgba(0, 240, 255, 0.4) - Transparente */
var(--tron-red)         /* #FF003C - Vermelho (usar com moderação) */
var(--tron-text)        /* #E6F7FF - Texto claro */
```

**Exemplo:**
```css
.custom-element {
  color: var(--tron-blue);
  background: var(--tron-bg-dark);
  border: 1px solid var(--tron-blue);
  box-shadow: 0 0 20px var(--tron-blue);
}
```

---

## ⏱️ Sequência de Animação Ideal

Combine para criar efeito cascata:

1. **150ms** - Título sobe (`.tron-hero-title`)
2. **300ms** - Linha expande (`.tron-divider`)
3. **500ms** - Botão com pulse (`.tron-btn-cta`)
4. **Scroll** - Seções revelam em cascata (`.reveal` com `delay` prop)

```tsx
<Reveal delay={0}>
  <h1 className="tron-hero-title">Título</h1>
</Reveal>

<Reveal delay={150}>
  <div className="tron-divider" />
</Reveal>

<Reveal delay={300}>
  <button className="tron-btn tron-btn-cta">CTA</button>
</Reveal>
```

---

## 🔌 Integração com Estrutura Existente

### Bilíngue (PT/EN)
As classes Tron funcionam em ambas as rotas:
- `/projetos` → Adicione `className="tron-card"`
- `/en/projects` → Mesmo efeito automaticamente

### Com dados estáticos
```tsx
// data/projects.ts ou projects.en.ts já existente
// Use className="tron-card" nos componentes que renderizam

<div className="tron-card">
  <h3>{project.title}</h3>
  <p>{project.description}</p>
</div>
```

### Sem quebrar componentes atuais
- Tema verde/bege padrão continua funcionando
- Use Tron apenas onde quiser
- Misture classes conforme necessário

---

## 💡 Padrões Recomendados

### Para Hero/Landing
```tsx
<section className="tron-hero page-section">
  <div className="section-inner">
    <h1 className="tron-hero-title">Seu Nome</h1>
    <div className="tron-divider" />
    <p>Sua profissão</p>
    <button className="tron-btn tron-btn-cta">Ver Projetos</button>
  </div>
</section>
```

### Para Projetos em Grid
```tsx
<section className="page-section">
  <Reveal>
    <h2>Projetos</h2>
  </Reveal>

  <div className="grid gap-6 mt-8">
    {projects.map((project, i) => (
      <Reveal key={project.id} delay={i * 100}>
        <div className="tron-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Reveal>
    ))}
  </div>
</section>
```

### Para Navegação
```tsx
<nav className="tron-nav flex gap-6">
  <a href={localizeHref("/resume")}>Sobre</a>
  <a href={localizeHref("/projetos")}>Projetos</a>
  <a href={localizeHref("/contrate")}>Contato</a>
</nav>
```

---

## ✨ Efeitos Especiais

### Pulsing Button (CTA)
```html
<button class="tron-btn tron-btn-cta">Clique Aqui</button>
```
→ Pulsação suave de glow infinito

### Hover com Glow
```html
<div class="tron-card">Conteúdo</div>
```
→ Levanta 6px com glow azul ao hover

### Nav Underline
```html
<a href="/" class="tron-nav">Link</a>
```
→ Linha expande da esquerda ao hover

---

## 🛠️ Personalizações Rápidas

Quer mudar cores? Edite no `:root` do `globals.css`:

```css
:root {
  --tron-blue: #00F0FF;      /* Altere aqui */
  --tron-blue-soft: rgba(0, 240, 255, 0.4);
  --tron-bg-dark: #05070D;
  /* ... */
}
```

Quer mudar velocidade das animações?

```css
.tron-btn {
  transition: all 0.18s ease-out; /* Não alterar - é preciso */
}

.tron-card {
  transition: transform 0.22s ease-out; /* Ou ajuste conforme preferir */
}

.tron-btn-cta {
  animation: tronPulseGlow 2.5s infinite ease-in-out; /* Mude 2.5s aqui */
}
```

---

## 🐛 Troubleshooting

**Animações não funcionam?**
- Verifique se `globals.css` foi salvo (ctrl+s)
- Limpe cache: `npm run clean && npm run dev`

**Cores não aparecem?**
- Confirme que não há conflito com classes Tailwind existentes
- Use `!` para force se necessário: `class="!text-tron-blue"`

**Reveal não anima?**
- Importou o componente corretamente? `import Reveal from "@/components/Reveal"`
- Component está sendo usado com children? `<Reveal><p>Conteúdo</p></Reveal>`

**Quer remover Tron?**
- Todas as classes estão isoladas (sem afetar estrutura)
- Basta remover `className="tron-*"` dos componentes
- CSS Tron continua carregado mas inert

---

## 📚 Referência Completa de Classes

| Classe | Uso | Efeito |
|--------|-----|--------|
| `.reveal` | Container para scroll reveal | Fade + translateY |
| `.tron-hero` | Section/container hero | Scanlines sutis |
| `.tron-hero-title` | H1 no hero | Fade up animado |
| `.tron-divider` | Linha decorativa | Expande com glow |
| `.tron-btn` | Botões padrão | Border com hover glow |
| `.tron-btn-cta` | CTA principal | Pulso infinito |
| `.tron-card` | Cards/blocos | Elevação + border glow |
| `.tron-nav` | Navegação (wrapper) | Setup para links |
| `.tron-nav a` | Links de nav | Underline animado |
| `.tron-input:focus` | Inputs/textareas | Border + glow focus |
| `.tron-section-divider` | Separador de seções | Gradiente com fade |

---

## 🎯 Próximos Passos

1. **Teste em componentes existentes** - Adicione em seções não críticas primeiro
2. **Ajuste cores ao seu gosto** - Edite variáveis `:root`
3. **Combine com Reveal** - Use scroll reveals para mais impacto
4. **Manutenha consistência** - Mantenha timing das animações constante
5. **Valide build** - Execute `npm run validate` antes de commit

---

**Criado em:** 26 de Fevereiro de 2026  
**Compatível com:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
