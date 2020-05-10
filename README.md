# Type Express Server Generator

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

built with:
Webpack || Typescript || Docker || Express || Jest

## Commons Layers Flow
###FlowChart

```flow
layer0=>operation: Controller
request=>start: Request
layer1=>operation: UseCases
layer2=>operation: Entities
e=>end:To admin

request->layer0->layer1->layer2
```

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

```shell
yarn install
yarn dev
yarn build
yarn test
```

or 

```shell
npm install
npm run dev
npm run build
npm run test
```

## 🍀 Build and run on Docker

To create an Docker Image -> 

➡ docker build -t typeexpress .

To run the Docker Image -> 

➡ docker run -p 5000:5000 --name typeexpress -d typeexpress

-------------
## 🍀 Hello World Route => 

http://localhost:5000/api

http://localhost:5000/api/user

