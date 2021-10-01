import { Router } from "express";
import db from "../../db/models/relations.js";

const { Product, Review } = db;
const reviewsRouter = Router();

reviewsRouter.get("/:id/reviews", async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    res.status(200).send(review);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.post("/:id/reviews", async (req, res, next) => {
  try {
    const review = await Review.create({
      ...req.body,
      productId: req.params.id
    });
    res.status(201).send(review);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.put("/:id/reviews", async (req, res, next) => {
  try {
    const review = await Review.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.send(review[1][0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.delete("/:id/reviews", async (req, res, next) => {
  try {
    const rows = await Review.destroy({ where: { id: req.params.id } });
    res.status(200).send("review deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default reviewsRouter;
