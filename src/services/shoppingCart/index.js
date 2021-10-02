import { Router } from "express";
import sequelize from "../../db/index.js";
import db from "../../db/models/relations.js";
import UserProduct from "../../db/models/UserProduct.js";

const { User, Product } = db;
const shoppingCartRouter = Router();

shoppingCartRouter.post("/", async (req, res, next) => {
  try {
    const shoppingCartEntry = await UserProduct.create(req.body);
    res.status(201).send(shoppingCartEntry);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

shoppingCartRouter.get("/:userId", async (req, res, next) => {
  try {
    const data = await UserProduct.findAll({
      where: { userId: req.params.userId },
      include: Product,
      attributes: ["productId"]
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default shoppingCartRouter;
