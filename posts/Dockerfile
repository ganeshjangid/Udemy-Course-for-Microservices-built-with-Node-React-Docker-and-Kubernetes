# start base image
FROM node:alpine

# Run Command
WORKDIR /usr/app
COPY package.json ./
RUN  npm install
COPY ./ ./

CMD ["npm","start"]


