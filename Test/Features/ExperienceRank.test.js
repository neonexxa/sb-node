/* eslint-disable object-curly-spacing */
const db = require('../../models');
const { authenticated_get } = require('./chai-passport-user');
const {
  sample_hall, sample_room, sample_match, sample_experience,
} = require('./SampleData');

const demo_data = {};
describe('Experience Rank Test', () => {
  beforeEach(async () => {
    await db.Hall.destroy({ truncate: true });
    await db.Room.destroy({ truncate: true });
    await db.Match.destroy({ truncate: true });
    await db.Experience.destroy({ truncate: true });
    demo_data.hall = await db.Hall.create(sample_hall);
    demo_data.hall2 = await db.Hall.create(sample_hall);
    demo_data.room = await db.Room.create({ ...sample_room, HallId: demo_data.hall.id });
    demo_data.room2 = await db.Room.create({ ...sample_room, HallId: demo_data.hall.id });
    demo_data.room3 = await db.Room.create({ ...sample_room, HallId: demo_data.hall2.id });
    demo_data.match = await db.Match.create({ ...sample_match, RoomId: demo_data.room.id });
    demo_data.match2 = await db.Match.create({ ...sample_match, RoomId: demo_data.room2.id });
    demo_data.match3 = await db.Match.create({ ...sample_match, RoomId: demo_data.room3.id });
    demo_data.match4 = await db.Match.create({ ...sample_match, RoomId: demo_data.room3.id });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match.id, value: 5, state: 'win', UserId: 99,
    });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match2.id, value: 5, state: 'win', UserId: 99,
    });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match3.id, value: 3, state: 'lose', UserId: 99,
    });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match.id, value: 3, state: 'lose', UserId: 98,
    });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match2.id, value: 3, state: 'lose', UserId: 98,
    });
    await db.Experience.create({
      ...sample_experience, MatchId: demo_data.match3.id, value: 5, state: 'win', UserId: 97,
    });
  });
  it('Gets Experience All', async () => {
    const res = await authenticated_get('/api/experience');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.should.deep.equal({
      97: { wins: 1, exp_points: 5 },
      98: { wins: 0, exp_points: 6 },
      99: { wins: 2, exp_points: 13 },
    });
  });
  it('Gets Experience By Hall', async () => {
    const res = await authenticated_get(`/api/experience?HallId=${demo_data.hall2.id}`);
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.should.deep.equal({
      97: { wins: 1, exp_points: 5 },
      99: { wins: 0, exp_points: 3 },
    });
  });
  it('Gets Experience By Room', async () => {
    const res = await authenticated_get(`/api/experience?RoomId=${demo_data.room.id}`);
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.should.deep.equal({
      98: { wins: 0, exp_points: 3 },
      99: { wins: 1, exp_points: 5 },
    });
  });
});
