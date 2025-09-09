FROM node:lts-alpine
WORKDIR /home/node
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npx prisma generate
RUN npm run build
USER node
CMD ["node", "dist/index.js"]
