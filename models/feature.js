const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feature extends Model { }
  Feature.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};
