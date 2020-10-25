module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_1: {
        type: Sequelize.INTEGER,
      },
      home_2: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      away_1: {
        type: Sequelize.INTEGER,
      },
      away_2: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      points: {
        type: Sequelize.STRING,
      },
      matchAt: {
        type: Sequelize.DATE,
      },
      RoomId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Matches');
  },
};
