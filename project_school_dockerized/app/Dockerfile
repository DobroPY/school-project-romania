FROM node:latest

RUN mkdir -p /app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY app.json /usr/src/app

RUN npm install bcrypt

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD npm i -f && npm start