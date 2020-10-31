module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Features', [
      { name: 'Free Shuttle & Court', value: 'fsc' },
      { name: 'Free Court', value: 'fc' },
      { name: 'Free Shuttle', value: 'fs' },
      { name: 'Split', value: 's' },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Features', null, {});
  },
};
