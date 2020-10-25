const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Halls', [{
      name: 'Badminton Hall Bangi',
      courts: '1,2,3,4,5',
      address: 'Bangi Avenue',
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    },
    ...[...Array(100)].map(() => ({
      name: faker.address.streetName(),
      courts: '1,2,3,4,5',
      address: faker.address.streetAddress(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Halls', null, {}),
};
