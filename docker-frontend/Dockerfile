FROM alpine:latest
EXPOSE 3000
WORKDIR /app
COPY . .
RUN apk add --update npm
RUN npm install 
ENTRYPOINT [ "npm", "start" ]