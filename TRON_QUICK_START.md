# ⚡ TRON QUICK START - COMEÇAR EM 2 MINUTOS

## ✅ Tudo já está instalado e funcionando!

Não precisa fazer mais nada. Apenas acesse:

```bash
npm run dev
```

→ Abra em `http://localhost:3000`

---

## 🎬 Veja os efeitos acontecendo

### 1. **Cursor Sci-Fi** 🖱
- Mova o mouse pela página
- Veja um círculo azul neon seguindo
- Passe sobre botões/links
- Observe o glow aumentar

### 2. **Boot Screen** ⚡
- Atualize a página (F5)
- Veja "INICIALIZANDO SISTEMA"
- Barra azul preenchendo (1.8s)
- Desaparece quando página carrega

### 3. **Page Transitions** 🎬
- Clique em um link de navegação
- Uma onda azul cruza a tela
- Página muda com transição energética

### 4. **Scroll Reveals** 📜
- Abra a página demo: `components/TronDemoSection.tsx`
- Role para baixo
- Elementos aparecem em cascata com fade

---

## 💡 USAR EM SEUS COMPONENTES

### Adicionar Reveal em qualquer lugar

```tsx
import Reveal from "@/components/Reveal"

export default function MyComponent() {
  return (
    <section>
      <Reveal>
        <h2>Seção 1</h2>
      </Reveal>
      
      <Reveal delay={100}>
        <p>Seção 2 aparece 100ms depois</p>
      </Reveal>
      
      <Reveal delay={200}>
        <div>Seção 3 aparece 200ms depois</div>
      </Reveal>
    </section>
  )
}
```

### Usar Classes Tron

```tsx
// Botão com efeito
<button className="tron-btn tron-btn-cta">
  Clique Aqui
</button>

// Card com efeito
<div className="tron-card">
  <h3>Título</h3>
  <p>Descrição</p>
</div>

// Navegação
<nav className="tron-nav">
  <a href="/about">Sobre</a>
  <a href="/projects">Projetos</a>
</nav>

// Divider entre seções
<div className="tron-section-divider" />
```

### Mudar Cores

```css
/* Em app/globals.css */
:root {
  --tron-blue: #00F0FF;  /* Mude para sua cor */
  --tron-bg-dark: #05070D;
}
```

---

## 📖 ARQUIVOS IMPORTANTES

| Arquivo | O que fazer |
|---------|------------|
| `components/Cursor.tsx` | Ler para entender algoritmo |
| `components/PageTransition.tsx` | Ler para entender transitions |
| `components/Reveal.tsx` | Usar em componentes |
| `app/layout.tsx` | Já tem Cursor + PageTransition |
| `app/loading.tsx` | Boot screen (já customizado) |
| `app/globals.css` | Todas as variáveis Tron |

---

## 🎯 PRÓXIMAS IDEIAS

1. **Adicione Reveal em seções importantes:**
   ```tsx
   <Reveal delay={i * 100}>
     <ProjectCard key={i} data={project} />
   </Reveal>
   ```

2. **Customize cores conforme seu design:**
   - Abra `app/globals.css`
   - Procure por `:root { --tron-blue: ...`
   - Altere para suas cores

3. **Combine com componentes existentes:**
   - Projects
   - Resume
   - Certificates
   - Hero

4. **Teste em mobile:**
   - Cursor funciona (toque no lugar)
   - Boot screen aparece
   - Transitions suaves

---

## ❓ DÚVIDAS COMUNS

**P: Cursor não aparece?**  
R: Mova o mouse. Ele começa invisível até primeira movimentação.

**P: Como remover?**  
R: Retire `<Cursor />` de `app/layout.tsx`

**P: Boot screen muito lento/rápido?**  
R: Edite `1.8s` em `.boot-progress` no `app/globals.css`

**P: Transition muito rápida/lenta?**  
R: Edite `0.6s` em `.page-overlay`  animation no `app/globals.css`

**P: Quero uma cor diferente?**  
R: Altere `--tron-blue` em `:root`

---

## 🚀 DEPLOY

Para colocar em produção:

```bash
# 1. Validate
npm run validate

# 2. Build
npm run build

# 3. Start
npm run start

# 4. Deploy
# (Vercel automático ao fazer push no GitHub)
```

---

## 📚 LEIA MAIS

Para documentação completa, veja:
- `TRON_IMPLEMENTATION.md` - Estilos & Reveal
- `TRON_CINEMATIC_SYSTEM.md` - Cursor, Boot, Transitions
- `TRON_FINAL_SUMMARY.md` - Resumo técnico completo

---

**Divirta-se com seus novos efeitos! 🎉**

Qualquer dúvida, você sabe o que fazer → ler a documentação! 📖
