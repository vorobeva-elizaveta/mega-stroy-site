FROM node:21-alpine

WORKDIR /.

ENV NODE_OPTIONS=--max-old-space-size=4096

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

COPY . .

CMD ["node", ".output/server/index.mjs"]