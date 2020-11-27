module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Nops', [
      { name: '4', value: 4 },
      { name: '8', value: 8 },
      { name: '10', value: 10 },
      { name: '15', value: 15 },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Nops', null, {});
  },
};
