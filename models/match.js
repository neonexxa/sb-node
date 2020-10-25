const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {
      this.belongsTo(models.Room);
    }
  }
  Match.init({
    home_1: DataTypes.INTEGER,
    home_2: DataTypes.INTEGER,
    away_1: DataTypes.INTEGER,
    away_2: DataTypes.INTEGER,
    points: DataTypes.STRING,
    matchAt: DataTypes.DATE,
    RoomId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};
