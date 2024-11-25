import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class setting extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_setting: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title_website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    color_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logo_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    favicon_website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    popup_website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_autobank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_bank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    recharge_notice: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'setting',
    timestamps: false
  });
  }
}
