FROM node:17-alpine3.12

RUN mkdir /CRUD_NODE_MONGO

WORKDIR /CRUD_NODE_MONGO

COPY package*.json ./

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "src/index.js" ]