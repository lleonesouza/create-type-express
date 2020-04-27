const getHelloWorld = ({ useCases }: any) => {
    return async (req: any, res: any, next: any) => {
      try {
        res.send(useCases);
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export default getHelloWorld;
  