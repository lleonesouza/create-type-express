import { NextFunction, Response, Request } from "express";
import { user } from "../use-cases";

const makeUserController = () => {
  return {
    get: async (req: Request, res: Response, {}: NextFunction) => {
      try {
        const { id } = req.params;
        const _user = user.getById(id);
        res.send(`<h1> ${JSON.stringify(_user)} <h1/>`);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
    put: async (req: Request, res: Response, {}: NextFunction) => {
      try {
        const { id } = req.params;
        const { email, name } = req.body;
        const _user = user.update({ id, name, email });
        res.send(`<h1> ${JSON.stringify(_user)} <h1/>`);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
    post: async (req: Request, res: Response, {}: NextFunction) => {
      try {
        const { email, name } = req.body;
        const _user = user.create({ name, email, active: true });
        res.send(`<h1> ${JSON.stringify(_user)} <h1/>`);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
    delete: async (req: Request, res: Response, {}: NextFunction) => {
      try {
        const { id } = req.params;
        const _user = user.update({ id, active: false });
        res.send(`<h1> ${JSON.stringify(_user)} <h1/>`);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
  };
};
export default makeUserController;
