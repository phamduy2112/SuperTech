import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class discount extends Model {
  static init(sequelize) {
  return super.init({
    discount_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    discount_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    condition: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    discount_date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    discount_date_end: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "discount_id" },
        ]
      },
    ]
  });
  }
}
