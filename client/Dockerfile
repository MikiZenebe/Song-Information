FROM node:alpine
#Create work dir in the container
WORKDIR /app
#Copy the package
COPY package*.json ./
#install the package
RUN npm install
#Copy the server folder to the src folder in the container
COPY . .
EXPOSE 5173
CMD npm run dev