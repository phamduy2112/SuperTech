import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class infor_product extends Model {
  static init(sequelize) {
  return super.init({
    infor_product: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    infor_screen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    infor_system: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    infor_cpu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    infor_ram: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    infor_storage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    infor_more: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image_product: {
      type: DataTypes.STRING(50),
      allowNull: true
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