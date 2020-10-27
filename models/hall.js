const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hall extends Model { }
  Hall.init({
    name: DataTypes.STRING,
    courts: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    images: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Hall',
  });
  return Hall;
};
