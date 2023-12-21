FROM node:lts-alpine

WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .

EXPOSE 5601
EXPOSE 6868
EXPOSE 8080
EXPOSE 9200
EXPOSE 9300

CMD npm start


