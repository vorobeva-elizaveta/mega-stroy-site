FROM node:21-alpine

WORKDIR /.

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

COPY . .

CMD ["node", ".output/server/index.mjs"]