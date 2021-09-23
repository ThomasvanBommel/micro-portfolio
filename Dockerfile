FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY ${{ service }} .

RUN npm install --production

CMD ["npm", "start"]