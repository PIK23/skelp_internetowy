FROM node

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm","start"]