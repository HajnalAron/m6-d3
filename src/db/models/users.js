import sequelize from "../index.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const User = sequelize.define("user", {
  id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
  user_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});

export default User;
