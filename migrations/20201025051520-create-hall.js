module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Halls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      courts: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.FLOAT(10, 6),
      },
      longitude: {
        type: Sequelize.FLOAT(10, 6),
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
    await queryInterface.dropTable('Halls');
  },
};
