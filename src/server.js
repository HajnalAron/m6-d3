import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { connectDB } from "./db/index.js";
import productsRouter from "./services/products/index.js";

const server = express();

const { PORT = 5000 } = process.env;

server.use(cors());
server.use(express.json());
server.use("/products", productsRouter);

server.listen(PORT, async () => {
  console.log("Server is listening on port" + PORT);
  await connectDB();
});

listEndpoints(server);

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});
