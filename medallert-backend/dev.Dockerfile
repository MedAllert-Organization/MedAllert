FROM node:lts-alpine

WORKDIR /home/node

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node prisma.config.ts ./
COPY --chown=node:node src/infra/prisma ./src/infra/prisma

RUN npx prisma generate

COPY --chown=node:node . .

RUN npm run build

USER node
CMD ["node", "dist/index.js"]
