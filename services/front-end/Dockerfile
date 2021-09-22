FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

# COPY package.json package-lock.json ./
COPY ./services/front-end .

RUN npm install --production

# COPY . .

CMD ["npm", "start"]