FROM node:20-alpine


COPY package.json ./

RUN npm install

COPY . .

EXPOSE 1001

CMD ["npm", "start"]