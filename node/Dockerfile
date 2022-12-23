FROM node:15

WORKDIR /usr/src/app

RUN npm install && \
    npm install mysql && \
    npm install express

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]