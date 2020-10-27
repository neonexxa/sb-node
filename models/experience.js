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
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Experience',
  });

  Experience.withFilter = async (where) => {
    let query;
    const MatchM = {
      model: Experience.sequelize.models.Match,
      attributes: ['RoomId'],
      raw: true,
    };
    const RoomM = {
      model: Experience.sequelize.models.Room,
      attributes: ['HallId'],
      raw: true,
    };
    if (where.RoomId) {
      query = await Experience.findAll({
        include: [
          { ...MatchM, where, include: [RoomM] },
        ],
      });
    } else if (where.HallId) {
      const tmp = await Experience.findAll({
        include: [{ ...MatchM, include: [{ ...RoomM, where }] }],
      });
      query = tmp.filter(o => o.Match !== null);
    } else {
      query = await Experience.findAll({
        include: [{ ...MatchM, include: [RoomM] }],
      });
    }
    return query;
  };
  return Experience;
};
