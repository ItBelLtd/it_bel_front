FROM node:18-alpine
WORKDIR /code
COPY package.json /code/
COPY yarn.lock /code/
RUN yarn
COPY . /code/

