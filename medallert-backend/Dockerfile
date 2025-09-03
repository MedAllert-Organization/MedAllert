FROM node:lts-alpine
WORKDIR /home/node
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npx prisma generate
USER node
RUN npm run build
CMD ["node", "dist/index.js"]
