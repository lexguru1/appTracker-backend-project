"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      application.belongsTo(models.appList);
    }
  }
  application.init(
    {
      company: { type: DataTypes.STRING, allowNull: false },
      position: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      jd: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "application",
    }
  );
  return application;
};
