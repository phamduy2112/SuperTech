import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class comment_posts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comment_post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'post_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'comment_posts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comment_post_id" },
        ]
      },
      {
        name: "fk_postid_post",
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
      {
        name: "fk_userid_user",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
