const faker = require('faker');
const helper = require('../helper');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Halls', [{
      name: 'Badminton Hall Bangi',
      courts: '1,2,3,4,5',
      address: 'Bangi Avenue',
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      images: faker.random.arrayElement([helper.getRandomImage(), '']),
    },
    ...[...Array(100)].map(() => ({
      name: faker.address.streetName(),
      courts: '1,2,3,4,5',
      address: faker.address.streetAddress(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      images: faker.random.arrayElement([helper.getRandomImage(), '']),
    })),
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Halls', null, {}),
};
