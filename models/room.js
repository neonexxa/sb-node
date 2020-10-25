const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      this.belongsTo(models.Hall);
    }
  }
  Room.init({
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    feature: DataTypes.STRING,
    mode: DataTypes.STRING,
    player_count: DataTypes.INTEGER,
    HallId: DataTypes.INTEGER,
    playAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
