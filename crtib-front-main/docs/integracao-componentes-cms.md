# Guia de Integração: Componentes Frontend ↔ Payload CMS

## Como funciona o padrão (baseado no Accordion)

Todo componente dinâmico segue o mesmo ciclo de 4 passos:

```
1. CMS (Pages.ts)          → define o bloco com seus campos
2. serializeLexical.ts     → converte o nó Lexical em placeholder HTML
3. RichText.tsx            → hidrata o placeholder com React (createRoot)
4. Componente .tsx         → renderiza com os dados recebidos
```

O motivo do "placeholder": `serializeLexical` retorna uma string HTML pura — ele não pode instanciar componentes React. O `<div data-*>` é um ponto de montagem que o `useEffect` do `RichText` encontra e hidrata com `createRoot`.

---

## Passo a Passo para Integrar um Componente

### Passo 1 — Definir o bloco no CMS

**Arquivo:** `crtib-cms/src/collections/Pages.ts`

Adicionar dentro do array `blocks` do `BlocksFeature`:

```typescript
{
  slug: 'nomeDoBloco',         // identificador único, camelCase
  labels: {
    singular: 'Nome do Bloco',
    plural: 'Nomes dos Blocos',
  },
  fields: [
    // campos que o editor vai preencher no painel admin
  ],
}
```

Após editar, rodar no `crtib-cms`:

```bash
pnpm generate:types
pnpm generate:importmap
```

---

### Passo 2 — Serializar o bloco

**Arquivo:** `crtib-front/src/lib/serializeLexical.ts`

Dentro do bloco `if (type === "block")`, adicionar um novo `if`:

```typescript
if (blockType === "nomeDoBloco") {
  const data = {
    campo1: node.fields?.campo1 || "",
    campo2: node.fields?.campo2 || [],
    // só os dados que o componente precisa
  };

  return `<div
    class="nome-do-bloco-block"
    data-nome-do-bloco='${JSON.stringify(data).replace(/'/g, "&apos;")}'
  ></div>`;
}
```

> **Atenção:** escape aspas simples com `&apos;` para não quebrar o atributo HTML.

---

### Passo 3 — Hidratar com React

**Arquivo:** `crtib-front/src/components/RichText.tsx`

Dentro do `useEffect`, adicionar após o bloco do accordion:

```typescript
// Nome do Bloco
const nomeDoBlocoEls = containerRef.current.querySelectorAll(".nome-do-bloco-block");
nomeDoBlocoEls.forEach((el) => {
  const raw = el.getAttribute("data-nome-do-bloco");
  if (raw) {
    try {
      const data = JSON.parse(raw.replace(/&apos;/g, "'"));
      const root = createRoot(el);
      root.render(<NomeDoBloco {...data} />);
    } catch (e) {
      console.error("Error mounting NomeDoBloco:", e);
    }
  }
});
```

Adicionar o import no topo do arquivo:

```typescript
import { NomeDoBloco } from "./NomeDoBloco";
```

---

### Passo 4 — Componente React

O componente já existe. Só garantir que:

- Tem `"use client"` se usar estado/eventos
- Os tipos das props batem com o que é serializado no Passo 2

---

## Componentes a Integrar

### 1. `Timeline`

**Componente:** `src/components/timeline/Timeline.tsx`  
**Slug do bloco:** `timeline`

**Campos no CMS:**

```typescript
{
  slug: 'timeline',
  labels: { singular: 'Linha do Tempo', plural: 'Linhas do Tempo' },
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Itens',
      minRows: 1,
      fields: [
        { name: 'year', type: 'text', required: true, label: 'Ano' },
        { name: 'title', type: 'text', label: 'Título (opcional)' },
      ],
    },
    {
      name: 'highlightLast',
      type: 'checkbox',
      label: 'Destacar último item',
      defaultValue: true,
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "timeline") {
  const items = (node.fields?.items || []).map((item: any, i: number) => ({
    id: `timeline-item-${i}`,
    year: item.year || "",
    title: item.title || "",
  }));
  const data = { items, highlightLast: node.fields?.highlightLast ?? true };
  return `<div class="timeline-block" data-timeline='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { Timeline } from "./timeline/Timeline";

