'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CityList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CityList.init({
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    approved: DataTypes.STRING,
    approvedby: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CityList',
  });
  return CityList;
};