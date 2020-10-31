const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mode extends Model { }
  Mode.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mode',
  });
  return Mode;
};
