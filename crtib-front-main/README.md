# CRTIB Frontend

Frontend moderno construído com **Next.js 15**, **TypeScript** e **Tailwind CSS**, integrado com **Payload CMS** como backend headless.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática e segurança de tipos
- **Tailwind CSS** - Estilização moderna e responsiva
- **React Query** - Gerenciamento de estado de servidor
- **Payload CMS** - Headless CMS flexível e poderoso

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Payload CMS configurado e rodando (geralmente em `http://localhost:3000`)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd crtib-front
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` e configure a URL do Payload CMS:

```env
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000
PAYLOAD_API_URL=http://localhost:3000/api
```

## 🏃 Executando o Projeto

### Modo de Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3001`

### Build de Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── blog/              # Páginas do blog
│   │   ├── [slug]/        # Página dinâmica de post
│   │   └── page.tsx       # Lista de posts
│   ├── sobre/             # Página sobre
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   ├── PostCard.tsx       # Card de post
│   └── RichText.tsx       # Renderizador de Rich Text
├── lib/                   # Bibliotecas e utilitários
│   ├── payload.ts         # Funções para consumir Payload API
│   └── providers.tsx      # React Query Provider
└── types/                 # Tipos TypeScript
    └── payload.ts         # Tipos das Collections do Payload
```

## 🎨 Componentes Principais

### PostCard

Componente para exibir preview de posts com imagem, título, resumo e metadados.

### RichText

Renderizador de conteúdo Rich Text do Payload CMS com suporte a formatação, links, listas, etc.

### Header & Footer

Componentes de navegação e rodapé reutilizáveis em todas as páginas.

## 🔌 Integração com Payload CMS

### Funções Disponíveis

#### `getCollection<T>(collection, params, options)`

Busca documentos de uma collection com parâmetros de query.

```typescript
const posts = await getCollection("posts", {
  limit: 10,
  where: {
    status: { equals: "published" },
  },
  sort: "-publishedAt",
});
```

#### `getDocumentById<T>(collection, id, params, options)`

Busca um documento específico por ID.

```typescript
const post = await getDocumentById("posts", "123", { depth: 2 });
```

#### `getDocumentBySlug<T>(collection, slug, params, options)`

Busca um documento por slug.

```typescript
const post = await getDocumentBySlug("posts", "meu-post", { depth: 2 });
```

#### `getGlobal<T>(slug, params, options)`

Busca um Global do Payload.

```typescript
const settings = await getGlobal("site-settings", { depth: 1 });
```

### Helpers

#### `getMediaUrl(media)`

Gera URL completa para arquivos de media.

```typescript
const imageUrl = getMediaUrl(post.featuredImage);
```

#### `isPopulated<T>(value)`

Type guard para verificar se um relacionamento foi populado.

```typescript
if (isPopulated(post.author)) {
  console.log(post.author.name);
}
```

## 📝 Collections Esperadas no Payload

O projeto espera as seguintes collections no Payload CMS:

### Posts

- `title` - Título do post
- `slug` - URL amigável
- `content` - Conteúdo em Rich Text
- `excerpt` - Resumo
- `featuredImage` - Imagem destacada (relação com Media)
- `author` - Autor (relação com Users)
- `publishedAt` - Data de publicação
- `status` - Status (draft/published)
- `categories` - Categorias (relação com Categories)

### Pages

- `title` - Título da página
- `slug` - URL amigável
- `content` - Conteúdo em Rich Text
- `meta` - Metadados SEO
- `status` - Status (draft/published)

### Categories

- `name` - Nome da categoria
- `slug` - URL amigável
- `description` - Descrição

## 🎯 Próximos Passos

- [ ] Implementar busca de posts
- [ ] Adicionar paginação
- [ ] Criar sistema de comentários
- [ ] Implementar filtros por categoria
- [ ] Adicionar SEO dinâmico
- [ ] Configurar ISR (Incremental Static Regeneration)
- [ ] Adicionar testes

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
