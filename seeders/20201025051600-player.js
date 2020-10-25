const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Players', [{
      RoomId: faker.random.number({ min: 1, max: 4 }),
      UserId: faker.random.number({ min: 1, max: 100 }),
      state: faker.random.arrayElement(['invited', 'applied', 'confirmed']),
    },
    ...[...Array(100)].map(() => ({
      RoomId: faker.random.number({ min: 1, max: 100 }),
      UserId: faker.random.number({ min: 1, max: 100 }),
      state: faker.random.arrayElement(['invited', 'applied', 'confirmed']),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Players', null, {}),
};
