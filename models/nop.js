const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nop extends Model { }
  Nop.init({
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Nop',
  });
  return Nop;
};
