# Type Express Server Generator
built with:
Webpack || Typescript || Docker || Express || Jest

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

## 🍀 Inverse Dependencies:

Routes ⏪ Controllers ⏪ Use-Cases ⏪ ...

## 🍀 Get Development Started 

with yarn:
```shell
yarn install
yarn dev
yarn build
yarn test
```

with npm:
```shell
npm install
npm run dev
npm run build
npm run test
```

## 🍀 Start datadase with prisma

```shell
yarn generate
yarn migrate
yarn migrate:up
yarn migrate:down
```

## 🍀 Build and run on Docker

Create an Docker Image:
```shell
docker build -t typeexpress .
```
Run the Docker Image:
```shell
docker run -p 5000:5000 --name typeexpress -d typeexpress
```

-------------
## 🍀 Routes
GET:
```shell
http://localhost:5000/api/user/:id
```

POST: 
```shell
http://localhost:5000/api/user
```

PUT: 
```shell
http://localhost:5000/api/user/:id
```

DELETE: 
```shell
http://localhost:5000/api/user/:id
```
