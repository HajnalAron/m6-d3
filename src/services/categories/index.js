import { Router } from "express";
import ProductCategory from "../../db/models/productCategory.js";
import db from "../../db/models/relations.js";

const { Category, Product } = db;
const categoriesRouter = Router();

categoriesRouter.get("/:id", async (req, res, next) => {
  try {
    const category = await Category.findAll({
      include: [Product],
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
categoriesRouter.get("/", async (req, res, next) => {
  try {
    console.log("teststs");
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

categoriesRouter.post("/", async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).send(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

categoriesRouter.post("/:id", async (req, res, next) => {
  try {
    const category = await Category.create({
      ...req.body
    });
    await ProductCategory.create({
      categoryId: category.id,
      productId: req.params.id
    });
    res.status(201).send(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

categoriesRouter.put("/:id", async (req, res, next) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.send(category[1][0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

categoriesRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).send("Category deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default categoriesRouter;