// dentro do useEffect:
containerRef.current.querySelectorAll(".timeline-block").forEach((el) => {
  const raw = el.getAttribute("data-timeline");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<Timeline items={data.items} highlightLast={data.highlightLast} />);
  }
});
```

**Props esperadas pelo componente:**

```typescript
type TimelineItem = { id: string; year: string; title?: string };
// Timeline({ items: TimelineItem[], highlightLast?: boolean })
```

---

### 2. `DynamicGrid`

**Componente:** `src/components/blocks/DynamicGrid/DynamicGrid.tsx`  
**Slug do bloco:** `dynamicGrid`

**Campos no CMS:**

```typescript
{
  slug: 'dynamicGrid',
  labels: { singular: 'Tabela Dinâmica', plural: 'Tabelas Dinâmicas' },
  fields: [
    { name: 'title', type: 'text', label: 'Título' },
    {
      name: 'columns',
      type: 'array',
      label: 'Colunas',
      minRows: 1,
      fields: [
        { name: 'id', type: 'text', required: true, label: 'ID (sem espaços)' },
        { name: 'label', type: 'text', required: true, label: 'Cabeçalho' },
        {
          name: 'type',
          type: 'select',
          required: true,
          label: 'Tipo',
          options: [
            { label: 'Texto', value: 'text' },
            { label: 'Número', value: 'number' },
            { label: 'Percentual', value: 'percentage' },
            { label: 'Data', value: 'date' },
          ],
        },
        { name: 'precision', type: 'number', label: 'Casas decimais', defaultValue: 2 },
        { name: 'currency', type: 'text', label: 'Moeda (ex: €)' },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      label: 'Linhas',
      fields: [
        {
          name: 'values',
          type: 'json',
          label: 'Valores (JSON: { "colId": valor })',
          required: true,
        },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "dynamicGrid") {
  const columns = (node.fields?.columns || []).map((col: any) => ({
    id: col.id,
    label: col.label,
    type: col.type,
    config: {
      precision: col.precision,
      currency: col.currency || undefined,
    },
  }));
  const rows = (node.fields?.rows || []).map((row: any, i: number) => ({
    id: `row-${i}`,
    values: row.values || {},
  }));
  const data = { columns, rows, title: node.fields?.title || "" };
  return `<div class="dynamic-grid-block" data-dynamic-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { DynamicGrid } from "./blocks/DynamicGrid";

containerRef.current.querySelectorAll(".dynamic-grid-block").forEach((el) => {
  const raw = el.getAttribute("data-dynamic-grid");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<DynamicGrid {...data} />);
  }
});
```

---

### 3. `ClausesGrid`

**Componente:** `src/components/blocks/ClausesGrid/ClausesGrid.tsx`  
**Slug do bloco:** `clausesGrid`

**Campos no CMS:**

```typescript
{
  slug: 'clausesGrid',
  labels: { singular: 'Grade de Cláusulas', plural: 'Grades de Cláusulas' },
  fields: [
    { name: 'title', type: 'text', label: 'Título' },
    {
      name: 'rows',
      type: 'array',
      label: 'Linhas',
      minRows: 1,
      fields: [
        { name: 'number', type: 'text', required: true, label: 'Número' },
        { name: 'title', type: 'text', required: true, label: 'Título' },
        { name: 'date', type: 'text', required: true, label: 'Data' },
        {
          name: 'pdf',
          type: 'upload',
          relationTo: 'media',
          label: 'Arquivo PDF',
        },
      ],
    },
    { name: 'redirectLabel', type: 'text', required: true, label: 'Texto do botão' },
    { name: 'redirectHref', type: 'text', required: true, label: 'Link do botão' },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "clausesGrid") {
  const rows = (node.fields?.rows || []).map((row: any) => ({
    number: row.number || "",
    title: row.title || "",
    date: row.date || "",
    pdfUrl: row.pdf?.url || undefined,
  }));
  const data = {
    title: node.fields?.title || "",
    rows,
    redirectLabel: node.fields?.redirectLabel || "",
    redirectHref: node.fields?.redirectHref || "",
  };
  return `<div class="clauses-grid-block" data-clauses-grid='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { ClausesGrid } from "./blocks/ClausesGrid";

containerRef.current.querySelectorAll(".clauses-grid-block").forEach((el) => {
  const raw = el.getAttribute("data-clauses-grid");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<ClausesGrid {...data} />);
  }
});
```

---

### 4. `VideoCardsSection`

**Componente:** `src/components/video/VideoCardsSection.tsx`  
**Slug do bloco:** `videoCards`

**Campos no CMS:**

```typescript
{
  slug: 'videoCards',
  labels: { singular: 'Seção de Vídeos', plural: 'Seções de Vídeos' },
  fields: [
    { name: 'title', type: 'text', label: 'Título da seção' },
    {
      name: 'videos',
      type: 'array',
      label: 'Vídeos',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Título do vídeo' },
        {
          name: 'type',
          type: 'select',
          required: true,
          label: 'Tipo',
          options: [
            { label: 'YouTube (embed URL)', value: 'youtube' },
            { label: 'Arquivo interno', value: 'internal' },
          ],
        },
        { name: 'src', type: 'text', required: true, label: 'URL do vídeo ou embed' },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "videoCards") {
  const videos = (node.fields?.videos || []).map((v: any, i: number) => ({
    id: `video-${i}`,
    title: v.title || "",
    type: v.type || "youtube",
    src: v.src || "",
  }));
  const data = { title: node.fields?.title || "", videos };
  return `<div class="video-cards-block" data-video-cards='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { VideoCardsSection } from "./video/VideoCardsSection";

containerRef.current.querySelectorAll(".video-cards-block").forEach((el) => {
  const raw = el.getAttribute("data-video-cards");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<VideoCardsSection {...data} />);
  }
});
```

---

### 5. `ActivityReportsSection`

**Componente:** `src/components/reports/ActivityReportsSection.tsx`  
**Slug do bloco:** `activityReports`

**Campos no CMS:**

```typescript
{
  slug: 'activityReports',
  labels: { singular: 'Relatórios de Atividade', plural: 'Relatórios de Atividade' },
  fields: [
    { name: 'title', type: 'text', label: 'Título da seção' },
    {
      name: 'reports',
      type: 'array',
      label: 'Relatórios',
      minRows: 1,
      fields: [
        { name: 'year', type: 'text', required: true, label: 'Ano (ex: 2024)' },
        {
          name: 'pdf',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Arquivo PDF',
        },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "activityReports") {
  const reports = (node.fields?.reports || []).map((r: any, i: number) => ({
    id: `report-${i}`,
    year: r.year || "",
    pdfUrl: r.pdf?.url || "",
  }));
  const data = { title: node.fields?.title || "", reports };
  return `<div class="activity-reports-block" data-activity-reports='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { ActivityReportsSection } from "./reports/ActivityReportsSection";

containerRef.current.querySelectorAll(".activity-reports-block").forEach((el) => {
  const raw = el.getAttribute("data-activity-reports");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<ActivityReportsSection {...data} />);
  }
});
```

---

### 6. `PartnersSection`

**Componente:** `src/components/partners/PartnersSection.tsx`  
**Slug do bloco:** `partners`

**Campos no CMS:**

```typescript
{
  slug: 'partners',
  labels: { singular: 'Seção de Parceiros', plural: 'Seções de Parceiros' },
  fields: [
    { name: 'title', type: 'text', label: 'Título parceiros', defaultValue: 'Partenaires' },
    { name: 'associationsTitle', type: 'text', label: 'Título associações', defaultValue: 'En association' },
    {
      name: 'partners',
      type: 'array',
      label: 'Parceiros',
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nome' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
        { name: 'href', type: 'text', label: 'Link externo' },
      ],
    },
    {
      name: 'associations',
      type: 'array',
      label: 'Associações',
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nome' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo' },
        { name: 'href', type: 'text', label: 'Link externo' },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "partners") {
  const mapItem = (item: any, i: number) => ({
    id: `partner-${i}`,
    name: item.name || "",
    logoUrl: item.logo?.url || undefined,
    href: item.href || undefined,
  });
  const data = {
    title: node.fields?.title || "",
    associationsTitle: node.fields?.associationsTitle || "",
    partners: (node.fields?.partners || []).map(mapItem),
    associations: (node.fields?.associations || []).map(mapItem),
  };
  return `<div class="partners-block" data-partners='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { PartnersSection } from "./partners/PartnersSection";

containerRef.current.querySelectorAll(".partners-block").forEach((el) => {
  const raw = el.getAttribute("data-partners");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<PartnersSection {...data} />);
  }
});
```

---

### 7. `NewsSection`

**Componente:** `src/components/news/NewsSection.tsx`  
**Slug do bloco:** `newsSection`

> **Atenção:** o `NewsSection` lista notícias que devem vir de uma coleção própria no Payload. O bloco no CMS só controla a exibição (título, quantidade, variante). Os dados (`items`) devem ser buscados via API separada.

**Campos no CMS:**

```typescript
{
  slug: 'newsSection',
  labels: { singular: 'Seção de Notícias', plural: 'Seções de Notícias' },
  fields: [
    { name: 'title', type: 'text', label: 'Título', defaultValue: 'AUTRES ACTUALITÉS' },
    { name: 'maxItems', type: 'number', label: 'Máximo de itens', defaultValue: 2 },
    {
      name: 'variant',
      type: 'select',
      label: 'Variante visual',
      defaultValue: 'default',
      options: [
        { label: 'Padrão', value: 'default' },
        { label: 'Bloco (fundo verde)', value: 'block' },
      ],
    },
    { name: 'ctaHref', type: 'text', label: 'Link do botão CTA', defaultValue: '/actualites' },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "newsSection") {
  const data = {
    title: node.fields?.title || "",
    maxItems: node.fields?.maxItems || 2,
    variant: node.fields?.variant || "default",
    ctaHref: node.fields?.ctaHref || "/actualites",
  };
  return `<div class="news-section-block" data-news-section='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

O `NewsSection` precisa de dados externos (fetch de notícias). Criar um wrapper client-side:

```typescript
// src/components/news/NewsSectionLoader.tsx
"use client";
import { useEffect, useState } from "react";
import { NewsSection } from "./NewsSection";
import type { NewsItem } from "./NewsCard";

type Props = { title?: string; maxItems?: number; variant?: "default" | "block"; ctaHref?: string };

export function NewsSectionLoader(props: Props) {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/api/news?limit=6") // ajustar para o endpoint real
      .then((r) => r.json())
      .then((data) => setItems(data.docs || []));
  }, []);

  return <NewsSection {...props} items={items} />;
}
```

```typescript
// RichText.tsx — hidratação:
import { NewsSectionLoader } from "./news/NewsSectionLoader";

containerRef.current.querySelectorAll(".news-section-block").forEach((el) => {
  const raw = el.getAttribute("data-news-section");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<NewsSectionLoader {...data} />);
  }
});
```

---

### 8. `OrganogramChart`

**Componente:** `src/components/organogram/OrganogramChart.tsx`  
**Slug do bloco:** `organogram`

**Campos no CMS:**

```typescript
{
  slug: 'organogram',
  labels: { singular: 'Organograma', plural: 'Organogramas' },
  fields: [
    {
      name: 'root',
      type: 'group',
      label: 'Nó raiz',
      fields: [
        { name: 'name', type: 'text', required: true, label: 'Nome' },
        { name: 'role', type: 'text', label: 'Cargo' },
        { name: 'photo', type: 'upload', relationTo: 'media', label: 'Foto' },
        {
          name: 'children',
          type: 'array',
          label: 'Subordinados diretos',
          fields: [
            { name: 'name', type: 'text', required: true, label: 'Nome' },
            { name: 'role', type: 'text', label: 'Cargo' },
            { name: 'photo', type: 'upload', relationTo: 'media', label: 'Foto' },
            // Para mais níveis: adicionar 'children' recursivamente (Payload suporta grupos aninhados)
          ],
        },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "organogram") {
  const mapNode = (node: any, prefix: string): any => ({
    id: `${prefix}-${node.name}`.replace(/\s/g, "-").toLowerCase(),
    name: node.name || "",
    role: node.role || undefined,
    photoUrl: node.photo?.url || undefined,
    children: (node.children || []).map((child: any, i: number) =>
      mapNode(child, `${prefix}-child-${i}`),
    ),
  });
  const data = { root: mapNode(node.fields?.root || {}, "org") };
  return `<div class="organogram-block" data-organogram='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { OrganogramChart } from "./organogram/OrganogramChart";

containerRef.current.querySelectorAll(".organogram-block").forEach((el) => {
  const raw = el.getAttribute("data-organogram");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<OrganogramChart root={data.root} />);
  }
});
```

---

### 9. `CalculatorSection`

**Componente:** `src/components/calculator/CalculatorSection.tsx`  
**Slug do bloco:** `calculator`

> O `CalculatorSection` tem lógica de cálculo hardcoded (`results` vem de um array fixo). Para torná-lo dinâmico, os resultados devem vir do CMS ou ser calculados no cliente. A integração abaixo conecta os campos CMS às props existentes.

**Campos no CMS:**

```typescript
{
  slug: 'calculator',
  labels: { singular: 'Calculadora', plural: 'Calculadoras' },
  fields: [
    { name: 'title', type: 'text', label: 'Título', defaultValue: 'Calculateur' },
    {
      name: 'options',
      type: 'array',
      label: 'Opções do select (corps de métier)',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Opção' },
      ],
    },
    {
      name: 'results',
      type: 'array',
      label: 'Resultados fixos exibidos após cálculo',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Descrição' },
        { name: 'value', type: 'text', required: true, label: 'Valor (ex: 24.00 M€)' },
      ],
    },
  ],
}
```

**Serialização (`serializeLexical.ts`):**

```typescript
if (blockType === "calculator") {
  const data = {
    title: node.fields?.title || "",
    options: (node.fields?.options || []).map((o: any) => o.label || ""),
    results: (node.fields?.results || []).map((r: any) => ({
      label: r.label || "",
      value: r.value || "",
    })),
  };
  return `<div class="calculator-block" data-calculator='${JSON.stringify(data).replace(/'/g, "&apos;")}'></div>`;
}
```

**Hidratação (`RichText.tsx`):**

```typescript
import { CalculatorSection } from "./calculator/CalculatorSection";

containerRef.current.querySelectorAll(".calculator-block").forEach((el) => {
  const raw = el.getAttribute("data-calculator");
  if (raw) {
    const data = JSON.parse(raw.replace(/&apos;/g, "'"));
    const root = createRoot(el);
    root.render(<CalculatorSection {...data} />);
  }
});
```

---

## Checklist de Implementação

| Componente               | CMS (`Pages.ts`) | `serializeLexical.ts` | `RichText.tsx` | Status                               |
| ------------------------ | ---------------- | --------------------- | -------------- | ------------------------------------ |
| `Accordion`              | ✅               | ✅                    | ✅             | **Pronto**                           |
| `Timeline`               | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `DynamicGrid`            | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `ClausesGrid`            | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `VideoCardsSection`      | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `ActivityReportsSection` | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `PartnersSection`        | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `NewsSection`            | ⬜               | ⬜                    | ⬜             | Pendente + criar `NewsSectionLoader` |
| `OrganogramChart`        | ⬜               | ⬜                    | ⬜             | Pendente                             |
| `CalculatorSection`      | ⬜               | ⬜                    | ⬜             | Pendente                             |

---

## Ordem de Alterações nos Arquivos

Ao implementar cada componente, toque sempre nessa sequência:

1. **`crtib-cms/src/collections/Pages.ts`** — adicionar o bloco no `BlocksFeature`
2. **`crtib-cms`** — rodar `pnpm generate:types` e `pnpm generate:importmap`
3. **`crtib-front/src/lib/serializeLexical.ts`** — adicionar o `if (blockType === "...")` dentro do `if (type === "block")`
4. **`crtib-front/src/components/RichText.tsx`** — adicionar o `querySelectorAll` + `createRoot` dentro do `useEffect`
5. Testar no browser com um conteúdo criado no painel Payload

---

## Observações Importantes

- **`createRoot` e múltiplas montagens:** cada chamada ao `useEffect` recria as roots. Se o conteúdo mudar, o React pode emitir warning sobre raízes já montadas. Em produção isso é inofensivo, mas para limpar corretamente, guardar as roots em um `ref` e chamar `root.unmount()` no cleanup do `useEffect`.

- **Dados de mídia do Payload:** quando um campo `upload` é resolvido, o Payload retorna o objeto completo. Na serialização, acessar `item.pdf?.url` garante que o URL seja resolvido corretamente.

- **Campos `json` no DynamicGrid:** o campo tipo `json` no Payload armazena o objeto diretamente — não precisa de `JSON.parse` ao ler em `serializeLexical`, mas precisa de `JSON.stringify` ao colocar no `data-*`.

- **Profundidade de relacionamentos:** o `lexicalEditor` resolve relacionamentos até `depth: 2` por padrão. Imagens dentro de blocos são resolvidas automaticamente.
