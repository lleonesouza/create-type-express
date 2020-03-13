const helloworld = (
    router: any,
    { getHelloWorld }: any,
  ) => {
    // PUBLIC ROUTE
    // DESCRIPTION: initial hello world route
    // URL: /api
    router.get("/", getHelloWorld);
  
  }
  
  export default helloworld;
  