import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const UserProduct = sequelize.define("shoppingCartItem", {
  id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true }
});

export default UserProduct;
