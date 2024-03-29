import { Router } from "express";
import ProductCategory from "../../db/models/productCategory.js";
import db from "../../db/models/relations.js";

const { Product, Review, Category } = db;
const productsRouter = Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: [Review, Category] });
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findAll({
      include: [Review, Category],
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

productsRouter.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.update(req.body, {
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

productsRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Product.destroy({ where: { id: req.params.id } });
    res.status(200).send("Product deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productsRouter;
