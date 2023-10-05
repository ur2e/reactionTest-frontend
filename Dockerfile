FROM node:12.18

COPY package.json .

ADD . .
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
