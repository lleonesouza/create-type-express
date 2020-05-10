# Type Express Server Generator
built with:
Webpack || Typescript || Docker || Express || Jest

![](https://pandao.github.io/editor.md/examples/images/4.jpg)


<!-- ## Commons Layers Flow


```flow
layer0=>operation: Controller
request=>start: Request
layer1=>operation: UseCases
layer2=>operation: Entities
e=>end:To admin

request->layer0->layer1->layer2
``` -->

## 🍀 Inverse Dependencies:

Routes ⏪ Controllers ⏪ Use-Cases ⏪ Entities

## 🍀 Curry Function:

```javascript
const item = ({ useCases }) => {
    return {
    // Item Get Controller
      get: (req, res) => {
      try {
      } catch (err) {
        console.log(err);
      },
    },
    // Item Put Controller
    put: (req, res) => {
      try {
      } catch (err) {
        console.log(err);
      },
    }
    }
  };
```

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
## 🍀 Hello World Route

http://localhost:5000/api

http://localhost:5000/api/user

