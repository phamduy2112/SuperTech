import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class discount extends Model {
  static init(sequelize) {
  return super.init({
    discount_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discount_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    discount_date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    discount_date_end: {
      type: DataTypes.DATE,
      allowNull: false
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
