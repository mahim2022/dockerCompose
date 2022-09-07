FROM node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm ci
CMD ["npm","start"]
