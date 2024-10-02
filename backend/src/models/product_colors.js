import { Model, DataTypes } from 'sequelize';

export default class product_colors extends Model {
  static init(sequelize) {
    return super.init({
      color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      color: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      quanlity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'product_colors',
      timestamps: false
    });
  }
}
