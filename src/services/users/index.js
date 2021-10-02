import { Router } from "express";
import db from "../../db/models/relations.js";
import UserProduct from "../../db/models/UserProduct.js";

const { User, Product } = db;
const usersRouter = Router();

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await User.findAll({
      include: [Product],
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const product = await User.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.put("/:id", async (req, res, next) => {
  try {
    const product = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.send(product[1][0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await User.destroy({ where: { id: req.params.id } });
    res.status(200).send("User deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default usersRouter;
