FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY ./services/register .

RUN npm install --production

CMD ["npm", "start"]