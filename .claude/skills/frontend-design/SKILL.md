---
name: frontend-design
description: Use when asked to create, modify, or improve UI components, sections, animations, or visual design in the portfolio project.
---

## Contexto do Projeto

Portfólio de Pedro França — **Business Intelligence · RevOps · Martech** na StartSe. Single-page application com estética **editorial / paper-warm** (tema claro, fundo creme). Reformulado do zero em 2026 a partir de um design pronto.

**Stack:**
- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Framer Motion (animações) — com `<MotionConfig reducedMotion="user">` em `src/app/providers.tsx`
- **SEM Tailwind, SEM bibliotecas de ícones, SEM CSS Modules.** Dependências: só `next`, `react`, `react-dom`, `framer-motion`.
- Fontes via `next/font/google` (em `layout.tsx`): **Bricolage Grotesque** (display), **Archivo** (corpo), **JetBrains Mono** (labels).
- Imagens via `next/image`. Ícones = glifos de texto (ex.: `↗`) ou quadradinhos coloridos (`.skill-dot`), nunca biblioteca.
- Estilo = **classes CSS** em `src/app/globals.css`. Inline `style` só para o acento dinâmico `--acc`.

---

## Design System (variáveis CSS em `globals.css`)

### Cores
```css
/* Superfícies */
--paper: #f4f1ea       /* fundo principal (creme) */
--paper-2: #fff        /* cards claros */
--line: #e3ddd0        /* bordas/divisórias */

/* Tinta */
--ink: #1f1d1a         /* texto principal */
--ink-soft: #3a352e    /* texto de corpo */
--muted: #7a7164       /* texto secundário */
--muted-2: #9b948a

/* Seção escura (Projetos) */
--dark: #1f1d1a        --dark-card: #26231e     --dark-line: #34302a
--dark-line-2: #3a352e --dark-text: #f4f1ea     --dark-text-soft: #c9c3b9
--dark-muted: #8f897f

/* Acentos — paleta Tri-cor (FIXA) */
--a1: #c2603e          /* terracota */
--a2: #2f8f86          /* teal */
--a3: #6b5bd1          /* roxo */
--acc: var(--a1)       /* acento corrente — sobrescrito por elemento (ver abaixo) */
```

### Tipografia
```css
--font-display: var(--font-bricolage), sans-serif   /* títulos h1/h2/h3, números de stat */
--font-body:    var(--font-archivo), sans-serif      /* corpo, links de nav */
--font-mono:    var(--font-jetbrains), monospace     /* eyebrows, tags, labels */
```
Títulos sempre `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1`. Use `clamp()` para tamanhos responsivos (já aplicado em `.hero-title`, `h2` das seções).

### Forma e layout
```css
--rad: 12px   --rad-sm: 8px   --rad-pill: 999px
--maxw: 1120px   --pad-x: 32px (20px no mobile)   --nav-h: 84px
```

### O padrão de acento `--acc`
Cada card/seção define seu acento setando `--acc` inline; o CSS lê `var(--acc)`:
```tsx
<div className="domain-tile" style={{ ["--acc" as string]: "var(--a1)" }}>
```
Classes que consomem `--acc`: `.eyebrow`, `.domain-tile`, `.project-bar`, `.stat-num.accent`, `.skill-dot`. O cast `["--acc" as string]` é obrigatório (passa no tsc; não use `as React.CSSProperties`).

---

## Classes utilitárias principais

| Classe | Uso |
|---|---|
| `.container` | Wrapper `max-width:1120px` + padding horizontal |
| `.eyebrow` | Label mono em CAPS com `letter-spacing` (cor = `--acc`). Convenção: prefixo `/ Seção` |
| `.en` | Subtítulo bilíngue em inglês (cor muted) — o site é PT com linha EN abaixo |

Cada seção tem sua **família de classes** própria (não há `.card`/`.btn-primary` genéricos do design antigo). Famílias existentes em `globals.css`: `nav-*`, `hero-* / domain-* / intro-* / tag-*`, `about-* / quote`, `projects-* / project-* / stat-* / tag(s)`, `skills-* / skill-*`, `exp-*`, `contact-* / btn-light / btn-ghost / footer-*`. **Leia `globals.css` antes** para reutilizar ou estender.

---

## Padrões de Componente

