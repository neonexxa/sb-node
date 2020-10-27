const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Experiences', [{
      state: faker.random.arrayElement(['win', 'lose']),
      value: faker.random.number({ min: 1, max: 15 }),
      UserId: faker.random.number({ min: 1, max: 100 }),
      MatchId: faker.random.number({ min: 1, max: 100 }),
    },
    ...[...Array(100)].map(() => ({
      state: faker.random.arrayElement(['win', 'lose']),
      value: faker.random.number({ min: 1, max: 15 }),
      UserId: faker.random.number({ min: 1, max: 100 }),
      MatchId: faker.random.number({ min: 1, max: 100 }),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Experiences', null, {}),
};
