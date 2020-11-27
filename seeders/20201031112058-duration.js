module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Durations', [
      { name: '1 Hour', value: 1 },
      { name: '2 Hour', value: 2 },
      { name: '3 Hour', value: 3 },
      { name: '4 Hour', value: 4 },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Durations', null, {});
  },
};
