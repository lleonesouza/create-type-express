FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g pm2

COPY build/bundle.js .

EXPOSE 5000

CMD ["node" , "bundle.js"]