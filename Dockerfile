FROM node:14


WORKDIR /app


RUN https://github.com/shadikur/CoffeeStore-Client.git .


RUN npm install


EXPOSE 5173

RUN npm run dev
