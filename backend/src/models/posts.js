import { Model, DataTypes } from 'sequelize';
export default class Posts extends Model {
  static init(sequelize) {
    return super.init({
      post_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      post_title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      post_date: {
        type: DataTypes.DATE,
        allowNull: false
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
