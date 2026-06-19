---
name: frontend-design
description: Use when asked to create, modify, or improve UI components, sections, animations, or visual design in the portfolio project.
---

## Contexto do Projeto

Portfólio de Pedro França — Data Analyst & RevOps. Single-page application com tema escuro, estética data-driven.

**Stack:**
- Next.js 16 com App Router
- React 19
- TypeScript (strict)
- Framer Motion para animações
- Lucide React para ícones
- CSS global em `src/app/globals.css` (sem Tailwind, sem CSS Modules)

---

## Design System

### Paleta de Cores (variáveis CSS)
```css
--bg-primary: #0a0a1a        /* fundo principal */
--bg-secondary: #0f0f2e      /* fundo alternativo */
--bg-card: rgba(15,15,46,0.6)
--bg-card-hover: rgba(25,25,60,0.8)
--bg-glass: rgba(15,15,46,0.4)

--text-primary: #e8e8f0
--text-secondary: #9d9db8
--text-muted: #6b6b8a

--accent-blue: #6366f1
--accent-purple: #8b5cf6
--accent-cyan: #22d3ee
--accent-pink: #ec4899
--accent-green: #10b981

--gradient-primary: linear-gradient(135deg, #6366f1, #8b5cf6)
--gradient-secondary: linear-gradient(135deg, #8b5cf6, #ec4899)
--gradient-cyan: linear-gradient(135deg, #22d3ee, #6366f1)
--gradient-glow: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))

--border-color: rgba(99,102,241,0.15)
--border-hover: rgba(99,102,241,0.4)
```

### Tipografia
```css
--font-sans: 'Inter', -apple-system, sans-serif   /* corpo */
--font-mono: 'JetBrains Mono', monospace          /* labels, código, badges */
```

### Espaçamento e Layout
```css
--section-padding: 100px 0
--container-width: 1200px
--container-padding: 0 24px
--radius-sm: 8px | --radius-md: 12px | --radius-lg: 16px | --radius-xl: 24px | --radius-full: 9999px
```

### Sombras e Efeitos
```css
--shadow-card: 0 4px 30px rgba(0,0,0,0.3)
--shadow-glow: 0 0 40px rgba(99,102,241,0.15)
--shadow-glow-strong: 0 0 60px rgba(99,102,241,0.3)
```

### Transições
```css
--transition-fast: 0.2s cubic-bezier(0.4,0,0.2,1)
--transition-medium: 0.3s cubic-bezier(0.4,0,0.2,1)
--transition-slow: 0.5s cubic-bezier(0.4,0,0.2,1)
```

---

## Classes Utilitárias Disponíveis

| Classe | Uso |
|---|---|
| `.container` | Wrapper com max-width e padding |
| `.section` | Padding vertical padrão de seção |
| `.section-header` | Cabeçalho centralizado com margin-bottom |
| `.section-label` | Badge superior monospace com borda cyan |
| `.section-title` | Título h2 da seção |
| `.section-subtitle` | Subtítulo muted centralizado |
| `.gradient-text` | Texto com gradiente blue→purple |
| `.gradient-text-cyan` | Texto com gradiente cyan→blue |
| `.card` | Card glass com hover elevação |
| `.glass` | Efeito glassmorphism |
| `.btn` | Base de botão |
| `.btn-primary` | Botão gradiente com glow |
| `.btn-secondary` | Botão outline glass |

---

## Padrões de Componente

### Estrutura de Seção
```tsx
"use client";

import { motion } from "framer-motion";
import { IconName } from "lucide-react";

export default function SectionName() {
  return (
    <section id="section-id" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <IconName size={14} />
            Label em maiúsculas
          </div>
          <h2 className="section-title">
            Título com{" "}
            <span className="gradient-text">Destaque</span>
          </h2>
          <p className="section-subtitle">Descrição opcional</p>
        </motion.div>

        {/* Conteúdo da seção */}
      </div>
    </section>
  );
}
```

### Animações com Framer Motion
```tsx
// Entrada de item com delay escalonado
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>

// Hover com escala
<motion.div whileHover={{ scale: 1.02, y: -4 }}>

// Loop infinito (ex: scroll indicator)
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

### Card Padrão
```tsx
<motion.div
  className="card"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ y: -4 }}
>
  {/* conteúdo */}
</motion.div>
```

### Section Label (badge)
```tsx
<div className="section-label">
  <Icon size={14} />
  TEXTO EM CAPS
</div>
```

---

## Regras de Implementação

1. **CSS global apenas** — adicionar estilos em `src/app/globals.css`. Nunca criar arquivos `.module.css` para componentes.
2. **Variáveis CSS sempre** — usar `var(--nome)` para cores, espaçamentos e transições. Nunca hardcodar valores do design system.
3. **"use client"** — obrigatório em qualquer componente que use hooks, eventos ou Framer Motion.
4. **Framer Motion com `whileInView`** — usar `viewport={{ once: true }}` para não reanimar ao fazer scroll para cima.
5. **Ícones do Lucide** — verificar disponibilidade no pacote `lucide-react` antes de usar.
6. **Responsivo** — toda seção deve ter breakpoints para `max-width: 768px` e `max-width: 480px`.
7. **Sem inline styles desnecessários** — preferir classes CSS. Usar `style={{}}` apenas para valores dinâmicos.
8. **TypeScript** — tipar props de componentes. Usar interfaces para objetos de dados.

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── globals.css       ← Design system + estilos globais
│   ├── layout.tsx        ← Layout raiz com metadata
│   └── page.tsx          ← Composição das seções
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Dashboards.tsx
│       └── Contact.tsx
└── data/
    ├── skills.ts         ← Dados das habilidades
    └── dashboards.ts     ← Dados dos dashboards
```

Novos componentes de seção vão em `src/components/sections/`.
Dados estáticos vão em `src/data/` como arrays TypeScript exportados.

---

## Ao criar ou modificar componentes

1. Leia o arquivo do componente antes de editar
2. Leia `globals.css` se precisar adicionar classes novas
3. Siga os padrões de animação já estabelecidos (delays escalonados, `whileInView`, `once: true`)
4. Mantenha consistência visual com as seções existentes
5. Adicione estilos responsivos ao final do bloco CSS correspondente em `globals.css`
6. Ao criar nova seção, registre no `page.tsx`

$ARGUMENTS
