# MedAllert

## **Como rodar o projeto**

### **Mobile**

#### **Requisitos**

- NodeJS LTS (v22) [Link](https://nodejs.org/en/download)
- Android Studio (Android) [Link](https://developer.android.com/studio/install?hl=pt-br)
- XCode (iOS) [Link](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators)

#### **Commandos**

```sh
cd medallert-mobile
npm install
npm run android
# ou
npm run ios
```

#### **Documentação**

- [Expo](https://docs.expo.dev/get-started/start-developing/)
- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router/)

### **Backend**

#### **Requisitos**

- NodeJS LTS (v22) [Link](https://nodejs.org/en/download)

#### **Commandos**

```sh
cd medallert-backend
npm install
npm run dev
```

- Endereço da API: `http://localhost:3000`
- Swagger `http://localhost:3000/swagger`
  - usuário: dev
  - senha: dev

#### **Build (_Docker_)**

```sh
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
