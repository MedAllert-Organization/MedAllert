# MedAllert

## **Como rodar o projeto**

### **Backend**

#### **Requisitos**

- NodeJS LTS (v22) [Link](https://nodejs.org/en/download)

#### **Commandos**

```sh
# Setup das Variáveis de ambiente
cp example.env .env
```

```sh
# Subindo só o backend
cd medallert-backend
npm install
PORT=3000 npm run dev
```

- Endereço da API: `http://localhost:3000`
- Swagger `http://localhost:3000/swagger`
  - usuário: `dev`
  - senha: `dev`

#### **Docker**

```sh
cd medallert-backend
# Docker compose
docker compose up -d --build
# Ver logs
docker logs medallert-backend -f

# Desligar
docker compose down
```

#### **Build (Docker para prod)**

```sh
# Somente o container do Backend
cd medallert-backend
docker build -t medallert:v1 .
# Rodar o container (sem travar o terminal)
docker run -d --name medallert -p 3000:3000 medalert:v1
# Entrar no container
docker exec -it medallert /bin/ash
```

#### **Documentação**

- [HonoJS](https://hono.dev/docs/)
- [Hono OpenAPI](https://hono.dev/examples/hono-openapi)

#### **Emails**

Envio de email é feito através do [Resend](https://resend.com/) com 3k de emails/mês.
Pro envio precisa de uma chave de API e de um domínio configurado.
Atualmente caso não seja encontrado as variáveis `RESEND_API_KEY` e `RESEND_FROM_EMAIL` os emails não são enviados e somente são logados no console.

- [Resend API Key](https://resend.com/docs/dashboard/api-keys/introduction)
- [Resend Domínio](https://resend.com/docs/dashboard/domains/introduction)
