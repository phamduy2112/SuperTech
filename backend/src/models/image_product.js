import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class image_product extends Model {
  static init(sequelize) {
  return super.init({
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image_one: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_two: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_three: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_four: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'image_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
