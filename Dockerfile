FROM node:21-alpine

ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /.

COPY ./package.json .

RUN yarn

COPY . .

RUN yarn build

RUN ls ./.output/server

CMD ["node", ".output/server/index.mjs"]
# CMD ["ls"]