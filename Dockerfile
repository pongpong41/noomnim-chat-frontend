FROM node:12-alpine
COPY . /app
WORKDIR /app
RUN npm install
RUN npx ng build --prod

FROM nginx:alpine
COPY --from=0 /app/dist/noomnim-chat /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
