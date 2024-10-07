import { Model, DataTypes } from 'sequelize';
export default class Posts extends Model {
  static init(sequelize) {
    return super.init({
      post_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      post_title: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      post_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'posts',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "post_id" },
          ]
        },
      ]
    });
  }
}
