import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _banner from  "./banner.js";
import _categories from  "./categories.js";
import _chat from  "./chat.js";
import _comment_posts from  "./comment_posts.js";
import _comment_product from  "./comment_product.js";
import _detail_order from  "./detail_order.js";
import _discount from  "./discount.js";
import _favorite_product from  "./favorite_product.js";
import _image_product from  "./image_product.js";
import _infor_product from  "./infor_product.js";
import _media_post from  "./media_post.js";
import _order from  "./order.js";
import _pay from  "./pay.js";
import _posts from  "./posts.js";
import _product_colors from  "./product_colors.js";
import _products from  "./products.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const banner = _banner.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const chat = _chat.init(sequelize, DataTypes);
  const comment_posts = _comment_posts.init(sequelize, DataTypes);
  const comment_product = _comment_product.init(sequelize, DataTypes);
  const detail_order = _detail_order.init(sequelize, DataTypes);
  const discount = _discount.init(sequelize, DataTypes);
  const favorite_product = _favorite_product.init(sequelize, DataTypes);
  const image_product = _image_product.init(sequelize, DataTypes);
  const infor_product = _infor_product.init(sequelize, DataTypes);
  const media_post = _media_post.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const pay = _pay.init(sequelize, DataTypes);
  const posts = _posts.init(sequelize, DataTypes);
  const product_colors = _product_colors.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  order.belongsTo(discount, { as: "discount_discount", foreignKey: "discount"});
  discount.hasMany(order, { as: "orders", foreignKey: "discount"});
  products.belongsTo(image_product, { as: "image", foreignKey: "image_id"});
  image_product.hasMany(products, { as: "products", foreignKey: "image_id"});
  products.belongsTo(infor_product, { as: "infor_product_infor_product", foreignKey: "infor_product"});
  infor_product.hasMany(products, { as: "products", foreignKey: "infor_product"});
  detail_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(detail_order, { as: "detail_orders", foreignKey: "order_id"});
  order.belongsTo(pay, { as: "pay", foreignKey: "pay_id"});
  pay.hasMany(order, { as: "orders", foreignKey: "pay_id"});
  comment_posts.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(comment_posts, { as: "comment_posts", foreignKey: "post_id"});
  media_post.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(media_post, { as: "media_posts", foreignKey: "post_id"});
  comment_product.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(comment_product, { as: "comment_products", foreignKey: "product_id"});
  detail_order.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(detail_order, { as: "detail_orders", foreignKey: "product_id"});
  favorite_product.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(favorite_product, { as: "favorite_products", foreignKey: "product_id"});
  chat.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(chat, { as: "chats", foreignKey: "user_id"});
  comment_posts.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(comment_posts, { as: "comment_posts", foreignKey: "user_id"});
  comment_product.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(comment_product, { as: "comment_products", foreignKey: "user_id"});
  favorite_product.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(favorite_product, { as: "favorite_products", foreignKey: "user_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});
  pay.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(pay, { as: "pays", foreignKey: "user_id"});

  return {
    banner,
    categories,
    chat,
    comment_posts,
    comment_product,
    detail_order,
    discount,
    favorite_product,
    image_product,
    infor_product,
    media_post,
    order,
    pay,
    posts,
    product_colors,
    products,
    user,
  };
}