### Seção (server component por padrão)
Seções estáticas NÃO levam `"use client"`. Use o wrapper `Reveal` para a animação de entrada:
```tsx
import Reveal from "@/components/Reveal";

export default function Secao() {
  return (
    <section id="secao" className="secao">
      <Reveal>
        <div className="eyebrow" style={{ ["--acc" as string]: "var(--a2)" }}>
          / Seção
        </div>
        <h2>Título da seção</h2>
        <p className="en">English subtitle.</p>
      </Reveal>
      {/* conteúdo */}
    </section>
  );
}
```

### Animação de entrada — sempre via `Reveal`
`src/components/Reveal.tsx` encapsula o fade-up (`whileInView` + `once:true`, easing suave, respeita reduced-motion). Para listas, escalone com `delay`:
```tsx
{items.map((item, i) => (
  <Reveal key={item.id} delay={(i % 2) * 0.08}>
    <article className="...">{/* ... */}</article>
  </Reveal>
))}
```
Não recrie `motion.div` com `initial/whileInView` à mão — use `Reveal`. Só importe `framer-motion` direto para casos especiais (ex.: hover/loop), e nesse caso o arquivo precisa de `"use client"`.

### Acento por item (data-driven)
Dados em `src/data/` carregam o acento como string de variável (`"--a1" | "--a2" | "--a3" | "--ink"`):
```tsx
<article className="project-card" style={{ ["--acc" as string]: `var(${p.accent})` }}>
```

---

## Regras de Implementação

1. **Classes CSS em `globals.css`** — nunca `.module.css`. Inline `style` só para `--acc` dinâmico.
2. **Variáveis CSS sempre** (`var(--paper)`, `var(--a1)`, `var(--rad)`…). Nunca hardcodar cor/raio/espaçamento.
3. **`"use client"` só quando necessário** — hooks, eventos ou `framer-motion` direto. Seções estáticas ficam server components (usam `Reveal`, que já é client).
4. **Animação via `Reveal`** (`whileInView`, `once:true`). `<MotionConfig reducedMotion="user">` já cuida de acessibilidade — não duplicar.
5. **Imagens com `next/image`** (`fill` + `sizes`), nunca `<img>`. Assets em `public/assets/`.
6. **Ícones = glifos/CSS**, não biblioteca (não há lucide/iconscout instalados).
7. **Responsivo** — breakpoints `max-width: 768px` e `480px` no fim de `globals.css`. Padrão mobile: grids viram 1 coluna; nav colapsa em menu hambúrguer.
8. **Bilíngue** — títulos/subtítulos em PT com linha EN (`.en`) logo abaixo, quando fizer sentido.
9. **TypeScript** — tipar props e dados com `interface`.

---

## Estrutura de Arquivos

```
src/
├── app/
│   ├── globals.css          ← Design system + todas as classes
│   ├── layout.tsx           ← Fontes (next/font), metadata, theme-color
│   ├── providers.tsx        ← <MotionConfig reducedMotion="user">
│   ├── page.tsx             ← Composição das seções
│   ├── opengraph-image.tsx  ← OG image (next/og)
│   └── icon.tsx             ← Favicon (next/og)
├── components/
│   ├── Navbar.tsx           ← "use client" (menu mobile)
│   ├── Reveal.tsx           ← "use client" (fade-up reutilizável)
│   └── sections/
│       ├── Hero.tsx         ← "use client" (next/image + tiles)
│       ├── About.tsx
│       ├── Projects.tsx     ← seção escura, cards de projeto
│       ├── Skills.tsx
│       ├── Experience.tsx
│       └── Contact.tsx      ← inclui o footer
└── data/
    ├── projects.ts          ← 4 projetos (description em HTML)
    └── skills.ts            ← skillGroups (4 grupos)
```

Novas seções vão em `src/components/sections/` e são registradas em `page.tsx`. Dados estáticos em `src/data/` como arrays tipados.

---

## Ao criar ou modificar componentes

1. Leia o arquivo antes de editar.
2. Leia `globals.css` para reutilizar classes/variáveis existentes antes de criar novas.
3. Mantenha a estética editorial: fundo creme, Bricolage para títulos grandes, eyebrows mono `/ Seção`, acentos via `--acc`, cantos `--rad`.
4. Use `Reveal` para entradas; escalone `delay` em listas.
5. Adicione estilos responsivos ao bloco `@media` no fim de `globals.css`.
6. `next/image` para imagens; glifos/CSS para ícones.

$ARGUMENTS
