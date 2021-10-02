import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { connectDB } from "./db/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";
import categoriesRouter from "./services/categories/index.js";
import usersRouter from "./services/users/index.js";
import shoppingCartRouter from "./services/shoppingCart/index.js";

const server = express();

const { PORT = 5000 } = process.env;

server.use(cors());
server.use(express.json());
server.use("/categories", categoriesRouter);
server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);
server.use("/users", usersRouter);
server.use("/shoppingCart", shoppingCartRouter);

server.listen(PORT, async () => {
  console.log("Server is listening on port" + PORT);
  await connectDB();
  console.table(listEndpoints(server));
});

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});
