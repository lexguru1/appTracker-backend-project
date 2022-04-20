"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      appList.belongsTo(models.user);
      appList.hasMany(models.application);
    }
  }
  appList.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "appList",
    }
  );
  return appList;
};
