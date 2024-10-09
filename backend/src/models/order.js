import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class order extends Model {
  static init(sequelize) {
  return super.init({
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    order_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pay_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pay',
        key: 'pay_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'discount',
        key: 'discount_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "fk_payid_pay",
        using: "BTREE",
        fields: [
          { name: "pay_id" },
        ]
      },
      {
        name: "fk_userid_user",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_discountid_discount",
        using: "BTREE",
        fields: [
          { name: "discount_id" },
        ]
      },
    ]
  });
  }
}
