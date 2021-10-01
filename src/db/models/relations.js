import Product from "./products.js";
import Review from "./reviews.js";
import Category from "./categories.js";
import ProductCategory from "./productCategory.js";

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

export default { Product, Review, Category };
