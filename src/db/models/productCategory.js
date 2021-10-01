import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const ProductCategory = sequelize.define("productCategory", {
  id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true }
});

export default ProductCategory;
