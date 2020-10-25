const db = require('../../models');
const { authenticated_get, authenticated_post } = require('./chai-passport-user');
const { sample_room } = require('./SampleData');

async function self_factory(sample_data, quantity = 1) {
  const many_data = [];
  const data = sample_data;
  for (let i = 0; i < quantity; i++) {
    many_data.push(data);
  }
  await db.Room.bulkCreate(many_data);
}

describe('Room Test', () => {
  it('Gets Room', async () => {
    await db.Room.destroy({ truncate: true });
    await self_factory(sample_room, 5);
    const res = await authenticated_get('/api/room');
    res.should.have.status(200);
    res.body.should.have.property('data');
    res.body.data.length.should.equal(5);
  });

  it('Creates Room', async () => {
    const res = await authenticated_post(
      '/api/room',
      {
        data: { input: sample_room },
      },
    );
    res.should.have.status(200);
  });

  it('Update Room', async () => {
    const room = await db.Room.create(sample_room);
    const res = await authenticated_post(
      `/api/room/${room.id}`,
      {
        data: { input: { player_count: 99 } },
      },
    );
    res.should.have.status(200);
    await room.reload();
    room.player_count.should.equal(99);
  });
});
