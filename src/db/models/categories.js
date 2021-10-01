import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;
const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Category;
