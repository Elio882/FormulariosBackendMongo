FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["node", "dist/main"]