FROM node:alpine

#Create work dir in the container
WORKDIR /usr/src/app

#Copy the package
COPY ./package.json ./
COPY ./package-lock.json ./

#install the package
RUN npm install

#Copy the server folder to the src folder in the container
COPY ./src ./src
COPY ./.env ./
COPY ./server.js ./

CMD ["npm", "start"]