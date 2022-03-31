# Step 1: build react

FROM node:16-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN apk add git

RUN npm install

COPY . /app

RUN npm run build

# Step 2: Create nginx docker
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Step 3: Start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
