const faker = require('faker');
const bcrypt = require('bcrypt');

const admin_user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync('password', bcrypt.genSaltSync()),
  raw_password: 'password',
  verifiedAt: '2020-10-01T04:07:29.000Z',
  phone: faker.phone.phoneNumber(),
  RoleId: 1,
};

const normal_user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync('password', bcrypt.genSaltSync()),
  raw_password: 'password',
  verifiedAt: '2020-10-01T04:07:29.000Z',
  phone: faker.phone.phoneNumber(),
  RoleId: 3,
};

const sample_hall = {
  name: 'zzzz',
  courts: '1,2,3,4,5',
  address: 'yyyy',
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
};

const sample_room = {
  name: 'zzz',
  duration: faker.random.number({ min: 1, max: 4 }),
  feature: faker.random.arrayElement(['fsc', 'fc', 'fs', 'split']),
  mode: faker.random.boolean() ? 'private' : 'public',
  player_count: Math.floor((Math.random() * 4) + 1),
  HallId: Math.floor((Math.random() * 4) + 1),
  playAt: faker.date.past(2),
};

const sample_player = {
  RoomId: faker.random.number({ min: 1, max: 4 }),
  UserId: faker.random.number({ min: 1, max: 100 }),
  state: faker.random.arrayElement(['invited', 'applied', 'confirmed']),
};

const sample_match = {
  home_1: faker.random.number({ min: 1, max: 100 }),
  home_2: faker.random.number({ min: 1, max: 100 }),
  away_1: faker.random.number({ min: 1, max: 100 }),
  away_2: faker.random.number({ min: 1, max: 100 }),
  points: `21-${faker.random.number({ min: 1, max: 21 })},${faker.random.number({ min: 1, max: 21 })}-21,21-${faker.random.number({ min: 1, max: 21 })}`,
  matchAt: faker.date.past(2),
  RoomId: faker.random.number({ min: 1, max: 100 }),
};

const sample_experience = {
  value: faker.random.number({ min: 1, max: 15 }),
  UserId: faker.random.number({ min: 1, max: 100 }),
  MatchId: faker.random.number({ min: 1, max: 100 }),
  state: faker.random.arrayElement(['win', 'lose']),
};

module.exports = {
  admin_user,
  normal_user,
  sample_hall,
  sample_room,
  sample_player,
  sample_match,
  sample_experience,
};
