FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:stable-alpine as production-stage
RUN mkdir /app
RUN chmod 755 /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf