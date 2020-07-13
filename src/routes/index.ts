import controllers from "../controllers/index";

const {  user } = controllers;

const makeRoutes = (router: any) => {

  router.get("/user/:id", user.get);
  router.put("/user/:id", user.put);
  router.post("/user", user.post);
  router.delete("/user/:id", user.delete);


  return router;
};

export default makeRoutes;
