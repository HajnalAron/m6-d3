import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const Product = sequelize.define("product", {
  id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, allowNull: false }
});

export default Product;
