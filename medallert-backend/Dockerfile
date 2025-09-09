FROM node:lts-alpine AS development

WORKDIR /app

COPY --chown=node:node . .

RUN npm ci \
    && npx run gen \
    && npm run build \
    && npm prune --omit=dev


######### Second Stage #############

FROM node:lts-alpine AS production

WORKDIR /var/www/app

COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node --from=development /app/dist ./dist
COPY --chown=node:node --from=development /app/package*.json ./
COPY --chown=node:node --from=development /app/src/infra/prisma/generated ./dist/infra/prisma/generated

USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]
