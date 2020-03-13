import helloWorld from "./helloWorld/index";
import controllers from "../controllers/index";

const makeRoutes = (router: any) => {
    helloWorld(router, controllers);

  return router;
};

export default makeRoutes;
