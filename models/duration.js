const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Duration extends Model { }
  Duration.init({
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Duration',
  });
  return Duration;
};
