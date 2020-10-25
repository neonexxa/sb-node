const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    static associate(models) {
      this.belongsTo(models.Match);
      this.belongsTo(models.User);
    }
  }
  Experience.init({
    value: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    MatchId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};
