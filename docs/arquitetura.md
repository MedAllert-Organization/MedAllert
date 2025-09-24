# Arquitetura do Backend

O backend do MedAlert segue o padrão de arquitetura em camadas (Layered Architecture), inspirado em princípios da Clean Architecture. O código é organizado de forma a separar responsabilidades entre camadas de roteamento, serviços (lógica de negócio), repositórios (acesso a dados) e integração com infraestrutura externa (como banco de dados). Essa abordagem facilita a manutenção, testes e escalabilidade do sistema.
## Descrição das Pastas e Arquivos

- **.dockerignore / .gitignore**: Arquivos de configuração para ignorar arquivos/pastas no Docker e Git.
- **biome.json**: Configuração do Biome (ferramenta de lint/format).
- **dev.Dockerfile / Dockerfile**: Arquivos para build de containers Docker (dev e produção).
- **docker-compose.yml**: Orquestração de múltiplos containers Docker.
- **example.env**: Exemplo de variáveis de ambiente.
- **package.json**: Dependências e scripts do projeto Node.js.
- **prisma.config.ts**: Configuração do Prisma ORM.
- **tsconfig.json**: Configuração do TypeScript.
- **src/**: Código-fonte principal da aplicação.
	- **api.ts / index.ts**: Pontos de entrada da API e inicialização do app.
	- **common/**: Utilitários e helpers comuns (e.g., email, JWT, hash de senha).
	- **infra/prisma/**: Integração com o banco de dados via Prisma.
		- **client.ts**: Instância do cliente Prisma.
		- **schema.prisma**: Definição do modelo de dados.
		- **migrations/**: Migrações do banco de dados.
	- **repositories/**: Camada de acesso a dados (CRUD para entidades principais).
	- **routes/**: Rotas da API organizadas por domínio (auth, medications, etc).
		- **middleware/**: Middlewares de autenticação e outros.
	- **services/**: Lógica de negócio e serviços da aplicação.
# Estrutura de Pastas do Backend

```
medallert-backend/
├── .dockerignore
├── .gitignore
├── biome.json
├── dev.Dockerfile
├── docker-compose.yml
├── Dockerfile
├── example.env
├── package.json
├── prisma.config.ts
├── tsconfig.json
├── src/
│   ├── api.ts
│   ├── index.ts
│   ├── common/
│   │   ├── email-transport.ts
│   │   ├── jwt.ts
│   │   ├── password-hash.ts
│   │   └── type-helpers.d.ts
│   ├── infra/
│   │   └── prisma/
│   │       ├── client.ts
│   │       ├── schema.prisma
│   │       └── migrations/
│   │           ├── migration_lock.toml
│   │           └── 20250916184950_init/
│   │               └── migration.sql
│   ├── repositories/
│   │   ├── medications.ts
│   │   ├── notification.ts
│   │   ├── sound_types.ts
│   │   ├── users.ts
│   │   ├── verification-code.ts
│   │   └── visual_types.ts
│   ├── routes/
│   │   ├── open-api.ts
│   │   ├── auth/
│   │   │   ├── confirm.ts
│   │   │   ├── index.ts
│   │   │   ├── login.ts
│   │   │   ├── register.ts
│   │   │   └── password-recovery/
│   │   │       ├── change-password.ts
│   │   │       └── recover-password.ts
│   │   ├── medications/
│   │   │   ├── index.ts
│   │   │   ├── medication.ts
│   │   │   ├── notification.ts
│   │   │   ├── sound-types.ts
│   │   │   └── visual-types.ts
│   │   └── middleware/
│   │       └── auth-middleware.ts
│   └── services/
│       ├── login-service.ts
│       ├── medication-service.ts
│       ├── notification-service.ts
│       ├── password-recovery.ts
│       ├── register-service.ts
│       ├── sound_type-service.ts
│       └── visual_type-service.ts
```
