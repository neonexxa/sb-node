const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Matches', [{
      home_1: faker.random.number({ min: 1, max: 100 }),
      home_2: faker.random.number({ min: 1, max: 100 }),
      away_1: faker.random.number({ min: 1, max: 100 }),
      away_2: faker.random.number({ min: 1, max: 100 }),
      points: `21-${faker.random.number({ min: 1, max: 21 })},${faker.random.number({ min: 1, max: 21 })}-21,21-${faker.random.number({ min: 1, max: 21 })}`,
      matchAt: faker.date.past(2),
      RoomId: faker.random.number({ min: 1, max: 100 }),
    },
    ...[...Array(100)].map(() => ({
      home_1: faker.random.number({ min: 1, max: 100 }),
      home_2: faker.random.number({ min: 1, max: 100 }),
      away_1: faker.random.number({ min: 1, max: 100 }),
      away_2: faker.random.number({ min: 1, max: 100 }),
      points: `21-${faker.random.number({ min: 1, max: 21 })},${faker.random.number({ min: 1, max: 21 })}-21,21-${faker.random.number({ min: 1, max: 21 })}`,
      matchAt: faker.date.past(2),
      RoomId: faker.random.number({ min: 1, max: 100 }),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Matches', null, {}),
};
