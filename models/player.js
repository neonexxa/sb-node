const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      this.belongsTo(models.Room);
      this.belongsTo(models.User);
    }
  }
  Player.init({
    RoomId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
