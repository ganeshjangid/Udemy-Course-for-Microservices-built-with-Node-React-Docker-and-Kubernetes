# specify base image
FROM node:alpine


# install some dependencies
WORKDIR /usr/app
COPY  ./package.json ./
RUN  npm install
COPY  ./ ./


# Default command

CMD [ "npm" ,"start" ]