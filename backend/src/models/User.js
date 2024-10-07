import _sequelize from 'sequelize';
const { Model, DataTypes } = _sequelize;

export default class user extends Model {
  static init(sequelize) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_image: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_role: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
