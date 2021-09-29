import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const Review = sequelize.define("review", {
  id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: false }
});

export default Review;
