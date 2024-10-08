import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class infor_product extends Model {
  static init(sequelize) {
  return super.init({
    infor_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    infor_screen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    infor_system: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    infor_cpu: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    infor_ram: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    infor_storage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    infor_more: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_product: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infor_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "infor_product" },
        ]
      },
    ]
  });
  }
}
