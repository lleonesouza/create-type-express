Type Express Server Generator

built with ❤ and:
Webpack || Typescript || Docker || Express || Jest

-------------

🍀 Layers:

Routes ⏪ Controllers ⏪ Use-Cases ⏪ ...

-------------

🍀 Curry Function Injecting useCases in Controllers Example:

const getHelloWorld = ({ useCases }: any) => {
    return async (req: any, res: any) => {
      try {
        res.send(useCases);
      } catch (err) {
        console.log(err);
      }
    };
  };

-------------
🍀 Get Development Started 

with Yarn:

➡ yarn dev
➡ yarn build
➡ yarn test

with Npm: 

➡ npm run dev
➡ npm run build
➡ npm run test

-------------
🍀 Deploy with Docker

To create an Docker Image -> 

➡ docker build -t typeexpress .

To run the Docker Image -> 

➡ docker run -p 5000:5000 --name typeexpress -d typeexpress

-------------
🍀 Hello World Route => 

http://localhost:5000/api

