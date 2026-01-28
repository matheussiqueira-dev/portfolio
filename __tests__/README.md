# Testing Guide

Este diretório contém os testes do portfolio. Como o projeto não utiliza um framework de testes configurado ainda, os arquivos `.test.ts` servem como:

1. **Documentação de comportamento esperado**
2. **Guia para testes manuais**
3. **Base para futura implementação com Jest/Vitest**

## 📁 Estrutura

```
__tests__/
├── lib/
│   ├── utils.test.ts      # Testes de utilitários de string e validação
│   ├── i18n.test.ts       # Testes de internacionalização
│   └── media.test.ts      # Testes de detecção de tipo de mídia
└── README.md              # Este arquivo
```

## 🧪 Como Testar Manualmente

### Opção 1: Browser Console

1. Abra o site em desenvolvimento (`npm run dev`)
2. Abra DevTools (F12)
3. Importe e teste as funções:

```javascript
import { slugify, isValidEmail } from '@/lib/utils';

console.log('Test slugify:', slugify('My Project Name'));
// Expected: 'my-project-name'

console.log('Test email:', isValidEmail('user@example.com'));
// Expected: true
```

### Opção 2: Criar Componente de Teste

Crie um arquivo temporário para testar:

```tsx
// app/test-utils/page.tsx
import { slugify, truncate, capitalize } from '@/lib/utils';

export default function TestUtils() {
  const tests = [
    { fn: 'slugify', input: 'My Project', result: slugify('My Project') },
    { fn: 'truncate', input: 'Long text here', result: truncate('Long text here', 10) },
    { fn: 'capitalize', input: 'hello', result: capitalize('hello') },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Utils Tests</h1>
      {tests.map((test, i) => (
        <div key={i} className="mb-2">
          <strong>{test.fn}:</strong> {test.input} → {test.result}
        </div>
      ))}
    </div>
  );
}
```

Acesse `/test-utils` para ver os resultados.

### Opção 3: Node.js REPL

Execute no terminal:

```bash
node --loader tsx
```

Depois importe e teste:

```javascript
import { slugify } from './lib/utils.ts';
console.log(slugify('Test Project')); // 'test-project'
```

## 🚀 Implementação Futura com Jest/Vitest

Para implementar testes automatizados no futuro:

### Instalar Vitest (recomendado para Next.js):

```bash
npm install -D vitest @vitejs/plugin-react
```

### Configurar `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

### Adicionar scripts no `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Executar testes:

```bash
npm run test          # Roda todos os testes
npm run test:ui       # Interface gráfica
npm run test:coverage # Relatório de cobertura
```

## 📝 Padrões de Teste

### Estrutura Básica

```typescript
describe('Nome do Módulo', () => {
  describe('nome da função', () => {
    test('comportamento esperado', () => {
      expect(funcao(input)).toBe(expectedOutput);
    });

    test('caso extremo', () => {
      expect(funcao(edgeCase)).toBe(expectedResult);
    });
  });
});
```

### Boas Práticas

1. **Um conceito por teste** - Cada `test()` deve verificar apenas um comportamento
2. **Nomes descritivos** - Use descrições claras do que está sendo testado
3. **Arrange-Act-Assert** - Organize o teste em 3 partes:
   - Arrange: Preparar dados
   - Act: Executar função
   - Assert: Verificar resultado
4. **Casos extremos** - Teste valores limites, vazios, nulos
5. **Independência** - Testes não devem depender uns dos outros

## 🔍 Checklist de Testes Manuais

### Utils (lib/utils.ts)
- [ ] `slugify` com caracteres especiais
- [ ] `truncate` com textos curtos e longos
- [ ] `capitalize` com strings vazias
- [ ] `isValidEmail` com emails válidos/inválidos
- [ ] `isValidSlug` com slugs válidos/inválidos
- [ ] `getFileExtension` com diferentes extensões

### i18n (lib/i18n.ts)
- [ ] Navegação entre PT/EN funciona
- [ ] URLs são preservadas corretamente
- [ ] Query params e hashes são mantidos
- [ ] `localizeHref` adiciona/remove prefixo corretamente

### Media (lib/media.ts)
- [ ] Detecção de vídeos (.mp4, .webm)
- [ ] Detecção de imagens (.jpg, .png, .svg)
- [ ] Detecção de GIFs
- [ ] `getCoverImage` encontra cover correta
- [ ] Filtros de screenshots funcionam

### Analytics (lib/analytics.ts)
- [ ] Eventos são rastreados no GA
- [ ] Categorias corretas nos eventos
- [ ] Erros são tratados graciosamente

### Hooks (lib/hooks/)
- [ ] `useLocale` detecta locale corretamente
- [ ] `useMediaQuery` responde a mudanças de tela
- [ ] Valores são memoizados corretamente

## 📚 Recursos

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Jest Documentation](https://jestjs.io/)
- [Next.js Testing Guide](https://nextjs.org/docs/testing)
