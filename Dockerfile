FROM node:21-alpine

ENV NODE_OPTIONS=--max-old-space-size=8192
ENV EMAIL_LOGIN=zakazy@mega-stroy-kirov.ru
ENV EMAIL_PASSWORD=YjbBL*5Llkpl

WORKDIR /.

COPY ./package.json .

RUN yarn

COPY . .

RUN yarn build

RUN ls ./.output/server

CMD ["node", ".output/server/index.mjs"]
# CMD ["ls"]