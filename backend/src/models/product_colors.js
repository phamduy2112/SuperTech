import { Model, DataTypes } from 'sequelize';

export default class product_colors extends Model {
  static init(sequelize) {
    return super.init({
      color_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      color: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      quality: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'product_colors',
      timestamps: false
    });
  }
}
