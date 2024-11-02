import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class products extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    product_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    product_star: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_hot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'image_product',
        key: 'image_id'
      },

    },
    infor_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infor_product',
        key: 'infor_product'
      },
onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'category_id'
      },

    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false
  });
}
}