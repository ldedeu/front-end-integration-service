FROM node:lts-alpine

COPY ./ /var/www/
WORKDIR /var/www/
RUN npm i 
RUN npm install --global http-server
RUN npm run build
EXPOSE 4200
CMD ["http-server","./dist/integration","-p","4200"]