import Product from "./products.js";
import Review from "./reviews.js";
import Category from "./categories.js";
import User from "./users.js";
import ProductCategory from "./productCategory.js";
import sequelize from "../index.js";
import UserProduct from "./UserProduct.js";

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Category, {
  through: {
    model: ProductCategory,
    unique: false
  }
});

Category.belongsToMany(Product, {
  through: {
    model: ProductCategory,
    unique: false
  }
});

Product.belongsToMany(User, {
  through: {
    model: UserProduct,
    unique: false
  }
});

User.belongsToMany(Product, {
  through: {
    model: UserProduct,
    unique: false
  }
});

Product.hasMany(UserProduct);
UserProduct.belongsTo(Product);

export default { Product, Review, Category, User };
