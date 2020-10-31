module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Modes', [
      { name: 'Private', value: 'private' },
      { name: 'Public', value: 'public' },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Modes', null, {});
  },
};
