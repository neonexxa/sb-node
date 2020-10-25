const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Rooms', [{
      name: 'Badminton Hall Bangi Challenge',
      duration: faker.random.number({ min: 1, max: 4 }),
      feature: faker.random.arrayElement(['fsc', 'fc', 'fs', 'split']),
      mode: faker.random.boolean() ? 'private' : 'public',
      player_count: Math.floor((Math.random() * 4) + 1),
      HallId: Math.floor((Math.random() * 4) + 1),
      playAt: faker.date.past(2),
    },
    ...[...Array(100)].map(() => ({
      name: faker.address.streetName(),
      duration: faker.random.number({ min: 1, max: 4 }),
      feature: faker.random.arrayElement(['fsc', 'fc', 'fs', 'split']),
      mode: faker.random.boolean() ? 'private' : 'public',
      player_count: Math.floor((Math.random() * 4) + 1),
      HallId: Math.floor((Math.random() * 4) + 1),
      playAt: faker.random.boolean() ? null : faker.date.past(2),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Rooms', null, {}),
};
