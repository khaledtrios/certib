# CRTIB CMS

Sistema de gerenciamento de conteúdo construído com Payload CMS e PostgreSQL.

## 🚀 Guia de Desenvolvimento

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [Docker](https://www.docker.com/get-started) e Docker Compose
- [pnpm](https://pnpm.io/) (instalado automaticamente via Corepack)

### Configuração Inicial

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd crtib-cms
   ```

2. **Configure as variáveis de ambiente**
   
   O arquivo `.env` já está configurado com:
   ```env
   DATABASE_URL=postgres://postgres:crtib@postgres:5432/crtib_cms
   PAYLOAD_SECRET=9a01d9cddb4fa634e9b05436
   ```

### Executando com Docker (Recomendado)

O método mais simples para desenvolvimento é usar Docker:

```bash
# Inicia o PostgreSQL e a aplicação
docker-compose up

# Para rodar em segundo plano (detached)
docker-compose up -d

# Para visualizar os logs
docker-compose logs -f

# Para parar os containers
docker-compose down
```

A aplicação estará disponível em:
- **Frontend/Admin**: http://localhost:3000
- **API GraphQL**: http://localhost:3000/api/graphql
- **GraphQL Playground**: http://localhost:3000/api/graphql-playground

### Executando Localmente (Sem Docker)

Se preferir não usar Docker:

1. **Instale o PostgreSQL localmente** ou modifique o `.env` para apontar para uma instância PostgreSQL externa

2. **Atualize o DATABASE_URL** no `.env`:
   ```env
   DATABASE_URL=postgres://postgres:crtib@127.0.0.1:5432/crtib_cms
   ```

3. **Instale as dependências e rode o servidor**:
   ```bash
   pnpm install
   pnpm dev
   ```

### Primeiro Acesso

1. Acesse http://localhost:3000
2. Siga as instruções na tela para criar seu primeiro usuário administrador
3. Faça login no painel admin

### Estrutura do Projeto

```
src/
├── app/                  # Next.js App Router
│   ├── (frontend)/      # Rotas do frontend público
│   └── (payload)/       # Rotas do admin do Payload
├── collections/         # Configurações das collections
│   ├── Media.ts
│   └── Users.ts
├── payload.config.ts    # Configuração principal do Payload
└── payload-types.ts     # Types gerados automaticamente
```

### Collections Disponíveis

- **Users**: Usuários com autenticação e acesso ao painel admin
- **Media**: Upload de arquivos com redimensionamento automático

### Comandos Úteis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar em produção
pnpm start

# Gerar tipos TypeScript
pnpm generate:types

# Linting
pnpm lint

# Testes E2E
pnpm test:e2e

# Testes de Integração
pnpm test:int

# Validar TypeScript
pnpm type-check
```

### Docker - Comandos Adicionais

```bash
# Rebuild dos containers
docker-compose up --build

# Remover volumes (apaga dados do banco)
docker-compose down -v

# Acessar o shell do container
docker-compose exec payload sh

# Acessar o PostgreSQL
docker-compose exec postgres psql -U postgres -d crtib_cms
```

### Desenvolvimento

- Alterações em `./src` serão refletidas automaticamente (hot reload)
- O Payload gera automaticamente tipos TypeScript após mudanças no schema
- GraphQL Playground disponível para testar queries e mutations

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
